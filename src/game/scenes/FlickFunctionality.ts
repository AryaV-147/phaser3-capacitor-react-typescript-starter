import Phaser from 'phaser';

export default class FlickFunctionality extends Phaser.Scene {
    constructor() {
        super(
            {
                key: 'FlickFunctionality'
            }
        )
    }

    preload() {
        this.load.image(
            'Sprite1',
            './assets/samplesceneassets/phaser3-logo-alpha.png'
        );

        this.load.spine(
            'SpineSample',
            './assets/samplesceneassets/firefly_rotated_export/skeleton.json',
            './assets/samplesceneassets/firefly_rotated_export/skeleton.atlas'
        );

        this.load.image(
            'BackgroundImage',
            './assets/samplesceneassets/bg2.png'
        );
    }

    text: Phaser.GameObjects.Text;
    image: any;
    spine: any;
    spinePhysicsBody: any;

    width: number = 1920;
    height: number = 1080;

    backgroundImage: any;

    create() {
        console.log("Within the Flick Functionality Script");

        this.backgroundImage = this.add.sprite(0, 0, 'BackgroundImage').setOrigin(0, 0);

        this.backgroundImage.displayWidth = this.sys.canvas.width;
        this.backgroundImage.displayHeight = this.sys.canvas.height;

        this.input.keyboard.on('keydown-Q', () => {
            goFullScreen(this);
        });


        function goFullScreen(scene: any) {
            if (scene.scale.isFullscreen) {
                scene.scale.stopFullscreen();
            } else {
                scene.scale.startFullscreen();
            }
        }

        // Add the text of the mouse pointer debug
        this.text = this.add.text(100, 100, 'Move the mouse', { font: '16px Courier' });

        // // Add the image as a physics object
        // this.image = this.physics.add.image(this.width / 2, this.height / 2, 'Sprite1')
        //     .setCollideWorldBounds(true)
        //     .setBounceX(0.1)
        //     .setBounceY(0.1)
        //     .setDamping(true)
        //     .setMass(5);

        // Adding a drag to the image to make the image come to rest after being applied by certain velocity
        const dragValue = 0.1;
        // this.image.body.setDrag(dragValue);

        // this.setObjectDraggable(this.image);

        // Spine Object Trial
        this.spine = this.add.spine(this.width / 2, this.height / 2, 'SpineSample', 'butterfly-fly', true).setScale(1);

        this.spinePhysicsBody = this.physics.add.existing(this.spine);
        console.log(this.spinePhysicsBody);

        this.spinePhysicsBody.body.setCollideWorldBounds(true)
            .setBounceX(0.1)
            .setBounceY(0.1)
            .setDamping(true)
            .setMass(5);

        this.spinePhysicsBody.body.setDrag(dragValue);
        this.setObjectDraggable(this.spinePhysicsBody);

        // const sampleContainer: any = this.add.container(this.width / 2, this.height / 2);
        // console.log("Body Sample Conatiner", sampleContainer.body);

        // const body = this.spine as Phaser.Physics.Arcade.Body;



    }

    setObjectDraggable = (object: any) => {
        object.setInteractive({ draggable: true });

        let dragStartTime: any = null;
        let dragStartX: number = -999;
        let dragStartY: number = -999;

        object.on('dragstart', (pointer: { x: number; y: number; event: { timeStamp: any; }; }) => {
            console.log("Drag Start Event Called");
            this.children.bringToTop(object);

            object.body.setVelocity(0, 0);
            object.body.setAcceleration(0, 0);
            dragStartX = pointer.x;
            dragStartY = pointer.y;

            dragStartTime = pointer.event.timeStamp;
            // const dragStartX = pointer.x;
            // const dragStartY = pointer.y;
            object.state.timeScale = 0;
        });

        object.on('drag', (pointer: any, dragX: any, dragY: any) => {
            object.x = dragX;
            object.y = dragY;
        });

        object.on('dragend', (pointer: { velocity: { x: any; y: any; }; event: { timeStamp: any; }; x: number; y: number; }) => {
            object.state.timeScale = 1;
            console.log("Drag End Event Occured");
            console.log(`The velocity of the gameObject at drag end is, X : ${object.body.velocity.x}, Y : ${object.body.velocity.y}`);
            console.log(`The velocity of the pointer at drag end is, X : ${pointer.velocity.x}, Y : ${pointer.velocity.y}`);
            // Calculate the time difference (in milliseconds) between drag start and end
            const dragEndTime = pointer.event.timeStamp;
            const timeDifference = dragEndTime - dragStartTime;

            console.log("Time Difference is :: ", timeDifference);

            // Calculate the distance traveled by the pointer (distance formula)
            const deltaX = pointer.x - dragStartX;
            const deltaY = pointer.y - dragStartY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // Calculate the velocity as distance per millisecond
            const velocityX = deltaX / timeDifference;
            const velocityY = deltaY / timeDifference;

            console.log(`Pointer velocity: X: ${velocityX}, Y: ${velocityY}`);

            // Get the pointer's velocity
            let phaserPointerVelocityX = pointer.velocity.x;
            let phaserPointerVelocityY = pointer.velocity.y;

            // Calculate the angle of the velocity using Math.atan2()
            const angleToRotate = Phaser.Math.RadToDeg(Math.atan2(phaserPointerVelocityX, phaserPointerVelocityY));

            // Get the current angle of the object 
            const currentAngle = object.angle;

            let differenceInAngle = angleToRotate - currentAngle;

            if (differenceInAngle < -180) {
                differenceInAngle += 360;
            }
            else if (differenceInAngle > 180) {
                differenceInAngle -= 360;
            }


            let totalVelocity = Math.sqrt(phaserPointerVelocityX * phaserPointerVelocityX + phaserPointerVelocityY * phaserPointerVelocityY);
            console.log("The total velocity calculated is :: ", totalVelocity);

            let minimumDistanceThresholdX: number = 200;
            let minimumDistanceThresholdY: number = 150;

            let minimumForceThreshold: number = 20;
            let forceMagnitude: number = 1000;

            if (
                Math.abs(deltaX) < minimumDistanceThresholdX
                && Math.abs(deltaY) < minimumDistanceThresholdY
                && totalVelocity > minimumForceThreshold
                && timeDifference < 500
            ) {
                object.body.setVelocity(velocityX * forceMagnitude, velocityY * forceMagnitude);
                object.setRotation(currentAngle + differenceInAngle);
            }

            dragStartX = -999;
            dragStartY = -999;
        });
    }

    update(time: number, delta: number): void {
        const pointer = this.input.activePointer;

        this.text.setText([
            `x: ${pointer.x}`,
            `y: ${pointer.y}`,
            `velocity x: ${pointer.velocity.x}`,
            `velocity y: ${pointer.velocity.y}`,
            `Object's velocity x: ${this.spinePhysicsBody?.body.velocity.x}`,
            `Object's velocity y: ${this.spinePhysicsBody?.body.velocity.y}`,
        ]);
    }

    AddSpineBody = (
        x: number,
        y: number,
        key: string,
        anim: string,
        timeScale: number,
        loop = false,
    ): Phaser.GameObjects.Container | any => {

        let spineObj: SpineGameObject;
        let spineContainer: any = this.add.container(x, y);
        spineObj = this.add.spine(x, y, key);
        spineObj.play(anim, loop);

        const bounds = spineObj.getBounds();
        const width = bounds.size.x;
        const height = bounds.size.y;
        setPhysicsSize(width, height);

        // spineContainer.add(spineObj);

        function setPhysicsSize(width: number, height: number) {
            const body = spineContainer.body as Phaser.Physics.Arcade.Body;
            console.log(spineContainer);

            body.setOffset(width * -0.5, -height)
            body.setSize(width, height)
        }
    }
}

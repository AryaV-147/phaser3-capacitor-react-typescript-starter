import Phaser from 'phaser';

export default class PathDrawingScene extends Phaser.Scene {
    constructor() {
        super(
            {
                key: 'PathDrawingScene'
            })
    }

    preload() {
        this.load.spine(
            'firefly',
            './assets/samplesceneassets/firefly_rotated_export/skeleton.json',
            './assets/samplesceneassets/firefly_rotated_export/skeleton.atlas'
        );

        this.load.image(
            'ball',
            './assets/samplesceneassets/shinyball.png'
        );

        this.load.image(
            'backbutton',
            './assets/samplesceneassets/backbutton.png'
        );

        this.load.spritesheet(
            'dragcircle',
            './assets/samplesceneassets/dragcircle.png',
            { frameWidth: 16 }
        );

        this.load.image(
            'saveIcon',
            './assets/samplesceneassets/saveButton.png'
        );

        this.load.image(
            'logoAlpha',
            './assets/samplesceneassets/phaser3-logo-alpha.png'
        );

        this.load.json(
            'sampleFireFlyMove',
            './assets/samplesceneassets/player.json'
        );

        this.load.atlas('flares', 'assets/samplesceneassets/flares.png', 'assets/samplesceneassets/flares.json');

        this.load.image(
            'BackgroundImage1',
            './assets/samplesceneassets/Background.png'
        );

        this.load.image(
            'dragArea',
            './assets/samplesceneassets/dragendArea.png'
        );

        this.load.image(
            'backButton',
            './assets/samplesceneassets/backbutton.png'
        );
    }

    private parts: any = 8;
    private path: any;
    private samplePath: any;
    private curve: any;
    private handles: any;
    private graphics: any;
    private ball: any;
    private ballContainer: any;
    private ball1: any;
    private stopMovement: boolean = false;
    private savePathButton: any;
    private pathTween: any;
    private line: any;
    private backbutton: any;


    private backgroundImage: any;
    private dragEndArea: any;

    private fireFlyPathToSave: any = {
        points: [],
        angles: []
    };

    private jsonData: any = {};

    create() {

        // this.backbutton = this.add.sprite(100, 100, 'backButton').setInteractive().setDepth(10).setScale(0.5);

        // this.backbutton.on('pointerdown', () => {

        //     this.loadScene('Example');
        // })

        // TODO : Add a button to start moving the firefly on the path and save the path in a json file
        // TODO : Write a function that will save the path along with rotation
        this.ball = this.add.spine(this.sys.canvas.width / 2, 300, 'firefly').setDepth(10).setInteractive({ draggable: true }).setScale(0.35);
        this.ball.play('animation', true);
        this.ball.setAngle(90);
        let originalX = 0;
        let originalY = 0;

        this.backgroundImage = this.add.sprite(0, 0, 'BackgroundImage1').setOrigin(0, 0);

        this.backgroundImage.displayWidth = this.sys.canvas.width;
        this.backgroundImage.displayHeight = this.sys.canvas.height;

        this.dragEndArea = this.add.sprite(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'dragArea').setDepth(1);
        this.dragEndArea.scaleX = 1.75;
        this.dragEndArea.scaleY = 1.5;


        //  A drop zone
        // const zone = this.add.zone(500, 300, 300, 300).setRectangleDropZone(300, 300);

        // //  Just a visual display of the drop zone
        // this.graphics = this.add.graphics();
        // this.graphics.lineStyle(2, 0xffff00);
        // this.graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

        // this.input.on('drop', (pointer: any, gameObject: { x: any; y: any; input: { enabled: boolean; }; }, dropZone: { x: any; y: any; }) => {

        //     gameObject.x = dropZone.x;
        //     gameObject.y = dropZone.y;

        //     gameObject.input.enabled = false;

        // });

        //for rotate functionality
        this.line = new Phaser.Geom.Line(900, 400, 700, 300);


        // for particle emitter
        // const particleemitter = this.add.particles(400, 1000, 'flares', {
        //     frame: ['red', 'yellow', 'green'],
        //     lifespan: 4000,
        //     speed: { min: 150, max: 250 },
        //     scale: { start: 0.8, end: 0 },
        //     gravityY: 150,
        //     blendMode: 'ADD',
        //     emitting: false
        // });

        // this.input.on('pointerdown', function (pointer: any) {

        //     // Log the coordinates of the touch
        //     particleemitter.explode(16);


        //     console.log('Touch coordinates: (' + pointer.worldX + ', ' + pointer.worldY + ')');

        // }, this);


        //for physics property
        // const logo = this.physics.add.image(2000, 400, 'logoAlpha').setImmovable(true);

        //  In this example the new collision box is much larger than the original sprite

        //  220x104 original size, 300x400 new size, the 'true' argument means "center it on the gameobject"
        // logo.setSize(500, 160);

        //  And this sprite will collide with it
        // const ball3 = this.physics.add.image(2100, 70, 'ball');

        // ball3.setVelocity(0, 100);

        // this.physics.add.collider(logo, [ball3]);

        // var phaserJSON = this.cache.json.get('sampleFireFlyMove');

        // let currentAngle = (phaserJSON.angles.length > 0) ? phaserJSON.angles[0] : 0;

        // for (let i = 0; i < phaserJSON.points.length; i++) {
        //     console.log('loop index : ', i, "phaserJSON.angles[i] " , phaserJSON.angles[i], "x : ", phaserJSON.points[i].x
        //     , " y : ", phaserJSON.points[i].y);
        //     let differenceInAngle = phaserJSON.angles[i] - currentAngle;

        //     if (differenceInAngle < -180) {
        //         differenceInAngle += 360;
        //     }
        //     else if (differenceInAngle > 180) {
        //         differenceInAngle -= 360
        //     }

        //     tweenTimeline.add({
        //         targets: this.ball,
        //         x: phaserJSON.points[i].x,
        //         y: phaserJSON.points[i].y,
        //         angle: currentAngle + differenceInAngle,
        //         duration: 1000,
        //     });
        //     currentAngle = phaserJSON.angles[i];
        // }
        // tweenTimeline.play();
        // tweenTimeline.loop = -1;

        // console.log("JSON :: ", phaserJSON);

        this.savePathButton = this.add.sprite(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'saveIcon').setDepth(2.5);
        this.savePathButton.setInteractive();
        this.savePathButton.setScale(0.1);
        var tweens;
        this.savePathButton.on('pointerdown', function () {
            console.log("Save Button Was Clicked");
            console.log(tween);
            self.pathTween = { t: 0, vec: new Phaser.Math.Vector2() };
            self.pathTween.t = 0;
            let initialX = self.curve.points[0].x;
            let initialY = self.curve.points[0].y;

            var tweenSave = self.tweens.add({
                targets: [self.pathTween],
                t: 1,
                onUpdate() {
                    self.curve.getPoint(self.pathTween.t, self.pathTween.vec);
                    console.log("The point is :: ", self.pathTween.vec);
                    var angle = Phaser.Math.Angle.Between(initialX, initialY, self.pathTween.vec.x, self.pathTween.vec.y);
                    console.log("Angle is :: ", angle);
                    self.fireFlyPathToSave.points.push({ x: self.pathTween.vec.x, y: self.pathTween.vec.y });
                    self.fireFlyPathToSave.angles.push(angle * (180.0 / Math.PI));
                    initialX = self.pathTween.vec.x;
                    initialY = self.pathTween.vec.y;
                    self.jsonData = JSON.stringify(self.fireFlyPathToSave);

                    console.log("Json data : ", self.jsonData);
                },
                onComplete() {
                    // TODO :: Saving Logic, write data to the json file and read the data from the json file and apply movement
                    // to the firefly.
                    // TOCheck :: Drag and Drop functionality in the firefly which is being rotated at the movement.
                    // TOCheck :: Pause the timeline of the firefly on drag.

                    var data = JSON.parse(self.jsonData);
                    let currentAngle = (data.angles.length > 0) ? data.angles[0] : 0;

                    // var tweenTimeline = self.tweens.createTimeline();

                    for (let i = 0; i < data.points.length; i++) {
                        let differenceInAngle = data.angles[i] - currentAngle;

                        if (differenceInAngle < -180) {
                            differenceInAngle += 360;
                        }
                        else if (differenceInAngle > 180) {
                            differenceInAngle -= 360
                        }

                        // tweenTimeline.add({
                        //     targets: self.ball,
                        //     x: data.points[i].x,
                        //     y: data.points[i].y,
                        //     angle: currentAngle + differenceInAngle,
                        //     duration: 100,

                        // });
                        currentAngle = data.angles[i];
                    }
                    // tweenTimeline.play();
                }
            });
        });

        this.savePathButton.on('pointerup', () => {
            console.log("Pointer Up");

        });

        var self = this;

        //  Create our own EventEmitter instance
        // var emitter = new Phaser.Events.EventEmitter();

        // //  Set-up an event handler
        // emitter.on('addImage', this.handler, this);

        // //  Emit it a few times with varying arguments
        // emitter.emit('addImage', 200, 400);
        // emitter.emit('addImage', 400, 500);
        // emitter.emit('addImage', 600, 600);


        // check pixel perfect
        // const sprite2 = this.add.sprite(400, 700, 'logoAlpha').setInteractive(this.input.makePixelPerfect(100));

        // sprite2.angle = 22;
        // sprite2.setScale(1.4);

        // this.input.setDraggable([sprite1, sprite2]);

        // for dragging ball
        // this.ball1 = this.add.sprite(600, 500, 'ball').setDepth(10).setInteractive({ dragabble: true });

        // this.input.setDraggable([this.ball1, sprite2]);

        // this.input.on('dragstart', function (pointer: any, gameObject: any) {

        //     this.children.bringToTop(gameObject);

        // }, this);

        // this.input.on('drag', (pointer: any, gameObject: { x: any; y: any; }, dragX: any, dragY: any) => {

        //     gameObject.x = dragX;
        //     gameObject.y = dragY;

        // });

        this.handles = this.add.group();


        this.path = { t: 0, vec: new Phaser.Math.Vector2(this.sys.canvas.width / 2, 300) };

        this.curve = new Phaser.Curves.Spline([new Phaser.Math.Vector2(this.sys.canvas.width / 2, 300)]);
        //this.curve.addPoint();

        var tween = this.tweens.add({
            targets: this.path,
            t: 1,
            ease: 'Sine.easeInOut',
            duration: 10000,
            repeat: -1
        });

        var createPointHandle = function (point: { x: any; y: any; }) {
            var handle = self.handles.create(point.x, point.y, 'dragcircle', 0).setInteractive();
            handle.setData('vector', point);
            self.input.setDraggable(handle);
        };

        createPointHandle(this.curve.points[0]);

        this.input.on('pointerdown', function (pointer: { x: any; y: any; }, gameObjects: string | any[]) {

            //  Check we didn't click an existing handle
            if (gameObjects.length > 0) {
                return;
            }

            var vec = self.curve.addPoint(pointer.x, pointer.y);

            createPointHandle(vec);

            self.parts += 8;
            // if (self.curve.points.length > 10) {
            //     self.curve.addPoint(self.curve.points[0].x, self.curve.points[0].y);
            // }
            tween.stop();

            self.path.t = 0;

            tween = self.tweens.add({
                targets: [self.path],
                t: 1,
                ease: 'Linear',
                duration: 500 * (self.curve.points.length + 1),
                repeat: -1,
                onUpdate() {
                    self.curve.getPoint(self.path.t, self.path.vec);
                    let currentAngle = self.ball.angle;
                    let angle = Phaser.Math.Angle.Between(self.ball.x, self.ball.y, self.path.vec.x, self.path.vec.y);
                    let differenceInAngle = (angle * (180 / Math.PI)) - currentAngle;
                    if (differenceInAngle < -180) {
                        differenceInAngle += 360;
                    }
                    else if (differenceInAngle > 180) {
                        differenceInAngle -= 360
                    }
                    let angleToRotate = (currentAngle + differenceInAngle) / (180 / Math.PI);
                    self.ball.setPosition(self.path.vec.x, self.path.vec.y);
                    self.ball.setRotation(angleToRotate);
                },
                // onComplete() {
                //     let currentAngle = self.ball.angle;
                //     let angle = Phaser.Math.Angle.Between(self.ball.x, self.ball.y, self.curve.points[0].x, self.curve.points[0].y);
                //     let differenceInAngle = (angle * (180 / Math.PI)) - currentAngle;
                //     console.log("Angle is :: ", angle, "difference : ", differenceInAngle, "current angle :: ", currentAngle);
                //     if (differenceInAngle < -180) {
                //         differenceInAngle += 360;
                //     }
                //     else if (differenceInAngle > 180) {
                //         differenceInAngle -= 360
                //     }
                //     self.tweens.add({
                //         targets: [self.ball],
                //         x: self.curve.points[0].x,
                //         y: self.curve.points[0].y,
                //         angle: currentAngle + differenceInAngle,
                //         duration: 3000,
                //         onComplete(){
                //             tween.restart();
                //         }
                //     })
                // }
            });

        });



        // this.ball.on('drag', function (pointer: any, gameObject: any, dragX: any, dragY: any) {

        //     gameObject.x = dragX;
        //     gameObject.y = dragY;

        //     // gameObject.getData('vector').set(dragX, dragY);

        // });



        self.graphics = this.add.graphics();
    }

    handler(x: number, y: number) {
        this.add.image(x, y, 'ball');
    }

    loadScene(sceneKey: any) {
        this.scene.start(sceneKey)
    }


    update() {

        // Phaser.Geom.Line.Rotate(this.line, 0.02);

        this.graphics.clear();
        // this.graphics.strokeLineShape(this.line);

        this.graphics.lineStyle(2, 0xffffff, 1);

        this.curve.draw(this.graphics, this.parts);
    }
}
/*

            var currentPointIndex = 0;
            var ball = this.ball;
             tweens = this.tweens.add({
                targets: ball,
                x: data.points[currentPointIndex].x,
                y: data.points[currentPointIndex].y,
                rotation: data.angles[currentPointIndex],
                ease: 'Linear',
                duration: 20000, // adjust this value to control animation speed
                onComplete: function() {
                    currentPointIndex++;
                    if (currentPointIndex >= data.points.length) {
                        currentPointIndex = 0;
                    }
            
                    tweens.updateTo({
                        x: data.points[currentPointIndex].x,
                        y: data.points[currentPointIndex].y,
                        rotation: data.angles[currentPointIndex]
                    });
                    tweens.restart();
                }
            });
*/
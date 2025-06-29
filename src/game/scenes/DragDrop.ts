import Phaser from 'phaser';

export default class DragDrop extends Phaser.Scene {
    constructor() {
        super(
            {
                key: 'DragDrop'
            })
    }

    preload() {




        this.load.image(
            'logoAlpha',
            './assets/samplesceneassets/phaser3-logo-alpha.png'
        );


        this.load.image(
            'BackgroundImage',
            './assets/samplesceneassets/bg2.png'
        );


    }


    private backgroundImage: any;
    private logo1: any;
    private graphics: any;


    create() {

        this.backgroundImage = this.add.sprite(0, 0, 'BackgroundImage').setOrigin(0, 0);

        this.backgroundImage.displayWidth = this.sys.canvas.width;
        this.backgroundImage.displayHeight = this.sys.canvas.height;

        this.logo1 = this.add.sprite(400, 500, 'logoAlpha').setInteractive().setScale(0.7);


        const zone = this.add.zone(1250, 500, 1000, 800).setRectangleDropZone(1000, 800);

        //  Just a visual display of the drop zone
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(2, 0xffff00);
        this.graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

        this.input.on('drop', (pointer: any, gameObject: { x: any; y: any; input: { enabled: boolean; }; }, dropZone: { x: any; y: any; }) => {

            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;

            gameObject.input.enabled = false;

        });

        this.input.setDraggable([this.logo1]);

        this.input.on('dragstart', function (pointer: any, gameObject: any) {

            this.children.bringToTop(gameObject);

        }, this);

        this.input.on('drag', (pointer: any, gameObject: { x: any; y: any; }, dragX: any, dragY: any) => {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

    }

    loadScene(sceneKey: any) {
        this.scene.start(sceneKey)
    }
    update() {

    }
}

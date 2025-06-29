import Phaser from 'phaser';

export default class FirstPage extends Phaser.Scene {

    width: any;
    height: any;

    constructor() {
        super(
            {
                key: 'FirstPage'
            });
        this.width = 1920;
        this.height = 1080;
    }

    preload() {


        this.load.image(
            'BackgroundImage',
            './assets/samplesceneassets/bg2.png'
        );


    }


    private backgroundImage: any;
    private graphics: any;


    create() {

        this.backgroundImage = this.add.sprite(0, 0, 'BackgroundImage').setOrigin(0, 0);

        this.backgroundImage.displayWidth = this.sys.canvas.width;
        this.backgroundImage.displayHeight = this.sys.canvas.height;

        const text3 = this.add.text(350, 500, 'Click on Scenes to try Phaser Examples', { font: '64px Arial' });
        text3.setTintFill(0xff00ff, 0xff00ff, 0x0000ff, 0x0000ff);

    }


    update() {

    }
}

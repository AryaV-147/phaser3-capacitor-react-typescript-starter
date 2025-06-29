import Phaser from 'phaser';


export default class Timeline extends Phaser.Scene {

    private backgroundImage: any;
    width: number = 1920;
    height: number = 1080;


    constructor() {
        super(
            {
                key: 'Timeline'
            }
        )
    }

    preload() {
        this.load.atlas('timeline', './assets/samplesceneassets/timeline.png', 'assets/samplesceneassets/timeline.json');
        this.load.image('bg', './assets/samplesceneassets/spookysky.jpg');
    }

    create() {
        this.backgroundImage = this.add.image(0, 0, 'bg').setOrigin(0, 0);
        this.backgroundImage.displayWidth = this.sys.canvas.width;
        this.backgroundImage.displayHeight = this.sys.canvas.height;

        this.add.text(10, 10, 'Click to start the Timeline', { font: '16px Courier' }).setTintFill(0xff00ff);

        const timeline = this.add.timeline([
            {
                at: 1000,
                tween: {
                    targets: this.add.sprite(1000, 700, 'timeline', 'crystalball'),
                    y: 400,
                    duration: 3000,
                    ease: 'Power2'
                }
            },
            {
                at: 4000,
                run: () => { this.add.sprite(1000, 200, 'timeline', 'spider').setScale(1.5) }
            },
        ]);

        this.input.once('pointerdown', () => {

            timeline.play();

        });
    }
}
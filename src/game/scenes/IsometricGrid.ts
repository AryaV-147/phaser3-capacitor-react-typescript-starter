
import Phaser from 'phaser';

export default class IsoGrid extends Phaser.Scene {

    private backgroundImage: any;
    width: number = 1920;
    height: number = 1080;


    constructor() {

        super(
            {
                key: 'IsoGrid',
                mapAdd: { isoPlugin: 'iso' }

            }
        )
    }

    preload() {
        this.load.scenePlugin({
            key: 'IsoPlugin',
            sceneKey: 'iso'
        });



    }

    // create() {
    //     this.isoGroup = this.add.group();

    //     this.iso.projector.origin.setTo(0.5, 0.3);

    //     // Add some tiles to our scene
    //     this.spawnTiles();
    // }

    // spawnTiles() {
    //     var tile;

    //     for (var xx = 0; xx < 256; xx += 38) {
    //         for (var yy = 0; yy < 256; yy += 38) {
    //             tile = this.add.isoSprite(xx, yy, 0, 'tile', this.isoGroup);
    //             tile.setInteractive();

    //             tile.on('pointerover', function () {
    //                 this.setTint(0x86bfda);
    //                 this.isoZ += 5;
    //             });

    //             tile.on('pointerout', function () {
    //                 this.clearTint();
    //                 this.isoZ -= 5;
    //             });
    //         }
    //     }
    // }

}
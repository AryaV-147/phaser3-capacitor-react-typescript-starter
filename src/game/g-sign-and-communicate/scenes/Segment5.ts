import Segment from "../scenes/Segment";

export default class Segment5 implements Segment {
    gameScene: any;
    constructor(scene: Phaser.Scene) {
        this.gameScene = scene;
    }

    isSegmentCompleted: boolean = false;

    darkOverlaySegment5: Phaser.GameObjects.Sprite;


    Start = (): void => {
        console.log("Segment 5 Start Called");
        this.gameScene.currentGameState = this.gameScene.GameState.segment5;

        // Load Dark Overlay Image
        this.darkOverlaySegment5 = this.gameScene.add.sprite(0, 0, 'PT477-Overlay').setOrigin(0).setDepth(0.12).setAlpha(0);

        // Fade in Dark Overlay
        this.gameScene.ObjectFadeIn(this.darkOverlaySegment5, 1, 500);

        // Scale Up All Host Before Playing Instruction Prompt
        this.gameScene.player.forEach((player: { ScaleUpHosts: () => void; }) => {
            player.ScaleUpHosts();
        });

        // Reduce BG Audio before Playing Instruction Prompt
        this.gameScene.reduceBackgroundAudio();

        // Play Instruction Prompt-1 Segment2 
        this.gameScene.PlayAudio(this.gameScene.hostAudioInstructionSegmentTwo1).once('complete', () => {

        });
    };

    End = (): void => {

    };
}
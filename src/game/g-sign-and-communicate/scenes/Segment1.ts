// import { debug } from "webpack";
import Segment from "./Segment";

export default class Segment1 implements Segment {
    gameScene: any;
    constructor(scene: Phaser.Scene) {
        this.gameScene = scene;
    }

    // Button Tween Configuration
    ButtonPulseConfig: any = [
        { tween: null },
        { tween: null },
        { tween: null },
        { tween: null },
    ]

    isSegmentCompleted: boolean = false;

    // Segment 1 Auto Completion Timer
    Segment1AutoCompletionTimer: any;

    buttonSpriteOffSet: any = [
        { x: 0, y: -20 },
        { x: 10, y: -40 },
        { x: 0, y: -50 },
        { x: 0, y: -20 },
    ]

    buttonPoofOffSet: any = [
        { x: 0, y: 50 },
        { x: 50, y: -35 },
        { x: -10, y: -60 },
        { x: -70, y: -10 },
    ]

    Start() {
        console.log("Segment 1 Start called");
        this.gameScene.currentGameState = this.gameScene.GameState.segment1;

        // Scale Up All Host Before Playing Instruction Prompt
        this.gameScene.player.forEach((player: { ScaleUpHosts: () => void; }) => {
            player.ScaleUpHosts();
        });

        // Reduce BG Audio before Playing Instruction Prompt
        this.gameScene.reduceBackgroundAudio();

        this.checkLoggedInStatus();

        // Play Host Audio Instruction 1
        this.gameScene.PlayAudio(this.gameScene.hostAudioInstruction01).once('complete', () => {
            // Play Host Audio Instruction 2
            this.gameScene.PlayAudio(this.gameScene.hostAudioInstruction02).once('complete', () => {
                // Buttons Poof In For all Players
                for (let i = 0; i < 4; i++) {
                    this.gameScene.AddPoof(this.gameScene.player[i].playerData[1].x + this.buttonPoofOffSet[i].x, this.gameScene.player[i].playerData[1].y + this.buttonPoofOffSet[i].y, 2, 0.21, i, this.gameScene.poofType.poofing);
                    this.checkLoggedInStatus();
                    this.gameScene.ObjectFadeIn(this.gameScene.player[i].playerData[1], 1, 250)
                        .once('complete', () => {
                            this.ButtonPulseConfig[i].tween?.remove();
                            this.ButtonPulseConfig[i].tween = null;
                            this.ButtonPulseConfig[i].tween = this.gameScene.AddButtonPulseEffect(this.gameScene.player[i].playerData[1]);
                            // Add on Click Functionaliy for buttons
                            this.gameScene.AddButtonClickFunctionality(
                                this.gameScene.player[i].name,
                                this.gameScene.player[i].playerData[1],
                                this.gameScene.player[i].playerData[7],
                                'PT477-pleaseButtonSelectedSg1P' + (i + 1),
                                this.buttonSpriteOffSet[i].x,
                                this.buttonSpriteOffSet[i].y,
                                this.gameScene.getPlayerParticipationFromIndex(i),
                                this.ButtonPulseConfig,
                                this.WaitForPlayerToClick,
                            );

                            if (!this.gameScene.player[i].isLoggedIn) {
                                console.log(`status for player :: ${i}`, this.gameScene.player[i].isLoggedIn);
                                this.gameScene.player[i].playerData[1].disableInteractive();
                            }
                            this.checkLoggedInStatus();
                        });
                }

                // Start The AutoCompletion Timer for button click
                this.Segment1AutoCompletionTimer = setTimeout(() => {
                    // Write the button auto completion time logic
                    console.log("Button AutoCompletion Timer Called");
                    for (let i = 0; i < 4; i++) {
                        if (!this.playerButtonClickReference.includes(this.gameScene.getPlayerReferenceFromIndex(i))) {
                            this.gameScene.player[i].playerData[1].setTexture('PT477-pleaseButtonSelectedSg1P' + (i + 1));
                            this.WaitForPlayerToClick(this.gameScene.getPlayerReferenceFromIndex(i));
                        }
                    }
                }, (8000 + (this.gameScene.hostAudioInstruction03.audioFile.duration * 1000)));

                // Play Host Audio Instruction 3 : Touch Functionality To Begin Prior to Audio 3
                this.gameScene.PlayAudio(this.gameScene.hostAudioInstruction03).once('complete', () => {
                    this.checkLoggedInStatus();
                    // Increase BG audio
                    this.gameScene.increaseBackgroundAudio();
                    // Scale Down All Hosts
                    this.gameScene.player.forEach((player: { ScaleDownHosts: () => void; }) => {
                        player.ScaleDownHosts();
                    });
                });
            });
        });
    };

    playerButtonClickReference: string[] = []
    hasAllPlayerClicked: boolean = false;
    WaitForPlayerToClick = (playerReference: string) => {
        console.log("Segment 1 Change Called from : ", playerReference);
        this.playerButtonClickReference.push(playerReference);
        this.playerButtonClickReference = this.gameScene.removeDuplicates(
            this.playerButtonClickReference
        );
        const count = this.gameScene.loggedInStatus.filter(Boolean).length;

        if (this.playerButtonClickReference.length === count
            && !this.hasAllPlayerClicked) {
            this.playerButtonClickReference = [];
            this.hasAllPlayerClicked = true;
            console.log("All Players Have Clicked the button");
            this.checkLoggedInStatus();
            // Disable or Clear the AutoCompletion Timer
            clearTimeout(this.Segment1AutoCompletionTimer);

            // Disable All the Buttons After its clicked
            for (let i = 0; i < 4; i++) {
                this.gameScene.ObjectFadeIn(
                    this.gameScene.player[i].playerData[1], 0, 500
                );
                this.gameScene.ObjectFadeIn(
                    this.gameScene.player[i].playerData[7], 0, 500
                );

                this.ButtonPulseConfig[i].tween?.remove();
                this.ButtonPulseConfig[i].tween = null;
            }

            // Pause and Current Playing Audio
            if (this.gameScene.currentPlayingAudio.isPlaying)
                this.gameScene.currentPlayingAudio.pause();

            this.End();
        }
    }

    End = () => {
        console.log("Calling the end game on the current segment :: ", this.gameScene.currentGameState);

        // Scale Up All Host Before Playing Instruction Prompt
        this.gameScene.player.forEach((player: { ScaleUpHosts: () => void; }) => {
            player.ScaleUpHosts();
        });

        // Reduce BG Audio before Playing Instruction Prompt
        this.gameScene.reduceBackgroundAudio();

        // Fade in Spine Image Presets
        for (let i = 0; i < 4; i++) {
            this.gameScene.ObjectFadeIn(this.gameScene.player[i].playerData[3], 1, 250);
        }

        this.checkLoggedInStatus();

        // Play Audio Instruction 4
        this.gameScene.PlayAudio(this.gameScene.hostAudioInstruction04).once('complete', () => {
            this.checkLoggedInStatus();
            // Play Spine Animation for the Please Sign for all players
            // Fade out Spine Image Presets & Fade In Spine Assets
            for (let i = 0; i < 4; i++) {
                this.gameScene.ObjectFadeIn(this.gameScene.player[i].playerData[3], 0, 0);
                this.gameScene.ObjectFadeIn(this.gameScene.player[i].playerData[6], 1, 0);
                this.gameScene.player[i].playerData[6].play('Please');
            }

            // Play Audio Instruction 5
            this.gameScene.PlayAudio(this.gameScene.hostAudioInstruction05).once('complete', () => {
                this.checkLoggedInStatus();
                // Play Audio Instruction 6
                this.gameScene.PlayAudio(this.gameScene.hostAudioInstruction06).once('complete', () => {
                    // Scale Up All Host Before Playing Instruction Prompt
                    this.gameScene.player.forEach((player: { ScaleDownHosts: () => void; }) => {
                        player.ScaleDownHosts();
                    });

                    // Reduce BG Audio before Playing Instruction Prompt
                    this.gameScene.increaseBackgroundAudio();

                    // Play the Spine Animation Again
                    for (let i = 0; i < 4; i++) {
                        this.gameScene.player[i].playerData[6].play('Please');
                    };

                    this.checkLoggedInStatus();

                    // Wait for SpineAnimation to complete and fadeout the spine animation again with poof 
                    setTimeout(() => {
                        for (let i = 0; i < 4; i++) {
                            this.gameScene.ObjectFadeIn(this.gameScene.player[i].playerData[6], 0, 250);
                            this.gameScene.AddPoof(this.gameScene.player[i].playerData[0].x, this.gameScene.player[i].playerData[0].y, 2, 1, i, this.gameScene.poofType.Tray_smoke);

                            // Remove any extra tween configuration left
                            this.ButtonPulseConfig[i].tween?.remove();
                            this.ButtonPulseConfig[i].tween = null;
                        }
                        // Set the Segment Switch control variable to true
                        this.isSegmentCompleted = true;

                        // Call the Function in the GameScene to switch the function
                        this.gameScene.startNextGamePlay();
                        this.checkLoggedInStatus();
                    }, 2600);
                })
            })
        })
    };

    checkLoggedInStatus() {
        for (let i = 0; i < 4; i++) {
            this.gameScene.player[i].isLoggedIn = this.gameScene.loggedInStatus[i];

            if (!this.gameScene.player[i].isLoggedIn)
                this.onPlayerLogout(i);
        }
    }

    // Login and Logout Functions per segment
    onPlayerLogout = (playerReference: number) => {
        // Disable the player assets
        this.gameScene.player[playerReference].DisableAssetOnLogout();

        // Remove the Player's reference from the segment switch array
        if (!this.gameScene.player[playerReference].playerData[1].input.enabled) {
            // Reset Back the Texture to the original button sprite
            this.gameScene.player[playerReference].playerData[1].setTexture('PT477-pleaseButtonSg1P' + (playerReference + 1));
            // Player Button Sparkle
            this.gameScene.player[playerReference].playerData[7].setAlpha(0);
            // Button Pulse Config
            this.ButtonPulseConfig[playerReference].tween?.remove();
        } else {
            this.gameScene.player[playerReference].playerData[1].disableInteractive();
        }

        // Remove Element from the Array
        this.gameScene.RemoveReferenceAndContinue(
            this.gameScene.getPlayerReferenceFromIndex(playerReference),
            this.playerButtonClickReference,
            this.WaitForPlayerToClick
        );
    }

    onPlayerLogin = (playerReference: number) => {
        console.log("Enabled Called");
        // Enable the player assets
        this.gameScene.player[playerReference].EnableAssetOnLogin();

        this.gameScene.player[playerReference].playerData[1].setInteractive();

        this.ButtonPulseConfig[playerReference].tween?.remove();
        this.ButtonPulseConfig[playerReference].tween = null;

        this.ButtonPulseConfig[playerReference].tween = (this.gameScene.AddButtonPulseEffect(this.gameScene.player[playerReference].playerData[1]));
    }
}
import Segment from "../scenes/Segment";

export default class Segment3 implements Segment {
    gameScene: any;
    constructor(scene: Phaser.Scene) {
        this.gameScene = scene;
    }

    isSegmentCompleted: boolean = false;

    // Button Tween Configuration
    ButtonPulseConfig: any = [
        { tween: null },
        { tween: null },
        { tween: null },
        { tween: null },
    ]

    // Sprite OffSet
    buttonSpriteOffSet: any = [
        { x: 0, y: -20 },
        { x: 10, y: -40 },
        { x: 0, y: -50 },
        { x: 0, y: -20 },
    ]

    // Poofing OffSet from the Button
    buttonPoofOffSet: any = [
        { x: 0, y: 50 },
        { x: 50, y: -35 },
        { x: -10, y: -60 },
        { x: -70, y: -10 },
    ]

    // More You Spine Image OffSet
    MoreSpineOffset: any = [
        { x: -1.85, y: 1.925 },
        { x: 2.05, y: 2.3 },
        { x: 3.25, y: -0.5 },
        { x: 0, y: -2.15 },
    ]

    // Segment 3 Auto Completion Timer
    Segment3AutoCompletionTimer: any;

    Start = (): void => {
        console.log("Segment 3 Start Called");
        this.gameScene.currentGameState = this.gameScene.GameState.segment3;

        // Scale Up All Host Before Playing Instruction Prompt
        this.gameScene.player.forEach((player: { ScaleUpHosts: () => void; }) => {
            player.ScaleUpHosts();
        });

        // Reduce BG Audio before Playing Instruction Prompt
        this.gameScene.reduceBackgroundAudio();

        this.checkLoggedInStatus();

        // Play Host Audio Instruction 11
        this.gameScene.PlayAudio(this.gameScene.hostAudioInstruction11).once('complete', () => {
            // Buttons Poof In For all Players
            for (let i = 0; i < 4; i++) {
                this.gameScene.AddPoof(this.gameScene.player[i].playerData[9].x + this.buttonPoofOffSet[i].x, this.gameScene.player[i].playerData[9].y + this.buttonPoofOffSet[i].y, 2, 0.21, i, this.gameScene.poofType.poofing);
                this.checkLoggedInStatus();
                this.gameScene.ObjectFadeIn(this.gameScene.player[i].playerData[9], 1, 250)
                    .once('complete', () => {
                        this.ButtonPulseConfig[i].tween?.remove();
                        this.ButtonPulseConfig[i].tween = null;

                        this.ButtonPulseConfig[i].tween = this.gameScene.AddButtonPulseEffect(this.gameScene.player[i].playerData[9]);
                        // Add on Click Functionaliy for buttons
                        this.gameScene.AddButtonClickFunctionality(
                            this.gameScene.player[i].name,
                            this.gameScene.player[i].playerData[9],
                            this.gameScene.player[i].playerData[7],
                            'PT477-moreButtonSelectedSg1P' + (i + 1),
                            this.buttonSpriteOffSet[i].x,
                            this.buttonSpriteOffSet[i].y,
                            this.gameScene.getPlayerParticipationFromIndex(i),
                            this.ButtonPulseConfig,
                            this.WaitForPlayerToClick,
                        );

                        if (!this.gameScene.player[i].isLoggedIn) {
                            console.log(`status for player :: ${i}`, this.gameScene.player[i].isLoggedIn);
                            this.gameScene.player[i].playerData[9].disableInteractive();
                        }
                        this.checkLoggedInStatus();
                    });
            }

            // Start the Auto Completion Timer : The Auto Completion timer will be having a duration of
            // '8 Secs + Length of the 12th Audio'
            this.Segment3AutoCompletionTimer = setTimeout(() => {
                // Write the button auto completion time logic
                console.log("Button AutoCompletion Timer Called");
                this.checkLoggedInStatus();
                for (let i = 0; i < 4; i++) {
                    if (!this.playerButtonClickReference.includes(this.gameScene.getPlayerReferenceFromIndex(i))) {
                        this.gameScene.player[i].playerData[9].setTexture('PT477-moreButtonSelectedSg1P' + (i + 1));
                        this.WaitForPlayerToClick(this.gameScene.getPlayerReferenceFromIndex(i));
                    }
                }
            }, (8000 + (this.gameScene.hostAudioInstruction12.audioFile.duration * 1000)));

            // Play Host Audio Instruction 12
            this.gameScene.PlayAudio(this.gameScene.hostAudioInstruction12).once('complete', () => {
                this.checkLoggedInStatus();
                // Scale Down All Host After Instruction Prompt Finishes
                this.gameScene.player.forEach((player: { ScaleDownHosts: () => void; }) => {
                    player.ScaleDownHosts();
                });

                // Increse BG Audio before Playing Instruction Prompt
                this.gameScene.increaseBackgroundAudio();
            });
        });
    };


    playerButtonClickReference: string[] = []
    hasAllPlayerClicked: boolean = false;
    WaitForPlayerToClick = (playerReference: string) => {
        console.log("Segment 3 Change Called from : ", playerReference);
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

            // Disable or Clear the AutoCompletion Timer
            clearTimeout(this.Segment3AutoCompletionTimer);

            // Disable All the Buttons After its clicked
            for (let i = 0; i < 4; i++) {
                this.gameScene.ObjectFadeIn(
                    this.gameScene.player[i].playerData[9], 0, 500
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
            this.checkLoggedInStatus();
            this.End();
        }
    }


    End = (): void => {
        // Scale Up All Host Before Playing Instruction Prompt
        this.gameScene.player.forEach((player: { ScaleUpHosts: () => void; }) => {
            player.ScaleUpHosts();
        });

        // Reduce BG Audio before Playing Instruction Prompt
        this.gameScene.reduceBackgroundAudio();

        // Fade in Spine Image Presets
        for (let i = 0; i < 4; i++) {
            // Apply the necessary offset to the spine asset to reduce the spine animation jitter
            this.gameScene.player[i].playerData[2].setPosition(
                this.gameScene.player[i].playerData[2].x + this.MoreSpineOffset[i].x,
                this.gameScene.player[i].playerData[2].y + this.MoreSpineOffset[i].y
            );
            this.gameScene.ObjectFadeIn(this.gameScene.player[i].playerData[2], 1, 250);
        }
        this.checkLoggedInStatus();
        // Play Host Audio Instruction 13
        this.gameScene.PlayAudio(this.gameScene.hostAudioInstruction13).once('complete', () => {
            this.checkLoggedInStatus();
            // Fade out Spine Image Presets & Fade In Spine Assets
            for (let i = 0; i < 4; i++) {
                this.gameScene.ObjectFadeIn(this.gameScene.player[i].playerData[2], 0, 0);

                this.gameScene.ObjectFadeIn(this.gameScene.player[i].playerData[6], 1, 0);
                this.gameScene.player[i].playerData[6].play('More')

                setTimeout(() => {
                    this.gameScene.player[i].playerData[6].play('More');
                }, 2500);
                this.checkLoggedInStatus();
            }
            // Continue
            // Play Host Audio Instruction 14
            this.gameScene.PlayAudio(this.gameScene.hostAudioInstruction14).once('complete', () => {
                this.checkLoggedInStatus();
                // Continue
                // Play Host Audio Instruction 06
                this.gameScene.PlayAudio(this.gameScene.hostAudioInstruction06).once('complete', () => {
                    this.checkLoggedInStatus();
                    // Scale Down All Host After Instruction Prompt Finishes
                    this.gameScene.player.forEach((player: { ScaleDownHosts: () => void; }) => {
                        player.ScaleDownHosts();
                    });

                    // Increse BG Audio before Playing Instruction Prompt
                    this.gameScene.increaseBackgroundAudio();

                    for (let i = 0; i < 4; i++) {
                        this.gameScene.player[i].playerData[6].play('More');
                    }

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
                    }, 1500);
                })
            })
        });
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
        if (!this.gameScene.player[playerReference].playerData[9].input.enabled) {
            // Reset Back the Texture to the original button sprite
            this.gameScene.player[playerReference].playerData[9].setTexture('PT477-moreButtonSg1P' + (playerReference + 1));
            // Player Button Sparkle
            this.gameScene.player[playerReference].playerData[7].setAlpha(0);
            // Button Pulse Config
            this.ButtonPulseConfig[playerReference].tween?.remove();
        } else {
            this.gameScene.player[playerReference].playerData[9].disableInteractive();
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

        this.gameScene.player[playerReference].playerData[9].setInteractive();

        console.log("There is data inside the button tween config :: ", this.ButtonPulseConfig[playerReference].tween);
        this.ButtonPulseConfig[playerReference].tween?.remove();
        this.ButtonPulseConfig[playerReference].tween = null;

        console.log("Button Pulse config array is :: ", this.ButtonPulseConfig);

        this.ButtonPulseConfig[playerReference].tween = (this.gameScene.AddButtonPulseEffect(this.gameScene.player[playerReference].playerData[9]));
    }
}
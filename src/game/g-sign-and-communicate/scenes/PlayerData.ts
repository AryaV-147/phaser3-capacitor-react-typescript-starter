export default class PlayerData {
    gameScene: Phaser.Scene;
    hostCharacter: SpineGameObject;
    numberOfSegments: number;
    hostAnimKey: string;
    isLoggedIn: boolean = true;
    name: string;
    playerData: Phaser.GameObjects.Sprite[] | SpineGameObject[];
    segmentCompleted: boolean[];
    timer: any;
    assistanceTime: number;
    hintTime: number;
    autoCompletionTime: number;

    constructor(scene: Phaser.Scene,
        host: SpineGameObject | any,
        hostAnimationKey: string,
        loggedInStatus: boolean,
        name: string,
        playerAssets: Phaser.GameObjects.Sprite[] | SpineGameObject[],
        segments: number,
        timeDurationForAssistance: number,
        hintTimeDuration: number,
        autoCompletionTimeDuration: number) {
        // Game Scene Reference
        this.gameScene = scene;
        // Host Character Spine Assets
        this.hostCharacter = host;
        // Animation Key for the Host
        this.hostAnimKey = hostAnimationKey;

        // Play the Host Character Animation and Set it's time scale to 0
        this.hostCharacter.play(hostAnimationKey, true);
        this.hostCharacter.state.timeScale = 0;

        // Logged In Status of the Player
        this.isLoggedIn = loggedInStatus;
        // Player 'Named' reference
        this.name = name;
        // Assets of the players stored segmentwise
        this.playerData = playerAssets;
        // Count of the number of segments including SubSegments as well
        this.numberOfSegments = segments;
        // The count of number in seconds for the assistancePromt time duration
        this.assistanceTime = timeDurationForAssistance;
        // The count of number in seconds for the hint time duration
        this.hintTime = hintTimeDuration;
        // The count of number in seconds for the autoCompletion time duration
        this.autoCompletionTime = autoCompletionTimeDuration;
        // Fill the Segment Completed Array to false based on the number of Segments
        this.segmentCompleted = new Array(this.numberOfSegments).fill(false);
    }

    // Methods
    public ScaleUpHosts(): void {
        this.gameScene.tweens.add({
            targets: [this.hostCharacter],
            duration: 250,
            scaleX: 0.375,
            scaleY: 0.375,
            alpha: 1,
            ease: 'Circular.easeIn',
            onStart: () => {
                this.hostCharacter.state.timeScale = 1;
            },
            onComplete: () => { },
        });
    }

    public ScaleDownHosts(): void {
        this.gameScene.tweens.add({
            targets: [this.hostCharacter],
            duration: 250,
            scaleX: 0.01,
            scaleY: 0.01,
            alpha: 0,
            ease: 'Circular.easeOut',
            onStart: () => { },
            onComplete: () => {
                this.hostCharacter.state.timeScale = 0;
            },
        });
    }

    public DisableAssetOnLogout() {
        this.isLoggedIn = false;
        for (let i = 0; i < this.playerData.length; i++) {
            this.playerData[i].setVisible(false);
        }

        this.hostCharacter.setVisible(false);
    }

    public EnableAssetOnLogin() {
        this.isLoggedIn = true;
        for (let i = 0; i < this.playerData.length; i++) {
            this.playerData[i].setVisible(true);
        }

        this.hostCharacter.setVisible(true);
    }
}
import Phaser from 'phaser';

export default class LogInLogOut extends Phaser.Scene {
  windowWidth: any;
  windowHeight: any;
  loggedInStatus: any;
  topPlayerLogOut: any;
  scene: any;

  constructor(scene: Phaser.Scene) {
    super({ key: 'LogInLogOut' });
    this.windowWidth = 1920;
    this.windowHeight = 1080;
    // this.scene = scene;
  }
  init(data: any) {
    this.scene = data;
  }

  preload() {
    this.load.image(
      'PTUtils-signInOut',
      './src/assets/pregameAssets/stop_sign.png',
    );
  }

  create() {
    this.logInOutManager();
    console.log("Called");
  }

  logInOutManager = () => {
    let playerOneLogoout = this.add
      .sprite(this.windowWidth / 2, this.windowHeight - 50, 'PTUtils-signInOut')
      .setDepth(90)
      .setAngle(0)
      .setInteractive();
    let playerTwoLogoout = this.add
      .sprite(this.windowWidth - 50, this.windowHeight / 2, 'PTUtils-signInOut')
      .setDepth(90)
      .setAngle(270)
      .setInteractive();
    let playerThreeLogoout = this.add
      .sprite(this.windowWidth / 2, 50, 'PTUtils-signInOut')
      .setDepth(90)
      .setAngle(180)
      .setInteractive();
    let playerFourLogoout = this.add
      .sprite(50, this.windowHeight / 2, 'PTUtils-signInOut')
      .setDepth(90)
      .setAngle(90)
      .setInteractive();

    playerOneLogoout.on('pointerdown', () => {
      this.scene.loggedInStatus[0] = !this.scene.loggedInStatus[0];

      if (this.scene.loggedInStatus[0]) this.scene.onBottomPlayerLoggedIn();
      else this.scene.onBottomPlayerLoggedOut();
    });
    playerTwoLogoout.on('pointerdown', () => {
      this.scene.loggedInStatus[1] = !this.scene.loggedInStatus[1];

      if (this.scene.loggedInStatus[1]) this.scene.onRightPlayerLoggedIn();
      else this.scene.onRightPlayerLoggedOut();
    });
    playerThreeLogoout.on('pointerdown', () => {
      this.scene.loggedInStatus[2] = !this.scene.loggedInStatus[2];

      if (this.scene.loggedInStatus[2]) this.scene.onTopPlayerLoggedIn();
      else this.scene.onTopPlayerLoggedOut();
    });
    playerFourLogoout.on('pointerdown', () => {
      this.scene.loggedInStatus[3] = !this.scene.loggedInStatus[3];

      if (this.scene.loggedInStatus[3]) this.scene.onLeftPlayerLoggedIn();
      else this.scene.onLeftPlayerLoggedOut();
    });
  };
}

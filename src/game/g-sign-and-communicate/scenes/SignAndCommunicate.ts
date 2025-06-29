import Segment1 from "./Segment1";
import Segment2 from "./Segment2";
import Segment3 from "./Segment3";
import Segment4 from "./Segment4";
import PlayerData from "./PlayerData";
// import LogInLogOut from "./LogInLogOut"
import Segment5 from "./Segment5";

const soundEffectsVolume = 0.5;
const backgroundNormalVolume = 0.15;
const backgroundLowVolume = 0.065;

export default class SignAndCommunicate extends Phaser.Scene {
    width: any;
    height: any;

    // init() {
    //     this.scene.add('LogInLogOutScene', LogInLogOut, true, this);
    // }
    GameState = {
        gameStart: 'start',
        segment1: 'segment1',
        segment2: 'segment2',
        segment3: 'segment3',
        segment4: 'segment4',
        segment5: 'segment5',
        gameend: 'end',
    };

    constructor() {
        super({ key: 'SignAndCommunicate' });
        this.width = 1920;
        this.height = 1080;
    }

    preload() {
        this.load.spine(
            'PT477-HostCharacter',
            './assets/g-sign-and-communicate/PT477-fizmo_rounded/PT477-fizmo_rounded.json',
            './assets/g-sign-and-communicate/PT477-fizmo_rounded/PT477-fizmo_rounded.atlas',
        );

        // Host Audio Assets
        this.load.audio(
            'PT477-hostAudio01',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-01.wav'
        );

        this.load.audio(
            'PT477-hostAudio02',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-02.wav'
        );

        this.load.audio(
            'PT477-hostAudio03',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-03.wav'
        );

        this.load.audio(
            'PT477-hostAudio04',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-04.wav'
        );

        this.load.audio(
            'PT477-hostAudio05',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-05.wav'
        );

        this.load.audio(
            'PT477-hostAudio06',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-06.wav'
        );

        this.load.audio(
            'PT477-hostAudio07',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-07.wav'
        );

        this.load.audio(
            'PT477-hostAudio08',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-08.wav'
        );

        this.load.audio(
            'PT477-hostAudio09',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-09.wav'
        );

        this.load.audio(
            'PT477-hostAudio10',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-10.wav'
        );

        this.load.audio(
            'PT477-hostAudio11',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-11.wav'
        );

        this.load.audio(
            'PT477-hostAudio12',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-12.wav'
        );

        this.load.audio(
            'PT477-hostAudio13',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-13.wav'
        );

        this.load.audio(
            'PT477-hostAudio14',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-14.wav'
        );

        this.load.audio(
            'PT477-hostAudio15',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-15.wav'
        );

        this.load.audio(
            'PT477-hostAudio16',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-16.wav'
        );

        this.load.audio(
            'PT477-hostAudio17',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-17.wav'
        );

        this.load.audio(
            'PT477-hostAudio18',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-18.wav'
        );

        this.load.audio(
            'PT477-hostAudio19',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-19.wav'
        );

        this.load.audio(
            'PT477-hostAudio20',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-20.wav'
        );
        this.load.audio(
            'PT477-hostAudio21',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-21.wav'
        );

        this.load.audio(
            'PT477-hostAudio22',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-22.wav'
        );

        this.load.audio(
            'PT477-hostAudio23',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication2-23.wav'
        );

        this.load.audio(
            'PT477-hostAudio-SG2-01',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication3-01.wav'
        );

        this.load.audio(
            'PT477-hostAudio-SG2-02',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication3-02.wav'
        );

        this.load.audio(
            'PT477-hostAudio-SG2-03',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication3-03.wav'
        );
        this.load.audio(
            'PT477-hostAudio-SG2-04',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication3-04.wav'
        );

        this.load.audio(
            'PT477-hostAudio-SG2-05',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication3-05.wav'
        );

        this.load.audio(
            'PT477-hostAudio-SG2-06',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication3-06.wav'
        );

        this.load.audio(
            'PT477-hostAudio-SG2-07',
            './assets/g-sign-and-communicate/PT477-audio/PT477-hostAudio/PT477-WPS-RS-Communication3-07.wav'
        );

        // Background Scene Image Assets
        this.load.image(
            'PT477-backgroundImage',
            './assets/g-sign-and-communicate/PT477-BG/PT477-BG.png',
        );

        // Chalk Board Images for all 4 Players
        this.load.image(
            'PT477-chalkBoardPlayerOne',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-chalkBoardPlayerOne.png',
        );

        this.load.image(
            'PT477-chalkBoardPlayerTwo',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-chalkBoardPlayerTwo.png',
        );

        this.load.image(
            'PT477-chalkBoardPlayerThree',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-chalkBoardPlayerThree.png',
        );

        this.load.image(
            'PT477-chalkBoardPlayerFour',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-chalkBoardPlayerFour.png',
        );

        // Bg, Effects Audio Assets
        this.load.audio(
            'PT477-backgroundAudio',
            './assets/g-sign-and-communicate/PT477-audio/PT477-NatureFun-Loop.wav',
        );

        this.load.audio(
            'PT477-poof',
            'assets/g-sign-and-communicate/PT477-audio/PT477-Poof-Sound.wav',
        );

        this.load.audio(
            'PT477-fizmoScaleInOut',
            './assets/g-sign-and-communicate/PT477-audio/PT477-fizmoScaleInOut.wav',
        );

        this.load.audio(
            'PT477-selectSign',
            './assets/g-sign-and-communicate/PT477-audio/PT477-selectSign.wav',
        );

        // Poofing
        this.load.spine(
            'PT477-Poofing',
            './assets/g-sign-and-communicate/PT477-Poofing/PT477-poofing.json',
            './assets/g-sign-and-communicate/PT477-Poofing/PT477-poofing.atlas',
        );

        // Button Assets

        // PlayerOne Button Assets
        this.load.image(
            'PT477-moreButtonSg1P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-moreButtonSg1.png',
        );
        this.load.image(
            'PT477-pleaseButtonSg1P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-pleaseButtonSg1.png',
        );
        this.load.image(
            'PT477-stopButtonSg1P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-stopButtonSg1.png',
        );
        this.load.image(
            'PT477-thankYouButtonSg1P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-thankYouButtonSg1.png',
        );
        this.load.image(
            'PT477-moreButtonSelectedSg1P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-moreButtonSelectedSg1.png',
        );
        this.load.image(
            'PT477-pleaseButtonSelectedSg1P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-pleaseButtonSelectedSg1.png',
        );
        this.load.image(
            'PT477-stopButtonSelectedSg1P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-stopButtonSelectedSg1.png',
        );
        this.load.image(
            'PT477-thankYouButtonSelectedSg1P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-thankYouButtonSelectedSg1.png',
        );
        this.load.image(
            'PT477-moreButtonSg2P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-moreButtonSg2.png',
        );
        this.load.image(
            'PT477-pleaseButtonSg2P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-pleaseButtonSg2.png',
        );
        this.load.image(
            'PT477-stopButtonSg2P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-stopButtonSg2.png',
        );
        this.load.image(
            'PT477-thankYouButtonSg2P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-thankYouButtonSg2.png',
        );
        this.load.image(
            'PT477-moreButtonSelectedSg2P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-moreButtonSelectedSg2.png',
        );
        this.load.image(
            'PT477-pleaseButtonSelectedSg2P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-pleaseButtonSelectedSg2.png',
        );
        this.load.image(
            'PT477-stopButtonSelectedSg2P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-stopButtonSelectedSg2.png',
        );
        this.load.image(
            'PT477-thankYouButtonSelectedSg2P1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-thankYouButtonSelectedSg2.png',
        );

        // P1 Spine Images
        this.load.image(
            'PT477-moreSpineImageP1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-moreSpineImageP1.png',
        );
        this.load.image(
            'PT477-stopSpineImageP1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-stopSpineImageP1.png',
        );
        this.load.image(
            'PT477-thankYouSpineImageP1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-thankYouSpineImageP1.png',
        );
        this.load.image(
            'PT477-pleaseSpineImageP1',
            './assets/g-sign-and-communicate/PT477-Player_1/PT477-pleaseSpineImageP1.png',
        );

        // PlayerTwo Button Assets
        this.load.image(
            'PT477-moreButtonSg1P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-moreButtonSg1P2.png',
        );
        this.load.image(
            'PT477-pleaseButtonSg1P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-pleaseButtonSg1P2.png',
        );
        this.load.image(
            'PT477-stopButtonSg1P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-stopButtonSg1P2.png',
        );
        this.load.image(
            'PT477-thankYouButtonSg1P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-thankYouButtonSg1P2.png',
        );
        this.load.image(
            'PT477-moreButtonSelectedSg1P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-moreButtonSelectedSg1P2.png',
        );
        this.load.image(
            'PT477-pleaseButtonSelectedSg1P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-pleaseButtonSelectedSg1P2.png',
        );
        this.load.image(
            'PT477-stopButtonSelectedSg1P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-stopButtonSelectedSg1P2.png',
        );
        this.load.image(
            'PT477-thankYouButtonSelectedSg1P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-thankYouButtonSelectedSg1P2.png',
        );
        this.load.image(
            'PT477-moreButtonSg2P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-moreButtonSg2P2.png',
        );
        this.load.image(
            'PT477-pleaseButtonSg2P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-pleaseButtonSg2P2.png',
        );
        this.load.image(
            'PT477-stopButtonSg2P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-stopButtonSg2P2.png',
        );
        this.load.image(
            'PT477-thankYouButtonSg2P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-thankYouButtonSg2P2.png',
        );
        this.load.image(
            'PT477-moreButtonSelectedSg2P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-moreButtonSelectedSg2P2.png',
        );
        this.load.image(
            'PT477-pleaseButtonSelectedSg2P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-pleaseButtonSelectedSg2P2.png',
        );
        this.load.image(
            'PT477-stopButtonSelectedSg2P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-stopButtonSelectedSg2P2.png',
        );
        this.load.image(
            'PT477-thankYouButtonSelectedSg2P2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-thankYouButtonSelectedSg2P2.png',
        );

        // P2 Spine Images
        this.load.image(
            'PT477-moreSpineImageP2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-moreSpineImageP2.png',
        );
        this.load.image(
            'PT477-stopSpineImageP2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-stopSpineImageP2.png',
        );
        this.load.image(
            'PT477-thankYouSpineImageP2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-thankYouSpineImageP2.png',
        );
        this.load.image(
            'PT477-pleaseSpineImageP2',
            './assets/g-sign-and-communicate/PT477-Player_2/PT477-pleaseSpineImageP2.png',
        );

        // PlayerThree Button Assets
        this.load.image(
            'PT477-moreButtonSg1P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-moreButtonSg1P3.png',
        );
        this.load.image(
            'PT477-pleaseButtonSg1P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-pleaseButtonSg1P3.png',
        );
        this.load.image(
            'PT477-stopButtonSg1P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-stopButtonSg1P3.png',
        );
        this.load.image(
            'PT477-thankYouButtonSg1P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-thankYouButtonSg1P3.png',
        );
        this.load.image(
            'PT477-moreButtonSelectedSg1P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-moreButtonSelectedSg1P3.png',
        );
        this.load.image(
            'PT477-pleaseButtonSelectedSg1P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-pleaseButtonSelectedSg1P3.png',
        );
        this.load.image(
            'PT477-stopButtonSelectedSg1P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-stopButtonSelectedSg1P3.png',
        );
        this.load.image(
            'PT477-thankYouButtonSelectedSg1P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-thankYouButtonSelectedSg1P3.png',
        );
        this.load.image(
            'PT477-moreButtonSg2P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-moreButtonSg2P3.png',
        );
        this.load.image(
            'PT477-pleaseButtonSg2P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-pleaseButtonSg2P3.png',
        );
        this.load.image(
            'PT477-stopButtonSg2P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-stopButtonSg2P3.png',
        );
        this.load.image(
            'PT477-thankYouButtonSg2P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-thankYouButtonSg2P3.png',
        );
        this.load.image(
            'PT477-moreButtonSelectedSg2P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-moreButtonSelectedSg2P3.png',
        );
        this.load.image(
            'PT477-pleaseButtonSelectedSg2P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-pleaseButtonSelectedSg2P3.png',
        );
        this.load.image(
            'PT477-stopButtonSelectedSg2P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-stopButtonSelectedSg2P3.png',
        );
        this.load.image(
            'PT477-thankYouButtonSelectedSg2P3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-thankYouButtonSelectedSg2P3.png',
        );

        // P3 Spine Images
        this.load.image(
            'PT477-moreSpineImageP3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-moreSpineImageP3.png',
        );
        this.load.image(
            'PT477-stopSpineImageP3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-stopSpineImageP3.png',
        );
        this.load.image(
            'PT477-thankYouSpineImageP3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-thankYouSpineImageP3.png',
        );
        this.load.image(
            'PT477-pleaseSpineImageP3',
            './assets/g-sign-and-communicate/PT477-Player_3/PT477-pleaseSpineImageP3.png',
        );

        // PlayerFour Button Assets
        this.load.image(
            'PT477-moreButtonSg1P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-moreButtonSg1P4.png',
        );
        this.load.image(
            'PT477-pleaseButtonSg1P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-pleaseButtonSg1P4.png',
        );
        this.load.image(
            'PT477-stopButtonSg1P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-stopButtonSg1P4.png',
        );
        this.load.image(
            'PT477-thankYouButtonSg1P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-thankYouButtonSg1P4.png',
        );
        this.load.image(
            'PT477-moreButtonSelectedSg1P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-moreButtonSelectedSg1P4.png',
        );
        this.load.image(
            'PT477-pleaseButtonSelectedSg1P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-pleaseButtonSelectedSg1P4.png',
        );
        this.load.image(
            'PT477-stopButtonSelectedSg1P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-stopButtonSelectedSg1P4.png',
        );
        this.load.image(
            'PT477-thankYouButtonSelectedSg1P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-thankYouButtonSelectedSg1P4.png',
        );
        this.load.image(
            'PT477-moreButtonSg2P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-moreButtonSg2P4.png',
        );
        this.load.image(
            'PT477-pleaseButtonSg2P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-pleaseButtonSg2P4.png',
        );
        this.load.image(
            'PT477-stopButtonSg2P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-stopButtonSg2P4.png',
        );
        this.load.image(
            'PT477-thankYouButtonSg2P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-thankYouButtonSg2P4.png',
        );
        this.load.image(
            'PT477-moreButtonSelectedSg2P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-moreButtonSelectedSg2P4.png',
        );
        this.load.image(
            'PT477-pleaseButtonSelectedSg2P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-pleaseButtonSelectedSg2P4.png',
        );
        this.load.image(
            'PT477-stopButtonSelectedSg2P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-stopButtonSelectedSg2P4.png',
        );
        this.load.image(
            'PT477-thankYouButtonSelectedSg2P4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-thankYouButtonSelectedSg2P4.png',
        );

        // P4 Spine Images
        this.load.image(
            'PT477-moreSpineImageP4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-moreSpineImageP4.png',
        );
        this.load.image(
            'PT477-stopSpineImageP4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-stopSpineImageP4.png',
        );
        this.load.image(
            'PT477-thankYouSpineImageP4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-thankYouSpineImageP4.png',
        );
        this.load.image(
            'PT477-pleaseSpineImageP4',
            './assets/g-sign-and-communicate/PT477-Player_4/PT477-pleaseSpineImageP4.png',
        );

        // Spine Signs and Gesture Animation Assets
        this.load.spine(
            'PT477-signsAndGestures',
            './assets/g-sign-and-communicate/PT477-SignsSpine/PT477-SignsAndGestures-LAYOUT.json',
            './assets/g-sign-and-communicate/PT477-SignsSpine/PT477-SignsAndGestures-LAYOUT.atlas',
        );

        // Sparkle Animation Asset
        this.load.spine(
            'PT477-starSprinkle',
            './assets/g-sign-and-communicate/PT477-StarSprinkle/PT477-starSprinkle.json',
            './assets/g-sign-and-communicate/PT477-StarSprinkle/PT477-starSprinkle.atlas',
        );

        // OVERLAY
        this.load.image(
            'PT477-Overlay',
            'assets/g-sign-and-communicate/PT477-Overlay/PT477-Overlay.png',
        );

        // Segment 2 Assets
        // PlayerOne Segement2

        this.load.image(
            'PT477-P1-Bowl',
            'assets/g-sign-and-communicate/PT477-Player_1/PT477-Bowl.png',
        );
        this.load.image(
            'PT477-P1-Ball1',
            'assets/g-sign-and-communicate/PT477-Player_1/PT477-Ball1.png',
        );
        this.load.image(
            'PT477-P1-Ball2',
            'assets/g-sign-and-communicate/PT477-Player_1/PT477-Ball2.png',
        );
        this.load.image(
            'PT477-P1-Ball3',
            'assets/g-sign-and-communicate/PT477-Player_1/PT477-Ball3.png',
        );
        this.load.image(
            'PT477-P1-Ball4',
            'assets/g-sign-and-communicate/PT477-Player_1/PT477-Ball4.png',
        );

        // PlayerTwo Segement2

        this.load.image(
            'PT477-P2-Bowl',
            'assets/g-sign-and-communicate/PT477-Player_2/PT477-Bowl.png',
        );
        this.load.image(
            'PT477-P2-Ball1',
            'assets/g-sign-and-communicate/PT477-Player_2/PT477-Ball1.png',
        );
        this.load.image(
            'PT477-P2-Ball2',
            'assets/g-sign-and-communicate/PT477-Player_2/PT477-Ball2.png',
        );
        this.load.image(
            'PT477-P2-Ball3',
            'assets/g-sign-and-communicate/PT477-Player_2/PT477-Ball3.png',
        );
        this.load.image(
            'PT477-P2-Ball4',
            'assets/g-sign-and-communicate/PT477-Player_2/PT477-Ball4.png',
        );

        // PlayerThree Segement2

        this.load.image(
            'PT477-P3-Bowl',
            'assets/g-sign-and-communicate/PT477-Player_3/PT477-Bowl.png',
        );
        this.load.image(
            'PT477-P3-Ball1',
            'assets/g-sign-and-communicate/PT477-Player_3/PT477-Ball1.png',
        );
        this.load.image(
            'PT477-P3-Ball2',
            'assets/g-sign-and-communicate/PT477-Player_3/PT477-Ball2.png',
        );
        this.load.image(
            'PT477-P3-Ball3',
            'assets/g-sign-and-communicate/PT477-Player_3/PT477-Ball3.png',
        );
        this.load.image(
            'PT477-P3-Ball4',
            'assets/g-sign-and-communicate/PT477-Player_3/PT477-Ball4.png',
        );

        // PlayerFour Segement2

        this.load.image(
            'PT477-P4-Bowl',
            'assets/g-sign-and-communicate/PT477-Player_4/PT477-Bowl.png',
        );
        this.load.image(
            'PT477-P4-Ball1',
            'assets/g-sign-and-communicate/PT477-Player_4/PT477-Ball1.png',
        );
        this.load.image(
            'PT477-P4-Ball2',
            'assets/g-sign-and-communicate/PT477-Player_4/PT477-Ball2.png',
        );
        this.load.image(
            'PT477-P4-Ball3',
            'assets/g-sign-and-communicate/PT477-Player_4/PT477-Ball3.png',
        );
        this.load.image(
            'PT477-P4-Ball4',
            'assets/g-sign-and-communicate/PT477-Player_4/PT477-Ball4.png',
        );

        // DRFizmo EndSequence ThankYou Spine
        this.load.spine(
            'PT477-Fizmo-ThankYou',
            'assets/g-sign-and-communicate/PT477-DRFizmoThankYouSpine/PT477-Fizzmo-animation.json',
            'assets/g-sign-and-communicate/PT477-DRFizmoThankYouSpine/PT477-Fizzmo-animation.atlas',
        );

        // Ball Collected Inside Jar
        this.load.audio(
            'PT477-BallCollected',
            'assets/g-sign-and-communicate/PT477-audio/PT477-BallCollected.wav',
        );

        // Ball Rejected from Jar
        this.load.audio(
            'PT477-RejectSound',
            'assets/g-sign-and-communicate/PT477-audio/PT477-PopRejectSound.wav',
        );

        this.load.audio(
            'PT477-SignSelectedAudio',
            'assets/g-sign-and-communicate/PT477-audio/PT477-clickButtonSelect.wav',
        );

        this.load.audio(
            'PT477-Seg2CorrectDrop',
            'assets/g-sign-and-communicate/PT477-audio/PT477-CorrectDrop.wav',
        );
    }

    hostAudioInstruction01: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction02: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction03: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction04: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction05: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction06: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction07: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction08: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction09: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction10: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction11: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction12: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction13: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction14: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction15: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction16: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction17: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction18: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction19: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction20: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction21: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction22: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstruction23: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstructionSegmentTwo1: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstructionSegmentTwo2: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstructionSegmentTwo3: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstructionSegmentTwo4: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstructionSegmentTwo5: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstructionSegmentTwo6: any = {
        priority: 1,
        audioFile: null,
    };

    hostAudioInstructionSegmentTwo7: any = {
        priority: 1,
        audioFile: null,
    };

    currentPlayingAudio: any;

    player: PlayerData[] = [];
    transitionScene: any;
    loggedInStatus: any = [true, true, true, true];

    currentGameState: string;

    backgroundAudio: any;

    segment1: Segment1;
    segment2: Segment2;
    segment3: Segment3;
    segment4: Segment4;
    segment5: Segment5;

    bottomPlayerButtonSparkle: SpineGameObject;
    rightPlayerButtonSparkle: SpineGameObject;
    topPlayerButtonSparkle: SpineGameObject;
    leftPlayerButtonSparkle: SpineGameObject;

    create() {
        this.currentGameState = this.GameState.gameStart;

        this.segment1 = new Segment1(this);
        this.segment2 = new Segment2(this);
        this.segment3 = new Segment3(this);
        this.segment4 = new Segment4(this);
        this.segment5 = new Segment5(this);

        console.warn("WITHIN THE GAME :: SIGNANDGESTURES");

        this.loadBackground();
        this.loadAllAssets();
        this.loadAudios();
        this.startNextGamePlay();
        // this.segment5.Start();

    }

    onBottomPlayerLoggedOut() {
        console.log("Logout Called, status is :: ", this.loggedInStatus[0]);
        if (this.currentGameState === this.GameState.gameStart) {
            this.player[0].DisableAssetOnLogout();
        }

        if (this.currentGameState === this.GameState.segment1) {
            this.segment1.onPlayerLogout(0);
        }

        if (this.currentGameState === this.GameState.segment2) {
            this.segment2.onPlayerLogout(0);
        }

        if (this.currentGameState === this.GameState.segment3) {
            this.segment3.onPlayerLogout(0);
        }

        if (this.currentGameState === this.GameState.segment4) {
            this.segment4.onPlayerLogout(0);
        }
    }

    onBottomPlayerLoggedIn() {
        console.log("Login Called, status is :: ", this.loggedInStatus[0]);
        if (this.currentGameState === this.GameState.gameStart) {
            this.player[0].EnableAssetOnLogin();
        }

        if (this.currentGameState === this.GameState.segment1) {
            this.segment1.onPlayerLogin(0);
        }

        if (this.currentGameState === this.GameState.segment2) {
            this.segment2.onPlayerLogin(0);
        }

        if (this.currentGameState === this.GameState.segment3) {
            this.segment3.onPlayerLogin(0);
        }

        if (this.currentGameState === this.GameState.segment4) {
            this.segment4.onPlayerLogin(0);
        }
    }

    onRightPlayerLoggedOut() {
        if (this.currentGameState === this.GameState.gameStart) {
            this.player[1].DisableAssetOnLogout();
        }

        if (this.currentGameState === this.GameState.segment1) {
            this.segment1.onPlayerLogout(1);
        }

        if (this.currentGameState === this.GameState.segment2) {
            this.segment2.onPlayerLogout(1);
        }

        if (this.currentGameState === this.GameState.segment3) {
            this.segment3.onPlayerLogout(1);
        }

        if (this.currentGameState === this.GameState.segment4) {
            this.segment4.onPlayerLogout(1);
        }
    }

    onRightPlayerLoggedIn() {
        if (this.currentGameState === this.GameState.gameStart) {
            this.player[1].EnableAssetOnLogin();
        }

        if (this.currentGameState === this.GameState.segment1) {
            this.segment1.onPlayerLogin(1);
        }

        if (this.currentGameState === this.GameState.segment2) {
            this.segment2.onPlayerLogin(1);
        }

        if (this.currentGameState === this.GameState.segment3) {
            this.segment3.onPlayerLogin(1);
        }

        if (this.currentGameState === this.GameState.segment4) {
            this.segment4.onPlayerLogin(1);
        }
    }

    onTopPlayerLoggedOut() {
        if (this.currentGameState === this.GameState.gameStart) {
            this.player[2].DisableAssetOnLogout();
        }
        if (this.currentGameState === this.GameState.segment1) {
            this.segment1.onPlayerLogout(2);
        }

        if (this.currentGameState === this.GameState.segment2) {
            this.segment2.onPlayerLogout(2);
        }

        if (this.currentGameState === this.GameState.segment3) {
            this.segment3.onPlayerLogout(2);
        }

        if (this.currentGameState === this.GameState.segment4) {
            this.segment4.onPlayerLogout(2);
        }
    }

    onTopPlayerLoggedIn() {
        if (this.currentGameState === this.GameState.gameStart) {
            this.player[2].EnableAssetOnLogin();
        }
        if (this.currentGameState === this.GameState.segment1) {
            this.segment1.onPlayerLogin(2);
        }

        if (this.currentGameState === this.GameState.segment2) {
            this.segment2.onPlayerLogin(2);
        }

        if (this.currentGameState === this.GameState.segment3) {
            this.segment3.onPlayerLogin(2);
        }

        if (this.currentGameState === this.GameState.segment4) {
            this.segment4.onPlayerLogin(2);
        }
    }

    onLeftPlayerLoggedOut() {
        if (this.currentGameState === this.GameState.gameStart) {
            this.player[3].DisableAssetOnLogout();
        }
        if (this.currentGameState === this.GameState.segment1) {
            this.segment1.onPlayerLogout(3);
        }

        if (this.currentGameState === this.GameState.segment2) {
            this.segment2.onPlayerLogout(3);
        }

        if (this.currentGameState === this.GameState.segment3) {
            this.segment3.onPlayerLogout(3);
        }

        if (this.currentGameState === this.GameState.segment4) {
            this.segment4.onPlayerLogout(3);
        }
    }

    onLeftPlayerLoggedIn() {
        if (this.currentGameState === this.GameState.gameStart) {
            this.player[3].EnableAssetOnLogin();
        }
        if (this.currentGameState === this.GameState.segment1) {
            this.segment1.onPlayerLogin(3);
        }

        if (this.currentGameState === this.GameState.segment2) {
            this.segment2.onPlayerLogin(3);
        }

        if (this.currentGameState === this.GameState.segment3) {
            this.segment3.onPlayerLogin(3);
        }

        if (this.currentGameState === this.GameState.segment4) {
            this.segment4.onPlayerLogin(3);
        }
    }

    loadBackground() {
        this.add.sprite(0, 0, 'PT477-backgroundImage')
            .setOrigin(0, 0)
            .setDepth(0.01);

        this.backgroundAudio = this.AddAudio('PT477-backgroundAudio', backgroundNormalVolume);
        this.backgroundAudio.play();
        this.backgroundAudio.setLoop(true);
    }

    loadAllAssets = () => {
        // Loop through 0 to 3 to load all the assets and the host characters in playerData's object
        for (let i = 0; i < 4; i++) {
            this.player.push(new PlayerData(
                this,
                this.loadHostCharacters(i),
                'Fizzmo_UI_Window_1',
                this.loggedInStatus[i],
                this.GetPlayerName(i),
                this.loadAllSegmentAssets(i),
                4,
                -1,
                0,
                8
            ));
        };
    }

    GetPlayerName = (playerIndex: number): string => playerIndex === 0 ? 'bottom'
        : playerIndex === 1 ? 'right'
            : playerIndex === 2 ? 'top'
                : playerIndex === 3 ? 'left'
                    : '';

    loadHostCharacters = (playerIndex: number): SpineGameObject | any => {
        return playerIndex === 0 ? this.add.spine(697, 1048, 'PT477-HostCharacter').setScale(0).setAlpha(0).setDepth(2) :
            playerIndex === 1 ? this.add.spine(1887.5, 803, 'PT477-HostCharacter').setScale(0).setAlpha(0).setDepth(2).setAngle(270) :
                playerIndex === 2 ? this.add.spine(1223, 32.5, 'PT477-HostCharacter').setScale(0).setAlpha(0).setDepth(2).setAngle(180) :
                    playerIndex === 3 ? this.add.spine(40, 277, 'PT477-HostCharacter').setScale(0).setAlpha(0).setDepth(2).setAngle(90) :
                        null;
    }

    loadAllSegmentAssets = (playerIndex: number): Phaser.GameObjects.Sprite[] | SpineGameObject[] => {
        if (playerIndex === 0) {
            // Load All BottomPlayer Assets for Segment 1
            let segment1BottomPlayerAssets: any = [];

            let p1BlackBoard = this.add
                .sprite(0, 0, 'PT477-chalkBoardPlayerOne')
                .setDepth(0.101);
            p1BlackBoard.setPosition(
                this.width / 2,
                this.height - p1BlackBoard.height + 95,
            )
                .setName('P1BlackBoard');

            segment1BottomPlayerAssets.push(p1BlackBoard);
            segment1BottomPlayerAssets.push(this.AddSprite(
                'PT477-pleaseButtonSg1P1', 1223, 928, 0.2, 1, 0, 'P1S1PleaseButton', true
            ));

            segment1BottomPlayerAssets.push(this.AddSprite(
                'PT477-moreSpineImageP1', p1BlackBoard.x, p1BlackBoard.y, 0.2, 1, 0, 'P1S1MoreSpineImage'
            ));

            segment1BottomPlayerAssets.push(this.AddSprite(
                'PT477-pleaseSpineImageP1', p1BlackBoard.x, p1BlackBoard.y, 0.2, 1, 0, 'P1S1PleaseSpineImage'
            ));

            segment1BottomPlayerAssets.push(this.AddSprite(
                'PT477-thankYouSpineImageP1', p1BlackBoard.x + 10, p1BlackBoard.y - 15, 0.2, 1, 0, 'P1S1ThankYouSpineImage'
            ));

            segment1BottomPlayerAssets.push(this.AddSprite(
                'PT477-stopSpineImageP1', p1BlackBoard.x, p1BlackBoard.y, 0.2, 1, 0, 'P1S1StopSpineImage'
            ));

            let signSpine: any = this.AddSpine(
                'PT477-signsAndGestures', p1BlackBoard.x - 2.5, p1BlackBoard.y + 161.65, 0.22, 1, 1, 'P1SpineAsset'
            )
                .setAngle(0);

            segment1BottomPlayerAssets.push(signSpine);

            // Load Sparkle Anims : Bottom Player Button
            segment1BottomPlayerAssets.push(this.loadSparkleAnims(1223, 978, 0));

            // Segment Two Asset Start here
            segment1BottomPlayerAssets.push(this.AddSprite(
                'PT477-thankYouButtonSg1P1', 1223, 928, 0.2, 1, 0, 'P1S2ThankYouButton', true
            ));

            // Segment Three Asset Start here
            segment1BottomPlayerAssets.push(this.AddSprite(
                'PT477-moreButtonSg1P1', 1223, 928, 0.2, 1, 0, 'P1S3MoreYouButton', true
            ));

            // Segment Four Asset Start here
            segment1BottomPlayerAssets.push(this.AddSprite(
                'PT477-stopButtonSg1P1', 1223, 928, 0.2, 1, 0, 'P1S4StopYouButton', true
            ));

            // Segment 5 Assets Start here


            return segment1BottomPlayerAssets;
        } else if (playerIndex === 1) {
            // Load All RightPlayer Assets for Segment 1
            let segment1RightPlayerAssets: any = [];

            let p2BlackBoard = this.add
                .sprite(0, 0, 'PT477-chalkBoardPlayerTwo')
                .setDepth(0.101);
            p2BlackBoard.setPosition(
                this.width - p2BlackBoard.width + 95,
                this.height / 2,
            );

            segment1RightPlayerAssets.push(p2BlackBoard);
            segment1RightPlayerAssets.push(this.AddSprite(
                'PT477-pleaseButtonSg1P2', 1777.5, 293, 0.2, 1, 0, 'P2S1PleaseButton', true
            ));

            segment1RightPlayerAssets.push(this.AddSprite(
                'PT477-moreSpineImageP2', p2BlackBoard.x, p2BlackBoard.y, 0.2, 1, 0, 'P2S1MoreSpineImage'
            ));

            segment1RightPlayerAssets.push(this.AddSprite(
                'PT477-pleaseSpineImageP2', p2BlackBoard.x, p2BlackBoard.y, 0.2, 1, 0, 'P2S1PleaseSpineImage'
            ));

            segment1RightPlayerAssets.push(this.AddSprite(
                'PT477-thankYouSpineImageP2', p2BlackBoard.x, p2BlackBoard.y, 0.2, 1, 0, 'P2S1ThankYouSpineImage'
            ));

            segment1RightPlayerAssets.push(this.AddSprite(
                'PT477-stopSpineImageP2', p2BlackBoard.x, p2BlackBoard.y, 0.2, 1, 0, 'P2S1StopSpineImage'
            ));

            let signSpine: any = this.AddSpine(
                'PT477-signsAndGestures', p2BlackBoard.x + 161.65, p2BlackBoard.y + 2.5, 0.22, 1, 1, 'P2SpineAsset'
            )
                .setAngle(270);

            segment1RightPlayerAssets.push(signSpine);

            // Load Sparkle Anims : Right Player Button
            segment1RightPlayerAssets.push(this.loadSparkleAnims(1777.5, 343, 270));

            // Segment Two Assets Start here
            segment1RightPlayerAssets.push(this.AddSprite(
                'PT477-thankYouButtonSg1P2', 1777.5, 293, 0.2, 1, 0, 'P2S2ThankYouButton', true
            ));

            // Segment Three Asset Start here
            segment1RightPlayerAssets.push(this.AddSprite(
                'PT477-moreButtonSg1P2', 1777.5, 293, 0.2, 1, 0, 'P2S3MoreYouButton', true
            ));

            // Segment Four Asset Start here
            segment1RightPlayerAssets.push(this.AddSprite(
                'PT477-stopButtonSg1P2', 1777.5, 293, 0.2, 1, 0, 'P2S4StopYouButton', true
            ));

            return segment1RightPlayerAssets;
        } else if (playerIndex === 2) {
            // Load All TopPlayer Assets for Segment 1
            let segment1TopPlayerAssets: any = [];

            let p3BlackBoard = this.add
                .sprite(0, 0, 'PT477-chalkBoardPlayerThree')
                .setDepth(0.101);
            p3BlackBoard.setPosition(
                this.width / 2,
                p3BlackBoard.height - 95,
            );

            segment1TopPlayerAssets.push(p3BlackBoard);
            segment1TopPlayerAssets.push(this.AddSprite(
                'PT477-pleaseButtonSg1P3', 697, 147.5, 0.2, 1, 0, 'P3S1PleaseButton', true
            ));

            segment1TopPlayerAssets.push(this.AddSprite(
                'PT477-moreSpineImageP3', p3BlackBoard.x, p3BlackBoard.y, 0.2, 1, 0, 'P3S1MoreSpineImage'
            ));

            segment1TopPlayerAssets.push(this.AddSprite(
                'PT477-pleaseSpineImageP3', p3BlackBoard.x, p3BlackBoard.y, 0.2, 1, 0, 'P3S1PleaseSpineImage'
            ));

            segment1TopPlayerAssets.push(this.AddSprite(
                'PT477-thankYouSpineImageP3', p3BlackBoard.x - 10, p3BlackBoard.y + 15, 0.2, 1, 0, 'P3S1ThankYouSpineImage'
            ));

            segment1TopPlayerAssets.push(this.AddSprite(
                'PT477-stopSpineImageP3', p3BlackBoard.x + 10, p3BlackBoard.y + 15, 0.2, 1, 0, 'P3S1StopSpineImage'
            ));

            let signSpine: any = this.AddSpine(
                'PT477-signsAndGestures', p3BlackBoard.x + 2.55, 159, 0.22, 1, 1, 'P3SpineAsset'
            )
                .setAngle(180);

            segment1TopPlayerAssets.push(signSpine);

            // Load Sparkle Anims : Top Player Button
            segment1TopPlayerAssets.push(this.loadSparkleAnims(697, 207.5, 180));

            // Segment two Assets Start from here
            segment1TopPlayerAssets.push(this.AddSprite(
                'PT477-thankYouButtonSg1P3', 697, 147.5, 0.2, 1, 0, 'P3S1ThankYouButton', true
            ));

            // Segment Three Asset Start here
            segment1TopPlayerAssets.push(this.AddSprite(
                'PT477-moreButtonSg1P3', 697, 147.5, 0.2, 1, 0, 'P3S3MoreYouButton', true
            ));

            // Segment Four Asset Start here
            segment1TopPlayerAssets.push(this.AddSprite(
                'PT477-stopButtonSg1P3', 697, 147.5, 0.2, 1, 0, 'P3S4StopYouButton', true
            ));

            return segment1TopPlayerAssets;
        } else {
            // Load All LeftPlayer Assets for Segment 1
            let segment1LeftPlayerAssets: any = [];

            let p4BlackBoard = this.add
                .sprite(0, 0, 'PT477-chalkBoardPlayerFour')
                .setDepth(0.101);
            p4BlackBoard.setPosition(
                p4BlackBoard.width - 95,
                this.height / 2,
            );

            segment1LeftPlayerAssets.push(p4BlackBoard);
            segment1LeftPlayerAssets.push(this.AddSprite(
                'PT477-pleaseButtonSg1P4', 142.5, 788, 0.2, 1, 0, 'P4S1PleaseButton', true
            ));

            segment1LeftPlayerAssets.push(this.AddSprite(
                'PT477-moreSpineImageP4', p4BlackBoard.x, p4BlackBoard.y, 0.2, 1, 0, 'P4S1MoreSpineImage'
            ));

            segment1LeftPlayerAssets.push(this.AddSprite(
                'PT477-pleaseSpineImageP4', p4BlackBoard.x, p4BlackBoard.y, 0.2, 1, 0, 'P4S1PleaseSpineImage'
            ));

            segment1LeftPlayerAssets.push(this.AddSprite(
                'PT477-thankYouSpineImageP4', p4BlackBoard.x + 10, p4BlackBoard.y + 15, 0.2, 1, 0, 'P4S1ThankYouSpineImage'
            ));

            segment1LeftPlayerAssets.push(this.AddSprite(
                'PT477-stopSpineImageP4', p4BlackBoard.x + 10, p4BlackBoard.y, 0.2, 1, 0, 'P4S1StopSpineImage'
            ));

            let signSpine: any = this.AddSpine(
                'PT477-signsAndGestures', 159, p4BlackBoard.y - 2.5, 0.22, 1, 1, 'P4SpineAsset'
            )
                .setAngle(90);

            segment1LeftPlayerAssets.push(signSpine);

            // Load Sparkle Anims : Left Player Button
            segment1LeftPlayerAssets.push(this.loadSparkleAnims(142.5, 828, 90));

            // Segment Two Asset Start here
            segment1LeftPlayerAssets.push(this.AddSprite(
                'PT477-thankYouButtonSg1P4', 142.5, 788, 0.2, 1, 0, 'P4S1ThankYouButton', true
            ));

            // Segment Three Asset Start here
            segment1LeftPlayerAssets.push(this.AddSprite(
                'PT477-moreButtonSg1P4', 142.5, 788, 0.2, 1, 0, 'P4S3MoreYouButton', true
            ));

            // Segment Four Asset Start here
            segment1LeftPlayerAssets.push(this.AddSprite(
                'PT477-stopButtonSg1P4', 142.5, 788, 0.2, 1, 0, 'P4S4StopYouButton', true
            ));

            return segment1LeftPlayerAssets;
        }
    }

    loadAudios() {
        // Load All Assitance Prompts / Host Audios
        this.loadAllAssistancePrompts();

        // Load All SFX
    }

    loadAllAssistancePrompts() {
        // Load all host audios
        this.hostAudioInstruction01.audioFile = this.sound.add('PT477-hostAudio01');
        this.hostAudioInstruction02.audioFile = this.sound.add('PT477-hostAudio02');
        this.hostAudioInstruction03.audioFile = this.sound.add('PT477-hostAudio03');
        this.hostAudioInstruction04.audioFile = this.sound.add('PT477-hostAudio04');
        this.hostAudioInstruction05.audioFile = this.sound.add('PT477-hostAudio05');
        this.hostAudioInstruction06.audioFile = this.sound.add('PT477-hostAudio06');
        this.hostAudioInstruction07.audioFile = this.sound.add('PT477-hostAudio07');
        this.hostAudioInstruction08.audioFile = this.sound.add('PT477-hostAudio08');
        this.hostAudioInstruction09.audioFile = this.sound.add('PT477-hostAudio09');
        this.hostAudioInstruction10.audioFile = this.sound.add('PT477-hostAudio10');
        this.hostAudioInstruction11.audioFile = this.sound.add('PT477-hostAudio11');
        this.hostAudioInstruction12.audioFile = this.sound.add('PT477-hostAudio12');
        this.hostAudioInstruction13.audioFile = this.sound.add('PT477-hostAudio13');
        this.hostAudioInstruction14.audioFile = this.sound.add('PT477-hostAudio14');
        this.hostAudioInstruction15.audioFile = this.sound.add('PT477-hostAudio15');
        this.hostAudioInstruction16.audioFile = this.sound.add('PT477-hostAudio16');
        this.hostAudioInstruction17.audioFile = this.sound.add('PT477-hostAudio17');
        this.hostAudioInstruction18.audioFile = this.sound.add('PT477-hostAudio18');
        this.hostAudioInstruction19.audioFile = this.sound.add('PT477-hostAudio19');
        this.hostAudioInstruction20.audioFile = this.sound.add('PT477-hostAudio20');
        this.hostAudioInstruction21.audioFile = this.sound.add('PT477-hostAudio21');
        this.hostAudioInstruction22.audioFile = this.sound.add('PT477-hostAudio22');
        this.hostAudioInstruction23.audioFile = this.sound.add('PT477-hostAudio23');
        this.hostAudioInstructionSegmentTwo1.audioFile = this.sound.add('PT477-hostAudio-SG2-01');
        this.hostAudioInstructionSegmentTwo2.audioFile = this.sound.add('PT477-hostAudio-SG2-02');
        this.hostAudioInstructionSegmentTwo3.audioFile = this.sound.add('PT477-hostAudio-SG2-03');
        this.hostAudioInstructionSegmentTwo4.audioFile = this.sound.add('PT477-hostAudio-SG2-04');
        this.hostAudioInstructionSegmentTwo5.audioFile = this.sound.add('PT477-hostAudio-SG2-05');
        this.hostAudioInstructionSegmentTwo6.audioFile = this.sound.add('PT477-hostAudio-SG2-06');
        this.hostAudioInstructionSegmentTwo7.audioFile = this.sound.add('PT477-hostAudio-SG2-07');
    }

    isAllSegmentCompleted: boolean = false;
    startNextGamePlay() {
        if (this.isAllSegmentCompleted) {
            // Call the End Game
            console.log("Game End");
        } else {
            if (this.currentGameState === this.GameState.gameStart
                && !this.segment1.isSegmentCompleted) {
                this.segment1.Start();
                return;
            }
            else if (this.currentGameState === this.GameState.segment1
                && !this.segment2.isSegmentCompleted) {
                this.segment2.Start();
            }
            else if (this.currentGameState === this.GameState.segment2
                && !this.segment3.isSegmentCompleted) {
                this.segment3.Start();
            }
            else if (this.currentGameState === this.GameState.segment3
                && !this.segment4.isSegmentCompleted) {
                this.segment4.Start();
            }
            else if (this.currentGameState === this.GameState.segment4
                && !this.segment5.isSegmentCompleted) {
                this.segment5.Start();
            }
            else {
                this.isAllSegmentCompleted = true;
                this.startNextGamePlay();
            }
        }
    }

    update() { }

    loadSparkleAnims(
        postionX: number,
        postionY: number,
        angle: number,
    ) {
        let sparkleAnim: any = null;
        // Load Sparkle Anims 
        sparkleAnim = this.add
            .spine(
                postionX,
                postionY,
                'PT477-starSprinkle',
                'Stars_bar',
                true,
            )
            .setDepth(0.35);

        sparkleAnim.state.timeScale = 0.6;
        sparkleAnim.setAngle(angle);
        sparkleAnim.setAlpha(0);

        return sparkleAnim;
    }

    // Adding Button On Click Functionality
    AddButtonClickFunctionality(
        playerReference: string,
        playerButton: Phaser.GameObjects.Sprite,
        playerButtonSparkle: SpineGameObject,
        selectedButtonKey: string,
        buttonOffSetX: number,
        buttonOffSetY: number,
        playerParticipationIndicator: boolean,
        playerButtonWiggleConfiguration: any,
        CompleteSegment: (a: string) => void,
    ) {
        const self = this;
        // Disabling any prior input functions attached within the button
        playerButton.disableInteractive();

        playerButton.setInteractive();
        playerButton.on('pointerdown', () => {
            playerButton.disableInteractive();
            // Save the Participation Data of the player on the button click
            this.saveParticipationData(playerReference);

            // Play the button on click audio
            this.sound.add('PT477-selectSign', { volume: soundEffectsVolume }).play();

            // Remove the wiggle configuration 
            playerButtonWiggleConfiguration[this.getPlayerReferenceFromName(playerReference)].tween?.remove();

            playerButton.setScale(1);

            // Change the clicked button 'Texture' to highlighted image
            playerButton.setTexture(selectedButtonKey);

            // Add the Button Sparkle Configuration
            playerButtonSparkle.setPosition(
                playerButtonSparkle.x + buttonOffSetX,
                playerButtonSparkle.y + buttonOffSetY
            );
            playerButtonSparkle.setAlpha(1);

            // Send Reference to Complete the Segment
            CompleteSegment(playerReference);
        });
    }

    // Remove Player Reference from the Segment Switch Array
    RemoveReferenceAndContinue(
        playerReference: string,
        isButtonClickedReferenceArray: string[],
        CompleteSegment: (a: string) => void,
    ) {
        if (isButtonClickedReferenceArray.length > 0) {
            const popElements = isButtonClickedReferenceArray.filter(
                item => item.startsWith(playerReference),
            );

            for (let i = 0; i < popElements.length; i++) {
                const index = isButtonClickedReferenceArray.indexOf(popElements[i]);
                if (index !== -1) {
                    isButtonClickedReferenceArray.splice(index, 1);
                }
            }
        }

        if (isButtonClickedReferenceArray.length > 0) {
            CompleteSegment(isButtonClickedReferenceArray[0]);
        }
    }

    // Save Participation Data
    // Participation Indicators Controllers -
    // Save Participation Data only once per player, reset on logout
    bottomPlayerIndicators: boolean = false;
    topPlayerIndicators: boolean = false;
    leftPlayerIndicators: boolean = false;
    rightPlayerIndicators: boolean = false;

    // Function to trigger saving the participation data
    saveParticipationData(playerPosition: any) {
        switch (playerPosition) {
            case 'bottom':
            case 0:
                // for bottom child
                try {
                    if (this.transitionScene !== 'InstantGame' && !this.bottomPlayerIndicators) {
                        this.bottomPlayerIndicators = true;
                        console.log("BOTTOM PLAYER PARTICIPATION DATA RECORDED");
                        // getParticipationDetails(
                        //   'bottom',
                        //   'Child answers individual question',
                        //   this.childParticipationResponseB,
                        //   this.sceneObj,
                        // );
                    }
                } catch (error) {
                    console.log("Error Caught in the Participation Indicatior Bottom Player, no need to panic if local testing");
                }

                break;
            case 'right':
            case 1:
                // for right child
                try {
                    if (this.transitionScene !== 'InstantGame' && !this.rightPlayerIndicators) {
                        this.rightPlayerIndicators = true;
                        console.log("RIGHT PLAYER PARTICIPATION DATA RECORDED");
                        // getParticipationDetails(
                        //   'right',
                        //   'Child answers individual question',
                        //   this.childParticipationResponseR,
                        //   this.sceneObj,
                        // );
                    }
                } catch (error) {
                    console.log("Error Caught in the Participation Indicatior Right Player, no need to panic if local testing");
                }
                break;
            case 'top':
            case 2:
                // for top child
                try {
                    if (this.transitionScene !== 'InstantGame' && !this.topPlayerIndicators) {
                        this.topPlayerIndicators = true;
                        console.log("TOP PLAYER PARTICIPATION DATA RECORDED");
                        // getParticipationDetails(
                        //   'top',
                        //   'Child answers individual question',
                        //   this.childParticipationResponseT,
                        //   this.sceneObj,
                        // );
                    }
                } catch (error) {
                    console.log("Error Caught in the Participation Indicatior Top Player, no need to panic if local testing");
                }
                break;
            case 'left':
            case 3:
                // for left child
                try {
                    if (this.transitionScene !== 'InstantGame' && !this.leftPlayerIndicators) {
                        this.leftPlayerIndicators = true;
                        console.log("LEFT PLAYER PARTICIPATION DATA RECORDED");
                        // getParticipationDetails(
                        //   'left',
                        //   'Child answers individual question',
                        //   this.childParticipationResponseL,
                        //   this.sceneObj,
                        // );
                    }
                } catch (error) {
                    console.log("Error Caught in the Participation Indicatior Left Player, no need to panic if local testing");
                }
                break;
            default:
                console.log('Player Position did not matched');
                break;
        }
    }

    getPlayerParticipationFromIndex = (playerIndex: number): boolean => {
        const val = playerIndex === 0 ? this.bottomPlayerIndicators :
            playerIndex === 1 ? this.rightPlayerIndicators :
                playerIndex === 2 ? this.topPlayerIndicators :
                    playerIndex === 3 ? this.leftPlayerIndicators : false;

        return val;
    }

    // Utility Functions
    getPlayerReferenceFromIndex = (playerIndex: number): string => {
        const val = playerIndex === 0 ? 'bottom' :
            playerIndex === 1 ? 'right' :
                playerIndex === 2 ? 'top' :
                    playerIndex === 3 ? 'left' : '';

        return val;
    }

    getPlayerReferenceFromName = (playerIndex: string): number => {
        const val = playerIndex === 'bottom' ? 0 :
            playerIndex === 'right' ? 1 :
                playerIndex === 'top' ? 2 :
                    playerIndex === 'left' ? 3 : 0;

        return val;
    }

    // Button Pulse Configuration
    AddButtonPulseEffect = (playerButton: Phaser.GameObjects.Sprite) => {
        let pulseTween = this.tweens.add({
            targets: [playerButton],
            scaleX: playerButton.scaleX + 0.025,
            scaleY: playerButton.scaleY + 0.025,
            duration: 300,
            yoyo: true,
            repeat: -1,
        });

        return pulseTween;
    }

    // TODO : Make a common tween configuration
    ObjectFadeIn = (
        gameObject: Phaser.GameObjects.Sprite | SpineGameObject | any,
        alpha: number,
        duration: number
    ): Phaser.GameObjects.Sprite | SpineGameObject | any => {
        return this.tweens.add({
            targets: [gameObject],
            duration,
            alpha,
        });
    }

    poofType: any = {
        poofing: 'poofing',
        Steam_clouds: 'Steam clouds',
        Touch_early: 'Touch early',
        Tray_smoke: 'Tray smoke',
    }

    // Add Poof at any Particular Position
    AddPoof = (xCood: number, yCoord: number, scale: number, depth: number, playerIndex: number, animationName: string): SpineGameObject => {
        let angle: number = playerIndex === 0 ? 0 :
            playerIndex === 1 ? 270 :
                playerIndex === 2 ? 180 :
                    playerIndex === 3 ? 90 :
                        0;

        let poof = this.add.spine(xCood, yCoord, 'PT477-Poofing')
            .setScale(scale)
            .setDepth(depth)
            .setAngle(angle);

        if (!this.player[playerIndex].isLoggedIn) {
            poof.setVisible(false);
        }

        // Play Poofing Sound 
        this.sound.add('PT477-poof', { volume: soundEffectsVolume }).play();

        // Play Poofing Spine Animation
        poof.play(animationName, false);

        poof.once('complete', () => {
            poof.setAlpha(0);
            poof.destroy();
        });
        return poof;
    }

    // Function to add Spine Objects : 
    AddSpine = (spineKey: string, xCoord: number, yCoord: number, depth: number, spineScale: number, alpha: number, spineName: string = 'Spine'): SpineGameObject | any => {
        let spine = this.add.spine(xCoord, yCoord, spineKey)
            .setDepth(depth)
            .setScale(spineScale)
            .setAlpha(alpha)
            .setName(spineName);

        return spine;
    }

    // Function to add Images / Sprite : 
    AddSprite = (spriteKey: string, xCoord: number, yCoord: number, depth: number, spriteScale: number, alpha: number, spriteName: string = 'Image', isInteractable: boolean = false): Phaser.GameObjects.Sprite | any => {
        let sprite = this.add.sprite(xCoord, yCoord, spriteKey)
            .setDepth(depth)
            .setScale(spriteScale)
            .setAlpha(alpha)
            .setName(spriteName);

        if (isInteractable) {
            sprite.setInteractive({ pixelPerfect: true });
        }
        // console.log("The name of the buttons are :: ", spriteName);
        return sprite;
    }

    // Create's an Phaser Audio Object and returns back with the volume configuration :
    AddAudio = (audioKey: string, volume: number): any => {
        return this.sound.add(audioKey, {
            volume: volume,
        });
    }

    // Function to reduce the background audio
    reduceBackgroundAudio = () => {
        this.tweens.add({
            targets: [this.backgroundAudio],
            volume: backgroundLowVolume,
            duration: 250,
            ease: 'Power1',
        });
    }

    // Function to increase the background audio
    increaseBackgroundAudio = () => {
        this.tweens.add({
            targets: [this.backgroundAudio],
            volume: backgroundNormalVolume,
            duration: 250,
            ease: 'Power1',
        });
    }

    // Function to Play Audio and Set the Current Playing audio to the 
    // Audio which is being played currently
    PlayAudio = (audio: any) => {
        if (this.currentPlayingAudio?.isPlaying) {
            this.currentPlayingAudio.pause();
        }

        this.currentPlayingAudio = audio.audioFile;

        audio.audioFile.play();

        return audio.audioFile;
    }

    // Function to remove duplicate elements from the array
    removeDuplicates(arr: any) {
        return arr.filter((item: any, index: any) => arr.indexOf(item) === index);
    }
}
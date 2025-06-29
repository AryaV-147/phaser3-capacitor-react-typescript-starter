import Phaser from 'phaser';

export default class ShadersExample extends Phaser.Scene {
    apples: any[];
    texture: Phaser.Textures.DynamicTexture;
    r: number;

    backbutton: any;
    private backgroundImage: any;

    constructor() {
        super(
            {
                key: 'ShadersExample'
            });


    }


    preload() {

        //ex 1
        // this.load.image('checker', 'assets/samplesceneassets/checker.png');

        //ex 2, 3, 4, 14, 12, 13
        // this.load.glsl('bundle', 'assets/samplesceneassets/bundle.glsl.js');

        //ex 4
        // this.load.image('metal', 'assets/samplesceneassets/alien-metal.jpg');
        // this.load.image('grass', 'assets/samplesceneassets/grass.png');
        // this.load.image('tiles', 'assets/samplesceneassets/tiles.jpg');

        //ex 4, 14
        // this.load.image(
        //     'logo',
        //     './assets/samplesceneassets/phaser3-logo-alpha.png'
        // );

        //ex 5
        // this.load.glsl('fireball', 'assets/samplesceneassets/shader0.frag');

        //ex6, 9, 14
        // this.load.glsl('bundle', 'assets/samplesceneassets/bundle2.glsl.js');

        //ex8
        // this.load.glsl('wave', 'assets/samplesceneassets/shader1.frag');
        // this.load.image('pic', 'assets/samplesceneassets/sao-sinon.png');
        // this.load.image('bg', 'assets/samplesceneassets/purple-dots.png');

        //ex11
        // this.load.glsl('marble', 'assets/samplesceneassets/marble.glsl.js');
        // this.load.image('bird', 'assets/samplesceneassets/birdy.png');

        //ex12, 13
        // this.load.image('apple', 'assets/samplesceneassets/apple.png');

        //render texture
        this.load.image('brush', 'assets/samplesceneassets/soft8.png');
        this.load.image('tiles', 'assets/samplesceneassets/grass.png');
        this.load.image(
            'bg',
            './assets/samplesceneassets/Background.png'
        );

        this.load.image(
            'backbutton',
            './assets/samplesceneassets/backbutton.png'
        );

    }



    create() {
        // this.backbutton = this.add.sprite(100, 100, 'backbutton').setInteractive().setDepth(10).setScale(0.5);

        // this.backbutton.on('pointerdown', () => {

        //     this.loadScene('Example');
        // })


        //Example 1 shaders
        // const frag = `
        // precision mediump float;

        // uniform vec2 resolution;
        // uniform sampler2D iChannel0;

        // varying vec2 fragCoord;

        // void main ()
        // {
        //     vec2 uv = fragCoord / resolution.xy;

        //     vec4 pixel = texture2D(iChannel0, uv);

        //     gl_FragColor = vec4(uv.xyx * pixel.rgb, 1.0);
        // }
        // `;

        // const base = new Phaser.Display.BaseShader('simpleTexture', frag);

        // const shader = this.add.shader(base, 400, 300, 800, 600, ['checker']);


        //Example 2 shaders
        //     const s1 = `
        // /*
        // "Magic particles" by Emmanuel Keller aka Tambako - December 2015
        // License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
        // Contact: tamby@tambako.ch
        // */

        // precision mediump float;

        // uniform float time;
        // uniform vec2 resolution;
        // uniform sampler2D iChannel0;

        // varying vec2 fragCoord;

        // #define iTime time
        // #define iResolution resolution

        // vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }
        // vec4 texture(sampler2D s, vec2 c, float b) { return texture2D(s,c,b); }
        // vec4 texture(samplerCube s, vec3 c ) { return textureCube(s,c); }
        // vec4 texture(samplerCube s, vec3 c, float b) { return textureCube(s,c,b); }


        // #define twopi 6.28319
        // // Please be careful, setting complexity > 1 may crash your browser!
        // // 1: for mac computers
        // // 2: for computers with normal graphic card
        // // 3: for computers with good graphic cards
        // // 4: for gaming computers
        // #define complexity 1

        // // General particles constants
        // #if complexity == 1
        // const int nb_particles = 95;                                  // Number of particles on the screen at the same time. Be CAREFUL with big numbers of particles, 1000 is already a lot!
        // #elif complexity == 2
        // const int nb_particles = 160;
        // #elif complexity == 3
        // const int nb_particles = 280;
        // #elif complexity == 4
        // const int nb_particles = 500;
        // #endif
        // const vec2 gen_scale = vec2(0.60, 0.45);                      // To scale the particle positions, not the particles themselves
        // const vec2 middlepoint = vec2(0.35, 0.15);                    // Offset of the particles

        // // Particle movement constants
        // const vec2 gravitation = vec2(-0., -4.5);                     // Gravitation vector
        // const vec3 main_x_freq = vec3(0.4, 0.66, 0.78);               // 3 frequences (in Hz) of the harmonics of horizontal position of the main particle
        // const vec3 main_x_amp = vec3(0.8, 0.24, 0.18);                // 3 amplitudes of the harmonics of horizontal position of the main particle
        // const vec3 main_x_phase = vec3(0., 45., 55.);                 // 3 phases (in degrees) of the harmonics of horizontal position of the main particle
        // const vec3 main_y_freq = vec3(0.415, 0.61, 0.82);             // 3 frequences (in Hz) of the harmonics of vertical position of the main particle
        // const vec3 main_y_amp = vec3(0.72, 0.28, 0.15);               // 3 amplitudes of the harmonics of vertical position of the main particle
        // const vec3 main_y_phase = vec3(90., 120., 10.);               // 3 phases (in degrees) of the harmonics of vertical position of the main particle
        // const float part_timefact_min = 6.;                           // Specifies the minimum how many times the particle moves slower than the main particle when it's "launched"
        // const float part_timefact_max = 20.;                          // Specifies the maximum how many times the particle moves slower than the main particle when it's "launched"
        // const vec2 part_max_mov = vec2(0.28, 0.28);                   // Maxumum movement out of the trajectory in display units / s

        // // Particle time constants
        // const float time_factor = 0.75;                               // Time in s factor, <1. for slow motion, >1. for faster movement
        // const float start_time = 2.5;                                 // Time in s needed until all the nb_particles are "launched"
        // const float grow_time_factor = 0.15;                          // Time in s particles need to reach their max intensity after they are "launched"
        // #if complexity == 1
        // const float part_life_time_min = 0.9;                         // Minimum life time in s of a particle
        // const float part_life_time_max = 1.9;                         // Maximum life time in s of a particle
        // #elif complexity == 2
        // const float part_life_time_min = 1.0;
        // const float part_life_time_max = 2.5;
        // #elif complexity == 3
        // const float part_life_time_min = 1.1;
        // const float part_life_time_max = 3.2;
        // #elif complexity == 4
        // const float part_life_time_min = 1.2;
        // const float part_life_time_max = 4.0;
        // #endif

        // // Particle intensity constants
        // const float part_int_div = 40000.;                            // Divisor of the particle intensity. Tweak this value to make the particles more or less bright
        // const float part_int_factor_min = 0.1;                        // Minimum initial intensity of a particle
        // const float part_int_factor_max = 3.2;                        // Maximum initial intensity of a particle
        // const float part_spark_min_int = 0.25;                        // Minimum sparkling intensity (factor of initial intensity) of a particle
        // const float part_spark_max_int = 0.88;                        // Minimum sparkling intensity (factor of initial intensity) of a particle
        // const float part_spark_min_freq = 2.5;                        // Minimum sparkling frequence in Hz of a particle
        // const float part_spark_max_freq = 6.0;                        // Maximum sparkling frequence in Hz of a particle
        // const float part_spark_time_freq_fact = 0.35;                 // Sparkling frequency factor at the end of the life of the particle
        // const float mp_int = 12.;                                     // Initial intensity of the main particle
        // const float dist_factor = 3.;                                 // Distance factor applied before calculating the intensity
        // const float ppow = 2.3;                                      // Exponent of the intensity in function of the distance

        // // Particle color constants
        // const float part_min_hue = -0.13;                             // Minimum particle hue shift (spectrum width = 1.)
        // const float part_max_hue = 0.13;                              // Maximum particle hue shift (spectrum width = 1.)
        // const float part_min_saturation = 0.5;                        // Minimum particle saturation (0. to 1.)
        // const float part_max_saturation = 0.9;                        // Maximum particle saturation (0. to 1.)
        // const float hue_time_factor = 0.035;                          // Time-based hue shift
        // const float mp_hue = 0.5;                                     // Hue (shift) of the main particle
        // const float mp_saturation = 0.18;                             // Saturation (delta) of the main particle

        // // Particle star constants
        // const vec2 part_starhv_dfac = vec2(9., 0.32);                 // x-y transformation vector of the distance to get the horizontal and vertical star branches
        // const float part_starhv_ifac = 0.25;                          // Intensity factor of the horizontal and vertical star branches
        // const vec2 part_stardiag_dfac = vec2(13., 0.61);              // x-y transformation vector of the distance to get the diagonal star branches
        // const float part_stardiag_ifac = 0.19;                        // Intensity factor of the diagonal star branches

        // const float mb_factor = 0.73;                                 // Mix factor for the multipass motion blur factor

        // // Variables
        // float pst;
        // float plt;
        // float runnr;
        // float time2;
        // float time3;
        // float time4;

        // // From https://www.shadertoy.com/view/ldtGDn
        // vec3 hsv2rgb (vec3 hsv) { // from HSV to RGB color vector
        //     hsv.yz = clamp (hsv.yz, 0.0, 1.0);
        //     return hsv.z*(0.63*hsv.y*(cos(twopi*(hsv.x + vec3(0.0, 2.0/3.0, 1.0/3.0))) - 1.0) + 1.0);
        // }

        // // Simple "random" function
        // float random(float co)
        // {
        //     return fract(sin(co*12.989) * 43758.545);
        // }

        // // Gets the time at which a paticle is starting its "life"
        // float getParticleStartTime(int partnr)
        // {
        //     return start_time*random(float(partnr*2));
        // }

        // // Harmonic calculation, base is a vec4
        // float harms(vec3 freq, vec3 amp, vec3 phase, float time)
        // {
        //    float val = 0.;
        //    for (int h=0; h<3; h++)
        //       val+= amp[h]*cos(time*freq[h]*twopi + phase[h]/360.*twopi);
        //    return (1. + val)/2.;
        // }

        // // Gets the position of a particle in function of its number and the time
        // vec2 getParticlePosition(int partnr)
        // {  
        //    // Particle "local" time, when a particle is "reborn" its time starts with 0.0
        //    float part_timefact = mix(part_timefact_min, part_timefact_max, random(float(partnr*2 + 94) + runnr*1.5));
        //    float ptime = (runnr*plt + pst)*(-1./part_timefact + 1.) + time2/part_timefact;   
        //    vec2 ppos = vec2(harms(main_x_freq, main_x_amp, main_x_phase, ptime), harms(main_y_freq, main_y_amp, main_y_phase, ptime)) + middlepoint;

        //    // Particles randomly get away the main particle's orbit, in a linear fashion
        //    vec2 delta_pos = part_max_mov*(vec2(random(float(partnr*3-23) + runnr*4.), random(float(partnr*7+632) - runnr*2.5))-0.5)*(time3 - pst);

        //    // Calculation of the effect of the gravitation on the particles
        //    vec2 grav_pos = gravitation*pow(time4, 2.)/250.;
        //    return (ppos + delta_pos + grav_pos)*gen_scale;
        // }

        // // Gets the position of the main particle in function of the time
        // vec2 getParticlePosition_mp()
        // {
        //    vec2 ppos = vec2(harms(main_x_freq, main_x_amp, main_x_phase, time2), harms(main_y_freq, main_y_amp, main_y_phase, time2)) + middlepoint;
        //    return gen_scale*ppos;
        // }

        // // Gets the rgb color of a particle in function of its intensity and number
        // vec3 getParticleColor(int partnr, float pint)
        // {
        //    float hue;
        //    float saturation;

        //    saturation = mix(part_min_saturation, part_max_saturation, random(float(partnr*6 + 44) + runnr*3.3))*0.45/pint;
        //    hue = mix(part_min_hue, part_max_hue, random(float(partnr + 124) + runnr*1.5)) + hue_time_factor*time2;

        //    return hsv2rgb(vec3(hue, saturation, pint));
        // }

        // // Gets the rgb color the main particle in function of its intensity
        // vec3 getParticleColor_mp( float pint)
        // {
        //    float hue;
        //    float saturation;

        //    saturation = 0.75/pow(pint, 2.5) + mp_saturation;
        //    hue = hue_time_factor*time2 + mp_hue;

        //    return hsv2rgb(vec3(hue, saturation, pint));
        // }

        // // Main function to draw particles, outputs the rgb color.
        // vec3 drawParticles(vec2 uv, float timedelta)
        // {   
        //     // Here the time is "stetched" with the time factor, so that you can make a slow motion effect for example
        //     time2 = time_factor*(iTime + timedelta);
        //     vec3 pcol = vec3(0.);
        //     // Main particles loop
        //     for (int i=1; i<nb_particles; i++)
        //     {
        //         pst = getParticleStartTime(i); // Particle start time
        //         plt = mix(part_life_time_min, part_life_time_max, random(float(i*2-35))); // Particle life time
        //         time4 = mod(time2 - pst, plt);
        //         time3 = time4 + pst;
        //        // if (time2>pst) // Doesn't draw the paricle at the start
        //         //{    
        //            runnr = floor((time2 - pst)/plt);  // Number of the "life" of a particle
        //            vec2 ppos = getParticlePosition(i);
        //            float dist = distance(uv, ppos);
        //            //if (dist<0.05) // When the current point is further than a certain distance, its impact is neglectable
        //            //{
        //               // Draws the eight-branched star
        //               // Horizontal and vertical branches
        //               vec2 uvppos = uv - ppos;
        //               float distv = distance(uvppos*part_starhv_dfac + ppos, ppos);
        //               float disth = distance(uvppos*part_starhv_dfac.yx + ppos, ppos);
        //               // Diagonal branches
        //               vec2 uvpposd = 0.707*vec2(dot(uvppos, vec2(1., 1.)), dot(uvppos, vec2(1., -1.)));
        //               float distd1 = distance(uvpposd*part_stardiag_dfac + ppos, ppos);
        //               float distd2 = distance(uvpposd*part_stardiag_dfac.yx + ppos, ppos);
        //               // Initial intensity (random)
        //               float pint0 = mix(part_int_factor_min, part_int_factor_max, random(runnr*4. + float(i-55)));
        //               // Middle point intensity star inensity
        //               float pint1 = 1./(dist*dist_factor + 0.015) + part_starhv_ifac/(disth*dist_factor + 0.01) + part_starhv_ifac/(distv*dist_factor + 0.01) + part_stardiag_ifac/(distd1*dist_factor + 0.01) + part_stardiag_ifac/(distd2*dist_factor + 0.01);
        //               // One neglects the intentity smaller than a certain threshold
        //               //if (pint0*pint1>16.)
        //               //{
        //                  // Intensity curve and fading over time
        //                  float pint = pint0*(pow(pint1, ppow)/part_int_div)*(-time4/plt + 1.);

        //                  // Initial growing of the paricle's intensity
        //                  pint*= smoothstep(0., grow_time_factor*plt, time4);
        //                  // "Sparkling" of the particles
        //                  float sparkfreq = clamp(part_spark_time_freq_fact*time4, 0., 1.)*part_spark_min_freq + random(float(i*5 + 72) - runnr*1.8)*(part_spark_max_freq - part_spark_min_freq);
        //                  pint*= mix(part_spark_min_int, part_spark_max_int, random(float(i*7 - 621) - runnr*12.))*sin(sparkfreq*twopi*time2)/2. + 1.;

        //                  // Adds the current intensity to the global intensity
        //                  pcol+= getParticleColor(i, pint);
        //               //}
        //            //}
        //         //}
        //     }

        //     // Main particle
        //     vec2 ppos = getParticlePosition_mp();
        //     float dist = distance(uv, ppos);

        //         // Draws the eight-branched star
        //         // Horizontal and vertical branches
        //         vec2 uvppos = uv - ppos;
        //         float distv = distance(uvppos*part_starhv_dfac + ppos, ppos);
        //         float disth = distance(uvppos*part_starhv_dfac.yx + ppos, ppos);
        //         // Diagonal branches
        //         vec2 uvpposd = 0.7071*vec2(dot(uvppos, vec2(1., 1.)), dot(uvppos, vec2(1., -1.)));
        //         float distd1 = distance(uvpposd*part_stardiag_dfac + ppos, ppos);
        //         float distd2 = distance(uvpposd*part_stardiag_dfac.yx + ppos, ppos);
        //         // Middle point intensity star inensity
        //         float pint1 = 1./(dist*dist_factor + 0.015) + part_starhv_ifac/(disth*dist_factor + 0.01) + part_starhv_ifac/(distv*dist_factor + 0.01) + part_stardiag_ifac/(distd1*dist_factor + 0.01) + part_stardiag_ifac/(distd2*dist_factor + 0.01);

        //         if (part_int_factor_max*pint1>6.)
        //         {
        //             float pint = part_int_factor_max*(pow(pint1, ppow)/part_int_div)*mp_int;
        //             pcol+= getParticleColor_mp(pint);
        //         }

        //     return pcol;
        // }

        // void mainImage(out vec4 fragColor, in vec2 fragCoord)
        // {
        //     vec2 uv = fragCoord.xy / iResolution.xx;

        //     // Multipass motion blur
        //     vec2 uv2 = fragCoord.xy / iResolution.xy;
        //     vec3 pcolor = texture(iChannel0,uv2).rgb*mb_factor;

        //     // Background gradient
        //     //vec3 pcolor = vec3(0., (0.6 - uv.y)/10., (1. - uv.y)/9.);
        //     //vec3 pcolor = texture(iChannel0,uv).rgb*0.4;

        //     pcolor+= drawParticles(uv,0.)*0.9;

        //     // We're done!
        //     fragColor = vec4(pcolor, 0.);
        // }

        // void main(void)
        // {
        //     mainImage(gl_FragColor, fragCoord.xy);
        // }
        //     `;

        //     //  Create our BaseShader object using the fragment source above (and the default vertex source):

        //     const baseShader1 = new Phaser.Display.BaseShader('BufferA', s1);

        //     const s2 = `
        // precision mediump float;

        // uniform float time;
        // uniform vec2 resolution;
        // uniform sampler2D iChannel0;

        // varying vec2 fragCoord;

        // #define iTime time
        // #define iResolution resolution

        // vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }
        // vec4 texture(sampler2D s, vec2 c, float b) { return texture2D(s,c,b); }

        // void mainImage( out vec4 fragColor, in vec2 fragCoord )
        // {
        //     vec2 uv = fragCoord.xy / resolution.xy;
        //     fragColor = texture(iChannel0,uv);
        // }

        // void main(void)
        // {
        //     mainImage(gl_FragColor, fragCoord.xy);
        // }
        //     `;

        //     const baseShader2 = new Phaser.Display.BaseShader('BufferB', s2);

        //     const shader1 = this.add.shader(baseShader1, 400, 300, 512, 512);

        //     shader1.setRenderToTexture('blah');

        //     const shader2 = this.add.shader(baseShader2, 400, 300, 512, 512);

        //     shader2.setRenderToTexture('blah2');

        //     shader1.setSampler2D('iChannel0', 'blah2');
        //     shader2.setSampler2D('iChannel0', 'blah');

        //     this.add.image(400, 300, 'blah2');



        //Example 3 shaders
        //     const s1 = `
        // precision mediump float;

        // uniform float time;
        // uniform vec2 resolution;
        // uniform sampler2D iChannel0;

        // varying vec2 fragCoord;

        // #define iTime time
        // #define iResolution resolution

        // vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

        // // Created by Stephane Cuillerdier - @Aiekick/2016
        // // License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

        // void mainImage( out vec4 f, vec2 g )
        // {
        //     float
        //         t = time,
        //         p;

        //     vec2
        //         s = iResolution.xy,
        //         u = (g+g-s)/s.y,
        //         ar = vec2(
        //             atan(u.x, u.y) * 3.18 + t*2.,
        //             length(u)*3. + sin(t*.5)*10.);

        //     p = floor(ar.y)/5.;

        //     ar = abs(fract(ar)-.5);

        //     f =
        //         mix(
        //             vec4(1,.3,0,1),
        //             vec4(.3,.2,.5,1),
        //             vec4(p))
        //         * .1/dot(ar,ar) * .1
        //         + texture(iChannel0, g / s) * .9;
        // }

        // void main(void)
        // {
        //     mainImage(gl_FragColor, fragCoord.xy);
        // }
        //     `;

        //     const s2 = `
        // precision mediump float;

        // uniform float time;
        // uniform vec2 resolution;
        // uniform sampler2D iChannel0;

        // varying vec2 fragCoord;

        // #define iTime time
        // #define iResolution resolution

        // vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

        // void mainImage( out vec4 f, vec2 g )
        // {
        //     f = texture(iChannel0, g/iResolution.xy);
        // }

        // void main(void)
        // {
        //     mainImage(gl_FragColor, fragCoord.xy);
        // }
        //     `;

        //     const baseShader1 = new Phaser.Display.BaseShader('BufferA', s1);
        //     const baseShader2 = new Phaser.Display.BaseShader('BufferB', s2);

        //     const shader1 = this.add.shader(baseShader1, 0, 0, 512, 512).setRenderToTexture();
        //     const shader2 = this.add.shader(baseShader2, 0, 0, 512, 512).setRenderToTexture('output');

        //     shader1.setSampler2DBuffer('iChannel0', shader2.glTexture, 512, 512);
        //     shader2.setSampler2DBuffer('iChannel0', shader1.glTexture, 512, 512);

        //     //  Render our shader to this image
        //     this.add.image(400, 300, 'output');


        //Example 4
        // const shader = this.add.shader('Tunnel', 400, 300, 800, 600, ['metal']);

        // shader.setInteractive();

        // shader.on('pointerdown', () => {

        //     const currentTexture = shader.getUniform('iChannel0').textureKey;

        //     if (currentTexture === 'metal') {
        //         shader.setChannel0('grass');
        //     }
        //     else if (currentTexture === 'grass') {
        //         shader.setChannel0('tiles');
        //     }
        //     else {
        //         shader.setChannel0('metal');
        //     }

        // });



        //Example 5
        // this.add.shader('fireball', 400, 300, 800, 900);


        //Example 6
        //     const shader = this.add.shader('Marble', 0, 0, 128, 128);

        //     //  Now we tell it to render to a texture, instead of on the display list.
        //     //  The string given here is the key that is used when saving it to the Texture Manager:

        //     shader.setRenderToTexture('wibble');

        //     //  And now some images that use the texture

        //     this.add.image(200, 300, 'wibble');

        //     //  A scaled image
        //     this.add.image(400, 300, 'wibble').setScale(2);

        //     //  A tweened image
        //     const mover = this.add.image(600, 100, 'wibble');

        //     this.tweens.add({
        //         targets: mover,
        //         angle: 180,
        //         y: 500,
        //         ease: 'Sine.easeInOut',
        //         repeat: -1,
        //         yoyo: true,
        //         duration: 2000
        //     });


        //Example 8
        // this.add.image(400, 300, 'bg');

        // const shader = this.make.shader({
        //     key: 'wave',
        //     x: 400,
        //     y: 300,
        //     width: 800,
        //     height: 600,
        //     add: false
        // });

        // //  Make a Bitmap Mask from it
        // const mask = shader.createBitmapMask();

        // //  Apply the mask to this image
        // this.add.image(400, 300, 'pic').setMask(mask);

        //Example 9
        // const s1 = this.add.shader('Marble', 0, 0, 400, 600).setOrigin(0);
        // const s2 = this.add.shader('Flower Plasma', 400, 0, 400, 600).setOrigin(0);

        // s1.setUniform('size.value', 0.0);
        // s2.setUniform('size.value', 1.0);


        //Example 10
        // const shader = this.add.shader('Colorful Voronoi', 0, 0, 128, 128);

        // shader.setRenderToTexture('wibble');

        // const blocks = this.add.group({ key: 'wibble', repeat: 63, setScale: { x: 0.5, y: 0.5 } });

        // Phaser.Actions.GridAlign(blocks.getChildren(), {
        //     width: 9,
        //     height: 7,
        //     cellWidth: 128,
        //     cellHeight: 128,
        //     x: 0,
        //     y: 0
        // },);

        // let i = 0;

        // blocks.children.iterate(function (child) {

        //     this.tweens.add({
        //         targets: child,
        //         props: {
        //             scale: { value: 1, duration: 500 },
        //             angle: { value: 360, duration: 4000 }
        //         },
        //         ease: 'Sine.easeInOut',
        //         delay: i * 50,
        //         repeat: -1,
        //         yoyo: true
        //     });

        //     i++;

        //     if (i % 10 === 0) {
        //         // i = 0;
        //     }

        // }, this);


        //Example 11
        // this.add.image(400, 600, 'bird').setOrigin(0.5, 1);

        // const shader = this.add.shader('marble', 400, 300, 800, 600);


        // this.input.once('pointerdown', function () {

        //     this.tweens.add({
        //         targets: shader,
        //         props: {
        //             scaleX: { value: 0.2, duration: 4000 },
        //             scaleY: { value: 0.2, duration: 4000 },
        //             angle: { value: 360, duration: 2000 },
        //             y: { value: 100, duration: 1000 }
        //         },
        //         ease: 'Sine.easeInOut',
        //         yoyo: true,
        //         repeat: -1
        //     });

        // }, this);

        //Example 12
        // const texture = this.textures.addDynamicTexture('shaderTexture', 512, 512);

        // texture.fill(0x000066);

        // for (let i = 0; i < 64; i++) {
        //     texture.stamp('apple', null, Phaser.Math.Between(25, 487), Phaser.Math.Between(25, 487));
        // }

        // this.add.shader('Tunnel', 400, 300, 800, 600, ['shaderTexture']);


        //Example 13
        // const texture = this.textures.addDynamicTexture('shaderTexture', 512, 512);

        // this.apples = [];

        // for (let i = 0; i < 64; i++) {
        //     const x = Phaser.Math.Between(25, 487);
        //     const y = Phaser.Math.Between(25, 487);

        //     this.apples.push({ x, y });
        // }

        // this.texture = texture;

        // this.add.shader('Tunnel', 400, 300, 800, 600, ['shaderTexture']);


        //Example 14
        // const bufferA = this.add.shader('Flower Plasma', 0, 0, 512, 512);

        // //  Now we tell it to render to a texture, instead of on the display list.
        // //  The string given here is the key that is used when saving it to the Texture Manager:
        // bufferA.setRenderToTexture('bufferA');

        // this.add.shader('Tunnel', 400, 300, 800, 600, ['bufferA']);

        // this.add.image(400, 300, 'logo');



        //Render Texture
        this.backgroundImage = this.add.image(0, 0, 'bg').setOrigin(0, 0);
        this.backgroundImage.displayWidth = this.sys.canvas.width;
        this.backgroundImage.displayHeight = this.sys.canvas.height;

        const rt = this.add.renderTexture(400, 300, 1000, 600);

        for (let y = 0; y < 2; y++) {
            for (let x = 0; x < 2; x++) {
                rt.draw('tiles', x * 512, y * 512);
            }
        }

        const brush = this.make.image({ key: 'brush' }, false).setScale(0.5);

        this.input.on('pointermove', (pointer: { isDown: any; x: number; y: number; }) => {
            if (pointer.isDown) {
                rt.erase(brush, pointer.x - 16, pointer.y - 16);
            }

        });

        this.input.on('pointerdown', (pointer: { x: number; y: number; }) => {
            rt.erase(brush, pointer.x - 16, pointer.y - 16);

        });




    }

    loadScene(sceneKey: any) {
        this.scene.start(sceneKey)
    }

    update() {

        //example 13

        // this.texture.fill(0x000066);

        // this.apples.forEach(apple => {

        //     this.texture.stamp('apple', null, apple.x, apple.y, { rotation: this.r });

        // });

        // this.r += 0.1;
    }


}

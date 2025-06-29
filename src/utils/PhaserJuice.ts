export default class phaserJuice {
  scene: any;
  options: (
    effectOptions: any,
    option: any,
  ) => {
    x: any;
    y: any;
    alpha: any;
    scaleX: any;
    scaleY: any;
    angle: any;
    duration: any;
    yoyo: any;
    repeat: any;
    ease: any;
    delay: any;
    paused: any;
    onStart: any;
    onComplete: any;
  };
  target: any;
  shakeTween: any;
  wobbleTween: any;
  scaleUpTween: any;
  scaleDownTween: any;
  pulseTween: any;
  rotateTween: any;
  bounceTween: any;
  fadeInTween: any;
  fadeOutTween: any;
  fadeInOutTween: any;
  flipXTween: any;
  flipYTween: any;
  spinXTween: any;
  spinYTween: any;
  constructor(scene: any) {
    this.scene = scene;

    this.options = function (effectOptions, option) {
      option = option || {};
      // Fixes an issue where x or y is set to 0 then its ignored and uses the effectOption instead
      if (option.x === 0) {
        option.x = 0.00001;
      } else if (option.y === 0) {
        option.y = 0.00001;
      }
      const config = {
        x: option.x || effectOptions.x,
        y: option.y || effectOptions.y,
        alpha: option.alpha || effectOptions.alpha,
        scaleX: option.scaleX || effectOptions.scaleX,
        scaleY: option.scaleY || effectOptions.scaleY,
        angle: option.angle || effectOptions.angle,
        duration: option.duration || effectOptions.duration,
        yoyo: option.yoyo || effectOptions.yoyo,
        repeat: option.repeat || effectOptions.repeat,
        ease: option.ease || effectOptions.ease,
        delay: option.delay || effectOptions.delay,
        paused: option.paused || effectOptions.paused,
        onStart: option.onStart || effectOptions.onStart,
        onComplete: option.onComplete || effectOptions.onComplete,
      };
      return config;
    };
  }

  add(target: any) {
    this.target = target;
    return this;
  }

  shake(
    target?: any,
    config?: any,
    destroy?: boolean | null | undefined,
    ) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (destroy === undefined || destroy === null) {
      destroy = false;
    }
    const shakeConfig = {
      x: 0,
      y: 5,
      duration: 50,
      yoyo: true,
      repeat: 1,
      ease: 'Bounce',
      delay: 0,
      paused: false,
    };
    let options = this.options(shakeConfig, config);
    this.shakeTween = scene.tweens.add({
      targets: target,
      x: target.x + options.x,
      y: target.y - options.y,
      duration: options.duration,
      yoyo: options.yoyo,
      repeat: options.repeat,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart: function (tween: any, target: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, target);
        }
      },
      onComplete: function (tween: any, target: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, target);
        }
        // if(destroy) {
        //     shake.remove();
        // }
      },
    });
    return this;
  }

  shakeY(target: null | undefined) {
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    const config = {
      x: 0,
      y: 5,
    };
    this.shake(target, config);
  }

  wobble(target?: any, config?: any, destroy?: boolean | null | undefined) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (destroy === undefined || destroy === null) {
      destroy = false;
    }
    const wobbleConfig = {
      x: 5,
      y: 0,
      duration: 300,
      yoyo: true,
      repeat: 9,
      ease: 'Sine.easeInOut',
      delay: 0,
      paused: false,
    };
    let options = this.options(wobbleConfig, config);
    this.wobbleTween = scene.tweens.add({
      targets: target,
      x: target.x + options.x,
      y: target.y + options.y,
      duration: options.duration,
      yoyo: options.yoyo,
      repeat: options.repeat,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart: function (tween: any, target: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, target);
        }
      },
      onComplete: function (tween: any, target: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, target);
        }
        // if(destroy) {
        //     wobble.remove();
        // }
      },
    });
    return this;
  }

  wobbleY(target?: any) {
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    const config = {
      x: 0,
      y: 5,
      repeat: 5,
      duration: 100,
    };
    this.wobble(target, config);
  }

  scaleUp(target: any, config: any, destroy?: boolean | null | undefined) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (destroy === undefined || destroy === null) {
      destroy = false;
    }
    const growConfig = {
      scaleX: target?.scaleX + 0.25,
      scaleY: target?.scaleY + 0.25,
      duration: 750,
      delay: 0,
      paused: false,
    };
    let options = this.options(growConfig, config);
    this.scaleUpTween = scene.tweens.add({
      targets: target,
      scaleX: options.scaleX,
      scaleY: options.scaleY,
      duration: options.duration,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart: function (tween: any, target: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, target);
        }
      },
      onComplete: function (tween: any, target: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, target);
        }
        if (destroy) {
          this.grow.remove();
        }
      },
    });
    return this;
  }

  scaleDown(target: any, config: any, destroy?: boolean | null | undefined) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (destroy === undefined || destroy === null) {
      destroy = false;
    }
    const shrinkConfig = {
      scaleX: target.scaleX - 0.25,
      scaleY: target.scaleY - 0.25,
      duration: 750,
      delay: 0,
      paused: false,
    };
    let options = this.options(shrinkConfig, config);

    this.scaleDownTween = scene.tweens.add({
      targets: target,
      scaleX: options.scaleX,
      scaleY: options.scaleY,
      duration: options.duration,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart: function (tween: any, target: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, target);
        }
      },
      onComplete: function (tween: any, target: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, target);
        }
        if (destroy) {
          this.shrink.remove();
        }
      },
    });
    return this;
  }

  pulse(target: any, config: any, destroy?: boolean | null | undefined) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (destroy === undefined || destroy === null) {
      destroy = false;
    }
    const pulseConfig = {
      scaleX: target.scaleX * 1.25,
      scaleY: target.scaleY * 1.25,
      duration: 750,
      repeat: 2,
      yoyo: true,
      ease: 'Quad.easeInOut',
      delay: 0,
      paused: false,
    };
    let options = this.options(pulseConfig, config);
    this.pulseTween = scene.tweens.add({
      targets: target,
      scaleX: options.scaleX,
      scaleY: options.scaleY,
      yoyo: options.yoyo,
      repeat: options.repeat,
      duration: options.duration,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart: function (tween: any, target: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, target);
        }
      },
      onComplete: function (tween: any, target: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, target);
        }
        if (destroy) {
          this.pulse.remove();
        }
      },
    });
    return this.pulseTween;
  }

  flash(
    target: any,
    duration: number | null | undefined,
    color: string | null | undefined,
  ) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (duration === undefined || duration === null) {
      duration = 150;
    }
    if (color === undefined || color === null) {
      color = '0xffffff';
    }
    target.setTintFill(color);
    scene.time.addEvent({
      delay: duration,
      callback: function () {
        target.setTint('0xffffff');
      },
      callbackScope: this,
    });
    return this;
  }

  rotate(
    target: null | undefined,
    config: any,
    destroy?: boolean | null | undefined,
  ) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (destroy === undefined || destroy === null) {
      destroy = false;
    }
    const rotateConfig = {
      angle: 360,
      duration: 1000,
      ease: 'Circular.easeInOut',
      delay: 0,
      paused: false,
    };
    let options = this.options(rotateConfig, config);
    this.rotateTween = scene.tweens.add({
      targets: target,
      angle: options.angle,
      yoyo: options.yoyo,
      repeat: options.repeat,
      duration: options.duration,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart: function (tween: any, target: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, target);
        }
      },
      onComplete: function (tween: any, target: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, target);
        }
        if (destroy) {
          this.rotate.remove();
        }
      },
    });
    return this;
  }

  bounce(target?: any, config?: any, destroy?: boolean | null | undefined) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (destroy === undefined || destroy === null) {
      destroy = false;
    }
    const bounceConfig = {
      // y: 25,
      scaleX: target.scaleX * 1.25,
      scaleY: target.scaleY * 1.25,
      duration: 500,
      ease: 'Bounce',
      delay: 0,
      paused: false,
    };
    let options = this.options(bounceConfig, config);
    this.bounceTween = scene.tweens.add({
      targets: target,
      // y: target.y + options.y,
      scaleX: options.scaleX,
      scaleY: options.scaleY,
      repeat: options.repeat,
      duration: options.duration,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart: function (tween: any, target: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, target);
        }
      },
      onComplete: function (tween: any, target: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, target);
        }
        if (destroy) {
          this.bounce.remove();
        }
      },
    });
    return this;
  }

  fadeIn(target?: any, config?: any, destroy?: boolean | null | undefined) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (destroy === undefined || destroy === null) {
      destroy = false;
    }
    const fadeInConfig = {
      alpha: 1,
      duration: 500,
      ease: 'Circular.easeIn',
      delay: 0.5,
      paused: false,
    };
    let options = this.options(fadeInConfig, config);
    this.fadeInTween = scene.tweens.add({
      targets: target,
      alpha: options.alpha,
      duration: options.duration,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart: function (tween: any, target: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, target);
        }
      },
      onComplete: function (tween: any, target: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, target);
        }
        if (destroy) {
          this.fadeIn.remove();
        }
      },
    });
    return this;
  }

  fadeOut(target?: any, config?: any, destroy?: boolean | null | undefined) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (destroy === undefined || destroy === null) {
      destroy = false;
    }
    const fadeOutConfig = {
      alpha: 0,
      duration: 200,
      ease: 'Circular.easeOut',
      delay: 0,
      paused: false,
    };
    let options = this.options(fadeOutConfig, config);

    this.fadeOutTween = scene.tweens.add({
      targets: target,
      alpha: options.alpha,
      duration: options.duration,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart: function (tween: any, target: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, target);
        }
      },
      onComplete: function (tween: any, target: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, target);
        }
        if (destroy) {
          this.fadeOut.remove();
        }
      },
    });
    return this;
  }

  fadeInOut(target?: any, config?: any, destroy?: boolean | null | undefined) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (destroy === undefined || destroy === null) {
      destroy = false;
    }
    const fadeInOutConfig = {
      alpha: 0,
      duration: 500,
      yoyo: true,
      repeat: 3,
      ease: 'Circular.easeInOut',
      delay: 0,
      paused: false,
    };
    let options = this.options(fadeInOutConfig, config);
    this.fadeInOutTween = scene.tweens.add({
      targets: target,
      alpha: options.alpha,
      duration: options.duration,
      yoyo: options.yoyo,
      repeat: options.repeat,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart: function (tween: any, target: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, target);
        }
      },
      onComplete: function (tween: any, target: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, target);
        }
        if (destroy) {
          this.fadeInOut.remove();
        }
      },
    });
    return this;
  }

  flipX(
    target?: any,
    direction?: number | boolean | null | undefined,
    config?: any,
    destroy?: boolean | null | undefined,
  ) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (direction === undefined || direction === null) {
      direction = true;
    }
    if (destroy === undefined || destroy === null) {
      destroy = false;
    }
    if (direction) {
      direction = -1;
    } else {
      direction = 1;
    }
    const flipXConfig = {
      scaleX: direction,
      duration: 500,
      ease: 'Sine.easeInOut',
      delay: 0,
      paused: false,
    };
    let options = this.options(flipXConfig, config);
    this.flipXTween = scene.tweens.add({
      targets: target,
      scaleX: options.scaleX,
      duration: options.duration,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart: function (tween: any, target: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, target);
        }
      },
      onComplete: function (tween: any, target: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, target);
        }
        if (destroy) {
          this.flipX.remove();
        }
      },
    });
    return this;
  }

  flipY(
    target: null | undefined,
    direction: number | boolean | null | undefined,
    config: any,
    destroy?: boolean | null | undefined,
  ) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (direction === undefined || direction === null) {
      direction = true;
    }
    if (destroy === undefined || destroy === null) {
      destroy = false;
    }
    if (direction) {
      direction = -1;
    } else {
      direction = 1;
    }
    const flipYConfig = {
      scaleY: direction,
      duration: 500,
      ease: 'Sine.easeInOut',
      delay: 0,
      paused: false,
    };
    let options = this.options(flipYConfig, config);
    this.flipYTween = scene.tweens.add({
      targets: target,
      scaleY: options.scaleY,
      duration: options.duration,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart: function (tween: any, target: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, target);
        }
      },
      onComplete: function (tween: any, target: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, target);
        }
        if (destroy) {
          this.flipY.remove();
        }
      },
    });
    return this;
  }

  spinX(
    target: null | undefined,
    direction: number | boolean | null | undefined,
    config: any,
    destroy?: boolean | null | undefined,
  ) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (direction === undefined || direction === null) {
      direction = true;
    }
    if (destroy === undefined || destroy === null) {
      destroy = false;
    }
    if (direction) {
      direction = -1;
    } else {
      direction = 1;
    }
    const spinXConfig = {
      scaleX: direction,
      duration: 500,
      yoyo: true,
      repeat: 3,
      ease: 'Sine.easeInOut',
      delay: 0,
      paused: false,
    };
    let options = this.options(spinXConfig, config);
    this.spinXTween = scene.tweens.add({
      targets: target,
      scaleX: options.scaleX,
      yoyo: options.yoyo,
      repeat: options.repeat,
      duration: options.duration,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart: function (tween: any, target: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, target);
        }
      },
      onComplete: function (tween: any, target: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, target);
        }
        if (destroy) {
          this.spinX.remove();
        }
      },
    });
    return this;
  }

  spinY(
    target: null | undefined,
    direction: number | boolean | null | undefined,
    config: any,
    destroy?: boolean | null | undefined,
  ) {
    const scene = this.scene;
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    if (direction === undefined || direction === null) {
      direction = true;
    }
    if (destroy === undefined || destroy === null) {
      destroy = false;
    }
    if (direction) {
      direction = -1;
    } else {
      direction = 1;
    }
    const spinYConfig = {
      scaleY: direction,
      duration: 500,
      yoyo: true,
      repeat: 3,
      ease: 'Sine.easeInOut',
      delay: 0,
      paused: false,
    };
    let options = this.options(spinYConfig, config);

    this.spinYTween = scene.tweens.add({
      targets: target,
      scaleY: options.scaleY,
      yoyo: options.yoyo,
      repeat: options.repeat,
      duration: options.duration,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart: function (tween: any, target: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, target);
        }
      },
      onComplete: function (tween: any, target: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, target);
        }
        if (destroy) {
          this.spinY.remove();
        }
      },
    });
    return this;
  }

  reset(target: any) {
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target;
    }
    target.setAlpha(1);
    target.setScale(1);
    target.setAngle(0);
    target.setTint('0xffffff');
    return this;
  }
}

/**
 * Escena para la precarga de los assets que se usarán en el juego.
 */
export default class Boot extends Phaser.Scene {

  constructor() {
    super({ key: 'boot' });
  }

  /**
   * Carga de los assets del juego
   */
  preload() {
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0xBD0DBD, 0.8);
    progressBox.fillRect(340, 270, 320, 50);
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(350, 280, 300 * value, 30);
    });



    
    
    // Con setPath podemos establecer el prefijo que se añadirá a todos los load que aparecen a continuación
    this.load.setPath('assets/sprites/');
    this.load.image('off', 'imagenOff.png');
    this.load.image('on', 'imagenOn.png');
    this.load.image('win', 'win.png');
    this.load.image('back', 'back.png');


    this.load.image('lost', 'Lost.png');
    this.load.image('panelpausa', 'panelpausa.png');
    this.load.image('resume', 'resume.png');
    this.load.image('options', 'options.png');
    this.load.image('exit', 'exit.png');
    this.load.image('cara', 'cara.png');
    this.load.image('boots', 'boots.png');
    this.load.image('pause', 'pause.png');
    this.load.image('platform', 'platform.png');
    this.load.image('base', 'base.png');
    this.load.image('star', 'star.png');
    this.load.image('cojin', 'cojin.jpg');
    this.load.image('cry', 'cry.png');
    this.load.image('eyeOpen', 'eyeOpen.png');
    this.load.image('eyeClose', 'eyeClose.png');
    this.load.image('doorOpen', 'doorOpen.png');
    this.load.image('doorClosed', 'doorClosed.png');
    this.load.image('area', 'area.png');
    this.load.image('ranged', 'ranged.png');
    this.load.image('tank', 'tank.png');
    this.load.image('speed', 'speed.png');
    this.load.image('heart', 'heart.png');
    this.load.image('candy', 'candy.png');
    this.load.image('transparente', 'transparente.png');
    this.load.image('player', 'player.png');
    this.load.image('basicEnemy', 'basicEnemyRojo.png');
    this.load.image('basicEnemyAmarillo', 'BasicEnemyAmarillo.png');
    this.load.image('basicEnemyAzul', 'BasicEnemyAzul.png');
    this.load.image('basicEnemyVerde', 'BasicEnemyVerde.png');
    this.load.image('boss', 'jefe.png');
    this.load.image('bottle', 'bottleBlue.png');
    this.load.image('configuracion', 'Configuracion.png');
    this.load.image('fondoMenu', 'fondoDefinitivo.png');
    this.load.image('fondo', 'fondo.png');
    this.load.image('morado', 'morado.jpg');
    this.load.image('movinObject', 'cojin.png');
    //cargamos imagen pergaminoInicio
    this.load.image('pergamino', 'pergamino.png');
    //cargamos iconos habilidades
    this.load.image('icono1', 'iconoVelocidad.png');
    this.load.image('icono2', 'iconoClick.png');


    //cargamos powerUps
    //animaciones de damage
    this.load.setPath('assets/sprites');
    this.load.spritesheet('damage', 'dañooo.png', { frameWidth: 310, frameHeight: 225, endFrame: 3 });
    //velocidad
    this.load.spritesheet('speedyPower', 'speedd.png', { frameWidth: 120, frameHeight: 60, endFrame: 9 });

    //imagen cofre cerrado , abierto
    this.load.image('cofreAbierto', 'cofreAbierto.png');
    this.load.image('cofreCerrado', 'cofreCerrado.png');

    //animacion cofre abriendose
    this.load.spritesheet('animacionCofre', 'animacionCofre.png', { frameWidth: 400, frameHeight: 535, endFrame: 3 });


    //cargamos imagen de bala enemiga ranged
    this.load.image('balaRanged', 'balaE.png');
    this.load.image('bossBullet', 'balaBoss.png');
    //creditos cargar imagen
    this.load.image('creditos', 'creditos.png');
    this.load.image('lento', "UI_speedDebuff.png");

    //para animaciones de Player
    this.load.setPath('assets/anims/AnimsPlayer');
    this.load.spritesheet('topA', 'anim1.png', { frameWidth: 34, frameHeight: 50, endFrame: 3 });
    this.load.spritesheet('bottomA', 'anim2.png', { frameWidth: 34, frameHeight: 50, endFrame: 3 });
    this.load.spritesheet('rightA', 'anim3.png', { frameWidth: 34, frameHeight: 50, endFrame: 3 });
    this.load.spritesheet('idle', 'anim4.png', { frameWidth: 34, frameHeight: 50, endFrame: 1 });

    //para animaciones de enemy
    //EnemyBasic
    this.load.setPath('assets/anims/AnimsEnemy/BasicEnemy');
    //EnemyBasicAzul , derecha(incluye arriba, abajo) e izquierda
    this.load.spritesheet('basicEnemyAzulDerecha', 'BasicEnemyAzulDerGen.png', { frameWidth: 24, frameHeight: 18, endFrame: 16 });

    //EnemyBasicVerde , derecha(incluye arriba, abajo) e izquierda
    this.load.spritesheet('basicEnemyVerdeDerecha', 'BasicEnemyVerdeDerGen.png', { frameWidth: 24, frameHeight: 18, endFrame: 16 });

    //EnemyBasicRojo , derecha(incluye arriba, abajo) e izquierda
    this.load.spritesheet('basicEnemyRojoDerecha', 'BasicEnemyRojoDerGen.png', { frameWidth: 24, frameHeight: 18, endFrame: 16 });

    //EnemyBasicAmarillo , derecha(incluye arriba, abajo) e izquierda
    this.load.spritesheet('basicEnemyAmarilloDerecha', 'BasicEnemyAmarilloDerGen.png', { frameWidth: 24, frameHeight: 18, endFrame: 16 });



    //StrongEnemy
    this.load.setPath('assets/anims/AnimsEnemy/StrongEnemy');
    //strongEnemy , derecha(incluye arriba, abajo) e izquierda

    this.load.spritesheet('StrongEnemyWalk', 'strongEnemyWalk.png', { frameWidth: 50, frameHeight: 44, endFrame: 8 });

    //SpeedEnemy
    this.load.setPath('assets/anims/AnimsEnemy/SpeedEnemy');
    //speedEnemy ,movimiento general , turbo abajo , arriba y lateral
    this.load.spritesheet('MovimientoGeneralSpeedEnemy', 'MovimientoGeneralSpeedEnemy.png', { frameWidth: 81, frameHeight: 46, endFrame: 5 });
    this.load.spritesheet('turboAbajoSpeedEnemy', 'turboAbajoSpeedEnemy.png', { frameWidth: 81, frameHeight: 46, endFrame: 3 });
    this.load.spritesheet('turboArribaSpeedEnemy', 'turboArribaSpeedEnemy.png', { frameWidth: 81, frameHeight: 46, endFrame: 3 });
    this.load.spritesheet('turboLateralSpeedEnemy', 'turboLateralSpeedEnemy.png', { frameWidth: 81, frameHeight: 46, endFrame: 5 });

    //RangedEnemy
    this.load.setPath('assets/anims/AnimsEnemy/RangedEnemy');
    //rangedEnemy der , arrriba y abajo     y izq
    this.load.spritesheet('RangedEnemyDer', 'RangedEnemyDer.png', { frameWidth: 30, frameHeight: 32, endFrame: 5 });



    //Boss Animaciones
    this.load.setPath('assets/anims/AnimsBoss');
    this.load.spritesheet('walkBossD', 'walkBossD.png', { frameWidth: 55, frameHeight: 54, endFrame: 3 });
    this.load.spritesheet('walkBossI', 'walkBossI.png', { frameWidth: 54, frameHeight: 54, endFrame: 3 });
    this.load.spritesheet('dashBoss', 'dashBoss.png', { frameWidth: 52, frameHeight: 89, endFrame: 6 });
    this.load.spritesheet('bulletBoss', 'bulletBoss.png', { frameWidth: 28.75, frameHeight: 23, endFrame: 3 });
    this.load.spritesheet('waitBoss', 'waitBoss.png', { frameWidth: 53, frameHeight: 56, endFrame: 1 });


    //TILEMAP
    this.load.setPath('assets/tilemap/');
    
    this.load.tilemapTiledJSON('map2', 'finalMap2.json');

    this.load.tilemapTiledJSON('map3', 'finalMap3.json');
    this.load.tilemapTiledJSON('finalMap1', 'finalMap1.json');

    // MIDDLESCENE
    this.load.tilemapTiledJSON('middleScene', 'middleScene.json');


    //tileSets añadidos
    this.load.image('patronesLevel1', 'tilesetForest.png');
    this.load.image('dungeon', 'dungeon_.png');
    this.load.image('interior', 'interior.png');
    this.load.image('TopDownHouse_FloorsAndWalls', 'TopDownHouse_FloorsAndWalls.png');
    this.load.image('TopDownHouse_FurnitureState1', 'TopDownHouse_FurnitureState1.png');
    this.load.image('TopDownHouse_SmallItems', 'TopDownHouse_SmallItems.png');
    this.load.image('kitchen', 'kitchen.png');
    this.load.image('Interiors_free_16x16', 'Interiors_free_16x16.png');
    this.load.image('Props2', 'Props2.png');
    //tileSets extra
    this.load.image('Abismo', 'Abismo.png');
    this.load.image('Basement', 'Basement-Tileset-Pixel-Art.png');
    this.load.image('Clouds_3', 'Clouds_3.png');
    this.load.image('nubes2', 'nubes2.png');



    this.load.image('suelo', 'suelo.png');

    // SONIDOS
    this.load.setPath('assets/sounds');
    this.load.audio('booLaugh', 'booLaugh.mp3');
    this.load.audio('cry', 'cry.mp3');
    this.load.audio('death', 'death.mp3');
    this.load.audio('duckToySqueak', 'duckToySqueak.mp3');
    this.load.audio('glass', 'glass.mp3');
    this.load.audio('loseLive', 'loseLive.mp3');
    this.load.audio('powerUp', 'powerUp.mp3');
    this.load.audio('smash', 'smash.mp3');
    this.load.audio('dash', 'dash.mp3');
    this.load.audio('door', 'door.mp3');
    //musica menu
    this.load.audio('menusong', 'creepymenu.mp3');
    this.load.audio('juegosong', 'creepyjuego.mp3');
    this.load.audio('winsong', 'winMus.mp3');


    // Font
    this.load.setPath('assets/fonts');
    this.loadFont("pixelFont", "VT323-Regular.ttf");

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2 - 75,
      y: height / 2 - 50,
      text: 'LOADING...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0);


  }

  /**
     * Método auxiliar para cargar la fuente TTF de un archivo local
     */
  loadFont(name, url) {
    let self = this;
    let newFont = new FontFace(name, `url(${url})`);
    newFont.load()
    // Función que se llamará cuando las fuentes estén cargadas
    // en este caso, load devuelve lo que llamamos una promesa
    // más info en: https://developer.mozilla.org/en-US/docs/Web/API/FontFace/load
    .then(function (loaded) {
        document.fonts.add(loaded);
        self.continueCreate();
    }).catch(function (error) {
        return error;
    });
}

  createAnims() {

    //Enemy

    //StrongEnemy
    this.anims.create({
      key: 'StrongEnemyWalk',
      frames: this.anims.generateFrameNumbers('StrongEnemyWalk', { start: 0, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    //RangedEnemy
    this.anims.create({
      key: 'RangedEnemyDer',
      frames: this.anims.generateFrameNumbers('RangedEnemyDer', { start: 2, end: 5 }),
      frameRate: 10,
      repeat: -1
    });
    //SpeedEnemy
    this.anims.create({
      key: 'MovimientoGeneralSpeedEnemy',
      frames: this.anims.generateFrameNumbers('MovimientoGeneralSpeedEnemy', { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1
    });
    //turbo abajo
    this.anims.create({
      key: 'turboAbajoSpeedEnemy',
      frames: this.anims.generateFrameNumbers('turboAbajoSpeedEnemy', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    //turbo arriba
    this.anims.create({
      key: 'turboArribaSpeedEnemy',
      frames: this.anims.generateFrameNumbers('turboArribaSpeedEnemy', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    //turbo lateral
    this.anims.create({
      key: 'turboLateralSpeedEnemy',
      frames: this.anims.generateFrameNumbers('turboLateralSpeedEnemy', { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1
    });


    //BasicEnemy

    //Red
    this.anims.create({
      key: 'basicEnemyRojoDerecha',
      frames: this.anims.generateFrameNumbers('basicEnemyRojoDerecha', { start: 0, end: 16 }),
      frameRate: 10,
      repeat: -1
    });

    //Verde
    this.anims.create({
      key: 'basicEnemyVerdeDerecha',
      frames: this.anims.generateFrameNumbers('basicEnemyVerdeDerecha', { start: 0, end: 16 }),
      frameRate: 10,
      repeat: -1
    });

    //Amarillo
    this.anims.create({
      key: 'basicEnemyAmarilloDerecha',
      frames: this.anims.generateFrameNumbers('basicEnemyAmarilloDerecha', { start: 0, end: 16 }),
      frameRate: 10,
      repeat: -1
    });

    //Azul
    this.anims.create({
      key: 'basicEnemyAzulDerecha',
      frames: this.anims.generateFrameNumbers('basicEnemyAzulDerecha', { start: 0, end: 16 }),
      frameRate: 10,
      repeat: -1
    });


    //Player
    this.anims.create({
      key: 'top',
      frames: this.anims.generateFrameNumbers('topA', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'bottom',
      frames: this.anims.generateFrameNumbers('bottomA', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'xAxis',
      frames: this.anims.generateFrameNumbers('rightA', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'idleA',
      frames: this.anims.generateFrameNumbers('idle', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1
    });
    //last
    this.anims.create({
      key: 'lastTop',
      frames: this.anims.generateFrameNumbers('topA', { start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'lastBottom',
      frames: this.anims.generateFrameNumbers('bottomA', { start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'lastAxis',
      frames: this.anims.generateFrameNumbers('rightA', { start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
    });


    //Boss
    this.anims.create({
      key: 'walkBossD',
      frames: this.anims.generateFrameNumbers('walkBossD', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'dashBoss',
      frames: this.anims.generateFrameNumbers('dashBoss', { start: 0, end: 6 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'bulletBoss',
      frames: this.anims.generateFrameNumbers('bulletBoss', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });


    this.anims.create({
      key: 'waitBoss',
      frames: this.anims.generateFrameNumbers('waitBoss', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1
    });

    //animaciones powerUps
    this.anims.create({
      key: 'damage',
      frames: this.anims.generateFrameNumbers('damage', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'speedyPower',
      frames: this.anims.generateFrameNumbers('speedyPower', { start: 0, end: 9 }),
      frameRate: 8,
      repeat: -1
    });

    //animacion cofre
    this.anims.create({
      key: 'animacionCofre',
      frames: this.anims.generateFrameNumbers('animacionCofre', { start: 0, end: 3 }),
      frameRate: 10,
      //numero de veces que queremos repetir la animacion, -1 es infinito
      repeat: 0
    });



  }
  /**
   * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
   * nivel del juego
   */
  create() {
    this.createAnims();
    this.scene.start('menu');
  }
}
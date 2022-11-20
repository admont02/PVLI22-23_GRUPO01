/**
 * Escena para la precarga de los assets que se usarán en el juego.
 */
export default class Boot extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
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
    this.load.image('platform', 'platform.png');
    this.load.image('base', 'base.png');
    this.load.image('star', 'star.png');
    this.load.image('cojin', 'cojin.jpg');
    this.load.image('cry', 'cry.png');
    this.load.image('eyeOpen', 'eyeOpen.png');
    this.load.image('eyeClose', 'eyeClose.png');
    this.load.image('area', 'area.png');
    this.load.image('ranged', 'ranged.png');
    this.load.image('tank', 'tank.png');
    this.load.image('speed', 'speed.png');
    this.load.image('heart', 'heart.png');
    this.load.image('transparente', 'transparente.png');
    this.load.image('player', 'player.png');
    this.load.image('basicEnemy', 'basicEnemyRojo.png');
    this.load.image('basicEnemyAmarillo', 'BasicEnemyAmarillo.png');
    this.load.image('basicEnemyAzul', 'BasicEnemyAzul.png');
    this.load.image('basicEnemyVerde', 'BasicEnemyVerde.png');
    this.load.image('boss', 'jefe.png');
    this.load.image('bottle', 'bottleBlue.png');
    this.load.image('configuracion', 'Configuracion.png');

    //cargamos imagen de bala enemiga ranged
    this.load.image('balaRanged', 'balaE.png');
    this.load.image('bossBullet', 'balaBoss.png');

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
    this.load.spritesheet('basicEnemyAzulDerecha', 'BasicEnemyAzulDerGen.png', { frameWidth: 34, frameHeight: 50, endFrame: 16 });
   
    //EnemyBasicVerde , derecha(incluye arriba, abajo) e izquierda
    this.load.spritesheet('basicEnemyVerdeDerecha', 'BasicEnemyVerdeDerGen.png', { frameWidth: 24, frameHeight: 18, endFrame: 16 });
    
    //EnemyBasicRojo , derecha(incluye arriba, abajo) e izquierda
    this.load.spritesheet('basicEnemyRojoDerecha', 'BasicEnemyRojoDerGen.png', { frameWidth: 24, frameHeight: 18, endFrame: 16 });
    
    //EnemyBasicAmarillo , derecha(incluye arriba, abajo) e izquierda
    this.load.spritesheet('basicEnemyAmarilloDerecha', 'BasicEnemyAmarilloDerGen.png', { frameWidth: 34, frameHeight: 50, endFrame: 16 });
    

    //StrongEnemy
    this.load.setPath('assets/anims/AnimsEnemy/StrongEnemy');
    //strongEnemy , derecha(incluye arriba, abajo) e izquierda
   
    this.load.spritesheet('StrongEnemyWalk', 'strongEnemyWalk.png', { frameWidth: 50, frameHeight: 44, endFrame: 8 });

    //SpeedEnemy
    this.load.setPath('assets/anims/AnimsEnemy/SpeedEnemy');
    //speedEnemy ,movimiento general , turbo abajo , arriba y lateral
    this.load.spritesheet('MovimientoGeneralSpeedEnemy', 'MovimientoGeneralSpeedEnemy.png', { frameWidth: 81, frameHeight: 46, endFrame: 5 });
    this.load.spritesheet('turboAbajoSpeedEnemy', 'turboAbajoSpeedEnemy.png', { frameWidth: 34, frameHeight: 50, endFrame: 3 });
    this.load.spritesheet('turboArribaSpeedEnemy', 'turboArribaSpeedEnemy.png', { frameWidth: 34, frameHeight: 50, endFrame: 3 });
    this.load.spritesheet('turboLateralSpeedEnemy', 'turboLateralSpeedEnemy.png', { frameWidth: 34, frameHeight: 50, endFrame: 5 });

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
    this.load.tilemapTiledJSON('map1', 'prueba.json');
    this.load.image('patronesLevel1', 'tilesetForest.png');
    this.load.image('suelo', 'suelo.png');
    //  this.load.tilemapTiledJSON('map2', 'level2.json');
    //  this.load.image('patronesLevel2', 'tilesetbeach.png');

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


  createAnims() {

    //Enemy

    //StrongEnemy
    this.anims.create({
      key: 'StrongEnemyIzq',
      frames: this.anims.generateFrameNumbers('StrongEnemyIzq', { start: 0, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'StrongEnemyWalk',
      frames: this.anims.generateFrameNumbers('StrongEnemyWalk', { start: 0, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    //RangedEnemy
    this.anims.create({
      key: 'RangedEnemyDer',
      frames: this.anims.generateFrameNumbers('RangedEnemyDer', { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'RangedEnemyIzq',
      frames: this.anims.generateFrameNumbers('RangedEnemyIzq', { start: 0, end: 5 }),
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

    //BasicEnemy

    //Red
    this.anims.create({
      key: 'basicEnemyRojoDerecha',
      frames: this.anims.generateFrameNumbers('basicEnemyRojoDerecha', { start: 0, end: 16 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'basicEnemyRojoIzquierda',
      frames: this.anims.generateFrameNumbers('basicEnemyRojoIzquierda', { start: 0, end: 16 }),
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

    this.anims.create({
      key: 'basicEnemyVerdeIzquierda',
      frames: this.anims.generateFrameNumbers('basicEnemyVerdeIzquierda', { start: 0, end: 16 }),
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
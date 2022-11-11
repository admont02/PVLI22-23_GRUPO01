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
    this.load.image('basicEnemy', 'basicEnemy.png');
    this.load.image('boss', 'jefe.png');
    this.load.image('bottle', 'bottleBlue.png');
    //cargamos imagen de bala enemiga ranged
    this.load.image('balaRanged', 'balaE.png');
    this.load.image('bossBullet', 'balaBoss.png');

    this.load.setPath('assets/anims/');
    this.load.spritesheet('topA', 'anim1.png',{ frameWidth: 34, frameHeight: 50, endFrame: 3 });
    this.load.spritesheet('bottomA', 'anim2.png',{ frameWidth: 34, frameHeight: 50, endFrame: 3 });
    this.load.spritesheet('rightA', 'anim3.png',{ frameWidth: 34, frameHeight: 50, endFrame: 3 });
    this.load.spritesheet('idle', 'anim4.png',{ frameWidth: 34, frameHeight: 50, endFrame: 1 });

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
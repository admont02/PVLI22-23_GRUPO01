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
    this.load.image('player', 'player.png');

    //TILEMAP
    this.load.setPath('assets/tilemap/');
    this.load.tilemapTiledJSON('map1', 'prueba.json');
    this.load.image('patronesLevel1', 'tilesetForest.png');
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

  /**
   * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
   * nivel del juego
   */
  create() {
    this.scene.start('menu');
  }
}
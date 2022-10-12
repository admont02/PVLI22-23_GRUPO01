import Player from './player.js';
import movingObject from './MovingObject.js';

/**
 * Escena principal del juego. 
 */
export default class Level extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'level' });
  }

  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() {
    const width = this.scale.width;
    const height = this.scale.height;
    const large = width * 10;
    this.createTileMap();

    this.player = new Player(this, 200, 300);

    this.movingObject1 = new movingObject(this, 100, 100, this.player);


   // this.physics.world.setBounds(0, 0, large, height);
    this.cameras.main.setBounds(0, 0, large, height);
    this.cameras.main.startFollow(this.player);
  }
  createTileMap() {
    this.map = this.make.tilemap({
      key: 'map1',
      tileWidth: 50,
      tileHeight: 50
    });
    const tileset1 = this.map.addTilesetImage('tilesetForest', 'patronesLevel1');
    this.backgroundLayer = this.map.createLayer('Background', tileset1);
    //this.groundLayer = this.map1.createLayer('Floor', tileset1);
    //this.physics.add.collider(this.player, this.groundLayer);
    //this.groundLayer.setCollisionBetween(0, 999);

  }
}
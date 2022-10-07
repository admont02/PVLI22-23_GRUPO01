import Player from './player.js';

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
    this.player = new Player(this, 200, 300);
    //this.createTileMap();
  }
  createTileMap() {
    this.map = this.make.tilemap({
      key: 'map',
      tileWidth: 64,
      tileHeight: 64
    });
    const tileset1 = this.map1.addTilesetImage('tilesetForest', 'patronesLevel1');
    //this.backgroundLayer = this.map.createLayer('Background', tileset1);
    this.groundLayer = this.map1.createLayer('Floor', tileset1);
    this.physics.add.collider(this.player, this.groundLayer);
    this.groundLayer.setCollisionBetween(0, 999);

  }
}
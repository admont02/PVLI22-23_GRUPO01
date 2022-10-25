import Player from './player.js';
import movingObject from './Objects/MovingObject.js';
//traemos clase BasicEnemy
import BasicEnemy from './Enemies/BasicEnemy.js';
import RangedEnemy from './Enemies/RangedEnemy.js';
//traemos clase StrongEnemy
import SpeedEnemy from './Enemies/SpeedEnemy.js';
//traemos clase SpeedEnemy
import StrongEnemy from './Enemies/StrongEnemy.js';
import LifePowerUp from './Objects/lifePowerUp.js';
import eye from './Objects/eye.js';



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

    
    //Grupo de enemigos
    this.enemy = this.add.group();

    this.enemy.add(new BasicEnemy(this, 200, 200, 'star', this.player,500,100));
    this.enemy.add( new SpeedEnemy(this,200 , 200,'star' , this.player,700,100));
    this.enemy.add(new StrongEnemy(this,300 , 300,'star' , this.player,800,300));
    this.enemy.add(new RangedEnemy(this,300 , 300,'star' , this.player,0));

    this.eye = new eye(this, 500, 300, this.player, this.enemy);

    // this.physics.world.setBounds(0, 0, large, height);
    this.cameras.main.setBounds(0, 0, large, height);
    this.cameras.main.startFollow(this.player);

    new LifePowerUp(this,50,50,this.player);
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
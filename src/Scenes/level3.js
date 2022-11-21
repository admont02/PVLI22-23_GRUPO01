import Player from '../player.js';
import Boss from '../Enemies/boss.js';
import eyeBoss from '../Objects/eyeBoss.js';

/**
 * Escena principal del juego. 
 */
export default class Level extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'level3' });
  }

  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() {
    const width = this.scale.width;
    const height = this.scale.height;
    const large = width * 10;
    this.createTileMap();

    this.player = new Player(this, 700, 300);
    this.physics.add.collider(this.player, this.boxLayer);
    this.boxLayer.setCollisionBetween(0, 999);

    this.numEnemigosVivos = 4;

    this.enemy = this.add.group();

    this.enemy.add(new eyeBoss(this, 100, 100, this.player));
    this.enemy.add(new eyeBoss(this, 200, 100,this.player));
    this.enemy.add(new eyeBoss(this, 300, 100,this.player));
    this.enemy.add(new eyeBoss(this, 400, 100,this.player));

    this.boss = new Boss(this, 300, 300, this.player);
    
    // this.physics.world.setBounds(0, 0, large, height);
    this.cameras.main.setBounds(0, 0, large, height);
    this.cameras.main.startFollow(this.player);

  }
  //comprueba sinquedan enemigos
update()
{
}

  createTileMap() {
    this.map = this.make.tilemap({
      key: 'map1',
      tileWidth: 50,
      tileHeight: 50
    });
    const tileset1=this.map.addTilesetImage('suelo', 'suelo');;
    const tileset2 = this.map.addTilesetImage('tilesetForest', 'patronesLevel1');
    this.backgroundLayer = this.map.createLayer('Suelo', tileset1);
    this.boxLayer = this.map.createLayer('Capa de patrones 1', tileset2);

  }

  AumentarEnemyVivo() {
    this.numEnemigosVivos++;
  }

  QuitarEnemyVivo() {
    this.numEnemigosVivos--;
  }

  NumEnemigos() {
    return this.numEnemigosVivos;
  }
  
}
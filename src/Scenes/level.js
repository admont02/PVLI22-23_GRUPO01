import Player from '../player.js'
import movingObject from '../Objects/MovingObject.js';
//traemos clase BasicEnemy
import BasicEnemy from '../Enemies/BasicEnemy.js';
import RangedEnemy from '../Enemies/RangedEnemy.js';
//traemos clase StrongEnemy
import SpeedEnemy from '../Enemies/SpeedEnemy.js';
//traemos clase SpeedEnemy
import StrongEnemy from '../Enemies/StrongEnemy.js';
import LifePowerUp from '../Objects/lifePowerUp.js';
import eye from '../Objects/eye.js';



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

    this.player = new Player(this, 300, 600);
    this.physics.add.collider(this.player, this.boxLayer);
    this.boxLayer.setCollisionBetween(0, 999);


    this.movingObject1 = new movingObject(this, 100, 100, this.player);
    this.numEnemigosVivos = 0
    //Grupo de enemigos
    this.enemy = this.add.group();
    
    this.enemy.add(new BasicEnemy(this, 1000, 400, 'basicEnemyVerdeDerecha', this.player,2));
    this.enemy.add(new BasicEnemy(this, 900, 340, 'basicEnemyRojoDerecha', this.player,2));
    this.enemy.add(new BasicEnemy(this, 700, 340, 'basicEnemyAmarilloDerecha', this.player,2));
    this.enemy.add(new BasicEnemy(this, 700, 340, 'basicEnemyAzulDerecha', this.player,2));

    this.enemy.add( new SpeedEnemy(this,400 , 200,'MovimientoGeneralSpeedEnemy' , this.player,2));
    this.enemy.add(new StrongEnemy(this,400 , 300,'StrongEnemyIzq' , this.player,4));
    this.enemy.add(new RangedEnemy(this,400 , 300,'RangedEnemyDer' , this.player,2));

    //creamos objeto de level enemiesLEFT
    this.label = this.add.text(850, 10, "Enemies Left: "+this.numEnemigosVivos).setScrollFactor(0);

    this.eye = new eye(this, 500, 300, this.player, this.enemy);

    // this.physics.world.setBounds(0, 0, large, height);
    //this.cameras.main.setBounds(0, 0, width, height);
    this.cameras.main.startFollow(this.player);

    new LifePowerUp(this,500,50,this.player);

    this.physics.add.collider(this.enemy, this.boxLayer);

  }


  
  //comprueba sinquedan enemigos
update()
{
  if(this.NumEnemigos()===0)
  {
    //this.scene.start
    this.scene.start('menu')
  }

}


  
//comprueba sinquedan enemigos
  update()
  {
    if(this.NumEnemigos()===0)
    {
      //this.scene.start
      this.scene.start('menu')
    }
  }




  
  createTileMap() 
  {

    this.map = this.make.tilemap({
      key: 'mapLevel1',
      
    });
   // const tileset1=this.map.addTilesetImage('suelo', 'suelo');;
    const tileset2 = this.map.addTilesetImage('dungeon', 'dungeon'); 
    this.boxLayer = this.map.createLayer('paredes', tileset2);
    this.backgroundLayer = this.map.createLayer('suelo', tileset2);
   

  }

  updateLivesEnemy() {
    this.label.text = 'Enemies Left: ' + this.NumEnemigos();
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
//Player
import Player from '../player.js'
//MovingObject
import movingObject from '../Objects/MovingObject.js';
//Clases de enemigos
import BasicEnemy from '../Enemies/BasicEnemy.js';
import RangedEnemy from '../Enemies/RangedEnemy.js';
import SpeedEnemy from '../Enemies/SpeedEnemy.js';
import StrongEnemy from '../Enemies/StrongEnemy.js';
//PowerUp vida
import LifePowerUp from '../Objects/lifePowerUp.js';
//Eye
import eye from '../Objects/eye.js';
//Puerta final de nivel
import Door from '../Objects/door.js';



//Escena del nivel 1
export default class Level1 extends Phaser.Scene {
  constructor() {
    super({ key: 'level1' });
  }


  //Elementos del nivel 1
  create() {

    const width = this.scale.width;
    const height = this.scale.height;
    const large = width * 10;
    this.createTileMap();

    this.player = new Player(this, 300, 600);
    this.physics.add.collider(this.player, this.boxLayer);
    this.boxLayer.setCollisionBetween(0, 999);

    this.numEnemigosVivos = 0

    this.movingObject1 = new movingObject(this, 500, 500, this.player);
  
    this.enemy = this.add.group();
    this.enemy.add(new BasicEnemy(this, 1000, 400, 'basicEnemyVerdeDerecha', this.player,2));
    //this.enemy.add(new BasicEnemy(this, 900, 340, 'basicEnemyRojoDerecha', this.player,2));
    this.enemy.add(new BasicEnemy(this, 700, 340, 'basicEnemyAmarilloDerecha', this.player,2));
    //this.enemy.add(new BasicEnemy(this, 700, 340, 'basicEnemyAzulDerecha', this.player,2));
    this.enemy.add( new SpeedEnemy(this,400 , 200,'MovimientoGeneralSpeedEnemy' , this.player,2));
    this.enemy.add(new StrongEnemy(this,400 , 300,'StrongEnemyIzq' , this.player,4));
    this.enemy.add(new RangedEnemy(this, 600 , 600,'RangedEnemyDer' , this.player,2));

    //creamos objeto de level enemiesLEFT
    this.label = this.add.text(850, 10, "Enemies Left: " + this.numEnemigosVivos).setScrollFactor(0);

    this.eye = new eye(this, 1000, 4000, this.player, this.enemy);

    this.door = new Door(this, 300, 400, this.player, 'level3');


    // this.physics.world.setBounds(0, 0, large, height);
    //this.cameras.main.setBounds(0, 0, width, height);
    this.cameras.main.startFollow(this.player);

    new LifePowerUp(this,500,900,this.player);

    this.physics.add.collider(this.enemy, this.boxLayer);

  }


  //Creacion del tilemap
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

  update()
  {
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

  changeLevel(newlevel)
  {
    this.scene.start(newlevel)
  }


}
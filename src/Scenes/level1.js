//Player
import Player from '../player.js'
//MovingObject
import movingObject from '../Objects/MovingObject.js';
//Clases de enemigos
import BasicEnemy from '../Enemies/BasicEnemy.js';
import RangedEnemy from '../Enemies/RangedEnemy.js';
import SpeedEnemy from '../Enemies/SpeedEnemy.js';
import StrongEnemy from '../Enemies/StrongEnemy.js';
//PowerUps
import LifePowerUp from '../PowerUps/lifePowerUp.js';
import damagePowerUp from '../PowerUps/damagePowerUp.js';
import speedPowerUp from '../PowerUps/speedPowerUp.js';
//Eye
import eye from '../Objects/eye.js';
//Puerta final de nivel
import Door from '../Objects/door.js';
import eyeBoss from '../Objects/eyeBoss.js';
import Boss from '../Enemies/boss.js';
//cofres
import cofre from '../Objects/cofre.js';


//Escena del nivel 1
export default class Level1 extends Phaser.Scene {
  constructor() {
    super({ key: 'level1' });
  }
  init(data) {
    this.mapName = data.mapName;
  }

  //Elementos del nivel 1
  create() {
    this.createTileMap();
    this.enemy = this.add.group();
    console.log(this.mapName);
    const width = this.scale.width;
    const height = this.scale.height;
    const large = width * 10;
    this.playing = true;
    
    //map1
    if (this.mapName === 'finalMap1') {

      this.player = new Player(this, 1200, 600,false);
     

      this.numEnemigosVivos = 0;

      this.movingObject1 = new movingObject(this, 500, 500, this.player);

      this.enemy.add(new BasicEnemy(this, 1000, 400, 'basicEnemyVerdeDerecha', this.player, 2));
      this.enemy.add(new BasicEnemy(this, 900, 340, 'basicEnemyRojoDerecha', this.player, 2));
      this.enemy.add(new BasicEnemy(this, 700, 340, 'basicEnemyAmarilloDerecha', this.player, 2));
      this.enemy.add(new BasicEnemy(this, 700, 340, 'basicEnemyAzulDerecha', this.player, 2));
      this.enemy.add(new SpeedEnemy(this, 400, 500, 'MovimientoGeneralSpeedEnemy', this.player, 2));
      this.enemy.add(new StrongEnemy(this, 400, 300, 'StrongEnemyWalk', this.player, 4));
      this.enemy.add(new RangedEnemy(this, 600, 600, 'RangedEnemyDer', this.player, 2));

      //creamos objeto de level enemiesLEFT
      //this.label = this.add.text(850, 10, "Enemies Left: " + this.numEnemigosVivos).setScrollFactor(0);

      this.eye = new eye(this, 1000, 4000, this.player, this.enemy);

      //envias parametro de a que escena quieres ir y que nivel te has pasado
      this.door = new Door(this, 300, 400, this.player, 'middleScene', 'mapLevel1');


      // this.physics.world.setBounds(0, 0, large, height);
      //this.cameras.main.setBounds(0, 0, width, height);

      // lifepowerUp
      // new LifePowerUp(this, 500, 900, this.player);

      // //damagepowerUp
      // new damagePowerUp(this,700, 900,this.player);

      // //speedpowerUp
      // new speedPowerUp(this, 900, 900, this.player);

      //cofre
      new cofre(this, 1400, 1300, this.player);

      //cofre
      new cofre(this, 1600, 1300, this.player);

      //cofre
      new cofre(this, 1800, 1300, this.player);

      this.physics.add.collider(this.enemy, this.boxLayer);
    }

    //map2
    else if (this.mapName === 'map2') {

      this.player = new Player(this, 600, 1200,false);
     
      
      this.numEnemigosVivos = 0;

      this.movingObject1 = new movingObject(this, 1000, 1200, this.player);

      this.enemy.add(new BasicEnemy(this, 1200, 1200, 'basicEnemyVerdeDerecha', this.player, 2));
      this.enemy.add(new BasicEnemy(this, 1400, 1200, 'basicEnemyRojoDerecha', this.player, 2));
      this.enemy.add(new BasicEnemy(this, 1400, 1500, 'basicEnemyAmarilloDerecha', this.player, 2));
      this.enemy.add(new BasicEnemy(this, 1400, 1600, 'basicEnemyAzulDerecha', this.player, 2));
      this.enemy.add(new SpeedEnemy(this,  1400, 1800, 'MovimientoGeneralSpeedEnemy', this.player, 2));
      this.enemy.add(new StrongEnemy(this,  1400, 1800, 'StrongEnemyWalk', this.player, 4));
      this.enemy.add(new RangedEnemy(this,  1800, 2200, 'RangedEnemyDer', this.player, 2));

      // //creamos objeto de level enemiesLEFT
       //this.label = this.add.text(850, 10, "Enemies Left: " + this.numEnemigosVivos).setScrollFactor(0);

      this.eye = new eye(this, 1000, 4000, this.player, this.enemy);

      this.door = new Door(this,600, 1300, this.player, 'middleScene','map2');


      // this.physics.world.setBounds(0, 0, large, height);
      //this.cameras.main.setBounds(0, 0, width, height);

      new LifePowerUp(this, 500, 900, this.player);

      this.physics.add.collider(this.enemy, this.boxLayer);
    }

    //map3
    else {
      
      this.player = new Player(this, 700, 300,true);
      

      this.numEnemigosVivos = 4;


      this.enemy.add(new eyeBoss(this, 100, 100, this.player));
      this.enemy.add(new eyeBoss(this, 200, 100, this.player));
      this.enemy.add(new eyeBoss(this, 300, 100, this.player));
      this.enemy.add(new eyeBoss(this, 400, 100, this.player));

      this.boss = new Boss(this, 300, 300, this.player);

      //this.cameras.main.setBounds(0, 0, large, height);

    
    }
    this.physics.add.collider(this.player, this.boxLayer);
    this.boxLayer.setCollisionBetween(0, 999);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setZoom(2.5);
    this.createPause();
    this.sonidoGame();

  }

  isScenePlaying() {
    return this.playing;
  }

  sonidoGame() {
    const config = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0
    };
    this.gamesong = this.sound.add('juegosong', config);
    this.gamesong.play();
  }

  quitarSonido() {
    this.gamesong.destroy();
  }

  //Creacion del tilemap
  createTileMap() {
    this.map = this.make.tilemap({
      key: this.mapName,

    });
    // const tileset1=this.map.addTilesetImage('suelo', 'suelo');;
    // if (this.mapName === 'mapLevel1') {

    //   const tileset2 = this.map.addTilesetImage('dungeon', 'dungeon');
    //   this.boxLayer = this.map.createLayer('paredes', tileset2);
    //   this.backgroundLayer = this.map.createLayer('suelo', tileset2);
    // }
     if(this.mapName==='map3'){
      const tileset2 = this.map.addTilesetImage('dungeon_', 'dungeon');//la barra _
      this.boxLayer = this.map.createLayer('paredes', tileset2);
      this.backgroundLayer = this.map.createLayer('suelo', tileset2);
    }
    else if(this.mapName==='map2')
    {
      const tileset2 = this.map.addTilesetImage('dungeon', 'dungeon');
      this.boxLayer = this.map.createLayer('paredes', tileset2);
      this.backgroundLayer = this.map.createLayer('suelo', tileset2);
    }
    else{
      const tileset2 = this.map.addTilesetImage('interior', 'interior');
      this.backgroundLayer = this.map.createLayer('suelo', tileset2);
      this.boxLayer = this.map.createLayer('paredes', tileset2);

    }
    // else {
    //   const tileset2 = this.map.addTilesetImage('dungeon', 'dungeon');//la barra _
    //   this.boxLayer = this.map.createLayer('paredes', tileset2);
    //   this.backgroundLayer = this.map.createLayer('suelo', tileset2);
    // }
  }

  update() {
  }

  updateLivesEnemy() {
    //this.label.text = 'Enemies Left: ' + this.NumEnemigos();
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

  changeLevel(newlevel,dataMap) {
    //pasamos de escena y cambiamos su dataMap
    this.scene.start(newlevel ,{mapName:dataMap} );   
  }
  /**
* Método en el que se crean los diversos elementos de la pausa,
  además, se definen los eventos pointerdown para cada botón
*/
  createPause() {
    this.pause = this.add.image(680, 165, 'pause').setScale(0.05).setScrollFactor(0).setInteractive();
    this.resume = this.add.text(this.scale.width / 2 - 70, this.scale.height / 2 - 20, "RESUME").setInteractive().setScrollFactor(0).setVisible(false).setScale(2);
    //boton de pausa
    this.pause.on("pointerdown", () => {
      this.pauseEnemies(false);
      this.playing = false;
      this.physics.pause();

    })
    //boton de resume
    this.resume.on("pointerdown", () => {
      this.pauseEnemies(true);
      this.physics.resume();
      this.playing = true;
    })
  }
  /**
* Método en el que se pausan/reanudan los elementos de la escena
*/
  pauseEnemies(isAct) {
    for (let i = 0; i < this.enemy.getLength(); i++) {
      this.enemy.getChildren()[i].setActive(isAct);
    }
    this.resume.setVisible(!isAct);

  }

}
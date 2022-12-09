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
    this.movingObjects = this.add.group();
    console.log(this.mapName);
    const width = this.scale.width;
    const height = this.scale.height;
    const large = width * 10;
    this.playing = true;

    //map1
    if (this.mapName === 'finalMap1') {

      this.player = new Player(this, 1200, 600, false);


      this.numEnemigosVivos = 0;

      this.movingObjects1 = new movingObject(this, 500, 500, this.player, this.movingObjects);

      //creamos objeto de level enemiesLEFT
      this.label = this.add.text(850, 10, "Enemies Left: " + this.numEnemigosVivos).setScrollFactor(0);

      this.eye = new eye(this, 1000, 4000, this.player, this.enemy);

      //envias parametro de a que escena quieres ir y que nivel te has pasado
      this.door = new Door(this, 300, 400, this.player, 'middleScene', 'mapLevel1');


      // this.physics.world.setBounds(0, 0, large, height);
      //this.cameras.main.setBounds(0, 0, width, height);

    

      //cofre
      new cofre(this, 300, 490, this.player);

      //cofre
      new cofre(this, 1600, 1300, this.player);

      //cofre
      new cofre(this, 1800, 1300, this.player);

      this.physics.add.collider(this.enemy, this.boxLayer);
      this.physics.add.collider(this.enemy, this.movingObjects);
      new LifePowerUp(this, 600, 850, this.player);

    }

    //map2
    else if (this.mapName === 'map2') {

      this.player = new Player(this, 600, 1200, false);

      this.numEnemigosVivos = 0;

      this.movingObjects1 = new movingObject(this, 500, 500, this.player, this.movingObjects);

      this.enemy.add(new BasicEnemy(this, 900, 500, 'basicEnemyVerdeDerecha', this.player));
      this.enemy.add(new BasicEnemy(this, 900, 500, 'basicEnemyRojoDerecha', this.player));
      this.enemy.add(new BasicEnemy(this, 900, 500, 'basicEnemyAmarilloDerecha', this.player));
      this.enemy.add(new BasicEnemy(this, 900, 500, 'basicEnemyAzulDerecha', this.player));
      this.enemy.add(new SpeedEnemy(this, 900, 500, 'MovimientoGeneralSpeedEnemy', this.player));
      this.enemy.add(new StrongEnemy(this, 900, 500, 'StrongEnemyWalk', this.player));
      this.enemy.add(new RangedEnemy(this, 900, 500, 'RangedEnemyDer', this.player, this.movingObjects));

      this.eye = new eye(this, 1000, 4000, this.player, this.enemy);

      this.door = new Door(this, 600, 1300, this.player, 'middleScene', 'map2');

      new LifePowerUp(this, 500, 900, this.player);

      this.physics.add.collider(this.enemy, this.boxLayer);
      this.physics.add.collider(this.enemy, this.movingObjects);

    }

    //map3
    else {

      //  this.player = new Player(this, 700, 300, true);

      this.createPlayer();
      this.numEnemigosVivos = 4;
      this.enemy.add(new eyeBoss(this, 100, 100, this.player));
      this.enemy.add(new eyeBoss(this, 200, 100, this.player));
      this.enemy.add(new eyeBoss(this, 300, 100, this.player));
      this.enemy.add(new eyeBoss(this, 400, 100, this.player));

      this.boss = new Boss(this, 300, 300, this.player);

      //this.cameras.main.setBounds(0, 0, large, height);


    }
    this.createEnemies();
    this.physics.add.collider(this.player, this.boxLayer);
    this.boxLayer.setCollisionBetween(0, 999);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setZoom(2.5);
    // this.cameras.main.setDeadzone(width, height);
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
    if (this.mapName === 'map3') {
      const tileset2 = this.map.addTilesetImage('interior', 'interior');//la barra _
      this.boxLayer = this.map.createLayer('paredes', tileset2);
      this.backgroundLayer = this.map.createLayer('suelo', tileset2);
    }
    else if (this.mapName === 'map2') {
      const tileset2 = this.map.addTilesetImage('dungeon', 'dungeon');
      this.boxLayer = this.map.createLayer('paredes', tileset2);
      this.backgroundLayer = this.map.createLayer('suelo', tileset2);
    }
    else {
      const tileset2 = this.map.addTilesetImage('interior', 'interior');
      const tileset3 = this.map.addTilesetImage('TopDownHouse_FloorsAndWalls', 'TopDownHouse_FloorsAndWalls');
      const tileset4 = this.map.addTilesetImage('TopDownHouse_FurnitureState1', 'TopDownHouse_FurnitureState1');
      const tileset5 = this.map.addTilesetImage('TopDownHouse_SmallItems', 'TopDownHouse_SmallItems');
      const kitchenTiles = this.map.addTilesetImage('kitchen', 'kitchen');
      const sueloTiles = this.map.addTilesetImage('suelitopasillo', 'interior_free');
      const propTiles = this.map.addTilesetImage('Props2', 'Props2');
      this.backgroundLayer = this.map.createLayer('suelo', [tileset2, tileset3, tileset4, kitchenTiles, sueloTiles]);
      this.boxLayer = this.map.createLayer('paredes', [tileset2, kitchenTiles]);
      this.adornosLayer = this.map.createLayer('adornos', [tileset5, tileset4, kitchenTiles, propTiles])

    }

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

  changeLevel(newlevel, dataMap) {
    //pasamos de escena y cambiamos su dataMap
    this.scene.start(newlevel, { mapName: dataMap });
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
  /**
* Método en el que se crean los enemigos de la escena
*/
  createEnemies() {
    if (this.mapName !== 'map3') {
      for (const basicEn of this.map.getObjectLayer('basicEnemies').objects) {
        this.enemy.add(new BasicEnemy(this, basicEn.x, basicEn.y, 'basicEnemyVerdeDerecha', this.player, 2));
      }
      for (const strongEn of this.map.getObjectLayer('strongEnemies').objects) {
        this.enemy.add(new StrongEnemy(this, strongEn.x, strongEn.y, 'StrongEnemyWalk', this.player));
      }
      for (const speedEn of this.map.getObjectLayer('speedEnemies').objects) {
        this.enemy.add(new SpeedEnemy(this, speedEn.x, speedEn.y, 'MovimientoGeneralSpeedEnemy', this.player));
      }
      for (const rangedEn of this.map.getObjectLayer('rangedEnemies').objects) {
        this.enemy.add(new RangedEnemy(this, rangedEn.x, rangedEn.y, 'RangedEnemyDer', this.player, this.movingObjects));
      }
    }

  }
  createPlayer() {
    for (const p of this.map.getObjectLayer('player').objects) {
      this.player = new Player(this, p.x, p.y, true);
    }
  }
}
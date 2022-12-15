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
import Eye from '../Objects/eye.js';
//Puerta final de nivel
import Door from '../Objects/door.js';
import eyeBoss from '../Objects/eyeBoss.js';
import Boss from '../Enemies/boss.js';
//cofres
import Cofre from '../Objects/cofre.js';

//cargamos intro
import EventDispatcher from '../eventos/eventDispatcher.js'
import IntroDialogo from '../Dialogos/introDialogo.js';


//Escena del nivel 1
export default class Level1 extends Phaser.Scene {
  constructor() {
    super({ key: 'level1' });
    //para poder hacer el evento
    this.emitter = EventDispatcher.getInstance();
    this.previousLetterTime = 0;
    this.introFinished = false;

  }
  init(data) {
    this.mapName = data.mapName;
    this.canPlayerDash = data.dash;
    this.canClick = data.click;
    //numero de middleScene que es segun nivel
    this.middleSceneNumber = data.middle;
  }

  //Elementos del nivel 1
  create() {
    this.emitter.destroy();

    this.createTileMap();
    this.createPlayer();

    console.log(this.middleSceneNumber);
    console.log(this.mapName);

    this.enemy = this.add.group();
    this.movingObjects = this.add.group();
    console.log(this.mapName);
    const width = this.scale.width;
    const height = this.scale.height;
    const large = width * 10;
    this.playing = true;

    //map1
    if (this.mapName === 'finalMap1') {

      //iniciamos intro
      this.Intro();

      this.numEnemigosVivos = 0;

      this.movingObjects1 = new movingObject(this, 500, 500, this.player, this.movingObjects);

      //creamos objeto de level enemiesLEFT

      this.eye = new Eye(this, 1000, 4000, this.player, this.enemy);

      //envias parametro de a que escena quieres ir y que nivel te has pasado
      // this.door = new Door(this, 300, 400, this.player, 'middleScene', 'mapLevel1');
      this.door = new Door(this, 300, 400, this.player, 'level1', 'middleScene', 'one');


      // this.physics.world.setBounds(0, 0, large, height);
      //this.cameras.main.setBounds(0, 0, width, height);


      this.createObjects();

      this.physics.add.collider(this.enemy, this.boxLayer);
      this.physics.add.collider(this.enemy, this.movingObjects);
      this.physics.add.collider(this.enemy, this.movingObjects);
      new speedPowerUp(this, 600, 850, this.player);

    }
    else if (this.mapName == 'middleScene') {
      //pasillo que conecta level 1 con 2
      if (this.middleSceneNumber == 'one') {
        //envias parametro de a que escena quieres ir y que nivel te has pasado y a que pasillo quieres ir
        this.door = new Door(this, 160, 0, this.player, 'middleScene', 'mapLevel1', 'two');
      }
      //pasillo que conecta level 2 con 3
      else if (this.middleSceneNumber == 'two') {
        //envias parametro de a que escena quieres ir y que nivel te has pasado y a que pasillo quieres ir
        this.door = new Door(this, 160, 0, this.player, 'middleScene', 'map2', 'two');
      }

      //this.createObjects();
    }

    //map2
    else if (this.mapName === 'map2') {

      // this.player = new Player(this, 1200, 600, false);

      this.numEnemigosVivos = 0;

      this.movingObjects1 = new movingObject(this, 500, 500, this.player, this.movingObjects);



      this.eye = new Eye(this, 1000, 4000, this.player, this.enemy);

      this.door = new Door(this, 300, 400, this.player, 'level1', 'middleScene', 'two');

      new speedPowerUp(this, 500, 900, this.player);

      this.physics.add.collider(this.enemy, this.boxLayer);
      this.physics.add.collider(this.enemy, this.movingObjects);

    }

    //map3
    else {
      this.numEnemigosVivos = 8;

      this.enemy.add(new eyeBoss(this, 100, 100, this.player));
      this.enemy.add(new eyeBoss(this, 100, 150, this.player));
      this.enemy.add(new eyeBoss(this, 100, 200, this.player));
      this.enemy.add(new eyeBoss(this, 100, 250, this.player));

      this.enemy.add(new eyeBoss(this, 300, 100, this.player));
      this.enemy.add(new eyeBoss(this, 300, 150, this.player));
      this.enemy.add(new eyeBoss(this, 300, 200, this.player));
      this.enemy.add(new eyeBoss(this, 300, 250, this.player));


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
    const tileset2 = this.map.addTilesetImage('interior', 'interior');
    const tileset1 = this.map.addTilesetImage('Props2', 'Props2');
    const tileset3 = this.map.addTilesetImage('TopDownHouse_FloorsAndWalls', 'TopDownHouse_FloorsAndWalls');
    const tileset4 = this.map.addTilesetImage('TopDownHouse_FurnitureState1', 'TopDownHouse_FurnitureState1');
    const tileset5 = this.map.addTilesetImage('TopDownHouse_SmallItems', 'TopDownHouse_SmallItems');
    const tileset6 = this.map.addTilesetImage('kitchen', 'kitchen');
    const tileset7 = this.map.addTilesetImage('Interiors_free_16x16', 'Interiors_free_16x16');
    this.backgroundLayer = this.map.createLayer('suelo', [tileset2, tileset3, tileset4, tileset6, tileset7]);
    this.boxLayer = this.map.createLayer('paredes', [tileset2, tileset6]);
    this.adornosLayer = this.map.createLayer('adornos', [tileset5, tileset4, tileset6, tileset1, tileset7])



  }
  getEnemiesRemaining() {
    return this.enemy.getLength();
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

  changeLevel(newlevel, dataMap, middleValue) {
    this.quitarSonido();
    //pasamos de escena y cambiamos su dataMap
    this.scene.start(newlevel, { mapName: dataMap, middle: middleValue });
  }

  /**
* Método en el que se crean los diversos elementos de la pausa,
  además, se definen los eventos pointerdown para cada botón
*/
  createPause() {
    this.pause = this.add.image(680, 165, 'pause').setScale(0.05).setScrollFactor(0).setInteractive();
    this.panel = this.add.image(this.scale.width / 2, this.scale.height / 2, 'panelpausa').setScale(0.75).setScrollFactor(0).setVisible(false);
    this.resume = this.add.image(this.scale.width / 2 + 25, this.scale.height / 2 - 10, 'resume').setInteractive().setScrollFactor(0).setVisible(false).setScale(0.5);
    this.options = this.add.image(this.scale.width / 2, this.scale.height / 2 + 35, 'options').setInteractive().setScrollFactor(0).setVisible(false).setScale(0.35);
    this.exit = this.add.image(this.scale.width / 2 + 2, this.scale.height / 2 + 75, 'exit').setInteractive().setScrollFactor(0).setVisible(false).setScale(0.35);

    //boton de pausa
    this.pause.on("pointerdown", () => {
      if (this.playing) {
        this.pauseEnemies(false);
        this.playing = false;
        this.physics.pause();
      }
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
    this.panel.setVisible(!isAct);
    this.options.setVisible(!isAct);
    this.exit.setVisible(!isAct);


  }
  /**
* Método en el que se crean los enemigos de la escena
*/
  createEnemies() {
    console.log(this.mapName);
    if (this.mapName !== 'map3' && this.mapName !== 'middleScene') {
      for (const basicEn of this.map.getObjectLayer('basicEnemies').objects) {
        var value = Phaser.Math.Between(0, 3);
        //random para el color del basic enemy
        switch (value) {
          case 0: this.basicEnSprite = 'basicEnemyVerdeDerecha';
            break;
          case 1: this.basicEnSprite = 'basicEnemyRojoDerecha';
            break;
          case 2: this.basicEnSprite = 'basicEnemyAmarilloDerecha';
            break;
          case 3: this.basicEnSprite = 'basicEnemyAzulDerecha';
            break;
        }
        this.enemy.add(new BasicEnemy(this, basicEn.x, basicEn.y, this.basicEnSprite, this.player, this.canClick));
      }
      for (const strongEn of this.map.getObjectLayer('strongEnemies').objects) {
        this.enemy.add(new StrongEnemy(this, strongEn.x, strongEn.y, 'StrongEnemyWalk', this.player, this.canClick));
      }
      for (const speedEn of this.map.getObjectLayer('speedEnemies').objects) {
        this.enemy.add(new SpeedEnemy(this, speedEn.x, speedEn.y, 'MovimientoGeneralSpeedEnemy', this.player, this.canClick));
      }
      for (const rangedEn of this.map.getObjectLayer('rangedEnemies').objects) {
        this.enemy.add(new RangedEnemy(this, rangedEn.x, rangedEn.y, 'RangedEnemyDer', this.player, this.movingObjects, this.canClick));
      }
      for(const e of this.map.getObjectLayer('eyes').objects){
        new Eye(this, e.x, e.y, this.player, this.enemy);
      }
    }

  }
  /**
* Método en el que se crean el jugador de la escena
*/
  createPlayer() {
    for (const p of this.map.getObjectLayer('player').objects) {
      this.player = new Player(this, p.x, p.y, this.canPlayerDash);
    }
  }
  /**
* Método en el que se crean los objetos de la escena
*/
  createObjects() {
    for (const c of this.map.getObjectLayer('chests').objects) {
      new Cofre(this, c.x, c.y, this.player);
    }
  }
  saveFile() {
    //guardamos la vida del player
    //guardamos el numero de enemigos
    //guardamos el grupo de enemigos para poder ver cuales quedan
    // window.addEventListener("guardar", event =>
    // {
    //   //guardamos algo con un nombre
    //   window.localStorage.setItem('vidaPlayer' ,this.healthPlayer )
    // });
  }

  loadFile() {
    //ponemos la vida del player actualizandola
    //establecemos el grupo de enemigos
    // window.addEventListener("cargar", event =>
    // {
    //   //guardamos algo con un nombre
    //   this.healthPlayer =window.localStorage.getItem('vidaPlayer')
    // });
  }

  //ejecuta intro
  Intro() {
    console.log("intro");
    //pone imagen de pergamino
    this.image = this.add.image(1218, 650, 'pergamino');
    this.image.setScale(0.35);

    //creamos cuadro de dialogo
    this.IntroDialogo = new IntroDialogo(this, 1080, 610, 300);

    this.tween = this.tweens.add({
      targets: [this.image],
      scaleX: 0.4,
      scaleY: 0.4,
      duration: 1000,
      repeat: 0,
      onComplete: () => {
        //creamos el evento y lo emitimos te lleva directamente a donde el metodo esta definido
        this.emitter.emit("introPergamino");
      }
    });

    //pausamos el juego mientras .enemigos y fisicas
    for (let i = 0; i < this.enemy.getLength(); i++) {
      this.enemy.getChildren()[i].setActive(false);
    }
    this.playing = false;
    this.physics.pause();

    this.input.keyboard.once("keydown", () => {
      // quitamos la pausa
      for (let i = 0; i < this.enemy.getLength(); i++) {
        this.enemy.getChildren()[i].setActive(true);
      }
      this.playing = true;
      this.physics.resume();
      this.emitter.destroy("introPergamino");
      //pausamos el juego mientras .enemigos y fisicas
      this.quitarIntro();
    }, this);
  }

  quitarIntro() {
    //quitamos boton
    //this.playbutton.setVisible(false);
    //this.playbutton.setActive(false);
    //quitamos imagen
    this.image.setVisible(false);
    this.image.setActive(false);
    //quitamos texto
    this.IntroDialogo.clearText();
  }
}
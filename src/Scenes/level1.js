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
    this.maxVol = 0.7;
    this.muteVol = 0;
    this.isMute = false;

  }

  preload()
  {
    this.loadFile();
  }
  
  init(data) 
  {

    this.mapName =  data.mapName;
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
    const width = this.scale.width;
    const height = this.scale.height;
    const large = width * 10;
    this.playing = true;

    this.Guardar();

    //map1
    if (this.mapName === 'finalMap1') {

      //iniciamos intro
      this.Intro();
      this.movingObjects1 = new movingObject(this, 500, 500, this.player, this.movingObjects);

      //envias parametro de a que escena quieres ir y que nivel te has pasado
      // this.door = new Door(this, 300, 400, this.player, 'middleScene', 'mapLevel1');
      this.door = new Door(this,250, 170, this.player, 'level1', 'middleScene', 'one');
      this.createObjects();
      this.physics.add.collider(this.enemy, this.boxLayer);
      this.physics.add.collider(this.enemy, this.movingObjects);
      this.physics.add.collider(this.enemy, this.movingObjects);

    }
    else if (this.mapName == 'middleScene') {
      //pasillo que conecta level 1 con 2
      if (this.middleSceneNumber == 'one') {
        //envias parametro de a que escena quieres ir y que nivel te has pasado y a que pasillo quieres ir
        this.door = new Door(this, 250, 100, this.player, 'middleScene', 'mapLevel1', 'two');
      }
      //pasillo que conecta level 2 con 3
      else if (this.middleSceneNumber == 'two') {
        //envias parametro de a que escena quieres ir y que nivel te has pasado y a que pasillo quieres ir
        this.door = new Door(this, 250, 100, this.player, 'middleScene', 'map2', 'two');
      }

    }

    //map2
    else if (this.mapName === 'map2') {
      this.movingObjects1 = new movingObject(this, 500, 500, this.player, this.movingObjects);
      this.door = new Door(this,600, 100, this.player, 'level1', 'middleScene', 'two');
      this.physics.add.collider(this.enemy, this.boxLayer);
      this.physics.add.collider(this.enemy, this.movingObjects);

    }

    //map3
    else {

      this.enemy.add(new eyeBoss(this, 100, 100, this.player));
      this.enemy.add(new eyeBoss(this, 100, 150, this.player));
      this.enemy.add(new eyeBoss(this, 100, 200, this.player));
      this.enemy.add(new eyeBoss(this, 100, 250, this.player));

      this.enemy.add(new eyeBoss(this, 300, 100, this.player));
      this.enemy.add(new eyeBoss(this, 300, 150, this.player));
      this.enemy.add(new eyeBoss(this, 300, 200, this.player));
      this.enemy.add(new eyeBoss(this, 300, 250, this.player));
      this.boss = new Boss(this, 300, 300, this.player);

    }

    this.createEnemies();
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
      mute: this.isMute,
      volume: this.maxVol,
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

  /**
* Método en el que se crea el tilemap con sus respectivas capas
*/
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
      //añadimos fondo y nubes
      const tileset8 = this.map.addTilesetImage('Abismo', 'Abismo');
      const tileset9 = this.map.addTilesetImage('Basement', 'Basement');
      const tileset10 = this.map.addTilesetImage('Clouds_3', 'Clouds_3');
      const tileset11 = this.map.addTilesetImage('nubes2', 'nubes2');
      //añadimos este a capa suelo como extra
      this.backgroundLayer = this.map.createLayer('suelo', [tileset2, tileset3, tileset4, tileset6, tileset7,tileset8,tileset9,tileset10,tileset11]);
      this.boxLayer = this.map.createLayer('paredes', [tileset2, tileset6]);
      this.adornosLayer = this.map.createLayer('adornos', [tileset5, tileset4, tileset6, tileset1, tileset7])
  }
  /**
* Método en el que se obtienen enemigos restantes del nivel
*/
  getEnemiesRemaining() {
    return this.enemy.getLength();
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
    this.resume = this.add.image(this.scale.width / 2 - 40, this.scale.height / 2 - 10, 'resume').setInteractive().setScrollFactor(0).setVisible(false).setScale(0.5);
    this.options = this.add.image(this.scale.width / 2 - 60, this.scale.height / 2 + 55, 'options').setInteractive().setScrollFactor(0).setVisible(false).setScale(0.45);
    this.config = this.add.image(this.scale.width / 2, this.scale.height / 2, 'configuracion').setScrollFactor(0).setVisible(false).setScale(0.25);
    this.exit = this.add.image(this.scale.width / 2 + 60, this.scale.height / 2 + 55, 'exit').setInteractive().setScrollFactor(0).setVisible(false).setScale(0.35);
    this.fullsound = this.add.image(this.scale.width / 2 + 60, this.scale.height / 2 - 10, 'on').setScale(0.07).setScrollFactor(0).setInteractive().setVisible(false);
    this.mutesound = this.add.image(this.scale.width / 2 + 60, this.scale.height / 2 - 10, 'off').setScale(0.07).setScrollFactor(0).setInteractive().setVisible(false);
    this.back = this.add.image(this.scale.width / 2, this.scale.height / 2 + 40, 'back').setScale(0.05).setScrollFactor(0).setInteractive().setVisible(false);

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
    //boton settings
    this.options.on("pointerdown", () => {
      this.config.setVisible(true);
      this.back.setVisible(true);
      this.resume.setVisible(false)
      this.exit.setVisible(false);
      this.options.setVisible(false);
      if (!this.isMute) {
        this.fullsound.setVisible(false);
      }
      else {
        this.mutesound.setVisible(false);
      }

    })
    //boton de salir al menú
    this.exit.on("pointerdown", () => {
      this.scene.start('menu');
      this.gamesong.destroy();
    })
    //pulsas boton de volumen
    this.fullsound.on("pointerdown", () => {
      this.fullsound.setVisible(false);
      this.isMute = true;
      this.mutesound.setVisible(true);
      this.gamesong.setVolume(0);

    })
    //pulsas volumen muteado
    this.mutesound.on("pointerdown", () => {
      this.mutesound.setVisible(false);
      this.isMute = false;
      this.fullsound.setVisible(true);
      this.gamesong.setVolume(this.maxVol);

    })
    //boton back de config
    this.back.on("pointerdown", () => {
      this.config.setVisible(false);
      this.back.setVisible(false);
      this.resume.setVisible(true);
      this.exit.setVisible(true);
      this.options.setVisible(true);
      if (!this.isMute) {
        this.fullsound.setVisible(true);
      }
      else {
        this.mutesound.setVisible(true);
      }
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
    if (!this.isMute) {
      this.fullsound.setVisible(!isAct);
    }
    else {
      this.mutesound.setVisible(!isAct);
    }


  }
  /**
* Método en el que se crean los enemigos de la escena
*/
  createEnemies() {
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
      for (const e of this.map.getObjectLayer('eyes').objects) {
        new Eye(this, e.x, e.y, this.player, this.enemy);
      }
    }

  }
  /**
* Método en el que se crea el jugador de la escena
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

  //ejecuta intro
  Intro() {
    console.log("intro");
    //pone imagen de pergamino
    this.image = this.add.image(1310, 740, 'pergamino');
    this.image.setScale(0.35);

    //creamos cuadro de dialogo
    this.IntroDialogo = new IntroDialogo(this, 1200, 700, 300);

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
      this.image.setVisible(false);
      this.image.setActive(false);
      this.IntroDialogo.clearText();
    }, this);
  }
 /**
* Método en el que se pasa a la escena de fin tras haber muerto, y poder reiniciar el nivel
*/
  diedScreen() {
   //parametros para reiniciar 
    this.scene.start('final', { text: 'LOSE',mapName:this.mapName,dash:this.canPlayerDash,click:this.canClick,middle:this.middleSceneNumber });
    
  }

  Guardar()
  {
     //guardamos la vida del player
    //guardamos el numero de enemigos
    //guardamos el grupo de enemigos para poder ver cuales quedan
    //Eventos ejecutados al abrir y cerrar la pestaña de juego
    console.log("mapa actualizado");
    //guardar
    window.addEventListener("beforeunload", event => {
			window.localStorage.setItem('levelActual', this.mapName);
		});
  }

  loadFile() 
  {

    //ponemos la vida del player actualizandola
    //establecemos el grupo de enemigos
    // window.addEventListener("cargar", event =>
    // {
    //   //guardamos algo con un nombre
    //   this.healthPlayer =window.localStorage.getItem('vidaPlayer')
    // });
    window.addEventListener("load", event =>
    {
      //guardamos algo con un nombre
      this.mapName = window.localStorage.getItem('levelActual');
    });
  }
}
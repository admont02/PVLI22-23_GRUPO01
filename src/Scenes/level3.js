import Player from '../player.js';
import Boss from '../Enemies/boss.js';
import eyeBoss from '../Objects/eyeBoss.js';
import Level1 from './level1.js';

//Escena del nivel 3
export default class Level3 extends Phaser.Scene {
  
  constructor() {
    super({ key: 'level3' });
  }

  //Elementos de la escena
  create() {
    const width = this.scale.width;
    const height = this.scale.height;
    const large = width * 10;
    this.playing = true;
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
    
    //this.cameras.main.setBounds(0, 0, large, height);
    this.cameras.main.startFollow(this.player);

    this.sonidoGame();

  }
  init(data) {
    this.mapName = data.mapName;
  }
  
  isScenePlaying() {
    return this.playing;
  }
  

  sonidoGame()
  {
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

  quitarSonido()
  {
    this.gamesong.destroy();
  }

  update()
  {
  }

  createTileMap() {
    this.map = this.make.tilemap({
      key: this.mapName,
    });
    
    const tileset2 = this.map.addTilesetImage('dungeon_', 'dungeon');
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

  changeLevel(newlevel)
  {
    this.scene.start(newlevel)
  }

  
}

//Area que crea el ojo(aumenta la velocidad de los enemigos si estos lo tocan)
export default class door extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, player, level, dataMap) {
    super(scene, x, y, 'doorClosed');

    this.setScale(0.05);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);

    this.scene = scene;
    this.player = player;
    this.level = level;
    this.dataMap = dataMap;

    this.doorSound = this.scene.sound.add('door');
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    if (this.scene.NumEnemigos() == 0) {
      this.setTexture('doorOpen');

      if (this.scene.physics.overlap(this.player, this)) {
        this.doorSound.play();
        this.scene.changeLevel(this.level,this.dataMap);
      }
    }

  }
}

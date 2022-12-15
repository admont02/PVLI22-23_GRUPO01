
//Area que crea el ojo(aumenta la velocidad de los enemigos si estos lo tocan)
export default class Door extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, player, level, dataMap,middleSceneNumber) {
    super(scene, x, y, 'doorClosed');

    this.setScale(0.05);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);

    this.scene = scene;
    this.player = player;
    this.level = level;
    this.dataMap = dataMap;
    this.middleSceneNumber = middleSceneNumber;
    console.log(this.middleSceneNumber);

    this.doorSound = this.scene.sound.add('door');
    this.label = this.scene.add.text(this.x, this.y, "Enemies Left: " + this.scene.getEnemiesRemaining());

  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    this.label.text = 'Enemies Left: ' + this.scene.getEnemiesRemaining();
    if (this.scene.getEnemiesRemaining() >= 0) { ///===
      this.setTexture('doorOpen');

      if (this.scene.physics.overlap(this.player, this)) {
        this.doorSound.play();
        this.scene.changeLevel(this.level,this.dataMap,this.middleSceneNumber);
      }
    }

  }
}


/**
* Clase que representa la puerta con la que podrás ir cambiando de nivel
*/
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
    if(this.y>0)
    this.label = this.scene.add.text(this.x-50, this.y-50, "Enemies Left: " + this.scene.getEnemiesRemaining()).setTint(0xff0000).setScale(0.75);

  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    if(this.y>0)
    this.label.text = 'Enemies Left:  ' + this.scene.getEnemiesRemaining();
    if (this.scene.getEnemiesRemaining() === 0) { ///===
      this.setTexture('doorOpen');

      if (this.scene.physics.overlap(this.player, this)) {
        this.doorSound.play();
        this.scene.changeLevel(this.level,this.dataMap,this.middleSceneNumber);
      }
    }

  }
}

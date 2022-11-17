import area from "./Area.js";
import HealthBar from "../healthbar.js";
export default class eye extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, player, enemies) {
    super(scene, x, y, 'eyeClose');

    this.setScale(0.1);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);

    this.scene.physics.add.collider(this, player);

    this.player = player;
    this.enemies = enemies;

    this.open = false;

    this.hp = new HealthBar(scene, 10, 10,150);
    this.hp.bar.setScrollFactor(1)
    this.hp.bar.setX(this.x-75)
    this.hp.bar.setY(this.y+50)
  }
  eyeTimer() {
    this.scene.time.addEvent({
      delay: 5000,
      callback: this.closeEye,
      callbackScope: this
    });
  }
  closeEye() {
    this.setTexture('eyeClose');
    this.area.destroy();
    this.open = false;
  }
  openEye() {
    this.setTexture('eyeOpen');
    this.area = new area(this.scene, this.x, this.y, this.player, this.enemies);
    this.eyeTimer();
  }
  resetBoolean() {
    this.open = false;
  }
  preUpdate(t, dt) {
    super.preUpdate(t, dt);
 

    if (!this.open) {
      this.open = true;
      this.scene.time.addEvent({
        delay: 5000,
        callback: this.openEye,
        callbackScope: this
      });
    }
  }
}

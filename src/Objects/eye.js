import Area from "./Area.js";
import HealthBar from "../healthbar.js";

/**
* Clase de los Ojoa de agnan, que hacen mas rapidos a los enemigos en su rango de alcance
*/
export default class Eye extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, player, enemies) {
    super(scene, x, y, 'eyeClose');

    this.setScale(0.25);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);

    this.scene.physics.add.collider(this, player);

    this.player = player;
    this.enemies = enemies;

    this.open = false;

    
  }
  eyeTimer() {
    this.scene.time.addEvent({
      delay: 5000,
      callback: this.closeEye,
      callbackScope: this
    });
  }

  //Cambios de animaciones
  closeEye() {
    this.setTexture('eyeClose');
    this.area.destroy();
    this.open = false;
  }

  //Abrir ojo crea un area
  openEye() {
    this.setTexture('eyeOpen');
    this.area = new Area(this.scene, this.x, this.y, this.player, this.enemies);
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

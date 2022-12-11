import GhostObject from "./GhostObject.js";

//Clase movingObject
export default class MovingObject extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, player, movingObjects) {
    super(scene, x, y, 'movinObject');

    this.setScale(0.03);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.movingObjects = movingObjects;

    this.scene.physics.add.collider(this, player);

    this.player = player;
    this.pointer = this.scene.input.activePointer;

    this.setInteractive();

    this.ghost = new GhostObject(this.scene, this.x, this.y, this.player);
    this.movingObjects.add(this.ghost);

    this.on("pointerdown", () => {
      this.startDrag();
    });

  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

  }


  //Al clickar en el 
  startDrag() {
    this.dragSound = this.scene.sound.add('duckToySqueak');
    this.dragSound.play();

    this.scene.input.on('pointermove', this.doDrag, this);
    this.scene.input.on('pointerup', this.stopDrag, this);
  }

  //Mover el objeto con la posicion del raton
  doDrag() {
    this.x = this.pointer.x + this.scene.cameras.main.midPoint.x - 500;
    this.y = this.pointer.y + this.scene.cameras.main.midPoint.y - 250;

    console.log(this.pointer.x);
    console.log(this.pointer.y);
    console.log("POSICION DEL OBJETO");
    console.log(this.x);
    console.log(this.y);

    this.ghost.destroy();
    this.ghost = new GhostObject(this.scene, this.x, this.y, this.player);
    this.movingObjects.add(this.ghost);

  }

  //Cuando se deja de clickar
  stopDrag() {
    this.scene.input.off('pointermove', this.doDrag, this);
  }

}

import GhostObject from "./GhostObject.js";

 export default class MovingObject extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, player) {
    super(scene, x, y, 'star');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    
    this.scene.physics.add.collider(this, player);

    //this.body.setCollideWorldBounds();


    this.player = player;
    this.pointer = this.scene.input.activePointer;

    this.setInteractive();

    this.ghost = new GhostObject(this.scene, this.x, this.y, this.player);

    this.on("pointerdown", () => {
      this.startDrag();
  });

  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

  }


  startDrag()
  {
    this.scene.input.on('pointermove',this.doDrag,this);
    this.scene.input.on('pointerup',this.stopDrag,this);
  }

  doDrag()
  {
      this.x = this.pointer.x + this.scene.cameras.main.midPoint.x - 500;
      this.y = this.pointer.y + this.scene.cameras.main.midPoint.y - 250;

    console.log(this.scene.cameras.main.midPoint.y);

      this.ghost.destroy();
      this.ghost = new GhostObject(this.scene, this.x, this.y, this.player);
  }

  stopDrag()
  {
    this.scene.input.off('pointermove',this.doDrag,this); 
    
  }
 
}

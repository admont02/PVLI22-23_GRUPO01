
 export default class MovingObject extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, player) {
    super(scene, x, y, 'star');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    
    this.scene.physics.add.collider(this, player);

    this.body.setCollideWorldBounds();


    this.pointer = this.scene.input.activePointer;

    this.setInteractive();

    
    this.on("pointerdown", () => {
      this.startDrag();
  });

  }


  startDrag()
  {
    this.scene.input.on('pointermove',this.doDrag,this);
    this.scene.input.on('pointerup',this.stopDrag,this);


  }

  doDrag()
  {
      this.x = this.pointer.x;
      this.y = this.pointer.y;
  }

  stopDrag()
  {
    this.scene.input.off('pointermove',this.doDrag,this);    
   // this.scene.input.off('pointerup',this.stopDrag,this);
  }
 
}

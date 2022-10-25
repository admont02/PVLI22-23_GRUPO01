import area from "./Area.js";

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

    this.timerOpen = 500;
    this.timerClose = 500;

  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    if(!this.open)
    this.timerOpen -= 1;
    else 
    this.timerClose -= 1;

    if(this.timerOpen == 0)
    {
      this.timerOpen = 500;
      this.setTexture('eyeOpen');
      this.area = new area(this.scene, this.x, this.y, this.player, this.enemies);
      this.open = true;
    }

    if(this.timerClose == 0)
    {
      this.timerClose = 500;
      this.setTexture('eyeClose');
      this.area.destroy();
      this.open = false;
    }
  }

 
}

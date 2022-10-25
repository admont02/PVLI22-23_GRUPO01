
 export default class area extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, player, enemies) {
    super(scene, x, y, 'area');
    
    this.setScale(0.6);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);

    this.scene = scene;
    this.enemies = enemies;
    this.player = player;

    this.timer = 750;
    this.timerBolean = false;

  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    if(this.timerBolean)
    this.timer -= 1;

    if(this.scene.physics.overlap(this.player, this))
    {
      this.timerBolean = true;
      for(let i = 0; i < this.enemies.getLength(); i++)
      {
        this.enemies.getChildren()[i].duplicateStats();
      }
    }

    if(this.timer == 0)
    {
      this.timer = 750;
      this.timerBolean = true;
    }

  }




}

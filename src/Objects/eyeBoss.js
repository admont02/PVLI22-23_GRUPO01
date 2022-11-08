
 export default class eyeBoss extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, player, enemies) {
    super(scene, x, y, 'eyeOpen');


    this.life = 4;

    this.setScale(0.15);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);

    this.scene.physics.add.collider(this, player);

    this.player = player;
   

  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
  }

  takeDamage()
  {
    this.life--;

    if(this.life == 0)
    this.die();
  }

  die()
  {

    this.scene.QuitarEnemyVivo();
    this.destroy();
  }

 
}

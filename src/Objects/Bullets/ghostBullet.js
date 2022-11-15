import Bullet from "./bullet.js";

 export default class ghostBullet extends Bullet{

    constructor(scene, x, y, player) {
      super(scene, x, y, 'bossBullet');
  
      this.play('bulletBoss', true);
      this.speed = 250;
   
      this.followPlayer = true;
      this.setScale(1.5);
      this.player = player;

      this.timer = this.scene.time.addEvent({
        delay: 4000,              
        callback: () =>
        {
          this.die();
        }
    });

    
    this.timer = this.scene.time.addEvent({
      delay: 3000,              
      callback: () =>
      {
        this.followPlayer = false;
      }
  });

    }

    preUpdate(t, dt) {
      super.preUpdate(t, dt);


      if(this.followPlayer)
      this.scene.physics.moveTo(this, this.player.x , this.player.y, this.speed);

      //if(this.body.velocity.x < 0) this.setFlipX(-1);
      //else  this.setFlipX(-1);


      if(this.scene.physics.overlap(this.player, this))
      {
        this.player.modifyValue(-40);
        this.player.updateLivesText(); 
          this.die();
      }
    }

    die()
    {
      this.destroy();
    }
}
  
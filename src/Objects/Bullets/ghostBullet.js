import Bullet from "./bullet.js";

//Bala del jefe
 export default class ghostBullet extends Bullet{

    constructor(scene, x, y, player) {
      super(scene, x, y, 'bossBullet');
  
      this.play('bulletBoss', true);
      this.speed = 100;
   
      this.followPlayer = true;
      this.setScale(0.5);
      this.player = player;

      //Tiempo de vida
      this.timer = this.scene.time.addEvent({
        delay: 4000,              
        callback: () =>
        {
          this.destroy();
        }
    });

    //Tipo que sigue la posicion del jugador
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
      if(this.scene.physics.overlap(this.player, this))
      {
        this.player.modifyValue(-40);
      
          this.destroy();
      }
    }

}
  
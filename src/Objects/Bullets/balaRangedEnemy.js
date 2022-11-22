import Bullet from "./bullet.js";

/**
 * El enemigo disparará balas hacia la dirección a la que esté mirando en ese 
 * momento, infligiendo daño a el player que encuentre por el camino.
 */

 export default class balaRangedEnemy extends Bullet{

    constructor(scene, x, y, dirX, dirY,player) {
      //le pasas la escena , la x , la y y el sprite balaE
      super(scene, x, y, 'balaRanged');
  
      this.speed = 1;
      this.dirX = dirX;
      this.dirY = dirY;
      this.player = player;
      this.setScale(0.07);
      
      //creas timer que llame en 2 segundos a un metodo que destruya la bala
      this.timer = this.scene.time.addEvent(
      {
        delay: 1000,              
        callback: () =>
        {
          this.destroyBala();
        }
        
      });
    }

    preUpdate(t, dt){
      super.preUpdate(t, dt);
      //asi pones la direccion que es tu destino
      this.body.setVelocityX(this.speed * (this.dirX));
      this.body.setVelocityY(this.speed * (this.dirY));  
      //si coincide pos de bala y player se quita vida al player y se destruye bala
      if(this.scene.physics.overlap(this.player, this))
      {
        this.destroyBala();
       // this.player.loseLive(1);
       this.player.modifyValue(-10);
        //se actualiza texto de vida
        this.player.updateLivesText(); 
      }
    }

    destroyBala()
    {
      this.destroy();
    }
}
  
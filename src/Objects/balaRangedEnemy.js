/**
 * El enemigo disparará biberones hacia la dirección a la que esté mirando en ese 
 * momento, infligiendo daño a el player que encuentre por el camino.
 */

//hemos podido acceder a el poniendolo en la carpeta de enemies
 export default class balaRangedEnemy extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, dirX, dirY) {
      //le pasas la escena , la x , la y y el sprite balaE
      super(scene, x, y, 'balaRanged');
  
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.body.setCollideWorldBounds();
      this.speed = 1;
      this.dirX = dirX;
      this.dirY = dirY;
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
    }

    destroyBala()
    {
      this.destroy();
    }
}
  
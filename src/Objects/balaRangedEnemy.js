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
      this.speed = 100;
      this.dirX = dirX;
      this.dirY = dirY;
      this.setScale(.1);
    }

    preUpdate(t, dt){
      super.preUpdate(t, dt);
      console.log(this.dirX, this.dirY)
      this.body.setVelocityX(this.speed * this.dirX);
      this.body.setVelocityY(this.speed * this.dirY);  
    }
}
  
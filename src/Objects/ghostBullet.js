/**
 * El jugador disparará biberones hacia la dirección a la que esté mirando en ese 
 * momento, infligiendo daño a los enemigos que encuentre por el camino.
 */
 export default class ghostBullet extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, player) {
      //en el super pasas el nombre del sprite bottle
      super(scene, x, y, 'bottle');
  
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.speed = 500;
   
      this.setScale(.05);


    }

    preUpdate(t, dt) {
      super.preUpdate(t, dt);

    
    }
}
  
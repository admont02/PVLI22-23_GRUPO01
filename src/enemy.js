//crear clase padre enemy de donde heredan todos
export default class Enemy extends Phaser.GameObjects.Sprite {
    /**
     * Constructor de Enemy
     * @param {Scene} scene Escena en la que aparece la estrella
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     */
      constructor(scene, x, y, speed, sprite) {
          super(scene, x, y, sprite);
          //ponemos que esta escena es la existente y es la que se va a renderizar
          this.scene.add.existing(this);
          //ponemos origen en 0,0
          this.setOrigin(0,0);
          //decimos que escena tiene fisicas
          this.scene.physics.add.existing(this);
          //permite que en el ejeX  y ejeY se pueda hacer flip en su rotacion 
          this.setFlip(true, true)
          
          // Queremos que el jugador no se salga de los límites del mundo o canvas
          this.body.setCollideWorldBounds();
          //ya definido en el propio phaser , permite tener velocidad en ejeX y ejeY
          this.body.setVelocity(speed, speed);
         
          
    }
      
}
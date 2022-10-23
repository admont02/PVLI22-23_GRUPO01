//crear clase padre enemy de donde heredan todos
export default class Enemy extends Phaser.GameObjects.Sprite 
{
    /**
     * Constructor de Enemy
     * @param {Scene} scene Escena en la que aparece la estrella, el elevel
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     */
     constructor(scene, x, y, speed, sprite, player,newPosX,newPosY){  {
          super(scene, x, y, sprite);
          this.newPosX= 200;
          this.newPosY = 200;
          //ponemos que esta escena es la existente y es la que se va a renderizar
          this.scene.add.existing(this);
          //ponemos origen en 0,0
          this.setOrigin(0,0);
          //decimos que escena tiene fisicas
          this.scene.physics.add.existing(this);
          //permite que en el ejeX  y ejeY se pueda hacer flip en su rotacion 
          this.setFlip(true, true)
          this.player =player;
          // Queremos que el jugador no se salga de los límites del mundo o canvas
          this.body.setCollideWorldBounds();
          //ya definido en el propio phaser , permite tener velocidad en ejeX y ejeY
          //this.body.setVelocity(speed, speed);
        }
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
        
        //movemos enemy a esa posicion con velocidad 100
        this.scene.physics.moveTo(this,this.newPosX,this.newPosY,100);
        //console.log(this.x);
        //console.log(this.newPosX);
        var distance = (this.x - this.newPosX) +(this.y - this.newPosY) ;
        //overlap es para dos objetos con fisica
        if(distance<1)
        {
            //llamamos a la funcion para cambiar valores
             //le asociamos x e y aleatorias
             this.newPosX =  Phaser.Math.Between(0, this.scene.scale.width);
             this.newPosY =  Phaser.Math.Between(0, this.scene.scale.height);
        }
        
        //permite que todos los hijos enemy puedan acceder al if este ya que es parte del update del enemy

        //permite que todos lo hijos enemy puedan acceder al if este ya que es parte del update del enemy
        if(this.scene.physics.overlap(this.player, this))
        {
            this.destroy();
        }
    }

    
      
}

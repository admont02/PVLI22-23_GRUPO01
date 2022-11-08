
export default class Boss extends Phaser.GameObjects.Sprite 
{
    /**
     * Constructor de Enemy
     * @param {Scene} scene Escena en la que aparece la estrella, el elevel
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     */
     constructor(scene, x, y, player){  {
          super(scene, x, y, 'boss');


          this.doAction = false;
          this.setScale(0.2);
         
          this.speed = 100;

          this.scene.add.existing(this)
          //ponemos origen en 0,0
          this.setOrigin(0,0);
          //decimos que escena tiene fisicas
          this.scene.physics.add.existing(this);
          //permite que en el ejeX  y ejeY se pueda hacer flip en su rotacion 
          this.player =player;
          // Queremos que el jugador no se salga de los límites del mundo o canvas
          this.body.setCollideWorldBounds();
      

        }
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
        
        //movemos enemy a la posicion del jugador con velocidad 100
        this.scene.physics.moveTo(this, this.player.x , this.player.y, this.speed);
               
        this.value = Phaser.Math.Between(0, 3000);

        if(this.value == 0)
        {
            this.makeAc();
          
        }

    }
    
    makeAc()
    {
        this.stop();
        this.timer = this.scene.time.addEvent({
            delay: 6000,              
            callback: () =>
            {
              this.random = Phaser.Math.Between(0, 3);

                if(this.random == 0)
                {

                }else if(this.random == 1)
                {

                }else{

                }


              this.startMoving();
            }
        });
       
    }

    stop()
    {
        this.speed = 0;
    }

    startMoving()
    {
        this.speed = 100;
    }


    shoot()
    {
         
    }
    


}

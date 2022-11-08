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

          //Velocidad
          this.speed = speed;
          this.speedBolean = false;
          //con this.scene conectas con todos los metodos
          this.scene.AumentarEnemyVivo();

          //ponemos que esta escena es la existente y es la que se va a renderizar
          this.scene.add.existing(this)
          //ponemos origen en 0,0
          this.setOrigin(0,0);
          //decimos que escena tiene fisicas
          this.scene.physics.add.existing(this);
          //permite que en el ejeX  y ejeY se pueda hacer flip en su rotacion 
          this.player =player;
          // Queremos que el jugador no se salga de los límites del mundo o canvas
          this.body.setCollideWorldBounds();
          //ya definido en el propio phaser , permite tener velocidad en ejeX y ejeY
          //this.body.setVelocity(speed, speed);

          this.lives = 3;
        }
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
        
        //movemos enemy a esa posicion con velocidad 100
        this.scene.physics.moveTo(this,this.newPosX,this.newPosY, this.speed);
        //console.log(this.x);
        //console.log(this.newPosX);

        //distcnai entre antigua posicion y nueva posicion
        var distance = (this.x - this.newPosX) +(this.y - this.newPosY) ;

        // console.log(distance);
        //overlap es para dos objetos con fisica , mietras que la distancia sea entre -30 y 30, hacemos un gran radio de accion , 
        //tambien ponemos limites en x e y, cuidado estamos pidiendo info de la escena antes de hacerse , asi ponemos sus valores en vez de scene.width y height
        if( distance <30 && distance>-30)
        {
            // console.log(this.newPosX, this.newPosY);
            //llamamos a la funcion para cambiar valores
             //le asociamos x e y aleatorias
            
             this.newPosX =  Phaser.Math.Between(0, this.scene.scale.width);
             this.newPosY =  Phaser.Math.Between(0, this.scene.scale.height);

             //si hay un valor fuera de el tamaño del canvas o un poco menos ponemos otro a proposito para que no llegue al exterior
             if(this.newPosX>900 || this.newPosY>400)
             {
                this.newPosX = 200
                this.newPosY =  200
             }
        }
        
        //permite que todos los hijos enemy puedan acceder al if este ya que es parte del update del enemy

        //permite que todos lo hijos enemy puedan acceder al if este ya que es parte del update del enemy
        if(this.scene.physics.overlap(this.player, this))
        {
            //si coincide pos de enemy y jugador pierde vida y lo actualiza por pantalla
            this.player.loseLive(1);
            this.player.updateLivesText();
            console.log(this.player.lives);
            this.scene.QuitarEnemyVivo();
            this.scene.updateLivesEnemy();
            this.destroy();
            
        }

        // if(this.lives <= 0)
        // {
        //     this.destroy();
        // }
    }


    duplicateStats()
    {
        if(!this.speedBolean)
        {
            this.speed *= 2;
            this.speedBolean = true;
        
            this.timer = this.scene.time.addEvent({
                delay: 750,              
                callback: () =>
                {
                this.divideStats();
                }
            });
        }
     
    }

    divideStats()
    {
        this.speed = this.speed / 2;
        this.speedBolean = false;
    }  
    
    takeDamage(damage)
    {
        this.lives -= damage;
    }
}

import GhostBullet from '../Objects/ghostBullet.js';

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

          this.isDash = false;
          this.doAction = false;
          this.setScale(0.2);
         
          this.speed = 100;

          this.scene.add.existing(this)
          this.setOrigin(0,0);
          this.scene.physics.add.existing(this);
          this.player =player;
          this.body.setCollideWorldBounds();
      

        }
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);

        //movemos enemy a la posicion del jugador con velocidad 100
        if(!this.isDash)
        {
            this.scene.physics.moveTo(this, this.player.x , this.player.y, this.speed);
            console.log("ando");

        }
               
        this.value = Phaser.Math.Between(0, 1500);

        if(this.value == 0)
        {
            this.makeAc();
          
        }

        if(this.scene.NumEnemigos() == 0) 
        this.destroy();


    }
    
    makeAc()
    {
        this.stop();
        this.timer = this.scene.time.addEvent({
            delay: 4000,              
            callback: () =>
            {
              this.random = Phaser.Math.Between(0, 3);

              if(this.random == 0)
              this.bossInvisible();
              else if(this.random == 1)
              this.shoot();
              else if(this.random == 2)
              {
                this.dash();
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
        new GhostBullet(this.scene, this.x, this.y, this.player);
    }
    

    dash()
    {
        this.isDash = true;

        this.dx =  this.player.x;
        this.dy =  this.player.y;

        this.scene.physics.moveTo(this, this.dx, this.dy, 500);

        this.timer = this.scene.time.addEvent({
            delay: 900,              
            callback: () =>
            {
                this.isDash = false;
            }
        });
    }


    bossInvisible()
    { 
        this.setVisible(false);
        this.speed = 50;
        
        this.timer = this.scene.time.addEvent({
            delay: 2000,              
            callback: () =>
            {
              this.bossVisible();
            }
        });

    }

    bossVisible()
    {
        this.setVisible(true);
        this.speed = 100;
    }


}

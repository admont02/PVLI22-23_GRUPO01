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
        }
               
        //Los ataques se realizaran de manera aleatoria en un tiempo aleatorio
        this.value = Phaser.Math.Between(0, 1000);

        //Hacer accion
        if(this.value == 0) this.makeAc();

        //Colision con el jugador
        if(this.scene.physics.overlap(this.player, this))
        {
            this.player.loseLive(1);
            this.player.updateLivesText();
            this.changePos();
        }


        //Muerte del jefe
        if(this.scene.NumEnemigos() == 0) 
        this.destroy();


    }
    

    //Se elige la siguiente accion
    makeAc()
    {
        this.stop();
        this.timer = this.scene.time.addEvent({
            delay: 1000,              
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

    //Parar
    stop()
    {
        this.speed = 0;
    }

    //Reestablecer velocidad
    startMoving()
    {
        this.speed = 100;
    }

    //Disparar fantasma
    shoot()
    {
        new GhostBullet(this.scene, this.x, this.y, this.player);
    }
    
    //Dash hacia la posicion de ese momento del jugador
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

    //Convertir al jefe en invisible
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

    //Hacet al jefe visible
    bossVisible()
    {
        this.setVisible(true);
        this.startMoving();
    }

    //Cuando el jugador toca al jefe
    changePos()
    {
        this.rx = Phaser.Math.Between(200, 300);
        this.ry = Phaser.Math.Between(200, 300);

        this.x = this.player.x + this.rx;
        this.y = this.player.y + this.ry;

        this.bossInvisible();
    }


}
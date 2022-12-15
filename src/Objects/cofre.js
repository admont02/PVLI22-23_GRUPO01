//PowerUps
import LifePowerUp from '../PowerUps/lifePowerUp.js';
import damagePowerUp from '../PowerUps/damagePowerUp.js';
import speedPowerUp from '../PowerUps/speedPowerUp.js';
/**
* Clase que representa al cofre, que nos dropeara uno de los 3 power ups del juego (random)
*/
export default class Cofre extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, player) {
    super(scene, x, y, 'cofreCerrado');

    //this.setScale(0.22);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);

    this.player = player;
    this.scene.physics.add.collider(this, this.player);

    //lo hacemos interactivo para poder hacer click
    this.setInteractive();
    //pointerdown ya definido
    this.open = false;
    this.radioAccion = false;
    this.scene = scene;

    this.distanceCofrePlayer;
    //creas una vez el evento , cada vez que pulses se va a ejecutar

    this.on("pointerdown", () => {
      if(this.open) return;
      console.log(this.distanceCofrePlayer);
      if (this.distanceCofrePlayer < 100 && this.distanceCofrePlayer > -100) {
        console.log("Han entrado en radio de accion del cofre")
        //como repeat es 0 se ejecutará 1 vez 
        // this.play("animacionCofre",true);
        //después dejamos el cofre abierto
         this.setTexture('cofreAbierto');
        //ahora hacemos un random que elija entre un powerUp
        var value = Phaser.Math.Between(0, 2);
        console.log(value);
        //hacemos switch
        switch (value) {
          //se crea powerUp de fuerza enfrente de cofre
          case 0:
            new damagePowerUp(this.scene, this.x, this.y + 75, this.player);
            break;

          //case 1 se crea powerUp de velocidad enfrente de cofre
          case 1:
            new speedPowerUp(this.scene, this.x, this.y + 75, this.player);
            break;

          //case 2 se crea powerUp de vida  enfrente de cofre
          case 2:
            new LifePowerUp(this.scene, this.x, this.y + 75, this.player);
            break;
        }
       // this.setActive(false);
       this.open=true;
      }


    });



  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    //distancia entre posicionCofre(this.x e y) y posicionPlayer(this.player.x, this.player.y) en todo momento
    this.distanceCofrePlayer = (this.x - this.player.x) + (this.y - this.player.y);

    // if (distanceCofrePlayer < 10 && distanceCofrePlayer> -10) 
    // {
    //   //si el jugador esta en un radio corto de alcance, poner booleano a true
    //  

    // }
    //overlap es para dos objetos con fisica , mietras que la distancia sea entre -30 y 30, hacemos un gran radio de accion ,
    //tambien ponemos limites en x e y, cuidado estamos pidiendo info de la escena antes de hacerse , asi ponemos sus valores en vez de scene.width y height

    //sino esta en distancia, si entra al radio de acion y luego se aleja
    // else
    // {
    //   this.radioAccion= false;
    // }


  }
}

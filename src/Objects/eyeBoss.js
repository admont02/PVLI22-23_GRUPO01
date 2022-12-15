/**
* Clase encargada de la vida de los ojos del nivel del boss
*/
// 
 export default class eyeBoss extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, player) {
    super(scene, x, y, 'eyeOpen');

    this.life = 50;

    this.setScale(0.25);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);

    this.scene.physics.add.collider(this, player);

    this.setInteractive();
    this.on("pointerup", () => {
      this.takeDamage(5);
  });

    this.player = player;
  
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
  }

  //Metodo para recibir daño del jugador
  takeDamage(damage)
  {
    this.life -= damage;
    this.inivisible();
    if(this.life < 0)
    this.die();
  }

  //Destruccion del ojo
  die()
  {
   
    this.destroy();
  }

  //Feedback para cuando inflingimos daño al enemigo
  inivisible() {
    this.setVisible(false);
    this.timer = this.scene.time.addEvent({
      delay: 250,
      callback: () => 
      {
        this.setVisible(true);
      }
    });
  }

 
}

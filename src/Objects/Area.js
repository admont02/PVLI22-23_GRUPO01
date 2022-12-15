
/**
* Area que crea el ojo(aumenta la velocidad de los enemigos si estos lo tocan)
*/
 export default class Area extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, player, enemies) {
    super(scene, x, y, 'area');
    
    this.setScale(0.3);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);

    this.scene = scene;
    this.enemies = enemies;
    this.player = player;
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    //Colision con el jugador
    if(this.scene.physics.overlap(this.player, this) && !this.timerBolean)
    {
      this.timerBolean = true;

      //Los activamos para todos los enemigos que haya en ese momento
      for(let i = 0; i < this.enemies.getLength(); i++)
      {
        this.enemies.getChildren()[i].duplicateStats();
      }

      //Solo se activa la duplicacion de los stats una vez cada 3 segundos si el jugador esta dentro de este area
      this.scene.time.addEvent({
        delay: 3000,
        callback: this.changeTimer,
      });
    }
  }
  
  changeTimer()
  {
    this.timerBolean = false;
  }



}

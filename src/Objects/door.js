
//Area que crea el ojo(aumenta la velocidad de los enemigos si estos lo tocan)
 export default class door extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, player, level) {
    super(scene, x, y, 'eyeClose');
    
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);

    this.scene = scene;
    this.player = player;
    this.level = level;

  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    if(this.scene.NumEnemigos() == 0)
    {
      this.setTexture('eyeOpen');

      if(this.scene.physics.overlap(this.player, this))
      {
        this.scene.changeLevel(this.level);
      }
    }
    
  }
}

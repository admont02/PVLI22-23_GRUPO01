
/**
 * Clase que representa el jugador del juego.
 */
export default class Player extends Phaser.GameObjects.Sprite {

  /**
   * Constructor del jugador
   */
  constructor(scene, x, y) {
    super(scene, x, y, 'player');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    // Queremos que el jugador no se salga de los límites del mundo
    this.body.setCollideWorldBounds();
    this.speed = 300;

    this.createInput();
  }
  /**
 * Método para crear los controles del player.
 */
  createInput() {
    //W,A,S,D
    this.a = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.w = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.s = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.d = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    //cursores
    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }
  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    //eje Y
    if (this.cursors.down.isDown || this.s.isDown)
      this.body.setVelocityY(this.speed);

    else if (this.cursors.up.isDown || this.w.isDown)
      this.body.setVelocityY(-this.speed);
    else
      this.body.setVelocityY(0);
    //eje X
    if (this.cursors.right.isDown || this.d.isDown)
      this.body.setVelocityX(this.speed);

    else if (this.cursors.left.isDown || this.a.isDown)
      this.body.setVelocityX(-this.speed);
    else
      this.body.setVelocityX(0);

    this.body.velocity.normalize().scale(this.speed);
  }

}

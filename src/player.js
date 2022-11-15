import Cry from './Objects/Bullets/cry.js';
import Bottle from './Objects/Bullets/bottle.js';
import HealthBar from './healthbar.js'
/**
 * Clase que representa el jugador del juego.
 */
export default class Player extends Phaser.GameObjects.Sprite {

  /**
   * Constructor del jugador
   */
  constructor(scene, x, y) {
    super(scene, x, y, 'topA');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    // Queremos que el jugador no se salga de los límites del mundo
    this.body.setCollideWorldBounds();
    this.speed = 300;
    this.lives = 3;
    this.maxLives = 5;
    this.dirX = 0;
    this.dirY = 0;
    this.createInput();
    this.label = this.scene.add.text(10, 10, "").setScrollFactor(0);//factor de desplazamiento del gameObject
    this.updateLivesText();

    this.canShoot = true;
    this.hp = new HealthBar(scene, 10, 10,150);

    // this.hp.setScrollFactor(0);
    //this.addChild(this.hp)

    this.timerDash = 0;
    this.timerMaxDash = 1000;
    this.enableDashTimer = true;
    this.isDash = false;
    this.canDash = true;
    this.speedDash = 2000;
    this.aDown = this.sDown = this.wDown = this.dDown = false;

    this.bottleTime = 0;
    this.launched = false;
    this.cryLaunched = false;
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

    this.e = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.f = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    this.p = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);


    //cursores
    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }
  dashTimer() {
    this.enableDashTimer = false;
    this.scene.time.addEvent({
      delay: 8000,
      callback: this.changeDashTimer,
      callbackScope: this
    });
  }
  bottleTimer() {
    this.launched = true;
    this.scene.time.addEvent({
      delay: 1000,
      callback: this.changeBottleTimer,
      callbackScope: this
    });
  }
  cryTimer() {
    this.cryLaunched = true;
    this.scene.time.addEvent({
      delay: 1000,
      callback: this.changeCryTimer,
      callbackScope: this
    });
  }
  changeBottleTimer() {
    this.launched = false;
  }
  changeCryTimer() {
    this.cryLaunched = false;
  }
  changeDashTimer() {
    this.canDash = true;
  }
  updateLivesText() {
    this.label.text = 'Lives ' + this.lives;
  }

  loseLive(n) {
    if (this.lives > 0)
      this.lives -= n;
  }

  earnLive(n) {
    if (this.lives < this.maxLives)
      this.lives += n;
    this.updateLivesText();
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    this.die();
    this.pruebaRestarBarra();
    // console.log(this.hp.x);
    // this.hp.bar.setX(this.x-this.scene.cameras.main._scrollX)
    // this.hp.bar.setY(this.y)


    if (!this.isDash) {
      this.animsPlayer();
      this.movePlayer();
      //normalizar vel
      // this.body.velocity.normalize().scale(this.speed);

      this.createCry();
    }

    // Crea un nuevo bottle cuando se pulsa la tecla espacio

    this.shootBottle();




    this.body.velocity.normalize().scale(this.speed);

    if (this.enableDashTimer) this.dashTimer();
    if (this.f.isDown && this.canDash) {
      this.startDash();
    }
  }


  createCry() {
    if (this.e.isDown && !this.cryLaunched) {
      new Cry(this.scene, this.x, this.y);
      this.cryTimer();
    }
  }


  startDash() {
    this.isDash = true;
    this.canDash = false;

    if (this.aDown) this.body.setVelocityX(-this.speedDash);
    else if (this.wDown) this.body.setVelocityY(-this.speedDash);
    else if (this.sDown) this.body.setVelocityY(this.speedDash);
    else if (this.dDown) this.body.setVelocityX(this.speedDash);
    else this.body.setVelocityX(this.speedDash);

    this.timer = this.scene.time.addEvent({
      delay: 1000,
      callback: () => {
        this.stopDash();
      }
    });
  }

  stopDash() {
    this.isDash = false;
    this.body.setVelocityX(0);
    this.enableDashTimer = true;
  }
  shootBottle() {
    if (!this.launched && this.cursors.space.isDown && (this.dirX != 0 || this.dirY != 0)) {
      this.bottle = new Bottle(this.scene, this.x + (this.body.width * this.dirX), this.y + (this.body.height * this.dirY), this.dirX, this.dirY);
      this.bottleTimer();
    }
  }
  /**
 * Método en el que se realizan las animaciones del jugador
 * ,en función de donde se está moviendo.
 */
  animsPlayer() {
    if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
      if (this.dirY === -1) this.play('lastTop', true);
      else if (this.dirY === 1) this.play('lastBottom', true);
      else this.play('lastAxis', true);
    }
    else {
      if (this.cursors.down.isDown || this.s.isDown)
        this.play('bottom', true);
      else if (this.cursors.up.isDown || this.w.isDown)
        this.play('top', true);
      else if (this.cursors.left.isDown || this.a.isDown) {
        this.setFlip(true, false);
        this.play('xAxis', true);
      }
      else if (this.cursors.right.isDown || this.d.isDown) {
        this.setFlip(false, false);
        this.play('xAxis', true);
      }
    }

  }
  /**
* Método en el que se realiza el movimiento del jugador (8 dir)
*/
  movePlayer() {
    //eje Y
    if(!this.isDash)
    {
      if (this.cursors.down.isDown || this.s.isDown) {
        if (this.cursors.left.isUp && this.cursors.right.isUp) this.dirX = 0;
        this.body.setVelocityY(this.speed);
        this.sDown = true;
        this.dirY = 1;
      }
      else if (this.cursors.up.isDown || this.w.isDown) {
        if (this.cursors.left.isUp && this.cursors.right.isUp) this.dirX = 0;
        this.body.setVelocityY(-this.speed);
        this.wDown = true;
        this.dirY = -1;
  
      }
      else {
        this.body.setVelocityY(0);
        this.wDown = false;
        this.sDown = false;
      }
      //eje X
      if (this.cursors.right.isDown || this.d.isDown) {
        if (this.cursors.down.isUp && this.cursors.up.isUp) this.dirY = 0;
        this.body.setVelocityX(this.speed);
        this.dDown = true;
        this.dirX = 1;
      }
      else if (this.cursors.left.isDown || this.a.isDown) {
        if (this.cursors.down.isUp && this.cursors.up.isUp) this.dirY = 0;
        this.body.setVelocityX(-this.speed);
        this.aDown = true;
        this.dirX = -1;
  
      }
      else {
        this.body.setVelocityX(0);
        this.aDown = false;
        this.dDown = false;
      }
    }
   
  }
  pruebaRestarBarra() {
    if (this.p.isDown)
      this.hp.modify(-10);
  }
  
  modifyValue(v) {
    this.hp.modify(v);
  }

  //hace que durante 1 segundo rebote en diagonal
  choque() {
    this.body.setVelocityX(-this.body.velocity.x * 2);
    this.body.setVelocityY(-this.body.velocity.y * 2);
    this.timer = this.scene.time.addEvent({
      delay: 500,
      callback: () => {
        this.sinchoque();
      }
    });
  }


  sinchoque() {
    this.body.setVelocityX(this.body.velocity.x);
    this.body.setVelocityY(this.body.velocity.y);
  }

  die() {
    if (this.hp.getValue() === 0) this.scene.scene.start('menu')
  }
}

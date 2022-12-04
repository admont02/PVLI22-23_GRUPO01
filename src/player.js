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
  constructor(scene, x, y,available) {
    super(scene, x, y, 'topA');

    this.scene = scene;
    this.dashAvailable=available;

    //daño de el biberon
    this.damageBottle = 10;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.initialSpeed = 300;
    this.speed = 300;

    this.dirX = 0;
    this.dirY = 0;
    this.createInput();


    this.canShoot = true;
    this.hp = new HealthBar(scene, 56, 20, 150);
    this.hp.bar.setScrollFactor(0)
    this.scene.add.image(30, 30, 'cara').setScrollFactor(0).setScale(2);
    this.lento = this.scene.add.image(this.x, this.y, 'lento').setScale(2).setVisible(false);

    this.isSlow = false;
    this.enableDashTimer = true;
    this.isDash = false;
    this.canDash = true;
    this.speedDash = 600;
    this.aDown = this.sDown = this.wDown = this.dDown = false;


    this.launched = false;
    this.cryLaunched = false;

    this.dieSound = this.scene.sound.add('death');
    this.dashSound = this.scene.sound.add('dash');
    this.loseLiveSound = this.scene.sound.add('loseLive');
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
  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    if (!this.scene.isScenePlaying()) return;
    this.die();
    if (this.isSlow)
      this.lento.setPosition(this.x, this.y - this.height);
    if (!this.isDash) {
      this.animsPlayer();
      this.movePlayer();
      this.createCry();
    }

    this.shootBottle();

    if (this.enableDashTimer) this.dashTimer();
    if (this.f.isDown && this.canDash && this.dashAvailable) {
      this.startDash();
    }
  }


  createCry() {
    if (this.e.isDown && !this.cryLaunched) {
      new Cry(this.scene, this.x, this.y);

      this.crySound = this.scene.sound.add('cry');
      this.crySound.play();

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

    this.dashSound.play();

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
  /**
* Método en el que se realiza el disparo de los biberones
*/
  shootBottle() {
    if (!this.launched && this.cursors.space.isDown && (this.dirX != 0 || this.dirY != 0)) {
      this.bottle = new Bottle(this.scene, this.x + (this.body.width * this.dirX), this.y + (this.body.height * this.dirY), this.dirX, this.dirY,this.damageBottle);
      console.log(this.damageBottle);
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
    if (!this.isDash) {
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
  /**
* Método en el que el jugador pierde/gana vida
*/
  modifyValue(v) { // si pierde vida
    if (v < 0) {
      this.loseLiveSound.play();
      this.setTint(0xff0000); //feedback rojo
    }
    else this.setTint(0x00ff00); //si gana vida, feedback verde
    this.scene.time.addEvent({
      delay: 250,
      callback: () => {
        this.clearTint(); //quitar color
      }
    });
    this.hp.modify(v); //disminuir barra
  }

  //hace que durante 1 segundo rebote en diagonal
  choque() {

    if (!this.isDash) {
      this.body.setVelocityX(-this.body.velocity.x * 2);
      this.body.setVelocityY(-this.body.velocity.y * 2);
      this.timer = this.scene.time.addEvent({
        delay: 500,
        callback: () => {
          this.sinchoque();
        }
      });
    }

  }


  sinchoque() {
    this.body.setVelocityX(this.body.velocity.x);
    this.body.setVelocityY(this.body.velocity.y);
  }
  /**
 * Método en el que el jugador muere
 */
  die() {
    if (this.hp.getValue() === 0) {

      this.dieSound.play();
      this.scene.quitarSonido();
      //this.scene.scene.start('final', 'Has perdido');

      this.scene.scene.start('final', { text: 'Has perdido' });
    }
  }
  /**
* Método que se llama al chocar con StrongEnemy, nos ralentiza durante 5 segundos y aparece un icono
*/
  slowDown() {
    if (!this.isSlow) {
      this.speed = this.speed / 2;
      this.isSlow = true;
      this.lento.setVisible(true);
      this.scene.time.addEvent({
        delay: 4000,
        callback: this.resetDefaultSpeed,
        callbackScope: this
      });
    }

  }
  /**
* Método en el que se resetea la velocidad una vez acabado el ralentizamiento del método slowDown
*/
  resetDefaultSpeed() {
    this.speed = this.initialSpeed;
    this.isSlow = false;
    this.lento.setVisible(false);
  }

  //cambia el daño que hace el bottle
  DamageChange( damages)
  {
    this.damageBottle = damages;
  }
}

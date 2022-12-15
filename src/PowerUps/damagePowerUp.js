import PowerUp from "./powerUp.js";

/**
 * El jugador recuperará una vida al coger este objeto
 * (si no supera las vidas máximas)
 */
export default class damagePowerUp extends PowerUp {

    constructor(scene, x, y, player) {
        super(scene, x, y, 'candy', player);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }
    effectToPlayer() {
        this.player.DamageChange(20);
        //aumentamos daño que hace el jugador en clase bottle durante 10 segundos
        this.timer = this.scene.time.addEvent({
            delay: 10000,
            //ponemos otra vez daño normal en clase bottle
            callback: () => {
                this.player.DamageChange(10);
            }
        });
    }
}

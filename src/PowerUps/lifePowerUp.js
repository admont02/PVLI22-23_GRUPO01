import PowerUp from "./powerUp.js";

/**
 * El jugador recuperará vida al coger este objeto
 * (si no supera la vida máxima)
 */
export default class LifePowerUp extends PowerUp {

    constructor(scene, x, y, player) {
        super(scene, x, y, 'heart', player);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }
    effectToPlayer() {
        this.player.modifyValue(25);

    }
}

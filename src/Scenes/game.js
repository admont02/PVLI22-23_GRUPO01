import Boot from './boot.js';
import Level1 from './level1.js';
import Menu from './menu.js';
import Configuracion from './Configuracion.js'
import Creditos from './creditos.js'
import Final from './final.js';
import MiddleScene from './middleScene.js';

/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */
let config = {
    type: Phaser.AUTO,
    width:  1000,
    height: 500,
    scale: {
        // mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    pixelArt: true,
    scene: [Boot, Menu, Level1, MiddleScene, Configuracion,Creditos, Final],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
};

new Phaser.Game(config);
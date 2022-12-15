import Boot from './boot.js';
import Level from './level1.js';
import Menu from './menu.js';
import Configuracion from './Configuracion.js'
import Creditos from './creditos.js'
import Final from './final.js';
import MiddleScene from './middleScene.js';
// import IntroDialogo from '../Dialogos/IntroDialogo.js';

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
    scene: [Boot, Menu, Level, MiddleScene, Configuracion,Creditos, Final],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};

new Phaser.Game(config);
# GOOD NIGHTMARE SWEETIE-Mosca Du Fruta Studios
Este proyecto es un trabajo universitario para la asignatura PVLI (Programación de Videojuegos en Lenguajes Interpretados) del Grado en Desarrollo de Videojuegos
de la Universidad Complutense de Madrid.

![image](https://user-images.githubusercontent.com/82326212/198403784-8eaeeefb-abdd-489d-9ffe-8a5409bc4231.png)


Nuestro proyecto “Good Nightmare Sweetie”, es un videojuego web hecho con Phaser3 y JavaScript en el cuál, tomarás el papel de Otis, un bebé capaz de entrar en el mundo de los sueños,que se encontraba en calma hasta que las pesadillas se hicieron con el control, impidiendo a la gente conciliar el sueño. Otis, con los poderes que adquiere en este mundo, deberá plantar cara a todas las calamidades con las que se cruce a su paso para conseguir despertar y salvarse.

Twitter de nuestro estudio: https://twitter.com/dufruta?s=11&t=cYMcq%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%201XIetq8mHsaq4aE3Q

Página web del proyecto: https://admont02.github.io/PVLI22-23_GRUPO01/

## Architecture
Actualmente, nuestro proyecto cuenta con este diagrama UML (Unified Modeling Languages) basado especialmente en la relación de herencia.
![image](https://user-images.githubusercontent.com/82326212/198404418-682fdf8f-75a2-4927-8208-96d3f8a19405.png)

## Assets
Actualmente disponemos de assets temporales sacados de https://www.spriters-resource.com y nuestros enemigos son sacados de los videojuegos de Kirby

#GDD
***GRUPO 1***

***Good Nightmare sweetie***

Documento de diseño de videojuego



|Géneros: Aventura y Exploración|Modos: Oleadas de enemigos|
| - | - |
|<p>**Público objetivo:**</p><p>*Edad, sexo, región e idioma* -Edad: +10 años</p><p>-Sexo: Hombre/Mujer -Idioma: Español</p>|Plataformas: PC|
**Descripción**

En “Good Nightmare Sweetie” tomarás el papel de Otis, un bebé capaz de entrar en el mundo de los sueños,que se encontraba en calma hasta que las pesadillas se hicieron con el control, impidiendo a la gente conciliar el sueño. Otis, con los poderes que adquiere en este mundo, deberá plantar cara a todas las calamidades con las que se cruce a su paso para conseguir despertar y salvarse.



|Logotipo y portada del juego|
| - |
||
1. **Aspectos generales**

El juego se dispondrá de manera top-down. El personaje principal se podrá mover en las 8 direcciones pudiendo a su vez realizar diferentes ataques (melee y rango). Este será un juego dinámico en que el principal objetivo del jugador será ir acabando con los diferentes enemigos. Además el jugador dispondrá de la ayuda del ratón con la que podrá ir parando a los enemigos y quitando obstáculos. En cuanto a la disposición del mundo que nos encontraremos será un nivel con estética de fantasía (colores pastel).

**1.1. Relato breve y parcial de una partida típica**

El jugador se encontrará un nivel con un número de enemigos a derrotar (a través de sus ataques). Además en el mapa habrá obstáculos que el jugador deberá ir moviendo para poder atacar a enemigos que no sean accesibles o para abrirse camino.

2. **Jugabilidad**

En “Good Nightmare Sweetie” te encargas de acabar con todas las pesadillas que encuentres en tu camino. Al matar en cada nivel el número requerido de enemigos el jugador podrá pasar al siguiente nivel ganando una habilidad extra en el proceso.

1. **Mecánica**
1. **Mecánicas del personaje**
- **Ataque a distancia**: el jugador disparará biberones a la dirección en la que esté mirando en ese momento, infligiendo daño a los enemigos que encuentre por el camino.
- **Llanto**: el jugador creará a sus pies un charco que inflige daño a los enemigos que lo pisen. Este ataque podrá mantenerse para hacerlo mientras el jugador se desplaza por el nivel.
- **Ratón**: el jugador podrá ayudarse del ratón para retener a los enemigos que se acerquen a él. También podrá utilizar esta habilidad para mover diferentes objetos del mapa (marcados más brillantes para que el jugador con cual interactuar). Al pasar al último nivel el ratón al clicar sobre los enemigos para infligir daño.
- **Dash**: el jugador se desplaza una pequeña distancia hacia la dirección en la que esté mirando el jugador en ese momento. Durante este tiempo el jugador se vuelve invulnerable al daño de los enemigos y hace daño a los enemigos que toque por el camino.
2. **Mecánicas de escenario**

El mapa estará creado por tiles y delimitado por almohadas y juguetes de bebé, todo con un toque tétrico. El jugador no podrá sobrepasar estos límites. A lo largo del nivel habrá escondites donde estarán algunos enemigos y objetos que bloquean el paso (almohadas, juegos de cuadrados de colores, peluches, pelotas, etc.). Además en el mapa habrá una especie de ojos que alternarán entre vigilia y sueño (el tiempo en el que alternan entre estos dos estados será contabilizado por una barra que irá el tiempo restante). Cuando los ojos estén abiertos un área del mapa quedará cubierta por la luz que emitirá este. Si el jugador se adentra en esta área los enemigos aumentarán su velocidad y el daño que infligen al jugador.

Por cada nivel que se haya superado el jugador obtendrá:

Nivel 1: el daño que infringe el jugador y la vida máxima de este aumenta. Además se desbloquea el dash.

Nivel 2: el ratón puede hacer daño a los enemigos.

3. **Mecánicas de enemigos**
- **Patrullaje**: los enemigos se moverán de manera uniforme por un área predefinida.
- **Ataque principal**: los enemigos tendrán un ataque básico que puede ser a distancia
  - a melee dependiendo del enemigo.
- **Efectos extras:** algunos de los enemigos tendrán unos efectos en el jugador al infligir daño.



|Enemigo base(!)|Enemigo tanque(2)|Enemigo veloz(3)|Enemigo mago(4)|
| - | - | - | - |
|![](Aspose.Words.e5a6dcf0-0bed-40cc-8d51-f04793ff0552.001.png)|![](Aspose.Words.e5a6dcf0-0bed-40cc-8d51-f04793ff0552.002.png)|![](Aspose.Words.e5a6dcf0-0bed-40cc-8d51-f04793ff0552.003.png)|![](Aspose.Words.e5a6dcf0-0bed-40cc-8d51-f04793ff0552.004.png)|
|Ataque: melee|Ataque: melee|Ataque: melee|Ataque: rango|
|Efectos: nulo|Efectos: nulo|Efectos: nulo|Efectos: ralentiza al jugador|
|<p>Vida: 50</p><p>Daño: medio corazón</p>|<p>Vida: 100</p><p>Daño: medio corazón</p>|<p>Vida: 30</p><p>Daño: medio corazón</p>|<p>Vida: 75</p><p>Daño: un corazón</p>|
**Jefe**:

El jefe se encontrará en el nivel tres. Este estará en una sala con un total de 8 ojos dispersos por esta. El jugador no podrá realizar daño directo al jefe sino que deberá ir destruyendo a los ojos cuando estos se encuentren en vigilia. El jefe tendrá un total de dos ataques que alternará entre:

- Giro: gira sobre sí mismo infringiendo daño hacia todas las direcciones.
- Ataque lento: hará un ataque que creará una grieta hacia la dirección en la que este mirando.

Estos ataques quitarán uno de daño al jugador, que se compensará con su poca velocidad. Tendrá una vida base de 500.

4. **Controles**

-A,W,S,D : Para moverse hacia los lados -Shift: Para correr

-E: LLorar

-F: Dash
5. **Cámara**

Good Nightmare Sweetie es un juego con vista top down, en el jugador que se controla se ve siempre en el centro de la pantalla.

Respecto a la vista que tenemos de la cámara la interfaz tendrá un aspecto en el cual aparecerán el número de vidas arriba a la izquierda , el tiempo del enemigo “Ojos” en forma de barra vertical arriba a la derecha indicará de alguna manera un timer visual para que el jugador sepa en todo momento cuánto tiempo queda para ser vigilado. Por último abajo izquierda aparecerá el nivel actual.

2. **Dinámica**

En “Good Nightmare Sweetie” tendrás que cruzar los diferentes niveles matando a todos los enemigos que se crucen en tu camino desde ataques desbloqueables como ayudarte del ratón para desplazarlos, etc. En cada nivel desbloquearás una habilidad nueva.

Con la ayuda del ratón puedes hacer mucho más que derrotar diferentes pesadillas , también puedes descubrir zonas ocultas del mapa desplazando diferentes objetos.

No te dejará salir de la sala hasta que no elimines a todos los enemigos,tendrás que tener en cuenta en cada nivel el ojo que te observa para poder ocultarse a tiempo de él , como final excepcional tendrás que derrotar al enemigo final.

3. **Estética**
1. **Gráficos**

El estilo utilizado en “Good Nightmare Sweetie” será Pixel Art. Se tratará de un entorno colorido, pero con un tono tétrico para inmiscuir al jugador.

- **Mapa:** será delimitado por almohadas, juguetes de niños pequeños, etc. Esto impedirá al jugador salir de él. El resto será un poblado en la selva.
- Los **enemigos**, **vecinos y protagonista** tendrán sprites de 100x100 pixeles (como máximo) en proporción al mapa.
2. **Música y Sonido**

   3. **Menús y modos de juego**

Menús:

- Menú principal con acceso a un apartado de opciones, donde se podrán observar los controles y ajustar el volumen mediante un slider. En el menú principal el jugador tiene las siguientes opciones:
- Jugar
- Opciones
- Salir del juego
- Menú de pausa con opciones de reanudar la partida, acceder al menú de opciones mencionado anteriormente y salir del juego

**3.1. Interfaz y control**

![](Aspose.Words.e5a6dcf0-0bed-40cc-8d51-f04793ff0552.005.jpeg)

4. **Contenido**
1. **Historia**

Una noche de frío invierno al llegar las 12 de la noche todos los bebés de la ciudad no podían conciliar el sueño. El mundo de los sueños ha sido invadido por Agnan, el gran líder de las pesadillas. Si nadie hacía algo todo el mundo se vería afectado. Pero gracias a Otis, un bebé capaz de adentrarse en el mundo onírico hará frente a todos los esbirros de Agna abriendo camino para poder enfrentarse directamente a él.

2. **Niveles**
- Nivel 1:
- Nivel 2:
- Nivel 3:

![](Aspose.Words.e5a6dcf0-0bed-40cc-8d51-f04793ff0552.006.jpeg)

**Referencias**

- The binding of Isaac

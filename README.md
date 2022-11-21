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
|<p>**Público objetivo:jugadores noveles que buscan una experiencia divertida pero a la vez rápida.**</p><p>*Edad: +10 años*</p><p> -Idioma: Español</p>|Plataformas: PC|
**Descripción**

En “Good Nightmare Sweetie” tomarás el papel de Otis, un bebé capaz de entrar en el onírico mientras duerme y ganar alucinantes poderes en este. 
Todo este mundo se encontraba en calma pero la malvada pesadilla Agnan se ha hecho con el control total del mundo, impidiendo a la gente conciliar el sueño. 
Otis deberá enfrentarse a todas las pesadillas que encuentre a su paso para conseguir liberar al mundo de ensueños.




**Logotipo y portada del juego**
 ![image](https://user-images.githubusercontent.com/82326212/203010341-a80b85bb-e826-4e2b-a25b-a6fe7e988792.png)
 |

# 1.	Aspectos generales
El juego se dispondrá de manera top-down. El personaje principal se podrá mover en las 8 direcciones pudiendo a su vez realizar diferentes ataques (melee y rango). Este será un juego dinámico en que el principal objetivo del jugador será ir acabando con los diferentes enemigos. Además el jugador dispondrá de la ayuda del ratón con la que podrá ir parando a los enemigos y quitando obstáculos. En cuanto a la disposición del mundo que nos encontraremos será un nivel con estética de fantasía (colores pastel).

## 1.1	Relato breve y parcial de una partida típica 
El jugador se encontrará un nivel con un número de enemigos a derrotar (a través de sus ataques). Además en el mapa habrá obstáculos que el jugador deberá ir moviendo para poder atacar a enemigos que no sean accesibles o para abrirse camino.


## 1.2.	Historia
Una noche de frío invierno al llegar las 12 de la noche todos los bebés de la ciudad no podían conciliar el sueño. El mundo de los sueños ha sido invadido por Agnan, el gran líder de las pesadillas. Si nadie hacía algo todo el mundo se vería afectado. Pero gracias a Otis, un bebé capaz de adentrarse en el mundo onírico hará frente a todos los esbirros de Agna abriendo camino para poder enfrentarse directamente a él.

# 2.	Jugabilidad
En “Good Nightmare Sweetie” te encargas de acabar con todas las pesadillas que encuentres en tu camino. Al matar en cada nivel el número requerido de enemigos el jugador podrá pasar al siguiente nivel ganando una habilidad extra en el proceso.

## 2.1.	Mecánica
### 2.1.1.	Mecánicas del personaje
Ataque a distancia: el jugador disparará biberones a la dirección en la que esté mirando en ese momento, infligiendo daño a los enemigos que encuentre por el camino.
Llanto: el jugador creará a sus pies un charco que inflige daño a los enemigos que lo pisen. Este ataque podrá mantenerse para hacerlo mientras el jugador se desplaza por el nivel.
Ratón: el jugador podrá ayudarse del ratón para retener a los enemigos que se acerquen a él. También podrá utilizar esta habilidad para mover diferentes objetos del mapa (marcados más brillantes para que el jugador con cual interactuar). Al pasar al último nivel el ratón al clicar sobre los enemigos para infligir daño.
Dash: el jugador se desplaza una pequeña distancia hacia la dirección en la que esté mirando el jugador en ese momento. Durante este tiempo el jugador se vuelve invulnerable al daño de los enemigos y hace daño a los enemigos que toque por el camino.
 
### 2.1.2.	Mecánicas de escenario
El mapa estará creado por tiles y delimitado por almohadas y juguetes de bebé, todo con un toque tétrico. El jugador no podrá sobrepasar estos límites. A lo largo del nivel habrá escondites donde estarán algunos enemigos y objetos que bloquean el paso (almohadas, juegos de cuadrados de colores, peluches, pelotas, etc.). Además en el mapa habrá una especie de ojos que alternarán entre vigilia y sueño (el tiempo en el que alternan entre estos dos estados será contabilizado por una barra que irá el tiempo restante). Cuando los ojos estén abiertos un área del mapa quedará cubierta por la luz que emitirá este. Si el jugador se adentra en esta área los enemigos aumentarán su velocidad y el daño que infligen al jugador.

Por cada nivel que se haya superado el jugador obtendrá:

Nivel 1: el daño que infringe el jugador y la vida máxima de este aumenta. Además se desbloquea el dash.

Nivel 2: el ratón puede hacer daño a los enemigos.


### 2.1.3. Mecánicas de enemigos
Todos los enemigos se moverán de manera aleatoria por el escenario. Estos dañarán 10 de vida al jugador si colisionan con este.
Las principales diferencias entre estos son sus atributos de velocidad y vida.

![image](https://user-images.githubusercontent.com/82326212/203017860-d47f8dd1-9994-43a6-a8ef-777acac396a8.png)

El enemigo rango tendrá la diferencia de que cada 4 segundos disparará una bala hacia la posición en la que se encontraba el jugador en ese momento.

### 2.1.4 Mecánicas de jefe.
El jefe se encontrará en el último nivel del juego (nivel tres). Este nivel (explicado en Niveles) contiene 6 ojos de Agnan. Estos no tendrán la mecánica de alternar entre el estado de vigilia y sueño. 

El jefe tendrá un movimiento constante hacia la posición actual del jugador en cada momento, con una velocidad de 100. Si en algún momento consigue alcanzar al jugador este le quitará 30 de vida y el jefe se volverá invisible durante dos segundos y se posicionará aleatoriamente en una parte del nivel.  Cada cierto tiempo aleatoriamente fijado se detendrá durante dos segundos. Cuando este tiempo finaliza realizará una de tres acciones disponibles. 

- Bala fantasma: bala de pequeño tamaño con una velocidad de 250 que seguirá al jugador durante tres segundos, después de los cuales seguirá la última trayectoria que haya tomado. Si el jugador llega a ser alcanzado por uno de estas perderá 40 de vida.

- Dash sombrío: el jefe se lanzará con una velocidad de 500 hacia la posición del jugador.

- Invisibilidad: durante dos segundos se volverá invisible al jugador, reduciendo su velocidad a 50. Al finalizar este tiempo volverá a ser visible y recuperará su velocidad inicial.

En cuanto a la vida del jefe, vendrá marcada por los ojos de Agna del mapa. Cada uno tendrá un total de 50 de vida. El jefe será derrotado cuando no haya ningún ojo de Agnan en el mapa.

### 2.1.5. Mecánicas de objetos
El jugador podrá interactuar con diferentes tipos de elementos que modificarán sus stats actuales o servirán para seguir avanzando en la historia.

- Contenedor de vida: al colisionar con este el jugador recuperará 25 de la vida perdida.

- Objetos movibles: como ya se ha comentado anteriormente en el apartado de mecánicas de escenario el jugador podrá interactuar a través del ratón para poder reposicionarlos.

- Ojos de Agnan: también comentado en el apartado de mecánicas de escenario, en el que al colisionar con el área que crean al estar en el estado de vigilia, los enemigos aumentarán su atributo de velocidad durante 4 segundos.

- Puerta de paso de nivel: objeto que solo podrá interactuar al haber acabado con todos los enemigos que le permitirá pasar al siguiente nivel.

# 3.	Dinámica
La dinámica principal es la de ir acabando con los enemigos para poder pasar de nivel y conseguir las diferentes mejoras que esto conlleva (desbloqueo del dash y el poder hacer daño a los enemigos mediante clicks). 
Por ello, será un juego frenético en el que el jugador deberá de hacer uso de los ataques (Mecánicas de jugador) para poder acabar con ellos.
Además, también habrá un poco de exploración por el nivel para buscar contenedores de vida, recompensando así esta dinámica.

# 4.	Controles
Los controles se corresponderá a los del teclado de ordenador, siendo estos:

- “A” : movimiento en el eje X negativo del jugador.
- “S” : movimiento en el eje Y negativo del jugador.
- “D” : movimiento en el eje X positivo del jugador.
- “W” : movimiento en el eje Y positivo del jugador.
- “F” : dash del jugador en la dirección que se esté moviendo en ese momento.
- “E” : creará un llanto en la posición del jugador.
- SPACE: dispará un biberón hacia la posición a la que esté mirando el jugador en ese momento.

# 5.	Cámara e interfaz.
La vista de la cámara será top-down. El jugador siempre se encontrará en la parte central de la cámara.
Respecto a la interfaz, estará formada por una barra horizontal en la parte superior izquierda de la pantalla que mostrará la vida actual del jugador. A su vez en la parte superior derecha se mostrarán el número de enemigos que quedan en el nivel. A su vez, para aclarar al jugador la vida que tienen los enemigos, estos tendrá una pequeña barra de vida, similar a la del jugador, encima de ellos que mostrarán la vida que le queda en cada momento. Esto pasará igual con los ojos de Agnan mostrando el tiempo que queda para cambiar de estado.

# 6.	Estética.
En cuanto a la estética, esta es muy parecida a los juegos de aventura o de exploración top-down. Habrá elementos estéticos como cristales y rocas para dar un ambiente mágico pero a la vez peligroso. La spritesheet utilizada será la que se muestra a continuación ya que encaja tanto con los sprites de los diferentes elementos del juego y con el ambiente que se quiere conseguir.

![image](https://user-images.githubusercontent.com/82326212/203033084-5fa8de95-8bf5-409a-9c43-7bc405db2fca.png)

https://craftpix.net/product/green-dungeon-pixel-art-tileset/

En cuanto a los enemigos estos tendrán un tono más infantil debido a que el mundo en el que el jugador se encuentra son las pesadillas de diferentes bebés. Los sprites de enemigos y jefe utilizados provienen del juego Kirby:¡Roedores al ataque!.

![image](https://user-images.githubusercontent.com/82326212/203033902-4c555811-ddf7-4051-8a5a-f1ff585bc31f.png)

![image](https://user-images.githubusercontent.com/82326212/203033982-99f996a9-465a-4644-bec8-57bb8eb81324.png)

![image](https://user-images.githubusercontent.com/82326212/203034104-95446db3-44de-4c4e-b756-144a18bf96ab.png)

![image](https://user-images.githubusercontent.com/82326212/203034175-e5f84049-647c-4130-83a7-b3042b06a3f2.png)

![image](https://user-images.githubusercontent.com/82326212/203034481-a576ccc9-af33-4fc1-bd71-8ccfde35aaa6.png)

https://www.nintendo.es/Juegos/Nintendo-DS/Kirby-Roedores-al-ataque--271276.html

En cuanto al personaje principal se utilizará la siguiente spritesheet ya que corresponde a la línea estética que hemos seguido a lo largo del juego. 

![image](https://user-images.githubusercontent.com/82326212/203035352-fc101e0f-6da6-4165-9ec0-38d779519d38.png)

https://www.pngfind.com/mpng/hmRbiwo_running-babys-pixel-art-base-sprite-hd-png/

Para los demás elementos hemos usado elementos propios ya que era un arte muy específico y necesitábamos que casará bien con la estética del juego.

![image](https://user-images.githubusercontent.com/82326212/203036415-de7edf2f-c949-401e-8c0e-22306e76a4a5.png)



# 7.	Música y Sonido

Los sonidos que se utilizarán en el juego ayudarán al feedback del jugador permitiendo asi una mejor jugabilidad de este. Se utilizarán los necesarios para no abrumar al jugador con el uso de sonidos que no aportan información. 

# 8.	Menús
En la pantalla principal del juego encontraremos diferentes tipos de botones que nos permitirán movernos por las diferentes escenas.

- PLAY: nos llevará al primer nivel del juego para empezar así la aventura.

- BOSS: nos llevará al nivel del jefe (nivel 3) para enfrentarnos directamente a él tanto para practicar como para jugadores que ya hayan jugado al juego y quieran repetir esta etapa en específico.

- CONTROLS: nos llevará a una escena donde se mostrarán los controles del juego.

# 9.	Niveles
A continuación se exponen los diferentes esquemas de los niveles del juego.

![image](https://user-images.githubusercontent.com/82326212/203037586-9b1121c5-140d-4246-a93e-a8c3836e1177.png)

En el primer nivel se quiere conseguir que el jugador se familiarice con los controles y con los diferentes elementos del escenario. De ahí la poca cantidad de enemigos y la facilidad de estos mismos. También habrá una gran cantidad de objetos de vida para recompensar al jugador por la exploración del nivel.

![image](https://user-images.githubusercontent.com/82326212/203037924-3049ea8c-49f1-492f-8e71-0410f3bb3a90.png)

En cuanto al segundo nivel el mapa será más grande y con una mayor cantidad de enemigos. Aquí habrá mínimo un enemigo de cada tipo subiendo considerablemente la dificultad de este.

![image](https://user-images.githubusercontent.com/82326212/203038207-50ca85ed-74c8-4d42-aea3-c9c64da726cf.png)

En el último nivel se quiere  conseguir la sensación de agobio debido a lo pequeño que es el escenario. En este no habrá ningún objeto u obstáculo más allá de los ojos de Agnan (que en este caso representa la vida del jefe, mecánicas de jefe).

![image](https://user-images.githubusercontent.com/82326212/203038505-87a4a421-41cb-4607-8cfb-1c9df27cb654.png)

# 10.	Referencias
En cuanto a las referencias, el título bebe mucho de juegos como:

- “The binding of Isaac”, cogiendo de este la vista de la cámara y parte de la interfaz de esta. Además del ataque principal del jugador muy similar a las lágrimas que utiliza el personaje es ese juego o los contenedores de vida.

- “Kirby:¡Roedores al ataque!”, como ya hemos visto la mayor parte de la estética del juego se basa en él.

- Juegos del estilo “Samurai Warriors”, que toma la dinámica de acabar con un número específico de enemigos para poder superar el nivel.


# GOOD NIGHTMARE SWEETIE-Mosca Du Fruta Studios
Este proyecto es un trabajo universitario para la asignatura PVLI (Programación de Videojuegos en Lenguajes Interpretados) del Grado en Desarrollo de Videojuegos
de la Universidad Complutense de Madrid.

![image](https://user-images.githubusercontent.com/82326212/207975497-13b93889-d6d3-46d0-92f4-ac81b0a0e231.png)


Nuestro proyecto “Good Nightmare Sweetie”, es un videojuego web hecho con Phaser3 y JavaScript en el cuál, tomarás el papel de Otis, un bebé capaz de entrar en el mundo de los sueños,que se encontraba en calma hasta que las pesadillas se hicieron con el control, impidiendo a la gente conciliar el sueño. Otis, con los poderes que adquiere en este mundo, deberá plantar cara a todas las calamidades con las que se cruce a su paso para conseguir despertar y salvarse.

Twitter de nuestro estudio: https://twitter.com/dufruta?s=11&t=cYMcq%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%201XIetq8mHsaq4aE3Q

Página web del proyecto: https://admont02.github.io/PVLI22-23_GRUPO01/

## Architecture
Actualmente, nuestro proyecto cuenta con este diagrama UML (Unified Modeling Languages) basado especialmente en la relación de herencia.
![image](https://user-images.githubusercontent.com/82326212/198404418-682fdf8f-75a2-4927-8208-96d3f8a19405.png)

## Assets
La gran mayoría de nuestros assets son descargados, a excepción de la puerta, el moving object, los ojos..nuestros enemigos son sacados de los videojuegos de Kirby. A continuación, incluyo enlaces de donde hemos sacado diversos elementos para el videojuego:

https://kyrise.itch.io/kyrises-free-16x16-rpg-icon-pack?download

https://simodias.itch.io/heart

https://gif-superretroworld.itch.io/dungeon-pack?download

https://limezu.itch.io/kitchen?download

https://tilation.itch.io/16x16-small-indoor-tileset?download

https://penzilla.itch.io/top-down-retro-house

# GDD
***GRUPO 1***

***Good Nightmare Sweetie***



|**Géneros**: Aventura y Exploración|**Modos**: Oleadas de enemigos|
| - | - |
|<p>**Público objetivo:**  Jugadores noveles que buscan una experiencia divertida pero a la vez rápida.</p><p>-Edad: +10 años <p>-Idioma: Español</p>|**Plataformas**: PC|

**Descripción**

En “Good Nightmare Sweetie” tomarás el papel de Otis, un bebé capaz de entrar en el onírico mientras duerme y ganar alucinantes poderes en este. Todo este mundo se encontraba en calma pero la malvada pesadilla Agnan se ha hecho con el control total del mundo, impidiendo a la gente conciliar el sueño.

Otis deberá enfrentarse a todas las pesadillas que encuentre a su paso para conseguir liberar al mundo de ensueños.



|Logotipo y portada del juego|
| - |
| ![image](https://user-images.githubusercontent.com/82326212/203010341-a80b85bb-e826-4e2b-a25b-a6fe7e988792.png)|

# 1. Aspectos generales

En cuanto a las características principales del juego podemos encontrar la vista de la cámara en top-down.

El personaje principal del juego se podrá mover en las 8 direcciones pudiendo a su vez realizar diferentes ataques (melee y rango).

Será un juego dinámico en que el principal objetivo del jugador será ir acabando con los diferentes enemigos.

Además el jugador dispondrá de la ayuda del ratón con la que podrá ir parando a los enemigos y quitando obstáculos.

## 1.1 Relato breve y parcial de una partida típica

El jugador entrará en un nivel que tendrá que explorar para encontrar las diferentes mejores esparcidas por el mapa a la vez que vaya acabando con los enemigos. Tendrá que encontrar a su vez la puerta de final de nivel que solo se abrirá cuando todos los enemigos hayan sido derrotados.

## 1.2. Historia

Una noche de frío invierno al llegar las 12 de la noche todos los bebés de la ciudad no podían conciliar el sueño. El mundo de los sueños ha sido invadido por Agnan, el gran líder de las pesadillas. Esto supondría que las pesadillas andarán esparciendo el mal por todo el mundo. La única esperanza será Otis, un bebé que cuando duerme es capaz de entrar a este mundo. Solo él y con la ayuda de su compañero Ratón podrá hacer frente a este mal antes de que sea demasiado tarde.

# 2. Jugabilidad

En “Good Nightmare Sweetie” te encargas de acabar con todas las pesadillas que encuentres en tu camino. Al matar en cada nivel el número requerido de enemigos el jugador podrá pasar al siguiente nivel ganando una habilidad extra en el proceso.

## 2.1. Mecánica

### 2.1.1. Mecánicas del personaje
- **Ataque a distancia**: el jugador disparará biberones a la dirección en la que esté mirando en ese momento, infligiendo 10 de daño a los enemigos que encuentre por el camino.
- **Llanto**: el jugador creará a sus pies un charco que inflige 0.2 daño por cada frame que estén los enemigos sobre este.
- **Dash**: el jugador se desplaza una pequeña distancia hacia la dirección en la que esté mirando el jugador en ese momento. Durante este tiempo el jugador se vuelve invulnerable al daño de los enemigos. Este ataque solo estará disponible cuando el jugador pase al segundo nivel.
- **Ratón**: el jugador podrá ayudarse del ratón para retener a los enemigos que se acerquen a él. También podrá utilizar esta habilidad para mover diferentes objetos del mapa (marcados más brillantes para que el jugador con cual interactuar). Al pasar al último nivel el ratón al clicar sobre los enemigos para 1 de daño.

### 2.1.2. Mecánicas de escenario

El mapa estará creado por tiles y delimitado por muros. El jugador no podrá sobrepasar estos límites. A lo largo del nivel habrá escondites donde estarán algunos enemigos y objetos que bloquean el paso. Además en el mapa habrá una especie de ojos que alternarán entre vigilia y sueño (el tiempo en el que alternan entre estos dos estados será contabilizado por una barra que irá el tiempo restante). Cuando los ojos estén abiertos un área del mapa quedará cubierta por la luz que emitirá este. Si el jugador se adentra en esta área los enemigos aumentarán su velocidad y el daño que infligen al jugador.

### 2.1.3. Mecánicas de enemigos

Todos los enemigos se moverán de manera aleatoria por el escenario. Estos dañarán 10 de vida al jugador si colisionan con este.

Las principales diferencias entre estos son sus atributos de velocidad y vida.

|Enemigo básico|Enemigo tanque|Enemigo veloz|Enemigo rango|
| - | - | - | - |
|![image](https://user-images.githubusercontent.com/82326232/207956553-173c864d-b966-47ac-bf0f-268756bb1942.png)|![image](https://user-images.githubusercontent.com/82326232/207957526-f47f205f-68f2-47a8-bdab-fe12a0e570bc.png)|![image](https://user-images.githubusercontent.com/82326232/207957674-b3138fa6-e409-465d-b303-a012820f5f09.png)| ![image](https://user-images.githubusercontent.com/82326232/207957809-2680992b-a541-488c-a6d1-696f3e8929bc.png)
|**Vida**: 20 <p>**Velocidad**: 50|**Vida**: 40 <p>**Velocidad**: 30|**Vida**: 20 <p>**Velocidad**: 100|**Vida**: 20 <p>**Velocidad**: 50|

Algunas diferencias entre ellos son:

El enemigo básico al estar a una distancia de 125 del jugador este empezará a seguirlo hasta que logre salir del área.

El enemigo tanque  si es tocado por el jugador, además de infligir daño por contacto este el reducirá la velocidad a 50 durante 3 segundos.

El enemigo veloz tendrá una velocidad inicial de 100 pero cambiará a 200 convirtiéndose en un torbellino que se moverá durante unos segundos por todo el mapa.

El enemigo rango tendrá la diferencia de que cada 4 segundos disparará una bala hacia la posición en la que se encontraba el jugador en ese momento si este se encuentra a una distancia de 150 de este. La bala se auto destruirá pasados 2 segundos.

### 2.1.4 Mecánicas de jefe

El jefe se encontrará en el último nivel del juego (nivel tres). Este está en un nivel (explicado en Niveles) con 6 ojos de Agnan. Estos no tendrán la mecánica de alternar entre el estado de vigilia y sueño.

El jefe tendrá un movimiento constante hacia la posición actual del jugador en cada momento, con una velocidad de 100. Si en algún momento consigue alcanzar al jugador este le quitará 30 de vida y el jefe se volverá invisible durante dos segundos y se posicionará aleatoriamente en una parte del nivel.  Cada cierto tiempo aleatoriamente fijado se detendrá durante dos segundos. Cuando este tiempo finaliza realizará una de tres acciones disponibles.

- **Bala fantasma**: bala de pequeño tamaño con una velocidad de 250 que seguirá al jugador durante tres segundos, después de los cuales seguirá la última trayectoria que haya tomado. Si el jugador llega a ser alcanzado por uno de estas perderá 40 de vida.
- **Dash sombrío**: el jefe se lanzará con una velocidad de 500 hacia la posición del jugador.
- **Invisibilidad**: durante dos segundos se volverá invisible al jugador, reduciendo su velocidad a 50. Al finalizar este tiempo volverá a ser visible y recuperará su velocidad inicial.

En cuanto a la vida del jefe esta vendrá marcada por los ojos de Agna del mapa. Cada uno tendrá un total de 50 de vida. El jefe será derrotado cuando no haya ningún ojo de Agnan en el mapa.

### 2.1.5. Mecánicas de objetos

El jugador podrá interactuar con diferentes tipos de elementos que modificarán sus stats actuales o servirán para seguir avanzando en la historia.

- **Cofre**: se encontrarán por el mapa. El jugador podrá interactuar con ellos haciendo click sobre ellos para obtener un power-up aleatorio (contenedor de vida, aumento de daño, aumento de velocidad).
- **Contenedor de vida**: al colisionar con este el jugador recuperará 25 de la vida perdida.
- **Aumento de daño**: aumenta el daño del jugador a 100 durante 10 segundos.
- **Aumento de velocidad**: aumenta la velocidad del jugador a 600 durante 2 segundos.
- **Objetos movibles**: como ya se ha comentado anteriormente en el apartado de mecánicas de escenario el jugador podrá interactuar a través del ratón para poder reposicionarlos.
- **Ojos de Agnan**: también comentado en el apartado de mecánicas de escenario, en el que al colisionar con el área que crean al estar en el estado de vigilia, los enemigos aumentarán su atributo de velocidad durante 4 segundos.
- **Puerta final nivel**: objeto que solo podrá interactuar al haber acabado con todos los enemigos que le permitirá pasar al siguiente nivel.
- **Ojos de vida**: estos se encuentran en el último nivel y representan la vida de Agnan. Al destruirse todos Agnan será derrotado.

# 3. Dinámica

La dinámica principal es la de ir acabando con los enemigos para poder pasar de nivel y conseguir las diferentes mejoras que esto conlleva (desbloqueo del dash y el poder hacer daño a los enemigos mediante clicks).

Por ello será un juego frenético en el que el jugador deberá de hacer uso de los ataques (Mecánicas de jugador) para poder acabar con ellos.

Además también habrá un poco de exploración por el nivel para buscar contenedores de vida, recompensando así esta dinámica.

# 4. Controles

Los controles se corresponderá a los del teclado de ordenador, siendo estos:

- “A” : movimiento en el eje X negativo del jugador.
- “S” : movimiento en el eje Y negativo del jugador.
- “D” : movimiento en el eje X positivo del jugador.
- “W” : movimiento en el eje Y positivo del jugador.
- “F” : dash del jugador en la dirección que se esté moviendo en ese momento.
- “E” : creará un llanto en la posición del jugador.
- SPACE: dispará un biberón hacia la posición a la que esté mirando el jugador en ese momento.

# 5. Cámara e interfaz

La vista de la cámara será top-down. El jugador siempre se encontrará en la parte central de la cámara.

Respecto a la interfaz, estará formada por una barra horizontal en la parte superior izquierda de la pantalla que mostrará la vida actual del jugador. A su vez en la parte superior derecha se mostrarán el número de enemigos que quedan en el nivel. A su vez, para aclarar al jugador la vida que tienen los enemigos, estos tendrá una pequeña barra de vida, similar a la del jugador, encima de ellos que mostrarán la vida que le queda en cada momento. Esto pasará igual con los ojos de Agnan mostrando el tiempo que queda para cambiar de estado.

# 6. Estética

En cuanto a la estética, esta es muy parecida a los juegos de aventura o de exploración top-down. Habrá elementos estéticos como cristales y rocas para dar un ambiente mágico pero a la vez peligroso. La spritesheet utilizada será la que se muestra a continuación ya que encaja tanto con los sprites de los diferentes elementos del juego y con el ambiente que se quiere conseguir.

![image](https://user-images.githubusercontent.com/82326232/207958716-a0eca1f2-a1b2-4b4b-bb43-361e72cd5ace.png)  ![](Aspose.Words.8eeeb921-8d33-4043-9342-369274f674a8.007.png)![](Aspose.Words.8eeeb921-8d33-4043-9342-369274f674a8.008.png)

https://itch.io/

En cuanto a los enemigos estos tendrán un tono más infantil debido a que el mundo en el que el jugador se encuentra son las pesadillas de diferentes bebés. Los sprites de enemigos y jefe utilizados provienen del juego Kirby:¡Roedores al ataque!.

![image](https://user-images.githubusercontent.com/82326212/203033902-4c555811-ddf7-4051-8a5a-f1ff585bc31f.png) ![image](https://user-images.githubusercontent.com/82326212/203033982-99f996a9-465a-4644-bec8-57bb8eb81324.png) ![image](https://user-images.githubusercontent.com/82326212/203034104-95446db3-44de-4c4e-b756-144a18bf96ab.png) ![image](https://user-images.githubusercontent.com/82326212/203034175-e5f84049-647c-4130-83a7-b3042b06a3f2.png) ![image](https://user-images.githubusercontent.com/82326212/203034481-a576ccc9-af33-4fc1-bd71-8ccfde35aaa6.png)

<https://www.nintendo.es/Juegos/Nintendo-DS/Kirby-Roedores-al-ataque--271276.html>![](Aspose.Words.8eeeb921-8d33-4043-9342-369274f674a8.011.jpeg)![](Aspose.Words.8eeeb921-8d33-4043-9342-369274f674a8.012.png)![](Aspose.Words.8eeeb921-8d33-4043-9342-369274f674a8.013.png)

En cuanto al personaje principal se utilizará la siguiente spritesheet ya que corresponde a la línea estética que hemos seguido a lo largo del juego.

![image](https://user-images.githubusercontent.com/82326212/203035352-fc101e0f-6da6-4165-9ec0-38d779519d38.png)

[Running Babys - Pixel Art Base Sprite, HD Png Download - 935x1133(#6361240) - PngFind](https://www.pngfind.com/mpng/hmRbiwo_running-babys-pixel-art-base-sprite-hd-png/)

Para los demás elementos hemos usado elementos propios ya que era un arte muy específico y necesitábamos que casará bien con la estética del juego.

**Ojos de Agnan**: <p>![image](https://user-images.githubusercontent.com/82326232/207959667-516cefab-106f-4172-8855-2070765dd2e5.png)

**Moving Object**: <p>![image](https://user-images.githubusercontent.com/82326232/207959743-94e1c6d2-13b5-42d1-8347-f933cd19d672.png)

**Contendores de vida**: <p>![image](https://user-images.githubusercontent.com/82326232/207959984-407144b4-c928-4387-96c4-49311fddb30c.png)

**Puerta de final de nivel**: <p>![image](https://user-images.githubusercontent.com/82326232/207960041-980b34ee-f36f-4dcb-977d-11dea54eeda7.png)

# 7. Música y Sonido

Los sonidos que se utilizarán en el juego ayudarán al feedback del jugador permitiendo así una mejor jugabilidad de este. Se utilizarán los necesarios para no abrumar al jugador con el uso de sonidos que no aportan información. Los sonidos se han conseguido de la pagina web: <https://www.videvo.net/es/efectos-de-sonido/> y de https://www.zapsplat.com/

En cuanto a la música del juego se utilizaran dos melodías: una cuando estemos en el menú o en la configuración del juego y otra en los niveles para que el jugador diferencie claramente en donde se encuentra solo con esta. Ambas sacadas del juego mencionado anteriormente: Kirby:¡Roedores al ataque!

# 8. Menús

En la pantalla principal del juego encontraremos diferentes tipos de botones que nos permitirán movernos por las diferentes escenas.

- **PLAY**: nos llevará al primer nivel del juego para empezar así la aventura.
- **BOSS**: nos llevará al nivel del jefe (nivel 3) para enfrentarnos directamente a él tanto para practicar como para jugadores que ya hayan jugado al juego y quieran repetir esta etapa en específico.
- **CONTROLS**: nos llevará a una escena donde se mostrarán los controles del juego.
- **CREDITS**: se mostrarán los creadores del juego.

Dentro del propio juego tendremos un pequeño menú en el que podremos pausar el juego y cambiar el volumen actual del juego.

# 9. Niveles

A continuación se exponen los diferentes esquemas de los niveles del juego. Los representados con lápiz son los niveles que se pensaron al principio y los representados en tiled son los finales.

![image](https://user-images.githubusercontent.com/82326212/203037586-9b1121c5-140d-4246-a93e-a8c3836e1177.png)

En el primer nivel se quiere conseguir que el jugador se familiarice con los controles y con los diferentes elementos del escenario. Como se ha dicho se quiere conseguir que el jugador se habitúe a los enemigos del juego por ello encontraremos todos los tipos de estos. Además al principio de este se mostrará un pequeño pergamino que nos sirve como introducción a la historia.

![image](https://user-images.githubusercontent.com/82326212/203037924-3049ea8c-49f1-492f-8e71-0410f3bb3a90.png)
![image](https://user-images.githubusercontent.com/82326232/207960550-79649331-b944-4a24-a3ed-df57e7e27812.png)

En cuanto al segundo nivel el mapa será más grande y con una mayor cantidad de enemigos. Aquí habrá mínimo un enemigo de cada tipo subiendo considerablemente la dificultad de este. También se utiliza una forma irregular para que el jugador tenga que explorar por todos los rincones del nivel.

![image](https://user-images.githubusercontent.com/82326212/203038207-50ca85ed-74c8-4d42-aea3-c9c64da726cf.png)
![image](https://user-images.githubusercontent.com/82326232/207960695-d923c79f-70e0-4a43-bb5b-5bbe545b1fe2.png)

En el último nivel se quiere  conseguir la sensación de agobio debido a lo pequeño que es el escenario. En este no habrá ningún objeto u obstáculo más allá de los ojos de Agnan (que en este caso representa la vida del jefe, mecánicas de jefe).

![image](https://user-images.githubusercontent.com/82326212/203038505-87a4a421-41cb-4607-8cfb-1c9df27cb654.png)
![image](https://user-images.githubusercontent.com/82326232/207960938-62b05d61-3efc-41f6-9754-6bdd3a2edbf7.png)

Además entre cada uno de los niveles ya mencionados se encontrará un pequeño escenario en el que el jugador tendrá que avanzar para poder pasar al siguiente nivel. Cuando toquemos la puerta de final de nivel saldrá una pantalla explicando los nuevos ataques desbloqueados del jugador.

![image](https://user-images.githubusercontent.com/82326232/207961079-4f123afc-033c-49a6-aaa8-5795e6e2923e.png) ![image](https://user-images.githubusercontent.com/82326232/207961022-ad982eea-8e10-4741-ab14-85247ef40f1b.png)

# 10. Referencias

En cuanto a las referencias, el título bebe mucho de juegos como:

- “The binding of Isaac”, cogiendo de este la vista de la cámara y parte de la interfaz de esta. Además del ataque principal del jugador muy similar a las lágrimas que utiliza el personaje es ese juego o los contenedores de vida.
- “Kirby:¡Roedores al ataque!”, como ya hemos visto la mayor parte de la estética del juego se basa en él.
- Juegos del estilo “Samurai Warriors”, que toma la dinámica de acabar con un número específico de enemigos para poder superar el nivel.


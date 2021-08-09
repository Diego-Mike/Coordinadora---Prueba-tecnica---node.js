<!-- Titulo -->

# **Coordinadora Mercantil - Test Para Desarollador Node.js**

---

<!-- Instrucciones -->

# ¿Cómo ejecutar el servidor?

- npm install (para instalar todas las dependencias necesarias)

- npm run build

- Ve a http://localhost:5000/challenge/docs para la documentación

<!-- Parte teorica -->

# Preguntas teóricas

**1. Con sus propias palabras explique que es una inyección de dependencias y para qué sirve.**

**R:** Nunca había escuchado este termino antes en mi vida como desarrollador. Al investigar un poco, no entendí a priori el significado
core de este termino, no obstante, al seguir buscando, encontre un blog en donde lo explicaban de una forma más detallada.

Podemos tener una función que recibe una url, en la función, por medio de ese parametro harémos una llamada hacia una API con el metodo fetch,
¿pero que sucedería si en un futuro decidimos cambiar de fetch (una función nativa) a una dependencia tipo axios?, habría que cambiar todas
las funciones y refactorizarlas.

Aquí es donde entra la inyección de dependencias, en ves de solo pasar la url como parametro, podríamos pasar el metodo para hacer la
petición al servidor también, de esa manera, si cambiamos a diferentes dependencias, el resto de la función no se arruinará. En resumen, la inyección de dependencias sirve para no dejar toda la lógica principal a cargo de la función y usa parametros y otros recursos para cambiar los metodos e información más importante, cuando llegue el momento de cambiar este tipo de procedimientos, solo cambiarás parametros, y no toda la logica de la función.

**2. Explique con sus propias palabras las diferencias entre asincrono y sincrono.**

**R:** Código sincrono son las lineas que se leen desde el principio hasta el fin, ejecutandose perfectamente en orden, una por una, hasta que la primera no se solucione/resuelve, no continuará hasta la otra linea de código, osea, bloquea el resto de código hasta no resolver la actual linea de código. Ahora, en cuanto a Código asincrono, no funciona de la misma manera. Al leer desde arriba del código, al encontrarse una linea de código/función asincrona
no se ejecuta al mismo tiempo exactamente, se resolverá a parte del código sincrono y su resultado se mostrará al final.

La razón por la que existe el código asincrono, es por que hay operaciones que toman tiempo, y ese tiempo es una variable, por lo
cual, podría tardar facilmente un segúndo, como podría tardar 30seg.

Hay ocaciones en donde las operaciones tipo asincronas bloquearán el resto de las operaciones hasta completarse la petición, esto es un caso común cuando se usa async/await en una función.

**3. Cual es la importancia del uso de promesas en un proyecto.**

**R**: "Prometo entregar el mejor examen posible para poder conseguir un empleo en como desarrollador node.js en coordinadora", esta condición puede tener dos outputs, uno es, sí haré todo lo posible por hacer el mejor examen, osea, estaría resolviendo( resolve() ) la promesa, de lo contrario, estaría rechazandolá ( reject() ).

¿Ahora, como interactuarías con las promesas?, si la cumples, utilizarías .then() que es una función que recibe un callback con la información que resolve() haya enviado, y si no cumples la promesa, utilizas .catch(), que también recibe un callback, pero esta ves recibe info de reject().

En todo proyecto van a haber lineas de código/fucniones que se comunicaran con servidores, bases de datos, o estarán usando alguna dependencia, estas funciónes recibirán una promesa, en donde se da información del exito cumplido o fallido de la operación.

En proyectos grandes, las llamadas entre servidores, bases de datos y todo tipo de funciones que devuelvan una promesa, son demasiadas y es el core fundamental de la app, gracias a esto, es imposible no usar promesas en un proyecto.

**4. Cual es la importancia de usar ORM dentro de un proyecto, ventaja y desventaja.**

**R:** Los ORM (Object Relational Mapping) están para escribir SQL por ti, tu simplemente te ajustas a la documentación, haces los esquemas, aprendes las relaciones ( many to one, one to many, many to many ) y usas esa arquitectura para utilizar metodos tipo .create() .update(), en ves de tener que usar SQL puro "CREATE TABLE users ()" "UPDATE users SET id = 5 WHERE name = jonh".

Desventajas :

- Pierdes control sobre lo que realmente esta sucediendo detras de escenas, el desarrollador esta más en control cuando escribe sus propias queries

- Los ORM tienden a ser más lentos, de hecho, a la hora de invocar queries complicadas, ORM es mucho más lento que escribir raw SQL

Ventajas :

- Reduce tiempo de desarollo y costos.

- Elimina la necesitad de escribir queries repetitivas

- Es más SEGURO a SQL injections attacks

**5. Que diferencia hay entre una base de datos SQL, NOSQL.**

**R:** Bases de datos sql son DB's relacionales, siguen una estructura estricta, siguen el estandar SQL, columnas, filas, esquemas en donde hay una llave principal, llaves foraneas, relaciones de muchos a uno, uno a muchos, muchos a muchos (entre otros...). Este tipo de bases de datos son la perfecta arquitectura para la mayoría de aplicaciones que tengan que lidiar con usuarios, acciones, o resumidamente, operaciones CRUD, información que este relacionada entre si y tenga que seguir ciertas reglas/estructuras a la hora de ser guardada.

No obstante, cuando hablamos de bases de datos NoSQL, el nombre nos da mucha información acerca de estas. Son espacios donde almacenamos información sin seguir una estructura especifica, quiza haya una llave primaria unica, pero no habran relaciones y todo tipo de metodos como en las bases de datos SQL. Una razón por la cual utilizar estas, sería guardar información no tan sensible o estructurada, como guardar un monton de booleanos/opciones que el usuario hace dese el lado del cliente entre otro tipo de acciones.

**6. Si hablo de colección y documentos ¿me refiero a?**

**R:** Base de datos, información, esquemas.

**7. Si una aplicación está sacando error de CORS a que se está refiriendo?**

**R:** Cors (Cross Origin Resource Sharing) es un metodo que permite que nuestra API pueda recibir llamadas desde un dominio diferente a nuestro puerto local para poderse comunicar e interactuar con el servidor, si hay algun error con esta función, es probable que se este infringiendo algun parametro/condición, significando, no podremos usar el servidor, o también es probable que (aunque no estoy demasiado seguro), el servidor este en mantenimiento o se este desarrollando una nueva versión, por lo cual no puede recibir peticiones de un dominio del exterior.

---

<!-- Link a youtube -->

## Link Del Video

[Algoritmos, reto 4 y 7](https://www.youtube.com/watch?v=HdunRho9Wgw)

### Anotaciones

- No pude hacer testing para el proyecto :p

Extra Smart Coffee
==================

Usa el modulo especial de Extra Smart Coffee para NodeJS para simplificarte la vida.

Contenido
---------

*   ExtraRandomName
*   ExtraRandomGender

Extra Random Name
-----------------

Usa ExtraRandomName para generar un nombre aleatorio con nuestro gran almacen de nombres, incluso puedes personalizarlo como desees.

Ejemplo de uso:
```javascript

const { ExtraRandomName } = require('extrasmartcoffee');

const RandomName = new ExtraRandomName({
    Genero: 'Hombre', //Tambien puede ser 'Mujer'
    Syntaxis: 'NA', //Una 'N' por cada Nombre y una 'A' por cada Apellido
    /*
        El parametro plantilla es opcional, pero si se coloca tiene que estar bien definido o se mostrara un error, tiene que tener un arreglo por cada nombre de hombre, mujer y cada apellido y dicho array tiene que contener informacion suficiente, de otro modo se lanzará un error.
    */
    Plantilla: {
        Apellido: ['Moreno'],
        Hombre: ['David'],
        Mujer: ['Jenny']
    }
    /*
        Si se decide no usar el parametro plantilla se usara la plantilla interna con un almacen repleto de nombres aleatorios.
    */
});

var name = RandomName.name; //Devuelve el nombre generado (David Moreno)

```

Extra Random Gender
-----------------

Usa ExtraRandomGender para generar un genero aleatorio entre Hombre y Mujer, con la posibilidad de escojer con que probabilidad queremos que se genere uno o el otro.

Ejemplo de uso:
```javascript

const { ExtraRandomGender } = require('extrasmartcoffee');

const RandomGender = new ExtraRandomGender({
    //El parametro Coffee es opcional, pero si se usa tiene que tener la sintaxis correcta.
    Hombre: 50, //La probabilidad de que se genere un 'Hombre'
    Mujer: 50 //La probabilidad de que se genere una 'Mujer'
});
//Por defecto hay un 50% de probabilidad de aparecer cualquiera de los dos.

```# extrasmartcoffee-npm

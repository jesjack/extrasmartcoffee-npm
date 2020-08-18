Extra Smart Coffee
==================

Usa el modulo especial de Extra Smart Coffee para NodeJS para simplificarte la vida.

Contenido
---------

*   ExtraRandomName
*   ExtraRandomReturn

Extra Random Name
-----------------

Usa ExtraRandomName para generar un nombre aleatorio con nuestro gran almacen de nombres, incluso puedes personalizarlo como desees.

Ejemplo de uso:
```javascript

const { ExtraRandomName } = require('extrasmartcoffee');

const RandomName = new ExtraRandomName({
    Genero: 'Hombre', //Tambien puede ser 'Mujer'
    Syntaxis: 'NA', //Una 'N' por cada Nombre y una 'A' por cada Apellido
    Plantilla: {
        Apellido: ['Moreno'],
        Hombre: ['David'],
        Mujer: ['Jenny']
    }
    
});
```

El parametro plantilla es opcional, pero si se coloca tiene que estar bien definido o se mostrara un error, tiene que tener un arreglo por cada nombre de hombre, mujer y cada apellido y dicho array tiene que contener informacion suficiente, de otro modo se lanzará un error.

Si se decide no usar el parametreo plantilla se usara una plantilla interna con un almacen repleto de nombres

```javascript

var name = RandomName.Name; //Devuelve el nombre generado (David Moreno)

```

Extra Random Return
-----------------

Usa ExtraRandomReturn para devolver de entre un diccionario algun valor aleatorio con cierto porcentaje de probabilidad de aparecer.

Ejemplo de uso:
```javascript

const { ExtraRandomReturn } = require('extrasmartcoffee');

const RandomReturn = new ExtraRandomReturn();
```
Tambien puede utilizarse ingresando los valores directamente: 
```javascript
const RandomReturn = new ExtraRandomReturn([
    {
        return: ['Objeto a retornar'],
        probability: 50 //Probabilidad de aparecer de 50/75
    }, {
        return: ['segundo Objeto a retornar'],
        probability: 25 //Probabilidad de aparecer de 25/75
    }
]);
```
Con la posibilidad de agregar datos despues.
```javascript
RandomReturn.addData([
    {
        return: ['tercer Objeto a retornar'],
        probability: 50 //Probabilidad de aparecer de 50/150
    }, {
        return: ['cuarto Objeto a retornar'],
        probability: 25 //Probabilidad de aparecer de 25/150
    }
]);

var Return = RandomReturn.Return(); //Devuelve el genero generado (Hombre o Mujer)

```

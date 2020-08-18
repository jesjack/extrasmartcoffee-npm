"use strict";
var ExtraSmartCoffee = /** @class */ (function () {
    function ExtraSmartCoffee() {
    }
    var _a;
    ExtraSmartCoffee.ExtraRandomReturn = /** @class */ (function () {
        function ExtraRandomReturn(Coffee) {
            var _this = this;
            this.data = [];
            if (typeof Coffee === 'object' && typeof Coffee.length !== 'undefined') {
                Coffee.forEach(function (coffee) {
                    if (typeof coffee.probability !== 'undefined' && typeof coffee["return"] !== 'undefined') {
                        _this.data.push(coffee);
                    }
                });
            }
        }
        ExtraRandomReturn.prototype.addData = function (Coffee) {
            var _this = this;
            if (typeof Coffee === 'object' && typeof Coffee.length !== 'undefined') {
                Coffee.forEach(function (coffee) {
                    if (typeof coffee.probability !== 'undefined' && typeof coffee["return"] !== 'undefined') {
                        _this.data.push(coffee);
                    }
                    else
                        throw {
                            Error: 'Coffee in addData contains a wrong syntax'
                        };
                });
            }
            else
                throw {
                    Error: 'Coffee in addData contains a wrong syntax'
                };
        };
        ExtraRandomReturn.prototype.Return = function () {
            var tot = 0;
            var to_return = [];
            this.data.forEach(function (data) {
                to_return.push({ data: data, index: tot });
                tot += data.probability;
            });
            to_return.reverse();
            var num = Math.random() * tot;
            var ret_data;
            var enc = false;
            to_return.forEach(function (ret) {
                if (ret.index < num && !enc) {
                    ret_data = ret.data["return"];
                    enc = true;
                }
            });
            return ret_data;
        };
        return ExtraRandomReturn;
    }());
    ExtraSmartCoffee.ExtraRandomName = (_a = /** @class */ (function () {
            /**
             *
             * @param Coffee Opciones Coffee¡
             * @param Coffee.Genero Hombre o Mujer
             * @param Coffee.Syntaxis N for Name o A for LastName
             * @param Coffee.Plantilla Opcion de agregar mas nombres o nombres personalizados
             * @param Coffee.Plantilla.Hombre Nombres Masculinos
             * @param Coffee.Plantilla.Mujer Nombres Femeninos
             * @param Coffee.Plantilla.Apellido Apellidos
             *
             * Ejemplo de uso:
             * var RandomName = new ExtraRandomName({
             *      Genero: 'Hombre',
             *      Syntaxis: 'NAA'
             * });
             * // RandomName.name = Alan Garcia Castañeda
             */
            function ExtraRandomName(Coffee) {
                /**
                 * Obligamos al usuario a manejar sus errores
                 * para una mayor comodidad del usuario final
                 */
                if (Coffee.Genero != 'Hombre' && Coffee.Genero != 'Mujer'
                    || typeof Coffee.Syntaxis !== 'string'
                    || (typeof Coffee.Plantilla !== 'object'
                        && typeof Coffee.Plantilla !== 'undefined') || (typeof Coffee.Plantilla === 'object'
                    && (typeof Coffee.Plantilla.Apellido !== 'object'
                        || typeof Coffee.Plantilla.Hombre !== 'object'
                        || typeof Coffee.Plantilla.Mujer !== 'object'
                        || Coffee.Plantilla.Apellido.length == 0
                        || Coffee.Plantilla.Hombre.length == 0
                        || Coffee.Plantilla.Mujer.length == 0))) {
                    throw {
                        Error: 'Genero o Syntaxis mal definidos'
                    };
                }
                else {
                    if (typeof Coffee.Plantilla === 'object') {
                        var Plantilla = Coffee.Plantilla;
                    }
                    else {
                        var Plantilla = ExtraRandomName.names;
                    }
                    var name = '';
                    for (var i = 0; i < Coffee.Syntaxis.length; i++) {
                        switch (Coffee.Syntaxis.charAt(i)) {
                            case 'A':
                                name += Plantilla.Apellido[Math.floor(Math.random() * Plantilla.Apellido.length)];
                                break;
                            case 'N':
                                switch (Coffee.Genero) {
                                    case 'Hombre':
                                        name += Plantilla.Hombre[Math.floor(Math.random() * Plantilla.Hombre.length)];
                                        break;
                                    case 'Mujer':
                                        name += Plantilla.Mujer[Math.floor(Math.random() * Plantilla.Mujer.length)];
                                        break;
                                }
                                break;
                            default:
                                throw {
                                    Error: 'Syntaxis mal definida.'
                                };
                        }
                        name += (i + 1 < Coffee.Syntaxis.length) ? ' ' : '';
                    }
                    this.Name = name;
                }
            }
            return ExtraRandomName;
        }()),
        _a.names = {
            "Hombre": [
                "Edgar", "Jesús", "Nasser", "Noé", "Sergio", "Mario", "Fabián", "Victor", "Hugo", "Luis", "Diego", "Pancho", "Fulano", "David", "Lorenzo", "Alan"
            ], "Mujer": [
                "Nancy", "Olga", "Ruth", "Sofía", "Victoria", "Aide", "Jenny", "Jennifer", "de Jesús", "Betsy", "Angelica", "Belen", "Paulina", "Clara", "Antonieta", "Maria", "de los Ángeles", "Diana", "Viri", "Vanesa"
            ], "Apellido": [
                "Moreno", "Castañeda", "Aparicio", "Garcia", "Rodriguez", "Flores", "Jaquez", "Guadalupe", "Sanchez", "Villas", "Robles", "Chavez", "Hudson", "Valac", "Morales"
            ]
        },
        _a);
    return ExtraSmartCoffee;
}());
module.exports = ExtraSmartCoffee;

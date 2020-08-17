class ExtraSmartCoffee {
    static ExtraRandomGender = class ExtraRandomGender {
        /**
         * 
         * @param Coffee 
         */
        constructor(Coffee: {
            Hombre: number,
            Mujer: number
        } = {
            Hombre: 50, // Probabilidad de aparecer un hombre
            Mujer: 50 //Probabilidad de aparecer una mujer
        }) {
            if(typeof Coffee.Mujer === 'undefined' || typeof Coffee.Hombre === 'undefined') {
                throw {
                    Error: 'Mujer o Hombre indefinidos'
                };
            } else {
                let n_rand = Math.random() * (Coffee.Hombre + Coffee.Mujer);
                if(n_rand <= Coffee.Hombre) {
                    this.Gender = 'Hombre';
                } else {
                    this.Gender = 'Mujer';
                }
            }
        }

        public Gender;
    }

    static ExtraRandomName = class ExtraRandomName {
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
        constructor(Coffee: {
            Genero: 'Hombre' | 'Mujer', // Hombre o Mujer
            Syntaxis: string, // N for Name, A for LastName
            Plantilla?: {
                Hombre: string[],
                Mujer: string[],
                Apellido: string[]
            }
        }) {
            /**
             * Obligamos al usuario a manejar sus errores
             * para una mayor comodidad del usuario final
             */
            if(
                Coffee.Genero != 'Hombre' && Coffee.Genero != 'Mujer'
                || typeof Coffee.Syntaxis !== 'string'
                || (
                    typeof Coffee.Plantilla !== 'object'
                    && typeof Coffee.Plantilla !== 'undefined'
                ) || (
                    typeof Coffee.Plantilla === 'object'
                    && (
                        typeof Coffee.Plantilla.Apellido !== 'object'
                        || typeof Coffee.Plantilla.Hombre !== 'object'
                        || typeof Coffee.Plantilla.Mujer !== 'object'
                        || Coffee.Plantilla.Apellido.length == 0
                        || Coffee.Plantilla.Hombre.length == 0
                        || Coffee.Plantilla.Mujer.length == 0
                    )
                )
            ) {
                throw {
                    Error: 'Genero o Syntaxis mal definidos'
                };
            } else {
                if(typeof Coffee.Plantilla === 'object') {
                    var Plantilla = Coffee.Plantilla;
                } else {
                    var Plantilla = ExtraRandomName.names;
                }
                var name = '';
                for(var i = 0; i < Coffee.Syntaxis.length; i++) {
                    switch(Coffee.Syntaxis.charAt(i)) {
                        case 'A':
                            name += Plantilla.Apellido[Math.floor(Math.random() * Plantilla.Apellido.length)];
                            break;
                        case 'N':
                            switch(Coffee.Genero) {
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
                    name += (i + 1 < Coffee.Syntaxis.length)?' ':'';
                }
                this.Name = name;
            }
        }
        public Name: string;
        public static names = {
            "Hombre": [
                "Edgar", "Jesús", "Nasser", "Noé", "Sergio", "Mario", "Fabián", "Victor", "Hugo", "Luis", "Diego", "Pancho", "Fulano", "David", "Lorenzo", "Alan"
            ], "Mujer": [
                "Nancy", "Olga", "Ruth", "Sofía", "Victoria", "Aide", "Jenny", "Jennifer", "de Jesús", "Betsy", "Angelica", "Belen", "Paulina", "Clara", "Antonieta", "Maria", "de los Ángeles", "Diana", "Viri", "Vanesa"
            ], "Apellido": [
                "Moreno", "Castañeda", "Aparicio", "Garcia", "Rodriguez", "Flores", "Jaquez", "Guadalupe", "Sanchez", "Villas", "Robles", "Chavez", "Hudson", "Valac", "Morales"
            ]
        };
    }
}

export = ExtraSmartCoffee;
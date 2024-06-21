
class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre
        this.salud = salud
        this.velocidad = 3
        this.fuerza = 3
    }

    sayName(){
        console.log(` Este es el nombre del ninja ${nombre}`);
    }
    showStats(){
        console.log(`Este es el nombre ${nombre}
             Este es la fuerza ${fuerza}
             Este es la velocidad ${velocidad}
             Este es la salud ${salud}
             `);
    }
    drinkSake(){
        salud += 10;
    }

}









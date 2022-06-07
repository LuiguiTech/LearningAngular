export interface Interface01 {
    mensaje: string;
    repeticionMensaje: number;
}

let saludo01: Interface01 = {
    mensaje: "Este es un saludo",
    repeticionMensaje: 5
}

export class ClaseSaludo01 implements Interface01 {
    mensaje: string;
    repeticionMensaje: number;
    constructor(mensaje: string, repeticionMensaje: number){
        mensaje;
        repeticionMensaje;
    }
    imprimirSaludo(){
        for (let index = 0; index < this.repeticionMensaje; index++) {
            console.log(this.mensaje);
            
        }
    }
}
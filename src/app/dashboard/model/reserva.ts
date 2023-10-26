export class Reserva {
    id: number;
    nombre: string;
    apellidos: string;
    email: string;
    tipoCliente: string; // Puede ser "VIP", "Socio", "No Socio", u otras opciones
    fechaLlegada: Date;
    fechaSalida: Date;

    constructor(
        id: number,
        nombre: string,
        apellidos: string,
        email: string,
        tipoCliente: string,
        fechaLlegada: Date,
        fechaSalida: Date
    ) {
        this.id = id
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.tipoCliente = tipoCliente;
        this.fechaLlegada = fechaLlegada;
        this.fechaSalida = fechaSalida;
    }
}

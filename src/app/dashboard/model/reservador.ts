import { Reserva } from "./reserva";

export class Reservador {
    private reservas: Reserva[] = [];

    realizarReserva(reserva: Reserva): void {

        reserva.id = this.reservas.length + 1;
        this.reservas.push(reserva);
    }

    actualizarReserva(reservaOriginal: Reserva, reservaModificada: Reserva): boolean {

        const index = this.reservas.indexOf(reservaOriginal);

        if (index !== -1) {
            this.reservas[index] = reservaModificada;
            return true;
        }

        return false;
    }

    obtenerReservas(): Reserva[] {
        return this.reservas;
    }

    eliminarReserva(id: number): boolean {
        const index = this.reservas.findIndex((reserva) => reserva.id === id);

        if (index !== -1) {
            this.reservas.splice(index, 1); 
            return true;
        }

        return false; 
    }

}
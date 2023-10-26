import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/dashboard/model/reserva';
import { Reservador } from 'src/app/dashboard/model/reservador';
import { MessageService } from 'primeng/api';

import { LocalStorageService } from 'src/app/dashboard/services/localstorage.service';

@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styleUrls: ['./listar-reservas.component.css']
})
export class ListarReservasComponent implements OnInit {

  visible: boolean = false;

  closeResult: string = '';
  reservas: Reserva[] = [];

  nuevaReserva: Reserva = {
    id: -1,
    nombre: '',
    apellidos: '',
    email: '',
    tipoCliente: '',
    fechaLlegada: new Date(),
    fechaSalida: new Date()
  };

  constructor(private reservador: Reservador, private messageService: MessageService, private localStorageService: LocalStorageService) { }



  reserva1 = new Reserva(1, 'John', 'Doe', 'johndoe@example.com', 'VIP', new Date(), new Date());
  reserva2 = new Reserva(2, 'Jane', 'Smith', 'janesmith@example.com', 'Socio', new Date(), new Date());
  reserva3 = new Reserva(3, 'Santiago', 'Hernandez', 'santi@example.com', 'No Socio', new Date(), new Date());
  reserva4 = new Reserva(4, 'Monti', 'Smith', 'monti@example.com', 'Socio', new Date(), new Date());

  ngOnInit() {

    //Cargar Lista de reservas
    const reservasEnLocalStorage = this.localStorageService.getItem('reservas');
    
    if (reservasEnLocalStorage) {
      this.reservas = JSON.parse(reservasEnLocalStorage);
    } else {
      // Si no hay datos en localStorage, inicializa la lista de reservas
      this.reservas = [];
    }
    this.reservas = this.reservador.obtenerReservas(); // Quiero guardar esta lista 


    this.reservador.realizarReserva(this.reserva1);
    this.reservador.realizarReserva(this.reserva2);
    this.reservador.realizarReserva(this.reserva3);
    this.reservador.realizarReserva(this.reserva4);


  }


  listarReservas() {
    console.log(this.reservador.obtenerReservas())
  }
  guardarReserva() {

    if (this.nuevaReserva.nombre === '' || this.nuevaReserva.apellidos === ''
      ||this.nuevaReserva.email === '' || this.nuevaReserva.tipoCliente === '') {
      this.showWarning();
    } else { 

      this.reservador.realizarReserva(this.nuevaReserva);
      this.reservas.push(this.nuevaReserva);

      this.localStorageService.setItem('reservas', JSON.stringify(this.reservas));
      this.nuevaReserva = {
        id: -1,
        nombre: '',
        apellidos: '',
        email: '',
        tipoCliente: '',
        fechaLlegada: new Date(),
        fechaSalida: new Date()
      };

      
      
      this.visible = false;
      this.showSuccess();
    }

  }

  editarReserva(reserva: Reserva) { 
  }
  eliminarReserva(reserva: Reserva) {

    if (this.reservador.eliminarReserva(reserva.id)) { 

      this.messageService.add({ severity: 'success', summary: 'Eliminada', detail: 'Se ha eliminado exitosamente!' })
    }
    
   }

   

  showDialogReservas() {
    this.visible = true;
  }

  showSuccess() { 
    this.messageService.add({severity: 'success', summary: 'Reservado', detail: 'Se ha reservado exitosamente!'})
  }

  showWarning() { 
    this.messageService.add({severity: 'warn', summary: 'Aviso', detail: 'Termine de llenar todos los campos' })
  }
}

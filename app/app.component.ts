import { Component } from '@angular/core';

interface Child {
  age: number;
  name: string;
  
}


interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  otros?: string | number;
  checkInDate: number | null;
  children: Child[] | null;
}


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  
    <!--
    <div>
    <h1>{{ nombre }}</h1>
    <input type="text" [value] = "nombre" (blur)="onBlur($event)" (input)="handleChange($event)">

    <input type="text" [(ngModel)]="nombre">
    </div>
    -->

    <!--
    <input type="text" #userName>

    <button (click) = "handleClick(userName.value)">Cambiar</button>
    <br>
    <img [src]="pic">
    -->

    <!--
    <div>
      <input type="text" [value]="nombre" (input)="handleInput($event)">

      <div *ngIf="nombre.length > 2">
        Searching for ... {{ nombre }}
      </div>
      
      <div>
        <img *ngIf="show" src="img/logo.svg">

        <button (click)="togleImage()">
            {{show ? 'Ocultar Imagen' : 'Mostrar imagen'}}
        </button>

      </div>
    </div>
    -->

    <h3>
      Airline passengers
    </h3>

    <ul>
      <li *ngFor="let passenger of passengers; let i = index">
        <span class="status"
        [class.checked-in]="passenger.checkedIn"></span>  
        {{ i }} : {{ passenger.fullname}} {{ passenger.lastname }}
      </li>
    </ul>
    <br>
    <h3>Another List</h3>
    <ul>
      <li *ngFor="let passenger of passengers; let i = index">
        <span class="status"
        [ngClass]="{
            'checked-in': passenger.checkedIn,
            'checked-out': !passenger.checkedIn
        }"></span>  
        {{ i }} : {{ passenger.fullname}} {{ passenger.lastname }}

        <!--
        <p>{{ passenger.checkInDate ? (passenger.checkInDate | date:'yMMMMd' | uppercase): 'Pasajero sin CheckedIn' }}</p>
        <pre>{{ passenger | json }}</pre>
        -->


      </li>
    </ul>





    <!--
    <h1>
      Search Passengers
    </h1>

    <div>
      <input type="text" [value]="search" (input)="handleInput($event)">
    </div>

    <ul>
      <li *ngFor="let unPasajero of todosLosPasajeros; let i = index;">
        <div *ngIf="validar(unPasajero)">
          {{i}}-> id:{{ unPasajero.fullname }}, Nombre: {{ unPasajero.fullname}}
        </div>
      </li>
    </ul>

    -->

  `
})

export class AppComponent {

  search: string = '';

  handleInput(event){
    this.search = event.target.value;
  }

  validar(unPasajero: Passenger) {
    return unPasajero.fullname.indexOf(this.search) != -1 ? true: false;
  }

  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }]
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null
  }];
}















// export class AppComponent {
//   pic: string = "img/logo.svg";
//   nombre = "Andres";
//   title: string;
//   show = true;
//   constructor(){
//     this.title = 'Ultimate Angular'
//   }

//   onBlur(event){
//     console.log(event)
//     this.nombre = event.target.value;
//   }

//   handleChange(event){
//     console.log(event)
//     this.nombre = event.target.value;
//   }

//   cambiarNombre(){
//     this.nombre = this.nombre + "!";
//   }


//   handleClick(valor){
//     console.log(valor)
//   }

//   handleInput(event) {
//     this.nombre = event.target.value;
//   }

//   togleImage(){
//     this.show = !this.show;
//   }
// }
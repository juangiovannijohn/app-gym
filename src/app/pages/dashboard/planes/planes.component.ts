import { Component, OnInit } from '@angular/core';
import { PlanesService} from '../../../services/planes.service'

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
nuevoPlanIngresado:string = '';
idPlanSeleccionado:number = NaN;
planesDisponibles: Array<any>= []

  constructor(
    private planesService :PlanesService,
  ) { }

  ngOnInit(): void {
this.getAllPlanes();
  }
  getAllPlanes(){
    this.planesService.getAllPlanes().subscribe({
      next: (resp) => {
        let respuesta = resp;
        for (let i = 0; i < respuesta.length; i++) {
          const element = respuesta[i];
          this.planesDisponibles.push(element)
        }
          console.log(this.planesDisponibles)
        
      },
      error: (err:any) => console.error(err)
    });
  }
  nuevoPlan(event: any){
    this.nuevoPlanIngresado = event.target.value;
  }
  nuevoPlanEnviar(){
    this.planesService.newPlan(this.nuevoPlanIngresado).subscribe({
      next: (resp) => {
        let respuesta = resp;
        console.log(respuesta)},
      error: (err:any) => console.error(err)
    });
  }
  getPlan(){
    this.planesService.getPlan(this.idPlanSeleccionado).subscribe({
      next: (resp) => {
        let respuesta = resp;
        console.log(respuesta)},
      error: (err:any) => console.error(err)
    });
  }

}

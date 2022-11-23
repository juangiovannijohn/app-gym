import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
urlPlanes:string = 'http://localhost:3000/listado_planes';
  constructor(
    private http: HttpClient
  ) { }

  getAllPlanes(){
    return this.http.get(this.urlPlanes).pipe(
      tap((resp) => {}),
      map((resp) => resp),
      catchError((err) => of(err.error.msg))
    );
  }
  getPlan(id:number){
    let params = new HttpParams().set('id', id);
    return this.http.get(this.urlPlanes, {params : params}).pipe(
      tap((resp) => {}),
      map((resp) => resp),
      catchError((err) => of(err.error.msg))
    );
  }

  newPlan(nombre:string){
    return this.http.post(this.urlPlanes, {nombre_plan : nombre}).pipe(
      tap((resp) => {}),
      map((resp) => resp),
      catchError((err) => of(err.error.msg))
    );
  }







}

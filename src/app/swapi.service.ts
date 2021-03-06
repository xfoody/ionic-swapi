import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { merge, race, empty } from 'rxjs';
import { expand } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }


  getPlanets() {
    // const p1 = this.httpSvc.get("https:/swapi.co/api/planets");
    // const p2 = this.httpSvc.get("https:/swapi.co/api/planets/?page=2");

    // return merge(p1, p2);

    return this.httpSvc.get("https:/swapi.co/api/planets").pipe
    (expand(data =>
        (<any>data).next ? this.httpSvc.get((<any>data).next) : empty()
      )
    );
  }
}

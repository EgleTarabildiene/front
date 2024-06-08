import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KmiService {

  constructor(private http: HttpClient) { }

  public sendCalculate(x:number, y:number){
return this.http.post("http://localhost:3998/skaiciuokle/kmi", {
  "x":x,
  "y":y
});
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceListeLivreService {
formData:any=[]
  constructor(private http:HttpClient) { }
  getAllLivre(){
    return this.http.get('http://localhost:8080/listeLivre');
  }
  addLivre(lv:any){
    return this.http.post('http://localhost:8080/addLivre',lv);

  }
  deleteLivre(id:number){
    return this.http.delete('http://localhost:8080/delLivre/'+id);
  }
  updateLivre(lv:any){
    return this.http.put('http://localhost:8080/updateLivre',lv);
  }
  getLivreById(id:number){
    return this.http.get('http://localhost:8080/livreById/'+id);
  }


  

}


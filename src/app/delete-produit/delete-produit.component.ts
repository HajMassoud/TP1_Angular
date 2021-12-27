import { Component, OnInit } from '@angular/core';
import { ServiceListeLivreService} from '../service-liste-livre.service'

@Component({
  selector: 'app-delete-livre',
  templateUrl: './delete-livre.component.html',
  styleUrls: ['./delete-livre.component.css']
})
export class DeleteLivreComponent implements OnInit {
  lv:any={id:0,description:"",qte:0}
  constructor(private serv:ServiceListeLivreService) { }

  ngOnInit(): void {
  }

  Supprimer(){
    this.serv.deleteLivre(this.lv.id).subscribe(
      (data)=>{
        console.log(data);
        
      },
      err=>{

      }
    )

  }

}

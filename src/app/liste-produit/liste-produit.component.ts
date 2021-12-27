import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceListeProduitService} from '../service-liste-Produit.service'

@Component({
  selector: 'app-liste-Produit',
  templateUrl: './liste-Produit.component.html',
  styleUrls: ['./liste-Produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  lv:any=[]
  
  constructor(private serv: ServiceListeProduitService,
     private route:Router,
    ) 
     { 
    this.serv.getAllProduit().subscribe(
      data=>{
        this.lv=data
      },
      err=>{
        
      }
    )
  }

  ngOnInit(): void {
  }
  Supprimer(id:number){
    this.serv.deleteProduit(id).subscribe(
      (data)=>{
        console.log(data);
        
      },
      err=>{

      }
    )

  }
  Edit(l){
    l.qte=prompt().substring(0,10);
    this.serv.updateProduit(l);
  }
}

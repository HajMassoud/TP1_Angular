import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceListeProduitService } from '../service-liste-Produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  lv:any={id:null,description:"",qte:0}
  constructor( private serv:ServiceListeProduitService, private route:Router) { }

  ngOnInit(): void {
  }
  Ajouter(){
    this.serv.addLivre(this.lv).subscribe(
      (data)=>{
        console.log(data);
        this.route.navigate(["/liste"])
      },
      err=>{

      }
    )

  }

}

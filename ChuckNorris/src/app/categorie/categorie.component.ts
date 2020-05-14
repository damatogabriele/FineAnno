import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Categ } from '../categ.model'

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
     
    categ : Categ;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
      this.dataService.sendGetCateRequest().subscribe((data: Categ)=>{
      
    this.categ = data;
    console.log(this.categ);
    
})
  }

}

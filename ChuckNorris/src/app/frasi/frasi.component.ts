import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Frase } from '../frase.model'

@Component({
  selector: 'app-frasi',
  templateUrl: './frasi.component.html',
  styleUrls: ['./frasi.component.css']
})
export class FrasiComponent implements OnInit {
       frase : Frase;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

this.dataService.sendGetRequest().subscribe((data: Frase[])=>{
      console.log(data);
      //this.frase = data;
      console.log(this.frase);
      
      
})
  }

}


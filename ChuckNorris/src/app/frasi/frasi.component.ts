import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-frasi',
  templateUrl: './frasi.component.html',
  styleUrls: ['./frasi.component.css']
})
export class FrasiComponent implements OnInit {
       frase = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.frase = data;
      //JSON.stringify()    per trasformare gli oggetti in json
})
  }

}


import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Frase } from '../frase.model'

@Component({
    selector: 'app-categorie',
    templateUrl: './categorie.component.html',
    styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

    frase: Frase;
    frase1: Frase;
    categ1: boolean = false;
    categ2: boolean = false;


    constructor(private dataService: DataService) { }


    ngOnInit(): void {

        this.dataService.sendGetCate1Request().subscribe((data: Frase) => {

            this.frase = data;
            console.log(this.frase);
        })

        this.dataService.sendGetCate2Request().subscribe((data: Frase) => {

            this.frase1 = data;
            console.log(this.frase1);
        })


    }

    cat1(): void {

        this.categ1 = true

    }

    cat2(): void {

        this.categ2 = true
    }

}

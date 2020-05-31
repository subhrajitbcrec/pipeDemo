import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-pipes',
  templateUrl: './basic-pipes.component.html',
  styleUrls: ['./basic-pipes.component.css']
})
export class BasicPipesComponent implements OnInit {

  price: number;
  dateVal: Date;
  pi: number;
  jsonVal: Object;

  name: string;

  constructor() { }

  ngOnInit(): void {
    this.price = 10000;
    this.dateVal = new Date();
    this.pi = 3.14159265;
    this.name = 'Subhrajit Banerjee';
    this.jsonVal={ moo: 'foo', goo: { too: 'new' }};
  }

}

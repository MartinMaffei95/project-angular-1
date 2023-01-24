import { Component, OnInit } from '@angular/core';
import { allPizzas } from 'src/data/pizzas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-first-project';
  public pizzas: Array<any> = [];
  ngOnInit(): void {
    this.pizzas = allPizzas;
  }
}

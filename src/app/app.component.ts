import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='';
  car:CarModel={
    brand: 'Ford',
    model:'Focus',
    year: 2021

  }

}

interface CarModel{
  brand: String;
  model: String;
  year: number;
}
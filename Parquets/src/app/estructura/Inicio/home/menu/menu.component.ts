import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.addEventListener('load', () => {
      let temperatura = <HTMLInputElement>(
        document.getElementById('temperatura')
      );
      let city = <HTMLInputElement>document.getElementById('ubicacion');

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&lang=es&units=metric&appid=be81b26eab233986b2ba5008439de584`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let weather = data.weather[0].description;
          let location = data.name;
          temperatura.textContent = `${weather}`;
          city.textContent = `${location}`;

          console.log(data.weather[0].description);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
}

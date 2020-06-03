import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartwo';
  profileData = [
    {
      imageUrl: "http://placehold.it/200x180?text=Image 1",
      userName: "Person 1",
      price: 100,
      stock: true
    },
    {
      imageUrl: "http://placehold.it/200x180?text=Image 2",
      userName: "Person 2",
      price: 200,
      stock: false
    },
    {
      imageUrl: "http://placehold.it/200x180?text=Image 3",
      userName: "Person 3",
      price: 300,
      stock: true
    },
    {
      imageUrl: "http://placehold.it/200x180?text=Image 4",
      userName: "Person 4",
      price: 400,
      stock: false
    }
  ]
}

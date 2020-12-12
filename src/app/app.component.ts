import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [{
    title: 'Neat Tree',
    image_url: 'assets/tree.jpeg',
    username: 'nature',
    content: 'I saw this neat tree today'
  }, {
    title: 'Snowy Mountain',
    image_url: 'assets/mountain.jpeg',
    username: 'mountainlover',
    content: 'Here is picture of snowy mountain'
  }, {
    title: 'Mountain Biking',
    image_url: 'assets/biking.jpeg',
    username: 'biking222',
    content: 'I done some biking today'
  }];
}

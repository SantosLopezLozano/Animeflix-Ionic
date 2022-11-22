import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'My Animes', url: '/folder/MyAnimes', icon: 'heart' },
    { title: 'Genres', url: '/folder/Genres', icon: 'archive' },
    { title: 'Settings', url: '/folder/Settings', icon: 'settings' },
    { title: 'About', url: '/folder/About', icon: 'warning' },
  ];
  constructor() {}
}

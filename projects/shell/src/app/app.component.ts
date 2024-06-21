import { Component, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./lib/component/header/header.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent]
})

@Injectable({providedIn: 'root'})
export class AppComponent {
  title = 'shell';

  constructor() {

  }
}

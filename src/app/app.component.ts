import { Component } from '@angular/core';
import rainbowSDK from 'rainbow-web-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rainbow Web SDK - Angular Starter Kit';
  version = `Package version: ${rainbowSDK.version()}`;
}

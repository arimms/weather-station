import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <nav-component></nav-component>
  <div class="container">
      <station-select></station-select>
      <station-list></station-list>
  </div>
  `
})
export class AppComponent { }

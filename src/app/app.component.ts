import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Magic Upload Demo</h1>
    <magic-upload></magic-upload>
    
    <h3>Ng Prime</h3>
    <p-fileUpload 
      name="myfile[]" 
      url="http://localhost:3000/api" 
      multiple="multiple">      
    </p-fileUpload>
  </div>
  `})
export class AppComponent {
  title = 'app';
}

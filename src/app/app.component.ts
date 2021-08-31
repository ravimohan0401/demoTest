import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test is done';
  arr = [1,2,3,4];
  personName:String = "ravi";
  setButton(){
    this.personName = "Chandran";
    console.log("Set button clicked");
  }
}

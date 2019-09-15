import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  countries = new FormControl();
  countryList: string[] = ['India','USA','Japan'];

  locations = new FormControl();
  locationList: string[] = ['Bangalore','Minnestona','Yokohama'];
}

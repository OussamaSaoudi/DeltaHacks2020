import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  word;
  time;
  postData;
  postTime;
  data = [{word: '', time: ''}];
  sendData: [{}]
  constructor(private api: ApiService){
    this.getData();
  }

  getData = () => {
    this.api.getDataPoints().subscribe(
      data => {
        this.data = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateData = () => {
    this.api.updateData(this.data).subscribe(
      data => {
        this.data = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  postData = () => {
    this.api.postData(this.data).subscribe(
      data => {
        this.data.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}


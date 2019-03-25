import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private users: object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getUsers().subscribe( data => {
      console.log('We have new Data!!!!');
      this.users = data;
    });
  }

  firstClick() {
    this.data.firstClick();
  }

}

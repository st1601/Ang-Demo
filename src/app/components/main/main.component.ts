import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  name: string = 'Bin';
  googleURL: string = 'http://google.com';
  colSpan = 2;
  count: number = 0;
  constructor() {}

  ngOnInit(): void {}
  onBtnClick() {
    console.log('Clicked');
  }

  BtnR() {
    // this.count = this.count - 1;
    this.count -= 1;
  }
  BtnA(event) {
    console.log('event');
    this.count = this.count + 1;
  }
}

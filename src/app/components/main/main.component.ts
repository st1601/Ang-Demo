import { Component, OnInit } from '@angular/core';
interface TodoType {
  id: number;
  content: string;
  complete: boolean;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  name: string = 'Bin';
  listTodo: string[] = ['Todo 1', 'Todo 2', 'Todo 3'];
  listTodoB: TodoType[] = [
    {
      id: 1,
      content: 'todo 1',
      complete: false,
    },
    {
      id: 2,
      content: 'todo 2',
      complete: false,
    },
    {
      id: 3,
      content: 'todo 3',
      complete: false,
    },
    {
      id: 4,
      content: 'todo 4',
      complete: false,
    },
  ];
  googleURL: string = 'http://google.com';
  colSpan = 2;
  count: number = 0;
  temp: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  onBtnClick() {
    console.log('Clicked');
  }
  onClick() {
    this.listTodo.push(this.name);
    this.name = '';
  }

  BtnR() {
    // this.count = this.count - 1;
    this.count -= 1;
  }
  BtnD(content) {
    this.listTodoB = this.listTodoB.filter((item) => item.content !== content);
  }
  BtnC(id: number) {
    const Bin = this.listTodoB.findIndex((value) => {
      return value.id === id;
    });
    this.listTodoB[Bin].content = this.listTodoB[Bin].content + ' (complete)';
  }
  BtnA(event) {
    console.log('event');
    this.count = this.count + 1;
  }
}

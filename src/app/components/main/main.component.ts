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
  selectedNavTab = 'tab1';
  temp: boolean = false;
  userName = 'Bin Son';
  newTodo: string = '';
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
  BtnTab(value) {
    this.selectedNavTab = value;
  }
  getTitle() {
    return 'Count :';
  }
  onBlur() {
    console.log(this.userName);
  }
  deleteTodo(index) {
    this.todos.splice(index, 1);
  }
  addNewTodo(input) {
    console.log(input.value);
    this.todos.push({
      userID: 1,
      title: this.newTodo,
      completed: false,
    });
  }
  toogleTodo(i) {
    this.todos[i].completed = !this.todos[i].completed;
  }
  todos: {
    userID: number;
    id?: number | string;
    title: string;
    completed: boolean;
  }[] = [
    {
      userID: 1,
      id: 1,
      title: 'Bin',
      completed: false,
    },
    {
      userID: 1,
      id: 2,
      title: 'Son',
      completed: false,
    },
    {
      userID: 1,
      id: 3,
      title: 'Nguyen',
      completed: false,
    },
    {
      userID: 1,
      id: 4,
      title: 'Thi',
      completed: true,
    },
    {
      userID: 1,
      id: 5,
      title: 'Tran',
      completed: false,
    },
  ];
}

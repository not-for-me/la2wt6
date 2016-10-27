import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'todo-add',
  styles: [`
    .toolbar-filler {
      flex: 1 1 auto;
    }
  `],
  template: `
  <md-toolbar color="primary">
    <span>할 일 추가하기</span>
    <span class="toolbar-filler"></span>
    <md-icon class="md-24" (click)="dialogRef.close()">clear</md-icon>  
  </md-toolbar>
  <md-input placeholder="할일 입력" type="text" 
    [(ngModel)]="todoContent" (keyup.enter)="addNewTodo()"></md-input>
  <button md-raised-button (click)="addNewTodo()">할 일 추가</button>
  `
})
export class TodoAddDialogComponent {
  todoContent: string;

  constructor(public dialogRef: MdDialogRef<TodoAddDialogComponent>) { }

  addNewTodo() {
    this.dialogRef.close(this.todoContent);
  }
}
import { Component, ViewContainerRef } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { TodoAddDialogComponent } from './todo-add-dialog.component';

export interface TodoItem {
  content: string;
  createdAt: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dialogRef: MdDialogRef<TodoAddDialogComponent>;
  todos: FirebaseListObservable<TodoItem[]>;

  constructor(
    private af: AngularFire,
    public dialog: MdDialog,
    public viewContainerRef: ViewContainerRef
  ) {
    this.todos = af.database.list('/todos');
  }

  openDialog() {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialogRef = this.dialog.open(TodoAddDialogComponent, config);

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      if (result) {
        this.addNewTodo(result);
      }
      this.dialogRef = null;
    });
  }

  addNewTodo(todoContent: string) {
    if (todoContent === '') return;
    const newTodo = {
      content: todoContent,
      createdAt: (new Date()).toString()
    };
    this.todos.push(newTodo);
  }

  removeTodo(key) {
    this.todos.remove(key);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [TaskListComponent, TaskComponent],
  imports: [CommonModule],
  exports: [TaskListComponent, TaskComponent],
})
export class TaskListModule {}

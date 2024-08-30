import { Component, inject, Inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import {
  ITasksService,
  TasksServiceProvider,
  TasksServiceToken,
} from '../tasks.service';
import { TASK_STATUS_OPTIONS, taskStatusOptionsProvider } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [taskStatusOptionsProvider],
})
export class TasksListComponent {
  selectedFilter = 'all';
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);

  get tasks() {
    switch (this.selectedFilter) {
      case 'all':
        return this.tasksService.allTasks;
      case 'open':
        return this.tasksService.allTasks.filter((t) => t.status === 'OPEN');
      case 'in-progress':
        return this.tasksService.allTasks.filter(
          (t) => t.status === 'IN_PROGRESS'
        );
      case 'done':
        return this.tasksService.allTasks.filter((t) => t.status === 'DONE');
      default:
        return this.tasksService.allTasks;
    }
  }

  constructor(@Inject(TasksServiceToken) private tasksService: ITasksService) {}

  onChangeTasksFilter(filter: string) {
    this.selectedFilter = filter;
  }
}

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {
  ITasksService,
  TasksService,
  TasksServiceProvider,
  TasksServiceToken,
} from './app/tasks/tasks.service';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [TasksServiceProvider],
}).catch((err) => console.error(err));
// bootstrapApplication(AppComponent, {
//   providers: [LoggingService],
// }).catch((err) => console.error(err));

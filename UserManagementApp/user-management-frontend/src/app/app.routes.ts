import { Route } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

export const routes: Route[] = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-users', component: ListUsersComponent },
  { path: '', redirectTo: '/add-user', pathMatch: 'full' }
];

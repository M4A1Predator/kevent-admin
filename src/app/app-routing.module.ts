import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { AuthComponent } from './auth/auth.component'
import { HomeComponent } from './home/home.component'

import { EventsPageComponent } from './events/events-page/events-page.component'
import { EventAddComponent } from './events/event-add/event-add.component'

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login', component: AuthComponent, pathMatch: 'full' },
  { path: 'events', component: EventsPageComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'events/add', component: EventAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

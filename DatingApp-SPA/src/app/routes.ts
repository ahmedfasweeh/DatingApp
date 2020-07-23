

import {Routes} from '@angular/router';
import  {HomeComponent} from './home/home.component';
import{MemberListComponent} from  './members/member-list/member-list.component';
import{MessagesComponent} from './messages/messages.component';
import{MemberDetailComponent} from  './members/member-detail/member-detail.component';
import{ListsComponent} from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemmberDetailResolver } from './_resolvers/member-detail.resolver';

export const appRoutes: Routes= [
  {path : 'home', component: HomeComponent  },
   {path : 'members', component: MemberListComponent,canActivate:[AuthGuard]},
   {path : 'members/:id', component: MemberDetailComponent,canActivate:[AuthGuard],resolve:{user:MemmberDetailResolver}},
    {path : 'messages', component: MessagesComponent,canActivate:[AuthGuard]},
   {path : 'lists', component: ListsComponent,canActivate:[AuthGuard]},
    //{path : '**', redirectTo:'home',pathMatch:'full'},
];

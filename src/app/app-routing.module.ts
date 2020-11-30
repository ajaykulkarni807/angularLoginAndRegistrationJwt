import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { MasterPaymmentComponent } from './payment-details/master-paymment/master-paymment.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  // {
  //   path: 'user', component: UserComponent,
  //   children: [
  //     { path: 'registration', component: RegistrationComponent },
  //     { path: 'login', component: LoginComponent }
  //   ]
  // },
  {
    //this is lazy laoding syntax Note: please do not load same module in app.module.ts file or any wherer
    path: "user",
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'forbidden', component: ForbiddenComponent },
  // {
  //   path: 'admin', component: AdminPanleComponent, canActivate: [AuthGuard], data: { permittedRoles: ['Admin'] }
  // },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    canActivate: [AuthGuard],
    data: { permittedRoles: ['Admin'] }
  },
  {
    path: 'payment', component: MasterPaymmentComponent, canActivate: [AuthGuard], data: { permittedRoles: ['Admin'] }
  },
  {
    path: "parent", component: ParentComponent
  },
  {
    path: "**", component: PageNotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

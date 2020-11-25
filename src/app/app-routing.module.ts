import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanleComponent } from './admin-panle/admin-panle.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MasterPaymmentComponent } from './payment-details/master-paymment/master-paymment.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/registration', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'adminpanle', component: AdminPanleComponent, canActivate: [AuthGuard], data: { permittedRoles: ['Admin'] }
  },
  {
    path: 'payment', component: MasterPaymmentComponent, canActivate: [AuthGuard], data: { permittedRoles: ['Admin'] }
  },
  {
    path:"**",component:PageNotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

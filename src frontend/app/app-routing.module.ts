import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './auth/admin-guard.guard';
import { NormaluserGuard } from './auth/normaluser.guard';
import { AdminPanelComponent } from './components/dashboard/admin/admin-panel/admin-panel.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { UserComponent } from './components/dashboard/user/user.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MedicinePageComponent } from './components/pages/medicine-page/medicine-page.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { AddMedicineComponent } from './components/partial/add-medicine/add-medicine.component';
import { UpdateMedicineComponent } from './components/partial/update-medicine/update-medicine.component';
import { ViewComponent } from './components/partial/view/view.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'user-dashboard/search/:searchTerm', component: UserComponent },
  {
    path: 'user-dashboard/:productId',
    component: MedicinePageComponent,
  },
  { path: 'cart-page', component: CartPageComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuardGuard],
    children: [
      {
        path: '',
        component: AdminPanelComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'view',
        component: ViewComponent,
      },
      {
        path: 'add-medicine',
        component: AddMedicineComponent,
      },
      {
        path: 'view/:productId',
        component: UpdateMedicineComponent,
      },
    ],
  },
  {
    path: 'user-dashboard',
    component: UserComponent,
    canActivate: [NormaluserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

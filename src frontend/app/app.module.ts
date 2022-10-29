import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/partial/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { authInterceptorProvider } from './services/auth.interceptor';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { UserComponent } from './components/dashboard/user/user.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './components/dashboard/admin/sidebar/sidebar.component';
import { AdminPanelComponent } from './components/dashboard/admin/admin-panel/admin-panel.component';
import { MatTableModule } from '@angular/material/table';
import { ViewComponent } from './components/partial/view/view.component';
import { AddMedicineComponent } from './components/partial/add-medicine/add-medicine.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UpdateMedicineComponent } from './components/partial/update-medicine/update-medicine.component';
import { SearchComponent } from './components/partial/search/search.component';
import { MedicinePageComponent } from './components/pages/medicine-page/medicine-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partial/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AdminComponent,
    UserComponent,
    ProfileComponent,
    SidebarComponent,
    AdminPanelComponent,
    ViewComponent,
    AddMedicineComponent,
    UpdateMedicineComponent,
    SearchComponent,
    MedicinePageComponent,
    CartPageComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule,
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

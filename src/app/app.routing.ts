import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import {EmployeeComponent} from './employee/employee.component';
import { ProductComponent } from './products/product.component';
import {PageNotFoundComponent} from './others/pageNotFound.component'

const appRoutes: Routes =
[
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'employee', component: EmployeeComponent},

    {path: 'productdetails', component: ProductComponent},

    // otherwise redirect to home
    {path: '**', component: PageNotFoundComponent},
];

export const routing = RouterModule.forRoot(appRoutes);


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrandsComponent } from './components/brands/brands.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './shared/guards/auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ProductsComponent } from './components/products/products.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetcodeComponent } from './components/resetcode/resetcode.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',
  canActivate:[authGuard],
  component:BlankLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', component:HomeComponent,title:'HomePage'},
    {path:'details/:id',component:DetailsComponent,title:'DetailsPage'},
    {path:'cart',component:CartComponent,title:'CartPage'},
    {path:'products',component:ProductsComponent,title:'Products'},
    {path:'categories',component:CategoriesComponent,title:'CategoryPage'},
    {path:'allorders',component:AllordersComponent,title:"All Orders"},
    {path:'checkout/:id',component:CheckoutComponent,title:'CheckoutPage'},
    {path:'brands',component:BrandsComponent,title:'BrandsPage'},
    {path:'wishlist',component:WishlistComponent},

  ]},
  {path:'',component:AuthLayoutComponent,children:[
    {path:'login',component:LoginComponent,title:'LoginPage'},
    {path:'register',component:RegisterComponent,title:'RegisterPage'},
    {path:'forgotPassword',component:ForgotpasswordComponent},
    {path:'resetCode',component:ResetcodeComponent},
    {path:'resetPassword',component:ResetpasswordComponent}
  ]},
  {path:'**',component:NotfoundComponent,title:'ErorPage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

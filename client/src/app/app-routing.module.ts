import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},  
  {path:'register',component:RegisterComponent},
  {path:'form',component:FormComponent},
  {path:'view',component:ViewComponent},
  {path:'admin',component:AdminComponent}
  // {path:'',redirectTo:'home',pathMatch:'full'},
 // {path:' ', component:Pagenotfoundcomponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]



  
})
export class AppRoutingModule { }

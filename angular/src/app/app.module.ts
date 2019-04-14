import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageService } from './services/page.service';
import { PagesComponent } from './components/pages/pages.component';
import { Title } from '@angular/platform-browser';
import { UserService } from './services/user.service';

const appRoutes: Routes = [
  {path: ':page', component: PagesComponent},
  {path: '', component: PagesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ PageService, Title, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

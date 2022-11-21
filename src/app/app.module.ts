import { NewPostComponent } from './components/new-post/new-post.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NewPostComponent,
    PostComponent,
    ProfileComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ]
})
export class AppModule { }

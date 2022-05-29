import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { BlogbodyComponent } from './blogbody/blogbody.component';
import { QuoteTileComponent } from './quote-tile/quote-tile.component';
import { ProfileBodyComponent } from './profile-body/profile-body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { FloatNavComponent } from './float-nav/float-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogbodyComponent,
    QuoteTileComponent,
    ProfileBodyComponent,
    NavbarComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    FooterComponent,
    FloatNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

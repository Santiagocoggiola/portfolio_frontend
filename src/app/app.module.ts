import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from 'ng-particles';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticleBackgroundComponent } from './components/particle-background/particle-background.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/nav-bar/nav-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticleBackgroundComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgParticlesModule,
    BrowserAnimationsModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

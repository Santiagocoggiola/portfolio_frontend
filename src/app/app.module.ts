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
import { CardContainerComponent } from './components/card-container/card-container.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from '@angular/cdk/dialog';
import { DialogModule as PrimeNgDialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {ReactiveFormsModule} from '@angular/forms';
import { CardEditModalComponent } from './components/card-edit-modal/card-edit-modal.component';
import { EducationComponent } from './components/education/education.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutMeEditComponent } from './components/about-me-edit/about-me-edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterEditComponent } from './components/footer-edit/footer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticleBackgroundComponent,
    NavbarComponent,
    CardComponent,
    CardContainerComponent,
    SideBarComponent,
    CardEditModalComponent,
    EducationComponent,
    ExperienceComponent,
    AboutMeComponent,
    AboutMeEditComponent,
    FooterComponent,
    FooterEditComponent,
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
    PanelMenuModule,
    SidebarModule,
    DialogModule,
    FileUploadModule,
    ReactiveFormsModule,
    PrimeNgDialogModule,
    MessagesModule,
    MessageModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

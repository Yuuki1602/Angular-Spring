import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { TableModule } from 'primeng/table';
import { StudentService } from './Services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import {MessagesModule} from 'primeng/messages';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    PanelModule,
    InputTextModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule,
    ButtonModule,
    MessagesModule,
    ToastModule
  ],
  providers: [StudentService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

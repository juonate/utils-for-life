import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// --- Módulos de Angular Material ---
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



import { App } from './app';

// Importamos nuestro nuevo módulo
import { Base64DecoderComponent } from './components/base64-decoder/base64-decoder';
import { AppRoutingModule } from './app-routing.module';
import { Base64Encoder } from './components/base64-encoder/base64-encoder';
import { FormsModule } from '@angular/forms';
import { MainLayoutComponent } from './layout/main-layout/main-layout';

@NgModule({
  declarations: [
    App,
    MainLayoutComponent,
    Base64DecoderComponent,
    Base64Encoder
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // Material Modules
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import esPE from '@angular/common/locales/es-PE';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapModule } from './bootstrap/bootstrap.module';
import { SharedModule } from './shared/shared.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './features/header/header.component';
import { AlertaComponent } from './shared/components/alert/alert.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(esPE);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgBootstrapModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    NgbActiveModal,
    { provide: LOCALE_ID, useValue: 'es-PE' }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

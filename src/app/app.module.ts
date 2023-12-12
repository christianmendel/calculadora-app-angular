import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculadoraService } from './services/calculadora.service';

@NgModule({
  declarations: [AppComponent, CalculadoraComponent],
  imports: [BrowserModule, FormsModule],
  providers: [CalculadoraService],
  bootstrap: [AppComponent],
})
export class AppModule {}

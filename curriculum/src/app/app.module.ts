import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LineMenuComponent } from './components/line-menu/line-menu.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { CursoComponent } from './components/curso/curso.component';
import { UniversidadeComponent } from './components/universidade/universidade.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { HobbyComponent } from './components/hobby/hobby.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LineMenuComponent,
    ExperienciaComponent,
    CursoComponent,
    UniversidadeComponent,
    RodapeComponent,
    HobbyComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

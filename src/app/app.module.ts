import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent} from './navbar/navbar.component';
import { VeranstaltungenComponent } from './veranstaltungen/veranstaltungen.component';
import { VereinsinfoComponent } from './vereinsinfo/vereinsinfo.component';
import { ChronikComponent } from './chronik/chronik.component';
import { GedenkenComponent } from './gedenken/gedenken.component';
import { FotosComponent } from './fotos/fotos.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VeranstaltungenComponent,
    VereinsinfoComponent,
    ChronikComponent,
    GedenkenComponent,
    FotosComponent,
    ImpressumComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

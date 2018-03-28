import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

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
import { NewslistComponent } from './newslist/newslist.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'veranstaltungen', component: VeranstaltungenComponent},
  {path: 'vereinsinfo', component: VereinsinfoComponent},
  {path: 'chronik', component: ChronikComponent},
  {path: 'gedenken', component: GedenkenComponent},
  {path: 'fotos', component: FotosComponent},
  {path: 'impressum', component: ImpressumComponent},
]


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
    NewslistComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2CarouselamosModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

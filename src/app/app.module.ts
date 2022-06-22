import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component';
import {EntryComponent} from './components/entry/entry.component';
import {SanitizePagesPipe} from './sanitize-pages.pipe';
import {HomepageComponent} from './homepage/homepage.component';
import {BibpageComponent} from './bibpage/bibpage.component';
import {NavComponent} from './nav/nav.component';
import {HeadingComponent} from './heading/heading.component';
import {CvComponent} from './cv/cv.component';
import {FooterComponent} from './footer/footer.component';
import {BibPrintComponent} from './bib-print/bib-print.component';
import { EntryPrintComponent } from './components/entry-print/entry-print.component'

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    SanitizePagesPipe,
    HomepageComponent,
    BibpageComponent,
    NavComponent,
    HeadingComponent,
    CvComponent,
    FooterComponent,
    BibPrintComponent,
    EntryPrintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component';
import { EntryComponent } from './components/entry/entry.component';
import { SanitizePagesPipe } from './sanitize-pages.pipe'

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    SanitizePagesPipe,
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

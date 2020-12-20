import {Component, OnInit} from '@angular/core'

import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs'

import {map, tap} from 'rxjs/operators'

import {BibtexParser} from 'src/app/lib/Parser'
import {BibtexEntry, compareEntries} from './lib/BibtexEntry'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'guenter-hotz'

  constructor(private http: HttpClient) {

  }

  public ngOnInit() {
    this.bib$ = this.http.get('assets/guenter_hotz.bib', {responseType: 'text'}).pipe(
      map(x => x.replace(`"u`, `"{u}`)), // TODO
      map(x => x.replace(`"a`, `"{a}`)), // TODO
      map(x => x.replace(`"o`, `"{o}`)), // TODO
      map(x => BibtexParser(x)),
      map(x => x.entries),
      map(x => x.sort(compareEntries)),
      tap(console.log),
    )
  }

  public bib$: Observable<BibtexEntry[]>

}

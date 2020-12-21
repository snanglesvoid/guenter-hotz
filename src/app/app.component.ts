import {Component, OnInit} from '@angular/core'

import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs'

import {map, tap} from 'rxjs/operators'

import {BibtexParser} from 'src/app/lib/Parser'
import {BibtexEntry, compareEntries, trimFields} from './lib/BibtexEntry'

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
      map(x =>
        x
          .replace(/\\\"u/g, '{\\\"{u}}')
          .replace(/\\\"a/g, '{\\\"{a}}')
          .replace(/\\\"o/g, '{\\\"{o}}')
          .replace(/\\\"U/g, '{\\\"{U}}')
          .replace(/\\\"A/g, '{\\\"{A}}')
          .replace(/\\\"O/g, '{\\\"{O}}'),
      ),
      map(x => BibtexParser(x)),
      map(x => x.entries),
      map(x => x.sort(compareEntries)),
      map(x => x.map((y: BibtexEntry) => trimFields(y))),
      tap(console.log),
    )
  }

  public bib$: Observable<BibtexEntry[]>

}

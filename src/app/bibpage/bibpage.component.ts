import {Component, OnInit} from '@angular/core'

import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs'

import {map, share, tap} from 'rxjs/operators'

import {BibtexParser} from 'src/app/lib/Parser'
import {BibtexEntry, compareEntries, parse, trimFields} from '../lib/BibtexEntry'

@Component({
  selector: 'app-root',
  templateUrl: './bibpage.component.html',
  styleUrls: ['./bibpage.component.css'],
})
export class BibpageComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  public ngOnInit() {
    this.bib$ = this.http.get('assets/hotz-forWeb.bib', {responseType: 'text'}).pipe(
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
      map(x => {
        x.forEach((y: any) => {
          y.Fields = parse(y.Fields)
        })
        return x
      }),
      tap(console.log),
      share(),
    )

    this.bibByDecade = this.decades
      .map(decade => this.getBibByDecade(decade))
  }

  public decades = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
    .map(x => ({start: x, end: x + 10}))
    .reverse()

  public bib$: Observable<BibtexEntry[]>

  public getBibByDecade(decade: {start: number, end: number}): Observable<BibtexEntry[]> {
    return this.bib$.pipe(
      map(xs => xs.filter(x =>
        +x.Fields.Year >= decade.start && +x.Fields.Year < decade.end,
      )),
    )
  }

  public goToDecade(decade: any) {
    const id = `${decade.start}`
    const target = document.getElementById(id)
    const top = target.offsetTop
    window.scrollTo(0, top - 235)
  }

  public bibByDecade: Observable<BibtexEntry[]>[]

  public decadeTitle(decade: any) {
    if (decade.start === 2010) {
      return '2010++'
    } else {
      return `${decade.start}–${decade.end}`
    }
  }
}

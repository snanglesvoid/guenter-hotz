import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'

import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class BibtexService {

  constructor(private http: HttpClient) {
    this.createDictionary()
  }

  private bibtex$: Observable<string> = this.http.get('assets/guenter_hotz.bib', {responseType: 'text'})

  private dict: object

  private async createDictionary() {
    if (this.dict) {
      return
    }
    this.dict = {}
    const tex = await this.bibtex$.toPromise()
    const paragraphs = tex.split('\n\n')
    paragraphs.forEach(paragraph => {
      const id = /{([^,]*)/.exec(paragraph)[1]
      this.dict[id] = paragraph
        .split('\n')
        .filter(x => x.indexOf('Abstract') !== 1)
        .filter(x => x.indexOf('Pdf') !== 1)
        .join('\n')
    })
  }

  public getBibtex(id: string): string {
    return this.dict[id]
  }
}

import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import {DomSanitizer} from '@angular/platform-browser'
import {BibtexService} from 'src/app/bibtex.service'
import {BibtexEntry, displayAuthor, parseAuthors} from 'src/app/lib/BibtexEntry'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryComponent implements OnInit {

  @Input() public entry: BibtexEntry

  constructor(private bibtex: BibtexService, private sanitizer: DomSanitizer) {}

  public ngOnInit(): void {
  }

  public get authors() {
    return parseAuthors(this.entry.Fields.Author).map(displayAuthor).join('; ')
  }

  public get editors() {
    return this.entry.Fields.Editor
      ? parseAuthors(this.entry.Fields.Editor).map(displayAuthor).join('; ')
      : ''
  }

  public get pdfLink() {
    return this.sanitizer.bypassSecurityTrustUrl(`assets/pdf/${this.entry.Fields.Pdf}`)
  }

  public bibtexOpen = false
  public toggleBibtex() {
    this.bibtexOpen = !this.bibtexOpen
    if (this.bibtexOpen) {this.abstractOpen = false}
  }

  public abstractOpen = false
  public toggleAbstract() {
    this.abstractOpen = !this.abstractOpen
    if (this.abstractOpen) {this.bibtexOpen = false}
  }

  public get bibtexText() {
    return this.bibtex.getBibtex(this.entry.EntryKey)
  }

}

import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import {BibtexEntry, displayAuthor, parseAuthors} from 'src/app/lib/BibtexEntry'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryComponent implements OnInit {

  @Input() public entry: BibtexEntry

  constructor() {}

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

}

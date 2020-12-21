export type EntryType
  = 'inproceedings'
  | 'proceedings'
  | 'article'
  | 'techreport'
  | 'misc'
  | 'mastersthesis'
  | 'book'
  | 'phdthesis'
  | 'incollection'
  | 'unpublished'
  | 'inbook'
  | 'manual'
  | 'periodical'
  | 'booklet'
  | 'masterthesis'
  | 'conference'
  | 'online'

export interface BibtexFields {
  Author: string
  Year: string
  Title: string
  Abstract?: string
  Editor?: string
  Booktitle?: string
  Doi?: string
  Keywords?: string
  Month?: string
  Journal?: string
  Pages?: string
  Pagenumber?: string
  Pdf?: string
  Isbn?: string
  Publisher?: string
  Series?: string
  Institution?: string
  School?: string
  Volume?: string
  Number?: string
  Howpublished?: string
}

export interface BibtexEntry {
  ObjectType: 'BibtexEntry'
  EntryType: EntryType
  EntryKey: string
  Fields: BibtexFields
}

export interface Author {
  firstname: string
  lastname: string
}

export const parseAuthors: (authorString: string) => Author[] =
  authorString => authorString ? authorString
    .split('and')
    .map(x => x.trim())
    .map(abbreviateName)
    : []

export const capitalize: (str: string) => string =
  str => str.charAt(0).toUpperCase() + str.slice(1)

export const abbreviateName: (name: string) => Author =
  name => {
    const xs = name.split(' ')
    if (xs[xs.length - 1].length <= 2) {
      return {
        firstname: capitalize(xs[xs.length - 1][0]),
        lastname: capitalize(xs[0]),
      }
    } else {
      return {
        firstname: capitalize(xs[0]),
        lastname: capitalize(xs[xs.length - 1]),
      }
    }
  }

export const displayAuthor: (author: Author) => string =
  author => `${author.lastname}, ${author.firstname[0]}`

export const compareEntries: (a: BibtexEntry, b: BibtexEntry) => number =
  (a, b) =>
    +a.Fields.Year > +b.Fields.Year ? -1 :
      +a.Fields.Year < +b.Fields.Year ? 1 : 0

export const parseKeywords: (keywordsString: string) => string[] =
  keywordsString => keywordsString.split(',').map(x => x.trim())

export const trimFields: (entry: BibtexEntry) => BibtexEntry =
  entry => {
    const keys = Object.keys(entry.Fields)
    for (const key of keys) {
      entry.Fields[key] = entry.Fields[key].trim()
    }
    return entry
  }

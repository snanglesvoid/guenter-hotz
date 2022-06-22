import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {BibpageComponent} from './bibpage/bibpage.component'
import {CvComponent} from './cv/cv.component'
import {HomepageComponent} from './homepage/homepage.component'
import {BibPrintComponent} from './bib-print/bib-print.component'

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'publications',
    component: BibpageComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: 'bib-print',
    component: BibPrintComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'sanitizePages',
})
export class SanitizePagesPipe implements PipeTransform {

  public transform(value: string): string {
    return value.replace('--', '–')
  }

}

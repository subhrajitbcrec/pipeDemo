import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beautifyName'
})
export class BeautifyNamePipe implements PipeTransform {

  transform(value: string, before: string, after: string): string {
    const newStr = `${before} ${value} ${after}`;
    return newStr;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNames'
})
export class FilterNamesPipe implements PipeTransform {

  transform(allNames: string[]) {
    return allNames.filter(name => name !== "Subhrajit");
  }

}

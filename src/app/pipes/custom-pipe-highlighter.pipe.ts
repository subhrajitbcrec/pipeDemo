import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipeHighlighter'
})
export class CustomPipeHighlighterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

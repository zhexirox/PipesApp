import { Pipe, PipeTransform } from '@angular/core';

// manuel | toggleCase = 'MANUEL'
// MANUEL | toogleCase = 'manuel'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string,  toUpper: boolean = false): string {
    return (toUpper)
      ? value.toUpperCase()
      : value.toLocaleLowerCase();
    return value.toUpperCase();
  }

}

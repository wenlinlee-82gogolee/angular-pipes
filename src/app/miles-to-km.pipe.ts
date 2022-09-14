import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milesToKm',
})
export class MilesToKmPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    console.log(value);
    if (value) {
      return value * 1.60934;
    }
    return;
  }
}

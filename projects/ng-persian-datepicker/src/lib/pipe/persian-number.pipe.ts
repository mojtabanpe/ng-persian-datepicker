import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persianNumber',
})
export class PersianNumberPipe implements PipeTransform {
  transform(value: any): string {
    // let isZeroFirst = false;
    let result: string = value != null ? value.toString() : '';
    // if (result.startsWith('0')) {
    //     isZeroFirst = true;
    // }
    result = result.replace(/[1234567890]/g, (c) => {
      return {
        1: '۱',
        2: '۲',
        3: '۳',
        4: '۴',
        5: '۵',
        6: '۶',
        7: '۷',
        8: '۸',
        9: '۹',
        0: '۰'
      }[c] as string;
    });
    // if (isZeroFirst) {
    //     result = '۰' + result;
    // }
    return result;
  }
}
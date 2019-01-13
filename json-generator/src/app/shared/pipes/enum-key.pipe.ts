import { Pipe, PipeTransform } from '@angular/core';
// from https://stackoverflow.com/a/35750252/1984657
@Pipe({
  name: 'enumKey'
})
export class EnumKeyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const keys = [];
    for (const enumMember in value) {
      if (!isNaN(parseInt(enumMember, 10))) {
        // from https://stackoverflow.com/a/25452019/1984657
        const name = value[enumMember].replace(/([A-Z])/g, ' $1').trim();

        keys.push({key: enumMember, value: name});
      }
    }
    return keys;
  }
}

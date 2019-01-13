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
        keys.push({key: enumMember, value: value[enumMember]});
        // Uncomment if you want log
        // console.log("enum member: ", value[enumMember]);
      }
    }
    return keys;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumName'
})
export class EnumNamePipe implements PipeTransform {

  transform(value: any, args: any): any {
    return args[value];
  }

}

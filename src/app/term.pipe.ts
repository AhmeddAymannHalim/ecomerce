import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'term'
})
export class TermPipe implements PipeTransform {

  transform(title:string,count:number): string {
    return title.split(" ").slice(0,count).join(" ");
  }

}

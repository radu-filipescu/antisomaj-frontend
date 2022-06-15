import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTrimmer'
})
export class TextTrimmerPipe implements PipeTransform {

  transform(value: String): String {
    if(value.length > 370){
      let s = value.slice(0, -value.length+370);
      //TODO: Truncherea ultimului cuvant
      s = s + "..."
      return s;
    }
    return value;
  }

}

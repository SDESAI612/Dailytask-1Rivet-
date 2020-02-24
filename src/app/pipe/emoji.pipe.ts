import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {

  transform(value: any ): any {
    if(value==="sad")
    {
      return '😢';
    }
    else if(value==="happy"){
      return '😊';
    }
   else if(value==="angry")
    return '😠';
  }
}

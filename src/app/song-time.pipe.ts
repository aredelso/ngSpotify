import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'songTime'
})
export class SongTimePipe implements PipeTransform {

  transform(time: number): any {
    var ms = time % 1000;
    time = (time - ms) / 1000;
    var secs:any = time % 60;
    time = (time - secs) / 60;
    var mins:any = time % 60;
    var hrs = (time - mins) / 60;

    if (secs < 10) {
      secs = '0' + secs;
    }

    if (hrs > 0 && mins < 10) {
      mins = '0' + mins;
    }

    if (hrs === 0) {
      return mins + ':' + secs;
    } else {
      return hrs + ':' + mins + ':' + secs;
    }
  }

}

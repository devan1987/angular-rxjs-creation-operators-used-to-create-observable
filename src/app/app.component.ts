import { Component, VERSION } from '@angular/core';
import { from, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {
    const data = from(fetch('api/endpoint')).pipe(map((x) => x.json));

    data.subscribe({
      next(response) {
        console.log(response);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('completed');
      },
    });

    const secondsvalue = interval(100).pipe(take(10));

    secondsvalue.subscribe((n) => {
      console.log(`it's been ${n} time priniting`);
    });
  }
}

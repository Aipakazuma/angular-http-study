import {Component, OnInit, ElementRef} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs";

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent implements OnInit {

  constructor(private elementRef: ElementRef,
              private http: Http) {
  }

  ngOnInit() {
    let url = 'http://jsonplaceholder.typicode.com/posts/1';
    Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do(() => console.log('do!'))
      .map((query: string) => {
        console.log(query);
        return this.http.get(url);
      })
      .switch()
      .subscribe(
        (results: any) => {
          console.log(results);
        },
        (error: any) => {
          console.log(error);
        },
        () => {
          console.log('completion');
        }
      );
  }

}

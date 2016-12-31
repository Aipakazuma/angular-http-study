import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-using-angular-http',
  templateUrl: './using-angular-http.component.html',
  styleUrls: ['./using-angular-http.component.css']
})
export class UsingAngularHttpComponent implements OnInit {
  private data: Object;
  private loading: boolean;

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }
  
  makeRequest(): void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }
}

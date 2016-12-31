import {Component, OnInit, ElementRef, EventEmitter, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {YouTubeService} from './youtube-service';
import {SearchResult} from './search-result';

// let loadingGif: string = ((<any>window).__karma__) ? '' : require('images/loading.gif');
let loadingGif: string = '';

@Component({
    outputs: ['loading', 'results'],
    selector: 'search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
    loading: EventEmitter<boolean> = new EventEmitter<boolean>();
    results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

    constructor(private youtube: YouTubeService,
                private el: ElementRef) {
    }

    ngOnInit() {
        Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map((e: any) => e.target.value)
            .debounceTime(250)
            .do(() => this.loading.next(true))
            .map((query: string) => this.youtube.search(query))
            .switch()
            .subscribe(
                (results: SearchResult[]) => {
                    this.loading.next(false);
                    this.results.next(results)
                },
                (error: any) => {
                    console.log(error);
                    this.loading.next(false);
                },
                () => {
                    this.loading.next(false);
                }
            );
    }
}

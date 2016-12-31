import {Component} from '@angular/core';
import {SearchResult} from './search-result';

@Component({
    selector: 'youtube-search',
    templateUrl: './youtube-search.component.html'
})

export class YouTubeSearchComponent {
    results: SearchResult[];

    updateResults(results: SearchResult[]): void {
        this.results = results;
        console.log("results ", results);
    }
}

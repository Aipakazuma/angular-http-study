import {Component} from '@angular/core';
import {SearchResult} from './search-result';

@Component({
  inputs: ['result'],
  selector: 'search-result',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultComponent {
  result: SearchResult;
}

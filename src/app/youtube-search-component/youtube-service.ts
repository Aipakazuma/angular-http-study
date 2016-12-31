import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {YOUTUBE_API_KEY, YOUTUBE_API_URL} from './youtube-service-injectables';
import {SearchResult} from './search-result';

@Injectable()
export class YouTubeService {
  constructor(@Inject(Http) private http: Http,
              @Inject(YOUTUBE_API_KEY) private apiKey: string,
              @Inject(YOUTUBE_API_URL) private apiUrl: string) {
  }

  search(query: string): Observable<SearchResult[]> {
    let params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    let queryUrl: string = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl)
      .map((response: Response) => {
        // response.json()を普通に取得しようとすると型が曖昧とかで怒られる
        // なので、キャストしてあげる
        return (<any>response.json()).items.map(item => {
          console.log('raw item', item);
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.medium.url
          });
        });
      });
  }
}

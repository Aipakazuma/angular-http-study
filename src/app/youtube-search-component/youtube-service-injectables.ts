import {YouTubeService} from './youtube-service';
export let YOUTUBE_API_KEY: string = 'XXX_YOUTUBE_KEY_XXX';
export let YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';

export let youTubeServiceInjectableArray: Array<any> = [
  // {provide: YouTubeService, useClass: YouTubeService}, 何故かこれはエラーになる. No provide.
  {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL},
];


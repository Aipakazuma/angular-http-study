import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
// import {UsingAngularHttpComponent} from './using-angular-http/using-angular-http.component';
import {YouTubeSearchComponent} from './youtube-search-component/youtube-search.component';
import {SearchBoxComponent} from './youtube-search-component/search-box.component';
import {SearchResultComponent} from './youtube-search-component/search-results.component';
import {youTubeServiceInjectableArray} from './youtube-search-component/youtube-service-injectables';
import {YouTubeService} from './youtube-search-component/youtube-service';

@NgModule({
  declarations: [
    AppComponent,
    // UsingAngularHttpComponent
    YouTubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: YouTubeService, useClass: YouTubeService},
    youTubeServiceInjectableArray
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

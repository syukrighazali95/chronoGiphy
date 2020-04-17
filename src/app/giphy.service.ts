import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  url;
  apiKey = 'gY1RwHVP4ja2DaOUqXhAjW4YmNfAVJCf';

  constructor(private http: HttpClient) { 
    this.url = 'http://api.giphy.com/v1/gifs/search?'
    // this.url = 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5'
  }

  getGiphy(query,limit) {
    console.log("Api is fetched");
    return this.http.get(this.url + "q=" + query + "&api_key=" + this.apiKey + "&limit=" + limit);
  }
}

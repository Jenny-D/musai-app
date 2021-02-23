import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallAPIService {

    constructor(private http: HttpClient) { }

    getTopArtists(countryName: string) {
        const params = new HttpParams().set('country', countryName);
        var url = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&' + params + '&api_key=55d5c37f5501b482193c5640df31afee&format=json';
        return this.http.get(url);
    }

    getArtistInfo(artistName: string, queryType: string) {
        const param1 = new HttpParams().set('method', 'artist.' + queryType)
        const param2 = new HttpParams().set('artist', artistName);
        var url = 'http://ws.audioscrobbler.com/2.0/?' + param1 + '&' + param2 + '&api_key=55d5c37f5501b482193c5640df31afee&format=json';
        return this.http.get(url);
    }

    searchArtist(searchStr: string) {
        const params = new HttpParams().set('artist', searchStr);
        var url = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&' + params + '&api_key=55d5c37f5501b482193c5640df31afee&format=json';
        return this.http.get(url);
    }
}

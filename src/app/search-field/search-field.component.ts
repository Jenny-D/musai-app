import { Component, OnInit } from '@angular/core';
import { CallAPIService } from '../call-api.service';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {;

    searchStr = "";

    results: string[] = [];

    constructor(private api: CallAPIService) { }

    ngOnInit(): void {}

    search(): void {

        if (this.searchStr === "") {
            this.results = [];
        }

        this.api.searchArtist(this.searchStr).subscribe((res: any) => {

            this.results[0] = res.results.artistmatches.artist[0].name;
            this.results[1] = res.results.artistmatches.artist[1].name;
            this.results[2] = res.results.artistmatches.artist[2].name;
            this.results[3] = res.results.artistmatches.artist[3].name;
            this.results[4] = res.results.artistmatches.artist[4].name;
        });
    }

    reset(): void {
        this.searchStr = "";
        this.results = [];
    }
}

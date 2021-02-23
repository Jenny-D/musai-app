import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CallAPIService } from '../call-api.service';
import { Topartist } from '../models/topartist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    selectedCountry: string;

    topartists: Topartist[] = [
        { image: '', name: '', listeners: 0 },
        { image: '', name: '', listeners: 0 },
        { image: '', name: '', listeners: 0 },
        { image: '', name: '', listeners: 0 },
        { image: '', name: '', listeners: 0 },
        { image: '', name: '', listeners: 0 },
        { image: '', name: '', listeners: 0 },
        { image: '', name: '', listeners: 0 },
        { image: '', name: '', listeners: 0 },
        { image: '', name: '', listeners: 0 },
    ];

    constructor(private route: ActivatedRoute, private api: CallAPIService) { }

    ngOnInit() {

        this.route.paramMap.subscribe(params => {

            var country = params.get("countryName");
            if (country === null) {
                this.selectedCountry = "Germany";
            } else {
                this.selectedCountry = country;
            }

            this.api.getTopArtists(this.selectedCountry).subscribe((res: any) => {

              this.topartists[0].image = res.topartists.artist[0].image[1]['#text'];
              this.topartists[0].name = res.topartists.artist[0].name;
              this.topartists[0].listeners = res.topartists.artist[0].listeners;
              this.topartists[1].image = res.topartists.artist[1].image[1]['#text'];
              this.topartists[1].name = res.topartists.artist[1].name;
              this.topartists[1].listeners = res.topartists.artist[1].listeners;
              this.topartists[2].image = res.topartists.artist[2].image[1]['#text'];
              this.topartists[2].name = res.topartists.artist[2].name;
              this.topartists[2].listeners = res.topartists.artist[2].listeners;
              this.topartists[3].image = res.topartists.artist[3].image[1]['#text'];
              this.topartists[3].name = res.topartists.artist[3].name;
              this.topartists[3].listeners = res.topartists.artist[3].listeners;
              this.topartists[4].image = res.topartists.artist[4].image[1]['#text'];
              this.topartists[4].name = res.topartists.artist[4].name;
              this.topartists[4].listeners = res.topartists.artist[4].listeners;
              this.topartists[5].image = res.topartists.artist[5].image[1]['#text'];
              this.topartists[5].name = res.topartists.artist[5].name;
              this.topartists[5].listeners = res.topartists.artist[5].listeners;
              this.topartists[6].image = res.topartists.artist[6].image[1]['#text'];
              this.topartists[6].name = res.topartists.artist[6].name;
              this.topartists[6].listeners = res.topartists.artist[6].listeners;
              this.topartists[7].image = res.topartists.artist[7].image[1]['#text'];
              this.topartists[7].name = res.topartists.artist[7].name;
              this.topartists[7].listeners = res.topartists.artist[7].listeners;
              this.topartists[8].image = res.topartists.artist[8].image[1]['#text'];
              this.topartists[8].name = res.topartists.artist[8].name;
              this.topartists[8].listeners = res.topartists.artist[8].listeners;
              this.topartists[9].image = res.topartists.artist[9].image[1]['#text'];
              this.topartists[9].name = res.topartists.artist[9].name;
              this.topartists[9].listeners = res.topartists.artist[9].listeners;
            });
        })
    }
}

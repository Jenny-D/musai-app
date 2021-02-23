import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CallAPIService } from '../call-api.service';
import { Artist } from '../models/artist';
import { Track } from '../models/track';
import { Album } from '../models/album';

@Component({
    selector: 'app-artist-details',
    templateUrl: './artist-details.component.html',
    styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent {

    selectedArtist: string;

    artist: Artist = {
        image: '',
        name: '',
        listeners: 0,
        playcount: 0,
    };

    tracks: Track[] = [
        { image: '', name: '', playcount: 0, rank: 1 },
        { image: '', name: '', playcount: 0, rank: 2 },
        { image: '', name: '', playcount: 0, rank: 3 },
        { image: '', name: '', playcount: 0, rank: 4 },
        { image: '', name: '', playcount: 0, rank: 5 },
    ];

    albums: Album[] = [
        { image: '', name: '', playcount: 0, rank: 1 },
        { image: '', name: '', playcount: 0, rank: 2 },
        { image: '', name: '', playcount: 0, rank: 3 },
        { image: '', name: '', playcount: 0, rank: 4 },
        { image: '', name: '', playcount: 0, rank: 5 },
    ];

    constructor(private route: ActivatedRoute, private api: CallAPIService) { }

    ngOnInit() {

        this.route.paramMap.subscribe(params => {

            this.selectedArtist = params.get("artistName");

            this.api.getArtistInfo(this.selectedArtist, 'getinfo').subscribe((res: any) => {
                this.artist.image = res.artist.image[3]['#text'];
                this.artist.name = res.artist.name;
                this.artist.listeners = res.artist.stats.listeners;
                this.artist.playcount = res.artist.stats.playcount;
            });

            this.api.getArtistInfo(this.selectedArtist, 'gettoptracks').subscribe((res: any) => {
                this.tracks[0].image = res.toptracks.track[0].image[1]['#text'];
                this.tracks[0].name = res.toptracks.track[0].name;
                this.tracks[0].playcount = res.toptracks.track[0].playcount;
                this.tracks[1].image = res.toptracks.track[1].image[1]['#text'];
                this.tracks[1].name = res.toptracks.track[1].name;
                this.tracks[1].playcount = res.toptracks.track[1].playcount;
                this.tracks[2].image = res.toptracks.track[2].image[1]['#text'];
                this.tracks[2].name = res.toptracks.track[2].name;
                this.tracks[2].playcount = res.toptracks.track[2].playcount;
                this.tracks[3].image = res.toptracks.track[3].image[1]['#text'];
                this.tracks[3].name = res.toptracks.track[3].name;
                this.tracks[3].playcount = res.toptracks.track[3].playcount;
                this.tracks[4].image = res.toptracks.track[4].image[1]['#text'];
                this.tracks[4].name = res.toptracks.track[4].name;
                this.tracks[4].playcount = res.toptracks.track[4].playcount;
            });

            this.api.getArtistInfo(this.selectedArtist, 'gettopalbums').subscribe((res: any) => {
                this.albums[0].image = res.topalbums.album[0].image[1]['#text'];
                this.albums[0].name = res.topalbums.album[0].name;
                this.albums[0].playcount = res.topalbums.album[0].playcount;
                this.albums[1].image = res.topalbums.album[1].image[1]['#text'];
                this.albums[1].name = res.topalbums.album[1].name;
                this.albums[1].playcount = res.topalbums.album[1].playcount;
                this.albums[2].image = res.topalbums.album[2].image[1]['#text'];
                this.albums[2].name = res.topalbums.album[2].name;
                this.albums[2].playcount = res.topalbums.album[2].playcount;
                this.albums[3].image = res.topalbums.album[3].image[1]['#text'];
                this.albums[3].name = res.topalbums.album[3].name;
                this.albums[3].playcount = res.topalbums.album[3].playcount;
                this.albums[4].image = res.topalbums.album[4].image[1]['#text'];
                this.albums[4].name = res.topalbums.album[4].name;
                this.albums[4].playcount = res.topalbums.album[4].playcount;
            });
        })
    }
}

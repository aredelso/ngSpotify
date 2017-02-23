import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { RelatedArtist } from '../../../RelatedArtist';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id:string;
  artist: Artist[];
  allAlbums: Album[];
  albums: Album[];
  singles: Album[];
  comps: Album[];
  relatedArtists: RelatedArtist[];

  constructor(
    private _spotifyService:SpotifyService,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          })
        this._spotifyService.getAlbums(id)
          // .filter(album => album.album_type === 'album')
          .subscribe(albums => {
            this.allAlbums = albums.items;
            this.albums = _.filter(this.allAlbums, ['album_type', 'album']);
            this.singles = _.filter(this.allAlbums, ['album_type', 'single']);
            this.comps = _.filter(this.allAlbums, ['album_type', 'compilation']);
            console.log(this.albums);
          })
        this._spotifyService.getRelatedArtists(id)
          .subscribe(relatedArtists => {
            this.relatedArtists = relatedArtists.artists;
          })
      })
  }


}

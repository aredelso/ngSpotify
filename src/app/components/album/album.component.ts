import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id:string;
  album: Album[];
  track: any;

  constructor(
    private _spotifyService:SpotifyService,
    private _route:ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          })
      })
  }

  playSong(track_id) {
    this.track = document.getElementById(`audio-${track_id}`);
    if (this.track.paused) {
      this.track.play();
      $(`#play-${track_id}`).addClass('fa-pause-circle-o');
      $(`#play-${track_id}`).removeClass('fa-play-circle-o');
    } else {
      this.track.pause();
      $(`#play-${track_id}`).addClass('fa-play-circle-o');
      $(`#play-${track_id}`).removeClass('fa-pause-circle-o');
    }
  }

}

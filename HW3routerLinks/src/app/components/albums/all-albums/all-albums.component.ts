import { Component} from '@angular/core';
import {Allbums} from '../../../models/allbums';
import {AlbumsService} from '../../../services/albums.service';

@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.css']
})
export class AllAlbumsComponent {
  albums: Allbums[];
  constructor(private albumsService: AlbumsService) {
    albumsService.getAllAlbums().subscribe(value => {
      this.albums = value;
    });
  }


}

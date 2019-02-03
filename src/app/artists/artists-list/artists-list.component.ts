import { Component, OnInit, Input } from '@angular/core';
import { faCoffee, faBook } from '@fortawesome/free-solid-svg-icons';
import { Artist } from '../shared/Artist';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.styl']
})
export class ArtistsListComponent implements OnInit {

  @Input()
  artists: Artist[]
  faBook = faBook

  constructor() {}

  ngOnInit() {
  }

}

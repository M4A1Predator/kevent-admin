import { Component, OnInit, Input } from '@angular/core'
import { ArtistsService } from '../../artists.service'
import { Artist } from '../../shared/Artist'
import { UtilsServiceService } from 'src/app/utils/utils-service.service'
import { mergeMap } from 'rxjs/operators'

@Component({
  selector: 'app-artist-page-files',
  templateUrl: './artist-page-files.component.html',
  styleUrls: ['./artist-page-files.component.styl']
})
export class ArtistPageFilesComponent implements OnInit {

  @Input()
  artist: Artist

  coverSrc: ArrayBuffer

  constructor(private artistsService: ArtistsService,
    private utilsService: UtilsServiceService) { }

  ngOnInit() {
    // this.artistsService.getArtistCover(this.artist.id).subscribe(res => {
    //   this.utilsService.createImageFromBlob(res).subscribe(t => {
    //     this.coverSrc = t
    //   })
    // })
    this.artistsService.getArtistCover(this.artist.id).pipe(mergeMap(res => {
      return this.utilsService.createImageFromBlob(res)
    })).subscribe(t => {
      this.coverSrc = t
    })
  }

  onUploadCover() {

  }

}

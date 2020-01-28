import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { ArtistsService } from '../../artists.service'
import { Artist } from '../../shared/Artist'
import { UtilsServiceService } from 'src/app/utils/utils-service.service'
import { mergeMap } from 'rxjs/operators'
import { UpdateArtistForm } from '../../shared/UpdateArtistForm'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-artist-page-files',
  templateUrl: './artist-page-files.component.html',
  styleUrls: ['./artist-page-files.component.styl']
})
export class ArtistPageFilesComponent implements OnInit {

  @Input()
  artist: Artist

  @Output()
  updateAritst: EventEmitter<UpdateArtistForm> = new EventEmitter()

  msg: string

  coverSrc: ArrayBuffer

  constructor(private artistsService: ArtistsService,
    private utilsService: UtilsServiceService) { }

  ngOnInit() {
    // this.artistsService.getArtistCover(this.artist.id).subscribe(res => {
    //   this.utilsService.createImageFromBlob(res).subscribe(t => {
    //     this.coverSrc = t
    //   })
    // })
    if (this.artist.coverPath) {
      this.artistsService.getArtistCover(this.artist.id).pipe(mergeMap(res => {
        return this.utilsService.createImageFromBlob(res)
      })).subscribe(t => {
        this.coverSrc = t
      })
    }
  }

  onUploadCover(e: File) {
    this.artistsService.uploadArtistCover(this.artist.id, e).subscribe(
      () => {
        this.msg = 'saved'
        this.updateAritst.emit()
      },
      (err: HttpErrorResponse) => {
        this.msg = err.message
      }
    )
  }

}

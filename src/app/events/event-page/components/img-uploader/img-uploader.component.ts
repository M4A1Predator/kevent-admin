import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.styl']
})
export class ImgUploaderComponent implements OnInit {

  @Input()
  fieldName = 'img'

  @Input()
  imgPath: string

  @Input()
  imgSrc: ArrayBuffer

  @Output()
  uploadImg: EventEmitter<any> = new EventEmitter<any>()

  @ViewChild('imageInput')
  imageInput: ElementRef

  imgPreview: ArrayBuffer

  constructor() { }

  ngOnInit() {
  }

  onChange(e: any) {
    if (!e.target.files.length) {
      return
    }
    const reader = new FileReader()
    const file: File = e.target.files[0]
    reader.addEventListener('load', (event: any) => {
      this.imgPreview = reader.result as ArrayBuffer
    })
    reader.readAsDataURL(file)
  }

  onUpload(e: MouseEvent) {
    if (!this.imageInput.nativeElement.files.length) {
      return
    }
    const file: File = this.imageInput.nativeElement.files[0]
    this.uploadImg.emit(file)

  }

}

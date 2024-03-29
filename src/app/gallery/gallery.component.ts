import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallery: any = []
  p: number = 1;
  searchText: string = '';
  error: string;
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {

    this.galleryService.getGallery().subscribe(data => {
      this.gallery = data;
    }, error => {
      error = error;
    })
  }



}

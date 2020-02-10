import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '700px',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        thumbnailsSwipe: true,
        imageSwipe: true,
        imageArrows: false
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '400px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    
    this.galleryImages = [
      {
        small: 'assets/1.jpg',
        medium: 'assets/1.jpg',
        big: 'assets/1.jpg'
      },
      {
        small: 'assets/3.jpg',
        medium: 'assets/3.jpg',
        big: 'assets/3.jpg'
      },
      {
        small: 'assets/4.jpg',
        medium: 'assets/4.jpg',
        big: 'assets/4.jpg'
      },
      {
        small: 'assets/3.jpg',
        medium: 'assets/3.jpg',
        big: 'assets/3.jpg'
      },
      {
        small: 'assets/3.jpg',
        medium: 'assets/3.jpg',
        big: 'assets/3.jpg'
      }
    ];
  }
}
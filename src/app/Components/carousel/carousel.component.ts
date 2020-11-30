import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  constructor() { }

  slidesStore = [
    {
      id:1,
      src:'https://jaxenter.de/wp-content/uploads/2016/01/angularjs_2_0-log-500x375.jpg',
      alt:'Image_1',
      title:'Image_1'
    },
    {
      id:2,
      src:'https://jaxenter.de/wp-content/uploads/2016/01/angularjs_2_0-log-500x375.jpg',
      alt:'Image_2',
      title:'Image_3'
    },
    {
      id:3,
      src:'https://jaxenter.de/wp-content/uploads/2016/01/angularjs_2_0-log-500x375.jpg',
      alt:'Image_3',
      title:'Image_3'
    },
    {
      id:4,
      src:'https://jaxenter.de/wp-content/uploads/2016/01/angularjs_2_0-log-500x375.jpg',
      alt:'Image_4',
      title:'Image_4'
    },
    {
      id:5,
      src:'https://jaxenter.de/wp-content/uploads/2016/01/angularjs_2_0-log-500x375.jpg',
      alt:'Image_5',
      title:'Image_5'
    }
  ]

  customOptions: any = {
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }



  ngOnInit(): void {
  }

}

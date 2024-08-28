import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-cycling-trip',
  templateUrl: './cycling-trip.component.html',
  styleUrls: ['./cycling-trip.component.scss']
})
export class CyclingTripComponent implements OnInit {
 

  currentSlideIndex = 0;
  autoplayInterval: any;
  autoplayDuration = 5000; // Duration in milliseconds
  isTransitioning = false; // To prevent button spamming

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) { }

  ngOnInit(): void {
  }

  //Banner top
  slides = [
    {
      image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
      title: 'Cycling Trip',
      description: 'Cycling Distance Challenge is the perfect way to stay in shape and challenge yourself. Track your progress with this virtual challenge and see just how far you can go! Compete against your friends or set a personal goal and reach your potential. Great for cyclists of all levels.'
    },
  ];

  ////..........................tshirt preview.....................///

  images = [
    { url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg', caption: 'Caption for Image 1' },
    { url: 'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg', caption: 'Caption for Image 2' },
    { url: 'https://www.shutterstock.com/image-photo/landscape-road-mountains-600nw-2465573769.jpg', caption: 'Caption for Image 3' },
    { url: 'https://www.shutterstock.com/image-photo/landscape-road-mountains-600nw-2465573769.jpg', caption: 'Caption for Image 4' },
    { url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg', caption: 'Caption for Image 5' },
    { url: 'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg', caption: 'Caption for Image 6' },
  ];

}

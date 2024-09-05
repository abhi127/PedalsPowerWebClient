import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-independence-day',
  templateUrl: './independence-day.component.html',
  styleUrls: ['./independence-day.component.scss']
})
export class IndependenceDayComponent implements OnInit {
  lastScrollTop = 0;
  selectedIndex: number | null = null;
  public partnerLogosCarousel = [];
  public partnerReviewsCarousel = [];
  currentSection = 'home';

  public reviews = [
    { image: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp', content: 'If several languages coalesce, the grammar of the resulting language.', name: 'Mark Hurley', position: 'CEO & Lead' },
    { image: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp', content: 'If several languages coalesce, the grammar of the resulting language.', name: 'Calvin Smith', position: 'Blockchain Developer' },
    { image: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp', content: 'If several languages coalesce, the grammar of the resulting language.', name: 'Vickie Sample', position: 'Designer' },
    { image: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp', content: 'If several languages coalesce, the grammar of the resulting language.', name: 'Alma Farley', position: 'App Developer' },
    { image: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp', content: 'If several languages coalesce, the grammar of the resulting language.', name: 'Amy Hood', position: 'Designer' },
    { image: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp', content: 'If several languages coalesce, the grammar of the resulting language.', name: 'John Doe', position: 'Project Manager' },
    { image: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp', content: 'If several languages coalesce, the grammar of the resulting language.', name: 'Alma Farley', position: 'App Developer' },
    { image: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp', content: 'If several languages coalesce, the grammar of the resulting language.', name: 'Amy Hood', position: 'Designer' },
    { image: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp', content: 'If several languages coalesce, the grammar of the resulting language.', name: 'John Doe', position: 'Project Manager' },
  ];

  public logos = [
    { image: 'assets/images/crypto/features-img/monthly/t1.png', name: 'Mark Hurley', position: 'CEO & Lead' },
    { image: 'assets/images/crypto/features-img/monthly/t2.png', name: 'Calvin Smith', position: 'Blockchain Developer' },
    { image: 'assets/images/crypto/features-img/monthly/m1.png', name: 'Vickie Sample', position: 'Designer' },
    { image: 'assets/images/crypto/features-img/monthly/m2.png', name: 'Alma Farley', position: 'App Developer' },
    { image: 'assets/images/crypto/features-img/monthly/m3.png', name: 'Amy Hood', position: 'Designer' },
    { image: 'assets/images/crypto/features-img/monthly/m4.png', name: 'John Doe', position: 'Project Manager' },
  ];

  public medals = [
    { url: 'assets/images/crypto/features-img/monthly/t1.png', caption: 'Mark Hurley' },
    { url: 'assets/images/crypto/features-img/monthly/t2.png', caption: 'Calvin Smith' },
    { url: 'assets/images/crypto/features-img/monthly/m1.png', caption: 'Vickie Sample' },
    { url: 'assets/images/crypto/features-img/monthly/m2.png', caption: 'Alma Farley' },
    { url: 'assets/images/crypto/features-img/monthly/m3.png', caption: 'Amy Hood' },
    { url: 'assets/images/crypto/features-img/monthly/m4.png', caption: 'John Doe' },
  ];

  currentSlideIndex = 0;
  autoplayInterval: any;
  autoplayDuration = 5000; // Duration in milliseconds
  isTransitioning = false; // To prevent button spamming

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    // this.initializeSwipe();
    // this.loadPartnerLogos();
    //this.loadPartnerReviews();
  }

  carouselOption: OwlOptions = {
    items: 3,
    dots: false,
    nav: true,
    navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
    margin: 10,
    loop: false,

    responsive: {
      0: {
        items: 2 // Adjust if you want a single item visible on smaller screens
      },
      576: {
        items: 2 // Adjust to fit 2 items per slide on smaller screens
      },
      768: {
        items: 2 // Adjust for 2 items per slide
      },
      992: {
        items: 3 // Shows 3 items per slide for larger screens
      }
    }
  }


//Testimonial
carouselItems = [
  {
    image: 'assets/images/users/avatar-5.jpg',
    date: 'December, 2019',
    stars: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp',
    review: 'It will be as simple as occidental in fact it will be Cambridge',
    reviewer: 'John Doe'
  },
  {
    image: 'assets/images/users/avatar-5.jpg',
    date: 'January, 2020',
    stars: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp',
    review: 'To an English person, it will seem like simplified English existence.',
    reviewer: 'John Doe'
  },
  {
    image: 'assets/images/users/avatar-5.jpg',
    date: 'February, 2020',
    stars: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp',
    review: 'For science, music, sport, etc, Europe uses the same vocabulary.',
    reviewer: 'John Doe'
  },
  {
    image: 'assets/images/users/avatar-5.jpg',
    date: 'March, 2020',
    stars: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp',
    review: 'New common language will be more simple than existing.',
    reviewer: 'John Doe'
  },
  {
    image: 'assets/images/users/avatar-5.jpg',
    date: 'April, 2020',
    stars: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp',
    review: 'It will be as simple as occidental in fact it will be Cambridge',
    reviewer: 'John Doe'
  },
  {
    image: 'assets/images/users/avatar-5.jpg',
    date: 'May, 2020',
    stars: 'assets/images/crypto/features-img/five-stars-rating-icon-png.webp',
    review: 'To an English person, it will seem like simplified English existence.',
    reviewer: 'John Doe'
  }
];

  timelineCarousel: OwlOptions = {
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
   // navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
    dots: false,
    autoplay: true,
    
    responsive: {
      672: {
        items: 3
      },

      576: {
        items: 2
      },

      936: {
        items: 4
      },
    }
  }

  //for team
  // loadPartnerLogos() {
  //   this.logos.sort(function () {
  //     return 0.5 - Math.random();
  //   });
  //   this.getLogoGroups();
  // }

  // getLogoGroups() {
  //   const groups = [];
  //   for (let i = 0; i < this.logos.length; i += 3) {
  //     groups.push(this.logos.slice(i, i + 3));
  //   }
  //   this.partnerLogosCarousel = groups;
  // }


  //for reviews
  // loadPartnerReviews() {
  //   this.reviews.sort(function () {
  //     return 0.5 - Math.random();
  //   });
  //   this.getLReviewsGroups();
  // }

  // getLReviewsGroups() {
  //   const groups = [];
  //   for (let i = 0; i < this.reviews.length; i += 3) {
  //     groups.push(this.reviews.slice(i, i + 3));
  //   }
  //   this.partnerReviewsCarousel = groups;
  // }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('topnav-menu-content').classList.toggle('show');
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  //Banner top
  slides = [
    {
      image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
      title: 'Independence day Challenge',
      description: 'Cycling Challenge is the perfect way to stay in shape and challenge yourself. Track your progress with this virtual challenge and see just how far you can go! Compete against your friends or set a personal goal and reach your potential. Great for cyclists of all levels.'
    },
  ];



  ////..........................tshirt preview.....................///

  images = [
    { url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg', 
      caption: this.sanitizer.bypassSecurityTrustHtml(`
        <div style="text-align: center"><h5>Cycling Challenge</h5></div>
        <div style="text-align: justify; min-height: 20%">Cycle challenges motivate participants through goal-setting, camaraderie, 
        and the thrill of overcoming physical and mental barriers.</div>
      `)
    },
    { url: 'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg', caption: 'Caption for Image 2' },
    { url: 'https://www.shutterstock.com/image-photo/landscape-road-mountains-600nw-2465573769.jpg', caption: 'Caption for Image 3' },
    { url: 'https://www.shutterstock.com/image-photo/landscape-road-mountains-600nw-2465573769.jpg', caption: 'Caption for Image 4' },
    { url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg', caption: 'Caption for Image 5' },
    { url: 'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg', caption: 'Caption for Image 6' },
  ];


  accordionData = [
    { title: 'How many run/walk are acceptable in a day?', content: 'A maximum of 2 run/walk are acceptable in a day. More than 2 won\'t be counted.' },
    { title: 'Is it necessary to perform the activity daily?', content: 'No, it is not necessary to perform the activity every day. You can complete the challenge at your own pace. You just need to finish your chosen distance in the given duration of the event.' },
    {
      title: 'How to Upload the Activity Data?',
      content: `
      (1) Data of STRAVA users will be taken automatically from STRAVA app once they join the challenge STRAVA group. (Link to join the group will be shared before the challenge starts). <br>
      (2) For those who are not using Strava, they can send the activities screenshot via email at "support@pedalspower.com" once every 5 days.` },
    { title: 'When will I receive the medal and T-shirt ?', content: 'Medal and t-shirt will be sent via courier at the address given at the time of the registration. It will be delivered in 15-20 days after the event ends.' },
    { title: 'Is there any minimum distance criterion?', content: 'Yes, You need to run/walk at least 1 KM for that activity to be considered. Less than 1 KM won\'t be counted towards the challenge distance.' },
    {
      title: 'Can I change my distance category once the challenge has started?',
      content: `Yes, category change is allowed according to the below instructions:<br><br>
      <ul>
        <li>Change requested from 1st-10th: No charges</li>
        <li>Change requested from 11th-20th: Rs 99</li>
        <li>Change requested from 21st-30th: Rs 149</li>
      </ul><br>
      Process to follow:<br>
      1 - Send the change request via email at support@pedalspower.com<br>
      2 - Follow the instructions received on the email.
    `
    },
  ];

  toggleAccordion(index: number): void {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}

import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as Hammer from 'hammerjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentIndex = 0;
  itemsPerSlide = 6; // 2 rows * 3 columns
  displayedItems = [];

  public partnerLogosCarousel = [];
  public partnerReviewsCarousel = [];



  groupedItems = [];
  activeDropdown: string | null = null;
  // set the currenr year
  year: number = new Date().getFullYear();
  currentSection = 'home';
  // Track the index of the currently open submenu and sub-submenu
  activeSubmenuIndex: number | null = null;
  activeSubSubmenuIndex: { [key: number]: number | null } = {};


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
    { image: 'assets/images/users/avatar-2.jpg', name: 'Mark Hurley', position: 'CEO & Lead' },
    { image: 'assets/images/users/avatar-3.jpg', name: 'Calvin Smith', position: 'Blockchain Developer' },
    { image: 'assets/images/users/avatar-8.jpg', name: 'Vickie Sample', position: 'Designer' },
    { image: 'assets/images/users/avatar-5.jpg', name: 'Alma Farley', position: 'App Developer' },
    { image: 'assets/images/users/avatar-1.jpg', name: 'Amy Hood', position: 'Designer' },
    { image: 'assets/images/users/avatar-4.jpg', name: 'John Doe', position: 'Project Manager' },
    { image: 'assets/images/users/avatar-5.jpg', name: 'Alma Farley', position: 'App Developer' },
    { image: 'assets/images/users/avatar-1.jpg', name: 'Amy Hood', position: 'Designer' },
    { image: 'assets/images/users/avatar-4.jpg', name: 'John Doe', position: 'Project Manager' },
    { image: 'assets/images/users/avatar-2.jpg', name: 'Mark Hurley', position: 'CEO & Lead' },
    { image: 'assets/images/users/avatar-3.jpg', name: 'Calvin Smith', position: 'Blockchain Developer' },
    { image: 'assets/images/users/avatar-8.jpg', name: 'Vickie Sample', position: 'Designer' },
    { image: 'assets/images/users/avatar-5.jpg', name: 'Alma Farley', position: 'App Developer' },
    { image: 'assets/images/users/avatar-1.jpg', name: 'Amy Hood', position: 'Designer' },
    { image: 'assets/images/users/avatar-4.jpg', name: 'John Doe', position: 'Project Manager' },
    { image: 'assets/images/users/avatar-5.jpg', name: 'Alma Farley', position: 'App Developer' },
    { image: 'assets/images/users/avatar-1.jpg', name: 'Amy Hood', position: 'Designer' },
    { image: 'assets/images/users/avatar-4.jpg', name: 'John Doe', position: 'Project Manager' },
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
    //this.restoreScrollPosition();
    this.initializeSwipe();
    this.startAutoplay();
    this.loadPartnerLogos();
    this.loadPartnerReviews();
  }


  images = [
    {
      url: 'assets/images/crypto/features-img/challenges/cycling-challenge.png',
      caption: this.sanitizer.bypassSecurityTrustHtml(`
        <div class="ch-head" style="text-align: center"><h5>Cycling Challenge</h5></div>
        <div class="ch-desc" style="text-align: left">Cycle challenges motivate participants through goal-setting, camaraderie, 
        and the thrill of overcoming physical and mental barriers.</div>
        <div class="button-items mt-4">
            <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
        </div>
      `)
    },
    {
      url: 'assets/images/crypto/features-img/challenges/run/b5.jpg',
      caption: this.sanitizer.bypassSecurityTrustHtml(`
        <div style="text-align: center" class="ch-head"><h5>Run Challenge</h5></div>
        <div style="text-align: left">A run challenge motivates by setting goals, 
        encouraging perseverance, and fostering a sense of accomplishment through physical 
        achievement.</div>
        <div class="button-items mt-4">
            <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
        </div>
      `)

    },
    {
      url: 'assets/images/crypto/features-img/challenges/walk/w1.jpg',
      caption: this.sanitizer.bypassSecurityTrustHtml(`
        <div style="text-align: center" class="ch-head"><h5>Walk Challenge</h5></div>
        <div style="text-align: left">A walk challenge motivates by setting goals, encouraging 
        perseverance, and fostering a sense of accomplishment through physical achievement.</div>
        <div class="button-items mt-4">
            <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
        </div>
      `)
    },
    // {
    //   url: 'assets/images/crypto/features-img/challenges/21-days-run-challenge.png',
    //   caption: this.sanitizer.bypassSecurityTrustHtml(`
    //     <div style="text-align: center"><h5>21-Days Challenge</h5></div>
    //     <div style="text-align: justify">A 21-day challenge motivates by instilling discipline, 
    //     forming habits, and offering a structured approach to achieving personal goals.</div>
    //     <div class="button-items mt-4" style="position: absolute;bottom: 12px;">
    //         <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
    //     </div>
    //   `)
    // },
    // {
    //   url: 'assets/images/crypto/features-img/challenges/30-day-challangee.jpg',
    //   caption: this.sanitizer.bypassSecurityTrustHtml(`
    //     <div style="text-align: center"><h5>30-Days Challenge</h5></div>
    //     <div style="text-align: justify">A 30-day challenge motivates by providing a clear 
    //     timeframe, encouraging consistency, and fostering determination to achieve lasting personal 
    //     improvement.</div>
    //     <div class="button-items mt-4" style="position: absolute;bottom: 12px;">
    //         <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
    //     </div>
    //   `)
    // },
    // {
    //   url: 'assets/images/crypto/features-img/challenges/plantChallenege.jpg',
    //   caption: this.sanitizer.bypassSecurityTrustHtml(`
    //     <div style="text-align: center"><h5>Plant Challenge</h5></div>
    //     <div style="text-align: justify">Each sapling is a promise of cleaner air, healthier 
    //     ecosystems, and a sustainable future for generations to come.</div>
    //     <div class="button-items mt-4" style="position: absolute;bottom: 12px;">
    //         <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
    //     </div>
    //   `)
    // },
    // {
    //   url: 'assets/images/crypto/features-img/challenges/road-trip.png',
    //   caption: this.sanitizer.bypassSecurityTrustHtml(`
    //     <div style="text-align: center"><h5>Trip Challenge</h5></div>
    //     <div style="text-align: justify">Embark on the journey of a lifetime; embrace the unknown, 
    //     discover yourself, and collect moments that enrich your soul forever.</div>
    //     <div class="button-items mt-4" style="position: absolute;bottom: 12px;">
    //         <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
    //     </div>
    //   `)
    // },
    // {
    //   url: 'assets/images/crypto/features-img/challenges/swimming.jpg',
    //   caption: this.sanitizer.bypassSecurityTrustHtml(`
    //     <div style="text-align: center"><h5>Swimming Challenge</h5></div>
    //     <div style="text-align: justify">Dive into the deep blue, conquer doubts with each stroke, 
    //     and emerge stronger—unleash your aquatic spirit in every shimmering wave.</div>
    //     <div class="button-items mt-4" style="position: absolute;bottom: 12px;">
    //         <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
    //     </div>
    //   `)
    // },
  ];

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


  //for team
  loadPartnerLogos() {
    this.logos.sort(function () {
      return 0.5 - Math.random();
    });
    this.getLogoGroups();
  }

  getLogoGroups() {
    const groups = [];
    for (let i = 0; i < this.logos.length; i += 3) {
      groups.push(this.logos.slice(i, i + 3));
    }
    this.partnerLogosCarousel = groups;
  }


  //for reviews
  loadPartnerReviews() {
    this.reviews.sort(function () {
      return 0.5 - Math.random();
    });
    this.getLReviewsGroups();
  }

  getLReviewsGroups() {
    const groups = [];
    for (let i = 0; i < this.reviews.length; i += 3) {
      groups.push(this.reviews.slice(i, i + 3));
    }
    this.partnerReviewsCarousel = groups;
  }



  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  /**
   * Window scroll method
   */
  // windowScroll() {
  //   const navbar = document.getElementById('navbar');
  //   const nb = document.getElementById('nb');
  //   const user = document.getElementById('user');
  //   const cart = document.getElementById('cart');

  //   if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
  //     navbar.classList.add('nav-sticky');
  //     nb.classList.add('nbcss');
  //     user.classList.add('nbcss');
  //     cart.classList.add('nbcss');
  //   } else {
  //     navbar.classList.remove('nav-sticky');
  //     nb.classList.remove('nbcss');
  //     user.classList.remove('nbcss');
  //     cart.classList.remove('nbcss');
  //   }
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

  slides = [
    { image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png', title: 'Cycling Challenge', 
      description: `
      A Cycle Challenge is an exciting way to push your limits, stay active, and engage with a 
      community of like-minded enthusiasts. Whether you're a beginner or seasoned cyclist, these 
      challenges motivate you to achieve specific distance goals within a set time frame. 
      Participants often enjoy the thrill of tracking their progress and celebrating their 
      success with exclusive medals and rewards upon completion.
      `,
      productid:1
    },
    { image: 'assets/images/crypto/features-img/challenges/run/b5.jpg', title: 'Running Challenge', 
      description: `
      A Running Challenge is a fitness event designed to motivate participants to achieve a set 
      running goal within a specific timeframe. Whether you’re aiming for distance or consistency, 
      these challenges push you to stay active, track your progress, and experience the joy of 
      reaching your fitness milestones. Completing the challenge often brings a sense of 
      accomplishment and can be rewarded with medals or other recognition.
      `,
      productid:2
    },
    { image: 'assets/images/crypto/features-img/challenges/walk/w1.jpg', title: 'Walk Challenge', 
      description: `
      A Walk Challenge encourages participants to stay active by setting and achieving walking 
      goals over a defined period. Whether it's daily steps or total distance, this challenge 
      promotes consistent movement, making it perfect for all fitness levels. It’s a simple yet 
      effective way to improve health while enjoying the outdoors. Completing the challenge often 
      comes with rewards and a sense of accomplishment, motivating you to keep moving forward.
      `,
      productid:3
    }
  ];


  initializeSwipe(): void {
    const sliderContainer = this.el.nativeElement.querySelector('.slider-container');
    const hammer = new Hammer(sliderContainer);

    hammer.on('swipeleft', () => this.onSwipe('left'));
    hammer.on('swiperight', () => this.onSwipe('right'));
  }

  onSwipe(direction: string): void {
    if (this.isTransitioning) return; // Prevent new swipe during transition
    this.stopAutoplay(); // Stop current interval
    if (direction === 'left') {
      this.nextSlide();
    } else if (direction === 'right') {
      this.previousSlide();
    }
    this.resetAutoplay(); // Restart interval after swipe
  }

  startAutoplay(): void {
    this.stopAutoplay(); // Ensure no overlapping intervals
    this.autoplayInterval = setInterval(() => this.nextSlide(), this.autoplayDuration);
  }

  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null; // Set to null for consistency
    }
  }

  resetAutoplay(): void {
    this.startAutoplay();
  }

  nextSlide(): void {
    if (this.isTransitioning) return; // Prevent double clicks during transition
    this.isTransitioning = true;
    this.stopAutoplay(); // Stop the interval before manually changing the slide
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    setTimeout(() => (this.isTransitioning = false), 1000); // Timeout should match CSS transition
    this.resetAutoplay(); // Restart the interval after slide change
  }

  previousSlide(): void {
    if (this.isTransitioning) return; // Prevent double clicks during transition
    this.isTransitioning = true;
    this.stopAutoplay(); // Stop the interval before manually changing the slide
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    setTimeout(() => (this.isTransitioning = false), 1000); // Timeout should match CSS transition
    this.resetAutoplay(); // Restart the interval after slide change
  }






  cards = [
    { image: 'path/to/image1.jpg', title: 'Card 1', description: 'Description for card 1' },
    { image: 'path/to/image2.jpg', title: 'Card 2', description: 'Description for card 2' },
    { image: 'path/to/image3.jpg', title: 'Card 3', description: 'Description for card 3' }
  ];

  @HostListener('window:scroll', [])
    onScroll(): void {
        const cards = document.querySelectorAll('.card');
        const windowHeight = window.innerHeight;
        
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const offset = 150; // Adjust this value to control when the zoom effect starts

            if (rect.top <= windowHeight - offset && rect.bottom >= offset) {
                card.classList.add('zoom-in');
            } else {
                card.classList.remove('zoom-in');
            }
        });
    }

}

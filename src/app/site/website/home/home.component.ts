import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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
        <div class="ch-desc" style="text-align: justify">Cycle challenges motivate participants through goal-setting, camaraderie, 
        and the thrill of overcoming physical and mental barriers.</div>
        <div class="button-items mt-4" style="position: absolute;bottom: 12px;">
            <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
        </div>
      `)
    },
    {
      url: 'assets/images/crypto/features-img/challenges/run-challenge.png',
      caption: this.sanitizer.bypassSecurityTrustHtml(`
        <div style="text-align: center"><h5>Run Challenge</h5></div>
        <div style="text-align: justify">A run challenge motivates by setting goals, 
        encouraging perseverance, and fostering a sense of accomplishment through physical 
        achievement.</div>
        <div class="button-items mt-4" style="position: absolute;bottom: 12px;">
            <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
        </div>
      `)

    },
    {
      url: 'assets/images/crypto/features-img/challenges/walk-challenge.png',
      caption: this.sanitizer.bypassSecurityTrustHtml(`
        <div style="text-align: center"><h5>Walk Challenge</h5></div>
        <div style="text-align: justify">A run challenge motivates by setting goals, encouraging 
        perseverance, and fostering a sense of accomplishment through physical achievement.</div>
        <div class="button-items mt-4" style="position: absolute;bottom: 12px;">
            <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
        </div>
      `)
    },
    {
      url: 'assets/images/crypto/features-img/challenges/21-days-run-challenge.png',
      caption: this.sanitizer.bypassSecurityTrustHtml(`
        <div style="text-align: center"><h5>21-Days Challenge</h5></div>
        <div style="text-align: justify">A 21-day challenge motivates by instilling discipline, 
        forming habits, and offering a structured approach to achieving personal goals.</div>
        <div class="button-items mt-4" style="position: absolute;bottom: 12px;">
            <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
        </div>
      `)
    },
    {
      url: 'assets/images/crypto/features-img/challenges/30-day-challangee.jpg',
      caption: this.sanitizer.bypassSecurityTrustHtml(`
        <div style="text-align: center"><h5>30-Days Challenge</h5></div>
        <div style="text-align: justify">A 30-day challenge motivates by providing a clear 
        timeframe, encouraging consistency, and fostering determination to achieve lasting personal 
        improvement.</div>
        <div class="button-items mt-4" style="position: absolute;bottom: 12px;">
            <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
        </div>
      `)
    },
    {
      url: 'assets/images/crypto/features-img/challenges/plantChallenege.jpg',
      caption: this.sanitizer.bypassSecurityTrustHtml(`
        <div style="text-align: center"><h5>Plant Challenge</h5></div>
        <div style="text-align: justify">Each sapling is a promise of cleaner air, healthier 
        ecosystems, and a sustainable future for generations to come.</div>
        <div class="button-items mt-4" style="position: absolute;bottom: 12px;">
            <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
        </div>
      `)
    },
    {
      url: 'assets/images/crypto/features-img/challenges/road-trip.png',
      caption: this.sanitizer.bypassSecurityTrustHtml(`
        <div style="text-align: center"><h5>Trip Challenge</h5></div>
        <div style="text-align: justify">Embark on the journey of a lifetime; embrace the unknown, 
        discover yourself, and collect moments that enrich your soul forever.</div>
        <div class="button-items mt-4" style="position: absolute;bottom: 12px;">
            <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
        </div>
      `)
    },
    {
      url: 'assets/images/crypto/features-img/challenges/swimming.jpg',
      caption: this.sanitizer.bypassSecurityTrustHtml(`
        <div style="text-align: center"><h5>Swimming Challenge</h5></div>
        <div style="text-align: justify">Dive into the deep blue, conquer doubts with each stroke, 
        and emerge stronger—unleash your aquatic spirit in every shimmering wave.</div>
        <div class="button-items mt-4" style="position: absolute;bottom: 12px;">
            <a href="javascript: void(0);" class="btn btn-primary">Know More</a>
        </div>
      `)
    },
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
    { image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png', title: 'Slide 1', description: 'Lorem ipsun dolor Lorem ipsun dolor Lorem ipsun dolor Lorem ipsun dolor' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/24701-nature-natural-beauty.jpg', title: 'Slide 2', description: 'Description for Slide 2' },
    { image: 'https://images5.alphacoders.com/421/thumb-1920-421870.jpg', title: 'Slide 3', description: 'Description for Slide 3' }
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

}

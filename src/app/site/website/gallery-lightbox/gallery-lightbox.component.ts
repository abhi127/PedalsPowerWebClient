import { Component, Input, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Hammer from 'hammerjs';

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.scss']
})
export class GalleryLightboxComponent implements OnInit {
  @Input() images: { url: string; caption: string }[] = [];
  @Input() isPreviewVisible: boolean = true;


  isLightboxOpen = false;
  currentIndex = 0;
  hammerInstance: any;

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) { }

  ngOnInit(): void {
    this.initializeSwipe();
  }

  ngOnDestroy(): void {
    this.removeKeyboardListener();
  }

  // Condition for each specific URL path
  isCondition1(): boolean {
    return this.router.url === '/';
  }

  isCondition2(): boolean {

    return this.router.url.includes('challenges/iday/independence');
  }

  openLightbox(index: number): void {
    if (this.isPreviewVisible) {
      this.currentIndex = index;
      this.isLightboxOpen = true;
      this.applyFadeEffect();
    }
  }

  closeLightbox(): void {
    this.isLightboxOpen = false;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.applyFadeEffect();
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.applyFadeEffect();
  }

  applyFadeEffect(): void {
    const lightboxContent = this.el.nativeElement.querySelector('.imgAnim');
    if (lightboxContent) {
      // Remove the class to reset the animation
      this.renderer.removeClass(lightboxContent, 'fade-in');

      // Reapply the class with a slight delay to trigger the animation
      setTimeout(() => {
        this.renderer.addClass(lightboxContent, 'fade-in');
      }, 10);
    }
  }

  initializeSwipe(): void {
    const lightboxContent = this.el.nativeElement.querySelector('.lightbox-content-container');
    debugger
    if (lightboxContent) {

      this.hammerInstance = new Hammer(lightboxContent);
      this.hammerInstance.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

      this.hammerInstance.on('swipeleft', () => this.onSwipe('left'));
      this.hammerInstance.on('swiperight', () => this.onSwipe('right'));
    }
  }

  onSwipe(direction: string): void {
    if (direction === 'left') {
      this.nextImage();
    } else if (direction === 'right') {
      this.prevImage();
    }
  }
  // Remove event listener for keyboard
  removeKeyboardListener(): void {
    this.renderer.listen('window', 'keydown', () => { }); // No-op listener to remove the existing one
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeLightbox();
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardNextPrevEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
    }
  }
}

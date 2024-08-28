import { Component, OnInit, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import 'hammerjs';

@Component({
  selector: 'app-cyptolanding',
  templateUrl: './cyptolanding.component.html',
  styleUrls: ['./cyptolanding.component.scss']
})

/**
 * Crypto landing page
 */
export class CyptolandingComponent implements OnInit {
  
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

  constructor(
    private authService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService,
    private router: Router,
    public translate: TranslateService,
    public languageService: LanguageService,
  ) { }

  ngOnInit(): void {
    this.restoreScrollPosition();

  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: any) {
    localStorage.setItem('scrollPosition', window.scrollY.toString());
  }

  restoreScrollPosition() {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
    }
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const elements = document.querySelectorAll('.scroll-animation');
    const scrollPosition = window.scrollY + window.innerHeight;

    elements.forEach((el: any) => {
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      if (scrollPosition > elementPosition + 100) {
        el.classList.add('show');
      } else {
        el.classList.remove('show');
      }
    });
  }

  // Track whether the sidebar is visible or not
  isSidebarVisible: boolean = false;
  //Array: any;

  toggleDropdown(dropdownId: string, event?: Event): void {
    if (event) {
      event.stopPropagation(); // Prevents the click from closing the menu
    }
    this.activeDropdown = this.activeDropdown === dropdownId ? null : dropdownId;
  }

  // Toggle the entire sidebar
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }


  logout() {
    if (environment.defaultauth === 'firebase') {
      this.authService.logout();
    } else {
      this.authFackservice.logout();
    }
    this.router.navigate(['/account/login']);
  }

  menus = [
    { title: 'Home', routerLink: '/', items: null, isOpen: false },
    {
      title: 'Challenges',
      items: [
        //{ title: 'Independence day', routerLink: '/challenges/iday/independence', items: null, isOpen: false },
        {
          title: 'Monthly',
          items: [
            { title: 'Cycling distance challenge', routerLink: '/challenges/monthly/cycling-distance-challenge' },
            { title: 'Run distance challenge', routerLink: '/challenges/monthly/run-walk-distance-challenge' },
            { title: 'Walk distance challenge', routerLink: '/challenges/monthly/run-walk-distance-challenge' }
            
          ],
          isOpen: false
        },
        // {
        //   title: 'One Day', items: [
        //     { title: 'Centuary or Half Centuary Cycling Challenge', routerLink: '/challenges/oneday/century-or-half-century' }
        //   ], isOpen: false
        // }
      ],
      isOpen: false
    },
    {
      title: 'Gallery', items: [
        { title: 'Hall of Fame', routerLink: '/gallery/hall-of-fame' },
        { title: 'Gurugram to Alwar cycling trip', routerLink: '/gallery/cycling-trip' }
      ], isOpen: false
    },
    { title: 'Our Story', routerLink: '/our-story', items: null, isOpen: false }
  ];

  
  activeMenu: string = '';
  activeSubMenu: string = '';
  activeSubSubMenu: string = '';
  
  // toggleNavMenu(menu: any) {
  //   if (menu.items) {
  //     if (this.activeMenu === menu.title) {
  //       this.activeMenu = '';
  //       menu.isOpen = false;
  //     } else {
  //       this.activeMenu = menu.title;
  //       this.closeAllMenus();
  //       menu.isOpen = true;
  //     }
  //   }
  // }
  
  // toggleSubMenu(submenu: any, event: Event) {
  //   event.stopPropagation(); // Prevent event from bubbling up to parent
  //   if (submenu.items) {
  //     if (this.activeSubMenu === submenu.title) {
  //       this.activeSubMenu = '';
  //       submenu.isOpen = false;
  //     } else {
  //       this.activeSubMenu = submenu.title;
  //       this.closeAllSubMenus();
  //       submenu.isOpen = true;
  //     }
  //   }
  // }


  toggleNavMenu(menu: any) {
    if (menu.items && menu.items.length > 0) {
      // Existing logic to open/close menus with submenus
      if (this.activeMenu === menu.title) {
        this.activeMenu = '';
        menu.isOpen = false;
      } else {
        this.activeMenu = menu.title;
        this.closeAllMenus();
        menu.isOpen = true;
      }
    } else {
      // Directly set the active menu if there are no submenus
      this.activeMenu = menu.title;
      this.closeAllMenus(); // Close other menus
    }
  }
  
  toggleSubMenu(submenu: any, event: Event) {
    if (this.activeSubMenu === submenu.title) {
      this.activeSubMenu = '';
      submenu.isOpen = false;
    } else {
      this.activeSubMenu = submenu.title;
      this.closeAllSubMenus();
      submenu.isOpen = true;
    }
  }
  
  toggleSubSubMenu(subsubmenu: any, event: Event) {
    event.stopPropagation(); // Prevent event from bubbling up to parent
    if (subsubmenu.items) {
      if (this.activeSubSubMenu === subsubmenu.title) {
        this.activeSubSubMenu = '';
        subsubmenu.isOpen = false;
      } else {
        this.activeSubSubMenu = subsubmenu.title;
        this.closeAllSubSubMenus();
        subsubmenu.isOpen = true;
      }
    }
  }
  
  closeAllMenus() {
    this.menus.forEach(menu => {
      menu.isOpen = false;
      if (menu.items) {
        menu.items.forEach((item: any) => {
          item.isOpen = false;
          if (item.items) {
            item.items.forEach((subItem: any) => {
              subItem.isOpen = false;
            });
          }
        });
      }
    });
  }
  
  closeAllSubMenus() {
    this.menus.forEach(menu => {
      if (menu.items) {
        menu.items.forEach((item: any) => {
          item.isOpen = false;
          if (item.items) {
            item.items.forEach((subItem: any) => {
              subItem.isOpen = false;
            });
          }
        });
      }
    });
  }
  
  closeAllSubSubMenus() {
    this.menus.forEach(menu => {
      if (menu.items) {
        menu.items.forEach((item: any) => {
          if (item.items) {
            item.items.forEach((subItem: any) => {
              subItem.isOpen = false;
            });
          }
        });
      }
    });
  }
  
  isObject(item: any): boolean {
    return typeof item === 'object';
  }

  // Method to be called when a menu link is clicked
  onMenuClick() {
    this.isSidebarVisible = false;
  }

  onMainMenuClick() {
    this.closeAllMenus();
    this.isSidebarVisible = false;
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar');
    const nb = document.getElementById('nb');
    const user = document.getElementById('user');
    const cart = document.getElementById('cart');

    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
      navbar.classList.add('nav-sticky');
      nb.classList.add('nbcss');
      user.classList.add('nbcss');
      cart.classList.add('nbcss');
    } else {
      navbar.classList.remove('nav-sticky');
      nb.classList.remove('nbcss');
      user.classList.remove('nbcss');
      cart.classList.remove('nbcss');
    }
  }



  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInsideDropdown = (event.target as HTMLElement).closest('.dropdown-menu, .dropdown-toggle');
    if (!clickedInsideDropdown) {
      this.activeDropdown = null;
    }
  }


}

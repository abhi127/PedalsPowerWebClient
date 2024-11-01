"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_site_site_module_ts"],{

/***/ 37484:
/*!*********************************************!*\
  !*** ./src/app/site/site-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteRoutingModule": () => (/* binding */ SiteRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'website', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./website/website.module */ 91260)).then(m => m.WebsiteModule) },
];
class SiteRoutingModule {
}
SiteRoutingModule.ɵfac = function SiteRoutingModule_Factory(t) { return new (t || SiteRoutingModule)(); };
SiteRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SiteRoutingModule });
SiteRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SiteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 96958:
/*!****************************************!*\
  !*** ./src/app/site/site.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteComponent": () => (/* binding */ SiteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class SiteComponent {
    ngOnInit() {
        // document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    }
}
SiteComponent.ɵfac = function SiteComponent_Factory(t) { return new (t || SiteComponent)(); };
SiteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SiteComponent, selectors: [["app-site"]], decls: 1, vars: 0, template: function SiteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaXRlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8368:
/*!*************************************!*\
  !*** ./src/app/site/site.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteModule": () => (/* binding */ SiteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _site_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-routing.module */ 37484);
/* harmony import */ var _website_website_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website/website.module */ 91260);
/* harmony import */ var _site_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site.component */ 96958);
/* harmony import */ var _website_monthly_cycling_distance_cycling_distance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./website/monthly/cycling-distance/cycling-distance.component */ 78242);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 37297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







class SiteModule {
}
SiteModule.ɵfac = function SiteModule_Factory(t) { return new (t || SiteModule)(); };
SiteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SiteModule });
SiteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _site_routing_module__WEBPACK_IMPORTED_MODULE_0__.SiteRoutingModule,
        _website_website_module__WEBPACK_IMPORTED_MODULE_1__.WebsiteModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SiteModule, { declarations: [_site_component__WEBPACK_IMPORTED_MODULE_2__.SiteComponent, _website_monthly_cycling_distance_cycling_distance_component__WEBPACK_IMPORTED_MODULE_3__.CyclingDistanceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _site_routing_module__WEBPACK_IMPORTED_MODULE_0__.SiteRoutingModule,
        _website_website_module__WEBPACK_IMPORTED_MODULE_1__.WebsiteModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselModule] }); })();


/***/ }),

/***/ 46081:
/*!*****************************************************************************!*\
  !*** ./src/app/site/website/gallery-lightbox/gallery-lightbox.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryLightboxComponent": () => (/* binding */ GalleryLightboxComponent)
/* harmony export */ });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 15977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);





function GalleryLightboxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryLightboxComponent_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.openLightbox(i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", image_r2.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", image_r2.caption, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function GalleryLightboxComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryLightboxComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.prevImage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u276E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryLightboxComponent_div_4_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.nextImage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u276F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryLightboxComponent_div_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.closeLightbox()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.images[ctx_r1.currentIndex].url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r1.images[ctx_r1.currentIndex].caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.images[ctx_r1.currentIndex].caption);
} }
class GalleryLightboxComponent {
    constructor(renderer, el, router) {
        this.renderer = renderer;
        this.el = el;
        this.router = router;
        this.images = [];
        this.isPreviewVisible = true;
        this.isLightboxOpen = false;
        this.currentIndex = 0;
    }
    ngOnInit() {
        this.onScroll();
        this.initializeSwipe();
    }
    ngOnDestroy() {
        this.removeKeyboardListener();
    }
    // Condition for each specific URL path
    isCondition1() {
        return this.router.url === '/';
    }
    isCondition2() {
        return this.router.url.includes('challenges/iday/independence');
    }
    openLightbox(index) {
        if (this.isPreviewVisible) {
            this.currentIndex = index;
            this.isLightboxOpen = true;
            this.applyFadeEffect();
        }
    }
    closeLightbox() {
        this.isLightboxOpen = false;
    }
    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.applyFadeEffect();
    }
    prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.applyFadeEffect();
    }
    applyFadeEffect() {
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
    initializeSwipe() {
        const lightboxContent = this.el.nativeElement.querySelector('.lightbox-content-container');
        if (lightboxContent) {
            this.hammerInstance = new (hammerjs__WEBPACK_IMPORTED_MODULE_0___default())(lightboxContent);
            this.hammerInstance.get('swipe').set({ direction: (hammerjs__WEBPACK_IMPORTED_MODULE_0___default().DIRECTION_HORIZONTAL) });
            this.hammerInstance.on('swipeleft', () => this.onSwipe('left'));
            this.hammerInstance.on('swiperight', () => this.onSwipe('right'));
        }
    }
    onSwipe(direction) {
        if (direction === 'left') {
            this.nextImage();
        }
        else if (direction === 'right') {
            this.prevImage();
        }
    }
    // Remove event listener for keyboard
    removeKeyboardListener() {
        this.renderer.listen('window', 'keydown', () => { }); // No-op listener to remove the existing one
    }
    handleKeyboardEvent(event) {
        if (event.key === 'Escape') {
            this.closeLightbox();
        }
    }
    handleKeyboardNextPrevEvent(event) {
        if (event.key === 'Escape') {
            this.closeLightbox();
        }
        else if (event.key === 'ArrowLeft') {
            this.prevImage();
        }
        else if (event.key === 'ArrowRight') {
            this.nextImage();
        }
    }
    onScroll() {
        const tiles = document.querySelectorAll('.gallery-tile');
        tiles.forEach(tile => {
            const rect = tile.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                tile.classList.add('zoom-in');
            }
            else {
                tile.classList.remove('zoom-in');
            }
        });
    }
}
GalleryLightboxComponent.ɵfac = function GalleryLightboxComponent_Factory(t) { return new (t || GalleryLightboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
GalleryLightboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GalleryLightboxComponent, selectors: [["app-gallery-lightbox"]], hostBindings: function GalleryLightboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function GalleryLightboxComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardNextPrevEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("scroll", function GalleryLightboxComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { images: "images", isPreviewVisible: "isPreviewVisible" }, decls: 5, vars: 2, consts: [[1, "gallery-container"], [1, "gallery-tiles"], ["class", "gallery-tile", 3, "click", 4, "ngFor", "ngForOf"], [1, "lightbox-content-container"], ["class", "lightbox", 4, "ngIf"], [1, "gallery-tile", 3, "click"], [1, "cbody"], [3, "src", "alt"], [1, "challenge-desc", 3, "innerHTML"], [1, "lightbox"], [1, "prev-btn", 3, "click"], [1, "lightbox-content"], [1, "imgAnim", 3, "src", "alt"], [1, "caption"], [1, "next-btn", 3, "click"], [1, "close-btn", 3, "click"]], template: function GalleryLightboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GalleryLightboxComponent_div_2_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GalleryLightboxComponent_div_4_Template, 11, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLightboxOpen);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".gallery-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.gallery-tiles[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 100px 20px;\n  gap: 100px 20px;\n  margin: 20px 0;\n}\n\n.gallery-tiles[_ngcontent-%COMP%]   .cbody[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #dedede;\n  transition: transform 0.3s ease;\n}\n\n.gallery-tiles[_ngcontent-%COMP%]   .cbody[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 325px;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n.gallery-tiles[_ngcontent-%COMP%]   .cbody[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n[_nghost-%COMP%]     .ch-head {\n  margin-top: 20px !important;\n}\n\n.fade-in[_ngcontent-%COMP%] {\n  animation: fadeIn 0.5s ease-in both;\n}\n\n.challenge-desc[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgb(0, 0, 0);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n\n.lightbox-content[_ngcontent-%COMP%] {\n  max-width: 80%;\n  max-height: 80%;\n  text-align: center;\n  position: relative;\n  animation: backInLeft 0.8s ease both;\n}\n\n.lightbox-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-width: 800px;\n  border-radius: 5px;\n}\n\n.caption[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: #fff;\n  font-size: 1.2rem;\n}\n\n.prev-btn[_ngcontent-%COMP%], .next-btn[_ngcontent-%COMP%], .close-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 97%;\n  transform: translateY(-50%);\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  font-size: 2rem;\n  padding: 20px;\n  z-index: 1001;\n  \n  transition: background 0.3s ease;\n}\n\n.prev-btn[_ngcontent-%COMP%] {\n  right: 60px;\n}\n\n.next-btn[_ngcontent-%COMP%] {\n  right: 0px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  top: 20px;\n  right: 0;\n  font-size: 3rem;\n  padding: 18px 10px;\n}\n\n.prev-btn[_ngcontent-%COMP%]:hover, .next-btn[_ngcontent-%COMP%]:hover, .close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.lightbox-content-container[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 80%;\n  max-height: 80%;\n  text-align: center;\n  animation: backInLeft 0.8s ease both;\n  z-index: 9999;\n}\n\n.lightbox-content-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-width: 800px;\n  border-radius: 5px;\n}\n\n@media (min-width: 768px) {\n  .gallery-tiles[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  }\n}\n\ndiv.gallery-tiles[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  border-radius: 5px 5px 0 0;\n}\n\ndiv.gallery-tiles[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  border-radius: 0 0 5px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnktbGlnaHRib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDREQUFBO0VBQ0Esb0JBQUE7RUFBQSxlQUFBO0VBQ0EsY0FBQTtBQURGOztBQUdFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUFESjs7QUFFSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBRUEsb0JBQUE7RUFDQSxpQkFBQTtBQUROOztBQUtJO0VBQ0Usc0JBQUE7QUFITjs7QUFRQTtFQUNFLDJCQUFBO0FBTEY7O0FBU0E7RUFDRSxtQ0FBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7QUFORjs7QUFXQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFSRjs7QUFXQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FBUkY7O0FBV0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBUkY7O0FBV0E7OztFQUdFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVEQUFBO0VBQ0EsZ0NBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7QUFSRjs7QUFXQTtFQUNFLFVBQUE7QUFSRjs7QUFlQTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBWkY7O0FBZUE7OztFQUdFLDhCQUFBO0FBWkY7O0FBZUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7QUFaRjs7QUFlQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVpGOztBQWlCQTtFQUNFO0lBQ0UsNERBQUE7RUFkRjtBQUNGOztBQW1CQTtFQUNFLDBCQUFBO0FBakJGOztBQW9CQTtFQUNFLDBCQUFBO0FBakJGIiwiZmlsZSI6ImdhbGxlcnktbGlnaHRib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8uLi4uLi4uLi4uLi4uLi4uLi4uLmNoYWxsZW5nZXMuLi4uLi4uLi4uLi4uLi4uLi4vLy8vL1xyXG5cclxuLmdhbGxlcnktY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LXRpbGVzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICBnYXA6IDEwMHB4IDIwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcblxyXG4gIC5jYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzMjVweDtcclxuICAgICAgLy9oZWlnaHQ6IDYwJTtcclxuICAgICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY2gtaGVhZCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmZhZGUtaW4ge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1pbiBib3RoO1xyXG59XHJcblxyXG4uY2hhbGxlbmdlLWRlc2Mge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcblxyXG4ubGlnaHRib3gge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLmxpZ2h0Ym94LWNvbnRlbnQge1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIG1heC1oZWlnaHQ6IDgwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGFuaW1hdGlvbjogYmFja0luTGVmdCAwLjhzIGVhc2UgYm90aDtcclxufVxyXG5cclxuLmxpZ2h0Ym94LWNvbnRlbnQgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5jYXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4ucHJldi1idG4sXHJcbi5uZXh0LWJ0bixcclxuLmNsb3NlLWJ0biB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogOTclO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB6LWluZGV4OiAxMDAxO1xyXG4gIC8qIEVuc3VyZSB0aGUgYnV0dG9ucyBzdGF5IGFib3ZlIHRoZSBsaWdodGJveCBjb250ZW50ICovXHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5wcmV2LWJ0biB7XHJcbiAgcmlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5uZXh0LWJ0biB7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLy8gICA6aG9zdCA6Om5nLWRlZXAgLmNoYWxsZW5nZS1kZXNjIC5jaC1oZWFke1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbi8vICB9XHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICB0b3A6IDIwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIHBhZGRpbmc6IDE4cHggMTBweDtcclxufVxyXG5cclxuLnByZXYtYnRuOmhvdmVyLFxyXG4ubmV4dC1idG46aG92ZXIsXHJcbi5jbG9zZS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxufVxyXG5cclxuLmxpZ2h0Ym94LWNvbnRlbnQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgbWF4LWhlaWdodDogODAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbmltYXRpb246IGJhY2tJbkxlZnQgMC44cyBlYXNlIGJvdGg7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuLmxpZ2h0Ym94LWNvbnRlbnQtY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5nYWxsZXJ5LXRpbGVzIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZGl2LmdhbGxlcnktdGlsZXM+ZGl2PmltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbn1cclxuXHJcbmRpdi5nYWxsZXJ5LXRpbGVzPmRpdj5wIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 47414:
/*!*****************************************************************************!*\
  !*** ./src/app/site/website/gallery/cycling-trip/cycling-trip.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CyclingTripComponent": () => (/* binding */ CyclingTripComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gallery-lightbox/gallery-lightbox.component */ 46081);




const _c0 = function (a0) { return { "background-image": a0 }; };
function CyclingTripComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15)(3, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r2 === ctx_r0.currentSlideIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, "url(" + slide_r1.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", slide_r1.description, " ");
} }
class CyclingTripComponent {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.currentSlideIndex = 0;
        this.autoplayDuration = 5000; // Duration in milliseconds
        this.isTransitioning = false; // To prevent button spamming
        //Banner top
        this.slides = [
            {
                image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
                title: 'Cycling Trip',
                description: 'Cycling Challenge is the perfect way to stay in shape and challenge yourself. Track your progress with this virtual challenge and see just how far you can go! Compete against your friends or set a personal goal and reach your potential. Great for cyclists of all levels.'
            },
        ];
        ////..........................tshirt preview.....................///
        this.images = [
            { url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg', caption: 'Caption for Image 1' },
            { url: 'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg', caption: 'Caption for Image 2' },
            { url: 'https://www.shutterstock.com/image-photo/landscape-road-mountains-600nw-2465573769.jpg', caption: 'Caption for Image 3' },
            { url: 'https://www.shutterstock.com/image-photo/landscape-road-mountains-600nw-2465573769.jpg', caption: 'Caption for Image 4' },
            { url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg', caption: 'Caption for Image 5' },
            { url: 'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg', caption: 'Caption for Image 6' },
        ];
    }
    ngOnInit() {
    }
}
CyclingTripComponent.ɵfac = function CyclingTripComponent_Factory(t) { return new (t || CyclingTripComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
CyclingTripComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CyclingTripComponent, selectors: [["app-cycling-trip"]], decls: 17, vars: 3, consts: [[1, "slider"], [1, "slider-container"], ["class", "slide", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], ["id", "hall-of-fame", 1, "section", "scroll-animation"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "mb-5"], [1, "small-title"], [1, "viewAllHallOfFame"], ["href", "javascript:void(0)"], [1, "col-lg-12", "scroll-animation"], [3, "images", "isPreviewVisible"], [1, "slide", 3, "ngStyle"], [1, "overlay"], [1, "slide-content"], [1, "text-white", "fw-semibold", "mb-3", "hero-title"], [1, "font-size-14"]], template: function CyclingTripComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CyclingTripComponent_div_2_Template, 7, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Memories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "From gurugram to Alwar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10)(13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-gallery-lightbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.images)("isPreviewVisible", true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__.GalleryLightboxComponent], styles: [".section[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  border-left: 2px solid blue;\n  padding: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 575px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 1s ease, transform 0.8s ease;\n  z-index: 0;\n  \n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  animation: slideIn 0.8s ease forwards;\n  z-index: 99;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  \n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  text-align: left;\n  opacity: 0;\n  \n  transform: translateX(-50px);\n  \n  min-width: 50%;\n  max-width: 50%;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 12px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #c0c0c0;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 12px;\n  z-index: 2;\n  display: flex;\n  gap: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.5rem;\n  width: 30px;\n  transition: background 0.3s ease;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n\n\n@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n    \n  }\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n\n.scroll-animation[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n\n.scroll-animation.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n\n@media (max-width: 768px) {\n  .slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n.image-overlay-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  max-width: 100%;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 660px;\n  display: block;\n  border-radius: 0px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(1, 1, 1, 0.5);\n  \n  transition: opacity 0.5s ease;\n  border-radius: 8px;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  text-align: center;\n}\n\n.overlay-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n}\n\n.overlay-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#challenge[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n}\n\n.chRuleHead[_ngcontent-%COMP%] {\n  color: #d1d1d1;\n}\n\n.chRuleDesc[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n  font-style: italic;\n}\n\n.challenge-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-height: 220px;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #515151 !important;\n}\n\n.viewAllHallOfFame[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n#hall-of-fame[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div.row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto !important;\n  width: inherit;\n}\n\n.accordion-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: #efefef;\n  color: white;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.accordion-header.active[_ngcontent-%COMP%] {\n  background-color: #dbdbdb;\n}\n\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.3s ease;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  padding: 0 20px;\n  background: #f9f9f9;\n  font-size: 16px;\n  transition: max-height 0.3s ease, padding 0.3s ease;\n}\n\n.accordion-content.show[_ngcontent-%COMP%] {\n  max-height: 270px;\n  padding: 15px 20px;\n}\n\n.accordion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN5Y2xpbmctdHJpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUU7RUFDRSwyQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtFQUNBLFVBQUE7RUFhQSxtQkFBQTtBQVhOOztBQUFNO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFFUjs7QUFBUTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtBQUVWOztBQUlNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFGUjs7QUFNTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUVBLDhCQUFBO0VBQ0Esa0JBQUE7QUFOUjs7QUFRUTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBTlY7O0FBU1E7RUFDRSxpQkFBQTtBQVBWOztBQVlJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQVZOOztBQVlNO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQVZSOztBQVlRO0VBQ0UsOEJBQUE7QUFWVjs7QUFnQkUsNERBQUE7O0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtJQUNBLHlCQUFBO0VBYko7RUFnQkU7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7SUFDQSxxQkFBQTtFQWRKO0FBQ0Y7O0FBaUJFO0VBQ0UsV0FBQTtBQWZKOztBQXFCRTtFQUNFLFVBQUE7RUFFQSwwREFBQTtBQW5CSjs7QUF1QkU7RUFDRSxVQUFBO0FBcEJKOztBQXdCRTtFQUNFLFlBQUE7QUFyQko7O0FBeUJFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQXRCSjtBQUNGOztBQTRCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQTFCSjs7QUE2QkU7RUFDRSxXQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUEzQko7O0FBOEJFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0Esa0JBQUE7QUE1Qko7O0FBK0JFO0VBQ0UsVUFBQTtBQTVCSjs7QUErQkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBRUEsa0JBQUE7QUE3Qko7O0FBaUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBOUJKOztBQWlDRTtFQUVFLFNBQUE7RUFDQSxnQkFBQTtBQS9CSjs7QUFrQ0U7RUFDRSxnQkFBQTtBQS9CSjs7QUFzQ0U7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7QUFuQ0o7O0FBc0NFO0VBQ0UsY0FBQTtBQW5DSjs7QUFzQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFuQ0o7O0FBd0NFO0VBQ0UsaUJBQUE7QUFyQ0o7O0FBeUNFO0VBQ0UsMkNBQUE7QUF0Q0o7O0FBeUNFO0VBQ0UscUJBQUE7QUF0Q0o7O0FBeUNFO0VBQ0UsWUFBQTtBQXRDSjs7QUF5Q0U7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUF0Q0o7O0FBK0NFO0VBQ0UsV0FBQTtFQUlBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBL0NKOztBQWtERTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUEvQ0o7O0FBa0RFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUEvQ0o7O0FBa0RFO0VBQ0UseUJBQUE7QUEvQ0o7O0FBa0RFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUEvQ0o7O0FBa0RFO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0FBL0NKOztBQWtERTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtREFBQTtBQS9DSjs7QUFrREU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBL0NKOztBQWtERTtFQUNFLFNBQUE7QUEvQ0oiLCJmaWxlIjoiY3ljbGluZy10cmlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1iLTUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibHVlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NzVweDtcclxuICBcclxuICAgIC5zbGlkZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgdHJhbnNmb3JtIDAuOHMgZWFzZTtcclxuICAgICAgei1pbmRleDogMDtcclxuICBcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICBcclxuICAgICAgICAuc2xpZGUtY29udGVudCB7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNsaWRlSW4gMC44cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICAgIC8qIE92ZXJsYXkgZWZmZWN0ICovXHJcbiAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAvKiBBZGp1c3Qgb3BhY2l0eSBhbmQgY29sb3IgaGVyZSAqL1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICAgICAgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgLy8gbGVmdDogMjBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLyogSW5pdGlhbCBvcGFjaXR5IGZvciBzbW9vdGggZmFkZS1pbiAqL1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XHJcbiAgICAgICAgLyogSW5pdGlhbCBwb3NpdGlvbiBvZmYgdGhlIHNjcmVlbiAqL1xyXG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjYzBjMGMwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNsaWRlci1jb250cm9scyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA0NHB4O1xyXG4gICAgICByaWdodDogMTJweDtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gIFxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBLZXlmcmFtZSBhbmltYXRpb24gZm9yIHNsaWRpbmcgaW4gY29udGVudCBmcm9tIHRoZSBsZWZ0ICovXHJcbiAgQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuICAgICAgLyogU3RhcnQgb2ZmIHRoZSBzY3JlZW4gKi9cclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIC8qIFNsaWRlIGludG8gcGxhY2UgKi9cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmN1cnJlbmN5LXByaWNlIHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvL3Njcm9sbFxyXG4gIC8vc2Nyb2xsIGFuaW1hdGlvblxyXG4gIC5zY3JvbGwtYW5pbWF0aW9uIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjZzIGVhc2Utb3V0O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuc2Nyb2xsLWFuaW1hdGlvbi5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXJyZW5jeS1wcmljZSB7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNsaWRlci1jb250YWluZXIgLnNsaWRlIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8vY2hhbGxlbmdlIHJ1bGVcclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1vdmVybGF5LWNvbnRhaW5lciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA2NjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDEsIDAuNSk7XHJcbiAgICAvKiBTZW1pLXRyYW5zcGFyZW50IGJsYWNrIG92ZXJsYXkgKi9cclxuICBcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCBoMiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheS1jb250ZW50IHAge1xyXG4gICAgLy8gZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLy8gLmNoYWxsZW5nZS1yb3d7XHJcbiAgLy8gICAvLyBtYXJnaW46IDAgNTBweDtcclxuICAvLyB9XHJcbiAgXHJcbiAgI2NoYWxsZW5nZSAuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNoUnVsZUhlYWQge1xyXG4gICAgY29sb3I6ICNkMWQxZDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaFJ1bGVEZXNjIHtcclxuICAgIGNvbG9yOiAjYzRjNGM0O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAuY2hhbGxlbmdlLXJvdyAuY2FyZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMjBweFxyXG4gIH1cclxuICBcclxuICBcclxuICAuYm9yZGVyLWJvdHRvbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUxNTE1MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudmlld0FsbEhhbGxPZkZhbWV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gICNoYWxsLW9mLWZhbWUgPiBkaXYgPiBkaXYucm93ID4gZGl2ID4gZGl2ID4gYSA+IHNwYW4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAub3dsLWNhcm91c2VsIC5vd2wtaXRlbSBpbWcge1xyXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLy8vLy9BY2NvcmRpb24gXHJcbiAgLy8vIFxyXG4gIFxyXG4gIC5hY2NvcmRpb24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gbWF4LXdpZHRoOiA4MDBweDtcclxuICAgXHJcbiAgICBcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIgaSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRlbnQge1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2UsIHBhZGRpbmcgMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRlbnQuc2hvdyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNzBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250ZW50IHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ 94673:
/*!*****************************************************************************!*\
  !*** ./src/app/site/website/gallery/hall-of-fame/hall-of-fame.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HallOfFameComponent": () => (/* binding */ HallOfFameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gallery-lightbox/gallery-lightbox.component */ 46081);




const _c0 = function (a0) { return { "background-image": a0 }; };
function HallOfFameComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15)(3, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r2 === ctx_r0.currentSlideIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, "url(" + slide_r1.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", slide_r1.description, " ");
} }
class HallOfFameComponent {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.lastScrollTop = 0;
        this.selectedIndex = null;
        this.partnerLogosCarousel = [];
        this.partnerReviewsCarousel = [];
        this.currentSection = 'home';
        this.reviews = [
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
        this.logos = [
            { image: 'assets/images/crypto/features-img/monthly/t1.png', name: 'Mark Hurley', position: 'CEO & Lead' },
            { image: 'assets/images/crypto/features-img/monthly/t2.png', name: 'Calvin Smith', position: 'Blockchain Developer' },
            { image: 'assets/images/crypto/features-img/monthly/m1.png', name: 'Vickie Sample', position: 'Designer' },
            { image: 'assets/images/crypto/features-img/monthly/m2.png', name: 'Alma Farley', position: 'App Developer' },
            { image: 'assets/images/crypto/features-img/monthly/m3.png', name: 'Amy Hood', position: 'Designer' },
            { image: 'assets/images/crypto/features-img/monthly/m4.png', name: 'John Doe', position: 'Project Manager' },
        ];
        this.medals = [
            { url: 'assets/images/crypto/features-img/monthly/t1.png', caption: 'Mark Hurley' },
            { url: 'assets/images/crypto/features-img/monthly/t2.png', caption: 'Calvin Smith' },
            { url: 'assets/images/crypto/features-img/monthly/m1.png', caption: 'Vickie Sample' },
            { url: 'assets/images/crypto/features-img/monthly/m2.png', caption: 'Alma Farley' },
            { url: 'assets/images/crypto/features-img/monthly/m3.png', caption: 'Amy Hood' },
            { url: 'assets/images/crypto/features-img/monthly/m4.png', caption: 'John Doe' },
        ];
        this.currentSlideIndex = 0;
        this.autoplayDuration = 5000; // Duration in milliseconds
        this.isTransitioning = false; // To prevent button spamming
        this.carouselOption = {
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
        };
        //Testimonial
        this.carouselItems = [
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
        this.timelineCarousel = {
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
        };
        //Banner top
        this.slides = [
            {
                image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
                title: 'Hall of Fame',
                description: 'Cycling Challenge is the perfect way to stay in shape and challenge yourself. Track your progress with this virtual challenge and see just how far you can go! Compete against your friends or set a personal goal and reach your potential. Great for cyclists of all levels.'
            },
        ];
        ////..........................tshirt preview.....................///
        this.images = [
            { url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg', caption: 'Caption for Image 1' },
            { url: 'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg', caption: 'Caption for Image 2' },
            { url: 'https://www.shutterstock.com/image-photo/landscape-road-mountains-600nw-2465573769.jpg', caption: 'Caption for Image 3' },
            { url: 'https://www.shutterstock.com/image-photo/landscape-road-mountains-600nw-2465573769.jpg', caption: 'Caption for Image 4' },
            { url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg', caption: 'Caption for Image 5' },
            { url: 'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg', caption: 'Caption for Image 6' },
        ];
        this.accordionData = [
            { title: 'How many run/walk are acceptable in a day?', content: 'A maximum of 2 run/walk are acceptable in a day. More than 2 won\'t be counted.' },
            { title: 'Is it necessary to perform the activity daily?', content: 'No, it is not necessary to perform the activity every day. You can complete the challenge at your own pace. You just need to finish your chosen distance in the given duration of the event.' },
            {
                title: 'How to Upload the Activity Data?',
                content: `
      (1) Data of STRAVA users will be taken automatically from STRAVA app once they join the challenge STRAVA group. (Link to join the group will be shared before the challenge starts). <br>
      (2) For those who are not using Strava, they can send the activities screenshot via email at "support@pedalspower.com" once every 5 days.`
            },
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
    }
    ngOnInit() {
        // this.initializeSwipe();
        // this.loadPartnerLogos();
        //this.loadPartnerReviews();
    }
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
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
    }
    toggleAccordion(index) {
        this.selectedIndex = this.selectedIndex === index ? null : index;
    }
}
HallOfFameComponent.ɵfac = function HallOfFameComponent_Factory(t) { return new (t || HallOfFameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
HallOfFameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HallOfFameComponent, selectors: [["app-hall-of-fame"]], decls: 17, vars: 2, consts: [[1, "slider"], [1, "slider-container"], ["class", "slide", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], ["id", "hall-of-fame", 1, "section", "scroll-animation"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "mb-5"], [1, "small-title"], [1, "viewAllHallOfFame"], ["href", "javascript:void(0)"], [1, "col-lg-12", "scroll-animation"], [3, "images"], [1, "slide", 3, "ngStyle"], [1, "overlay"], [1, "slide-content"], [1, "text-white", "fw-semibold", "mb-3", "hero-title"], [1, "font-size-14"]], template: function HallOfFameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HallOfFameComponent_div_2_Template, 7, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Happy Winners");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Hall of Fame");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10)(13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-gallery-lightbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.images);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__.GalleryLightboxComponent], styles: [".section[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  border-left: 2px solid blue;\n  padding: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 575px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 1s ease, transform 0.8s ease;\n  z-index: 0;\n  \n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  animation: slideIn 0.8s ease forwards;\n  z-index: 99;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  \n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  text-align: left;\n  opacity: 0;\n  \n  transform: translateX(-50px);\n  \n  min-width: 50%;\n  max-width: 50%;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 12px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #c0c0c0;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 12px;\n  z-index: 2;\n  display: flex;\n  gap: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.5rem;\n  width: 30px;\n  transition: background 0.3s ease;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n\n\n@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n    \n  }\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n\n.scroll-animation[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n\n.scroll-animation.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n\n@media (max-width: 768px) {\n  .slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n.image-overlay-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  max-width: 100%;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 660px;\n  display: block;\n  border-radius: 0px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(1, 1, 1, 0.5);\n  \n  transition: opacity 0.5s ease;\n  border-radius: 8px;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  text-align: center;\n}\n\n.overlay-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n}\n\n.overlay-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbGwtb2YtZmFtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUU7RUFDRSwyQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtFQUNBLFVBQUE7RUFhQSxtQkFBQTtBQVhOOztBQUFNO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFFUjs7QUFBUTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtBQUVWOztBQUlNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFGUjs7QUFNTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUVBLDhCQUFBO0VBQ0Esa0JBQUE7QUFOUjs7QUFRUTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBTlY7O0FBU1E7RUFDRSxpQkFBQTtBQVBWOztBQVlJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQVZOOztBQVlNO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQVZSOztBQVlRO0VBQ0UsOEJBQUE7QUFWVjs7QUFnQkUsNERBQUE7O0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtJQUNBLHlCQUFBO0VBYko7RUFnQkU7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7SUFDQSxxQkFBQTtFQWRKO0FBQ0Y7O0FBa0JFO0VBQ0UsV0FBQTtBQWhCSjs7QUF1QkU7RUFDRSxVQUFBO0VBRUEsMERBQUE7QUFyQko7O0FBeUJFO0VBQ0UsVUFBQTtBQXRCSjs7QUEwQkU7RUFDRSxZQUFBO0FBdkJKOztBQTJCRTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGVBQUE7RUF4Qko7QUFDRjs7QUFrQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFoQ0o7O0FBbUNFO0VBQ0UsV0FBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBakNKOztBQW9DRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLGtCQUFBO0FBbENKOztBQXFDRTtFQUNFLFVBQUE7QUFsQ0o7O0FBcUNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUVBLGtCQUFBO0FBbkNKOztBQXVDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXBDSjs7QUF1Q0U7RUFFRSxTQUFBO0VBQ0EsZ0JBQUE7QUFyQ0o7O0FBd0NFO0VBQ0UsZ0JBQUE7QUFyQ0oiLCJmaWxlIjoiaGFsbC1vZi1mYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1iLTUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibHVlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NzVweDtcclxuICBcclxuICAgIC5zbGlkZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgdHJhbnNmb3JtIDAuOHMgZWFzZTtcclxuICAgICAgei1pbmRleDogMDtcclxuICBcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICBcclxuICAgICAgICAuc2xpZGUtY29udGVudCB7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNsaWRlSW4gMC44cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICAgIC8qIE92ZXJsYXkgZWZmZWN0ICovXHJcbiAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAvKiBBZGp1c3Qgb3BhY2l0eSBhbmQgY29sb3IgaGVyZSAqL1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICAgICAgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgLy8gbGVmdDogMjBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLyogSW5pdGlhbCBvcGFjaXR5IGZvciBzbW9vdGggZmFkZS1pbiAqL1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XHJcbiAgICAgICAgLyogSW5pdGlhbCBwb3NpdGlvbiBvZmYgdGhlIHNjcmVlbiAqL1xyXG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjYzBjMGMwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNsaWRlci1jb250cm9scyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA0NHB4O1xyXG4gICAgICByaWdodDogMTJweDtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gIFxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBLZXlmcmFtZSBhbmltYXRpb24gZm9yIHNsaWRpbmcgaW4gY29udGVudCBmcm9tIHRoZSBsZWZ0ICovXHJcbiAgQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuICAgICAgLyogU3RhcnQgb2ZmIHRoZSBzY3JlZW4gKi9cclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIC8qIFNsaWRlIGludG8gcGxhY2UgKi9cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmN1cnJlbmN5LXByaWNlIHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvL3Njcm9sbFxyXG4gIC8vc2Nyb2xsIGFuaW1hdGlvblxyXG4gIC5zY3JvbGwtYW5pbWF0aW9uIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjZzIGVhc2Utb3V0O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuc2Nyb2xsLWFuaW1hdGlvbi5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXJyZW5jeS1wcmljZSB7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNsaWRlci1jb250YWluZXIgLnNsaWRlIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vY2hhbGxlbmdlIHJ1bGVcclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1vdmVybGF5LWNvbnRhaW5lciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA2NjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDEsIDAuNSk7XHJcbiAgICAvKiBTZW1pLXRyYW5zcGFyZW50IGJsYWNrIG92ZXJsYXkgKi9cclxuICBcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCBoMiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheS1jb250ZW50IHAge1xyXG4gICAgLy8gZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 50850:
/*!*****************************************************!*\
  !*** ./src/app/site/website/home/home.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 15977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 37297);
/* harmony import */ var _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gallery-lightbox/gallery-lightbox.component */ 46081);









const _c0 = function (a0) { return { "background-image": a0 }; };
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 56)(3, "h3", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 59)(8, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Register Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Know More");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", i_r3 === ctx_r0.currentSlideIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, "url(" + slide_r2.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](slide_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", slide_r2.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/shop/product-detail/" + slide_r2.productid);
} }
function HomeComponent_ng_container_165_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63)(1, "div")(2, "div", 64)(3, "div", 26)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 68)(9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r4.stars, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.review);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("-", item_r4.reviewer, "");
} }
function HomeComponent_ng_container_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_ng_container_165_ng_template_1_Template, 15, 4, "ng-template", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
class HomeComponent {
    constructor(renderer, el, sanitizer) {
        this.renderer = renderer;
        this.el = el;
        this.sanitizer = sanitizer;
        this.currentIndex = 0;
        this.itemsPerSlide = 6; // 2 rows * 3 columns
        this.displayedItems = [];
        this.partnerLogosCarousel = [];
        this.partnerReviewsCarousel = [];
        this.groupedItems = [];
        this.activeDropdown = null;
        // set the currenr year
        this.year = new Date().getFullYear();
        this.currentSection = 'home';
        // Track the index of the currently open submenu and sub-submenu
        this.activeSubmenuIndex = null;
        this.activeSubSubmenuIndex = {};
        this.reviews = [
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
        this.logos = [
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
        this.currentSlideIndex = 0;
        this.autoplayDuration = 5000; // Duration in milliseconds
        this.isTransitioning = false; // To prevent button spamming
        this.images = [
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
        this.carouselItems = [
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
        this.timelineCarousel = {
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
        };
        this.carouselOption = {
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
        };
        this.slides = [
            { image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png', title: 'Cycling Challenge',
                description: `
      A Cycle Challenge is an exciting way to push your limits, stay active, and engage with a 
      community of like-minded enthusiasts. Whether you're a beginner or seasoned cyclist, these 
      challenges motivate you to achieve specific distance goals within a set time frame. 
      Participants often enjoy the thrill of tracking their progress and celebrating their 
      success with exclusive medals and rewards upon completion.
      `,
                productid: 1
            },
            { image: 'assets/images/crypto/features-img/challenges/run/b5.jpg', title: 'Running Challenge',
                description: `
      A Running Challenge is a fitness event designed to motivate participants to achieve a set 
      running goal within a specific timeframe. Whether you’re aiming for distance or consistency, 
      these challenges push you to stay active, track your progress, and experience the joy of 
      reaching your fitness milestones. Completing the challenge often brings a sense of 
      accomplishment and can be rewarded with medals or other recognition.
      `,
                productid: 2
            },
            { image: 'assets/images/crypto/features-img/challenges/walk/w1.jpg', title: 'Walk Challenge',
                description: `
      A Walk Challenge encourages participants to stay active by setting and achieving walking 
      goals over a defined period. Whether it's daily steps or total distance, this challenge 
      promotes consistent movement, making it perfect for all fitness levels. It’s a simple yet 
      effective way to improve health while enjoying the outdoors. Completing the challenge often 
      comes with rewards and a sense of accomplishment, motivating you to keep moving forward.
      `,
                productid: 3
            }
        ];
        this.cards = [
            { image: 'path/to/image1.jpg', title: 'Card 1', description: 'Description for card 1' },
            { image: 'path/to/image2.jpg', title: 'Card 2', description: 'Description for card 2' },
            { image: 'path/to/image3.jpg', title: 'Card 3', description: 'Description for card 3' }
        ];
    }
    ngOnInit() {
        //this.restoreScrollPosition();
        this.initializeSwipe();
        this.startAutoplay();
        this.loadPartnerLogos();
        this.loadPartnerReviews();
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
    ngOnDestroy() {
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
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
    }
    initializeSwipe() {
        const sliderContainer = this.el.nativeElement.querySelector('.slider-container');
        const hammer = new hammerjs__WEBPACK_IMPORTED_MODULE_0__(sliderContainer);
        hammer.on('swipeleft', () => this.onSwipe('left'));
        hammer.on('swiperight', () => this.onSwipe('right'));
    }
    onSwipe(direction) {
        if (this.isTransitioning)
            return; // Prevent new swipe during transition
        this.stopAutoplay(); // Stop current interval
        if (direction === 'left') {
            this.nextSlide();
        }
        else if (direction === 'right') {
            this.previousSlide();
        }
        this.resetAutoplay(); // Restart interval after swipe
    }
    startAutoplay() {
        this.stopAutoplay(); // Ensure no overlapping intervals
        this.autoplayInterval = setInterval(() => this.nextSlide(), this.autoplayDuration);
    }
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null; // Set to null for consistency
        }
    }
    resetAutoplay() {
        this.startAutoplay();
    }
    nextSlide() {
        if (this.isTransitioning)
            return; // Prevent double clicks during transition
        this.isTransitioning = true;
        this.stopAutoplay(); // Stop the interval before manually changing the slide
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
        setTimeout(() => (this.isTransitioning = false), 1000); // Timeout should match CSS transition
        this.resetAutoplay(); // Restart the interval after slide change
    }
    previousSlide() {
        if (this.isTransitioning)
            return; // Prevent double clicks during transition
        this.isTransitioning = true;
        this.stopAutoplay(); // Stop the interval before manually changing the slide
        this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
        setTimeout(() => (this.isTransitioning = false), 1000); // Timeout should match CSS transition
        this.resetAutoplay(); // Restart the interval after slide change
    }
    onScroll() {
        const cards = document.querySelectorAll('.card');
        const windowHeight = window.innerHeight;
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const offset = 150; // Adjust this value to control when the zoom effect starts
            if (rect.top <= windowHeight - offset && rect.bottom >= offset) {
                card.classList.add('zoom-in');
            }
            else {
                card.classList.remove('zoom-in');
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 166, vars: 5, consts: [[1, "slider"], [1, "slider-container"], ["class", "slide", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], [1, "slider-controls"], [3, "click"], [1, "section", "bg-white", "p-0"], [1, "container-fluid"], [1, "currency-price"], [1, "row"], [1, "col-md-4"], [1, "card"], [1, "card-body"], [1, "media"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "rounded-circle", "bg-soft", "bg-warning", "text-warning", "font-size-18"], [1, "mdi", "mdi-bike"], [1, "media-body"], [1, "text-muted"], [1, "champ"], [1, "text-muted", "text-truncate", "mb-0"], [1, "mdi", "mdi-arrow-up", "ms-1", "text-success"], [1, "avatar-title", "rounded-circle", "bg-soft", "bg-primary", "text-primary", "font-size-18"], [1, "mdi", "mdi-run"], [1, "avatar-title", "rounded-circle", "bg-soft", "bg-info", "text-info", "font-size-18"], [1, "mdi", "mdi-walk"], ["id", "features", 1, "section"], [1, "col-lg-12"], [1, "mb-5"], [1, "small-title"], [1, "row", "align-items-center", "pt-4"], [1, "col-md-6", "col-sm-8", "scroll-animation"], ["src", "assets/images/crypto/features-img/Road-Cycling.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "col-md-5", "ms-auto"], [1, "mt-4", "mt-md-auto", "scroll-animation"], [1, "d-flex", "align-items-center", "mb-2"], [1, "features-number", "fw-semibold", "display-4", "me-3"], [1, "mb-0"], [1, "text-muted", "mt-4"], [1, "mdi", "mdi-circle-medium", "text-success", "me-1"], [1, "row", "align-items-center", "mt-5", "pt-md-5"], [1, "col-md-5", "scroll-animation"], [1, "mt-4", "mt-md-0"], [1, "col-md-6", "col-sm-8", "ms-md-auto", "scroll-animation"], [1, "mt-4", "me-md-0"], ["src", "assets/images/crypto/features-img/Road-Cycling-1.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["id", "hall-of-fame", 1, "section", "scroll-animation"], [1, "viewAllHallOfFame"], [1, "col-lg-12", "scroll-animation"], [3, "images", "isPreviewVisible"], ["id", "testimonial", 1, "section", "bg-white"], [1, "row", "mt-4"], [1, "hori-timeline"], [1, "events", "navs-carousel", 3, "options"], [4, "ngFor", "ngForOf"], [1, "slide", 3, "ngStyle"], [1, "overlay"], [1, "slide-content"], [1, "fw-semibold", "mb-3", "hero-title", 2, "color", "#c0c0c0"], [1, "font-size-14", 2, "color", "#c0c0c0"], [1, "button-items", "mt-4"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", 3, "routerLink"], ["href", "javascript: void(0);", 1, "btn", "btn-light"], ["carouselSlide", ""], [1, "item", "event-list"], [1, "event-date"], ["alt", "", 1, "rounded-circle", "avatar-lg", 2, "margin", "auto", "width", "auto", 3, "src"], [1, "event-down-icon"], [1, "bx", "bx-down-arrow-circle", "h1", "text-primary", "down-arrow-icon"], [1, "mt-3", "px-3"], [1, "review-star-icon"], ["alt", "", 2, "display", "initial", "width", "100px", 3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_4_listener() { return ctx.previousSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u276E");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() { return ctx.nextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u276F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "section", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16)(20, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Cycle challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 18)(23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "100 km");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Champions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 18)(29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "200 KM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Champions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 18)(35, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "300 KM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Champions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 9)(41, "div", 10)(42, "div", 11)(43, "div", 12)(44, "div", 13)(45, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 16)(48, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Run Challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 18)(51, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "30 km");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Champions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 18)(57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "50 KM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Champions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 18)(63, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "100 KM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " Champions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 9)(69, "div", 10)(70, "div", 11)(71, "div", 12)(72, "div", 13)(73, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 16)(76, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Walk Challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 18)(79, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "30 km");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " Champions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 18)(85, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "50 KM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Champions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 18)(91, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "100 KM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Champions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "section", 25)(97, "div", 6)(98, "div", 8)(99, "div", 26)(100, "div", 27)(101, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Join Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Embark on a fun cycling trip or elevate your experience by taking on a running or cycling challenge.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 29)(106, "div", 30)(107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 32)(110, "div", 33)(111, "div", 34)(112, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "Cycling trips");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, " Whether it\u2019s a leisurely ride through scenic routes or a challenging adventure across rugged terrains, these trips cater to all levels of cyclists. They provide a perfect blend of fitness, exploration, and the thrill of discovering hidden gems along the journey. Experience the joy of the open road and connect with nature in a way that only cycling can offer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 37)(119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " Fully supported weekend getaway rides. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, " 3-4 days long supported inter-city cycling trips. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, " Month long cycling expeditions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 39)(129, "div", 40)(130, "div", 41)(131, "div", 34)(132, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, " In these Cycling and Running challenges, you set a target distance to achieve within a month. Successfully reaching your goal earns you a uniquely designed challenge medal along with exclusive rewards and goodies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 42)(139, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "section", 45)(142, "div", 6)(143, "div", 8)(144, "div", 26)(145, "div", 27)(146, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "h4", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Challenges we provide");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "app-gallery-lightbox", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "section", 49)(153, "div", 6)(154, "div", 8)(155, "div", 26)(156, "div", 27)(157, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Testimonial");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "Experience of Participants");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 50)(162, "div", 26)(163, "div", 51)(164, "owl-carousel-o", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](165, HomeComponent_ng_container_165_Template, 2, 0, "ng-container", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.images)("isPreviewVisible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.timelineCarousel);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.carouselItems);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselSlideDirective, _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_1__.GalleryLightboxComponent], styles: [".slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 575px;\n}\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 1s ease, transform 0.8s ease;\n  z-index: 0;\n  \n}\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n}\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  animation: slideIn 0.8s ease forwards;\n  z-index: 99;\n}\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  \n  z-index: 1;\n}\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  color: #fff;\n  text-align: left;\n  opacity: 0;\n  \n  transform: translateX(-50px);\n  \n  min-width: 200px;\n  max-width: 500px;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 12px;\n}\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #c0c0c0;\n}\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 12px;\n  z-index: 2;\n  display: flex;\n  gap: 2px;\n}\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  color: #5a5a5a;\n  cursor: pointer;\n  font-size: 1.5rem;\n  width: 30px;\n  transition: background 0.3s ease;\n}\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n.mb-5[_ngcontent-%COMP%] {\n  border-left: 2px solid blue;\n  padding: 10px;\n}\n\n@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n    \n  }\n}\n.currency-price[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n.scroll-animation[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n.scroll-animation.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.currency-price[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n.ch-head[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.ch-desc[_ngcontent-%COMP%] {\n  text-align: justify !important;\n}\n@media (max-width: 480px) {\n  .slider-container[_ngcontent-%COMP%] {\n    height: 415px;\n  }\n  p.text-muted.text-truncate.mb-0[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n.champ[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtFQUNBLFVBQUE7RUFhQSxtQkFBQTtBQVhSO0FBQVE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtBQUVaO0FBQVk7RUFDSSxxQ0FBQTtFQUNBLFdBQUE7QUFFaEI7QUFJUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FBRlo7QUFNUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsOEJBQUE7RUFDQSxrQkFBQTtBQU5aO0FBUVk7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQU5oQjtBQVNZO0VBQ0ksaUJBQUE7QUFQaEI7QUFZSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7QUFWUjtBQVlRO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQVZaO0FBWVk7RUFDSSw4QkFBQTtBQVZoQjtBQWdCQTtFQUNJLDJCQUFBO0VBQ0EsYUFBQTtBQWJKO0FBbUJBLDREQUFBO0FBQ0E7RUFDSTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtJQUNBLHlCQUFBO0VBaEJOO0VBbUJFO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0lBQ0EscUJBQUE7RUFqQk47QUFDRjtBQXFCQTtFQUNJLFdBQUE7QUFuQko7QUEwQkE7RUFDSSxVQUFBO0VBRUEsMERBQUE7QUF4Qko7QUEyQkE7RUFDSSxVQUFBO0FBeEJKO0FBNEJBO0VBQ0ksWUFBQTtBQXpCSjtBQTRCQTtFQUNJLDZCQUFBO0FBekJKO0FBNEJBO0VBQ0ksOEJBQUE7QUF6Qko7QUE0QkE7RUFDSTtJQUNJLGFBQUE7RUF6Qk47RUE0QkU7SUFDSSxlQUFBO0VBMUJOO0FBQ0Y7QUE4QkU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBNUJKO0FBK0JBO0VBQ0ksa0JBQUE7QUE1QkoiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTc1cHg7XHJcblxyXG4gICAgLnNsaWRlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLCB0cmFuc2Zvcm0gMC44cyBlYXNlO1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgICAgIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjhzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8qIE92ZXJsYXkgZWZmZWN0ICovXHJcbiAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAvKiBBZGp1c3Qgb3BhY2l0eSBhbmQgY29sb3IgaGVyZSAqL1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDQ0cHg7XHJcbiAgICAgICAgICAgIC8vIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAvKiBJbml0aWFsIG9wYWNpdHkgZm9yIHNtb290aCBmYWRlLWluICovXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XHJcbiAgICAgICAgICAgIC8qIEluaXRpYWwgcG9zaXRpb24gb2ZmIHRoZSBzY3JlZW4gKi9cclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYzBjMGMwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZXItY29udHJvbHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDQ0cHg7XHJcbiAgICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogMnB4O1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICM1YTVhNWE7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWItNSB7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsdWU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBLZXlmcmFtZSBhbmltYXRpb24gZm9yIHNsaWRpbmcgaW4gY29udGVudCBmcm9tIHRoZSBsZWZ0ICovXHJcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gICAgICAgIC8qIFN0YXJ0IG9mZiB0aGUgc2NyZWVuICovXHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgLyogU2xpZGUgaW50byBwbGFjZSAqL1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmN1cnJlbmN5LXByaWNlIHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG5cclxuXHJcbi8vc2Nyb2xsXHJcbi8vc2Nyb2xsIGFuaW1hdGlvblxyXG4uc2Nyb2xsLWFuaW1hdGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLy90cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjZzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uc2Nyb2xsLWFuaW1hdGlvbi5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvL3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLmN1cnJlbmN5LXByaWNlIHtcclxuICAgIGJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmNoLWhlYWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaC1kZXNjIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MTVweDtcclxuICAgIH1cclxuXHJcbiAgICBwLnRleHQtbXV0ZWQudGV4dC10cnVuY2F0ZS5tYi0wIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNoYW1wIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 66468:
/*!**********************************************************************************!*\
  !*** ./src/app/site/website/iday/independence-day/independence-day.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndependenceDayComponent": () => (/* binding */ IndependenceDayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 37297);
/* harmony import */ var _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gallery-lightbox/gallery-lightbox.component */ 46081);







const _c0 = function (a0) { return { "background-image": a0 }; };
function IndependenceDayComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 37)(3, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 40)(8, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Register Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const slide_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r4 === ctx_r0.currentSlideIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, "url(" + slide_r3.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", slide_r3.description, " ");
} }
function IndependenceDayComponent_ng_container_30_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43)(1, "div")(2, "div", 44)(3, "div", 6)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 48)(9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r5.stars, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.review);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", item_r5.reviewer, "");
} }
function IndependenceDayComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IndependenceDayComponent_ng_container_30_ng_template_1_Template, 15, 4, "ng-template", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function IndependenceDayComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndependenceDayComponent_div_141_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const i_r9 = restoredCtx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.toggleAccordion(i_r9)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r2.selectedIndex === i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.selectedIndex === i_r9 ? "bx bx-chevron-up" : "bx bx-chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx_r2.selectedIndex === i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r8.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class IndependenceDayComponent {
    constructor(renderer, el, sanitizer) {
        this.renderer = renderer;
        this.el = el;
        this.sanitizer = sanitizer;
        this.lastScrollTop = 0;
        this.selectedIndex = null;
        this.partnerLogosCarousel = [];
        this.partnerReviewsCarousel = [];
        this.currentSection = 'home';
        this.reviews = [
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
        this.logos = [
            { image: 'assets/images/crypto/features-img/monthly/t1.png', name: 'Mark Hurley', position: 'CEO & Lead' },
            { image: 'assets/images/crypto/features-img/monthly/t2.png', name: 'Calvin Smith', position: 'Blockchain Developer' },
            { image: 'assets/images/crypto/features-img/monthly/m1.png', name: 'Vickie Sample', position: 'Designer' },
            { image: 'assets/images/crypto/features-img/monthly/m2.png', name: 'Alma Farley', position: 'App Developer' },
            { image: 'assets/images/crypto/features-img/monthly/m3.png', name: 'Amy Hood', position: 'Designer' },
            { image: 'assets/images/crypto/features-img/monthly/m4.png', name: 'John Doe', position: 'Project Manager' },
        ];
        this.medals = [
            { url: 'assets/images/crypto/features-img/monthly/t1.png', caption: 'Mark Hurley' },
            { url: 'assets/images/crypto/features-img/monthly/t2.png', caption: 'Calvin Smith' },
            { url: 'assets/images/crypto/features-img/monthly/m1.png', caption: 'Vickie Sample' },
            { url: 'assets/images/crypto/features-img/monthly/m2.png', caption: 'Alma Farley' },
            { url: 'assets/images/crypto/features-img/monthly/m3.png', caption: 'Amy Hood' },
            { url: 'assets/images/crypto/features-img/monthly/m4.png', caption: 'John Doe' },
        ];
        this.currentSlideIndex = 0;
        this.autoplayDuration = 5000; // Duration in milliseconds
        this.isTransitioning = false; // To prevent button spamming
        this.carouselOption = {
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
        };
        //Testimonial
        this.carouselItems = [
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
        this.timelineCarousel = {
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
        };
        //Banner top
        this.slides = [
            {
                image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
                title: 'Independence day Challenge',
                description: 'Cycling Challenge is the perfect way to stay in shape and challenge yourself. Track your progress with this virtual challenge and see just how far you can go! Compete against your friends or set a personal goal and reach your potential. Great for cyclists of all levels.'
            },
        ];
        ////..........................tshirt preview.....................///
        this.images = [
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
        this.accordionData = [
            { title: 'How many run/walk are acceptable in a day?', content: 'A maximum of 2 run/walk are acceptable in a day. More than 2 won\'t be counted.' },
            { title: 'Is it necessary to perform the activity daily?', content: 'No, it is not necessary to perform the activity every day. You can complete the challenge at your own pace. You just need to finish your chosen distance in the given duration of the event.' },
            {
                title: 'How to Upload the Activity Data?',
                content: `
      (1) Data of STRAVA users will be taken automatically from STRAVA app once they join the challenge STRAVA group. (Link to join the group will be shared before the challenge starts). <br>
      (2) For those who are not using Strava, they can send the activities screenshot via email at "support@pedalspower.com" once every 5 days.`
            },
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
    }
    ngOnInit() {
        // this.initializeSwipe();
        // this.loadPartnerLogos();
        //this.loadPartnerReviews();
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
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
    }
    toggleAccordion(index) {
        this.selectedIndex = this.selectedIndex === index ? null : index;
    }
}
IndependenceDayComponent.ɵfac = function IndependenceDayComponent_Factory(t) { return new (t || IndependenceDayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer)); };
IndependenceDayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndependenceDayComponent, selectors: [["app-independence-day"]], decls: 142, vars: 6, consts: [[1, "slider"], [1, "slider-container"], ["class", "slide", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], ["id", "hall-of-fame", 1, "section"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "mb-5"], [1, "small-title"], [1, "viewAllHallOfFame"], ["href", "javascript:void(0)"], [3, "images"], ["id", "testimonial", 1, "section", "bg-white", "scroll-animation"], [1, "row", "mt-4"], [1, "col-lg-12", "scroll-animation"], [1, "hori-timeline"], [1, "events", "navs-carousel", 3, "options"], [4, "ngFor", "ngForOf"], ["id", "medals-and-tshirts", 1, "section", "scroll-animation"], ["id", "challenge", 1, "section", "scroll-animation"], [1, "parallax"], [1, ""], [1, "row", "challenge-row"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "card"], [1, "card-header", "bg-transparent", "border-bottom"], [1, "d-flex", "align-items-center", "mb-2"], [1, "features-number", "fw-semibold", "display-4", "me-3", "chRuleHead"], [1, "mb-0", "chRuleHead"], [1, "card-body"], [1, "card-blockquote", "mb-0"], [1, "chRuleDesc"], ["id", "faq", 1, "section", "scroll-animation"], [1, "accordion-container"], ["class", "accordion-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "slide", 3, "ngStyle"], [1, "overlay"], [1, "slide-content"], [1, "text-white", "fw-semibold", "mb-3", "hero-title"], [1, "font-size-14"], [1, "button-items", "mt-4"], ["href", "javascript: void(0);", 1, "btn", "btn-primary"], ["carouselSlide", ""], [1, "item", "event-list"], [1, "event-date"], ["alt", "", 1, "rounded-circle", "avatar-lg", 2, "margin", "auto", "width", "auto", 3, "src"], [1, "event-down-icon"], [1, "bx", "bx-down-arrow-circle", "h1", "text-primary", "down-arrow-icon"], [1, "mt-3", "px-3"], [1, "review-star-icon"], ["alt", "", 2, "display", "initial", "width", "100px", 3, "src"], [1, "text-muted"], [1, "accordion-item", 3, "click"], [1, "accordion-header"], [2, "color", "#999"], [1, "accordion-content"], [3, "innerHTML"]], template: function IndependenceDayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IndependenceDayComponent_div_2_Template, 10, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Happy Winners");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Hall of Fame");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10)(13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-gallery-lightbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "section", 12)(18, "div", 4)(19, "div", 5)(20, "div", 6)(21, "div", 7)(22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Testimonial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Experience of Participants");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13)(27, "div", 14)(28, "div", 15)(29, "owl-carousel-o", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, IndependenceDayComponent_ng_container_30_Template, 2, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section", 18)(32, "div", 4)(33, "div", 5)(34, "div", 6)(35, "div", 7)(36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Medals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Medals and T-shirts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "app-gallery-lightbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "section", 19)(43, "div", 4)(44, "div", 5)(45, "div", 6)(46, "div", 7)(47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Challenge Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 14)(52, "div", 20)(53, "div", 21)(54, "div", 21)(55, "div", 21)(56, "div", 22)(57, "div", 23)(58, "div", 24)(59, "div", 25)(60, "div", 26)(61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Complete Choosen Distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 29)(66, "blockquote", 30)(67, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Complete your chosen distance in the given duration of the event. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 23)(70, "div", 24)(71, "div", 25)(72, "div", 26)(73, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "02 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Record your activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 29)(78, "blockquote", 30)(79, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Record your activity in any fitness app (STRAVA Recommended) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 23)(82, "div", 24)(83, "div", 25)(84, "div", 26)(85, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "03 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Choose Days, Place or Distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 29)(90, "blockquote", 30)(91, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " You are free to choose the days, place (indoors or outdoors), and the distance you want to complete on any particular day. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 23)(94, "div", 24)(95, "div", 25)(96, "div", 26)(97, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "04 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Required minimum distance is 5 KM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 29)(102, "blockquote", 30)(103, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " Participants has to ride a minimum distance of 5 KM for an activity to be considered for the challenge. Less than 5 KM won't be counted. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 23)(106, "div", 24)(107, "div", 25)(108, "div", 26)(109, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "05 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Two rides are accepted in a day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 29)(114, "blockquote", 30)(115, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " In a day, a maximum of two rides are accepted. If you do more than 2, then only the first two will be counted towards the challenge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 23)(118, "div", 24)(119, "div", 25)(120, "div", 26)(121, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "06 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "95% of your chosen target is compulsory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 29)(126, "blockquote", 30)(127, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " If you have registered for the medal category then it is mandatory to complete up to 95% of your chosen target to be eligible for medal. If you fail to complete 95% of your selected target then you won't be receiving the finisher's medal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "section", 32)(130, "div", 4)(131, "div", 5)(132, "div", 6)(133, "div", 7)(134, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 14)(139, "div")(140, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](141, IndependenceDayComponent_div_141_Template, 7, 8, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.timelineCarousel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.carouselItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.medals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.accordionData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselSlideDirective, _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__.GalleryLightboxComponent], styles: [".section[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  border-left: 2px solid blue;\n  padding: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 575px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 1s ease, transform 0.8s ease;\n  z-index: 0;\n  \n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  animation: slideIn 0.8s ease forwards;\n  z-index: 99;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  \n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  text-align: left;\n  opacity: 0;\n  \n  transform: translateX(-50px);\n  \n  min-width: 50%;\n  max-width: 50%;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 12px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #c0c0c0;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 12px;\n  z-index: 2;\n  display: flex;\n  gap: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.5rem;\n  width: 30px;\n  transition: background 0.3s ease;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n\n\n@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n    \n  }\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n\n.scroll-animation[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n\n.scroll-animation.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n\n@media (max-width: 768px) {\n  .slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n.image-overlay-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  max-width: 100%;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 660px;\n  display: block;\n  border-radius: 0px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(1, 1, 1, 0.5);\n  \n  transition: opacity 0.5s ease;\n  border-radius: 8px;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  text-align: center;\n}\n\n.overlay-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n}\n\n.overlay-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#challenge[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n}\n\n.chRuleHead[_ngcontent-%COMP%] {\n  color: #d1d1d1;\n}\n\n.chRuleDesc[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n  font-style: italic;\n}\n\n.row.challenge-row[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n\n\n.parallax[_ngcontent-%COMP%] {\n  background-image: url(\"https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png\");\n  \n  margin-bottom: 30px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.paraContent[_ngcontent-%COMP%] {\n  background-color: red;\n  position: absolute;\n  top: 0;\n  height: 100vh;\n}\n\n.challenge-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-height: 220px;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #515151 !important;\n}\n\n.viewAllHallOfFame[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n#hall-of-fame[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div.row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto !important;\n  width: inherit;\n}\n\n.accordion-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: #efefef;\n  color: white;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.accordion-header.active[_ngcontent-%COMP%] {\n  background-color: #dbdbdb;\n}\n\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.3s ease;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  padding: 0 20px;\n  background: #f9f9f9;\n  font-size: 16px;\n  transition: max-height 0.3s ease, padding 0.3s ease;\n}\n\n.accordion-content.show[_ngcontent-%COMP%] {\n  max-height: 270px;\n  padding: 15px 20px;\n}\n\n.accordion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGVwZW5kZW5jZS1kYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0RBQUE7RUFDQSxVQUFBO0VBYUEsbUJBQUE7QUFYSjs7QUFBSTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBRU47O0FBQU07RUFDRSxxQ0FBQTtFQUNBLFdBQUE7QUFFUjs7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FBRk47O0FBTUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFFQSw4QkFBQTtFQUNBLGtCQUFBO0FBTk47O0FBUU07RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQU5SOztBQVNNO0VBQ0UsaUJBQUE7QUFQUjs7QUFZRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFWSjs7QUFZSTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUFWTjs7QUFZTTtFQUNFLDhCQUFBO0FBVlI7O0FBZ0JBLDREQUFBOztBQUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7SUFDQSx5QkFBQTtFQWJGO0VBZ0JBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0lBQ0EscUJBQUE7RUFkRjtBQUNGOztBQWtCQTtFQUNFLFdBQUE7QUFoQkY7O0FBdUJBO0VBQ0UsVUFBQTtFQUVBLDBEQUFBO0FBckJGOztBQXlCQTtFQUNFLFVBQUE7QUF0QkY7O0FBMEJBO0VBQ0UsWUFBQTtBQXZCRjs7QUEyQkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBeEJGO0FBQ0Y7O0FBa0NBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBaENGOztBQW1DQTtFQUNFLFdBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWpDRjs7QUFvQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxVQUFBO0FBbENGOztBQXFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtBQW5DRjs7QUF1Q0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFwQ0Y7O0FBdUNBO0VBRUUsU0FBQTtFQUNBLGdCQUFBO0FBckNGOztBQXdDQTtFQUNFLGdCQUFBO0FBckNGOztBQTRDQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtBQXpDRjs7QUE0Q0E7RUFDRSxjQUFBO0FBekNGOztBQTRDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQXpDRjs7QUF1REE7RUFDRSxhQUFBO0FBcERGOztBQXVEQSwwQ0FBQTs7QUFDQTtFQUNFLDBHQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBcERGOztBQXVEQTtFQUNFLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQXJERjs7QUF5REE7RUFDRSxpQkFBQTtBQXRERjs7QUEwREE7RUFDRSwyQ0FBQTtBQXZERjs7QUEwREE7RUFDRSxxQkFBQTtBQXZERjs7QUEwREE7RUFDRSxZQUFBO0FBdkRGOztBQTBEQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtBQXZERjs7QUFnRUE7RUFDRSxXQUFBO0VBSUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFoRUY7O0FBbUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQWhFRjs7QUFtRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWhFRjs7QUFtRUE7RUFDRSx5QkFBQTtBQWhFRjs7QUFtRUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQWhFRjs7QUFtRUE7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUFoRUY7O0FBbUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1EQUFBO0FBaEVGOztBQW1FQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFoRUY7O0FBbUVBO0VBQ0UsU0FBQTtBQWhFRiIsImZpbGUiOiJpbmRlcGVuZGVuY2UtZGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYi01IHtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsdWU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNsaWRlci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTc1cHg7XHJcblxyXG4gIC5zbGlkZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgdHJhbnNmb3JtIDAuOHMgZWFzZTtcclxuICAgIHotaW5kZXg6IDA7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjhzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogT3ZlcmxheSBlZmZlY3QgKi9cclxuICAgIC5vdmVybGF5IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgLyogQWRqdXN0IG9wYWNpdHkgYW5kIGNvbG9yIGhlcmUgKi9cclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgLy8gbGVmdDogMjBweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC8qIEluaXRpYWwgb3BhY2l0eSBmb3Igc21vb3RoIGZhZGUtaW4gKi9cclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuICAgICAgLyogSW5pdGlhbCBwb3NpdGlvbiBvZmYgdGhlIHNjcmVlbiAqL1xyXG4gICAgICBtaW4td2lkdGg6IDUwJTtcclxuICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICBjb2xvcjogI2MwYzBjMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zbGlkZXItY29udHJvbHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA0NHB4O1xyXG4gICAgcmlnaHQ6IDEycHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogS2V5ZnJhbWUgYW5pbWF0aW9uIGZvciBzbGlkaW5nIGluIGNvbnRlbnQgZnJvbSB0aGUgbGVmdCAqL1xyXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gICAgLyogU3RhcnQgb2ZmIHRoZSBzY3JlZW4gKi9cclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIC8qIFNsaWRlIGludG8gcGxhY2UgKi9cclxuICB9XHJcbn1cclxuXHJcblxyXG4uY3VycmVuY3ktcHJpY2Uge1xyXG4gIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG5cclxuXHJcbi8vc2Nyb2xsXHJcbi8vc2Nyb2xsIGFuaW1hdGlvblxyXG4uc2Nyb2xsLWFuaW1hdGlvbiB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC42cyBlYXNlLW91dDtcclxuXHJcbn1cclxuXHJcbi5zY3JvbGwtYW5pbWF0aW9uLnNob3cge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4uY3VycmVuY3ktcHJpY2Uge1xyXG4gIGJvdHRvbTogMzBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5zbGlkZXItY29udGFpbmVyIC5zbGlkZSAuc2xpZGUtY29udGVudCB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vY2hhbGxlbmdlIHJ1bGVcclxuXHJcbi5pbWFnZS1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIEFkanVzdCB3aWR0aCBhcyBuZWVkZWQgKi9cclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWFnZS1vdmVybGF5LWNvbnRhaW5lciBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGhlaWdodDogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA2NjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMSwgMSwgMC41KTtcclxuICAvKiBTZW1pLXRyYW5zcGFyZW50IGJsYWNrIG92ZXJsYXkgKi9cclxuXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uaW1hZ2Utb3ZlcmxheS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRlbnQgaDIge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW46IDAgMCAxMHB4O1xyXG59XHJcblxyXG4ub3ZlcmxheS1jb250ZW50IHAge1xyXG4gIC8vIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8vIC5jaGFsbGVuZ2Utcm93e1xyXG4vLyAgIC8vIG1hcmdpbjogMCA1MHB4O1xyXG4vLyB9XHJcblxyXG4jY2hhbGxlbmdlIC5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jaFJ1bGVIZWFkIHtcclxuICBjb2xvcjogI2QxZDFkMTtcclxufVxyXG5cclxuLmNoUnVsZURlc2Mge1xyXG4gIGNvbG9yOiAjYzRjNGM0O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8vL3BhcmFsbGF4IGVmZmVjdFxyXG4vLy8gXHJcbi8vLyBcclxuLy8vIFxyXG5cclxuLnJvdy5jaGFsbGVuZ2Utcm93IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBjb250YWluZWQgcGFyYWxsYXggcGVyc3BlY3RpdmUgbW9kdWxlICovXHJcbi5wYXJhbGxheCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9wYW5kZXlqaTk4LmdpdGh1Yi5pby9pUG93ZXIvc3RhdGljL21lZGlhL01haW5JbWcuMjZhMzFkOWM1NzY1ZjA4ZDhjMDcucG5nXCIpO1xyXG4gIC8qIEZ1bGwgdmlld3BvcnQgaGVpZ2h0IGZvciBsYXJnZXIgc2NyZWVucyAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ucGFyYUNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAvLyBmb250LXNpemU6IDM2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5cclxuLmNoYWxsZW5nZS1yb3cgLmNhcmQge1xyXG4gIG1pbi1oZWlnaHQ6IDIyMHB4XHJcbn1cclxuXHJcblxyXG4uYm9yZGVyLWJvdHRvbSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpZXdBbGxIYWxsT2ZGYW1le1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI2hhbGwtb2YtZmFtZSA+IGRpdiA+IGRpdi5yb3cgPiBkaXYgPiBkaXYgPiBhID4gc3BhbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ub3dsLWNhcm91c2VsIC5vd2wtaXRlbSBpbWcge1xyXG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vL0FjY29yZGlvbiBcclxuLy8vIFxyXG5cclxuLmFjY29yZGlvbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIG1heC13aWR0aDogODAwcHg7XHJcbiBcclxuICBcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG5cclxuLmFjY29yZGlvbi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWhlYWRlci5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24taGVhZGVyIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWhlYWRlciBpIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmFjY29yZGlvbi1jb250ZW50IHtcclxuICBtYXgtaGVpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLCBwYWRkaW5nIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmFjY29yZGlvbi1jb250ZW50LnNob3cge1xyXG4gIG1heC1oZWlnaHQ6IDI3MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcclxufVxyXG5cclxuLmFjY29yZGlvbi1jb250ZW50IHAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 78242:
/*!*************************************************************************************!*\
  !*** ./src/app/site/website/monthly/cycling-distance/cycling-distance.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CyclingDistanceComponent": () => (/* binding */ CyclingDistanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gallery-lightbox/gallery-lightbox.component */ 46081);





const _c0 = function (a0) { return { "background-image": a0 }; };
function CyclingDistanceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 41)(3, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 44)(8, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Register Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r3 === ctx_r0.currentSlideIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, "url(" + slide_r2.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", slide_r2.description, " ");
} }
function CyclingDistanceComponent_div_136_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CyclingDistanceComponent_div_136_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const i_r5 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.toggleAccordion(i_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.selectedIndex === i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1.selectedIndex === i_r5 ? "bx bx-chevron-up" : "bx bx-chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx_r1.selectedIndex === i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r4.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class CyclingDistanceComponent {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.lastScrollTop = 0;
        this.selectedIndex = null;
        this.partnerLogosCarousel = [];
        this.partnerReviewsCarousel = [];
        this.currentSection = 'home';
        this.medals = [
            { url: 'assets/images/crypto/features-img/challenges/t1.jpg', caption: 'White - Round Neck' },
            { url: 'assets/images/crypto/features-img/challenges/t1.jpg', caption: 'White - Round Neck' },
        ];
        this.currentSlideIndex = 0;
        this.autoplayDuration = 5000; // Duration in milliseconds
        this.isTransitioning = false; // To prevent button spamming
        //Banner top
        this.slides = [
            {
                image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
                title: 'Cycling Challenge',
                description: `
      A Cycle Challenge is an exciting way to push your limits, stay active, and engage with a 
      community of like-minded enthusiasts. Whether you're a beginner or seasoned cyclist, these 
      challenges motivate you to achieve specific distance goals within a set time frame.
      `
            },
        ];
        ////..........................tshirt preview.....................///
        this.accordionData = [
            { title: 'How many run/walk are acceptable in a day?', content: 'A maximum of 2 run/walk are acceptable in a day. More than 2 won\'t be counted.' },
            { title: 'Is it necessary to perform the activity daily?', content: 'No, it is not necessary to perform the activity every day. You can complete the challenge at your own pace. You just need to finish your chosen distance in the given duration of the event.' },
            {
                title: 'How to Upload the Activity Data?',
                content: `
      (1) Data of STRAVA users will be taken automatically from STRAVA app once they join the challenge STRAVA group. (Link to join the group will be shared before the challenge starts). <br>
      (2) For those who are not using Strava, they can send the activities screenshot via email at "support@pedalspower.com" once every 5 days.`
            },
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
    }
    ngOnInit() {
    }
    toggleAccordion(index) {
        this.selectedIndex = this.selectedIndex === index ? null : index;
    }
}
CyclingDistanceComponent.ɵfac = function CyclingDistanceComponent_Factory(t) { return new (t || CyclingDistanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
CyclingDistanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CyclingDistanceComponent, selectors: [["app-cycling-distance"]], decls: 137, vars: 3, consts: [[1, "slider"], [1, "slider-container"], ["class", "slide", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], ["id", "features", 1, "section"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "mb-5"], [1, "small-title"], [1, "row", "align-items-center", "pt-4"], [1, "col-md-6", "col-sm-8", "sec-1-1"], ["src", "assets/images/crypto/features-img/challenges/RacingGreenGif.gif", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "col-md-6", "ms-auto", "sec-1-2"], [1, "mt-4", "mt-md-auto", "scroll-animation"], [1, "d-flex", "align-items-center", "mb-2"], [1, "features-number", "fw-semibold", "display-4", "me-3"], [1, "mb-0"], [1, "text-muted"], [1, "card"], [1, "card-header", "bg-transparent", "border-bottom"], [1, "d-flex", "align-items-center", "sec-1-heading"], [1, "mb-0", "chRuleHead"], [1, "d-flex", "align-items-center"], [1, "card-body"], [1, "card-blockquote", "mb-0"], [1, "chRuleDesc"], [1, "row", "align-items-center", "mt-5", "pt-md-5"], [1, "col-md-6", "scroll-animation", "sec-2-1"], [1, "mt-4", "mt-md-0"], [1, "card-body", "c-rule"], [1, "col-md-6", "col-sm-8", "ms-md-auto", "scroll-animation", "sec-2-2"], [1, "me-md-0"], ["src", "assets/images/crypto/features-img/challenges/ChallengeRule.gif", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["id", "medals-and-tshirts", 1, "section", "scroll-animation"], [1, "col-lg-12", "scroll-animation"], [3, "images"], ["id", "faq", 1, "section", "scroll-animation"], [1, "accordion-container"], ["class", "accordion-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "slide", 3, "ngStyle"], [1, "overlay"], [1, "slide-content"], [1, "fw-semibold", "mb-3", "hero-title", 2, "color", "#c0c0c0"], [1, "font-size-14", 2, "color", "#c0c0c0"], [1, "button-items", "mt-4"], ["href", "javascript: void(0);", "routerLink", "/shop/product-detail/1", 1, "btn", "btn-primary"], [1, "accordion-item", 3, "click"], [1, "accordion-header"], [2, "color", "#999"], [1, "accordion-content"], [3, "innerHTML"]], template: function CyclingDistanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CyclingDistanceComponent_div_2_Template, 10, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Join Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Embark on a fun cycling trip or elevate your experience by taking on a cycling challenge.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Cycle Challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Cycle Challenges offer a platform for individuals to challenge themselves physically and mentally, promote health and fitness, and contribute to charitable causes or personal goals. They cater to a wide range of participants, from recreational cyclists to competitive athletes, each benefiting from the physical, mental, and social aspects of participating in such events. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18)(26, "div", 19)(27, "div", 20)(28, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Benefits of Cycle Challenges:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "div", 22)(33, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Physical Fitness:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 23)(36, "blockquote", 24)(37, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Cycling challenges encourage regular exercise, promoting cardiovascular health, muscle strength, and overall fitness ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 18)(40, "div", 19)(41, "div", 22)(42, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Mental Well-being:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 23)(45, "blockquote", 24)(46, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Participating in challenges can reduce stress levels and improve mental clarity and focus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 18)(49, "div", 19)(50, "div", 22)(51, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Social Interaction:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 23)(54, "blockquote", 24)(55, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Opportunities to connect with like-minded individuals, fostering a sense of community and camaraderie. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 18)(58, "div", 19)(59, "div", 22)(60, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Achievement and Goal Setting:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 23)(63, "blockquote", 24)(64, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Setting and achieving cycling goals provides a sense of accomplishment and boosts motivation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 18)(67, "div", 19)(68, "div", 22)(69, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Charitable Contributions:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 23)(72, "blockquote", 24)(73, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Many challenges support charitable causes, allowing participants to contribute positively to their communities or global initiatives. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 26)(76, "div", 27)(77, "div", 28)(78, "div", 14)(79, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Challenge Rule");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " In these Cycling and Running challenges, you set a target distance to achieve within a month. Successfully reaching your goal earns you a uniquely designed challenge medal along with exclusive rewards and goodies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 18)(86, "div", 19)(87, "div", 20)(88, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Challenge Rules:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 18)(91, "div", 29)(92, "blockquote", 24)(93, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " (1) Complete your chosen distance in the given duration of the event. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "blockquote", 24)(96, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " (2) Record your activity in any fitness app (STRAVA Recommended). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "blockquote", 24)(99, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " (3) You are free to choose the days, place (indoors or outdoors), and the distance you want to complete on any particular day. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "blockquote", 24)(102, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " (4) Participants has to ride a minimum distance of 5 KM for an activity to be considered for the challenge. Less than 5 KM won't be counted. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "blockquote", 24)(105, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " (5) In a day, a maximum of two rides are accepted. If you do more than 2, then only the first two will be counted towards the challenge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "blockquote", 24)(108, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " (6) If you have registered for the medal category then it is mandatory to complete up to 95% of your chosen target to be eligible for medal. If you fail to complete 95% of your selected target then you won't be receiving the finisher's medal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 30)(111, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "section", 33)(114, "div", 4)(115, "div", 5)(116, "div", 6)(117, "div", 7)(118, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Medals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Medals and T-shirts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "app-gallery-lightbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "section", 36)(125, "div", 4)(126, "div", 5)(127, "div", 6)(128, "div", 7)(129, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 34)(134, "div")(135, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, CyclingDistanceComponent_div_136_Template, 7, 8, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.medals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.accordionData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__.GalleryLightboxComponent], styles: [".section[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  border-left: 2px solid blue;\n  padding: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 575px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 1s ease, transform 0.8s ease;\n  z-index: 0;\n  \n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  animation: slideIn 0.8s ease forwards;\n  z-index: 99;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  \n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  text-align: left;\n  opacity: 0;\n  \n  transform: translateX(-50px);\n  \n  min-width: 50%;\n  max-width: 50%;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 12px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #c0c0c0;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 12px;\n  z-index: 2;\n  display: flex;\n  gap: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.5rem;\n  width: 30px;\n  transition: background 0.3s ease;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n\n\n@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n    \n  }\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n\n.scroll-animation[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n\n.scroll-animation.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n\n@media (max-width: 768px) {\n  .slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n.image-overlay-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  max-width: 100%;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 660px;\n  display: block;\n  border-radius: 0px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(1, 1, 1, 0.5);\n  \n  transition: opacity 0.5s ease;\n  border-radius: 8px;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  text-align: center;\n}\n\n.overlay-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n}\n\n.overlay-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#challenge[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n}\n\n.chRuleHead[_ngcontent-%COMP%] {\n  color: #9c9c9c;\n}\n\n.chRuleDesc[_ngcontent-%COMP%] {\n  color: #979797;\n  margin-bottom: 0;\n}\n\n.card-body[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  height: 645px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n  .lightbox-content-container img {\n  max-width: 520px !important;\n}\n\n.align-items-center[_ngcontent-%COMP%]:nth-of-type(3)   div[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  height: 570px;\n}\n\n.sec-1-heading[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border-bottom: 1px solid #e0e0e0;\n  margin-bottom: 10px;\n}\n\n.c-rule[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.accordion-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: #efefef;\n  color: white;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.accordion-header.active[_ngcontent-%COMP%] {\n  background-color: #dbdbdb;\n}\n\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.3s ease;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  padding: 0 20px;\n  background: #f9f9f9;\n  font-size: 16px;\n  transition: max-height 0.3s ease, padding 0.3s ease;\n}\n\n.accordion-content.show[_ngcontent-%COMP%] {\n  max-height: 270px;\n  padding: 15px 20px;\n}\n\n.accordion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.sec-1-2[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 645px;\n}\n\n.sec-2-1[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 570px;\n}\n\n@media (max-width: 480px) {\n  .slider-container[_ngcontent-%COMP%] {\n    height: 415px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN5Y2xpbmctZGlzdGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUVFO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0RBQUE7RUFDQSxVQUFBO0VBYUEsbUJBQUE7QUFYTjs7QUFBTTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBRVI7O0FBQVE7RUFDRSxxQ0FBQTtFQUNBLFdBQUE7QUFFVjs7QUFJTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FBRlI7O0FBTU07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFFQSw4QkFBQTtFQUNBLGtCQUFBO0FBTlI7O0FBUVE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQU5WOztBQVNRO0VBQ0UsaUJBQUE7QUFQVjs7QUFZSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFWTjs7QUFZTTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUFWUjs7QUFZUTtFQUNFLDhCQUFBO0FBVlY7O0FBZ0JFLDREQUFBOztBQUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7SUFDQSx5QkFBQTtFQWJKO0VBZ0JFO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0lBQ0EscUJBQUE7RUFkSjtBQUNGOztBQWtCRTtFQUNFLFdBQUE7QUFoQko7O0FBdUJFO0VBQ0UsVUFBQTtFQUVBLDBEQUFBO0FBckJKOztBQXlCRTtFQUNFLFVBQUE7QUF0Qko7O0FBMEJFO0VBQ0UsWUFBQTtBQXZCSjs7QUEyQkU7RUFDRTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBeEJKO0FBQ0Y7O0FBa0NFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBaENKOztBQW1DRTtFQUNFLFdBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWpDSjs7QUFvQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtBQWxDSjs7QUFxQ0U7RUFDRSxVQUFBO0FBbENKOztBQXFDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtBQW5DSjs7QUF1Q0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFwQ0o7O0FBdUNFO0VBRUUsU0FBQTtFQUNBLGdCQUFBO0FBckNKOztBQXdDRTtFQUNFLGdCQUFBO0FBckNKOztBQTRDRTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtBQXpDSjs7QUE0Q0U7RUFDRSxjQUFBO0FBekNKOztBQTRDRTtFQUNFLGNBQUE7RUFFQSxnQkFBQTtBQTFDSjs7QUE2Q0U7RUFDRSxpQkFBQTtBQTFDSjs7QUE2Q0U7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQTFDSjs7QUE2Q0U7RUFDRSwyQkFBQTtBQTFDSjs7QUE2Q0U7RUFDRSxhQUFBO0FBMUNKOztBQTZDRTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQTFDSjs7QUE4Q0U7RUFDRSxlQUFBO0FBM0NKOztBQStDRTtFQUNFLGtCQUFBO0FBNUNKOztBQWtERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQS9DSjs7QUFrREU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0FBL0NKOztBQWtERTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBL0NKOztBQWtERTtFQUNFLHlCQUFBO0FBL0NKOztBQWtERTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBL0NKOztBQWtERTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtBQS9DSjs7QUFrREU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbURBQUE7QUEvQ0o7O0FBa0RFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQS9DSjs7QUFrREU7RUFDRSxTQUFBO0FBL0NKOztBQWtERTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBQS9DSjs7QUFrREU7RUFDRSxzQkFBQTtFQUNBLGFBQUE7QUEvQ0o7O0FBbURFO0VBQ0U7SUFDSSxhQUFBO0VBaEROO0FBQ0YiLCJmaWxlIjoiY3ljbGluZy1kaXN0YW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYi01IHtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmx1ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTc1cHg7XHJcbiAgXHJcbiAgICAuc2xpZGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UsIHRyYW5zZm9ybSAwLjhzIGVhc2U7XHJcbiAgICAgIHotaW5kZXg6IDA7XHJcbiAgXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgXHJcbiAgICAgICAgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuOHMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgICAvKiBPdmVybGF5IGVmZmVjdCAqL1xyXG4gICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgLyogQWRqdXN0IG9wYWNpdHkgYW5kIGNvbG9yIGhlcmUgKi9cclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICAgIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIC8vIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC8qIEluaXRpYWwgb3BhY2l0eSBmb3Igc21vb3RoIGZhZGUtaW4gKi9cclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gICAgICAgIC8qIEluaXRpYWwgcG9zaXRpb24gb2ZmIHRoZSBzY3JlZW4gKi9cclxuICAgICAgICBtaW4td2lkdGg6IDUwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICBjb2xvcjogI2MwYzBjMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5zbGlkZXItY29udHJvbHMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogNDRweDtcclxuICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICBcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcclxuICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogS2V5ZnJhbWUgYW5pbWF0aW9uIGZvciBzbGlkaW5nIGluIGNvbnRlbnQgZnJvbSB0aGUgbGVmdCAqL1xyXG4gIEBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XHJcbiAgICAgIC8qIFN0YXJ0IG9mZiB0aGUgc2NyZWVuICovXHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAvKiBTbGlkZSBpbnRvIHBsYWNlICovXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jdXJyZW5jeS1wcmljZSB7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLy9zY3JvbGxcclxuICAvL3Njcm9sbCBhbmltYXRpb25cclxuICAuc2Nyb2xsLWFuaW1hdGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC42cyBlYXNlLW91dDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnNjcm9sbC1hbmltYXRpb24uc2hvdyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICBcclxuICAuY3VycmVuY3ktcHJpY2Uge1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zbGlkZXItY29udGFpbmVyIC5zbGlkZSAuc2xpZGUtY29udGVudCB7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICAvL2NoYWxsZW5nZSBydWxlXHJcbiAgXHJcbiAgLmltYWdlLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogQWRqdXN0IHdpZHRoIGFzIG5lZWRlZCAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNjYwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxLCAxLCAwLjUpO1xyXG4gICAgLyogU2VtaS10cmFuc3BhcmVudCBibGFjayBvdmVybGF5ICovXHJcbiAgXHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLW92ZXJsYXktY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdmVybGF5LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5vdmVybGF5LWNvbnRlbnQgaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCBwIHtcclxuICAgIC8vIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIC5jaGFsbGVuZ2Utcm93e1xyXG4gIC8vICAgLy8gbWFyZ2luOiAwIDUwcHg7XHJcbiAgLy8gfVxyXG4gIFxyXG4gICNjaGFsbGVuZ2UgLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaFJ1bGVIZWFkIHtcclxuICAgIGNvbG9yOiAjOWM5YzljO1xyXG4gIH1cclxuICBcclxuICAuY2hSdWxlRGVzYyB7XHJcbiAgICBjb2xvcjogIzk3OTc5NztcclxuICAgIC8vIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1ib2R5LCAgLmNhcmQtaGVhZGVye1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1nLWZsdWlke1xyXG4gICAgaGVpZ2h0OiA2NDVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5saWdodGJveC1jb250ZW50LWNvbnRhaW5lciBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDUyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYWxpZ24taXRlbXMtY2VudGVyOm50aC1vZi10eXBlKDMpICBkaXY6bnRoLWNoaWxkKDIpIGRpdiAuaW1nLWZsdWlke1xyXG4gICAgaGVpZ2h0OiA1NzBweDtcclxuICB9XHJcblxyXG4gIC5zZWMtMS1oZWFkaW5ne1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmMtcnVsZSBibG9ja3F1b3Rle1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG4gIFxyXG4gIC5jYXJke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICAvLy8vL0FjY29yZGlvbiBcclxuICAvLy8gXHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1pdGVtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWhlYWRlciBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyIGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLCBwYWRkaW5nIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250ZW50LnNob3cge1xyXG4gICAgbWF4LWhlaWdodDogMjcwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24tY29udGVudCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5zZWMtMS0ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogNjQ1cHg7XHJcbiAgfVxyXG5cclxuICAuc2VjLTItMXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDU3MHB4O1xyXG4gIH1cclxuICBcclxuLy8qKioqKioqKipnbG9iYWwqKioqKioqKioqKioqKioqKi8vXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MTVweDtcclxuICAgIH1cclxuICB9Il19 */"] });


/***/ }),

/***/ 32676:
/*!***************************************************************************************!*\
  !*** ./src/app/site/website/monthly/run-walk-distance/run-walk-distance.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RunWalkDistanceComponent": () => (/* binding */ RunWalkDistanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 37297);
/* harmony import */ var _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gallery-lightbox/gallery-lightbox.component */ 46081);





const _c0 = function (a0) { return { "background-image": a0 }; };
function RunWalkDistanceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 37)(3, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 40)(8, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Register Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const slide_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r4 === ctx_r0.currentSlideIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, "url(" + slide_r3.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", slide_r3.description, " ");
} }
function RunWalkDistanceComponent_ng_container_30_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43)(1, "div")(2, "div", 44)(3, "div", 6)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 48)(9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r5.stars, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.review);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", item_r5.reviewer, "");
} }
function RunWalkDistanceComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RunWalkDistanceComponent_ng_container_30_ng_template_1_Template, 15, 4, "ng-template", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function RunWalkDistanceComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RunWalkDistanceComponent_div_141_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const i_r9 = restoredCtx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.toggleAccordion(i_r9)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r2.selectedIndex === i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.selectedIndex === i_r9 ? "bx bx-chevron-up" : "bx bx-chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx_r2.selectedIndex === i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r8.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class RunWalkDistanceComponent {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.lastScrollTop = 0;
        this.selectedIndex = null;
        this.partnerLogosCarousel = [];
        this.partnerReviewsCarousel = [];
        this.currentSection = 'home';
        this.reviews = [
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
        this.logos = [
            { image: 'assets/images/crypto/features-img/monthly/t1.png', name: 'Mark Hurley', position: 'CEO & Lead' },
            { image: 'assets/images/crypto/features-img/monthly/t2.png', name: 'Calvin Smith', position: 'Blockchain Developer' },
            { image: 'assets/images/crypto/features-img/monthly/m1.png', name: 'Vickie Sample', position: 'Designer' },
            { image: 'assets/images/crypto/features-img/monthly/m2.png', name: 'Alma Farley', position: 'App Developer' },
            { image: 'assets/images/crypto/features-img/monthly/m3.png', name: 'Amy Hood', position: 'Designer' },
            { image: 'assets/images/crypto/features-img/monthly/m4.png', name: 'John Doe', position: 'Project Manager' },
        ];
        this.medals = [
            { url: 'assets/images/crypto/features-img/monthly/t1.png', caption: 'Mark Hurley' },
            { url: 'assets/images/crypto/features-img/monthly/t2.png', caption: 'Calvin Smith' },
            { url: 'assets/images/crypto/features-img/monthly/m1.png', caption: 'Vickie Sample' },
            { url: 'assets/images/crypto/features-img/monthly/m2.png', caption: 'Alma Farley' },
            { url: 'assets/images/crypto/features-img/monthly/m3.png', caption: 'Amy Hood' },
            { url: 'assets/images/crypto/features-img/monthly/m4.png', caption: 'John Doe' },
        ];
        this.currentSlideIndex = 0;
        this.autoplayDuration = 5000; // Duration in milliseconds
        this.isTransitioning = false; // To prevent button spamming
        this.carouselOption = {
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
        };
        //Testimonial
        this.carouselItems = [
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
        this.timelineCarousel = {
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
        };
        //Banner top
        this.slides = [
            {
                image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
                title: 'Run/Walk Challenge',
                description: `
      Love running and walking? Take your exercise to the next level with the Run/Walk Distance 
      Challenge. Run, walk, or do both and push yourself to new heights. Enjoy the thrill of 
      reaching milestones with every step and inspire yourself to keep going. Ready, set, challenge!
      `
            },
        ];
        ////..........................tshirt preview.....................///
        this.images = [
            { url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg', caption: 'Caption for Image 1' },
            { url: 'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg', caption: 'Caption for Image 2' },
            { url: 'https://www.shutterstock.com/image-photo/landscape-road-mountains-600nw-2465573769.jpg', caption: 'Caption for Image 3' },
            { url: 'https://www.shutterstock.com/image-photo/landscape-road-mountains-600nw-2465573769.jpg', caption: 'Caption for Image 4' },
            { url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg', caption: 'Caption for Image 5' },
            { url: 'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg', caption: 'Caption for Image 6' },
        ];
        this.accordionData = [
            { title: 'How many run/walk are acceptable in a day?', content: 'A maximum of 2 run/walk are acceptable in a day. More than 2 won\'t be counted.' },
            { title: 'Is it necessary to perform the activity daily?', content: 'No, it is not necessary to perform the activity every day. You can complete the challenge at your own pace. You just need to finish your chosen distance in the given duration of the event.' },
            {
                title: 'How to Upload the Activity Data?',
                content: `
      (1) Data of STRAVA users will be taken automatically from STRAVA app once they join the challenge STRAVA group. (Link to join the group will be shared before the challenge starts). <br>
      (2) For those who are not using Strava, they can send the activities screenshot via email at "support@pedalspower.com" once every 5 days.`
            },
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
    }
    ngOnInit() {
        // this.initializeSwipe();
        // this.loadPartnerLogos();
        //this.loadPartnerReviews();
    }
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
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
    }
    toggleAccordion(index) {
        this.selectedIndex = this.selectedIndex === index ? null : index;
    }
}
RunWalkDistanceComponent.ɵfac = function RunWalkDistanceComponent_Factory(t) { return new (t || RunWalkDistanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
RunWalkDistanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RunWalkDistanceComponent, selectors: [["app-run-walk-distance"]], decls: 142, vars: 6, consts: [[1, "slider"], [1, "slider-container"], ["class", "slide", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], ["id", "hall-of-fame", 1, "section"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "mb-5"], [1, "small-title"], [1, "viewAllHallOfFame"], ["href", "javascript:void(0)"], [1, "col-lg-12", "scroll-animation"], [3, "images"], ["id", "testimonial", 1, "section", "bg-white"], [1, "row", "mt-4"], [1, "hori-timeline"], [1, "events", "navs-carousel", 3, "options"], [4, "ngFor", "ngForOf"], ["id", "medals-and-tshirts", 1, "section", "scroll-animation"], ["id", "challenge", 1, "section", "scroll-animation"], [1, "parallax"], [1, ""], [1, "row", "challenge-row"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "card"], [1, "card-header", "bg-transparent", "border-bottom"], [1, "d-flex", "align-items-center", "mb-2"], [1, "features-number", "fw-semibold", "display-4", "me-3", "chRuleHead"], [1, "mb-0", "chRuleHead"], [1, "card-body"], [1, "card-blockquote", "mb-0"], [1, "chRuleDesc"], ["id", "faq", 1, "section", "scroll-animation"], [1, "accordion-container"], ["class", "accordion-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "slide", 3, "ngStyle"], [1, "overlay"], [1, "slide-content"], [1, "text-white", "fw-semibold", "mb-3", "hero-title"], [1, "font-size-14"], [1, "button-items", "mt-4"], ["href", "javascript: void(0);", 1, "btn", "btn-primary"], ["carouselSlide", ""], [1, "item", "event-list"], [1, "event-date"], ["alt", "", 1, "rounded-circle", "avatar-lg", 2, "margin", "auto", "width", "auto", 3, "src"], [1, "event-down-icon"], [1, "bx", "bx-down-arrow-circle", "h1", "text-primary", "down-arrow-icon"], [1, "mt-3", "px-3"], [1, "review-star-icon"], ["alt", "", 2, "display", "initial", "width", "100px", 3, "src"], [1, "text-muted"], [1, "accordion-item", 3, "click"], [1, "accordion-header"], [2, "color", "#999"], [1, "accordion-content"], [3, "innerHTML"]], template: function RunWalkDistanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RunWalkDistanceComponent_div_2_Template, 10, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Happy Winners");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Hall of Fame");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10)(13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-gallery-lightbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "section", 13)(18, "div", 4)(19, "div", 5)(20, "div", 6)(21, "div", 7)(22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Testimonial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Experience of Participants");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14)(27, "div", 6)(28, "div", 15)(29, "owl-carousel-o", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RunWalkDistanceComponent_ng_container_30_Template, 2, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section", 18)(32, "div", 4)(33, "div", 5)(34, "div", 6)(35, "div", 7)(36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Medals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Medals and T-shirts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "app-gallery-lightbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "section", 19)(43, "div", 4)(44, "div", 5)(45, "div", 6)(46, "div", 7)(47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Challenge Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 11)(52, "div", 20)(53, "div", 21)(54, "div", 21)(55, "div", 21)(56, "div", 22)(57, "div", 23)(58, "div", 24)(59, "div", 25)(60, "div", 26)(61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Complete Choosen Distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 29)(66, "blockquote", 30)(67, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Complete your chosen distance in the given duration of the event. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 23)(70, "div", 24)(71, "div", 25)(72, "div", 26)(73, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "02 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Record your activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 29)(78, "blockquote", 30)(79, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Record your activity in any fitness app (STRAVA Recommended) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 23)(82, "div", 24)(83, "div", 25)(84, "div", 26)(85, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "03 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Choose Days, Place or Distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 29)(90, "blockquote", 30)(91, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " You are free to choose the days, place (indoors or outdoors), and the distance you want to complete on any particular day. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 23)(94, "div", 24)(95, "div", 25)(96, "div", 26)(97, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "04 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Required minimum distance is 5 KM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 29)(102, "blockquote", 30)(103, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " Participants has to ride a minimum distance of 5 KM for an activity to be considered for the challenge. Less than 5 KM won't be counted. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 23)(106, "div", 24)(107, "div", 25)(108, "div", 26)(109, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "05 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Two rides are accepted in a day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 29)(114, "blockquote", 30)(115, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " In a day, a maximum of two rides are accepted. If you do more than 2, then only the first two will be counted towards the challenge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 23)(118, "div", 24)(119, "div", 25)(120, "div", 26)(121, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "06 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "95% of your chosen target is compulsory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 29)(126, "blockquote", 30)(127, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " If you have registered for the medal category then it is mandatory to complete up to 95% of your chosen target to be eligible for medal. If you fail to complete 95% of your selected target then you won't be receiving the finisher's medal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "section", 32)(130, "div", 4)(131, "div", 5)(132, "div", 6)(133, "div", 7)(134, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 11)(139, "div")(140, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](141, RunWalkDistanceComponent_div_141_Template, 7, 8, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.timelineCarousel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.carouselItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.medals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.accordionData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective, _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__.GalleryLightboxComponent], styles: [".section[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  border-left: 2px solid blue;\n  padding: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 575px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 1s ease, transform 0.8s ease;\n  z-index: 0;\n  \n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  animation: slideIn 0.8s ease forwards;\n  z-index: 99;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  \n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  text-align: left;\n  opacity: 0;\n  \n  transform: translateX(-50px);\n  \n  min-width: 50%;\n  max-width: 50%;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 12px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #c0c0c0;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 12px;\n  z-index: 2;\n  display: flex;\n  gap: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.5rem;\n  width: 30px;\n  transition: background 0.3s ease;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n\n\n@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n    \n  }\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n\n.scroll-animation[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n\n.scroll-animation.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n\n@media (max-width: 768px) {\n  .slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n.image-overlay-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  max-width: 100%;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 660px;\n  display: block;\n  border-radius: 0px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(1, 1, 1, 0.5);\n  \n  transition: opacity 0.5s ease;\n  border-radius: 8px;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  text-align: center;\n}\n\n.overlay-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n}\n\n.overlay-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#challenge[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n}\n\n.chRuleHead[_ngcontent-%COMP%] {\n  color: #d1d1d1;\n}\n\n.chRuleDesc[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n  font-style: italic;\n}\n\n.row.challenge-row[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n\n\n.parallax[_ngcontent-%COMP%] {\n  background-image: url(\"https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png\");\n  \n  margin-bottom: 30px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.paraContent[_ngcontent-%COMP%] {\n  background-color: red;\n  position: absolute;\n  top: 0;\n  height: 100vh;\n}\n\n.challenge-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-height: 220px;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #515151 !important;\n}\n\n.viewAllHallOfFame[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n#hall-of-fame[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div.row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto !important;\n  width: inherit;\n}\n\n.accordion-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: #efefef;\n  color: white;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.accordion-header.active[_ngcontent-%COMP%] {\n  background-color: #dbdbdb;\n}\n\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.3s ease;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  padding: 0 20px;\n  background: #f9f9f9;\n  font-size: 16px;\n  transition: max-height 0.3s ease, padding 0.3s ease;\n}\n\n.accordion-content.show[_ngcontent-%COMP%] {\n  max-height: 270px;\n  padding: 15px 20px;\n}\n\n.accordion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bi13YWxrLWRpc3RhbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGdEQUFBO0VBQ0EsVUFBQTtFQWFBLG1CQUFBO0FBWE47O0FBQU07RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQUVSOztBQUFRO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0FBRVY7O0FBSU07RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQUZSOztBQU1NO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBRUEsOEJBQUE7RUFDQSxrQkFBQTtBQU5SOztBQVFRO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFOVjs7QUFTUTtFQUNFLGlCQUFBO0FBUFY7O0FBWUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBVk47O0FBWU07RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBVlI7O0FBWVE7RUFDRSw4QkFBQTtBQVZWOztBQWdCRSw0REFBQTs7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0lBQ0EseUJBQUE7RUFiSjtFQWdCRTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtJQUNBLHFCQUFBO0VBZEo7QUFDRjs7QUFrQkU7RUFDRSxXQUFBO0FBaEJKOztBQXVCRTtFQUNFLFVBQUE7RUFFQSwwREFBQTtBQXJCSjs7QUF5QkU7RUFDRSxVQUFBO0FBdEJKOztBQTBCRTtFQUNFLFlBQUE7QUF2Qko7O0FBMkJFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQXhCSjtBQUNGOztBQWtDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQWhDSjs7QUFtQ0U7RUFDRSxXQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFqQ0o7O0FBb0NFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0Esa0JBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UsVUFBQTtBQWxDSjs7QUFxQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBRUEsa0JBQUE7QUFuQ0o7O0FBdUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBcENKOztBQXVDRTtFQUVFLFNBQUE7RUFDQSxnQkFBQTtBQXJDSjs7QUF3Q0U7RUFDRSxnQkFBQTtBQXJDSjs7QUE0Q0U7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7QUF6Q0o7O0FBNENFO0VBQ0UsY0FBQTtBQXpDSjs7QUE0Q0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUF6Q0o7O0FBdURFO0VBQ0UsYUFBQTtBQXBESjs7QUF1REUsMENBQUE7O0FBQ0E7RUFDRSwwR0FBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQXBESjs7QUF1REU7RUFDRSxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUFyREo7O0FBeURFO0VBQ0UsaUJBQUE7QUF0REo7O0FBMERFO0VBQ0UsMkNBQUE7QUF2REo7O0FBMERFO0VBQ0UscUJBQUE7QUF2REo7O0FBMERFO0VBQ0UsWUFBQTtBQXZESjs7QUEwREU7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUF2REo7O0FBZ0VFO0VBQ0UsV0FBQTtFQUlBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBaEVKOztBQW1FRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFoRUo7O0FBbUVFO0VBQ0UseUJBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0FBaEVKOztBQW1FRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtREFBQTtBQWhFSjs7QUFtRUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBaEVKOztBQW1FRTtFQUNFLFNBQUE7QUFoRUoiLCJmaWxlIjoicnVuLXdhbGstZGlzdGFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubWItNSB7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsdWU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU3NXB4O1xyXG4gIFxyXG4gICAgLnNsaWRlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLCB0cmFuc2Zvcm0gMC44cyBlYXNlO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG4gIFxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gIFxyXG4gICAgICAgIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjhzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICAgICAgLyogT3ZlcmxheSBlZmZlY3QgKi9cclxuICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIC8qIEFkanVzdCBvcGFjaXR5IGFuZCBjb2xvciBoZXJlICovXHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgICAuc2xpZGUtY29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAvLyBsZWZ0OiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAvKiBJbml0aWFsIG9wYWNpdHkgZm9yIHNtb290aCBmYWRlLWluICovXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuICAgICAgICAvKiBJbml0aWFsIHBvc2l0aW9uIG9mZiB0aGUgc2NyZWVuICovXHJcbiAgICAgICAgbWluLXdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIFxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgY29sb3I6ICNjMGMwYzA7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2xpZGVyLWNvbnRyb2xzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDQ0cHg7XHJcbiAgICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDEwcHg7XHJcbiAgXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEtleWZyYW1lIGFuaW1hdGlvbiBmb3Igc2xpZGluZyBpbiBjb250ZW50IGZyb20gdGhlIGxlZnQgKi9cclxuICBAa2V5ZnJhbWVzIHNsaWRlSW4ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gICAgICAvKiBTdGFydCBvZmYgdGhlIHNjcmVlbiAqL1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgLyogU2xpZGUgaW50byBwbGFjZSAqL1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAuY3VycmVuY3ktcHJpY2Uge1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vc2Nyb2xsXHJcbiAgLy9zY3JvbGwgYW5pbWF0aW9uXHJcbiAgLnNjcm9sbC1hbmltYXRpb24ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuNnMgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JvbGwtYW5pbWF0aW9uLnNob3cge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgXHJcbiAgLmN1cnJlbmN5LXByaWNlIHtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuc2xpZGVyLWNvbnRhaW5lciAuc2xpZGUgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLy9jaGFsbGVuZ2UgcnVsZVxyXG4gIFxyXG4gIC5pbWFnZS1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIEFkanVzdCB3aWR0aCBhcyBuZWVkZWQgKi9cclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLW92ZXJsYXktY29udGFpbmVyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDY2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMSwgMSwgMC41KTtcclxuICAgIC8qIFNlbWktdHJhbnNwYXJlbnQgYmxhY2sgb3ZlcmxheSAqL1xyXG4gIFxyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1vdmVybGF5LWNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAub3ZlcmxheS1jb250ZW50IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdmVybGF5LWNvbnRlbnQgcCB7XHJcbiAgICAvLyBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAvLyAuY2hhbGxlbmdlLXJvd3tcclxuICAvLyAgIC8vIG1hcmdpbjogMCA1MHB4O1xyXG4gIC8vIH1cclxuICBcclxuICAjY2hhbGxlbmdlIC5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuY2hSdWxlSGVhZCB7XHJcbiAgICBjb2xvcjogI2QxZDFkMTtcclxuICB9XHJcbiAgXHJcbiAgLmNoUnVsZURlc2Mge1xyXG4gICAgY29sb3I6ICNjNGM0YzQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vLy9wYXJhbGxheCBlZmZlY3RcclxuICAvLy8gXHJcbiAgLy8vIFxyXG4gIC8vLyBcclxuICBcclxuICAucm93LmNoYWxsZW5nZS1yb3cge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogY29udGFpbmVkIHBhcmFsbGF4IHBlcnNwZWN0aXZlIG1vZHVsZSAqL1xyXG4gIC5wYXJhbGxheCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3BhbmRleWppOTguZ2l0aHViLmlvL2lQb3dlci9zdGF0aWMvbWVkaWEvTWFpbkltZy4yNmEzMWQ5YzU3NjVmMDhkOGMwNy5wbmdcIik7XHJcbiAgICAvKiBGdWxsIHZpZXdwb3J0IGhlaWdodCBmb3IgbGFyZ2VyIHNjcmVlbnMgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXJhQ29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAvLyBmb250LXNpemU6IDM2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY2hhbGxlbmdlLXJvdyAuY2FyZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMjBweFxyXG4gIH1cclxuICBcclxuICBcclxuICAuYm9yZGVyLWJvdHRvbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUxNTE1MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudmlld0FsbEhhbGxPZkZhbWV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gICNoYWxsLW9mLWZhbWUgPiBkaXYgPiBkaXYucm93ID4gZGl2ID4gZGl2ID4gYSA+IHNwYW4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAub3dsLWNhcm91c2VsIC5vd2wtaXRlbSBpbWcge1xyXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLy8vLy9BY2NvcmRpb24gXHJcbiAgLy8vIFxyXG4gIFxyXG4gIC5hY2NvcmRpb24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gbWF4LXdpZHRoOiA4MDBweDtcclxuICAgXHJcbiAgICBcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIgaSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRlbnQge1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2UsIHBhZGRpbmcgMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRlbnQuc2hvdyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNzBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250ZW50IHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ 99496:
/*!************************************************************************************!*\
  !*** ./src/app/site/website/oneday/centuary-cycling/centuary-cycling.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentuaryCyclingComponent": () => (/* binding */ CentuaryCyclingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 37297);
/* harmony import */ var _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gallery-lightbox/gallery-lightbox.component */ 46081);





const _c0 = function (a0) { return { "background-image": a0 }; };
function CentuaryCyclingComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 37)(3, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 40)(8, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Register Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const slide_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r4 === ctx_r0.currentSlideIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, "url(" + slide_r3.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", slide_r3.description, " ");
} }
function CentuaryCyclingComponent_ng_container_30_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43)(1, "div")(2, "div", 44)(3, "div", 6)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 48)(9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r5.stars, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.review);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", item_r5.reviewer, "");
} }
function CentuaryCyclingComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CentuaryCyclingComponent_ng_container_30_ng_template_1_Template, 15, 4, "ng-template", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CentuaryCyclingComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CentuaryCyclingComponent_div_141_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const i_r9 = restoredCtx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.toggleAccordion(i_r9)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r2.selectedIndex === i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.selectedIndex === i_r9 ? "bx bx-chevron-up" : "bx bx-chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx_r2.selectedIndex === i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r8.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class CentuaryCyclingComponent {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.lastScrollTop = 0;
        this.selectedIndex = null;
        this.partnerLogosCarousel = [];
        this.partnerReviewsCarousel = [];
        this.currentSection = 'home';
        this.reviews = [
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
        this.logos = [
            { image: 'assets/images/crypto/features-img/monthly/t1.png', name: 'Mark Hurley', position: 'CEO & Lead' },
            { image: 'assets/images/crypto/features-img/monthly/t2.png', name: 'Calvin Smith', position: 'Blockchain Developer' },
            { image: 'assets/images/crypto/features-img/monthly/m1.png', name: 'Vickie Sample', position: 'Designer' },
            { image: 'assets/images/crypto/features-img/monthly/m2.png', name: 'Alma Farley', position: 'App Developer' },
            { image: 'assets/images/crypto/features-img/monthly/m3.png', name: 'Amy Hood', position: 'Designer' },
            { image: 'assets/images/crypto/features-img/monthly/m4.png', name: 'John Doe', position: 'Project Manager' },
        ];
        this.medals = [
            { url: 'assets/images/crypto/features-img/monthly/t1.png', caption: 'Mark Hurley' },
            { url: 'assets/images/crypto/features-img/monthly/t2.png', caption: 'Calvin Smith' },
            { url: 'assets/images/crypto/features-img/monthly/m1.png', caption: 'Vickie Sample' },
            { url: 'assets/images/crypto/features-img/monthly/m2.png', caption: 'Alma Farley' },
            { url: 'assets/images/crypto/features-img/monthly/m3.png', caption: 'Amy Hood' },
            { url: 'assets/images/crypto/features-img/monthly/m4.png', caption: 'John Doe' },
        ];
        this.currentSlideIndex = 0;
        this.autoplayDuration = 5000; // Duration in milliseconds
        this.isTransitioning = false; // To prevent button spamming
        this.carouselOption = {
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
        };
        //Testimonial
        this.carouselItems = [
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
        this.timelineCarousel = {
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
        };
        //Banner top
        this.slides = [
            {
                image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
                title: 'Century or Half Century',
                description: `
      Love running and walking? Take your exercise to the next level with the Run/Walk Distance 
      Challenge. Run, walk, or do both and push yourself to new heights. Enjoy the thrill of 
      reaching milestones with every step and inspire yourself to keep going. Ready, set, challenge!
      `
            },
        ];
        ////..........................tshirt preview.....................///
        this.images = [
            { url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg', caption: 'Caption for Image 1' },
            { url: 'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg', caption: 'Caption for Image 2' },
            { url: 'https://www.shutterstock.com/image-photo/landscape-road-mountains-600nw-2465573769.jpg', caption: 'Caption for Image 3' },
            { url: 'https://www.shutterstock.com/image-photo/landscape-road-mountains-600nw-2465573769.jpg', caption: 'Caption for Image 4' },
            { url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg', caption: 'Caption for Image 5' },
            { url: 'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg', caption: 'Caption for Image 6' },
        ];
        this.accordionData = [
            { title: 'How many run/walk are acceptable in a day?', content: 'A maximum of 2 run/walk are acceptable in a day. More than 2 won\'t be counted.' },
            { title: 'Is it necessary to perform the activity daily?', content: 'No, it is not necessary to perform the activity every day. You can complete the challenge at your own pace. You just need to finish your chosen distance in the given duration of the event.' },
            {
                title: 'How to Upload the Activity Data?',
                content: `
      (1) Data of STRAVA users will be taken automatically from STRAVA app once they join the challenge STRAVA group. (Link to join the group will be shared before the challenge starts). <br>
      (2) For those who are not using Strava, they can send the activities screenshot via email at "support@pedalspower.com" once every 5 days.`
            },
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
    }
    ngOnInit() {
        // this.initializeSwipe();
        // this.loadPartnerLogos();
        //this.loadPartnerReviews();
    }
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
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
    }
    toggleAccordion(index) {
        this.selectedIndex = this.selectedIndex === index ? null : index;
    }
}
CentuaryCyclingComponent.ɵfac = function CentuaryCyclingComponent_Factory(t) { return new (t || CentuaryCyclingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
CentuaryCyclingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CentuaryCyclingComponent, selectors: [["app-centuary-cycling"]], decls: 142, vars: 6, consts: [[1, "slider"], [1, "slider-container"], ["class", "slide", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], ["id", "hall-of-fame", 1, "section"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "mb-5"], [1, "small-title"], [1, "viewAllHallOfFame"], ["href", "javascript:void(0)"], [1, "col-lg-12", "scroll-animation"], [3, "images"], ["id", "testimonial", 1, "section", "bg-white"], [1, "row", "mt-4"], [1, "hori-timeline"], [1, "events", "navs-carousel", 3, "options"], [4, "ngFor", "ngForOf"], ["id", "medals-and-tshirts", 1, "section", "scroll-animation"], ["id", "challenge", 1, "section", "scroll-animation"], [1, "parallax"], [1, ""], [1, "row", "challenge-row"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "card"], [1, "card-header", "bg-transparent", "border-bottom"], [1, "d-flex", "align-items-center", "mb-2"], [1, "features-number", "fw-semibold", "display-4", "me-3", "chRuleHead"], [1, "mb-0", "chRuleHead"], [1, "card-body"], [1, "card-blockquote", "mb-0"], [1, "chRuleDesc"], ["id", "faq", 1, "section", "scroll-animation"], [1, "accordion-container"], ["class", "accordion-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "slide", 3, "ngStyle"], [1, "overlay"], [1, "slide-content"], [1, "text-white", "fw-semibold", "mb-3", "hero-title"], [1, "font-size-14"], [1, "button-items", "mt-4"], ["href", "javascript: void(0);", 1, "btn", "btn-primary"], ["carouselSlide", ""], [1, "item", "event-list"], [1, "event-date"], ["alt", "", 1, "rounded-circle", "avatar-lg", 2, "margin", "auto", "width", "auto", 3, "src"], [1, "event-down-icon"], [1, "bx", "bx-down-arrow-circle", "h1", "text-primary", "down-arrow-icon"], [1, "mt-3", "px-3"], [1, "review-star-icon"], ["alt", "", 2, "display", "initial", "width", "100px", 3, "src"], [1, "text-muted"], [1, "accordion-item", 3, "click"], [1, "accordion-header"], [2, "color", "#999"], [1, "accordion-content"], [3, "innerHTML"]], template: function CentuaryCyclingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CentuaryCyclingComponent_div_2_Template, 10, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Happy Winners");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Hall of Fame");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10)(13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-gallery-lightbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "section", 13)(18, "div", 4)(19, "div", 5)(20, "div", 6)(21, "div", 7)(22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Testimonial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Experience of Participants");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14)(27, "div", 6)(28, "div", 15)(29, "owl-carousel-o", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CentuaryCyclingComponent_ng_container_30_Template, 2, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section", 18)(32, "div", 4)(33, "div", 5)(34, "div", 6)(35, "div", 7)(36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Medals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Medals and T-shirts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "app-gallery-lightbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "section", 19)(43, "div", 4)(44, "div", 5)(45, "div", 6)(46, "div", 7)(47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Challenge Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 11)(52, "div", 20)(53, "div", 21)(54, "div", 21)(55, "div", 21)(56, "div", 22)(57, "div", 23)(58, "div", 24)(59, "div", 25)(60, "div", 26)(61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Complete Choosen Distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 29)(66, "blockquote", 30)(67, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Complete your chosen distance in the given duration of the event. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 23)(70, "div", 24)(71, "div", 25)(72, "div", 26)(73, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "02 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Record your activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 29)(78, "blockquote", 30)(79, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Record your activity in any fitness app (STRAVA Recommended) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 23)(82, "div", 24)(83, "div", 25)(84, "div", 26)(85, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "03 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Choose Days, Place or Distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 29)(90, "blockquote", 30)(91, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " You are free to choose the days, place (indoors or outdoors), and the distance you want to complete on any particular day. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 23)(94, "div", 24)(95, "div", 25)(96, "div", 26)(97, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "04 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Required minimum distance is 5 KM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 29)(102, "blockquote", 30)(103, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " Participants has to ride a minimum distance of 5 KM for an activity to be considered for the challenge. Less than 5 KM won't be counted. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 23)(106, "div", 24)(107, "div", 25)(108, "div", 26)(109, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "05 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Two rides are accepted in a day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 29)(114, "blockquote", 30)(115, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " In a day, a maximum of two rides are accepted. If you do more than 2, then only the first two will be counted towards the challenge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 23)(118, "div", 24)(119, "div", 25)(120, "div", 26)(121, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "06 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "95% of your chosen target is compulsory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 29)(126, "blockquote", 30)(127, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " If you have registered for the medal category then it is mandatory to complete up to 95% of your chosen target to be eligible for medal. If you fail to complete 95% of your selected target then you won't be receiving the finisher's medal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "section", 32)(130, "div", 4)(131, "div", 5)(132, "div", 6)(133, "div", 7)(134, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 11)(139, "div")(140, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](141, CentuaryCyclingComponent_div_141_Template, 7, 8, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.timelineCarousel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.carouselItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.medals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.accordionData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective, _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__.GalleryLightboxComponent], styles: [".section[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  border-left: 2px solid blue;\n  padding: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 575px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 1s ease, transform 0.8s ease;\n  z-index: 0;\n  \n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  animation: slideIn 0.8s ease forwards;\n  z-index: 99;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  \n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  text-align: left;\n  opacity: 0;\n  \n  transform: translateX(-50px);\n  \n  min-width: 50%;\n  max-width: 50%;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 12px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #c0c0c0;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 12px;\n  z-index: 2;\n  display: flex;\n  gap: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.5rem;\n  width: 30px;\n  transition: background 0.3s ease;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n\n\n@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n    \n  }\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n\n.scroll-animation[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n\n.scroll-animation.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n\n@media (max-width: 768px) {\n  .slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n.image-overlay-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  max-width: 100%;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 660px;\n  display: block;\n  border-radius: 0px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(1, 1, 1, 0.5);\n  \n  transition: opacity 0.5s ease;\n  border-radius: 8px;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  text-align: center;\n}\n\n.overlay-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n}\n\n.overlay-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#challenge[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n}\n\n.chRuleHead[_ngcontent-%COMP%] {\n  color: #d1d1d1;\n}\n\n.chRuleDesc[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n  font-style: italic;\n}\n\n.row.challenge-row[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n\n\n.parallax[_ngcontent-%COMP%] {\n  background-image: url(\"https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png\");\n  \n  margin-bottom: 30px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.paraContent[_ngcontent-%COMP%] {\n  background-color: red;\n  position: absolute;\n  top: 0;\n  height: 100vh;\n}\n\n.challenge-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-height: 220px;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #515151 !important;\n}\n\n.viewAllHallOfFame[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n#hall-of-fame[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div.row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto !important;\n  width: inherit;\n}\n\n.accordion-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: #efefef;\n  color: white;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.accordion-header.active[_ngcontent-%COMP%] {\n  background-color: #dbdbdb;\n}\n\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.3s ease;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  padding: 0 20px;\n  background: #f9f9f9;\n  font-size: 16px;\n  transition: max-height 0.3s ease, padding 0.3s ease;\n}\n\n.accordion-content.show[_ngcontent-%COMP%] {\n  max-height: 270px;\n  padding: 15px 20px;\n}\n\n.accordion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbnR1YXJ5LWN5Y2xpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUVFO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0RBQUE7RUFDQSxVQUFBO0VBYUEsbUJBQUE7QUFYTjs7QUFBTTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBRVI7O0FBQVE7RUFDRSxxQ0FBQTtFQUNBLFdBQUE7QUFFVjs7QUFJTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FBRlI7O0FBTU07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFFQSw4QkFBQTtFQUNBLGtCQUFBO0FBTlI7O0FBUVE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQU5WOztBQVNRO0VBQ0UsaUJBQUE7QUFQVjs7QUFZSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFWTjs7QUFZTTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUFWUjs7QUFZUTtFQUNFLDhCQUFBO0FBVlY7O0FBZ0JFLDREQUFBOztBQUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7SUFDQSx5QkFBQTtFQWJKO0VBZ0JFO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0lBQ0EscUJBQUE7RUFkSjtBQUNGOztBQWtCRTtFQUNFLFdBQUE7QUFoQko7O0FBdUJFO0VBQ0UsVUFBQTtFQUVBLDBEQUFBO0FBckJKOztBQXlCRTtFQUNFLFVBQUE7QUF0Qko7O0FBMEJFO0VBQ0UsWUFBQTtBQXZCSjs7QUEyQkU7RUFDRTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBeEJKO0FBQ0Y7O0FBa0NFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBaENKOztBQW1DRTtFQUNFLFdBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWpDSjs7QUFvQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtBQWxDSjs7QUFxQ0U7RUFDRSxVQUFBO0FBbENKOztBQXFDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtBQW5DSjs7QUF1Q0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFwQ0o7O0FBdUNFO0VBRUUsU0FBQTtFQUNBLGdCQUFBO0FBckNKOztBQXdDRTtFQUNFLGdCQUFBO0FBckNKOztBQTRDRTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtBQXpDSjs7QUE0Q0U7RUFDRSxjQUFBO0FBekNKOztBQTRDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQXpDSjs7QUF1REU7RUFDRSxhQUFBO0FBcERKOztBQXVERSwwQ0FBQTs7QUFDQTtFQUNFLDBHQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBcERKOztBQXVERTtFQUNFLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQXJESjs7QUF5REU7RUFDRSxpQkFBQTtBQXRESjs7QUEwREU7RUFDRSwyQ0FBQTtBQXZESjs7QUEwREU7RUFDRSxxQkFBQTtBQXZESjs7QUEwREU7RUFDRSxZQUFBO0FBdkRKOztBQTBERTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtBQXZESjs7QUFnRUU7RUFDRSxXQUFBO0VBSUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQWhFSjs7QUFtRUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWhFSjs7QUFtRUU7RUFDRSx5QkFBQTtBQWhFSjs7QUFtRUU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQWhFSjs7QUFtRUU7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1EQUFBO0FBaEVKOztBQW1FRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsU0FBQTtBQWhFSiIsImZpbGUiOiJjZW50dWFyeS1jeWNsaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1iLTUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibHVlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NzVweDtcclxuICBcclxuICAgIC5zbGlkZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgdHJhbnNmb3JtIDAuOHMgZWFzZTtcclxuICAgICAgei1pbmRleDogMDtcclxuICBcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICBcclxuICAgICAgICAuc2xpZGUtY29udGVudCB7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNsaWRlSW4gMC44cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICAgIC8qIE92ZXJsYXkgZWZmZWN0ICovXHJcbiAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAvKiBBZGp1c3Qgb3BhY2l0eSBhbmQgY29sb3IgaGVyZSAqL1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICAgICAgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgLy8gbGVmdDogMjBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLyogSW5pdGlhbCBvcGFjaXR5IGZvciBzbW9vdGggZmFkZS1pbiAqL1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XHJcbiAgICAgICAgLyogSW5pdGlhbCBwb3NpdGlvbiBvZmYgdGhlIHNjcmVlbiAqL1xyXG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjYzBjMGMwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNsaWRlci1jb250cm9scyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA0NHB4O1xyXG4gICAgICByaWdodDogMTJweDtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gIFxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBLZXlmcmFtZSBhbmltYXRpb24gZm9yIHNsaWRpbmcgaW4gY29udGVudCBmcm9tIHRoZSBsZWZ0ICovXHJcbiAgQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuICAgICAgLyogU3RhcnQgb2ZmIHRoZSBzY3JlZW4gKi9cclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIC8qIFNsaWRlIGludG8gcGxhY2UgKi9cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmN1cnJlbmN5LXByaWNlIHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvL3Njcm9sbFxyXG4gIC8vc2Nyb2xsIGFuaW1hdGlvblxyXG4gIC5zY3JvbGwtYW5pbWF0aW9uIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjZzIGVhc2Utb3V0O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuc2Nyb2xsLWFuaW1hdGlvbi5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXJyZW5jeS1wcmljZSB7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNsaWRlci1jb250YWluZXIgLnNsaWRlIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vY2hhbGxlbmdlIHJ1bGVcclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1vdmVybGF5LWNvbnRhaW5lciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA2NjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDEsIDAuNSk7XHJcbiAgICAvKiBTZW1pLXRyYW5zcGFyZW50IGJsYWNrIG92ZXJsYXkgKi9cclxuICBcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCBoMiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheS1jb250ZW50IHAge1xyXG4gICAgLy8gZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLy8gLmNoYWxsZW5nZS1yb3d7XHJcbiAgLy8gICAvLyBtYXJnaW46IDAgNTBweDtcclxuICAvLyB9XHJcbiAgXHJcbiAgI2NoYWxsZW5nZSAuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNoUnVsZUhlYWQge1xyXG4gICAgY29sb3I6ICNkMWQxZDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaFJ1bGVEZXNjIHtcclxuICAgIGNvbG9yOiAjYzRjNGM0O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICAvLy8vcGFyYWxsYXggZWZmZWN0XHJcbiAgLy8vIFxyXG4gIC8vLyBcclxuICAvLy8gXHJcbiAgXHJcbiAgLnJvdy5jaGFsbGVuZ2Utcm93IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGNvbnRhaW5lZCBwYXJhbGxheCBwZXJzcGVjdGl2ZSBtb2R1bGUgKi9cclxuICAucGFyYWxsYXgge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9wYW5kZXlqaTk4LmdpdGh1Yi5pby9pUG93ZXIvc3RhdGljL21lZGlhL01haW5JbWcuMjZhMzFkOWM1NzY1ZjA4ZDhjMDcucG5nXCIpO1xyXG4gICAgLyogRnVsbCB2aWV3cG9ydCBoZWlnaHQgZm9yIGxhcmdlciBzY3JlZW5zICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICAucGFyYUNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgLy8gZm9udC1zaXplOiAzNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNoYWxsZW5nZS1yb3cgLmNhcmQge1xyXG4gICAgbWluLWhlaWdodDogMjIwcHhcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmJvcmRlci1ib3R0b20ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnZpZXdBbGxIYWxsT2ZGYW1le1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAjaGFsbC1vZi1mYW1lID4gZGl2ID4gZGl2LnJvdyA+IGRpdiA+IGRpdiA+IGEgPiBzcGFuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1nIHtcclxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vLy8vQWNjb3JkaW9uIFxyXG4gIC8vLyBcclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1heC13aWR0aDogODAwcHg7XHJcbiAgIFxyXG4gICAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1pdGVtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWhlYWRlciBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyIGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLCBwYWRkaW5nIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250ZW50LnNob3cge1xyXG4gICAgbWF4LWhlaWdodDogMjcwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24tY29udGVudCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 9990:
/*!***************************************************************!*\
  !*** ./src/app/site/website/our-story/our-story.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurStoryComponent": () => (/* binding */ OurStoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


const _c0 = function (a0) { return { "background-image": a0 }; };
function OurStoryComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13)(3, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r2 === ctx_r0.currentSlideIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "url(" + slide_r1.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r1.description, " ");
} }
class OurStoryComponent {
    constructor() {
        this.currentSlideIndex = 0;
        //Banner top
        this.slides = [
            {
                image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
                title: 'What we do',
                description: `
      We are dedicated to empowering individuals to prioritize their health and well-being. 
      Our challenges motivate participants to set and achieve goals that lead to lasting wellness. 
      By fostering commitment and perseverance, we help build habits that support long-term health. 
      
      `
            },
        ];
    }
    ngOnInit() {
    }
}
OurStoryComponent.ɵfac = function OurStoryComponent_Factory(t) { return new (t || OurStoryComponent)(); };
OurStoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurStoryComponent, selectors: [["app-our-story"]], decls: 24, vars: 1, consts: [[1, "slider"], [1, "slider-container"], ["class", "slide", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], ["id", "our-story", 1, "section"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "mb-5"], [1, "small-title"], [1, "viewAllHallOfFame"], [1, "col-lg-12", "story-desc"], [1, "slide", 3, "ngStyle"], [1, "overlay"], [1, "slide-content"], [1, "fw-semibold", "mb-3", "hero-title"], [1, "font-size-14", 2, "color", "#c0c0c0"]], template: function OurStoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OurStoryComponent_div_2_Template, 7, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Who are we and what is our vision?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " At our core, we aim to empower individuals to prioritize and maintain excellent health. Through our challenges, we motivate participants to strive for ongoing wellness and peak physical condition. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br")(16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " We set clear, achievable goals that serve as milestones on their journey to optimal health. By encouraging commitment and perseverance, we foster habits that promote long-term well-being. Our approach emphasizes personalized goals tailored to individual needs, ensuring each participant receives targeted support in achieving their health objectives. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br")(19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Whether through fitness achievements, nutritional milestones, or mindfulness practices, our challenges are designed to cultivate a holistic approach to health. We believe in empowering individuals not only to reach their health goals but also to sustain them, fostering a lifestyle where well-being is a priority. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br")(22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Join us in this journey towards a healthier, more vibrant life, where every challenge conquered contributes to a stronger, more resilient you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".section[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  border-left: 2px solid blue;\n  padding: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 575px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 1s ease, transform 0.8s ease;\n  z-index: 0;\n  \n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  animation: slideIn 0.8s ease forwards;\n  z-index: 99;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  \n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  text-align: left;\n  opacity: 0;\n  \n  transform: translateX(-50px);\n  \n  min-width: 50%;\n  max-width: 50%;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 12px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #c0c0c0;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 12px;\n  z-index: 2;\n  display: flex;\n  gap: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.5rem;\n  width: 30px;\n  transition: background 0.3s ease;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n\n\n@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n    \n  }\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n\n.scroll-animation[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n\n.scroll-animation.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n\n@media (max-width: 768px) {\n  .slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n.image-overlay-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  max-width: 100%;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 660px;\n  display: block;\n  border-radius: 0px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(1, 1, 1, 0.5);\n  \n  transition: opacity 0.5s ease;\n  border-radius: 8px;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  text-align: center;\n}\n\n.overlay-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n}\n\n.overlay-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#challenge[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n}\n\n.chRuleHead[_ngcontent-%COMP%] {\n  color: #d1d1d1;\n}\n\n.chRuleDesc[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n  font-style: italic;\n}\n\n.row.challenge-row[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n\n\n.parallax[_ngcontent-%COMP%] {\n  background-image: url(\"https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png\");\n  \n  margin-bottom: 30px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.paraContent[_ngcontent-%COMP%] {\n  background-color: red;\n  position: absolute;\n  top: 0;\n  height: 100vh;\n}\n\n.challenge-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-height: 220px;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #515151 !important;\n}\n\n.viewAllHallOfFame[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n#hall-of-fame[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div.row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto !important;\n  width: inherit;\n}\n\n.accordion-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: #efefef;\n  color: white;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.accordion-header.active[_ngcontent-%COMP%] {\n  background-color: #dbdbdb;\n}\n\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.3s ease;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  padding: 0 20px;\n  background: #f9f9f9;\n  font-size: 16px;\n  transition: max-height 0.3s ease, padding 0.3s ease;\n}\n\n.accordion-content.show[_ngcontent-%COMP%] {\n  max-height: 270px;\n  padding: 15px 20px;\n}\n\n.accordion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.story-desc[_ngcontent-%COMP%] {\n  border: 1px solid #999;\n  padding: 20px;\n}\n\n@media (max-width: 480px) {\n  .slider-container[_ngcontent-%COMP%] {\n    height: 415px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91ci1zdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUU7RUFDRSwyQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtFQUNBLFVBQUE7RUFhQSxtQkFBQTtBQVhOOztBQUFNO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFFUjs7QUFBUTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtBQUVWOztBQUlNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFGUjs7QUFNTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUVBLDhCQUFBO0VBQ0Esa0JBQUE7QUFOUjs7QUFRUTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBTlY7O0FBU1E7RUFDRSxpQkFBQTtBQVBWOztBQVlJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQVZOOztBQVlNO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQVZSOztBQVlRO0VBQ0UsOEJBQUE7QUFWVjs7QUFnQkUsNERBQUE7O0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtJQUNBLHlCQUFBO0VBYko7RUFnQkU7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7SUFDQSxxQkFBQTtFQWRKO0FBQ0Y7O0FBa0JFO0VBQ0UsV0FBQTtBQWhCSjs7QUF1QkU7RUFDRSxVQUFBO0VBRUEsMERBQUE7QUFyQko7O0FBeUJFO0VBQ0UsVUFBQTtBQXRCSjs7QUEwQkU7RUFDRSxZQUFBO0FBdkJKOztBQTJCRTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGVBQUE7RUF4Qko7QUFDRjs7QUFrQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFoQ0o7O0FBbUNFO0VBQ0UsV0FBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBakNKOztBQW9DRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLGtCQUFBO0FBbENKOztBQXFDRTtFQUNFLFVBQUE7QUFsQ0o7O0FBcUNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUVBLGtCQUFBO0FBbkNKOztBQXVDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXBDSjs7QUF1Q0U7RUFFRSxTQUFBO0VBQ0EsZ0JBQUE7QUFyQ0o7O0FBd0NFO0VBQ0UsZ0JBQUE7QUFyQ0o7O0FBNENFO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0FBekNKOztBQTRDRTtFQUNFLGNBQUE7QUF6Q0o7O0FBNENFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBekNKOztBQXVERTtFQUNFLGFBQUE7QUFwREo7O0FBdURFLDBDQUFBOztBQUNBO0VBQ0UsMEdBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFwREo7O0FBdURFO0VBQ0UscUJBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0FBckRKOztBQXlERTtFQUNFLGlCQUFBO0FBdERKOztBQTBERTtFQUNFLDJDQUFBO0FBdkRKOztBQTBERTtFQUNFLHFCQUFBO0FBdkRKOztBQTBERTtFQUNFLFlBQUE7QUF2REo7O0FBMERFO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBdkRKOztBQWdFRTtFQUNFLFdBQUE7RUFJQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQWhFSjs7QUFtRUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0FBaEVKOztBQW1FRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBaEVKOztBQW1FRTtFQUNFLHlCQUFBO0FBaEVKOztBQW1FRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBaEVKOztBQW1FRTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtBQWhFSjs7QUFtRUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbURBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQWhFSjs7QUFtRUU7RUFDRSxTQUFBO0FBaEVKOztBQW9FRTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBQWpFSjs7QUFxRUE7RUFDRTtJQUNJLGFBQUE7RUFsRUo7QUFDRiIsImZpbGUiOiJvdXItc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubWItNSB7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsdWU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU3NXB4O1xyXG4gIFxyXG4gICAgLnNsaWRlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLCB0cmFuc2Zvcm0gMC44cyBlYXNlO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG4gIFxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gIFxyXG4gICAgICAgIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjhzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICAgICAgLyogT3ZlcmxheSBlZmZlY3QgKi9cclxuICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIC8qIEFkanVzdCBvcGFjaXR5IGFuZCBjb2xvciBoZXJlICovXHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgICAuc2xpZGUtY29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAvLyBsZWZ0OiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAvKiBJbml0aWFsIG9wYWNpdHkgZm9yIHNtb290aCBmYWRlLWluICovXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuICAgICAgICAvKiBJbml0aWFsIHBvc2l0aW9uIG9mZiB0aGUgc2NyZWVuICovXHJcbiAgICAgICAgbWluLXdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIFxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgY29sb3I6ICNjMGMwYzA7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2xpZGVyLWNvbnRyb2xzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDQ0cHg7XHJcbiAgICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDEwcHg7XHJcbiAgXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEtleWZyYW1lIGFuaW1hdGlvbiBmb3Igc2xpZGluZyBpbiBjb250ZW50IGZyb20gdGhlIGxlZnQgKi9cclxuICBAa2V5ZnJhbWVzIHNsaWRlSW4ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gICAgICAvKiBTdGFydCBvZmYgdGhlIHNjcmVlbiAqL1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgLyogU2xpZGUgaW50byBwbGFjZSAqL1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAuY3VycmVuY3ktcHJpY2Uge1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vc2Nyb2xsXHJcbiAgLy9zY3JvbGwgYW5pbWF0aW9uXHJcbiAgLnNjcm9sbC1hbmltYXRpb24ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuNnMgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JvbGwtYW5pbWF0aW9uLnNob3cge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgXHJcbiAgLmN1cnJlbmN5LXByaWNlIHtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuc2xpZGVyLWNvbnRhaW5lciAuc2xpZGUgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLy9jaGFsbGVuZ2UgcnVsZVxyXG4gIFxyXG4gIC5pbWFnZS1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIEFkanVzdCB3aWR0aCBhcyBuZWVkZWQgKi9cclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLW92ZXJsYXktY29udGFpbmVyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDY2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMSwgMSwgMC41KTtcclxuICAgIC8qIFNlbWktdHJhbnNwYXJlbnQgYmxhY2sgb3ZlcmxheSAqL1xyXG4gIFxyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1vdmVybGF5LWNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAub3ZlcmxheS1jb250ZW50IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdmVybGF5LWNvbnRlbnQgcCB7XHJcbiAgICAvLyBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAvLyAuY2hhbGxlbmdlLXJvd3tcclxuICAvLyAgIC8vIG1hcmdpbjogMCA1MHB4O1xyXG4gIC8vIH1cclxuICBcclxuICAjY2hhbGxlbmdlIC5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuY2hSdWxlSGVhZCB7XHJcbiAgICBjb2xvcjogI2QxZDFkMTtcclxuICB9XHJcbiAgXHJcbiAgLmNoUnVsZURlc2Mge1xyXG4gICAgY29sb3I6ICNjNGM0YzQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vLy9wYXJhbGxheCBlZmZlY3RcclxuICAvLy8gXHJcbiAgLy8vIFxyXG4gIC8vLyBcclxuICBcclxuICAucm93LmNoYWxsZW5nZS1yb3cge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogY29udGFpbmVkIHBhcmFsbGF4IHBlcnNwZWN0aXZlIG1vZHVsZSAqL1xyXG4gIC5wYXJhbGxheCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3BhbmRleWppOTguZ2l0aHViLmlvL2lQb3dlci9zdGF0aWMvbWVkaWEvTWFpbkltZy4yNmEzMWQ5YzU3NjVmMDhkOGMwNy5wbmdcIik7XHJcbiAgICAvKiBGdWxsIHZpZXdwb3J0IGhlaWdodCBmb3IgbGFyZ2VyIHNjcmVlbnMgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXJhQ29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAvLyBmb250LXNpemU6IDM2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY2hhbGxlbmdlLXJvdyAuY2FyZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMjBweFxyXG4gIH1cclxuICBcclxuICBcclxuICAuYm9yZGVyLWJvdHRvbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUxNTE1MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudmlld0FsbEhhbGxPZkZhbWV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gICNoYWxsLW9mLWZhbWUgPiBkaXYgPiBkaXYucm93ID4gZGl2ID4gZGl2ID4gYSA+IHNwYW4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAub3dsLWNhcm91c2VsIC5vd2wtaXRlbSBpbWcge1xyXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLy8vLy9BY2NvcmRpb24gXHJcbiAgLy8vIFxyXG4gIFxyXG4gIC5hY2NvcmRpb24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gbWF4LXdpZHRoOiA4MDBweDtcclxuICAgXHJcbiAgICBcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIgaSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRlbnQge1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2UsIHBhZGRpbmcgMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRlbnQuc2hvdyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNzBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250ZW50IHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLnN0b3J5LWRlc2Mge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi8vKioqKioqKioqZ2xvYmFsKioqKioqKioqKioqKioqKiovL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgIGhlaWdodDogNDE1cHg7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 66821:
/*!*************************************************************************!*\
  !*** ./src/app/site/website/privacy-policy/privacy-policy.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyComponent": () => (/* binding */ PrivacyPolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


const _c0 = function (a0) { return { "background-image": a0 }; };
function PrivacyPolicyComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13)(3, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r2 === ctx_r0.currentSlideIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "url(" + slide_r1.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r1.description, " ");
} }
class PrivacyPolicyComponent {
    constructor() {
        this.currentSlideIndex = 0;
        //Banner top
        this.slides = [
            {
                image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
                title: 'What we do',
                description: `
      We are dedicated to empowering individuals to prioritize their health and well-being. 
      Our challenges motivate participants to set and achieve goals that lead to lasting wellness. 
      By fostering commitment and perseverance, we help build habits that support long-term health. 
      
      `
            },
        ];
    }
    ngOnInit() {
    }
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(); };
PrivacyPolicyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 71, vars: 1, consts: [[1, "slider"], [1, "slider-container"], ["class", "slide", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], ["id", "our-story", 1, "section"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "mb-5"], [1, "small-title"], [1, "viewAllHallOfFame"], [1, "col-lg-12", "story-desc"], [1, "slide", 3, "ngStyle"], [1, "overlay"], [1, "slide-content"], [1, "fw-semibold", "mb-3", "hero-title"], [1, "font-size-14", 2, "color", "#c0c0c0"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrivacyPolicyComponent_div_2_Template, 7, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Our Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div")(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Welcome to Ipower. This Privacy Policy outlines how Ipower (\"we,\" \"our,\" or \"us\") collects, uses, and protects your Personal Information when you visit our website (the \"Site\") or make a purchase through it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div")(19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " If you have any questions, need more information about our privacy practices, or wish to make a complaint, please reach out to us at: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul")(24, "li")(25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Ipower@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li")(29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Addr:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Ipower M3M International Financial Centre, Golf Course Ext Rd, Badshahpur, Sector 66, Gurugram, Haryana 122002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div")(33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Information We Collect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " When you visit our Site, we gather certain details about your device, interactions with the Site, and information necessary to process your transactions. If you contact us for support, we may collect additional information. Here, \"Personal Information\" refers to any data that can identify an individual. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "How We Use Your Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " We use your Personal Information to deliver our services effectively, including: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul")(42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Processing and fulfilling orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Handling payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Shipping and delivering products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Keeping you informed about new products, services, and promotions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Cookies are small files placed on your device to enhance your browsing experience. They help remember your preferences, such as login details and regional settings, so you don't need to re-enter them. Cookies also provide insights into website usage, such as whether it's your first visit or if you're a returning user.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br")(55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " There are two types of cookies: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul")(58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Session Cookies: Temporary and expire once you close your browser.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Persistent Cookies: Remain on your device for a specified period, ranging from 30 minutes to two years.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " You can manage and control cookies through your browser settings. However, disabling cookies might affect your user experience and limit access to certain features of our Site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Updates to This Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " We may revise this Privacy Policy periodically to reflect changes in our practices, or for legal or regulatory reasons. Any updates will be posted on this page, and your continued use of the Site signifies your acceptance of these changes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br")(69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Thank you for trusting Ipower with your Personal Information. We are committed to protecting your privacy and ensuring a secure browsing experience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".section[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  border-left: 2px solid blue;\n  padding: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 575px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 1s ease, transform 0.8s ease;\n  z-index: 0;\n  \n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  animation: slideIn 0.8s ease forwards;\n  z-index: 99;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  \n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  text-align: left;\n  opacity: 0;\n  \n  transform: translateX(-50px);\n  \n  min-width: 50%;\n  max-width: 50%;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 12px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #c0c0c0;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 12px;\n  z-index: 2;\n  display: flex;\n  gap: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.5rem;\n  width: 30px;\n  transition: background 0.3s ease;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n\n\n@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n    \n  }\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n\n.scroll-animation[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n\n.scroll-animation.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n\n@media (max-width: 768px) {\n  .slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n.image-overlay-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  max-width: 100%;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 660px;\n  display: block;\n  border-radius: 0px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(1, 1, 1, 0.5);\n  \n  transition: opacity 0.5s ease;\n  border-radius: 8px;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  text-align: center;\n}\n\n.overlay-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n}\n\n.overlay-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#challenge[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n}\n\n.chRuleHead[_ngcontent-%COMP%] {\n  color: #d1d1d1;\n}\n\n.chRuleDesc[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n  font-style: italic;\n}\n\n.row.challenge-row[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n\n\n.parallax[_ngcontent-%COMP%] {\n  background-image: url(\"https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png\");\n  \n  margin-bottom: 30px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.paraContent[_ngcontent-%COMP%] {\n  background-color: red;\n  position: absolute;\n  top: 0;\n  height: 100vh;\n}\n\n.challenge-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-height: 220px;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #515151 !important;\n}\n\n.viewAllHallOfFame[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n#hall-of-fame[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div.row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto !important;\n  width: inherit;\n}\n\n.accordion-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: #efefef;\n  color: white;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.accordion-header.active[_ngcontent-%COMP%] {\n  background-color: #dbdbdb;\n}\n\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.3s ease;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  padding: 0 20px;\n  background: #f9f9f9;\n  font-size: 16px;\n  transition: max-height 0.3s ease, padding 0.3s ease;\n}\n\n.accordion-content.show[_ngcontent-%COMP%] {\n  max-height: 270px;\n  padding: 15px 20px;\n}\n\n.accordion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.story-desc[_ngcontent-%COMP%] {\n  border: 1px solid #999;\n  padding: 20px;\n}\n\n@media (max-width: 480px) {\n  .slider-container[_ngcontent-%COMP%] {\n    height: 415px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGdEQUFBO0VBQ0EsVUFBQTtFQWFBLG1CQUFBO0FBWE47O0FBQU07RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQUVSOztBQUFRO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0FBRVY7O0FBSU07RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQUZSOztBQU1NO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBRUEsOEJBQUE7RUFDQSxrQkFBQTtBQU5SOztBQVFRO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFOVjs7QUFTUTtFQUNFLGlCQUFBO0FBUFY7O0FBWUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBVk47O0FBWU07RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBVlI7O0FBWVE7RUFDRSw4QkFBQTtBQVZWOztBQWdCRSw0REFBQTs7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0lBQ0EseUJBQUE7RUFiSjtFQWdCRTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtJQUNBLHFCQUFBO0VBZEo7QUFDRjs7QUFrQkU7RUFDRSxXQUFBO0FBaEJKOztBQXVCRTtFQUNFLFVBQUE7RUFFQSwwREFBQTtBQXJCSjs7QUF5QkU7RUFDRSxVQUFBO0FBdEJKOztBQTBCRTtFQUNFLFlBQUE7QUF2Qko7O0FBMkJFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQXhCSjtBQUNGOztBQWtDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQWhDSjs7QUFtQ0U7RUFDRSxXQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFqQ0o7O0FBb0NFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0Esa0JBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UsVUFBQTtBQWxDSjs7QUFxQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBRUEsa0JBQUE7QUFuQ0o7O0FBdUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBcENKOztBQXVDRTtFQUVFLFNBQUE7RUFDQSxnQkFBQTtBQXJDSjs7QUF3Q0U7RUFDRSxnQkFBQTtBQXJDSjs7QUE0Q0U7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7QUF6Q0o7O0FBNENFO0VBQ0UsY0FBQTtBQXpDSjs7QUE0Q0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUF6Q0o7O0FBdURFO0VBQ0UsYUFBQTtBQXBESjs7QUF1REUsMENBQUE7O0FBQ0E7RUFDRSwwR0FBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQXBESjs7QUF1REU7RUFDRSxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUFyREo7O0FBeURFO0VBQ0UsaUJBQUE7QUF0REo7O0FBMERFO0VBQ0UsMkNBQUE7QUF2REo7O0FBMERFO0VBQ0UscUJBQUE7QUF2REo7O0FBMERFO0VBQ0UsWUFBQTtBQXZESjs7QUEwREU7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUF2REo7O0FBZ0VFO0VBQ0UsV0FBQTtFQUlBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBaEVKOztBQW1FRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFoRUo7O0FBbUVFO0VBQ0UseUJBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0FBaEVKOztBQW1FRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtREFBQTtBQWhFSjs7QUFtRUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBaEVKOztBQW1FRTtFQUNFLFNBQUE7QUFoRUo7O0FBb0VFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FBakVKOztBQXFFQTtFQUNFO0lBQ0ksYUFBQTtFQWxFSjtBQUNGIiwiZmlsZSI6InByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1iLTUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibHVlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NzVweDtcclxuICBcclxuICAgIC5zbGlkZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgdHJhbnNmb3JtIDAuOHMgZWFzZTtcclxuICAgICAgei1pbmRleDogMDtcclxuICBcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICBcclxuICAgICAgICAuc2xpZGUtY29udGVudCB7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNsaWRlSW4gMC44cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICAgIC8qIE92ZXJsYXkgZWZmZWN0ICovXHJcbiAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAvKiBBZGp1c3Qgb3BhY2l0eSBhbmQgY29sb3IgaGVyZSAqL1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICAgICAgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgLy8gbGVmdDogMjBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLyogSW5pdGlhbCBvcGFjaXR5IGZvciBzbW9vdGggZmFkZS1pbiAqL1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XHJcbiAgICAgICAgLyogSW5pdGlhbCBwb3NpdGlvbiBvZmYgdGhlIHNjcmVlbiAqL1xyXG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjYzBjMGMwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNsaWRlci1jb250cm9scyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA0NHB4O1xyXG4gICAgICByaWdodDogMTJweDtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gIFxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBLZXlmcmFtZSBhbmltYXRpb24gZm9yIHNsaWRpbmcgaW4gY29udGVudCBmcm9tIHRoZSBsZWZ0ICovXHJcbiAgQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuICAgICAgLyogU3RhcnQgb2ZmIHRoZSBzY3JlZW4gKi9cclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIC8qIFNsaWRlIGludG8gcGxhY2UgKi9cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmN1cnJlbmN5LXByaWNlIHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvL3Njcm9sbFxyXG4gIC8vc2Nyb2xsIGFuaW1hdGlvblxyXG4gIC5zY3JvbGwtYW5pbWF0aW9uIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjZzIGVhc2Utb3V0O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuc2Nyb2xsLWFuaW1hdGlvbi5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXJyZW5jeS1wcmljZSB7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNsaWRlci1jb250YWluZXIgLnNsaWRlIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vY2hhbGxlbmdlIHJ1bGVcclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1vdmVybGF5LWNvbnRhaW5lciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA2NjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDEsIDAuNSk7XHJcbiAgICAvKiBTZW1pLXRyYW5zcGFyZW50IGJsYWNrIG92ZXJsYXkgKi9cclxuICBcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCBoMiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheS1jb250ZW50IHAge1xyXG4gICAgLy8gZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLy8gLmNoYWxsZW5nZS1yb3d7XHJcbiAgLy8gICAvLyBtYXJnaW46IDAgNTBweDtcclxuICAvLyB9XHJcbiAgXHJcbiAgI2NoYWxsZW5nZSAuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNoUnVsZUhlYWQge1xyXG4gICAgY29sb3I6ICNkMWQxZDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaFJ1bGVEZXNjIHtcclxuICAgIGNvbG9yOiAjYzRjNGM0O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICAvLy8vcGFyYWxsYXggZWZmZWN0XHJcbiAgLy8vIFxyXG4gIC8vLyBcclxuICAvLy8gXHJcbiAgXHJcbiAgLnJvdy5jaGFsbGVuZ2Utcm93IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGNvbnRhaW5lZCBwYXJhbGxheCBwZXJzcGVjdGl2ZSBtb2R1bGUgKi9cclxuICAucGFyYWxsYXgge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9wYW5kZXlqaTk4LmdpdGh1Yi5pby9pUG93ZXIvc3RhdGljL21lZGlhL01haW5JbWcuMjZhMzFkOWM1NzY1ZjA4ZDhjMDcucG5nXCIpO1xyXG4gICAgLyogRnVsbCB2aWV3cG9ydCBoZWlnaHQgZm9yIGxhcmdlciBzY3JlZW5zICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICAucGFyYUNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgLy8gZm9udC1zaXplOiAzNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNoYWxsZW5nZS1yb3cgLmNhcmQge1xyXG4gICAgbWluLWhlaWdodDogMjIwcHhcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmJvcmRlci1ib3R0b20ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnZpZXdBbGxIYWxsT2ZGYW1le1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAjaGFsbC1vZi1mYW1lID4gZGl2ID4gZGl2LnJvdyA+IGRpdiA+IGRpdiA+IGEgPiBzcGFuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1nIHtcclxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vLy8vQWNjb3JkaW9uIFxyXG4gIC8vLyBcclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1heC13aWR0aDogODAwcHg7XHJcbiAgIFxyXG4gICAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1pdGVtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWhlYWRlciBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyIGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLCBwYWRkaW5nIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250ZW50LnNob3cge1xyXG4gICAgbWF4LWhlaWdodDogMjcwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24tY29udGVudCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcblxyXG4gIC5zdG9yeS1kZXNjIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vLyoqKioqKioqKmdsb2JhbCoqKioqKioqKioqKioqKioqLy9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDQxNXB4O1xyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 27472:
/*!***********************************************************************!*\
  !*** ./src/app/site/website/refund-policy/refund-policy.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundPolicyComponent": () => (/* binding */ RefundPolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


const _c0 = function (a0) { return { "background-image": a0 }; };
function RefundPolicyComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13)(3, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r2 === ctx_r0.currentSlideIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "url(" + slide_r1.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r1.description, " ");
} }
class RefundPolicyComponent {
    constructor() {
        this.currentSlideIndex = 0;
        //Banner top
        this.slides = [
            {
                image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
                title: 'What we do',
                description: `
      We are dedicated to empowering individuals to prioritize their health and well-being. 
      Our challenges motivate participants to set and achieve goals that lead to lasting wellness. 
      By fostering commitment and perseverance, we help build habits that support long-term health. 
      
      `
            },
        ];
    }
    ngOnInit() {
    }
}
RefundPolicyComponent.ɵfac = function RefundPolicyComponent_Factory(t) { return new (t || RefundPolicyComponent)(); };
RefundPolicyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundPolicyComponent, selectors: [["app-refund-policy"]], decls: 62, vars: 1, consts: [[1, "slider"], [1, "slider-container"], ["class", "slide", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], ["id", "our-story", 1, "section"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "mb-5"], [1, "small-title"], [1, "viewAllHallOfFame"], [1, "col-lg-12", "story-desc"], [1, "slide", 3, "ngStyle"], [1, "overlay"], [1, "slide-content"], [1, "fw-semibold", "mb-3", "hero-title"], [1, "font-size-14", 2, "color", "#c0c0c0"]], template: function RefundPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundPolicyComponent_div_2_Template, 7, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancellation and Refund Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ipower Cancellation and Refund Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Virtual Challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div")(16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tickets for Virtual Challenges are non-refundable and non-transferable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cycling Trips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p")(21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "1. Cancellation 30 days or more before the trip start date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Receive a refund minus a 10% cancellation fee. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p")(26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "2. Cancellation between 29 and 21 days before the trip start date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Receive a refund minus a 50% cancellation fee. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p")(31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "3. Cancellation within 20 days of the trip start date or no-show:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Unfortunately, no refund or voucher is available. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Trip Cancellation by Ipower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " In the rare event that Ipower cancels a trip due to force majeure, natural calamities (such as continuous rain, snowstorms, floods, landslides, earthquakes), political unrest, curfews, pandemics, government orders, or any other issues impacting group safety, a full trip fee voucher will be issued. This voucher can be redeemed for any Ipower trip within one year from the original trip date. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Rescheduling Your Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p")(42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "1. Reschedule 30 days or more before the trip start date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Transfer to a future date at no extra charge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p")(47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2. Reschedule between 29 days and 1 day before the trip start date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " A 20% transfer fee applies, requiring an additional 20% of the trip fee to shift your registration to a future date. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p")(52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Note: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Each registration can be transferred only once. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " For further inquiries or assistance, please contact us at Ipower@gmail.com. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p")(58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " M3M International Financial Centre, Golf Course Ext Rd, Badshahpur, Sector 66, Gurugram, Haryana 122002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".section[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  border-left: 2px solid blue;\n  padding: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 575px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 1s ease, transform 0.8s ease;\n  z-index: 0;\n  \n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  animation: slideIn 0.8s ease forwards;\n  z-index: 99;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  \n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  text-align: left;\n  opacity: 0;\n  \n  transform: translateX(-50px);\n  \n  min-width: 50%;\n  max-width: 50%;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 12px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #c0c0c0;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 12px;\n  z-index: 2;\n  display: flex;\n  gap: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.5rem;\n  width: 30px;\n  transition: background 0.3s ease;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n\n\n@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n    \n  }\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n\n.scroll-animation[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n\n.scroll-animation.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n\n@media (max-width: 768px) {\n  .slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n.image-overlay-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  max-width: 100%;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 660px;\n  display: block;\n  border-radius: 0px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(1, 1, 1, 0.5);\n  \n  transition: opacity 0.5s ease;\n  border-radius: 8px;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  text-align: center;\n}\n\n.overlay-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n}\n\n.overlay-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#challenge[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n}\n\n.chRuleHead[_ngcontent-%COMP%] {\n  color: #d1d1d1;\n}\n\n.chRuleDesc[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n  font-style: italic;\n}\n\n.row.challenge-row[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n\n\n.parallax[_ngcontent-%COMP%] {\n  background-image: url(\"https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png\");\n  \n  margin-bottom: 30px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.paraContent[_ngcontent-%COMP%] {\n  background-color: red;\n  position: absolute;\n  top: 0;\n  height: 100vh;\n}\n\n.challenge-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-height: 220px;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #515151 !important;\n}\n\n.viewAllHallOfFame[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n#hall-of-fame[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div.row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto !important;\n  width: inherit;\n}\n\n.accordion-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: #efefef;\n  color: white;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.accordion-header.active[_ngcontent-%COMP%] {\n  background-color: #dbdbdb;\n}\n\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.3s ease;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  padding: 0 20px;\n  background: #f9f9f9;\n  font-size: 16px;\n  transition: max-height 0.3s ease, padding 0.3s ease;\n}\n\n.accordion-content.show[_ngcontent-%COMP%] {\n  max-height: 270px;\n  padding: 15px 20px;\n}\n\n.accordion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.story-desc[_ngcontent-%COMP%] {\n  border: 1px solid #999;\n  padding: 20px;\n}\n\n@media (max-width: 480px) {\n  .slider-container[_ngcontent-%COMP%] {\n    height: 415px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZnVuZC1wb2xpY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUVFO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0RBQUE7RUFDQSxVQUFBO0VBYUEsbUJBQUE7QUFYTjs7QUFBTTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBRVI7O0FBQVE7RUFDRSxxQ0FBQTtFQUNBLFdBQUE7QUFFVjs7QUFJTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FBRlI7O0FBTU07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFFQSw4QkFBQTtFQUNBLGtCQUFBO0FBTlI7O0FBUVE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQU5WOztBQVNRO0VBQ0UsaUJBQUE7QUFQVjs7QUFZSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFWTjs7QUFZTTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUFWUjs7QUFZUTtFQUNFLDhCQUFBO0FBVlY7O0FBZ0JFLDREQUFBOztBQUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7SUFDQSx5QkFBQTtFQWJKO0VBZ0JFO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0lBQ0EscUJBQUE7RUFkSjtBQUNGOztBQWtCRTtFQUNFLFdBQUE7QUFoQko7O0FBdUJFO0VBQ0UsVUFBQTtFQUVBLDBEQUFBO0FBckJKOztBQXlCRTtFQUNFLFVBQUE7QUF0Qko7O0FBMEJFO0VBQ0UsWUFBQTtBQXZCSjs7QUEyQkU7RUFDRTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBeEJKO0FBQ0Y7O0FBa0NFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBaENKOztBQW1DRTtFQUNFLFdBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWpDSjs7QUFvQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtBQWxDSjs7QUFxQ0U7RUFDRSxVQUFBO0FBbENKOztBQXFDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtBQW5DSjs7QUF1Q0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFwQ0o7O0FBdUNFO0VBRUUsU0FBQTtFQUNBLGdCQUFBO0FBckNKOztBQXdDRTtFQUNFLGdCQUFBO0FBckNKOztBQTRDRTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtBQXpDSjs7QUE0Q0U7RUFDRSxjQUFBO0FBekNKOztBQTRDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQXpDSjs7QUF1REU7RUFDRSxhQUFBO0FBcERKOztBQXVERSwwQ0FBQTs7QUFDQTtFQUNFLDBHQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBcERKOztBQXVERTtFQUNFLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQXJESjs7QUF5REU7RUFDRSxpQkFBQTtBQXRESjs7QUEwREU7RUFDRSwyQ0FBQTtBQXZESjs7QUEwREU7RUFDRSxxQkFBQTtBQXZESjs7QUEwREU7RUFDRSxZQUFBO0FBdkRKOztBQTBERTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtBQXZESjs7QUFnRUU7RUFDRSxXQUFBO0VBSUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQWhFSjs7QUFtRUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWhFSjs7QUFtRUU7RUFDRSx5QkFBQTtBQWhFSjs7QUFtRUU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQWhFSjs7QUFtRUU7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1EQUFBO0FBaEVKOztBQW1FRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsU0FBQTtBQWhFSjs7QUFvRUU7RUFDRSxzQkFBQTtFQUNBLGFBQUE7QUFqRUo7O0FBcUVBO0VBQ0U7SUFDSSxhQUFBO0VBbEVKO0FBQ0YiLCJmaWxlIjoicmVmdW5kLXBvbGljeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYi01IHtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmx1ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTc1cHg7XHJcbiAgXHJcbiAgICAuc2xpZGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UsIHRyYW5zZm9ybSAwLjhzIGVhc2U7XHJcbiAgICAgIHotaW5kZXg6IDA7XHJcbiAgXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgXHJcbiAgICAgICAgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuOHMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgICAvKiBPdmVybGF5IGVmZmVjdCAqL1xyXG4gICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgLyogQWRqdXN0IG9wYWNpdHkgYW5kIGNvbG9yIGhlcmUgKi9cclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICAgIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIC8vIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC8qIEluaXRpYWwgb3BhY2l0eSBmb3Igc21vb3RoIGZhZGUtaW4gKi9cclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gICAgICAgIC8qIEluaXRpYWwgcG9zaXRpb24gb2ZmIHRoZSBzY3JlZW4gKi9cclxuICAgICAgICBtaW4td2lkdGg6IDUwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICBjb2xvcjogI2MwYzBjMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5zbGlkZXItY29udHJvbHMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogNDRweDtcclxuICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICBcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcclxuICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogS2V5ZnJhbWUgYW5pbWF0aW9uIGZvciBzbGlkaW5nIGluIGNvbnRlbnQgZnJvbSB0aGUgbGVmdCAqL1xyXG4gIEBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XHJcbiAgICAgIC8qIFN0YXJ0IG9mZiB0aGUgc2NyZWVuICovXHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAvKiBTbGlkZSBpbnRvIHBsYWNlICovXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jdXJyZW5jeS1wcmljZSB7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLy9zY3JvbGxcclxuICAvL3Njcm9sbCBhbmltYXRpb25cclxuICAuc2Nyb2xsLWFuaW1hdGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC42cyBlYXNlLW91dDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnNjcm9sbC1hbmltYXRpb24uc2hvdyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICBcclxuICAuY3VycmVuY3ktcHJpY2Uge1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zbGlkZXItY29udGFpbmVyIC5zbGlkZSAuc2xpZGUtY29udGVudCB7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICAvL2NoYWxsZW5nZSBydWxlXHJcbiAgXHJcbiAgLmltYWdlLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogQWRqdXN0IHdpZHRoIGFzIG5lZWRlZCAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNjYwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxLCAxLCAwLjUpO1xyXG4gICAgLyogU2VtaS10cmFuc3BhcmVudCBibGFjayBvdmVybGF5ICovXHJcbiAgXHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLW92ZXJsYXktY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdmVybGF5LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5vdmVybGF5LWNvbnRlbnQgaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCBwIHtcclxuICAgIC8vIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIC5jaGFsbGVuZ2Utcm93e1xyXG4gIC8vICAgLy8gbWFyZ2luOiAwIDUwcHg7XHJcbiAgLy8gfVxyXG4gIFxyXG4gICNjaGFsbGVuZ2UgLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaFJ1bGVIZWFkIHtcclxuICAgIGNvbG9yOiAjZDFkMWQxO1xyXG4gIH1cclxuICBcclxuICAuY2hSdWxlRGVzYyB7XHJcbiAgICBjb2xvcjogI2M0YzRjNDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLy8vL3BhcmFsbGF4IGVmZmVjdFxyXG4gIC8vLyBcclxuICAvLy8gXHJcbiAgLy8vIFxyXG4gIFxyXG4gIC5yb3cuY2hhbGxlbmdlLXJvdyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBjb250YWluZWQgcGFyYWxsYXggcGVyc3BlY3RpdmUgbW9kdWxlICovXHJcbiAgLnBhcmFsbGF4IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vcGFuZGV5amk5OC5naXRodWIuaW8vaVBvd2VyL3N0YXRpYy9tZWRpYS9NYWluSW1nLjI2YTMxZDljNTc2NWYwOGQ4YzA3LnBuZ1wiKTtcclxuICAgIC8qIEZ1bGwgdmlld3BvcnQgaGVpZ2h0IGZvciBsYXJnZXIgc2NyZWVucyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgLnBhcmFDb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIC8vIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jaGFsbGVuZ2Utcm93IC5jYXJkIHtcclxuICAgIG1pbi1oZWlnaHQ6IDIyMHB4XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5ib3JkZXItYm90dG9tIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTE1MTUxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC52aWV3QWxsSGFsbE9mRmFtZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgI2hhbGwtb2YtZmFtZSA+IGRpdiA+IGRpdi5yb3cgPiBkaXYgPiBkaXYgPiBhID4gc3BhbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtIGltZyB7XHJcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICAvLy8vL0FjY29yZGlvbiBcclxuICAvLy8gXHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICBcclxuICAgIFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWhlYWRlci5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIgaDMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWhlYWRlciBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24tY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZSwgcGFkZGluZyAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24tY29udGVudC5zaG93IHtcclxuICAgIG1heC1oZWlnaHQ6IDI3MHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRlbnQgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuc3RvcnktZGVzYyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLy8qKioqKioqKipnbG9iYWwqKioqKioqKioqKioqKioqKi8vXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5zbGlkZXItY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiA0MTVweDtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 806:
/*!*********************************************************************!*\
  !*** ./src/app/site/website/run-distance/run-distance.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RunDistanceComponent": () => (/* binding */ RunDistanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gallery-lightbox/gallery-lightbox.component */ 46081);





const _c0 = function (a0) { return { "background-image": a0 }; };
function RunDistanceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 39)(3, "h3", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 42)(8, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Register Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r3 === ctx_r0.currentSlideIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, "url(" + slide_r2.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", slide_r2.description, " ");
} }
function RunDistanceComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RunDistanceComponent_div_86_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const i_r5 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.toggleAccordion(i_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 45)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.selectedIndex === i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1.selectedIndex === i_r5 ? "bx bx-chevron-up" : "bx bx-chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx_r1.selectedIndex === i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r4.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class RunDistanceComponent {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.lastScrollTop = 0;
        this.selectedIndex = null;
        this.partnerLogosCarousel = [];
        this.partnerReviewsCarousel = [];
        this.currentSection = 'home';
        this.medals = [
            { url: 'assets/images/crypto/features-img/challenges/t1.jpg', caption: 'White - Round Neck' },
            { url: 'assets/images/crypto/features-img/challenges/t1.jpg', caption: 'White - Round Neck' },
        ];
        this.currentSlideIndex = 0;
        this.autoplayDuration = 5000; // Duration in milliseconds
        this.isTransitioning = false; // To prevent button spamming
        //Banner top
        this.slides = [
            {
                image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
                title: 'Running Challenge',
                description: `
      A Running Challenge is a fitness event designed to motivate participants to achieve a set 
      running goal within a specific timeframe. Whether you’re aiming for distance or consistency, 
      these challenges push you to stay active, track your progress, and experience the joy of 
      reaching your fitness milestones.
      `
            },
        ];
        ////..........................tshirt preview.....................///
        this.accordionData = [
            { title: 'How many run/walk are acceptable in a day?', content: 'A maximum of 2 run/walk are acceptable in a day. More than 2 won\'t be counted.' },
            { title: 'Is it necessary to perform the activity daily?', content: 'No, it is not necessary to perform the activity every day. You can complete the challenge at your own pace. You just need to finish your chosen distance in the given duration of the event.' },
            {
                title: 'How to Upload the Activity Data?',
                content: `
      (1) Data of STRAVA users will be taken automatically from STRAVA app once they join the challenge STRAVA group. (Link to join the group will be shared before the challenge starts). <br>
      (2) For those who are not using Strava, they can send the activities screenshot via email at "support@pedalspower.com" once every 5 days.`
            },
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
    }
    ngOnInit() {
    }
    toggleAccordion(index) {
        this.selectedIndex = this.selectedIndex === index ? null : index;
    }
}
RunDistanceComponent.ɵfac = function RunDistanceComponent_Factory(t) { return new (t || RunDistanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
RunDistanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RunDistanceComponent, selectors: [["app-run-distance"]], decls: 87, vars: 3, consts: [[1, "slider"], [1, "slider-container"], ["class", "slide", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], ["id", "features", 1, "section"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "mb-5"], [1, "small-title"], [1, "row", "align-items-center", "pt-4"], [1, "col-md-6", "ms-auto"], [1, "mt-4", "mt-md-auto"], [1, "d-flex", "align-items-center", "mb-2"], [1, "features-number", "fw-semibold", "display-4", "me-3"], [1, "mb-0"], [1, "text-muted"], [1, "col-md-6", "col-sm-8", "scroll-animation"], ["src", "assets/images/crypto/features-img/challenges/run/running1.gif", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "row", "align-items-center", "mt-5", "pt-md-5"], [1, "col-md-6", "col-sm-8", "ms-md-auto", "scroll-animation"], [1, "mt-4", "me-md-0"], ["src", "assets/images/crypto/features-img/challenges/run/running2.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "col-md-6", "scroll-animation"], [1, "mt-4", "mt-md-0"], [1, "card"], [1, "card-header", "bg-transparent", "border-bottom"], [1, "d-flex", "align-items-center", "sec-1-heading"], [1, "mb-0", "chRuleHead"], [1, "card-body", "c-rule"], [1, "card-blockquote", "mb-0"], [1, "chRuleDesc"], ["id", "medals-and-tshirts", 1, "section", "scroll-animation"], [1, "col-lg-12", "scroll-animation"], [3, "images"], ["id", "faq", 1, "section", "scroll-animation"], [1, "accordion-container"], ["class", "accordion-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "slide", 3, "ngStyle"], [1, "overlay"], [1, "slide-content"], [1, "fw-semibold", "mb-3", "hero-title", 2, "color", "#c0c0c0"], [1, "font-size-14", 2, "color", "#c0c0c0"], [1, "button-items", "mt-4"], ["href", "javascript: void(0);", "routerLink", "/shop/product-detail/2", 1, "btn", "btn-primary"], [1, "accordion-item", 3, "click"], [1, "accordion-header"], [2, "color", "#999"], [1, "accordion-content"], [3, "innerHTML"]], template: function RunDistanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RunDistanceComponent_div_2_Template, 10, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Join Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Embark on a fun cycling trip or elevate your experience by taking on a running challenge.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Running Challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Overall, Run Challenges offer participants a structured way to improve fitness levels, achieve personal goals, connect with others, and support meaningful causes. They cater to a wide range of abilities and motivations, making them accessible and beneficial for both recreational runners and competitive athletes alike. Benefits of Run Challenges: Physical Fitness: Running challenges promote cardiovascular health, improve endurance, and contribute to weight management. Mental Well-being: Regular running can reduce stress levels, improve mood, and enhance mental clarity and focus. Goal Achievement: Setting and achieving running goals provides a sense of accomplishment and boosts self-confidence. Community and Social Interaction: Participation in run challenges allows individuals to connect with other runners, fostering a sense of camaraderie and support. Charitable Contributions: Many run challenges support charitable causes, allowing participants to contribute positively to their communities or global initiatives. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16)(23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18)(26, "div", 19)(27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 22)(30, "div", 23)(31, "div", 12)(32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Challenge Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " In these Cycling and Running challenges, you set a target distance to achieve within a month. Successfully reaching your goal earns you a uniquely designed challenge medal along with exclusive rewards and goodies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 24)(39, "div", 25)(40, "div", 26)(41, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Challenge Rules:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 24)(44, "div", 28)(45, "blockquote", 29)(46, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " (1) Complete your chosen distance in the given duration of the event. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "blockquote", 29)(49, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " (2) Record your activity in any fitness app (STRAVA Recommended) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "blockquote", 29)(52, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " (3) You are free to choose the days, place (indoors or outdoors), and the distance you want to complete on any particular day. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "blockquote", 29)(55, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " (4) Participants has to ride a minimum distance of 5 KM for an activity to be considered for the challenge. Less than 5 KM won't be counted. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "blockquote", 29)(58, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " (5) In a day, a maximum of two rides are accepted. If you do more than 2, then only the first two will be counted towards the challenge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "blockquote", 29)(61, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " (6) If you have registered for the medal category then it is mandatory to complete up to 95% of your chosen target to be eligible for medal. If you fail to complete 95% of your selected target then you won't be receiving the finisher's medal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "section", 31)(64, "div", 4)(65, "div", 5)(66, "div", 6)(67, "div", 7)(68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Medals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Medals and T-shirts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "app-gallery-lightbox", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "section", 34)(75, "div", 4)(76, "div", 5)(77, "div", 6)(78, "div", 7)(79, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 32)(84, "div")(85, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, RunDistanceComponent_div_86_Template, 7, 8, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.medals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.accordionData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__.GalleryLightboxComponent], styles: [".section[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  border-left: 2px solid blue;\n  padding: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 575px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 1s ease, transform 0.8s ease;\n  z-index: 0;\n  \n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  animation: slideIn 0.8s ease forwards;\n  z-index: 99;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  \n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  text-align: left;\n  opacity: 0;\n  \n  transform: translateX(-50px);\n  \n  min-width: 50%;\n  max-width: 50%;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 12px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #c0c0c0;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 12px;\n  z-index: 2;\n  display: flex;\n  gap: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.5rem;\n  width: 30px;\n  transition: background 0.3s ease;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n\n\n@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n    \n  }\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n\n.scroll-animation[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n\n.scroll-animation.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n\n@media (max-width: 768px) {\n  .slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n.image-overlay-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  max-width: 100%;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 660px;\n  display: block;\n  border-radius: 0px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(1, 1, 1, 0.5);\n  \n  transition: opacity 0.5s ease;\n  border-radius: 8px;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  text-align: center;\n}\n\n.overlay-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n}\n\n.overlay-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#challenge[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n}\n\n.chRuleHead[_ngcontent-%COMP%] {\n  color: #9c9c9c;\n}\n\n.chRuleDesc[_ngcontent-%COMP%] {\n  color: #979797;\n  margin-bottom: 0;\n}\n\n.card-body[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  height: 530px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n  .lightbox-content-container img {\n  max-width: 520px !important;\n}\n\n.align-items-center[_ngcontent-%COMP%]:nth-of-type(3)   div[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  height: 530px;\n}\n\n.sec-1-heading[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border-bottom: 1px solid #e0e0e0;\n  margin-bottom: 10px;\n}\n\n.c-rule[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.accordion-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: #efefef;\n  color: white;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.accordion-header.active[_ngcontent-%COMP%] {\n  background-color: #dbdbdb;\n}\n\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.3s ease;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  padding: 0 20px;\n  background: #f9f9f9;\n  font-size: 16px;\n  transition: max-height 0.3s ease, padding 0.3s ease;\n}\n\n.accordion-content.show[_ngcontent-%COMP%] {\n  max-height: 270px;\n  padding: 15px 20px;\n}\n\n.accordion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media (max-width: 480px) {\n  .slider-container[_ngcontent-%COMP%] {\n    height: 415px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bi1kaXN0YW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUU7RUFDRSwyQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtFQUNBLFVBQUE7RUFhQSxtQkFBQTtBQVhOOztBQUFNO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFFUjs7QUFBUTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtBQUVWOztBQUlNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFGUjs7QUFNTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUVBLDhCQUFBO0VBQ0Esa0JBQUE7QUFOUjs7QUFRUTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBTlY7O0FBU1E7RUFDRSxpQkFBQTtBQVBWOztBQVlJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQVZOOztBQVlNO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQVZSOztBQVlRO0VBQ0UsOEJBQUE7QUFWVjs7QUFnQkUsNERBQUE7O0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtJQUNBLHlCQUFBO0VBYko7RUFnQkU7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7SUFDQSxxQkFBQTtFQWRKO0FBQ0Y7O0FBa0JFO0VBQ0UsV0FBQTtBQWhCSjs7QUF1QkU7RUFDRSxVQUFBO0VBRUEsMERBQUE7QUFyQko7O0FBeUJFO0VBQ0UsVUFBQTtBQXRCSjs7QUEwQkU7RUFDRSxZQUFBO0FBdkJKOztBQTJCRTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGVBQUE7RUF4Qko7QUFDRjs7QUFrQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFoQ0o7O0FBbUNFO0VBQ0UsV0FBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBakNKOztBQW9DRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLGtCQUFBO0FBbENKOztBQXFDRTtFQUNFLFVBQUE7QUFsQ0o7O0FBcUNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUVBLGtCQUFBO0FBbkNKOztBQXVDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXBDSjs7QUF1Q0U7RUFFRSxTQUFBO0VBQ0EsZ0JBQUE7QUFyQ0o7O0FBd0NFO0VBQ0UsZ0JBQUE7QUFyQ0o7O0FBNENFO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0FBekNKOztBQTRDRTtFQUNFLGNBQUE7QUF6Q0o7O0FBNENFO0VBQ0UsY0FBQTtFQUVBLGdCQUFBO0FBMUNKOztBQTZDRTtFQUNFLGlCQUFBO0FBMUNKOztBQTZDRTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBMUNKOztBQTZDRTtFQUNFLDJCQUFBO0FBMUNKOztBQTZDRTtFQUNFLGFBQUE7QUExQ0o7O0FBNkNFO0VBQ0UsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBMUNKOztBQThDRTtFQUNFLGVBQUE7QUEzQ0o7O0FBK0NFO0VBQ0Usa0JBQUE7QUE1Q0o7O0FBa0RFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBL0NKOztBQWtERTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUEvQ0o7O0FBa0RFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUEvQ0o7O0FBa0RFO0VBQ0UseUJBQUE7QUEvQ0o7O0FBa0RFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUEvQ0o7O0FBa0RFO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0FBL0NKOztBQWtERTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtREFBQTtBQS9DSjs7QUFrREU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBL0NKOztBQWtERTtFQUNFLFNBQUE7QUEvQ0o7O0FBbURFO0VBQ0U7SUFDSSxhQUFBO0VBaEROO0FBQ0YiLCJmaWxlIjoicnVuLWRpc3RhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1iLTUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibHVlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NzVweDtcclxuICBcclxuICAgIC5zbGlkZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgdHJhbnNmb3JtIDAuOHMgZWFzZTtcclxuICAgICAgei1pbmRleDogMDtcclxuICBcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICBcclxuICAgICAgICAuc2xpZGUtY29udGVudCB7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNsaWRlSW4gMC44cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICAgIC8qIE92ZXJsYXkgZWZmZWN0ICovXHJcbiAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAvKiBBZGp1c3Qgb3BhY2l0eSBhbmQgY29sb3IgaGVyZSAqL1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICAgICAgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgLy8gbGVmdDogMjBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLyogSW5pdGlhbCBvcGFjaXR5IGZvciBzbW9vdGggZmFkZS1pbiAqL1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XHJcbiAgICAgICAgLyogSW5pdGlhbCBwb3NpdGlvbiBvZmYgdGhlIHNjcmVlbiAqL1xyXG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjYzBjMGMwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNsaWRlci1jb250cm9scyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA0NHB4O1xyXG4gICAgICByaWdodDogMTJweDtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gIFxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBLZXlmcmFtZSBhbmltYXRpb24gZm9yIHNsaWRpbmcgaW4gY29udGVudCBmcm9tIHRoZSBsZWZ0ICovXHJcbiAgQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuICAgICAgLyogU3RhcnQgb2ZmIHRoZSBzY3JlZW4gKi9cclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIC8qIFNsaWRlIGludG8gcGxhY2UgKi9cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmN1cnJlbmN5LXByaWNlIHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvL3Njcm9sbFxyXG4gIC8vc2Nyb2xsIGFuaW1hdGlvblxyXG4gIC5zY3JvbGwtYW5pbWF0aW9uIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjZzIGVhc2Utb3V0O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuc2Nyb2xsLWFuaW1hdGlvbi5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXJyZW5jeS1wcmljZSB7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNsaWRlci1jb250YWluZXIgLnNsaWRlIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vY2hhbGxlbmdlIHJ1bGVcclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1vdmVybGF5LWNvbnRhaW5lciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA2NjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDEsIDAuNSk7XHJcbiAgICAvKiBTZW1pLXRyYW5zcGFyZW50IGJsYWNrIG92ZXJsYXkgKi9cclxuICBcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCBoMiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheS1jb250ZW50IHAge1xyXG4gICAgLy8gZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLy8gLmNoYWxsZW5nZS1yb3d7XHJcbiAgLy8gICAvLyBtYXJnaW46IDAgNTBweDtcclxuICAvLyB9XHJcbiAgXHJcbiAgI2NoYWxsZW5nZSAuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNoUnVsZUhlYWQge1xyXG4gICAgY29sb3I6ICM5YzljOWM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaFJ1bGVEZXNjIHtcclxuICAgIGNvbG9yOiAjOTc5Nzk3O1xyXG4gICAgLy8gZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWJvZHksICAuY2FyZC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB9XHJcblxyXG4gIC5pbWctZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDUzMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLmxpZ2h0Ym94LWNvbnRlbnQtY29udGFpbmVyIGltZ3tcclxuICAgIG1heC13aWR0aDogNTIwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hbGlnbi1pdGVtcy1jZW50ZXI6bnRoLW9mLXR5cGUoMykgIGRpdjpudGgtY2hpbGQoMikgZGl2IC5pbWctZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDUzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlYy0xLWhlYWRpbmd7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG5cclxuICAuYy1ydWxlIGJsb2NrcXVvdGV7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbiAgXHJcbiAgLmNhcmR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8vLy8vQWNjb3JkaW9uIFxyXG4gIC8vLyBcclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIgaSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRlbnQge1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2UsIHBhZGRpbmcgMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRlbnQuc2hvdyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNzBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250ZW50IHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAvLyoqKioqKioqKmdsb2JhbCoqKioqKioqKioqKioqKioqLy9cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5zbGlkZXItY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQxNXB4O1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 60343:
/*!*******************************************************!*\
  !*** ./src/app/site/website/terms/terms.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsComponent": () => (/* binding */ TermsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


const _c0 = function (a0) { return { "background-image": a0 }; };
function TermsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13)(3, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r2 === ctx_r0.currentSlideIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "url(" + slide_r1.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r1.description, " ");
} }
class TermsComponent {
    constructor() {
        this.currentSlideIndex = 0;
        //Banner top
        this.slides = [
            {
                image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
                title: 'What we do',
                description: `
      We are dedicated to empowering individuals to prioritize their health and well-being. 
      Our challenges motivate participants to set and achieve goals that lead to lasting wellness. 
      By fostering commitment and perseverance, we help build habits that support long-term health. 
      
      `
            },
        ];
    }
    ngOnInit() {
    }
}
TermsComponent.ɵfac = function TermsComponent_Factory(t) { return new (t || TermsComponent)(); };
TermsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsComponent, selectors: [["app-terms"]], decls: 112, vars: 1, consts: [[1, "slider"], [1, "slider-container"], ["class", "slide", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], ["id", "our-story", 1, "section"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "mb-5"], [1, "small-title"], [1, "viewAllHallOfFame"], [1, "col-lg-12", "story-desc"], [1, "slide", 3, "ngStyle"], [1, "overlay"], [1, "slide-content"], [1, "fw-semibold", "mb-3", "hero-title"], [1, "font-size-14", 2, "color", "#c0c0c0"]], template: function TermsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TermsComponent_div_2_Template, 7, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ipower Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Virtual Challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div")(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Welcome to Ipower! By accessing or using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully. If you do not agree with any part of these terms, you should not use our website or services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "1. Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Ipower operates this website and provides services through it. References to \"we,\" \"us,\" or \"our\" are to Ipower. By using our website or making a purchase, you agree to these Terms of Service, along with any additional terms and policies referenced or linked herein. These Terms apply to all users, including browsers, vendors, customers, and contributors. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "2. Online Store Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " By agreeing to these Terms, you confirm that you are at least of legal age in your jurisdiction or have consent from a guardian to use our site. You agree not to use our products or services for unlawful purposes and to avoid transmitting harmful code. Violations may result in immediate termination of access. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "3. General Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " We reserve the right to refuse service to anyone at any time for any reason. You acknowledge that your content may be transferred unencrypted, though credit card information is always encrypted. Reproducing or exploiting any part of our service without permission is prohibited. Headings in this agreement are for convenience and do not limit the terms. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "4. Accuracy, Completeness, and Timeliness of Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " We strive for accuracy but are not responsible for inaccuracies or incomplete information. Our site may include historical information, which is not current. You should monitor changes and consult other sources for up-to-date information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "5. Modifications to the Service and Prices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Prices and services are subject to change without notice. We may modify or discontinue any part of our service without liability. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "6. Products and Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Certain products or services may only be available online with limited quantities and specific return policies. We aim to accurately display our products but cannot guarantee color accuracy. We may limit sales and discontinue products at our discretion. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "7. Accuracy of Billing and Account Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " We reserve the right to refuse or cancel orders at our discretion. Ensure your account information is accurate and up-to-date for smooth transactions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "8. Optional Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " We may provide access to third-party tools which we do not control or endorse. Use these tools at your own risk and review the terms of the third-party providers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "9. Third-Party Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Our site may include links to third-party websites. We are not responsible for their content or practices. Review third-party policies before engaging in transactions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "10. User Comments and Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " By submitting comments or suggestions, you grant us the right to use them without restriction. We are not obligated to keep comments confidential or to compensate for them. We are not responsible for the content or accuracy of user comments. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "11. Personal Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Your personal information is governed by our Privacy Policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "12. Errors, Inaccuracies, and Omissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " We may correct errors or update information without notice. We do not commit to updating all content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "13. Prohibited Uses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " You may not use our site for illegal purposes or to infringe on intellectual property rights. Unauthorized use, including the spread of malware or spam, is prohibited. We may terminate your access for violations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "14. Disclaimer of Warranties; Limitation of Liability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Our services are provided \u201Cas is\u201D without warranties. We are not liable for any damages arising from your use of our services. Some jurisdictions do not allow limitations on liability, so these limits may not apply to you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "15. Indemnification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " You agree to indemnify Ipower and its affiliates against any claims arising from your breach of these Terms or violations of law. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "16. Severability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " If any part of these Terms is found to be unenforceable, the remaining provisions will still apply. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "17. Termination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " We may terminate this agreement if you fail to comply with these Terms. Termination does not affect obligations incurred prior to termination. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "18. Entire Agreement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " 18. Entire Agreement These Terms and any related policies constitute the entire agreement between you and Ipower, superseding any prior agreements. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "19. Governing Law");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " These Terms are governed by the laws of India. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "20. Changes to Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " We may update these Terms periodically. Continued use of our website or services constitutes acceptance of any changes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "21. Contact Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " For questions regarding these Terms of Service, please contact us at: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Ipower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p")(105, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " ipower@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " M3M International Financial Centre, Golf Course Ext Rd, Badshahpur, Sector 66, Gurugram, Haryana 122002 Phone: 8076388960 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".section[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  border-left: 2px solid blue;\n  padding: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 575px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 1s ease, transform 0.8s ease;\n  z-index: 0;\n  \n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  animation: slideIn 0.8s ease forwards;\n  z-index: 99;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  \n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  text-align: left;\n  opacity: 0;\n  \n  transform: translateX(-50px);\n  \n  min-width: 50%;\n  max-width: 50%;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 12px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #c0c0c0;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 12px;\n  z-index: 2;\n  display: flex;\n  gap: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.5rem;\n  width: 30px;\n  transition: background 0.3s ease;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n\n\n@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n    \n  }\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n\n.scroll-animation[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n\n.scroll-animation.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n\n@media (max-width: 768px) {\n  .slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n.image-overlay-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  max-width: 100%;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 660px;\n  display: block;\n  border-radius: 0px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(1, 1, 1, 0.5);\n  \n  transition: opacity 0.5s ease;\n  border-radius: 8px;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  text-align: center;\n}\n\n.overlay-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n}\n\n.overlay-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#challenge[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n}\n\n.chRuleHead[_ngcontent-%COMP%] {\n  color: #d1d1d1;\n}\n\n.chRuleDesc[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n  font-style: italic;\n}\n\n.row.challenge-row[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n\n\n.parallax[_ngcontent-%COMP%] {\n  background-image: url(\"https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png\");\n  \n  margin-bottom: 30px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.paraContent[_ngcontent-%COMP%] {\n  background-color: red;\n  position: absolute;\n  top: 0;\n  height: 100vh;\n}\n\n.challenge-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-height: 220px;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #515151 !important;\n}\n\n.viewAllHallOfFame[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n#hall-of-fame[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div.row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto !important;\n  width: inherit;\n}\n\n.accordion-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: #efefef;\n  color: white;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.accordion-header.active[_ngcontent-%COMP%] {\n  background-color: #dbdbdb;\n}\n\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.3s ease;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  padding: 0 20px;\n  background: #f9f9f9;\n  font-size: 16px;\n  transition: max-height 0.3s ease, padding 0.3s ease;\n}\n\n.accordion-content.show[_ngcontent-%COMP%] {\n  max-height: 270px;\n  padding: 15px 20px;\n}\n\n.accordion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.story-desc[_ngcontent-%COMP%] {\n  border: 1px solid #999;\n  padding: 20px;\n}\n\n@media (max-width: 480px) {\n  .slider-container[_ngcontent-%COMP%] {\n    height: 415px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGdEQUFBO0VBQ0EsVUFBQTtFQWFBLG1CQUFBO0FBWE47O0FBQU07RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQUVSOztBQUFRO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0FBRVY7O0FBSU07RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQUZSOztBQU1NO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBRUEsOEJBQUE7RUFDQSxrQkFBQTtBQU5SOztBQVFRO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFOVjs7QUFTUTtFQUNFLGlCQUFBO0FBUFY7O0FBWUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBVk47O0FBWU07RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBVlI7O0FBWVE7RUFDRSw4QkFBQTtBQVZWOztBQWdCRSw0REFBQTs7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0lBQ0EseUJBQUE7RUFiSjtFQWdCRTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtJQUNBLHFCQUFBO0VBZEo7QUFDRjs7QUFrQkU7RUFDRSxXQUFBO0FBaEJKOztBQXVCRTtFQUNFLFVBQUE7RUFFQSwwREFBQTtBQXJCSjs7QUF5QkU7RUFDRSxVQUFBO0FBdEJKOztBQTBCRTtFQUNFLFlBQUE7QUF2Qko7O0FBMkJFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQXhCSjtBQUNGOztBQWtDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQWhDSjs7QUFtQ0U7RUFDRSxXQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFqQ0o7O0FBb0NFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0Esa0JBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UsVUFBQTtBQWxDSjs7QUFxQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBRUEsa0JBQUE7QUFuQ0o7O0FBdUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBcENKOztBQXVDRTtFQUVFLFNBQUE7RUFDQSxnQkFBQTtBQXJDSjs7QUF3Q0U7RUFDRSxnQkFBQTtBQXJDSjs7QUE0Q0U7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7QUF6Q0o7O0FBNENFO0VBQ0UsY0FBQTtBQXpDSjs7QUE0Q0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUF6Q0o7O0FBdURFO0VBQ0UsYUFBQTtBQXBESjs7QUF1REUsMENBQUE7O0FBQ0E7RUFDRSwwR0FBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQXBESjs7QUF1REU7RUFDRSxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUFyREo7O0FBeURFO0VBQ0UsaUJBQUE7QUF0REo7O0FBMERFO0VBQ0UsMkNBQUE7QUF2REo7O0FBMERFO0VBQ0UscUJBQUE7QUF2REo7O0FBMERFO0VBQ0UsWUFBQTtBQXZESjs7QUEwREU7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUF2REo7O0FBZ0VFO0VBQ0UsV0FBQTtFQUlBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBaEVKOztBQW1FRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFoRUo7O0FBbUVFO0VBQ0UseUJBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFoRUo7O0FBbUVFO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0FBaEVKOztBQW1FRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtREFBQTtBQWhFSjs7QUFtRUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBaEVKOztBQW1FRTtFQUNFLFNBQUE7QUFoRUo7O0FBb0VFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FBakVKOztBQXFFQTtFQUNFO0lBQ0ksYUFBQTtFQWxFSjtBQUNGIiwiZmlsZSI6InRlcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1iLTUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibHVlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NzVweDtcclxuICBcclxuICAgIC5zbGlkZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgdHJhbnNmb3JtIDAuOHMgZWFzZTtcclxuICAgICAgei1pbmRleDogMDtcclxuICBcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICBcclxuICAgICAgICAuc2xpZGUtY29udGVudCB7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNsaWRlSW4gMC44cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICAgIC8qIE92ZXJsYXkgZWZmZWN0ICovXHJcbiAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAvKiBBZGp1c3Qgb3BhY2l0eSBhbmQgY29sb3IgaGVyZSAqL1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICAgICAgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgLy8gbGVmdDogMjBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLyogSW5pdGlhbCBvcGFjaXR5IGZvciBzbW9vdGggZmFkZS1pbiAqL1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XHJcbiAgICAgICAgLyogSW5pdGlhbCBwb3NpdGlvbiBvZmYgdGhlIHNjcmVlbiAqL1xyXG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjYzBjMGMwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNsaWRlci1jb250cm9scyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA0NHB4O1xyXG4gICAgICByaWdodDogMTJweDtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gIFxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBLZXlmcmFtZSBhbmltYXRpb24gZm9yIHNsaWRpbmcgaW4gY29udGVudCBmcm9tIHRoZSBsZWZ0ICovXHJcbiAgQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuICAgICAgLyogU3RhcnQgb2ZmIHRoZSBzY3JlZW4gKi9cclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIC8qIFNsaWRlIGludG8gcGxhY2UgKi9cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmN1cnJlbmN5LXByaWNlIHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvL3Njcm9sbFxyXG4gIC8vc2Nyb2xsIGFuaW1hdGlvblxyXG4gIC5zY3JvbGwtYW5pbWF0aW9uIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjZzIGVhc2Utb3V0O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuc2Nyb2xsLWFuaW1hdGlvbi5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXJyZW5jeS1wcmljZSB7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNsaWRlci1jb250YWluZXIgLnNsaWRlIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vY2hhbGxlbmdlIHJ1bGVcclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1vdmVybGF5LWNvbnRhaW5lciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA2NjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDEsIDAuNSk7XHJcbiAgICAvKiBTZW1pLXRyYW5zcGFyZW50IGJsYWNrIG92ZXJsYXkgKi9cclxuICBcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCBoMiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheS1jb250ZW50IHAge1xyXG4gICAgLy8gZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLy8gLmNoYWxsZW5nZS1yb3d7XHJcbiAgLy8gICAvLyBtYXJnaW46IDAgNTBweDtcclxuICAvLyB9XHJcbiAgXHJcbiAgI2NoYWxsZW5nZSAuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNoUnVsZUhlYWQge1xyXG4gICAgY29sb3I6ICNkMWQxZDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaFJ1bGVEZXNjIHtcclxuICAgIGNvbG9yOiAjYzRjNGM0O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICAvLy8vcGFyYWxsYXggZWZmZWN0XHJcbiAgLy8vIFxyXG4gIC8vLyBcclxuICAvLy8gXHJcbiAgXHJcbiAgLnJvdy5jaGFsbGVuZ2Utcm93IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGNvbnRhaW5lZCBwYXJhbGxheCBwZXJzcGVjdGl2ZSBtb2R1bGUgKi9cclxuICAucGFyYWxsYXgge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9wYW5kZXlqaTk4LmdpdGh1Yi5pby9pUG93ZXIvc3RhdGljL21lZGlhL01haW5JbWcuMjZhMzFkOWM1NzY1ZjA4ZDhjMDcucG5nXCIpO1xyXG4gICAgLyogRnVsbCB2aWV3cG9ydCBoZWlnaHQgZm9yIGxhcmdlciBzY3JlZW5zICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICAucGFyYUNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgLy8gZm9udC1zaXplOiAzNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNoYWxsZW5nZS1yb3cgLmNhcmQge1xyXG4gICAgbWluLWhlaWdodDogMjIwcHhcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmJvcmRlci1ib3R0b20ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnZpZXdBbGxIYWxsT2ZGYW1le1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAjaGFsbC1vZi1mYW1lID4gZGl2ID4gZGl2LnJvdyA+IGRpdiA+IGRpdiA+IGEgPiBzcGFuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1nIHtcclxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vLy8vQWNjb3JkaW9uIFxyXG4gIC8vLyBcclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1heC13aWR0aDogODAwcHg7XHJcbiAgIFxyXG4gICAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1pdGVtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWhlYWRlciBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyIGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLCBwYWRkaW5nIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250ZW50LnNob3cge1xyXG4gICAgbWF4LWhlaWdodDogMjcwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24tY29udGVudCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcblxyXG4gIC5zdG9yeS1kZXNjIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vLyoqKioqKioqKmdsb2JhbCoqKioqKioqKioqKioqKioqLy9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDQxNXB4O1xyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 15010:
/*!***********************************************************************!*\
  !*** ./src/app/site/website/walk-distance/walk-distance.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalkDistanceComponent": () => (/* binding */ WalkDistanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gallery-lightbox/gallery-lightbox.component */ 46081);





const _c0 = function (a0) { return { "background-image": a0 }; };
function WalkDistanceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 41)(3, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 44)(8, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Register Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r3 === ctx_r0.currentSlideIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, "url(" + slide_r2.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", slide_r2.description, " ");
} }
function WalkDistanceComponent_div_136_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WalkDistanceComponent_div_136_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const i_r5 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.toggleAccordion(i_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.selectedIndex === i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1.selectedIndex === i_r5 ? "bx bx-chevron-up" : "bx bx-chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx_r1.selectedIndex === i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r4.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class WalkDistanceComponent {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.lastScrollTop = 0;
        this.selectedIndex = null;
        this.partnerLogosCarousel = [];
        this.partnerReviewsCarousel = [];
        this.currentSection = 'home';
        this.medals = [
            { url: 'assets/images/crypto/features-img/challenges/t1.jpg', caption: 'White - Round Neck' },
            { url: 'assets/images/crypto/features-img/challenges/t1.jpg', caption: 'White - Round Neck' },
        ];
        this.currentSlideIndex = 0;
        this.autoplayDuration = 5000; // Duration in milliseconds
        this.isTransitioning = false; // To prevent button spamming
        //Banner top
        this.slides = [
            {
                image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
                title: 'Walk Challenge',
                description: `
     A Walk Challenge encourages participants to stay active by setting and achieving walking 
     goals over a defined period. Whether it's daily steps or total distance, this challenge promotes 
     consistent movement, making it perfect for all fitness levels. It’s a simple yet effective way to 
     improve health while enjoying the outdoors.
      `
            },
        ];
        this.accordionData = [
            { title: 'How many run/walk are acceptable in a day?', content: 'A maximum of 2 run/walk are acceptable in a day. More than 2 won\'t be counted.' },
            { title: 'Is it necessary to perform the activity daily?', content: 'No, it is not necessary to perform the activity every day. You can complete the challenge at your own pace. You just need to finish your chosen distance in the given duration of the event.' },
            {
                title: 'How to Upload the Activity Data?',
                content: `
      (1) Data of STRAVA users will be taken automatically from STRAVA app once they join the challenge STRAVA group. (Link to join the group will be shared before the challenge starts). <br>
      (2) For those who are not using Strava, they can send the activities screenshot via email at "support@pedalspower.com" once every 5 days.`
            },
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
    }
    ngOnInit() {
    }
    toggleAccordion(index) {
        this.selectedIndex = this.selectedIndex === index ? null : index;
    }
}
WalkDistanceComponent.ɵfac = function WalkDistanceComponent_Factory(t) { return new (t || WalkDistanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
WalkDistanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WalkDistanceComponent, selectors: [["app-walk-distance"]], decls: 137, vars: 3, consts: [[1, "slider"], [1, "slider-container"], ["class", "slide", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], ["id", "features", 1, "section"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "mb-5"], [1, "small-title"], [1, "row", "align-items-center", "pt-4"], [1, "col-md-6", "col-sm-8"], ["src", "assets/images/crypto/features-img/challenges/walk/walk1.gif", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "col-md-6", "ms-auto"], [1, "mt-4", "mt-md-auto", "scroll-animation"], [1, "d-flex", "align-items-center", "mb-2"], [1, "features-number", "fw-semibold", "display-4", "me-3"], [1, "mb-0"], [1, "text-muted"], [1, "card"], [1, "card-header", "bg-transparent", "border-bottom"], [1, "d-flex", "align-items-center", "sec-1-heading"], [1, "mb-0", "chRuleHead"], [1, "d-flex", "align-items-center"], [1, "card-body"], [1, "card-blockquote", "mb-0"], [1, "chRuleDesc"], [1, "row", "align-items-center", "mt-5", "pt-md-5"], [1, "col-md-6", "scroll-animation"], [1, "mt-4", "mt-md-0"], [1, "card-body", "c-rule"], [1, "col-md-6", "col-sm-8", "ms-md-auto", "scroll-animation"], [1, "mt-4", "me-md-0"], ["src", "assets/images/crypto/features-img/challenges/walk/walk2.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["id", "medals-and-tshirts", 1, "section", "scroll-animation"], [1, "col-lg-12", "scroll-animation"], [3, "images"], ["id", "faq", 1, "section", "scroll-animation"], [1, "accordion-container"], ["class", "accordion-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "slide", 3, "ngStyle"], [1, "overlay"], [1, "slide-content"], [1, "fw-semibold", "mb-3", "hero-title", 2, "color", "#c0c0c0"], [1, "font-size-14", 2, "color", "#c0c0c0"], [1, "button-items", "mt-4"], ["href", "javascript: void(0);", "routerLink", "/shop/product-detail/3", 1, "btn", "btn-primary"], [1, "accordion-item", 3, "click"], [1, "accordion-header"], [2, "color", "#999"], [1, "accordion-content"], [3, "innerHTML"]], template: function WalkDistanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WalkDistanceComponent_div_2_Template, 10, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Join Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Embark on a fun elevate your experience by taking on a walking challenge.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Walk Challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Overall, Walk Challenges offer participants a structured way to improve fitness levels, achieve personal goals, connect with others, and support meaningful causes. They cater to a wide range of abilities and motivations, making them accessible and beneficial for individuals of all ages and fitness levels. Benefits of Walk Challenges Physical Fitness: Walking challenges promote cardiovascular health, improve endurance, and contribute to weight management. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18)(26, "div", 19)(27, "div", 20)(28, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Benefits of Walk Challenges:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "div", 22)(33, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Cardiovascular Health:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 23)(36, "blockquote", 24)(37, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Walking strengthens the heart and improves blood circulation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 18)(40, "div", 19)(41, "div", 22)(42, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Weight Management:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 23)(45, "blockquote", 24)(46, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Regular walking helps burn calories, aiding in weight loss and maintenance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 18)(49, "div", 19)(50, "div", 22)(51, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Muscle Strength:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 23)(54, "blockquote", 24)(55, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Walking tones and strengthens various muscle groups, particularly in the legs and core. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 18)(58, "div", 19)(59, "div", 22)(60, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Bone Health:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 23)(63, "blockquote", 24)(64, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Walking increases bone density and reduces the risk of osteoporosis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 18)(67, "div", 19)(68, "div", 22)(69, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Joint Health:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 23)(72, "blockquote", 24)(73, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " As a low-impact activity, walking enhances joint mobility and reduces the risk of arthritis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 26)(76, "div", 27)(77, "div", 28)(78, "div", 14)(79, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Challenge Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " In these Cycling and Running challenges, you set a target distance to achieve within a month. Successfully reaching your goal earns you a uniquely designed challenge medal along with exclusive rewards and goodies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 18)(86, "div", 19)(87, "div", 20)(88, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Challenge Rules:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 18)(91, "div", 29)(92, "blockquote", 24)(93, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " (1) Complete your chosen distance in the given duration of the event. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "blockquote", 24)(96, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " (2) Record your activity in any fitness app (STRAVA Recommended) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "blockquote", 24)(99, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " (3) You are free to choose the days, place (indoors or outdoors), and the distance you want to complete on any particular day. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "blockquote", 24)(102, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " (4) Participants has to ride a minimum distance of 5 KM for an activity to be considered for the challenge. Less than 5 KM won't be counted. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "blockquote", 24)(105, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " (5) In a day, a maximum of two rides are accepted. If you do more than 2, then only the first two will be counted towards the challenge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "blockquote", 24)(108, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " (6) If you have registered for the medal category then it is mandatory to complete up to 95% of your chosen target to be eligible for medal. If you fail to complete 95% of your selected target then you won't be receiving the finisher's medal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 30)(111, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "section", 33)(114, "div", 4)(115, "div", 5)(116, "div", 6)(117, "div", 7)(118, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Medals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Medals and T-shirts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "app-gallery-lightbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "section", 36)(125, "div", 4)(126, "div", 5)(127, "div", 6)(128, "div", 7)(129, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 34)(134, "div")(135, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, WalkDistanceComponent_div_136_Template, 7, 8, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.medals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.accordionData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_0__.GalleryLightboxComponent], styles: [".section[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  border-left: 2px solid blue;\n  padding: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 575px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 1s ease, transform 0.8s ease;\n  z-index: 0;\n  \n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  animation: slideIn 0.8s ease forwards;\n  z-index: 99;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  \n  z-index: 1;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  text-align: left;\n  opacity: 0;\n  \n  transform: translateX(-50px);\n  \n  min-width: 50%;\n  max-width: 50%;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 12px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #c0c0c0;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 12px;\n  z-index: 2;\n  display: flex;\n  gap: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.5rem;\n  width: 30px;\n  transition: background 0.3s ease;\n}\n\n.slider-container[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n\n\n@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n    \n  }\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n\n.scroll-animation[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n\n.scroll-animation.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.currency-price[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n\n@media (max-width: 768px) {\n  .slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n@media (max-width: 480px) {\n  .slider-container[_ngcontent-%COMP%] {\n    height: 415px;\n  }\n}\n\n.image-overlay-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  max-width: 100%;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 660px;\n  display: block;\n  border-radius: 0px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(1, 1, 1, 0.5);\n  \n  transition: opacity 0.5s ease;\n  border-radius: 8px;\n}\n\n.image-overlay-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  text-align: center;\n}\n\n.overlay-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n}\n\n.overlay-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#challenge[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n}\n\n.chRuleHead[_ngcontent-%COMP%] {\n  color: #9c9c9c;\n}\n\n.chRuleDesc[_ngcontent-%COMP%] {\n  color: #979797;\n  margin-bottom: 0;\n}\n\n.card-body[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  height: 645px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n  .lightbox-content-container img {\n  max-width: 520px !important;\n}\n\n.align-items-center[_ngcontent-%COMP%]:nth-of-type(3)   div[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  height: 530px;\n}\n\n.sec-1-heading[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border-bottom: 1px solid #e0e0e0;\n  margin-bottom: 10px;\n}\n\n.c-rule[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.accordion-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: #efefef;\n  color: white;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.accordion-header.active[_ngcontent-%COMP%] {\n  background-color: #dbdbdb;\n}\n\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.3s ease;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  padding: 0 20px;\n  background: #f9f9f9;\n  font-size: 16px;\n  transition: max-height 0.3s ease, padding 0.3s ease;\n}\n\n.accordion-content.show[_ngcontent-%COMP%] {\n  max-height: 270px;\n  padding: 15px 20px;\n}\n\n.accordion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGstZGlzdGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUVFO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0RBQUE7RUFDQSxVQUFBO0VBYUEsbUJBQUE7QUFYTjs7QUFBTTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBRVI7O0FBQVE7RUFDRSxxQ0FBQTtFQUNBLFdBQUE7QUFFVjs7QUFJTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FBRlI7O0FBTU07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFFQSw4QkFBQTtFQUNBLGtCQUFBO0FBTlI7O0FBUVE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQU5WOztBQVNRO0VBQ0UsaUJBQUE7QUFQVjs7QUFZSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFWTjs7QUFZTTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUFWUjs7QUFZUTtFQUNFLDhCQUFBO0FBVlY7O0FBZ0JFLDREQUFBOztBQUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7SUFDQSx5QkFBQTtFQWJKO0VBZ0JFO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0lBQ0EscUJBQUE7RUFkSjtBQUNGOztBQWtCRTtFQUNFLFdBQUE7QUFoQko7O0FBdUJFO0VBQ0UsVUFBQTtFQUVBLDBEQUFBO0FBckJKOztBQXlCRTtFQUNFLFVBQUE7QUF0Qko7O0FBMEJFO0VBQ0UsWUFBQTtBQXZCSjs7QUEyQkU7RUFDRTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBeEJKO0FBQ0Y7O0FBNkJFO0VBQ0U7SUFDSSxhQUFBO0VBM0JOO0FBQ0Y7O0FBb0NFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBbENKOztBQXFDRTtFQUNFLFdBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQW5DSjs7QUFzQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtBQXBDSjs7QUF1Q0U7RUFDRSxVQUFBO0FBcENKOztBQXVDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtBQXJDSjs7QUF5Q0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUF0Q0o7O0FBeUNFO0VBRUUsU0FBQTtFQUNBLGdCQUFBO0FBdkNKOztBQTBDRTtFQUNFLGdCQUFBO0FBdkNKOztBQThDRTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtBQTNDSjs7QUE4Q0U7RUFDRSxjQUFBO0FBM0NKOztBQThDRTtFQUNFLGNBQUE7RUFFQSxnQkFBQTtBQTVDSjs7QUErQ0U7RUFDRSxpQkFBQTtBQTVDSjs7QUErQ0U7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQTVDSjs7QUErQ0U7RUFDRSwyQkFBQTtBQTVDSjs7QUErQ0U7RUFDRSxhQUFBO0FBNUNKOztBQStDRTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQTVDSjs7QUFnREU7RUFDRSxlQUFBO0FBN0NKOztBQWlERTtFQUNFLGtCQUFBO0FBOUNKOztBQW9ERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQWpESjs7QUFvREU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0FBakRKOztBQW9ERTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBakRKOztBQW9ERTtFQUNFLHlCQUFBO0FBakRKOztBQW9ERTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBakRKOztBQW9ERTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtBQWpESjs7QUFvREU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbURBQUE7QUFqREo7O0FBb0RFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQWpESjs7QUFvREU7RUFDRSxTQUFBO0FBakRKIiwiZmlsZSI6IndhbGstZGlzdGFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubWItNSB7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsdWU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU3NXB4O1xyXG4gIFxyXG4gICAgLnNsaWRlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLCB0cmFuc2Zvcm0gMC44cyBlYXNlO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG4gIFxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gIFxyXG4gICAgICAgIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjhzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICAgICAgLyogT3ZlcmxheSBlZmZlY3QgKi9cclxuICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIC8qIEFkanVzdCBvcGFjaXR5IGFuZCBjb2xvciBoZXJlICovXHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgICAuc2xpZGUtY29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAvLyBsZWZ0OiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAvKiBJbml0aWFsIG9wYWNpdHkgZm9yIHNtb290aCBmYWRlLWluICovXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuICAgICAgICAvKiBJbml0aWFsIHBvc2l0aW9uIG9mZiB0aGUgc2NyZWVuICovXHJcbiAgICAgICAgbWluLXdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIFxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgY29sb3I6ICNjMGMwYzA7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2xpZGVyLWNvbnRyb2xzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDQ0cHg7XHJcbiAgICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDEwcHg7XHJcbiAgXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEtleWZyYW1lIGFuaW1hdGlvbiBmb3Igc2xpZGluZyBpbiBjb250ZW50IGZyb20gdGhlIGxlZnQgKi9cclxuICBAa2V5ZnJhbWVzIHNsaWRlSW4ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gICAgICAvKiBTdGFydCBvZmYgdGhlIHNjcmVlbiAqL1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgLyogU2xpZGUgaW50byBwbGFjZSAqL1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAuY3VycmVuY3ktcHJpY2Uge1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vc2Nyb2xsXHJcbiAgLy9zY3JvbGwgYW5pbWF0aW9uXHJcbiAgLnNjcm9sbC1hbmltYXRpb24ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuNnMgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JvbGwtYW5pbWF0aW9uLnNob3cge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgXHJcbiAgLmN1cnJlbmN5LXByaWNlIHtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuc2xpZGVyLWNvbnRhaW5lciAuc2xpZGUgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIC8vKioqKioqKioqZ2xvYmFsKioqKioqKioqKioqKioqKiovL1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogNDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vY2hhbGxlbmdlIHJ1bGVcclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1vdmVybGF5LWNvbnRhaW5lciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA2NjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDEsIDAuNSk7XHJcbiAgICAvKiBTZW1pLXRyYW5zcGFyZW50IGJsYWNrIG92ZXJsYXkgKi9cclxuICBcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCBoMiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheS1jb250ZW50IHAge1xyXG4gICAgLy8gZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLy8gLmNoYWxsZW5nZS1yb3d7XHJcbiAgLy8gICAvLyBtYXJnaW46IDAgNTBweDtcclxuICAvLyB9XHJcbiAgXHJcbiAgI2NoYWxsZW5nZSAuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNoUnVsZUhlYWQge1xyXG4gICAgY29sb3I6ICM5YzljOWM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaFJ1bGVEZXNjIHtcclxuICAgIGNvbG9yOiAjOTc5Nzk3O1xyXG4gICAgLy8gZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWJvZHksICAuY2FyZC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB9XHJcblxyXG4gIC5pbWctZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDY0NXB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLmxpZ2h0Ym94LWNvbnRlbnQtY29udGFpbmVyIGltZ3tcclxuICAgIG1heC13aWR0aDogNTIwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hbGlnbi1pdGVtcy1jZW50ZXI6bnRoLW9mLXR5cGUoMykgIGRpdjpudGgtY2hpbGQoMikgZGl2IC5pbWctZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDUzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlYy0xLWhlYWRpbmd7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG5cclxuICAuYy1ydWxlIGJsb2NrcXVvdGV7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbiAgXHJcbiAgLmNhcmR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8vLy8vQWNjb3JkaW9uIFxyXG4gIC8vLyBcclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1oZWFkZXIgaSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRlbnQge1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2UsIHBhZGRpbmcgMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uLWNvbnRlbnQuc2hvdyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNzBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250ZW50IHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ 11129:
/*!********************************************************!*\
  !*** ./src/app/site/website/website-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsiteRoutingModule": () => (/* binding */ WebsiteRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _iday_independence_day_independence_day_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iday/independence-day/independence-day.component */ 66468);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 50850);
/* harmony import */ var _monthly_cycling_distance_cycling_distance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monthly/cycling-distance/cycling-distance.component */ 78242);
/* harmony import */ var _oneday_centuary_cycling_centuary_cycling_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oneday/centuary-cycling/centuary-cycling.component */ 99496);
/* harmony import */ var _gallery_hall_of_fame_hall_of_fame_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/hall-of-fame/hall-of-fame.component */ 94673);
/* harmony import */ var _gallery_cycling_trip_cycling_trip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery/cycling-trip/cycling-trip.component */ 47414);
/* harmony import */ var _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-story/our-story.component */ 9990);
/* harmony import */ var _run_distance_run_distance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./run-distance/run-distance.component */ 806);
/* harmony import */ var _walk_distance_walk_distance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./walk-distance/walk-distance.component */ 15010);
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ 66821);
/* harmony import */ var _refund_policy_refund_policy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./refund-policy/refund-policy.component */ 27472);
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./terms/terms.component */ 60343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);















const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
    },
    {
        path: 'challenges/iday/independence',
        component: _iday_independence_day_independence_day_component__WEBPACK_IMPORTED_MODULE_0__.IndependenceDayComponent
    },
    {
        path: 'shop',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ecommerce_ecommerce_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../pages/ecommerce/ecommerce.module */ 25634)).then(m => m.EcommerceModule)
    },
    {
        path: 'challenges/monthly/cycling-challenge',
        component: _monthly_cycling_distance_cycling_distance_component__WEBPACK_IMPORTED_MODULE_2__.CyclingDistanceComponent
    },
    {
        path: 'challenges/monthly/run-challenge',
        component: _run_distance_run_distance_component__WEBPACK_IMPORTED_MODULE_7__.RunDistanceComponent
    },
    {
        path: 'challenges/monthly/walk-challenge',
        component: _walk_distance_walk_distance_component__WEBPACK_IMPORTED_MODULE_8__.WalkDistanceComponent
    },
    {
        path: 'challenges/oneday/century-or-half-century',
        component: _oneday_centuary_cycling_centuary_cycling_component__WEBPACK_IMPORTED_MODULE_3__.CentuaryCyclingComponent
    },
    {
        path: 'gallery/hall-of-fame',
        component: _gallery_hall_of_fame_hall_of_fame_component__WEBPACK_IMPORTED_MODULE_4__.HallOfFameComponent
    },
    {
        path: 'gallery/cycling-trip',
        component: _gallery_cycling_trip_cycling_trip_component__WEBPACK_IMPORTED_MODULE_5__.CyclingTripComponent
    },
    {
        path: 'our-story',
        component: _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_6__.OurStoryComponent
    },
    {
        path: 'privacy-policy',
        component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_9__.PrivacyPolicyComponent
    },
    {
        path: 'refund-policy',
        component: _refund_policy_refund_policy_component__WEBPACK_IMPORTED_MODULE_10__.RefundPolicyComponent
    },
    {
        path: 'terms',
        component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_11__.TermsComponent
    },
];
class WebsiteRoutingModule {
}
WebsiteRoutingModule.ɵfac = function WebsiteRoutingModule_Factory(t) { return new (t || WebsiteRoutingModule)(); };
WebsiteRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: WebsiteRoutingModule });
WebsiteRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](WebsiteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 91260:
/*!************************************************!*\
  !*** ./src/app/site/website/website.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsiteModule": () => (/* binding */ WebsiteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _website_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website-routing.module */ 11129);
/* harmony import */ var _iday_independence_day_independence_day_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iday/independence-day/independence-day.component */ 66468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 50850);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-owl-carousel-o */ 37297);
/* harmony import */ var _monthly_run_walk_distance_run_walk_distance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monthly/run-walk-distance/run-walk-distance.component */ 32676);
/* harmony import */ var _oneday_centuary_cycling_centuary_cycling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oneday/centuary-cycling/centuary-cycling.component */ 99496);
/* harmony import */ var _gallery_hall_of_fame_hall_of_fame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery/hall-of-fame/hall-of-fame.component */ 94673);
/* harmony import */ var _gallery_cycling_trip_cycling_trip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/cycling-trip/cycling-trip.component */ 47414);
/* harmony import */ var _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./our-story/our-story.component */ 9990);
/* harmony import */ var _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery-lightbox/gallery-lightbox.component */ 46081);
/* harmony import */ var _run_distance_run_distance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./run-distance/run-distance.component */ 806);
/* harmony import */ var _walk_distance_walk_distance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./walk-distance/walk-distance.component */ 15010);
/* harmony import */ var _refund_policy_refund_policy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refund-policy/refund-policy.component */ 27472);
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ 66821);
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./terms/terms.component */ 60343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);


















class WebsiteModule {
}
WebsiteModule.ɵfac = function WebsiteModule_Factory(t) { return new (t || WebsiteModule)(); };
WebsiteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: WebsiteModule });
WebsiteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        _website_routing_module__WEBPACK_IMPORTED_MODULE_0__.WebsiteRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__.CarouselModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](WebsiteModule, { declarations: [_iday_independence_day_independence_day_component__WEBPACK_IMPORTED_MODULE_1__.IndependenceDayComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _monthly_run_walk_distance_run_walk_distance_component__WEBPACK_IMPORTED_MODULE_3__.RunWalkDistanceComponent,
        _oneday_centuary_cycling_centuary_cycling_component__WEBPACK_IMPORTED_MODULE_4__.CentuaryCyclingComponent, _gallery_hall_of_fame_hall_of_fame_component__WEBPACK_IMPORTED_MODULE_5__.HallOfFameComponent, _gallery_cycling_trip_cycling_trip_component__WEBPACK_IMPORTED_MODULE_6__.CyclingTripComponent, _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_7__.OurStoryComponent,
        _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_8__.GalleryLightboxComponent, _run_distance_run_distance_component__WEBPACK_IMPORTED_MODULE_9__.RunDistanceComponent, _walk_distance_walk_distance_component__WEBPACK_IMPORTED_MODULE_10__.WalkDistanceComponent,
        _refund_policy_refund_policy_component__WEBPACK_IMPORTED_MODULE_11__.RefundPolicyComponent, _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_12__.PrivacyPolicyComponent, _terms_terms_component__WEBPACK_IMPORTED_MODULE_13__.TermsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        _website_routing_module__WEBPACK_IMPORTED_MODULE_0__.WebsiteRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__.CarouselModule], exports: [_gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_8__.GalleryLightboxComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_site_site_module_ts.js.map
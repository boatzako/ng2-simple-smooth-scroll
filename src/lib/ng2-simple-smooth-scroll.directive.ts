import { Directive, Input, ElementRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SimpleSmoothScrollService } from './ng2-simple-smooth-scroll.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[SimpleSmoothScroll]'
})
export class SimpleSmoothScrollDirective {
  @Input() private container: HTMLElement;
  @Input() private scrollTo: string;
  @Input() private duration: number;
  @Input() private offset: number;
  @Input() private easing: 'linear' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic' | 'easeInQuart' | 'easeOutQuart' | 'easeInOutQuart' | 'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint';
  @Input() private showHash: boolean;

  constructor(
    private el: ElementRef,
    private router: Router,
    private smooth: SimpleSmoothScrollService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  @HostListener('click') onClick() {
    if (isPlatformBrowser(this.platformId)) {
      let container: HTMLElement = this.container || document.documentElement
      let eid = this.el.nativeElement.hash;
      if (eid) {
        if (this.showHash) {
          const href = this.el.nativeElement.href
          const dest = new URL(href)
          const loc = window.location
          if (dest.pathname == loc.pathname) {
            // Change URL hash without page jump
            history.pushState(null, null, href);
          }
        }
        eid = eid.replace('#', '');
      }
      let target = document.getElementById(eid) || document.getElementById(this.scrollTo);
      if (target)
        this.smooth.smoothScroll(target.offsetTop, { duration: this.duration, easing: this.easing, offset: this.offset }, container);
      return false;
    }
  }
}

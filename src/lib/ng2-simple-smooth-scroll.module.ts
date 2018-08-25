import { NgModule } from '@angular/core';
import { SimpleSmoothScrollService } from './ng2-simple-smooth-scroll.service';
import { SimpleSmoothScrollDirective } from './ng2-simple-smooth-scroll.directive';

@NgModule({
  declarations: [SimpleSmoothScrollDirective],
  providers: [SimpleSmoothScrollService],
  exports: [SimpleSmoothScrollDirective]
})
export class SimpleSmoothScrollModule { }

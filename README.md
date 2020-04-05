# ng2-simple-smooth-scroll

[![Weekly downloads](https://badgen.net/npm/dw/ng2-simple-smooth-scroll)](https://badgen.net/npm/dw/ng2-simple-smooth-scroll)
[![Total downloads](https://badgen.net/npm/dt/ng2-simple-smooth-scroll)](https://badgen.net/npm/dt/ng2-simple-smooth-scroll)
[![License](https://badgen.net/npm/license/ng2-simple-smooth-scroll)](https://badgen.net/npm/license/ng2-simple-smooth-scroll)
[![Minified](https://badgen.net/bundlephobia/min/ng2-simple-smooth-scroll)](https://badgen.net/bundlephobia/min/ng2-simple-smooth-scroll)


Smooth scroll for Angular9+. [Demo](https://stackblitz.com/edit/angular6-smooth-scroll-demo)

## Getting Started

You can install ng2-simple-smooth-scroll by using npm.

```
npm install ng2-simple-smooth-scroll --save
```
Once installed you need to import our main module:

This module provides one directive and one service.

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll'; // <-- add

@NgModule({
  imports: [
    BrowserModule, 
    SimpleSmoothScrollModule  // <-- add
  ],
  declarations: [ 
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

```


## Usage - Service

import service to component
```js
import { Component, OnInit } from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';

@Component({
  ...
})
export class AppComponent implements OnInit{

  constructor(private smooth: SimpleSmoothScrollService) { }

  ngOnInit() {
    this.smooth.smoothScrollToAnchor();
  }
  
  goTop(){
    this.smooth.smoothScrollToTop({ duration: 1000, easing: 'linear' });
  }
}
```
### Methods
#### smoothScrollToTop

**smoothScrollToTop(** *[SimpleSmoothScrollOption]* *[, HTMLElement]* **)**

Smooth scroll to top page. 

#### smoothScrollToAnchor

**smoothScrollToAnchor(** *[SimpleSmoothScrollOption]* *[, HTMLElement]* **)**

Smooth scroll to the anchor.

## ISimpleSmoothScrollOption
For set duration and easing function
```js
let option1 = { duration: 500 };
let option2 = { duration: 1000, easing: 'easeOutQuart'};
let option3 = { easing: 'linear'};

// this.smooth.smoothScrollToTop(option1);
// this.smooth.smoothScrollToAnchor(option2);
```

## Usage - Directive

**SimpleSmoothScroll**

Scroll the window to the specified element ID or hash when clicking the element.

```js
import { Component, OnInit } from '@angular/core';

@Component({  
  ...
  template: `
    <div id="div1">
      <a href="#div2" SimpleSmoothScroll [showHash]="true">Click!!</a>
    </div>
    <div id="div2" SimpleSmoothScroll [scrollTo]="'div1'" [duration]="500">
      <h1>Click me</h1>
    </div>
  `,
  ...
})
export class AppComponent{
	...
}

```

### Options
#### [scrollTo]
type: `string`
default: `null`

ID of the element in document.

#### [duration]
type: `number`
default: `800`

The duration of the smooth scroll, in milliseconds.

#### [easing]
type: `enum`
default: `easeInOutQuad`

The easing function to be used for this scroll.

**Easing functions** *from - <https://gist.github.com/gre/1650294>*

 * 'linear'
 * 'easeInQuad'
 * 'easeOutQuad'
 * 'easeInOutQuad'
 * 'easeInCubic'
 * 'easeOutCubic'
 * 'easeInOutCubic'
 * 'easeInQuart'
 * 'easeOutQuart'
 * 'easeInOutQuart'
 * 'easeInQuint'
 * 'easeOutQuint'
 * 'easeInOutQuint'

#### [offset]
type: `number`
default: 0

scroll additional px ( like padding )

#### [showHash]

type: `boolean`
default: `false`

Set `true` for show hash on URL

#### [container]

type: `HTMLElement`
default: `document.documentElement`

Set element which need to scroll

## Authors

* [BoatZako](https://github.com/BoatZako/) (boat_zako@hotmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

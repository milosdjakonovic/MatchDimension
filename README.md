# MatchDimension
Cross browser Javascript viewport awareness


Small library aimed to provide **Javascript viewport awareness** across all browsers, event those noncompliant to standards, that do not support CSS media queries natively.

* No dependency
* Works across every A and not so A grade browser (even in IE6 and Android 2.1 browser)
* Lightweight and very fast (~1.7KB minified)
* Takes advantage of native matchMedia functionality when available
* Takes possible window resize or orientation change into count
* Option to **listen for viewport changes** - bind functions on `resize` and `orientationchange` events - like `matchMedia.addListener`
* Simple to write, less chars



Limitation: 
* only pixel units allowed

 
### Usage:

Simply include library in your code `<script src="path/to/js/matchd.min.js"></script>`


```javascript

if ( mtchD( 'min-width', '480px') ) {
  // code for viewport width => 480px
  // equivalent for @media(min-width:480px)
}
if ( mtchD({'max-width' : '1600px' }) ) {
  // code for viewport width <= 1600px
  // equivalent for @media(max-width:1600px)
}

if ( mtchD({ 'min-height':  '480px'}) ) {
  // code for viewport height => 480px
  //equivalent for @media(min-height:480px)
}

if ( mtchD.('max-hight', '1600px') ) {
  // code for viewport height <= 1600px
  // equivalent for @media(max-height:1600px)
}


```


#### multiple conditions allowed:

```javascript

if ( mtchD({ 'min-width':'480px', 'max-width':'1200px' }) ) {
  // equivalent for @media (min-width:480px) and (max-width: 1200px)
}


```


#### orientation detection:

```javascript

if ( mtchD({ 'min-width':'480px', 'orientation':'portrait' })  ) {
  // goes for portrait orientation and min width of 480px
}
if ( mtchD({ 'orientation':'landscape', 'min-width':'480px' }) ) {
  // goes for landscape orientation and min width of 480px
}

```

#### listener

```javascript

mtchD.on({'max-width' : '800px' }, function(){
    // will execute immediately if condition is true
    // and every time when condition becames true, for example, when device changes orientation multiple times
});

mtchD.on({'max-width' : '800px' }, function(){
    // will execute immediately if condition is true
    // and once when condition becames true - note the last argument
}, true);


```
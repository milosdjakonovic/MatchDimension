# MatchDimension
Cross browser Javascript media queries


Small library aimed to provide **Javascript media queries** across all browsers, event those most noncompliant to standards, that do not support CSS media queries natively.

* No dependency
* Works across every A and not so A grade browser (even in IE6 and Android 2.1 browser)
* Lightweight (~1KB minified)
* Takes advantage of native matchMedia functionality when available
* Very fast - doesn't do string processing when native functionality is missing (method names reflects media query structures)
* Takes possible window resize or orientation change into count - gives accurate result after resize
* Simple to write, less chars


### Usage:

```javascript

if ( mtchD.minWidth(480).t() ) {
  // code for viewport width => 480px
  //equivalent for @media(min-width:480px)
}
if ( mtchD.maxWidth(1600).t() ) {
  // code for viewport width <= 1600px
  //equivalent for @media(max-width:1600px)
}

if ( mtchD.minHeight(480).t() ) {
  // code for viewport height => 480px
  //equivalent for @media(min-height:480px)
}

if ( mtchD.maxHeight(1600).t() ) {
  // code for viewport height <= 1600px
  //equivalent for @media(max-height:1600px)
}


```


#### multiple conditions allowed:

```javascript

if ( mtchD.minWidth(480).maxWidth(1200).t() ) {
  //equivalent for @media (min-width:480px) and (max-width: 1200px)
}


```


#### orientation detection:

```javascript

if ( mtchD.portrait().minWidth(480).t() ) {
  //goes for portrait orientation and min width of 480px
}
if ( mtchD.landscape().minWidth(480).t() ) {
  //goes for landscape orientation and min width of 480px
}

```

#### alternative syntax:

```javascript

if ( mtchD.minWidth(480).maxWidth(1200).t() ) {
  
}
//or
if ( mtchD.minWidth(480).maxWidth(1200).test() ) {
  
}
//same as
if ( mtchD.minWidth(480).maxWidth(1200).matches() ) {
  
}

```
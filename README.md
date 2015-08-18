# MatchDimension
Cross browser Javascript media queries


Small library aimed to provide **Javascript media queries** accross all browsers, event those most standard-noncompliant that do not support CSS media queries.
* No dependancy
* Lightweight (<=1KB minified) and very fast (no string processing, method names corespondes media queries)
* Works accross every A and not so A grade browser (even in IE6 and Android 2.1 browser)
* Takes possible window resize or orientation change into count - gives accurate result
* Simple to write, less chars


###Usage:

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


####multiple conditions allowed:

```javascript

if ( mtchD.minWidth(480).maxWidth(1200).t() ) {
  //equivalent for @media (min-width:480px) and (max-width: 1200px)
}


```

#### Basic orientation detection included


```javascript

if ( mtchD.portrait().minWidth(480).t() ) {
  //goes for portrait orientation and min width of 480px
}
if ( mtchD.landscape().minWidth(480).t() ) {
  //goes for landscape orientation and min width of 480px
}

```

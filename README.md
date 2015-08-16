# MatchDimension
Cross browser Javascript media queries


Small library aimed to provide **Javascript media queries** accross all browsers, event those most standard-noncompliant that do not support CSS media queries.
* No dependancy
* Tested in IE6+



###Usage:

```javascript

if ( mtchD.minWidth(480).test() ) {
  // code for viewport width => 480px
  //equivalent for @media(min-width:480px)
}
if ( mtchD.maxWidth(1600).test() ) {
  // code for viewport width <= 1600px
  //equivalent for @media(max-width:1600px)
}

if ( mtchD.minHeight(480).test() ) {
  // code for viewport height => 480px
  //equivalent for @media(min-height:480px)
}

if ( mtchD.maxHeight(1600).test() ) {
  // code for viewport height <= 1600px
  //equivalent for @media(max-height:1600px)
}


```


####multiple conditions allowed:

```javascript

if ( mtchD.minWidth(480).maxWidth(1200).test() ) {
  //equivalent for @media (min-width:480px) and (max-width: 1200px)
}


```

#### (a very basic) orientation detection included


```javascript

if ( mtchD.portrait().minWidth(480).test() ) {
  //goes for portrait orientation and min width of 480px
}
if ( mtchD.landscape().minWidth(480).test() ) {
  //goes for landscape orientation and min width of 480px
}

```

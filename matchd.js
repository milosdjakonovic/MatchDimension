//MatchDimension
//Cross browser Javascript media queries
//by Milos Djakonovic ( @Miloshio )


window.mtchD={
    result : {
        
    },
    w:Math.max(document.documentElement.clientWidth,  window.innerWidth  || 0),
    h:Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    minWidth : function(D){
        var exp = ( this.w >= D );
        this.result.minWidth = exp;
        return this;
    },
    maxWidth : function(D){
        var exp = ( this.w <= D );
        this.result.maxWidth = exp;
        return this;
    },
    minHeight : function(D){
        var exp = ( this.h >= D );
        this.result.minHeight = exp;
        return this;
    },
    maxHeight: function(D){
        var exp = ( this.h <= D );
        this.result.maxWidth = exp;
        return this;
    },
    // both mtchD.landscape() and mtchD.portrait() provides
    // data according to one simple factor - comparing viewport height and width
    // which may be inaccurate on some mobile devices
    // thus will be updated soon
    landscape: function(){
        
        if( (this.h < this.w) ) {
            this.result.orientation = true;
            return this;
        } else {
            this.result.orientation = false;
            return this;
        }
        
        return this;
    },
    portrait: function(){

        if ( (this.h > this.w) ) {
            this.result.orientation = true;
            return this;
        } else {
            this.result.orientation = false
            return this;
        }
       
    },
    
    test: function(){
        //get instance of this.result
        var r = this.result,
        testedProps = [];
        //flush previous result set
        //required to run next test
        this.result={};
        
        // Process results and returns T/F
        for( x in r){
            if (r[x]===false) {
                return false;
            }
        }
        return true;
    }
};

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
        //return exp;
        return this;
    },
    maxWidth : function(D){
        var exp = ( this.w <= D );
        this.result.maxWidth = exp;
        //return exp;
        return this;
    },
    minHeight : function(D){
        var exp = ( this.h >= D );
        this.result.minHeight = exp;
        //return exp;
        return this;
    },
    maxHeight: function(D){
        var exp = ( this.h <= D );
        this.result.maxWidth = exp;
        //return exp;
        return this;
    },

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
        var r = this.result,
        testedProps = [];
        //flush previous result set
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

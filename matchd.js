//MatchDimension
//Cross browser Javascript media queries
//by Milos Djakonovic ( @Miloshio )


window.mtchD={

    bool : true,
    
    w:0,
    
    h:0,
    
    setHW: function(){
        this.w = Math.max(document.documentElement.clientWidth,  window.innerWidth  || 0);
        this.h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    },    
        
    minWidth : function(D){
        this.setHW();
        
        if (!this.bool) {
            return this;
        }
        
        if( this.w >= D ) {
            this.bool = true;
        } else {
            this.bool = false;
        }
        
        return this;
    },
    maxWidth : function(D){
        this.setHW();
        
        if (!this.bool) {
            return this;
        }
        
        if ( this.w <= D ) {
            this.bool = true;
        } else {
            this.bool = false;
        }
        
        return this;
    },
    minHeight : function(D){
        this.setHW();
        
        if (!this.bool) {
            return this;
        }
        
        if( this.h >= D ) {
            this.bool = true;
        } else {
            this.bool = false;
        }

        return this;
    },
    maxHeight: function(D){
        this.setHW();
        
        if (!this.bool) {
            return this;
        }
        
        if ( this.h <= D ) {
            this.bool = true;
        } else {
            this.bool = false;
        }
        
        return this;
    },
    // both mtchD.landscape() and mtchD.portrait() provides
    // data according to one simple factor - comparing viewport height and width
    // which may be inaccurate on some mobile devices
    // thus will be updated soon
    landscape: function(){
        this.setHW();
        
        if (!this.bool) {
            return this;
        }
        
        if (this.h < this.w)  {
            this.bool = true;
        } else {
            this.bool = false;
        }
        
        return this;
    },
    portrait: function(){
        this.setHW();
        
        if (!this.bool) {
            return this;
        }
        
        if(this.h > this.w) {
            this.bool = true;
        } else {
            this.bool = false;
        }
        
        return this;        
    },
    t : function(){
        var boolCopy = this.bool;
        //reset for further use
        this.bool = true;
        return boolCopy;
    }
    

};

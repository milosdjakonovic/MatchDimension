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
    
    testNative : function(){
        return ('matchMedia' in window) ? true : false;
    },
    minWidth : function(D){
        if (!this.bool) {
            return this;
        }

        if (this.testNative()) {
            if (! matchMedia( ['(min-width : ', D, 'px)'].join('') ).matches ) {
                this.bool = false;
            }
        } else {
            this.setHW();

            if( !(this.w >= D) ) {
                this.bool = false;
            }            
        }
        
        return this;
    },
    
    maxWidth : function(D){

        if (!this.bool) {
            return this;
        }
        
        if (this.testNative()){
            if (! matchMedia( ['(max-width : ', D, 'px)'].join('') ).matches ) {
                this.bool = false;
            }            
            
        } else {
            this.setHW();
            
            if ( !(this.w <= D) ) {
                this.bool = false;
            }
        }

        
        return this;
    },
    
    minHeight : function(D){
        
        if (!this.bool) {
            return this;
        }
        
        if (this.testNative()) {
            if (! matchMedia( ['(min-height : ', D, 'px)'].join('') ).matches ) {
                this.bool = false;
            }
        } else {
            this.setHW();
            if( !(this.h >= D) ) {
                this.bool = false;
            }            
        }
        
        return this;
    },
    
    maxHeight: function(D){
        
        if (!this.bool) {
            return this;
        }
        
        if (this.testNative()) {
            if (! matchMedia( ['(max-height : ', D, 'px)'].join('') ).matches ){
                this.bool = false;
            }
            
        } else {
            this.setHW();
            if ( !(this.h <= D) ) {
                this.bool = false;
            }            
        }
        

        
        return this;
    },

    landscape: function(){
        
        if (!this.bool) {
            return this;
        }
        
        if (this.testNative()) {
            
            if (! matchMedia( '(orientation: landscape)' ).matches ){
                this.bool = false;
            }
            
        } else {
            
            this.setHW();
            if ( !(this.h < this.w) )  {
                this.bool = false;
            }
            
        }
        
        
        return this;
    },
    portrait: function(){
        
        if (!this.bool) {
            return this;
        }
        
        if (this.testNative()) {
            
            if (! matchMedia( '(orientation: portrait)' ).matches ){
                this.bool = false;
            }            
            
        } else {
            this.setHW();            
            if( !(this.h > this.w)) {
                this.bool = false;
            }            
        }

        return this;        
    },
    t : function(){
        var boolCopy = this.bool;
        //reset for further use
        this.bool = true;
        return boolCopy;
    },
    
    test: function(){
        return this.t()
    },
    
    matches : function(){
        return this.t()
    }
    

};

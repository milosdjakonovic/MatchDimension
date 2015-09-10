//MatchDimension
//Cross browser Javascript media queries
//by Milos Djakonovic ( @Miloshio )
window.mtchD=(function(w){
    var t=true,
        w,
        h,
        native = ( function(){ return ('matchMedia' in window) ? true : false } )();

    function setHW(){
        w = Math.max(document.documentElement.clientWidth,  w.innerWidth  || 0);
        h = Math.max(document.documentElement.clientHeight, w.innerHeight || 0)
    }

    setHW();

    function aEv(e, v, f) {
        if (e.addEventListener) {
            e.addEventListener(v, f, false);
        } else if (e.attachEvent) {
            e.attachEvent('on' + v, f);
        }
    };

    return {

        minWidth : function(D){
            if (!t) {
                return this;
            }

            if (native) {
                if (! matchMedia( ['(min-width : ', D, 'px)'].join('') ).matches ) {
                    t = false;
                }
            } else {

                if( !(w >= D) ) {
                    t = false;
                }
            }

            return this;
        }

    }

})(window);

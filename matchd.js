//MatchDimension
//Cross browser Javascript media queries
//by Milos Djakonovic ( @Miloshio )
window.mtchD = (function(w){



    var W,//width
        H,//height
        tout,//timeout
        //do we have native functionality?
        native = ( function(){return ('matchMedia' in w) ? true : false } )(),

        callbacksPool=[

        ],
        expression = /(m(in|ax)-(width|height)|orientation)/i;



    //set width and height
    function setHW(){
        W = Math.max(document.documentElement.clientWidth,  w.innerWidth  || 0);
        H = Math.max(document.documentElement.clientHeight, w.innerHeight || 0);
    }

    function processFnQueue(){
        //the loop
        for( var i=0; i<callbacksPool.length; i++){
            if(testAllProps(callbacksPool[i].condition) ){
                callbacksPool[i].callback.call();
                if(callbacksPool[i].once)
                    callbacksPool.splice(i,1);
            }
        }
    }

    //debounced fn, to be called from on resize handler
    function dbncd(){
        setHW();
        processFnQueue();
        // -- console.log(callbacksPool)

    }
    // on resize, debouncer..
    function onrsz(){
        clearTimeout(tout);
        tout=setTimeout(dbncd,100);
    }
    // addEvent
    function addEvent(e, v, f) {
        if (e.addEventListener) {
            e.addEventListener(v, f, false);
        } else if (e.attachEvent) {
            e.attachEvent('on' + v, f);
        }
    }
    
    function minWidth(D){
        if (native) {
            if (! w.matchMedia( ['(min-width : ', D, 'px)'].join('') ).matches ) {
                return false;
            } else {return true;}
        } else {

            if( !(W >= D) ) {
                return false;
            } else return true;
        }
    }
    
    function minHeight(D){
        if (native) {
            if (! w.matchMedia( ['(min-height : ', D, 'px)'].join('') ).matches ) {
                return false;
            } else return true;
        } else {

            if( !(H >= D) ) {
                return false;
            } else return true;
        }
    }
    
    function maxWidth(D){
        if (native){
            if (! w.matchMedia( ['(max-width : ', D, 'px)'].join('') ).matches ) {
                return false;
            } else return true;

        } else {

            if ( !(W <= D) ) {
                return false;
            } else return true;
        }
    }
    
    function maxHeight(D){
        if (native) {
            if (! w.matchMedia( ['(max-height : ', D, 'px)'].join('') ).matches ){
                return false;
            } else return true;

        } else {
            if ( !(H <= D) ) {
                return false;
            } else return true;
        }
    }

    function orientation(D){
        if(D==='landscape'){
            if (native) {
                if (! w.matchMedia( '(orientation: landscape)' ).matches ){
                    return false;
                } else return true;
            } else {
                if ( !(H < W) )  {
                    return false;
                } else return true;
            }
        } else {
            if (native) {

                if (! w.matchMedia( '(orientation: portrait)' ).matches ){
                    return false;
                } else return true;

            } else {
                if( !(H > W)) {
                    return false;
                } else return true;
            }
        }
    }
    
    function executeTest(test,param){
        if(test!=='orientation'){
            test = test.replace('-width','Width').replace('-height','Height');
            param = Number(param);
        }

        var result;


        switch(test){
            case 'minWidth':
                result = minWidth(param);
                break;
            case 'minHeight':
                result = minHeight(param);
                break;
            case 'maxWidth':
                result = maxWidth(param);
                break;
            case 'maxHeight':
                result = maxHeight(param);
                break;
            case 'orientation':
                result = orientation(param);
        }
        return result;
    }

    setHW();
    addEvent(w,'resize', onrsz);
    addEvent(w,'orientationchange',onrsz);

    function testAllProps(props){
        for(var prop in props){
            if(!executeTest(prop, props[prop])){
                return false;
            }
        }
        return true;
    }

    function main(arg1, arg2){
        if(typeof(arg2)==='undefined'){
            //object with conditions
            if(!testAllProps(arg1)){
                return false;
            }
            else {
                return true;
            }

        } else {
            //two strings
            if(! expression.test(arg1)){
                throw new Error('Argument: '+arg1+' is incorrect.' );
            }
            //Example 'min-width' to minWidth
            return executeTest(arg1,arg2);

        }
    }

    main.on = function(condition, callback, once){
        if(testAllProps(condition)){
            //fire immediately
            callback.call();
        } else {
            //queue function for eventual later execution
            callbacksPool.push({
                condition: condition,
                callback : callback,
                once: once
            });

        }
    }
    


    return main;


})(window);

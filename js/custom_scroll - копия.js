function () {
    if (tab_index = "tab_1") {}
    else if (tab_index = "tab_2") {}
    else if (tab_index = "tab_3") {}
}

function scrollInit(wrapper_sel) {
    var selector = DefineScroll(wrapper_sel);
 wrapper_selector = selector;
container_selector = selector + ' ' + '.scroll_container';
  runner_selector = selector + ' ' + '.scroll_runner';

   setRunnerSize();

   addScrollListeners();
    
}
var wrapper_selector,
    container_selector,
    runner_selector;




var DefineScroll = function (wrapper_sel) {
    if (wrapper_sel === undefined) {
        return '.scroll_container_wrapper'
    } else {
        return wrapper_sel
    }
}

var container_step_size=300,

    runner_step = 0,
    runner_marker = true,
    step = 0;




 function addScrollListeners() {
    var listeners = ['wheel', 'keydown', 'touchstart', 'touchmove', 'touchend'];
    for (var i = 0; i < listeners.length; i++) {
        window.addEventListener(listeners[i], function (e) {
            pageScroll(e);
        })
    }
 };




function pageScroll(e) {
   direction = ScrollDirection.defineScrollDirection(e);
    containerMove();
    runnerMove();
}


function container () {
        return document.querySelector(container_selector)
    };

 function thumb {
        return container().parentElement.querySelector(runner_selector)
    };




function wrapper_height (elem) {
        return elem.parentElement.offsetHeight;
    };

function container_height (elem) {
        return elem.offsetHeight;
    };

 function container_step_size () {
        return (100 * container_step_size / this.container_height(container()))
    };

 function runner_step_size () {
        return this.container_step_size()
    };

function setRunnerSize () {
        container = container();
        console.log(this.wrapper_height(container))
        thumb().style.height = 100 / this.container_height(container) * this.wrapper_height(container) + "%";
    };




var ScrollDirection = {

    getKeyCode: function (e) {
        if (e.keyCode == 40) {
            return 'down'
        } else if (e.keyCode == 38) {
            return 'up'
        }
    },

    getTouchCoord: function (e) {
        return e.touches[0].clientY
    },

    getSwipeDirection: function (e) {
        if (e.type == 'touchstart') {
            this.firstCoord = this.getTouchCoord(e);
        } else if (e.type == 'touchmove') {
            this.lastCoord = this.getTouchCoord(e);
        } else if (e.type == 'touchend') {
            if (this.lastCoord - this.firstCoord > 10) {
                return 'up';
            } else if (this.lastCoord - this.firstCoord < -10) {
                return 'down';
            }
        }
    },

    getWheelDirection: function (e) {
        if (e.deltaY > 0) {
            return 'down'
        } else if (e.deltaY < 0) {
            return 'up'
        }
    },

    defineScrollDirection: function (e) {
        if (e.type == "keydown") {
            return this.getKeyCode(e);
        } else if (e.type == "touchstart" || e.type == "touchmove" || e.type == "touchend") {
            return this.getSwipeDirection(e);
        } else if (e.type == "wheel") {
            return this.getWheelDirection(e);
        }
    },

}



/* Elements moving */


function runnerMove () {

        var direction = direction,
            step_size = container_step_size(),
            runner_marker = runner_marker,
            thumb = thumb(),
            runner_step_size = runner_step_size();


        if (direction == 'down') { //-
            if (runner_marker) {
                this.runner_step += runner_step_size;
                thumb.style.top = this.runner_step + "%";
            } else {
                this.runner_step = (100 - parseFloat(thumb.style.height));
                thumb.style.top = this.runner_step + "%";
            }
        } else if (direction == 'up') { //+
            if (runner_marker) {
                this.runner_step -= runner_step_size;
                thumb.style.top = this.runner_step + "%";
            } else {
               this.runner_step = 0;
                thumb.style.top = this.runner_step + "%";
            }
        }
    };


   function containerMove () {
        var direction = this.direction,
            step_size = this.container_step_size,
            container = this.container(),
            wrapper_height = this.wrapper_height(container),
            container_height = this.container_height(container);

        if (direction == 'down') {
            if (container_height - wrapper_height + this.step > step_size) { //-  
               this.runner_marker = true;
                this.step -= step_size;
                container.style.transform = "translateY(" + this.step + "px)";
            } else {
                this.runner_marker = false;
                container.style.transform = "translateY(-" + (container_height - wrapper_height) + "px)";
            }
        } else if (direction == 'up') {
            if (this.step + step_size < 0) {
                this.runner_marker = true;
                this.step += step_size;
                container.style.transform = "translateY(" + this.step + "px)";
            } else {
                this.runner_marker = false;
                this.step = 0;
                container.style.transform = "translateY(" + this.step + "px)";
            }
        }
    };
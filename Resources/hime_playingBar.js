HIME.playingBar = (function() {

    var colors =  [ '#1240AB', '#2A4480', '#06266F', '#4671D5', '#6C8CD5', '#3914AF', '#412C84' , '#200772' , '#876ED7' ];

    var container = Ti.UI.createView({
        width : 320,
        height : 6,
        top:0,
        backgroundColor: "#F30021"
    });

    var fAnimation = false;

    for ( var i = 0 ; i < 16 ; i++ ) {
        var rand = Math.floor(Math.random() * colors.length );
        var part = Ti.UI.createView({
            width : 20,
            height : 6,
            top : 0,
            left : i*20,
            backgroundColor: colors[rand]
        });

        var changeColor = (function(part){
            var _changeColor = function() {
                setTimeout(function() {
                    if (fAnimation) {
                        var rand = Math.floor(Math.random() * colors.length );
                        var anim = Ti.UI.createAnimation();
                       anim.duration = 100;
                       anim.backgroundColor = colors[rand];
                       part.animate(anim);
                    }
                    _changeColor();
                }, 260);
            }
            return _changeColor;
        })(part);

        changeColor(part);
        container.add(part);
    };

    var play = function() {
        fAnimation = true;
    };

    var stop = function() {
        fAnimation = false;
    };

    getPlayingBar = function() {
        return container;
    };

    // return public method
    return {
        play : play,
        stop : stop,
        getPlayingBar : getPlayingBar
    };
}());

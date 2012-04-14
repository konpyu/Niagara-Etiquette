//----------------------------------------
//top window
//

Ti.include('hime_fallDef.js');
Ti.include('hime_localization.js');
Ti.include('hime_playView.js');
Ti.include('hime_selectView.js');
Ti.include('hime_playingBar.js');

var __log = Ti.API.info;

(function(){
    HIME.ui.createTopWindow = function() {

        var win = Ti.UI.createWindow({
            title : stringDef.title,
            backgroundColor: "#111",
            barColor:"#071C71"
        });

        // Play View
        HIME.playView.createPlayView(fallDef[0]);
        win.add(HIME.playView.getPlayView());

        // Select View
        HIME.selectView.initWithJSON(fallDef);
        Ti.App.addEventListener('onIconSelect', function(param) {
            if ( fallDef[param.index].type === "help" ) {
                HIME.playView.createHelpView(fallDef[param.index]);
            } else {
                HIME.playView.createPlayView(fallDef[param.index]);
            }
        });

        // PlayingBar Event
        Ti.App.addEventListener('onPlayStart', function(param) {
            HIME.playingBar.play();
        });

        Ti.App.addEventListener('onCompleteSound', function(param) {
            HIME.playingBar.stop();
        });

        Ti.App.addEventListener('onStopSound', function(param) {
            HIME.playingBar.stop();
        });

        win.add(HIME.selectView.getSelectView());
        win.add(HIME.playingBar.getPlayingBar());

        return win;
    };

})();

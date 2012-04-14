HIME.playView = (function() {

    var selectedAudioName = "audio/sample.mp3";
    var playingAudioName = "";

    var sound = Ti.Media.createSound({volume : 4});
    sound.addEventListener('complete', function() {
        Ti.App.fireEvent('onCompleteSound',{});
    });

    var playView = Ti.UI.createView({
        width : 320,
        height : 302,
        top : 10,
        backgroundColor:'#222'
    });

    var nameLabel = Ti.UI.createLabel({
        text: 'Niagara',
        color: '#fff',
        top: 200,
        left: 20,
        font: { fontSize: 18, fontWeight: 'bold' }
    });

    var countryLabel = Ti.UI.createLabel({
        text: 'Niagara',
        color: '#fff',
        top: 236,
        left: 20,
        font: { fontSize: 12 }
    });

    var intenseLabel = Ti.UI.createLabel({
        text: 'hoge',
        color: '#fff',
        top: 268,
        left: 20,
        font: { fontSize: 12 }
    });

    var startPlayImage = Ti.UI.createImageView({
        image: 'image/play.png',
        width : 100,
        height : 28,
        top: 236,
        left: 209
    });

    var logoImage = Ti.UI.createImageView({
        image: 'image/logo_niagara.png',
        width : 180,
        height : 103,
        top: 20,
        left: 70
    });
    logoImage.hide();

    var helpLabel = Ti.UI.createLabel({
        text: stringDef.help_desc,
        color: '#fff',
        top: 78,
        width: 320,
        left: 0,
        textAlign: "center",
        font: { fontSize: 11 }
    });
    helpLabel.hide();

    var authorLabel = Ti.UI.createLabel({
        text: stringDef.author,
        color: '#fff',
        top: 208,
        width: 320,
        left: 0,
        textAlign: "center",
        font: { fontSize: 13 }
    });
    authorLabel.hide();
    var fallImage = Ti.UI.createImageView({
        image: 'image/niagara.png',
        width: 300,
        height: 186,
        top: 10
    });

    startPlayImage.addEventListener('click', function() {
        if(sound.playing) {
            if (playingAudioName !== selectedAudioName) {
                startPlayImage.image = 'image/stop.png';
                sound.release();
                sound.url = selectedAudioName;
                playingAudioName = selectedAudioName;
                sound.play();
                Ti.App.fireEvent('onPlayStart', {});
            } else {
                startPlayImage.image = 'image/play.png';
                sound.stop();
                Ti.App.fireEvent('onStopSound', {});
            }
        } else {
            //still playing no sound , play normally...
            startPlayImage.image = 'image/stop.png';
            sound.release();
            sound.url = selectedAudioName;
            playingAudioName = selectedAudioName;
            sound.play();
            Ti.App.fireEvent('onPlayStart', {});
        }
    });

    playView.add(nameLabel);
    playView.add(countryLabel);
    playView.add(logoImage);
    playView.add(helpLabel);
    playView.add(authorLabel);
    playView.add(startPlayImage);
    playView.add(fallImage);

    getPlayView = function() {
        return playView;
    };

    createPlayView = function(def) {
        selectedAudioName = def.audio;
        nameLabel.text = def.name;
        countryLabel.text = def.country;
        intenseLabel.text = def.intense;
        fallImage.image = def.image;
        fallImage.show();
        startPlayImage.show();
        logoImage.hide();
        helpLabel.hide();
        authorLabel.hide();

        if (!sound.playing || playingAudioName !== def.audio) {
            startPlayImage.image = 'image/play.png';
        } else {
            startPlayImage.image = 'image/stop.png';
        }
    };

    createHelpView = function(def) {
        nameLabel.text = "";
        countryLabel.text = "";
        intenseLabel.text = "";
        fallImage.hide();
        startPlayImage.hide();
        logoImage.show();
        helpLabel.show();
        authorLabel.show();
    };

    // return public method
    return {
        createPlayView : createPlayView,
        createHelpView : createHelpView,
        getPlayView  : getPlayView
    };
}());

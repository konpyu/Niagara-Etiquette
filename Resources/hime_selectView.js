HIME.selectView = (function() {

    var scrollView = Titanium.UI.createScrollView({
        contentWidth: 500,
        contentHeight: 50,
        top: 480-100-64,
        height: 100,
        width: 320,
        backgroundColor: '#333',
        showHorizontalScrollIndicator: true
    });

    var icons = [];
    var selectedIndex = 0;

    var initWithJSON = function(fallDef) {
        for (var i = 0 ; i < fallDef.length ; i++) {
            var view = Ti.UI.createView({
                backgroundColor: '#333',
                borderWidth:1,borderColor: '#333',
                width: 64,
                height: 88,
                left: 10 + 84 * i
            });

            var fallImg = Ti.UI.createImageView({
                image : fallDef[i].iconImage,
                width: 60,
                height: 60,
                borderRadius:10,
                borderWidth:2,
                borderColor:'EEE',
                top: 2
            });

            var fallName = Ti.UI.createLabel({
                text  : fallDef[i].iconname,
                color :'#fff',
                textAlign : 'center',
                font : {fontSize:11, fontWeight:'bold'},
                top : 64,
                width : 68
            });

            view.addEventListener( 'click' , (function(j){
                return function() {
                    selectedIndex = j;
                    Ti.App.fireEvent( "onIconSelect", { index: j } );
                }
            })(i)
            );

            view.add(fallImg);
            view.add(fallName);
            scrollView.add(view);
        }
    };

    getSelectView = function() {
        return scrollView;
    };

    getSelectedIndex = function() {
        return selectedIndex;
    };

    return {
        initWithJSON  : initWithJSON,
        getSelectView : getSelectView,
        getSelectedIndex : getSelectedIndex,
    };
}());

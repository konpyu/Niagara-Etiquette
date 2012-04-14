HIME.ui = {};
Ti.include('hime_topWindow.js');
(function() {
    HIME.ui.createAppTabGroup = function() {
        var tabGroup = Ti.UI.createTabGroup();
        var win = HIME.ui.createTopWindow();
        win.tabBarHidden = true;
        //win.navBarHidden = true;
        var tab1 = Ti.UI.createTab({
            window: win
        });

        var win2 = Ti.UI.createWindow({backgroundColor:'red'});
        
        var tab2 = Ti.UI.createTab({
            window: win2
        });

        Ti.App.addEventListener('onClickGlobeBtn',function() {
            win2.open({animated:true});
        });

        tabGroup.addTab(tab1);
        tabGroup.addTab(tab2);
        return tabGroup;
    };
})();

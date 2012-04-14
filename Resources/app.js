// top-level of app
//
var HIME = {};
var log = Ti.API.info;
Ti.UI.iPhone.setStatusBarStyle(Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK);
Ti.include('ui.js');

HIME.tabGroup = HIME.ui.createAppTabGroup();
HIME.tabGroup.open();

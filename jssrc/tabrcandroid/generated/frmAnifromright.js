function addWidgetsfrmAnifromright() {
    frmAnifromright.add();
};

function frmAnifromrightGlobals() {
    frmAnifromright = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnifromright,
        "enabledForIdleTimeout": false,
        "id": "frmAnifromright",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "from right"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 3
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 2
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmAnifromright.info = {
        "kuid": "p2kwiet12889314953446"
    };
};
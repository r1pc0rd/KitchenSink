function addWidgetsfrmAniCloth() {
    frmAniCloth.add();
};

function frmAniClothGlobals() {
    frmAniCloth = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniCloth,
        "enabledForIdleTimeout": false,
        "id": "frmAniCloth",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "Cloth"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmAniCloth.info = {
        "kuid": "p2kwiet1288931495132"
    };
};
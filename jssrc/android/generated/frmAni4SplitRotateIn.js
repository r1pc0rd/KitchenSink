function addWidgetsfrmAni4SplitRotateIn() {
    frmAni4SplitRotateIn.add();
};

function frmAni4SplitRotateInGlobals() {
    frmAni4SplitRotateIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitRotateIn,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitRotateIn",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "4SplitRotateIn"
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
    frmAni4SplitRotateIn.info = {
        "kuid": "p2kwiet1288931495105"
    };
};
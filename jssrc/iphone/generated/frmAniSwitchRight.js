function addWidgetsfrmAniSwitchRight() {
    frmAniSwitchRight.add();
};

function frmAniSwitchRightGlobals() {
    frmAniSwitchRight = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniSwitchRight,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAniSwitchRight",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "SwitchRight"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "fromLeft",
            "transitionEffect": "transitionSwitchRight"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "fromLeft",
            "transitionEffect": "transitionSwitchLeft"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "closureLeftSideView": goToFrmAni,
            "labelLeftSideView": "Back",
            "imageLeftSideView": "back1.png",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmAniSwitchRight.info = {
        "kuid": "p2kwiet1288931495212"
    };
};
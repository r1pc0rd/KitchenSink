function addWidgetsfrmAniSwitchLeft() {
    frmAniSwitchLeft.add();
};

function frmAniSwitchLeftGlobals() {
    frmAniSwitchLeft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniSwitchLeft,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAniSwitchLeft",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "SwitchLeft"
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
            "transitionEffect": "transitionSwitchLeft"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "fromRight",
            "transitionEffect": "transitionSwitchRight"
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
    frmAniSwitchLeft.info = {
        "kuid": "p2kwiet1288931495208"
    };
};
function addWidgetsfrmAniMoveInFromTop() {
    frmAniMoveInFromTop.add();
};

function frmAniMoveInFromTopGlobals() {
    frmAniMoveInFromTop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniMoveInFromTop,
        "enabledForIdleTimeout": false,
        "id": "frmAniMoveInFromTop",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "MoveInFromTop"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmAniMoveInFromTop.info = {
        "kuid": "p2kwiet12889314953477"
    };
};
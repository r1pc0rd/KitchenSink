function addWidgetsfrmAniDoor() {
    frmAniDoor.add();
};

function frmAniDoorGlobals() {
    frmAniDoor = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniDoor,
        "enabledForIdleTimeout": false,
        "id": "frmAniDoor",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "Door"
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
    frmAniDoor.info = {
        "kuid": "p2kwiet12889314953420"
    };
};
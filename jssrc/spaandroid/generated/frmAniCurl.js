function addWidgetsfrmAniCurl() {
    frmAniCurl.add();
};

function frmAniCurlGlobals() {
    frmAniCurl = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniCurl,
        "enabledForIdleTimeout": false,
        "id": "frmAniCurl",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "Curl"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmAniCurl.info = {
        "kuid": "p2kwiet1288931495136"
    };
};
function addWidgetsfrmTitlebarOptions() {
    var button1927359800101064 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800101064",
        "isVisible": true,
        "onClick": p2kwiet12889314954882_button1927359800101064_onClick_seq0,
        "skin": "btnNormal",
        "text": "Default titlebar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 4, 6, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1927359800101074 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800101074",
        "isVisible": true,
        "onClick": p2kwiet12889314954882_button1927359800101074_onClick_seq0,
        "skin": "btnNormal",
        "text": "Titlebar with background color"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 2, 6, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmTitlebarOptions.add(button1927359800101064, button1927359800101074);
};

function frmTitlebarOptionsGlobals() {
    frmTitlebarOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTitlebarOptions,
        "enabledForIdleTimeout": false,
        "id": "frmTitlebarOptions",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Titlebar options"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "backButtonSkin": "btnBack",
        "directChildrenIDs": ["button1927359800101064", "button1927359800101074", "button1927359800101084", "button1927359800101094"],
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "showBackButton": true,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmTitlebarOptions.info = {
        "kuid": "p2kwiet12889314954882"
    };
};
function addWidgetsfrmHdrFtr() {
    var label192735980025497 = new kony.ui.Label({
        "id": "label192735980025497",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "Kony Logo which is shown above is the fixed header"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980025507 = new kony.ui.Label({
        "id": "label192735980025507",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio.When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio.  "
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980025549 = new kony.ui.Label({
        "id": "label192735980025549",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "Copyright which is shown below is the fixed footer"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmHdrFtr.add(label192735980025497, label192735980025507, label192735980025549);
};

function frmHdrFtrGlobals() {
    frmHdrFtr = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHdrFtr,
        "enabledForIdleTimeout": false,
        "footers": [hbox192735980024368],
        "headers": [hbox192735980024418],
        "id": "frmHdrFtr",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Header and Footer"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "backButtonSkin": "btnBack",
        "directChildrenIDs": ["label192735980025497", "label192735980025507", "label192735980025549", "label1931202839100118"],
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
    frmHdrFtr.info = {
        "kuid": "p2kwiet12889314953927"
    };
};
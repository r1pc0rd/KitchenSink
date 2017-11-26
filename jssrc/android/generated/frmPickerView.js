function addWidgetsfrmPickerView() {
    var hboxMain = new kony.ui.Box({
        "id": "hboxMain",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 2, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblBrand = new kony.ui.Label({
        "id": "lblBrand",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Brand"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "marginInPixel": false,
        "padding": [7, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    var lblModel = new kony.ui.Label({
        "id": "lblModel",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Year"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [15, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    var lblColour = new kony.ui.Label({
        "id": "lblColour",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Color"
    }, {
        "containerWeight": 34,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    hboxMain.add(lblBrand, lblModel, lblColour);
    var hbxPickerView = new kony.ui.Box({
        "id": "hbxPickerView",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var pickOne = new kony.ui.PickerView({
        "id": "pickOne",
        "isVisible": true,
        "masterData": [
            [
                ["1", "BMW"],
                ["2", "Chevrolet"],
                ["3", "Aston Martin"],
                ["4", "Ferrari"],
                ["5", "Honda"],
                ["6", "Hyundai"],
                ["7", "Jaguar"],
                ["8", "Jeep"],
                ["9", "Porsche"], 33
            ],
            [
                ["1", "2003"],
                ["2", "2004"],
                ["3", "2005"],
                ["4", "2006"],
                ["5", "2007"],
                ["6", "2008"],
                ["7", "2009"],
                ["8", "2010"],
                ["9", "2011"], 33
            ],
            [
                ["1", "Black"],
                ["2", "Silver"],
                ["3", "White"],
                ["4", "Red"],
                ["5", "Gray"],
                ["6", "Yellow"],
                ["7", "Blue"],
                ["8", "Gold"],
                ["9", "Purple"], 34
            ]
        ],
        "masterDataMap": null,
        "onSelection": p2kwiet12889314951872_pickOne_onSelection_seq0,
        "selectedKeyValues": ["2009", "Jan"]
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "margin": [4, 0, 4, 5],
        "marginInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbxPickerView.add(pickOne);
    var lblOne = new kony.ui.Label({
        "id": "lblOne",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 0, 4, 2],
        "marginInPixel": false,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var btnAdd = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnAdd",
        "isVisible": true,
        "onClick": p2kwiet12889314951872_btnAdd_onClick_seq0,
        "skin": "btnNormal",
        "text": "Set New Year Range"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 4, 4, 5],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblTwo = new kony.ui.Label({
        "id": "lblTwo",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 0, 4, 2],
        "marginInPixel": false,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    frmPickerView.add(hboxMain, hbxPickerView, lblOne, btnAdd, lblTwo);
};

function frmPickerViewGlobals() {
    frmPickerView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPickerView,
        "enabledForIdleTimeout": false,
        "id": "frmPickerView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "PickerView"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 1, 0, 1],
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
    frmPickerView.info = {
        "kuid": "p2kwiet12889314951872"
    };
};
function initializespaRowTemplate1() {
    hbxTempSPA1 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbxTempSPA1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxRT2"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lbl1 = new kony.ui.Label({
        "enableCache": false,
        "id": "lbl1",
        "isVisible": true,
        "skin": "lblWhite1",
        "text": "Label"
    }, {
        "containerWeight": 56,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btn1 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "btn1",
        "isVisible": true,
        "skin": "skinbtn1",
        "text": "Button"
    }, {
        "containerWeight": 23,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    hbxTempSPA1.add(lbl1, btn1);
}
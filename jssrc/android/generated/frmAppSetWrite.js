function addWidgetsfrmAppSetWrite() {
    var hbox1927359800106234 = new kony.ui.Box({
        "id": "hbox1927359800106234",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [6, 12, 6, 6],
        "marginInPixel": true,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1927359800106235 = new kony.ui.Label({
        "id": "label1927359800106235",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Message"
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var txtAppSet = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "textBoxFocus",
        "id": "txtAppSet",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Enter Message",
        "secureTextEntry": false,
        "skin": "textBoxNormal",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    hbox1927359800106234.add(label1927359800106235, txtAppSet);
    var hbox1927359800106258 = new kony.ui.Box({
        "id": "hbox1927359800106258",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1927359800106260 = new kony.ui.Label({
        "id": "label1927359800106260",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "View type"
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var CmbAppSet = new kony.ui.ComboBox({
        "focusSkin": "cboxFocus",
        "id": "CmbAppSet",
        "isVisible": true,
        "masterData": [
            ["Table view", "Table view"],
            ["Page view", "Page view"],
            ["Coverflow view", "Coverflow view"],
            ["Cylinder view", "Cylinder view"],
            ["Linear view", "Linear view"],
            ["Stack view", "Stack view"]
        ],
        "selectedKey": "Table view",
        "selectedKeyValue": ["Table view", "Table view"],
        "skin": "cboxNormal"
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1927359800106258.add(label1927359800106260, CmbAppSet);
    var button1927359800106315 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800106315",
        "isVisible": true,
        "onClick": p2kwiet1288931495292_button1927359800106315_onClick_seq0,
        "skin": "btnNormal",
        "text": "Set Appsettings"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 12, 12, 4],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1927359800106905 = new kony.ui.Label({
        "id": "label1927359800106905",
        "isVisible": true,
        "skin": "lblWhite80",
        "text": "* Please open the iOS Settings application from the home screen and observe the new settings for \"KitchenSink UI App\""
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var lblAppAfterSet = new kony.ui.Label({
        "id": "lblAppAfterSet",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    frmAppSetWrite.add(hbox1927359800106234, hbox1927359800106258, button1927359800106315, label1927359800106905, lblAppAfterSet);
};

function frmAppSetWriteGlobals() {
    frmAppSetWrite = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAppSetWrite,
        "enabledForIdleTimeout": false,
        "id": "frmAppSetWrite",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495292_frmAppSetWrite_preshow_seq0,
        "skin": "frm",
        "title": "App settings"
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
    frmAppSetWrite.info = {
        "kuid": "p2kwiet1288931495292"
    };
};
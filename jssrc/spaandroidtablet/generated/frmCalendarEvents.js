function addWidgetsfrmCalendarEvents() {
    var hbxCalendarEvents = new kony.ui.Box({
        "id": "hbxCalendarEvents",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox192920684279809 = new kony.ui.Box({
        "id": "vbox192920684279809",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var button192920684279843 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192920684279843",
        "isVisible": true,
        "onClick": p2kwiet12889314953643_button192920684279843_onClick_seq0,
        "skin": "btnNormal",
        "text": "Add calendar event"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button192920684279845 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192920684279845",
        "isVisible": true,
        "onClick": p2kwiet12889314953643_button192920684279845_onClick_seq0,
        "skin": "btnNormal",
        "text": "Remove calendar event"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button192920684279847 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192920684279847",
        "isVisible": true,
        "onClick": p2kwiet12889314953643_button192920684279847_onClick_seq0,
        "skin": "btnNormal",
        "text": "Confidential  event"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblCalendarEvents = new kony.ui.Label({
        "id": "lblCalendarEvents",
        "isVisible": true,
        "skin": "lblNormalSimilar"
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
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    vbox192920684279809.add(button192920684279843, button192920684279845, button192920684279847, lblCalendarEvents);
    hbxCalendarEvents.add(vbox192920684279809);
    frmCalendarEvents.add(hbxCalendarEvents);
};

function frmCalendarEventsGlobals() {
    frmCalendarEvents = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCalendarEvents,
        "enabledForIdleTimeout": false,
        "id": "frmCalendarEvents",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
    frmCalendarEvents.info = {
        "kuid": "p2kwiet12889314953643"
    };
};
function addWidgetsfrmCal() {
    var label121049260345 = new kony.ui.Label({
        "id": "label121049260345",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Default view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    var calendar118082077329776 = new kony.ui.Calendar({
        "dateFormat": "dd/MM/yyyy",
        "focusSkin": "calFocus",
        "id": "calendar118082077329776",
        "isVisible": true,
        "skin": "calNormal",
        "viewConfig": {
            "gridConfig": {
                "allowWeekendSelectable": true
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label121049260346 = new kony.ui.Label({
        "id": "label121049260346",
        "isVisible": true,
        "skin": "lblSub",
        "text": "GridOnScreen view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    var hbox685080434386974 = new kony.ui.Box({
        "id": "hbox685080434386974",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxWhite"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var calendar685080434386988 = new kony.ui.Calendar({
        "dateFormat": "dd/MM/yyyy",
        "focusSkin": "calFocus",
        "id": "calendar685080434386988",
        "isVisible": true,
        "skin": "calNormal",
        "viewConfig": {
            "gridConfig": {
                "allowWeekendSelectable": true
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_GRID_ONSCREEN
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "data": {},
        "dayTextAlignmentInCell": constants.CONTENT_ALIGN_CENTER
    });
    hbox685080434386974.add(calendar685080434386988);
    var label118082077329800 = new kony.ui.Label({
        "id": "label118082077329800",
        "isVisible": true,
        "skin": "lblSub",
        "text": "GridPopup view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    var calendar118082077329814 = new kony.ui.Calendar({
        "dateFormat": "dd/MM/yyyy",
        "focusSkin": "calFocus",
        "id": "calendar118082077329814",
        "isVisible": true,
        "skin": "calNormal",
        "viewConfig": {
            "gridConfig": {
                "allowWeekendSelectable": true
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_GRID_POPUP
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "data": {},
        "dayTextAlignmentInCell": constants.CONTENT_ALIGN_CENTER
    });
    var label1181029310129167 = new kony.ui.Label({
        "id": "label1181029310129167",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Custom Calendar Icon"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    var calendar1181029310129177 = new kony.ui.Calendar({
        "calendarIcon": "cal.png",
        "dateFormat": "dd/MM/yyyy",
        "focusSkin": "calNormal",
        "id": "calendar1181029310129177",
        "isVisible": true,
        "skin": "calNormal",
        "viewConfig": {
            "gridConfig": {
                "allowWeekendSelectable": true
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 2, 4, 4],
        "marginInPixel": false,
        "padding": [8, 8, 8, 8],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmCal.add(label121049260345, calendar118082077329776, label121049260346, hbox685080434386974, label118082077329800, calendar118082077329814, label1181029310129167, calendar1181029310129177);
};

function frmCalGlobals() {
    frmCal = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCal,
        "enabledForIdleTimeout": false,
        "id": "frmCal",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Calender"
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
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmCal.info = {
        "kuid": "p2kwiet1288931495524"
    };
};
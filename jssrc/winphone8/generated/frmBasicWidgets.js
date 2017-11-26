function addWidgetsfrmBasicWidgets() {
    var hbox103994549623663 = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "headBox",
        "id": "hbox103994549623663",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "enableCache": false,
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "User Interface"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox103994549623663.add(label103994549623664);
    var segFirst = new kony.ui.SegmentedUI2({
        "data": [{
            "lblFirst": "Button"
        }, {
            "lblFirst": "Calendar"
        }, {
            "lblFirst": "CheckBoxGroup"
        }, {
            "lblFirst": "ComboBox"
        }, {
            "lblFirst": "DataGrid"
        }, {
            "lblFirst": "Image"
        }, {
            "lblFirst": "Label"
        }, {
            "lblFirst": "Link"
        }, {
            "lblFirst": "ListBox"
        }, {
            "lblFirst": "RadioButtonGroup"
        }, {
            "lblFirst": "RichText"
        }, {
            "lblFirst": "Slider"
        }, {
            "lblFirst": "TextArea"
        }, {
            "lblFirst": "TextBox"
        }, {
            "lblFirst": "Icons"
        }],
        "enableCache": false,
        "groupCells": false,
        "id": "segFirst",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet1288931495328_segFirst_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495133,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblFirst": "lblFirst"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 4],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmBasicWidgets.add(hbox103994549623663, segFirst);
};

function frmBasicWidgetsGlobals() {
    frmBasicWidgets = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBasicWidgets,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmBasicWidgets",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Basic"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbox103994549623663", "label103994549623664", "segFirst"],
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmBasicWidgets.info = {
        "kuid": "p2kwiet1288931495328"
    };
};
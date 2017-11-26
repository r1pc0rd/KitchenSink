function addWidgetsfrmSegInvertRotaryView() {
    var labelfrmSeg6 = new kony.ui.Label({
        "enableCache": false,
        "id": "labelfrmSeg6",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Segment in Inverted rotatory view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [4, 7, 4, 4],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var segment2117989725234071 = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725234127": "b1.png"
        }, {
            "image2117989725234127": "b2.png"
        }, {
            "image2117989725234127": "b3.png"
        }, {
            "image2117989725234127": "b4.png"
        }],
        "enableCache": false,
        "groupCells": true,
        "id": "segment2117989725234071",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495215,
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
            "hbox117989725234124": "hbox117989725234124",
            "image2117989725234127": "image2117989725234127"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [4, 8, 4, 2],
        "marginInPixel": false,
        "padding": [4, 0, 4, 4],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmSegInvertRotaryView.add(labelfrmSeg6, segment2117989725234071);
};

function frmSegInvertRotaryViewGlobals() {
    frmSegInvertRotaryView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegInvertRotaryView,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmSegInvertRotaryView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Inverted rotary view"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["labelfrmSeg6", "segment2117989725234071"],
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
    frmSegInvertRotaryView.info = {
        "kuid": "p2kwiet12889314952551"
    };
};
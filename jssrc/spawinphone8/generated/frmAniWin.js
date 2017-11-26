function addWidgetsfrmAniWin() {
    var hboxTitleWin = new kony.ui.Box({
        "focusSkin": "headBox",
        "id": "hboxTitleWin",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblTitleWin = new kony.ui.Label({
        "id": "lblTitleWin",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Transitions"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [5, 5, 5, 5],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    hboxTitleWin.add(lblTitleWin);
    var segWin = new kony.ui.SegmentedUI2({
        "data": [{
            "lblWin": "Rotate3DSingle"
        }, {
            "lblWin": "Rotate3DDual"
        }, {
            "lblWin": "Slide"
        }, {
            "lblWin": "Pop"
        }, {
            "lblWin": "Squeze"
        }],
        "groupCells": false,
        "id": "segWin",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet1288931495232_segWin_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495127,
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
            "lblWin": "lblWin"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmAniWin.add(hboxTitleWin, segWin);
};

function frmAniWinGlobals() {
    frmAniWin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniWin,
        "enabledForIdleTimeout": false,
        "id": "frmAniWin",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Transitions"
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
    frmAniWin.info = {
        "kuid": "p2kwiet1288931495232"
    };
};
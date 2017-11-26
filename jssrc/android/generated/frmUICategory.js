function addWidgetsfrmUICategory() {
    var uiCatSeg = new kony.ui.SegmentedUI2({
        "data": [{
            "lblUICategory": "Container Widgets"
        }, {
            "lblUICategory": "Basic Widgets"
        }, {
            "lblUICategory": "Advanced Widgets"
        }, {
            "lblUICategory": "Flex Layout"
        }],
        "groupCells": false,
        "id": "uiCatSeg",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314953282_uiCatSeg_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495261,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true
            }
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblUICategory": "lblUICategory"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    frmUICategory.add(uiCatSeg);
};

function frmUICategoryGlobals() {
    frmUICategory = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmUICategory,
        "enabledForIdleTimeout": false,
        "id": "frmUICategory",
        "needAppMenu": true,
        "skin": "frm",
        "title": "User Interface"
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
    frmUICategory.info = {
        "kuid": "p2kwiet12889314953282"
    };
};
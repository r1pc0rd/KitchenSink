function addWidgetsfrmLstItems() {
    var hbox103994549623663 = new kony.ui.Box({
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
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "List"
    }, {
        "containerWeight": 97,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    hbox103994549623663.add(label103994549623664);
    var segFirst = new kony.ui.SegmentedUI2({
        "data": [{
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem1"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem2"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem3"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem4"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem5"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem6"
        }],
        "groupCells": false,
        "id": "segFirst",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495177,
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
            "hbox192822373931793": "hbox192822373931793",
            "image2192822373931794": "image2192822373931794",
            "lblFirst": "lblFirst"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmLstItems.add(hbox103994549623663, segFirst);
};

function frmLstItemsGlobals() {
    frmLstItems = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLstItems,
        "enabledForIdleTimeout": false,
        "id": "frmLstItems",
        "needAppMenu": true,
        "skin": "frm",
        "title": "List"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "leftCenter"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmLstItems.info = {
        "kuid": "p2kwiet12889314951818"
    };
};
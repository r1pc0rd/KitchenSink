function addWidgetsfrmMap() {
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
        "text": "Map"
    }, {
        "containerWeight": 100,
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
    var mapNrm = new kony.ui.Map({
        "calloutWidth": 80,
        "id": "mapNrm",
        "isVisible": true,
        "locationData": [{
            "desc": "Phoenix infocity, Gachibowli",
            "lat": "17.447326",
            "lon": "78.371358",
            "name": "KonyLabs(New)"
        }, {
            "desc": "Mindspace, Hitech City",
            "lat": "17.441839",
            "lon": "78.380928",
            "name": "KonyLabs(Old)"
        }, {
            "desc": "Jaihind Enclave, Madhapur",
            "lat": "17.450378",
            "lon": "78.388398",
            "name": "My Residence"
        }],
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "screenLevelWidget": true
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false
    }, {
        "mapSource": constants.MAP_SOURCE_NON_NATIVE,
        "mode": constants.MAP_VIEW_MODE_NORMAL
    });
    frmMap.add(hbox103994549623663, mapNrm);
};

function frmMapGlobals() {
    frmMap = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMap,
        "enabledForIdleTimeout": false,
        "id": "frmMap",
        "needAppMenu": true,
        "preShow": p2kwiet12889314951826_frmMap_preshow_seq0,
        "skin": "frm",
        "title": "Map"
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
    frmMap.info = {
        "kuid": "p2kwiet12889314951826"
    };
};
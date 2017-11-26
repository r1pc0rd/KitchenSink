function addWidgetsfrmCamOrient() {
    var camera1930040990139485 = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "camFocus",
        "id": "camera1930040990139485",
        "isVisible": true,
        "onCapture": p2kwiet1288931495588_camera1930040990139485_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "Portrait"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "tapAnywhere": false
        }
    });
    var camera1930040990139495 = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "camFocus",
        "id": "camera1930040990139495",
        "isVisible": true,
        "onCapture": p2kwiet1288931495588_camera1930040990139495_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "Landscape"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "tapAnywhere": false
        }
    });
    var hbox1930040990139516 = new kony.ui.Box({
        "id": "hbox1930040990139516",
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
    var imgCamPortrait = new kony.ui.Image2({
        "id": "imgCamPortrait",
        "isVisible": true
    }, {
        "containerWeight": 48,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 315,
        "referenceWidth": 207,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgCamLand = new kony.ui.Image2({
        "id": "imgCamLand",
        "isVisible": true
    }, {
        "containerWeight": 52,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 315,
        "referenceWidth": 207,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1930040990139516.add(imgCamPortrait, imgCamLand);
    var lblFrmCamOrient = new kony.ui.Label({
        "id": "lblFrmCamOrient",
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
        "textCopyable": false
    });
    frmCamOrient.add(camera1930040990139485, camera1930040990139495, hbox1930040990139516, lblFrmCamOrient);
};

function frmCamOrientGlobals() {
    frmCamOrient = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCamOrient,
        "enabledForIdleTimeout": false,
        "id": "frmCamOrient",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Orientation"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
    frmCamOrient.info = {
        "kuid": "p2kwiet1288931495588"
    };
};
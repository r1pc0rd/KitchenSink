function addWidgetsfrmCameraFrmOverlay() {
    var cameraFrmOverLay = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "camFocus",
        "id": "cameraFrmOverLay",
        "isVisible": true,
        "onCapture": p2kwiet1288931495565_cameraFrmOverLay_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "Capture image"
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
        "enableOverlay": true,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "overlayForm": frmCameraOverlaid,
            "tapAnywhere": false
        }
    });
    var hbox1927508755138413 = new kony.ui.Box({
        "id": "hbox1927508755138413",
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
    var image21927508755138414 = new kony.ui.Image2({
        "id": "image21927508755138414",
        "isVisible": true,
        "src": "frame1.png"
    }, {
        "containerWeight": 31,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [2, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 70,
        "referenceWidth": 100,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21927508755138415 = new kony.ui.Image2({
        "id": "image21927508755138415",
        "isVisible": true,
        "src": "frame2.png"
    }, {
        "containerWeight": 34,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [2, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 70,
        "referenceWidth": 100,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imageFrmCamFrmOverRef = new kony.ui.Image2({
        "id": "imageFrmCamFrmOverRef",
        "isVisible": true
    }, {
        "containerWeight": 35,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 70,
        "referenceWidth": 100,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1927508755138413.add(image21927508755138414, image21927508755138415, imageFrmCamFrmOverRef);
    var lblFrmCamOverlay = new kony.ui.Label({
        "id": "lblFrmCamOverlay",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    frmCameraFrmOverlay.add(cameraFrmOverLay, hbox1927508755138413, lblFrmCamOverlay);
};

function frmCameraFrmOverlayGlobals() {
    frmCameraFrmOverlay = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCameraFrmOverlay,
        "enabledForIdleTimeout": false,
        "id": "frmCameraFrmOverlay",
        "needAppMenu": true,
        "title": "Form Overlay"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
    frmCameraFrmOverlay.info = {
        "kuid": "p2kwiet1288931495565"
    };
};
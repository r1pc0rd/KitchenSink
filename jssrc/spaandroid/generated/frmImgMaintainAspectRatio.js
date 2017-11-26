function addWidgetsfrmImgMaintainAspectRatio() {
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
        "text": "Maintain aspect ratio"
    }, {
        "containerWeight": 95,
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
    var labelimg = new kony.ui.Label({
        "id": "labelimg",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Image aspect ratio is same as original image"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [4, 6, 4, 3],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var labelori = new kony.ui.Label({
        "id": "labelori",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Original image aspect ratio = 5:4"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [4, 3, 4, 3],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var labeloriasp = new kony.ui.Label({
        "id": "labeloriasp",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Aspect ratio of referenceWidth and referenceHeight = 2:1"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [4, 3, 4, 3],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox19338245768 = new kony.ui.Box({
        "id": "hbox19338245768",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [4, 3, 4, 3],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var imgOriginal2 = new kony.ui.Image2({
        "id": "imgOriginal2",
        "isVisible": true,
        "src": "koala_250x200.png"
    }, {
        "containerWeight": 45,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 100,
        "referenceWidth": 200,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var labelno = new kony.ui.Label({
        "id": "labelno",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 53,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    hbox19338245768.add(imgOriginal2, labelno);
    var line2 = new kony.ui.Line({
        "id": "line2",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var labelimgrefwdht = new kony.ui.Label({
        "id": "labelimgrefwdht",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "The below image is of size 600x600 with 300 x300 referenceWidth and referenceHeight"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 3, 4, 3],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var line3 = new kony.ui.Line({
        "id": "line3",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 2, 0, 2],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var imgRefWdHt = new kony.ui.Image2({
        "id": "imgRefWdHt",
        "isVisible": true,
        "src": "kolalala.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [4, 3, 4, 3],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 300,
        "referenceWidth": 300,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var line4 = new kony.ui.Line({
        "id": "line4",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 2, 0, 2],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    frmImgMaintainAspectRatio.add(hbox103994549623663, labelimg, labelori, labeloriasp, line1, hbox19338245768, line2, labelimgrefwdht, line3, imgRefWdHt, line4);
};

function frmImgMaintainAspectRatioGlobals() {
    frmImgMaintainAspectRatio = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmImgMaintainAspectRatio,
        "enabledForIdleTimeout": false,
        "id": "frmImgMaintainAspectRatio",
        "needAppMenu": true,
        "title": "Maintain aspect ratio"
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
    frmImgMaintainAspectRatio.info = {
        "kuid": "frmImgMaintainAspectRatioSPAAndroid"
    };
};
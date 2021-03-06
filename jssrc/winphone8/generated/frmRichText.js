function addWidgetsfrmRichText() {
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
        "text": "Rich text"
    }, {
        "containerWeight": 97,
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
    var richtext121043100817155 = new kony.ui.RichText({
        "enableCache": false,
        "id": "richtext121043100817155",
        "isVisible": true,
        "skin": "richNormalSimilar",
        "text": "<b>This is bold text  </b>\n<br/>\n<br/>\n<u>This is underlined text</u>\n<br/>\n<br/>\n <label style=\"color:#F25E22\">This is text with font color</label> \n<br/>\n<br/>\n<i>This is italic text</i>\n<br/>\n<br/>\n<b>This is</b> <sub>Subscript</sub> \n<br/>\n<br/>\n<b>This is</b><sup>Superscript</sup> <br/><br/>\n<font color=\"white\"><a href=\"http://www.kony.com\">This is link (Click to visit kony.com)</a></font>\n<br/><br/>\n<b>Below is an image</b><br/>\n<img src=\"http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080525/1211728825.png\" alt=\"image\" height=\"60\" width=\"60\" ></img>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [12, 15, 12, 12],
        "marginInPixel": true,
        "padding": [2, 2, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmRichText.add(hbox103994549623663, richtext121043100817155);
};

function frmRichTextGlobals() {
    frmRichText = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRichText,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmRichText",
        "needAppMenu": true,
        "skin": "frm",
        "title": "RichText"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbox103994549623663", "label103994549623664", "richtext121043100817155"],
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
    frmRichText.info = {
        "kuid": "p2kwiet12889314951951"
    };
};
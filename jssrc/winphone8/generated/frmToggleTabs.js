function addWidgetsfrmToggleTabs() {
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
        "text": "Toggle tabs"
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
    var tabpane1181029310125057 = new kony.ui.TabPane({
        "activeFocusSkin": "tabFocus",
        "activeSkin": "tabActive",
        "enableCache": false,
        "id": "tabpane1181029310125057",
        "inactiveSkin": "tabInactive",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "screenLevelWidget": false,
        "viewConfig": {
            "collapsibleViewConfig": {
                "collapsedImage": "tabup.png",
                "expandedImage": "tabdown.png",
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_LEFT,
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "toggleTabs": true
            },
            "pageViewConfig": {
                "needPageIndicator": true
            },
            "tabViewConfig": {
                "headerContainerWeight": "50",
                "headerPosition": constants.TAB_HEADER_POSITION_TOP
            },
        },
        "viewType": constants.TABPANE_VIEW_TYPE_COLLAPSIBLEVIEW
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "margin": [2, 6, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var tab1181029310125059 = new kony.ui.Box({
        "clipBounds": true,
        "enableCache": false,
        "id": "tab1181029310125059",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 1,
        "tabName": "Tab1"
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true
    }, {});
    var richtext1181029310125061 = new kony.ui.RichText({
        "enableCache": false,
        "id": "richtext1181029310125061",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "<p>KonyOne provides a world-class development environment and mobile middleware for both business & consumer applications. KonyOne incorporates industry - tested scalability and supports every technology and deployment option available today - including truly native apps on all native OSs, thousands of devices including those with HTML5 capable browser, Single Page Applications, Wrappers, Hybrids, and traditional URL-based applications.</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tab1181029310125059.add(richtext1181029310125061);
    tabpane1181029310125057.addTab("tab1181029310125059", "Tab1", null, tab1181029310125059, null);
    var tab1181029310125063 = new kony.ui.Box({
        "clipBounds": true,
        "enableCache": false,
        "id": "tab1181029310125063",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 1,
        "tabName": "Tab2"
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true
    }, {});
    var richtext1181029310125065 = new kony.ui.RichText({
        "enableCache": false,
        "id": "richtext1181029310125065",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "<p>KonyOne's device detection database and heuristics identifies all browser categories from the most basic through different levels of HTML, CSS and JavaScript support, to all of the various HTML5-capable browsers in smartphones, tablets and the desktop. Depending on the type of browser, the user will be served markup, style and/or script appropriate and acceptable to their device, ensuring a solid experience and optimum UI.</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tab1181029310125063.add(richtext1181029310125065);
    tabpane1181029310125057.addTab("tab1181029310125063", "Tab2", null, tab1181029310125063, null);
    var tab1181029310125067 = new kony.ui.Box({
        "clipBounds": true,
        "enableCache": false,
        "id": "tab1181029310125067",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 1,
        "tabName": "Tab3"
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true
    }, {});
    var richtext1181029310125069 = new kony.ui.RichText({
        "enableCache": false,
        "id": "richtext1181029310125069",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "<p>Solutions for your customers, employees, vendors and partners.Configurable,  Extensible with Universal Integration.Stunning User Experience.Support for All Technologies and Devices.\n</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tab1181029310125067.add(richtext1181029310125069);
    tabpane1181029310125057.addTab("tab1181029310125067", "Tab3", null, tab1181029310125067, null);
    frmToggleTabs.add(hbox103994549623663, tabpane1181029310125057);
};

function frmToggleTabsGlobals() {
    frmToggleTabs = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmToggleTabs,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmToggleTabs",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Toggle Tabs"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbox103994549623663", "label103994549623664", "tabpane1181029310125057"],
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
    frmToggleTabs.info = {
        "kuid": "p2kwiet12889314953174"
    };
};
function addWidgetsfrmDatagrd() {
    var label118085056438503 = new kony.ui.Label({
        "id": "label118085056438503",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Default datagrid"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 12, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var datagrid103994549624149 = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "First",
            "columnID": "a",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Second",
            "columnID": "b",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Third",
            "columnID": "c",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, ],
        "data": [{
            "a": "A",
            "b": "E",
            "c": "HELLO"
        }, {
            "a": "B",
            "b": "D",
            "c": "WORLD"
        }, {
            "a": "C",
            "b": "C",
            "c": "HELLO"
        }, {
            "a": "D",
            "b": "B",
            "c": "WORLD"
        }, {
            "a": "E",
            "b": "A",
            "c": "HELLO"
        }],
        "headerSkin": "dgHead",
        "id": "datagrid103994549624149",
        "isMultiSelect": false,
        "isVisible": true,
        "rowAlternateSkin": "dgRow",
        "rowCount": 4,
        "rowFocusSkin": "dgFocus",
        "rowNormalSkin": "dgRow",
        "showColumnHeaders": true
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "padding": [3, 6, 3, 6],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "gridlineColor": "5c5c5c"
    });
    var label118085056438537 = new kony.ui.Label({
        "id": "label118085056438537",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Datagrid with images"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var datagrid118085056438159 = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Audi",
            "columnID": "Audi",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Ford",
            "columnID": "Ford",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Skoda",
            "columnID": "Skoda",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, ],
        "data": [{
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }],
        "headerSkin": "dgHead",
        "id": "datagrid118085056438159",
        "isMultiSelect": false,
        "isVisible": true,
        "rowAlternateSkin": "dgRow",
        "rowCount": 4,
        "rowFocusSkin": "dgFocus",
        "rowNormalSkin": "dgRow",
        "showColumnHeaders": true
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "gridlineColor": "5c5c5c"
    });
    var label118085056439129 = new kony.ui.Label({
        "id": "label118085056439129",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Datagrid with Row skins"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var datagrid118085056439309 = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Audi",
            "columnID": "Audi",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Ford",
            "columnID": "Ford",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Skoda",
            "columnID": "Skoda",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, ],
        "data": [{
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }],
        "headerSkin": "dgHead",
        "id": "datagrid118085056439309",
        "isMultiSelect": false,
        "isVisible": true,
        "rowAlternateSkin": "dGridRowNormal",
        "rowCount": 4,
        "rowFocusSkin": "dGridRowFocus",
        "rowNormalSkin": "dGridRowNormal",
        "showColumnHeaders": true
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "gridlineColor": "5c5c5c"
    });
    var label118085056439396 = new kony.ui.Label({
        "id": "label118085056439396",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Datagrid with Row alternate skins"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var datagrid118085056439441 = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Audi",
            "columnID": "Audi",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Ford",
            "columnID": "Ford",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Skoda",
            "columnID": "Skoda",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, ],
        "data": [{
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }],
        "headerSkin": "dgHead",
        "id": "datagrid118085056439441",
        "isMultiSelect": false,
        "isVisible": true,
        "rowAlternateSkin": "dGridRowNormal",
        "rowCount": 4,
        "rowFocusSkin": "dgFocus",
        "rowNormalSkin": "dgRow",
        "showColumnHeaders": true
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "gridlineColor": "5c5c5c"
    });
    var label1181029310128738 = new kony.ui.Label({
        "id": "label1181029310128738",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Datagrid with Text and Image"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var datagrid1181029310128779 = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Audi",
            "columnID": "Audi",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Ford",
            "columnID": "Ford",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Skoda",
            "columnID": "Skoda",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, ],
        "data": [{
            "Audi": "A",
            "Ford": "F",
            "Skoda": "skoda.png"
        }, {
            "Audi": "A",
            "Ford": "F",
            "Skoda": "skoda.png"
        }, {
            "Audi": "A",
            "Ford": "F",
            "Skoda": "skoda.png"
        }, {
            "Audi": "A",
            "Ford": "F",
            "Skoda": "skoda.png"
        }],
        "headerSkin": "dgHead",
        "id": "datagrid1181029310128779",
        "isMultiSelect": false,
        "isVisible": true,
        "rowAlternateSkin": "dgRow",
        "rowCount": 4,
        "rowFocusSkin": "dgFocus",
        "rowNormalSkin": "dgRow",
        "showColumnHeaders": true
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "gridlineColor": "5c5c5c"
    });
    frmDatagrd.add(label118085056438503, datagrid103994549624149, label118085056438537, datagrid118085056438159, label118085056439129, datagrid118085056439309, label118085056439396, datagrid118085056439441, label1181029310128738, datagrid1181029310128779);
};

function frmDatagrdGlobals() {
    frmDatagrd = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDatagrd,
        "enabledForIdleTimeout": false,
        "id": "frmDatagrd",
        "needAppMenu": true,
        "skin": "frm",
        "title": "DataGrid"
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
    frmDatagrd.info = {
        "kuid": "p2kwiet1288931495875"
    };
};
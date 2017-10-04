//Empty Widget to inclulde jQuery Libs
define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase"
], function (declare, _WidgetBase) {
    return declare("jQueryLib.widget.jQueryLib", [ _WidgetBase ], {
        inputargs: {
            name: ""
        }
    });
});
require(["jQueryLib/widget/jQueryLib"]);

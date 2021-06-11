System.register([], function (exports_1, context_1) {
    "use strict";
    var Activity;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Activity = class Activity {
                constructor(description) {
                    this._description = description;
                }
                get description() {
                    return this._description;
                }
                showActivity() {
                    this.description;
                    console.log(this.description);
                }
            };
            exports_1("Activity", Activity);
        }
    };
});

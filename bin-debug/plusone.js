var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var PlusOne = (function (_super) {
    __extends(PlusOne, _super);
    function PlusOne() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=PlusOne;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "<s:Panel title=\"吹口气\" width=\"794\" height=\"620\" horizontalCenter=\"0\" verticalCenter=\"0\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Skin>\n                <s:Image width=\"100%\" height=\"100%\" source=\"resources/plusone/1_bg.png\" />\n                <s:Image left=\"50\" top=\"50\" width=\"50\" height=\"50\" source=\"resources/plusone/close_btn.png\" />\n                <s:Group id=\"grp_btn\" bottom=\"40\" width=\"100%\" height=\"126\">\n                    <s:Image width=\"100%\" height=\"100%\" source=\"resources/plusone/history_btn.png\" />\n                    <s:Image width=\"100%\" height=\"100%\" source=\"resources/plusone/share_btn.png\" />\n                </s:Group>\n            </s:Skin>\n        </s:Panel>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
        var layout = new swan.HorizontalLayout();
        layout.gap = 62;
        panel.grp_btn.layout = layout;
    };
    return PlusOne;
})(lark.Sprite);
lark.registerClass(PlusOne,"PlusOne");

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var TestMask = (function (_super) {
    __extends(TestMask, _super);
    function TestMask() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=TestMask;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "\n        <s:Panel width=\"100%\" height=\"100%\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Group id=\"img_group\" width=\"300\"  top=\"0\" height=\"100%\">\n                <s:Image id=\"img_1\" width=\"300\" height=\"300\" source=\"resources/test/1.png\"/>\n            </s:Group>\n            <s:Image visible=\"false\" id=\"mask_img\" alpha=\"0.1\" width=\"100%\" height=\"100%\" source=\"resources/gray.png\"/>\n        </s:Panel>\n        ";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
        panel.mask = panel.mask_img;
    };
    return TestMask;
})(lark.Sprite);
lark.registerClass(TestMask,"TestMask");

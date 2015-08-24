var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var TestPopPanel = (function (_super) {
    __extends(TestPopPanel, _super);
    function TestPopPanel() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=TestPopPanel;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "\n        <s:Panel width=\"100%\" height=\"100%\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Group id=\"img_group\" width=\"100%\"  height=\"100%\">\n                <s:Image id=\"img_1\" width=\"960\" height=\"1600\" source=\"resources/test/1.png\"/>\n            </s:Group>\n            <s:Image id=\"mask_img\" visible=\"false\" alpha=\"0.3\" width=\"100%\" height=\"100%\" source=\"resources/gray.png\"/>\n        </s:Panel>\n        ";
        var clazz = EXML.parse(exml);
        var panel1 = new clazz();
        this.addChild(panel1);
        this.panel1 = panel1;
        this.maskImg = panel1.mask_img;
        panel1.on(lark.TouchEvent.TOUCH_TAP, this.tap, this);
    };
    p.tap = function (e) {
        var pop = "\n        <s:Panel width=\"50%\" height=\"50%\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Image id=\"mask_img\" width=\"100%\" height=\"100%\" source=\"resources/red.png\"/>\n            <s:Group id=\"img_group\" width=\"100%\"  height=\"100%\">\n                <s:Image id=\"img_1\" width=\"400\" height=\"400\" source=\"resources/test/2.png\"/>\n            </s:Group>\n        </s:Panel>\n        ";
        var clazz = EXML.parse(pop);
        var panel = new clazz();
        this.addChild(panel);
        panel.x = (panel.stage.stageWidth - panel.width) / 2;
        panel.y = (panel.stage.stageHeight - panel.height) / 2;
        this.panel1.mask = this.maskImg;
    };
    return TestPopPanel;
})(lark.Sprite);
lark.registerClass(TestPopPanel,"TestPopPanel");

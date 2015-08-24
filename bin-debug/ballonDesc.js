var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var BallonDesc = (function (_super) {
    __extends(BallonDesc, _super);
    function BallonDesc() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=BallonDesc;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "<s:Panel title=\"详情\" width=\"794\" height=\"824\" horizontalCenter=\"0\" verticalCenter=\"0\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Skin>\n                <s:Group top=\"0\" width=\"100%\" height=\"120\">\n                    <s:Image verticalCenter=\"0\" left=\"50\" width=\"50\" height=\"50\" source=\"resources/ballon_desc/close_btn.png\" />\n                    <s:Label verticalCenter=\"0\" horizontalCenter=\"0\" fontSize=\"42\" fontFamily=\"SimHei\" text=\"女生基本信息\" textColor=\"0xe85846\" />\n                </s:Group>\n                <s:Image top=\"120\" left=\"0\" width=\"100%\" height=\"628\" source=\"resources/ballon_desc/meinv.jpg\" />\n                <s:Group id=\"bottom_dot\" bottom=\"0\" width=\"100%\" height=\"76\">\n                    <s:Image verticalCenter=\"0\" horizontalCenter=\"-100\" width=\"28\" height=\"28\" source=\"resources/ballon_desc/dot.png\" />\n                    <s:Image verticalCenter=\"0\" horizontalCenter=\"0\" width=\"28\" height=\"28\" source=\"resources/ballon_desc/dot.png\" />\n                    <s:Image verticalCenter=\"0\" horizontalCenter=\"100\" width=\"28\" height=\"28\" source=\"resources/ballon_desc/dot.png\" />\n                </s:Group>\n            </s:Skin>\n        </s:Panel>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        //panel.width=panel.stage.stageWidth;
        //panel.height=panel.stage.stageHeight;
        this.addChild(panel);
        var layout = new swan.HorizontalLayout();
        layout.gap = 56;
        layout.verticalAlign = "middle";
        layout.horizontalAlign = "middle";
        //panel.bottom_dot.layout = layout;
    };
    return BallonDesc;
})(lark.Sprite);
lark.registerClass(BallonDesc,"BallonDesc");

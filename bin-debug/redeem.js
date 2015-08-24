var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var Redeem = (function (_super) {
    __extends(Redeem, _super);
    function Redeem() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Redeem;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "<s:Panel title=\"详情\" width=\"794\" height=\"1014\" horizontalCenter=\"0\" verticalCenter=\"0\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Skin>\n                <s:Image width=\"100%\" height=\"100%\" source=\"resources/white.png\" />\n                <s:Image left=\"50\" top=\"50\" width=\"50\" height=\"50\" source=\"resources/plusone/close_btn.png\" />\n                <s:Image horizontalCenter=\"0\" top=\"44\" width=\"238\" height=\"238\" source=\"resources/redeem/profile_bg.png\" />\n                <s:Label text=\"Zac Yang\" top=\"312\" horizontalCenter=\"0\" fontSize=\"52\" />\n                <s:Group id=\"grp_mny\" top=\"408\" horizontalCenter=\"0\" >\n                    <s:Label verticalCenter=\"0\" left=\"68\" text=\"余额\" fontSize=\"52\"  />\n                    <s:Image verticalCenter=\"0\" left=\"500\" width=\"56\" height=\"56\" source=\"resources/redeem/money_icon.png\" />\n                    <s:Label verticalCenter=\"0\" left=\"560\" text=\"50吹币\" fontSize=\"52\"  />\n                </s:Group>\n\n                <s:Image top=\"496\" width=\"100%\" height=\"1\" source=\"resources/gray.png\" />\n                <s:Group id=\"grp_money_1\" width=\"100%\" top=\"536\" left=\"20\" height=\"240\" >\n                    <s:Image width=\"226\" height=\"92\" source=\"resources/redeem/5-yuan.png\" />\n                    <s:Image width=\"226\" height=\"92\" source=\"resources/redeem/10-yuan.png\" />\n                    <s:Image width=\"226\" height=\"92\" source=\"resources/redeem/50-yuan.png\" />\n                </s:Group>\n                <s:Group id=\"grp_money_2\" width=\"100%\" top=\"684\" left=\"20\" height=\"240\" >\n                    <s:Image width=\"226\" height=\"92\" source=\"resources/redeem/100-yuan.png\" />\n                    <s:Image width=\"226\" height=\"92\" source=\"resources/redeem/200-yuan.png\" />\n                    <s:Image width=\"226\" height=\"92\" source=\"resources/redeem/500-yuan.png\" />\n                </s:Group>\n                <s:Image width=\"100%\" height=\"146\" bottom=\"0\" source=\"resources/redeem/btn_redeem.png\" />\n            </s:Skin>\n        </s:Panel>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
        var layout1 = new swan.HorizontalLayout();
        //panel.grp_mny.layout=layout1;
        var layout2 = new swan.HorizontalLayout();
        layout2.gap = 40;
        var layout3 = new swan.HorizontalLayout();
        layout3.gap = 40;
        panel.grp_money_1.layout = layout2;
        panel.grp_money_2.layout = layout3;
    };
    return Redeem;
})(lark.Sprite);
lark.registerClass(Redeem,"Redeem");

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var Register = (function (_super) {
    __extends(Register, _super);
    function Register() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Register;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "<s:Panel title=\"详情\" width=\"794\" height=\"824\" horizontalCenter=\"0\" verticalCenter=\"0\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Skin>\n                <s:Image width=\"100%\" height=\"100%\" source=\"resources/white.png\" />\n                <s:Group top=\"0\" width=\"100%\" height=\"120\">\n                    <s:Image verticalCenter=\"0\" left=\"50\" width=\"50\" height=\"50\" source=\"resources/register/close_btn.png\" />\n                    <s:Label verticalCenter=\"0\" horizontalCenter=\"0\" fontSize=\"42\" fontFamily=\"SimHei\" text=\"注册登录\" textColor=\"0xe85846\" />\n                </s:Group>\n                <s:Group top=\"120\" width=\"100%\" height=\"628\">\n                    <s:Image width=\"100%\" height=\"100%\" source=\"resources/red.png\" />\n                    <s:Image horizontalCenter=\"0\" top=\"116\" width=\"364\" height=\"196\" source=\"resources/register/logo.png\" />\n                </s:Group>\n                <s:Group id=\"group_btn\" width=\"100%\" height=\"168\" top=\"548\">\n                    <s:Button id=\"sing_up_btn\" left=\"46\">\n                        <s:Skin states=\"up,down,disabled\">\n                            <s:Image id=\"event_btn_skin\"  source=\"resources/register/sign_up_btn.png\" width=\"328\" height=\"168\" scaleX.up=\"1\" scaleX.down=\"0.95\" scaleY.up=\"1\" scaleY.down=\"0.95\"/>\n                        </s:Skin>\n                    </s:Button>\n                    <s:Button id=\"login_btn\" right=\"46\" >\n                        <s:Skin states=\"up,down,disabled\">\n                            <s:Image id=\"event_btn_skin\" source=\"resources/register/login_btn.png\" width=\"328\" height=\"166\" scaleX.up=\"1\" scaleX.down=\"0.95\" scaleY.up=\"1\" scaleY.down=\"0.95\"/>\n                        </s:Skin>\n                    </s:Button>\n                </s:Group>\n            </s:Skin>\n        </s:Panel>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
    };
    return Register;
})(lark.Sprite);
lark.registerClass(Register,"Register");

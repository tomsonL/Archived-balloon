var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var Register2 = (function (_super) {
    __extends(Register2, _super);
    function Register2() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Register2;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "<s:Group width=\"960\" height=\"1600\" xmlns:s=\"http://ns.egret.com/swan\">\n                <s:Image width=\"100%\" height=\"192\" source=\"resources/register/vertify_topbanner.png\" />\n                <s:Group top=\"192\" width=\"100%\" height=\"152\">\n                    <s:Image width=\"100%\" height=\"152\" source=\"resources/gray.png\"/>\n                    <s:Label verticalCenter=\"0\" horizontalCenter=\"0\" textColor=\"#eeeeee\" text=\"你将收到一条包含验证码的短信\" fontSize=\"36\" />\n                </s:Group>\n                <s:Group top=\"344\" width=\"100%\" height=\"152\">\n                    <s:Image verticalCenter=\"0\" left=\"50\" width=\"38\" height=\"64\"  source=\"resources/register/phone_icon.png\" />\n                    <s:EditableText verticalCenter=\"0\" fontSize=\"52\" left=\"166\" height=\"64\" text=\"验证码\" textColor=\"#bbbbbb\" />\n                    <s:Group verticalCenter=\"0\" right=\"50\" width=\"314\" height=\"90\">\n                        <s:Image width=\"100%\" height=\"100%\" source=\"resources/gray.png\" />\n                        <s:Label verticalCenter=\"0\" horizontalCenter=\"0\" textColor=\"#eeeeee\" text=\"再发一次(30s)\" fontSize=\"36\" />\n                    </s:Group>\n                </s:Group>\n                <s:Image top=\"496\" width=\"100%\" height=\"150\" source=\"resources/register/confirm_btn.png\" />\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
    };
    return Register2;
})(lark.Sprite);
lark.registerClass(Register2,"Register2");

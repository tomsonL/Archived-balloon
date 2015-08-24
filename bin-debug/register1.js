var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var Register1 = (function (_super) {
    __extends(Register1, _super);
    function Register1() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Register1;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "<s:Group width=\"960\" height=\"1600\" xmlns:s=\"http://ns.egret.com/swan\">\n                <s:Image width=\"100%\" height=\"192\" source=\"resources/register/sign_up_top_banner.png\" />\n                <s:Group top=\"192\" width=\"100%\" height=\"152\">\n                    <s:Image verticalCenter=\"0\" left=\"50\" width=\"38\" height=\"64\"  source=\"resources/register/phone_icon.png\" />\n                    <s:EditableText verticalCenter=\"0\" fontSize=\"52\" left=\"166\" height=\"64\" text=\"手机号\" textColor=\"#bbbbbb\" />\n                    <s:Image bottom=\"0\" width=\"100%\" height=\"1\" source=\"resources/gray.png\"/>\n                </s:Group>\n                <s:Group top=\"344\" width=\"100%\" height=\"152\">\n                    <s:Image verticalCenter=\"0\" left=\"50\" width=\"38\" height=\"64\" source=\"resources/register/password_icon.png\" />\n                    <s:EditableText verticalCenter=\"0\" fontSize=\"52\" left=\"166\" height=\"64\" text=\"密码\" textColor=\"#bbbbbb\" />\n                    <s:Image bottom=\"0\" width=\"100%\" height=\"1\" source=\"resources/gray.png\"/>\n                </s:Group>\n                <s:Group top=\"592\" width=\"100%\" >\n                    <s:Image top=\"96\" width=\"100%\" height=\"150\" source=\"resources/register/confirm_signup_btn.png\" />\n                    <s:Label top=\"310\" horizontalCenter=\"0\" textColor=\"#bbbbbb\" text=\"点击“确认注册”标识你同意我们的用户协议\" fontSize=\"40\" />\n                </s:Group>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
    };
    return Register1;
})(lark.Sprite);
lark.registerClass(Register1,"Register1");

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var Register4 = (function (_super) {
    __extends(Register4, _super);
    function Register4() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Register4;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "<s:Group width=\"960\" height=\"1600\" xmlns:s=\"http://ns.egret.com/swan\">\n                <s:Image width=\"100%\" height=\"192\" source=\"resources/register/login_topbanner.png\" />\n                <s:Group top=\"192\" width=\"100%\" height=\"152\">\n                    <s:Image verticalCenter=\"0\" left=\"50\" width=\"38\" height=\"64\"  source=\"resources/register/phone_icon.png\" />\n                    <s:EditableText verticalCenter=\"0\" fontSize=\"52\" left=\"166\" height=\"64\" text=\"手机号\" textColor=\"#bbbbbb\" />\n                    <s:Image bottom=\"0\" width=\"100%\" height=\"1\" source=\"resources/gray.png\"/>\n                </s:Group>\n                <s:Group top=\"344\" width=\"100%\" height=\"152\">\n                    <s:Image verticalCenter=\"0\" left=\"50\" width=\"36\" height=\"64\" source=\"resources/register/password_icon.png\" />\n                    <s:EditableText verticalCenter=\"0\" fontSize=\"52\" left=\"166\" height=\"64\" text=\"密码\" textColor=\"#bbbbbb\" />\n                    <s:Image bottom=\"0\" width=\"100%\" height=\"1\" source=\"resources/gray.png\"/>\n                </s:Group>\n                <s:Group top=\"592\" width=\"100%\" >\n                    <s:Image top=\"96\" height=\"150\" width=\"100%\" source=\"resources/register/confirm_login_btn.png\" />\n                    <s:Label top=\"310\" right=\"50\" textColor=\"#bbbbbb\" text=\"我忘记了密码~\" fontSize=\"40\" />\n                </s:Group>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
    };
    return Register4;
})(lark.Sprite);
lark.registerClass(Register4,"Register4");

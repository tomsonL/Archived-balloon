var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var Register3 = (function (_super) {
    __extends(Register3, _super);
    function Register3() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Register3;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "<s:Group width=\"960\" height=\"1600\" xmlns:s=\"http://ns.egret.com/swan\">\n                <s:Image width=\"100%\" height=\"192\" source=\"resources/register/username_setting.png\" />\n                <s:Group top=\"192\" width=\"100%\" height=\"152\">\n                    <s:Image width=\"100%\" height=\"152\" source=\"resources/gray.png\"/>\n                    <s:Label verticalCenter=\"0\" horizontalCenter=\"0\" textColor=\"#eeeeee\" text=\"朋友可以通过用户名找到你哟\" fontSize=\"36\" />\n                </s:Group>\n                <s:Group top=\"344\" width=\"100%\" height=\"152\">\n                    <s:Image verticalCenter=\"0\" left=\"50\" width=\"62\" height=\"64\"  source=\"resources/register/profile_icon.png\" />\n                    <s:EditableText verticalCenter=\"0\" fontSize=\"52\" left=\"166\" height=\"64\" text=\"设置用户名(字母或数字)\" textColor=\"#bbbbbb\" />\n                </s:Group>\n                <s:Image top=\"496\" width=\"100%\" height=\"150\" source=\"resources/register/done_btn.png\" />\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
    };
    return Register3;
})(lark.Sprite);
lark.registerClass(Register3,"Register3");

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var TestInputBox = (function (_super) {
    __extends(TestInputBox, _super);
    function TestInputBox() {
        _super.call(this);
        var exml = "\n            <s:Panel title=\"input\" xmlns:s=\"http://ns.egret.com/swan\">\n                <s:Image  left=\"100\" top=\"100\" width=\"300\" height=\"80\" source=\"resources/gray.png\"/>\n                <s:EditableText left=\"100\" top=\"100\" width=\"300\" height=\"80\" textColor=\"0x2233cc\"  />\n            </s:Panel>\n\n\n           ";
        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        this.addChild(scroller);
    }
    var d = __define,c=TestInputBox;p=c.prototype;
    p.select = function (e) {
        lark.log(this.list.selectedItems);
    };
    return TestInputBox;
})(lark.Sprite);
lark.registerClass(TestInputBox,"TestInputBox");

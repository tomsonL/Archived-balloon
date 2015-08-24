var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var TestAction = (function (_super) {
    __extends(TestAction, _super);
    function TestAction() {
        _super.call(this);
        var exml = "\n            <s:Panel title=\"input\" xmlns:s=\"http://ns.egret.com/swan\">\n                <s:Image id=\"img_id\" width=\"300\" height=\"80\" source=\"resources/gray.png\"/>\n            </s:Panel>\n           ";
        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        this.addChild(scroller);
        this.tupian = scroller.img_id;
        this.tupian.x = 100;
        this.tupian.y = 100;
        this.center = scroller.img_id.x;
        scroller.img_id.on(lark.Event.ENTER_FRAME, this.right_float, this);
    }
    var d = __define,c=TestAction;p=c.prototype;
    p.right_float = function (e) {
        e.target.x += 1;
        if (Math.abs(this.tupian.x - this.center) > 30) {
            this.tupian.removeListener(lark.Event.ENTER_FRAME, this.right_float, this);
            this.tupian.on(lark.Event.ENTER_FRAME, this.left_float, this);
        }
    };
    p.left_float = function (e) {
        e.target.x -= 1;
        if (Math.abs(this.tupian.x - this.center) > 30) {
            this.tupian.removeListener(lark.Event.ENTER_FRAME, this.left_float, this);
            this.tupian.on(lark.Event.ENTER_FRAME, this.right_float, this);
        }
    };
    return TestAction;
})(lark.Sprite);
lark.registerClass(TestAction,"TestAction");

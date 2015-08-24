var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var Test = (function (_super) {
    __extends(Test, _super);
    function Test() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Test;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "\n        <s:Panel width=\"100%\" height=\"800\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Group id=\"img_group\" width=\"900\"  top=\"0\" height=\"100%\">\n                <s:Image id=\"img_1\" width=\"300\" height=\"300\" source=\"resources/test/1.png\"/>\n                <s:Image id=\"img_2\" width=\"300\" height=\"300\" source=\"resources/test/2.png\"/>\n                <s:Image id=\"img_3\" width=\"300\" height=\"300\" source=\"resources/test/3.png\"/>\n            </s:Group>\n        </s:Panel>\n        ";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
        var layout = new swan.HorizontalLayout();
        layout.gap = 10;
        panel.img_group.layout = layout;
        this.img_group = panel.img_group;
        panel.img_group.on(lark.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        panel.img_group.on(lark.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    };
    p.onTouchBegin = function (e) {
        this.touch_start = e.stageX;
    };
    p.onTouchEnd = function (e) {
        this.touch_end = e.stageX;
        var abs = Math.abs(this.touch_end - this.touch_start);
        //右滑
        if (this.touch_end > this.touch_start && abs > 80) {
            this.start_x = this.img_group.x;
            this.img_group.on(lark.Event.ENTER_FRAME, this.right_slide, this);
        }
        //左滑
        if (this.touch_end < this.touch_start && abs > 80) {
            this.start_x = this.img_group.x;
            this.img_group.on(lark.Event.ENTER_FRAME, this.left_slide, this);
        }
    };
    p.right_slide = function (e) {
        this.img_group.x += 50;
        if (Math.abs(this.start_x - this.img_group.x) >= 300) {
            e.target.removeListener(lark.Event.ENTER_FRAME, this.right_slide, this);
        }
    };
    p.left_slide = function (e) {
        this.img_group.x -= 50;
        if (Math.abs(this.start_x - this.img_group.x) >= 300) {
            e.target.removeListener(lark.Event.ENTER_FRAME, this.left_slide, this);
        }
    };
    return Test;
})(lark.Sprite);
lark.registerClass(Test,"Test");

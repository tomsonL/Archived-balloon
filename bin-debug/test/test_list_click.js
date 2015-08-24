var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var TestListClick = (function (_super) {
    __extends(TestListClick, _super);
    function TestListClick() {
        _super.call(this);
        var exml = "<s:Scroller xmlns:s=\"http://ns.egret.com/swan\">\n                <s:List id=\"list\" width=\"200\" height=\"400\">\n                    <s:itemRenderer>\n                        <s:ItemRenderer states=\"up,down,disabled\" height=\"50\">\n                            <s:Label text=\"{data.label}\" textColor=\"0x000000\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                        </s:ItemRenderer>\n                    </s:itemRenderer>\n                </s:List>\n            </s:Scroller>";
        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        this.addChild(scroller);
        var list = scroller.list;
        this.list = list;
        var collection = new swan.ArrayCollection();
        for (var i = 0; i < 20; i++) {
            collection.addItem({ "label": "文本" + i });
        }
        list.dataProvider = collection;
        list.on(lark.TouchEvent.TOUCH_TAP, this.select, this);
    }
    var d = __define,c=TestListClick;p=c.prototype;
    p.select = function (e) {
        lark.log(this.list.selectedItems);
    };
    return TestListClick;
})(lark.Sprite);
lark.registerClass(TestListClick,"TestListClick");

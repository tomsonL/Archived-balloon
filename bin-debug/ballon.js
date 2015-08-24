var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var Ballon = (function (_super) {
    __extends(Ballon, _super);
    function Ballon() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Ballon;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "<s:Panel title=\"商品列表\" width=\"960\" height=\"1600\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Skin>\n            <s:Scroller id=\"scroller\" width=\"100%\">\n                <s:Group id=\"group_id\" width=\"100%\" top=\"0\">\n                    <s:Image left=\"50\" top=\"56\" width=\"42\" height=\"66\" source=\"resources/product_ballon/arrow.png\" />\n                    <s:Image left=\"0\" top=\"0\" width=\"96\" height=\"136\" horizontalCenter=\"0\" source=\"resources/product_ballon/needle.png\" />\n                    <s:Image left=\"848\" top=\"56\" width=\"66\" height=\"66\" source=\"resources/product_ballon/setting_btn.png\" />\n                    <s:Group bottom=\"10\">\n                        <s:Label id=\"lable_already\" fontSize=\"36\" fontFamily=\"SimHei\" textColor=\"0xe85846\" left=\"152\" top=\"1388\"/>\n                        <s:Label id=\"lable_left\" fontSize=\"36\" fontFamily=\"SimHei\" textColor=\"0xe85846\" left=\"560\" top=\"1388\"/>\n                        <s:Label id=\"lable_total\" fontSize=\"36\" fontFamily=\"SimHei\" textColor=\"0xe85846\" left=\"152\" top=\"1440\"/>\n                        <s:Image left=\"438\" top=\"1150\" width=\"158\" height=\"348\" source=\"resources/product_ballon/rope.png\" />\n                        <s:Image left=\"580\" top=\"1440\"  source=\"resources/product_ballon/press_btn.png\" />\n                            <s:Group id=\"group_time\" top=\"1232\" left=\"208\" width=\"536\">\n                                <s:Image width=\"66\" height=\"88\" source=\"resources/product_ballon/time_bg.png\" />\n                                <s:Image width=\"66\" height=\"88\" source=\"resources/product_ballon/time_bg.png\" />\n                                <s:Image top=\"58\" width=\"12\" height=\"36\" source=\"resources/product_ballon/colon.png\" />\n                                <s:Image width=\"66\" height=\"88\" source=\"resources/product_ballon/time_bg.png\" />\n                                <s:Image width=\"66\" height=\"88\" source=\"resources/product_ballon/time_bg.png\" />\n                                <s:Image top=\"58\" width=\"12\" height=\"36\" source=\"resources/product_ballon/colon.png\" />\n                                <s:Image width=\"66\" height=\"88\" source=\"resources/product_ballon/time_bg.png\" />\n                                <s:Image width=\"66\" height=\"88\" source=\"resources/product_ballon/time_bg.png\" />\n                            </s:Group>\n                            <s:Image left=\"148\" top=\"1340\" width=\"628\" height=\"28\" source=\"resources/gray.png\"/>\n                            <s:ProgressBar id=\"progress_bar\" width=\"628\" height=\"28\" left=\"148\" top=\"1340\" value=\"50\" minimum=\"0\" maximum=\"100\" >\n                                <s:Skin>\n                                    <s:Image id=\"thumb\" width=\"100%\" height=\"100%\" source=\"resources/red.png\" scale9Grid=\"1,1,4,4\"/>\n                                </s:Skin>\n                            </s:ProgressBar>\n                    </s:Group>\n                    <s:Image horizontalCenter=\"0\" alpha=\"0.95\" top=\"260\" width=\"70%\" height=\"60%\" source=\"resources/product_ballon/ballon.png\" />\n                </s:Group>\n                </s:Scroller>\n\n            </s:Skin>\n\n        </s:Panel>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        var layout = new swan.HorizontalLayout();
        layout.gap = 10;
        layout.verticalAlign = "middle";
        panel.group_time.layout = layout;
        panel.lable_already.text = "已被吹 4599 次";
        panel.lable_left.text = "还需吹 1412 次";
        panel.lable_total.text = "总需 6000 次";
        this.addChild(panel);
        panel.scroller.height = panel.stage.stageHeight;
        //        panel.lable_already.height = 22/(800/panel.stage.stageHeight);
        //alert(panel.lable_already.width+"*"+panel.lable_already.height);
        //alert(panel.stage.stageWidth+"*"+panel.stage.stageHeight);
        //alert(panel.width+"*"+panel.height);
    };
    return Ballon;
})(lark.Sprite);
lark.registerClass(Ballon,"Ballon");

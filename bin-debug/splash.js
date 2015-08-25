var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var Splash = (function (_super) {
    __extends(Splash, _super);
    function Splash() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Splash;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "<s:Panel width=\"960\" height=\"1600\" title=\"欢迎\" xmlns:s=\"http://ns.egret.com/swan\">\n                    <s:Skin>\n                        <s:Image id=\"blowHomeBg\" width=\"960\" height=\"100%\" source=\"resources/splash/blow_home_bg.png\"/>\n                        <s:Button id=\"start_btn\" left=\"92\" width=\"344\" height=\"178\" bottom=\"114\">\n                            <s:Skin states=\"up,down,disabled\">\n                                <s:Image id=\"start_btn_skin\" source=\"resources/splash/start_btn.png\" width=\"344\" height=\"178\" scaleX.up=\"1\" scaleX.down=\"0.95\" scaleY.up=\"1\" scaleY.down=\"0.95\"/>\n                            </s:Skin>\n                        </s:Button>\n                        <s:Button id=\"event_btn\" left=\"524\"  bottom=\"114\">\n                            <s:Skin states=\"up,down,disabled\">\n                                <s:Image id=\"event_btn_skin\" source=\"resources/splash/event_btn.png\" width=\"344\" height=\"178\" scaleX.up=\"1\" scaleX.down=\"0.95\" scaleY.up=\"1\" scaleY.down=\"0.95\"/>\n                            </s:Skin>\n                        </s:Button>\n                    </s:Skin>\n                </s:Panel>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
        panel.width = panel.stage.stageWidth;
        panel.height = panel.stage.stageHeight;
        var dispather = new Dispather();
        panel.start_btn.on(lark.TouchEvent.TOUCH_TAP, dispather.splashStart, this);
    };
    return Splash;
})(lark.Sprite);
lark.registerClass(Splash,"Splash");

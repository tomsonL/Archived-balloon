var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Splash = (function (_super) {
    __extends(Splash, _super);
    function Splash() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    Splash.prototype.onAddToStage = function (event) {
        var stageWidth = Math.min(this.stage.stageWidth, 480);
        var stageHeight = Math.min(this.stage.stageHeight, 800);
        var scaleX = stageWidth / 480;
        var scaleY = stageHeight / 800;
        var exml = "<s:Panel width=\"100%\" height=\"100%\" title=\"欢迎\" xmlns:s=\"http://ns.egret.com/swan\">\n                    <s:Skin>\n                        <s:Image id=\"blowHomeBg\" width=\"100%\" height=\"100%\" y=\"0\" source=\"resources/splash/blow_home_bg.png\" scale9Grid=\"1,1,4,4\"/>\n                        <s:Button id=\"start_btn\" left=\"46\" width=\"172\" height=\"89\" bottom=\"57\">\n                            <s:Skin states=\"up,down,disabled\">\n                                <s:Image id=\"start_btn_skin\" source=\"resources/splash/start_btn.png\" width=\"172\" height=\"89\" scaleX.up=\"1\" scaleX.down=\"0.95\" scaleY.up=\"1\" scaleY.down=\"0.95\"/>\n                            </s:Skin>\n                        </s:Button>\n                        <s:Button id=\"event_btn\" left=\"262\"  bottom=\"57\">\n                            <s:Skin states=\"up,down,disabled\">\n                                <s:Image id=\"event_btn_skin\" source=\"resources/splash/event_btn.png\" width=\"172\" height=\"89\" scaleX.up=\"1\" scaleX.down=\"0.95\" scaleY.up=\"1\" scaleY.down=\"0.95\"/>\n                            </s:Skin>\n                        </s:Button>\n                    </s:Skin>\n                </s:Panel>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        panel.scaleX = scaleX;
        panel.scaleY = scaleY;
        var dispather = new Dispather();
        panel.start_btn.on(lark.TouchEvent.TOUCH_TAP, dispather.splashStart, this);
        this.addChild(panel);
    };
    return Splash;
})(lark.Sprite);
//# sourceMappingURL=splash.js.map
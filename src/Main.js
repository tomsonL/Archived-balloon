var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        //var dispather = new Dispather;
        //this.on(lark.Event.ADDED_TO_STAGE,this.test,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.splash,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.productList,this);
        var imageLoader = new lark.ImageLoader();
        //imageLoader.load("http://img4.imgtn.bdimg.com/it/u=1966084478,4067726004&fm=23&gp=0.jpg");
        imageLoader.load("resources/splash/blow_home_bg.png");
        imageLoader.once(lark.Event.COMPLETE, this.showSplash, this);
        /*
        var register = new PanelExample();
        this.addChild(register);
        */
        /*
        var contanier = new lark.Sprite();
        var splash = new Splash();
        contanier.addChild(splash);
        this.addChild(contanier);
        //splash.width = contanier.stage.stageWidth;
        lark.log(this.stage);
        lark.log("wowowoowo");
         */
    }
    Main.prototype.test = function (e) {
        lark.log(this.stage.stageWidth + ":" + this.stage.stageHeight);
        //var stageWidth:number  = Math.min(this.stage.stageWidth, 480);
        //var stageHeight:number = Math.min(this.stage.stageHeight, 800);
        /*

        var exml =
            `<s:Panel width="100%" height="100%" title="欢迎" xmlns:s="http://ns.egret.com/swan">
                    <s:Skin>
                        <s:Image id="blowHomeBg" width="100%" height="100%" y="0" source="resources/splash/blow_home_bg.png" scale9Grid="1,1,4,4"/>
                        <s:Button id="start_btn" left="46" width="172" height="89" bottom="57">
                            <s:Skin states="up,down,disabled">
                                <s:Image id="start_btn_skin" source="resources/splash/start_btn.png" width="172" height="89" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                            </s:Skin>
                        </s:Button>
                        <s:Button id="event_btn" left="262"  bottom="57">
                            <s:Skin states="up,down,disabled">
                                <s:Image id="event_btn_skin" source="resources/splash/event_btn.png" width="172" height="89" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                            </s:Skin>
                        </s:Button>
                    </s:Skin>
                </s:Panel>`;
        var clazz = EXML.parse(exml);
        var panel = new clazz();

        var dispather = new Dispather();
        panel.start_btn.on( lark.TouchEvent.TOUCH_TAP, dispather.splashStart,this );
        this.addChild(panel);
        */
        /*
        var exml =
            `<s:Button id="btn" xmlns:s="http://ns.egret.com/swan">
                <s:Skin states="up,down,disabled">
                    <s:Image id="img" width="172" height="89" source="resources/splash/start_btn.png" scaleX.up="1" source.down="resources/splash/event_btn.png"  scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                </s:Skin>
            </s:Button>`;

        var clazz = EXML.parse(exml);
        var button = new clazz();
        this.addChild(button);

        lark.log(this.stage.stageWidth + ":" + this.stage.stageHeight);
        button.scaleX = 0.8;
        button.scaleY = 0.8;

        //button.btn
        //button.img.width = 500;
        //button.img.height = 500;
        */
    };
    Main.prototype.showSplash = function (e) {
        var imageLoader = e.target;
        var bitmap = new lark.Bitmap(imageLoader.data);
        var contanier = new lark.Sprite();
        contanier.addChild(bitmap);
        this.addChild(contanier);
        bitmap.width = contanier.stage.stageWidth;
        //bitmap.height=contanier.stage.stageHeight;
        //contanier.x = ( this.stage.stageWidth - bitmap.width ) / 2;
        //contanier.y = ( this.stage.stageHeight - bitmap.height ) / 2;
        //contanier.width = 100;
        //contanier.height = 100;
        bitmap.width = 280;
        bitmap.height = 280;
        //alert(contanier.stage.stageWidth + ":" + contanier.stage.stageHeight);
        lark.log(this.stage.scaleMode);
        lark.log(contanier.stage.stageWidth + ":" + contanier.stage.stageHeight);
    };
    Main.prototype.showIcon = function (e) {
        var imageLoader = e.target;
        var bitmap = new lark.Bitmap(imageLoader.data);
        var container = new lark.Sprite();
        container.addChild(bitmap);
        var text = new lark.TextField("Hello Lark");
        container.addChild(text);
        text.y = bitmap.height + 10;
        bitmap.x = (text.width - bitmap.width) * 0.5;
        var stage = this.stage;
        container.x = (stage.stageWidth - bitmap.width) * 0.5;
        container.y = (stage.stageHeight - bitmap.height) * 0.5;
        this.addChild(container);
    };
    return Main;
})(lark.Sprite);
var Dispather = (function (_super) {
    __extends(Dispather, _super);
    function Dispather() {
        _super.apply(this, arguments);
    }
    Dispather.prototype.splash = function (event) {
        var splash = new Splash();
        this.addChild(splash);
    };
    Dispather.prototype.productList = function (event) {
        var product_list = new ProductList();
        this.addChild(product_list);
    };
    Dispather.prototype.splashStart = function (event) {
        lark.log("splashStart");
    };
    return Dispather;
})(lark.Sprite);
//# sourceMappingURL=Main.js.map
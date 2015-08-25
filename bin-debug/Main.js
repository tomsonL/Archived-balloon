var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        var dispather = new Dispather;
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.test,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.splash,this);
        //var api = new ApiHandler();
        //api.request();
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.balloon,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.voteList,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.balloonDesc,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.register,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.register1,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.plusone,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.redeem,this);
        this.on(lark.Event.ADDED_TO_STAGE, dispather.balloonHistory, this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.productList,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.test,this);
        /*
                var imageLoader = new lark.ImageLoader();
                //imageLoader.load("http://img4.imgtn.bdimg.com/it/u=1966084478,4067726004&fm=23&gp=0.jpg");
                imageLoader.load("resources/splash/blow_home_bg.png");
                imageLoader.once(lark.Event.COMPLETE, this.showSplash, this);
        */
    }
    var d = __define,c=Main;p=c.prototype;
    p.showIcon = function (e) {
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
lark.registerClass(Main,"Main");
var Dispather = (function (_super) {
    __extends(Dispather, _super);
    function Dispather() {
        _super.apply(this, arguments);
    }
    var d = __define,c=Dispather;p=c.prototype;
    p.splash = function (event) {
        var splash = new Splash();
        this.addChild(splash);
    };
    p.test = function (event) {
        var test = new Test();
        this.addChild(test);
    };
    p.balloon = function (event) {
        var balloon = new Balloon();
        this.addChild(balloon);
    };
    p.productList = function (event) {
        var product_list = new ProductList();
        this.addChild(product_list);
    };
    p.voteList = function (event) {
        var vote_list = new VoteList();
        this.addChild(vote_list);
    };
    p.balloonDesc = function (event) {
        var balloonDesc = new BalloonDesc();
        this.addChild(balloonDesc);
    };
    p.register = function (event) {
        var register = new Register();
        this.addChild(register);
    };
    p.register1 = function (event) {
        var register = new Register();
        this.addChild(register);
    };
    p.redeem = function (event) {
        var redeem = new Redeem();
        this.addChild(redeem);
    };
    p.splashStart = function (event) {
        lark.log("splashStart");
    };
    p.balloonHistory = function (event) {
        this.addChild(new BalloonHistory());
    };
    p.plusone = function (event) {
        var register = new PlusOne();
        this.addChild(register);
    };
    return Dispather;
})(lark.Sprite);
lark.registerClass(Dispather,"Dispather");

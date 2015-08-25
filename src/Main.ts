class Main extends lark.Sprite {

    public constructor() {
        super();
        var dispather = new Dispather;
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.test,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.splash,this);

        //var api = new ApiHandler();
        //api.request();
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.ballon,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.voteList,this);

        //this.on(lark.Event.ADDED_TO_STAGE,dispather.ballonDesc,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.register,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.register1,this);

        //this.on(lark.Event.ADDED_TO_STAGE,dispather.plusone,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.redeem,this);
        this.on(lark.Event.ADDED_TO_STAGE,dispather.balloonHistory,this);

        //this.on(lark.Event.ADDED_TO_STAGE,dispather.productList,this);
        //this.on(lark.Event.ADDED_TO_STAGE,dispather.test,this);
/*
        var imageLoader = new lark.ImageLoader();
        //imageLoader.load("http://img4.imgtn.bdimg.com/it/u=1966084478,4067726004&fm=23&gp=0.jpg");
        imageLoader.load("resources/splash/blow_home_bg.png");
        imageLoader.once(lark.Event.COMPLETE, this.showSplash, this);
*/
    }

    public showIcon(e:lark.Event) {
        var imageLoader:lark.ImageLoader = e.target;
        var bitmap = new lark.Bitmap(imageLoader.data);
        var container = new lark.Sprite();
        container.addChild(bitmap);
        var text = new lark.TextField("Hello Lark");
        container.addChild(text);
        text.y = bitmap.height + 10;
        bitmap.x = (text.width-bitmap.width)*0.5;
        var stage = this.stage;
        container.x = (stage.stageWidth - bitmap.width) * 0.5;
        container.y = (stage.stageHeight - bitmap.height) * 0.5;
        this.addChild(container);
    }
}


class Dispather extends lark.Sprite
{
    public splash( event:lark.Event ){
        var splash = new Splash( );
        this.addChild(splash);
    }

    public test( event:lark.Event ){
        var test = new Test();
        this.addChild( test );
    }
    public ballon( event:lark.Event ){
        var ballon = new Ballon();
        this.addChild( ballon );
    }

    public productList( event:lark.Event ){
        var product_list = new ProductList();
        this.addChild(product_list);
    }


    public voteList( event:lark.Event ){
        var vote_list = new VoteList();
        this.addChild(vote_list);
    }

    public ballonDesc( event:lark.Event ){
        var ballonDesc = new BallonDesc();
        this.addChild(ballonDesc);
    }

    public register( event:lark.Event ){
        var register = new Register();
        this.addChild(register);
    }

    public register1( event:lark.Event ){
        var register = new Register();
        this.addChild(register);
    }

    public redeem( event:lark.Event ){
        var redeem = new Redeem();
        this.addChild(redeem);
    }

    public splashStart( event:lark.Event ){
        lark.log("splashStart");
    }

    public balloonHistory( event:lark.Event ){
        this.addChild( new BalloonHistory() );
    }

    public plusone( event:lark.Event ){
        var register = new PlusOne();
        this.addChild(register);
    }
}
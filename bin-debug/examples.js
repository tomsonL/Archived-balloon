/*
用exml描述一个button的皮肤
var exml =
    `<s:Button xmlns:s="http://ns.egret.com/swan">
                <s:Skin states="up,down,disabled">
                    <s:Image width="50" height="50" source="resources/close.png" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                </s:Skin>
            </s:Button>`;

var clazz = EXML.parse(exml);
var button = new clazz();
this.addChild(button);
*/
/*tap bar
<s:Group xmlns:s="http://ns.egret.com/swan">
    <s:TabBar dataProvider="{viewStack}">
    <s:layout>
<s:HorizontalLayout gap="20"/>
    </s:layout>
<s:itemRenderer>
<s:ItemRenderer states="up,down" height="50">
    <s:Label text="{data}" textColor.down="0xFFFFFF" textColor.up="0x666666" horizontalCenter="0" verticalCenter="0"/>
    </s:ItemRenderer>
</s:itemRenderer>
</s:TabBar>
<s:ViewStack y="50" id="viewStack">
    <s:Group name="tab1">
    <s:Label text="测试面板1" x="50" y="50"/>
    </s:Group>
<s:Group name="tab2">
    <s:Label text="测试面板2" x="50" y="50"/>
    </s:Group>
</s:ViewStack>
</s:Group>

 `<s:Panel title="登陆注册" xmlns:s="http://ns.egret.com/swan">
 <s:Skin>
 <s:Image width="100%" height="100%" y="40" source="resources/splash/blow_home_bg.png" scale9Grid="1,1,4,4"/>
 <s:Group id="" width="100%" height="40">
 <s:Image width="100%" height="100%" source="resources/title_bar.png" scale9Grid="1,1,4,4"/>
 <s:Label id="titleDisplay" text="标题" textColor="0" horizontalCenter="0" verticalCenter="0"/>
 </s:Group>
 <s:Button id="closeButton" right="-15" y="-15">
 <s:Skin states="up,down,disabled">
 </s:Skin>
 </s:Button>
 <s:Button id="ree" left="50" y="300">
 <s:Skin states="up,down,disabled">
 <s:Image width="50" height="50" source="resources/splash/start_btn.png" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
 </s:Skin>
 </s:Button>
 <s:Button left="150" y="300">
 <s:Skin states="up,down,disabled">
 <s:Image width="50" height="50" source="resources/splash/event_btn.png" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
 </s:Skin>
 </s:Button>
 </s:Skin>
 </s:Panel>`;


加载照片：
 var imageLoader = new lark.ImageLoader();
 imageLoader.load("http://img.lark.egret.com/lark.png");
 imageLoader.once(lark.Event.COMPLETE, this.showIcon, this);

    */
/*
<?xml version="1.0" encoding="utf-8"?>
<s:Group class="components.ListGroup" xmlns:s="http://ns.egret.com/swan">
    <s:Image width="100%" height="100%" source="resource/assets/blue/Panel/border.png" scale9Grid="2,2,173,43"/>
    <s:Scroller left="1" right="1" top="1" bottom="1">
    <s:List id="list">
    <s:itemRenderer>
<s:ItemRenderer states="up,down,disabled" height="64" touchThrough="false">
    <s:Image width="100%" height="100%" includeIn="down"
source="resource/assets/blue/ItemRenderer/selected.png"/>
    <s:Label fontSize="24" fontFamily="Tahoma" text="{data.label}"
textColor="0x555555" textColor.down="0x000000" left="32"
verticalCenter="0"/>
    </s:ItemRenderer>
</s:itemRenderer>
<s:ArrayCollection>
<s:Array>
<s:Object label="项目1"/>
    <s:Object label="项目2"/>
    <s:Object label="项目3"/>
    <s:Object label="项目4"/>
    <s:Object label="项目5"/>
    <s:Object label="项目6"/>
    <s:Object label="项目7"/>
    <s:Object label="项目8"/>
    <s:Object label="项目9"/>
    <s:Object label="项目10"/>
    </s:Array>
</s:ArrayCollection>
</s:List>
</s:Scroller>
</s:Group>
*/
/*
 <s:Image width="100%" height="100%" includeIn="down"
 source="{data.img}" />
 */
/*
var exml =
    `<s:ProgressBar xmlns:s="http://ns.egret.com/swan">
                <s:Skin>
                    <s:Image id="thumb" width="100%" height="100%" source="resources/thumb.png" scale9Grid="1,1,4,4"/>
                    <s:Label id="labelDisplay" textColor="0xffffff" horizontalCenter="0" verticalCenter="0"/>
                </s:Skin>
            </s:ProgressBar>`;

var clazz = EXML.parse(exml);
var progressBar = new clazz();
progressBar.width = 500;
progressBar.height = 40;
progressBar.minimum = 0;
progressBar.maximum = 100;
this.addChild(progressBar);
var add = 1;
this.on(lark.Event.ENTER_FRAME,function(e:lark.Event):void {
    progressBar.value += add;
    if(progressBar.value >= progressBar.maximum || progressBar.value <= progressBar.minimum) {
        add = -add;
    }
},null);
*/
/*
class SplashSave extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var stageWidth:number  = this.stage.stageWidth;
        var stageHeight:number = this.stage.stageHeight;

        var exml =
            `<s:Panel title="欢迎" xmlns:s="http://ns.egret.com/swan">
                    <s:Skin>
                        <s:Image id="blowHomeBg" width="100%" height="100%" y="0" source="resources/splash/blow_home_bg.png" scale9Grid="1,1,4,4"/>
                        <s:Button id="start_btn">
                            <s:Skin states="up,down,disabled">
                                <s:Image id="start_btn_skin" source="resources/splash/start_btn.png" width="100%" height="100%" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                            </s:Skin>
                        </s:Button>
                        <s:Button id="event_btn">
                            <s:Skin states="up,down,disabled">
                                <s:Image id="event_btn_skin" source="resources/splash/event_btn.png" width="100%" height="100%" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                            </s:Skin>
                        </s:Button>
                    </s:Skin>
                </s:Panel>`;
        var clazz = EXML.parse(exml);
        var panel = new clazz();

        panel.width = Math.min(stageWidth, 480);
        panel.height = Math.min(stageHeight, 800);
        var x_scale:number = 480 / panel.width;
        var y_scale:number = 800 / panel.height;
        var buttonHeight = 89 / y_scale;
        var buttonWidth = 172 / x_scale;

        panel.start_btn.start_btn_skin.width = buttonWidth;
        panel.start_btn.start_btn_skin.height = buttonHeight;
        panel.start_btn.x = ( panel.width - buttonWidth * 2 ) / 3;
        panel.start_btn.bottom = 57 / y_scale;

        panel.event_btn.event_btn_skin.width = buttonWidth;
        panel.event_btn.event_btn_skin.height = buttonHeight;
        panel.event_btn.x = ( panel.width - buttonWidth * 2 ) * 2 / 3 + buttonWidth;
        panel.event_btn.bottom = 57 / y_scale;

        var dispather = new Dispather();
        panel.start_btn.on( lark.TouchEvent.TOUCH_TAP, dispather.splashStart,this );

        this.addChild(panel);

    }
}
/*
用exml描述一个button的皮肤
var exml =
    `<s:Button xmlns:s="http://ns.egret.com/swan">
                <s:Skin states="up,down,disabled">
                    <s:Image width="50" height="50" source="resources/close.png" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                </s:Skin>
            </s:Button>`;

var clazz = EXML.parse(exml);
var button = new clazz();
this.addChild(button);
*/

/*tap bar
<s:Group xmlns:s="http://ns.egret.com/swan">
    <s:TabBar dataProvider="{viewStack}">
    <s:layout>
<s:HorizontalLayout gap="20"/>
    </s:layout>
<s:itemRenderer>
<s:ItemRenderer states="up,down" height="50">
    <s:Label text="{data}" textColor.down="0xFFFFFF" textColor.up="0x666666" horizontalCenter="0" verticalCenter="0"/>
    </s:ItemRenderer>
</s:itemRenderer>
</s:TabBar>
<s:ViewStack y="50" id="viewStack">
    <s:Group name="tab1">
    <s:Label text="测试面板1" x="50" y="50"/>
    </s:Group>
<s:Group name="tab2">
    <s:Label text="测试面板2" x="50" y="50"/>
    </s:Group>
</s:ViewStack>
</s:Group>

 `<s:Panel title="登陆注册" xmlns:s="http://ns.egret.com/swan">
 <s:Skin>
 <s:Image width="100%" height="100%" y="40" source="resources/splash/blow_home_bg.png" scale9Grid="1,1,4,4"/>
 <s:Group id="" width="100%" height="40">
 <s:Image width="100%" height="100%" source="resources/title_bar.png" scale9Grid="1,1,4,4"/>
 <s:Label id="titleDisplay" text="标题" textColor="0" horizontalCenter="0" verticalCenter="0"/>
 </s:Group>
 <s:Button id="closeButton" right="-15" y="-15">
 <s:Skin states="up,down,disabled">
 </s:Skin>
 </s:Button>
 <s:Button id="ree" left="50" y="300">
 <s:Skin states="up,down,disabled">
 <s:Image width="50" height="50" source="resources/splash/start_btn.png" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
 </s:Skin>
 </s:Button>
 <s:Button left="150" y="300">
 <s:Skin states="up,down,disabled">
 <s:Image width="50" height="50" source="resources/splash/event_btn.png" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
 </s:Skin>
 </s:Button>
 </s:Skin>
 </s:Panel>`;


加载照片：
 var imageLoader = new lark.ImageLoader();
 imageLoader.load("http://img.lark.egret.com/lark.png");
 imageLoader.once(lark.Event.COMPLETE, this.showIcon, this);

    */

/*
<?xml version="1.0" encoding="utf-8"?>
<s:Group class="components.ListGroup" xmlns:s="http://ns.egret.com/swan">
    <s:Image width="100%" height="100%" source="resource/assets/blue/Panel/border.png" scale9Grid="2,2,173,43"/>
    <s:Scroller left="1" right="1" top="1" bottom="1">
    <s:List id="list">
    <s:itemRenderer>
<s:ItemRenderer states="up,down,disabled" height="64" touchThrough="false">
    <s:Image width="100%" height="100%" includeIn="down"
source="resource/assets/blue/ItemRenderer/selected.png"/>
    <s:Label fontSize="24" fontFamily="Tahoma" text="{data.label}"
textColor="0x555555" textColor.down="0x000000" left="32"
verticalCenter="0"/>
    </s:ItemRenderer>
</s:itemRenderer>
<s:ArrayCollection>
<s:Array>
<s:Object label="项目1"/>
    <s:Object label="项目2"/>
    <s:Object label="项目3"/>
    <s:Object label="项目4"/>
    <s:Object label="项目5"/>
    <s:Object label="项目6"/>
    <s:Object label="项目7"/>
    <s:Object label="项目8"/>
    <s:Object label="项目9"/>
    <s:Object label="项目10"/>
    </s:Array>
</s:ArrayCollection>
</s:List>
</s:Scroller>
</s:Group>
*/

/*
 <s:Image width="100%" height="100%" includeIn="down"
 source="{data.img}" />
 */

/*
var exml =
    `<s:ProgressBar xmlns:s="http://ns.egret.com/swan">
                <s:Skin>
                    <s:Image id="thumb" width="100%" height="100%" source="resources/thumb.png" scale9Grid="1,1,4,4"/>
                    <s:Label id="labelDisplay" textColor="0xffffff" horizontalCenter="0" verticalCenter="0"/>
                </s:Skin>
            </s:ProgressBar>`;

var clazz = EXML.parse(exml);
var progressBar = new clazz();
progressBar.width = 500;
progressBar.height = 40;
progressBar.minimum = 0;
progressBar.maximum = 100;
this.addChild(progressBar);
var add = 1;
this.on(lark.Event.ENTER_FRAME,function(e:lark.Event):void {
    progressBar.value += add;
    if(progressBar.value >= progressBar.maximum || progressBar.value <= progressBar.minimum) {
        add = -add;
    }
},null);
*/
/*
class SplashSave extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var stageWidth:number  = this.stage.stageWidth;
        var stageHeight:number = this.stage.stageHeight;

        var exml =
            `<s:Panel title="欢迎" xmlns:s="http://ns.egret.com/swan">
                    <s:Skin>
                        <s:Image id="blowHomeBg" width="100%" height="100%" y="0" source="resources/splash/blow_home_bg.png" scale9Grid="1,1,4,4"/>
                        <s:Button id="start_btn">
                            <s:Skin states="up,down,disabled">
                                <s:Image id="start_btn_skin" source="resources/splash/start_btn.png" width="100%" height="100%" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                            </s:Skin>
                        </s:Button>
                        <s:Button id="event_btn">
                            <s:Skin states="up,down,disabled">
                                <s:Image id="event_btn_skin" source="resources/splash/event_btn.png" width="100%" height="100%" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                            </s:Skin>
                        </s:Button>
                    </s:Skin>
                </s:Panel>`;
        var clazz = EXML.parse(exml);
        var panel = new clazz();

        panel.width = Math.min(stageWidth, 480);
        panel.height = Math.min(stageHeight, 800);
        var x_scale:number = 480 / panel.width;
        var y_scale:number = 800 / panel.height;
        var buttonHeight = 89 / y_scale;
        var buttonWidth = 172 / x_scale;

        panel.start_btn.start_btn_skin.width = buttonWidth;
        panel.start_btn.start_btn_skin.height = buttonHeight;
        panel.start_btn.x = ( panel.width - buttonWidth * 2 ) / 3;
        panel.start_btn.bottom = 57 / y_scale;

        panel.event_btn.event_btn_skin.width = buttonWidth;
        panel.event_btn.event_btn_skin.height = buttonHeight;
        panel.event_btn.x = ( panel.width - buttonWidth * 2 ) * 2 / 3 + buttonWidth;
        panel.event_btn.bottom = 57 / y_scale;

        var dispather = new Dispather();
        panel.start_btn.on( lark.TouchEvent.TOUCH_TAP, dispather.splashStart,this );

        this.addChild(panel);

    }
}
 
//# sourceMappingURL=examples.js.map

//progressBar
/*
 var progressBar = panel.product_list.progressBar;
 progressBar.width = 500;
 progressBar.height = 40;
 progressBar.minimum = 0;
 progressBar.maximum = 100;
 this.addChild(progressBar);
 var add = 1;
 this.on(lark.Event.ENTER_FRAME,function(e:lark.Event):void {
 progressBar.value += add;
 if(progressBar.value >= progressBar.maximum || progressBar.value <= progressBar.minimum) {
 add = -add;
 }
 },null);
 */

/*

 <s:ProgressBar id="progressBar" value="45">
 <s:Skin>
 <s:Image width="100%" height="100%" source="resources/thumb.png" scale9Grid="1,1,4,4"/>
 <s:Label textColor="0x000000" horizontalCenter="0" verticalCenter="0"/>
 </s:Skin>
 </s:ProgressBar>
 */

class Splash extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml =
            `<s:Panel width="960" height="1600" title="欢迎" xmlns:s="http://ns.egret.com/swan">
                    <s:Skin>
                        <s:Image id="blowHomeBg" width="960" height="100%" source="resources/splash/blow_home_bg.png"/>
                        <s:Button id="start_btn" left="92" width="344" height="178" bottom="114">
                            <s:Skin states="up,down,disabled">
                                <s:Image id="start_btn_skin" source="resources/splash/start_btn.png" width="344" height="178" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                            </s:Skin>
                        </s:Button>
                        <s:Button id="event_btn" left="524"  bottom="114">
                            <s:Skin states="up,down,disabled">
                                <s:Image id="event_btn_skin" source="resources/splash/event_btn.png" width="344" height="178" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                            </s:Skin>
                        </s:Button>
                    </s:Skin>
                </s:Panel>`;
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
        panel.width=panel.stage.stageWidth;
        panel.height=panel.stage.stageHeight;
        var dispather = new Dispather();
        panel.start_btn.on( lark.TouchEvent.TOUCH_TAP, dispather.splashStart,this );
    }
}
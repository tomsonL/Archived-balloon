class Register extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml =
        `<s:Panel title="详情" width="794" height="824" horizontalCenter="0" verticalCenter="0" xmlns:s="http://ns.egret.com/swan">
            <s:Skin>
                <s:Image width="100%" height="100%" source="resources/white.png" />
                <s:Group top="0" width="100%" height="120">
                    <s:Image verticalCenter="0" left="50" width="50" height="50" source="resources/register/close_btn.png" />
                    <s:Label verticalCenter="0" horizontalCenter="0" fontSize="42" fontFamily="SimHei" text="注册登录" textColor="0xe85846" />
                </s:Group>
                <s:Group top="120" width="100%" height="628">
                    <s:Image width="100%" height="100%" source="resources/red.png" />
                    <s:Image horizontalCenter="0" top="116" width="364" height="196" source="resources/register/logo.png" />
                </s:Group>
                <s:Group id="group_btn" width="100%" height="168" top="548">
                    <s:Button id="sing_up_btn" left="46">
                        <s:Skin states="up,down,disabled">
                            <s:Image id="event_btn_skin"  source="resources/register/sign_up_btn.png" width="328" height="168" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                        </s:Skin>
                    </s:Button>
                    <s:Button id="login_btn" right="46" >
                        <s:Skin states="up,down,disabled">
                            <s:Image id="event_btn_skin" source="resources/register/login_btn.png" width="328" height="166" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                        </s:Skin>
                    </s:Button>
                </s:Group>
            </s:Skin>
        </s:Panel>`;

        
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild( panel );
    }
}
class Register2 extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml =
            `<s:Group width="960" height="1600" xmlns:s="http://ns.egret.com/swan">
                <s:Image width="100%" height="192" source="resources/register/vertify_topbanner.png" />
                <s:Group top="192" width="100%" height="152">
                    <s:Image width="100%" height="152" source="resources/gray.png"/>
                    <s:Label verticalCenter="0" horizontalCenter="0" textColor="#eeeeee" text="你将收到一条包含验证码的短信" fontSize="36" />
                </s:Group>
                <s:Group top="344" width="100%" height="152">
                    <s:Image verticalCenter="0" left="50" width="38" height="64"  source="resources/register/phone_icon.png" />
                    <s:EditableText verticalCenter="0" fontSize="52" left="166" height="64" text="验证码" textColor="#bbbbbb" />
                    <s:Group verticalCenter="0" right="50" width="314" height="90">
                        <s:Image width="100%" height="100%" source="resources/gray.png" />
                        <s:Label verticalCenter="0" horizontalCenter="0" textColor="#eeeeee" text="再发一次(30s)" fontSize="36" />
                    </s:Group>
                </s:Group>
                <s:Image top="496" width="100%" height="150" source="resources/register/confirm_btn.png" />
            </s:Group>`;
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
    }
}
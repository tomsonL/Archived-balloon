class Register1 extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml =
            `<s:Group width="960" height="1600" xmlns:s="http://ns.egret.com/swan">
                <s:Image width="100%" height="192" source="resources/register/sign_up_top_banner.png" />
                <s:Group top="192" width="100%" height="152">
                    <s:Image verticalCenter="0" left="50" width="38" height="64"  source="resources/register/phone_icon.png" />
                    <s:EditableText verticalCenter="0" fontSize="52" left="166" height="64" text="手机号" textColor="#bbbbbb" />
                    <s:Image bottom="0" width="100%" height="1" source="resources/gray.png"/>
                </s:Group>
                <s:Group top="344" width="100%" height="152">
                    <s:Image verticalCenter="0" left="50" width="38" height="64" source="resources/register/password_icon.png" />
                    <s:EditableText verticalCenter="0" fontSize="52" left="166" height="64" text="密码" textColor="#bbbbbb" />
                    <s:Image bottom="0" width="100%" height="1" source="resources/gray.png"/>
                </s:Group>
                <s:Group top="592" width="100%" >
                    <s:Image top="96" width="100%" height="150" source="resources/register/confirm_signup_btn.png" />
                    <s:Label top="310" horizontalCenter="0" textColor="#bbbbbb" text="点击“确认注册”标识你同意我们的用户协议" fontSize="40" />
                </s:Group>
            </s:Group>`;
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
    }
}
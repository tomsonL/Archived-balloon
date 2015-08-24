class Register3 extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml =
            `<s:Group width="960" height="1600" xmlns:s="http://ns.egret.com/swan">
                <s:Image width="100%" height="192" source="resources/register/username_setting.png" />
                <s:Group top="192" width="100%" height="152">
                    <s:Image width="100%" height="152" source="resources/gray.png"/>
                    <s:Label verticalCenter="0" horizontalCenter="0" textColor="#eeeeee" text="朋友可以通过用户名找到你哟" fontSize="36" />
                </s:Group>
                <s:Group top="344" width="100%" height="152">
                    <s:Image verticalCenter="0" left="50" width="62" height="64"  source="resources/register/profile_icon.png" />
                    <s:EditableText verticalCenter="0" fontSize="52" left="166" height="64" text="设置用户名(字母或数字)" textColor="#bbbbbb" />
                </s:Group>
                <s:Image top="496" width="100%" height="150" source="resources/register/done_btn.png" />
            </s:Group>`;
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
    }
}
class Redeem extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml =
        `<s:Panel title="详情" width="794" height="1014" horizontalCenter="0" verticalCenter="0" xmlns:s="http://ns.egret.com/swan">
            <s:Skin>
                <s:Image width="100%" height="100%" source="resources/white.png" />
                <s:Image left="50" top="50" width="50" height="50" source="resources/plusone/close_btn.png" />
                <s:Image horizontalCenter="0" top="44" width="238" height="238" source="resources/redeem/profile_bg.png" />
                <s:Label text="Zac Yang" top="312" horizontalCenter="0" fontSize="52" />
                <s:Group id="grp_mny" top="408" horizontalCenter="0" >
                    <s:Label verticalCenter="0" left="68" text="余额" fontSize="52"  />
                    <s:Image verticalCenter="0" left="500" width="56" height="56" source="resources/redeem/money_icon.png" />
                    <s:Label verticalCenter="0" left="560" text="50吹币" fontSize="52"  />
                </s:Group>

                <s:Image top="496" width="100%" height="1" source="resources/gray.png" />
                <s:Group id="grp_money_1" width="100%" top="536" left="20" height="240" >
                    <s:Image width="226" height="92" source="resources/redeem/5-yuan.png" />
                    <s:Image width="226" height="92" source="resources/redeem/10-yuan.png" />
                    <s:Image width="226" height="92" source="resources/redeem/50-yuan.png" />
                </s:Group>
                <s:Group id="grp_money_2" width="100%" top="684" left="20" height="240" >
                    <s:Image width="226" height="92" source="resources/redeem/100-yuan.png" />
                    <s:Image width="226" height="92" source="resources/redeem/200-yuan.png" />
                    <s:Image width="226" height="92" source="resources/redeem/500-yuan.png" />
                </s:Group>
                <s:Image width="100%" height="146" bottom="0" source="resources/redeem/btn_redeem.png" />
            </s:Skin>
        </s:Panel>`;

        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild( panel );

        var layout1=new swan.HorizontalLayout();
        //panel.grp_mny.layout=layout1;

        var layout2=new swan.HorizontalLayout();
        layout2.gap = 40;
        var layout3=new swan.HorizontalLayout();
        layout3.gap = 40;
        panel.grp_money_1.layout=layout2;
        panel.grp_money_2.layout=layout3;
    }
}
class Share extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml =
        `<s:Panel title="吹口气" width="794" height="620" horizontalCenter="0" verticalCenter="0" xmlns:s="http://ns.egret.com/swan">
            <s:Skin>
                <s:Image width="100%" height="100%" source="resources/share/share_bg.png" />
                <s:Image left="50" top="50" width="50" height="50" source="resources/winner/close_btn.png" />
                <s:Group horizontalCenter="0" id="grp_btn" bottom="34"  height="224">
                    <s:Image width="106" height="176" source="resources/share/pengyouquan_icon.png" />
                    <s:Image width="106" height="176" source="resources/share/qq_icon.png" />
                    <s:Image width="106" height="176" source="resources/share/weibo_icon.png" />
                    <s:Image width="106" height="176" source="resources/share/weixin_icon.png" />
                </s:Group>
            </s:Skin>
        </s:Panel>`;

        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild( panel );

        var layout=new swan.HorizontalLayout();
        layout.gap = 90;
        panel.grp_btn.layout = layout;
    }
}

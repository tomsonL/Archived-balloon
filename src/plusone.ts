class PlusOne extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml =
        `<s:Panel title="吹口气" width="794" height="620" horizontalCenter="0" verticalCenter="0" xmlns:s="http://ns.egret.com/swan">
            <s:Skin>
                <s:Image width="100%" height="100%" source="resources/plusone/1_bg.png" />
                <s:Image left="50" top="50" width="50" height="50" source="resources/plusone/close_btn.png" />
                <s:Group id="grp_btn" bottom="40" width="100%" height="126">
                    <s:Image width="100%" height="100%" source="resources/plusone/history_btn.png" />
                    <s:Image width="100%" height="100%" source="resources/plusone/share_btn.png" />
                </s:Group>
            </s:Skin>
        </s:Panel>`;

        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild( panel );

        var layout = new swan.HorizontalLayout();
        layout.gap = 62;
        panel.grp_btn.layout = layout;
    }
}
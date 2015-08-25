class Winner extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml =
        `<s:Panel title="吹口气" width="794" height="620" horizontalCenter="0" verticalCenter="0" xmlns:s="http://ns.egret.com/swan">
            <s:Skin>
                <s:Image width="100%" height="100%" source="resources/winner/winner_bg.png" />
                <s:Image left="50" top="50" width="50" height="50" source="resources/winner/close_btn.png" />
                <s:Group id="grp_btn" bottom="34" left="56" height="224">
                    <s:Image id="winner_profile" width="224" height="224" source="resources/winner/profile.png" />
                    <s:Label id="winner_name" top="48" fontSize="44" textColor="#e85846" left="320"/>
                    <s:Label id="total" fontSize="44" top="106" textColor="#e85846" left="320"/>
                </s:Group>
            </s:Skin>
        </s:Panel>`;

        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild( panel );

        panel.winner_profile.source="resources/winner/profile.png";
        panel.winner_name.text="获奖者：刘晓燕";
        panel.total.text="本期参与：6000次";
    }
}
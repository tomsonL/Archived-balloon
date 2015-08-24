class BallonDesc extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml =
        `<s:Panel title="详情" width="794" height="824" horizontalCenter="0" verticalCenter="0" xmlns:s="http://ns.egret.com/swan">
            <s:Skin>
                <s:Group top="0" width="100%" height="120">
                    <s:Image verticalCenter="0" left="50" width="50" height="50" source="resources/ballon_desc/close_btn.png" />
                    <s:Label verticalCenter="0" horizontalCenter="0" fontSize="42" fontFamily="SimHei" text="女生基本信息" textColor="0xe85846" />
                </s:Group>
                <s:Image top="120" left="0" width="100%" height="628" source="resources/ballon_desc/meinv.jpg" />
                <s:Group id="bottom_dot" bottom="0" width="100%" height="76">
                    <s:Image verticalCenter="0" horizontalCenter="-100" width="28" height="28" source="resources/ballon_desc/dot.png" />
                    <s:Image verticalCenter="0" horizontalCenter="0" width="28" height="28" source="resources/ballon_desc/dot.png" />
                    <s:Image verticalCenter="0" horizontalCenter="100" width="28" height="28" source="resources/ballon_desc/dot.png" />
                </s:Group>
            </s:Skin>
        </s:Panel>`;

        var clazz = EXML.parse(exml);
        var panel = new clazz();
        //panel.width=panel.stage.stageWidth;
        //panel.height=panel.stage.stageHeight;
        this.addChild( panel );


        var layout = new swan.HorizontalLayout();
        layout.gap = 56;
        layout.verticalAlign = "middle";
        layout.horizontalAlign = "middle";

        //panel.bottom_dot.layout = layout;


    }
}
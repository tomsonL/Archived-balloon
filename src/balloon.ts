class Balloon extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }


    private onAddToStage( event:lark.Event ):void {

        var exml =
            `<s:Panel title="商品列表" width="960" height="1600" xmlns:s="http://ns.egret.com/swan">
            <s:Skin>
            <s:Scroller id="scroller" width="100%">
                <s:Group id="group_id" width="100%" top="0">
                    <s:Image left="50" top="56" width="42" height="66" source="resources/product_ballon/arrow.png" />
                    <s:Image left="0" top="0" width="96" height="136" horizontalCenter="0" source="resources/product_ballon/needle.png" />
                    <s:Image left="848" top="56" width="66" height="66" source="resources/product_ballon/setting_btn.png" />

                    <s:Group horizontalCenter="0" top="136" height="1464">
                        <s:Label id="lable_already" fontSize="36" fontFamily="SimHei" textColor="0xe85846" left="152" top="1252"/>
                        <s:Label id="lable_left" fontSize="36" fontFamily="SimHei" textColor="0xe85846" left="560" top="1252"/>
                        <s:Label id="lable_total" fontSize="36" fontFamily="SimHei" textColor="0xe85846" left="152" top="1310"/>
                        <s:Image left="438" top="1000" width="280" height="440" source="resources/product_ballon/rope.png" />
                        <s:Image left="570" top="1300" width="180" height="160" source="resources/product_ballon/press_btn.png" />
                        <s:Group id="group_time" top="1098" left="208" width="536">
                            <s:Image width="66" height="88" source="resources/product_ballon/time_bg.png" />
                            <s:Image width="66" height="88" source="resources/product_ballon/time_bg.png" />
                            <s:Image top="58" width="12" height="36" source="resources/product_ballon/colon.png" />
                            <s:Image width="66" height="88" source="resources/product_ballon/time_bg.png" />
                            <s:Image width="66" height="88" source="resources/product_ballon/time_bg.png" />
                            <s:Image top="58" width="12" height="36" source="resources/product_ballon/colon.png" />
                            <s:Image width="66" height="88" source="resources/product_ballon/time_bg.png" />
                            <s:Image width="66" height="88" source="resources/product_ballon/time_bg.png" />
                        </s:Group>
                        <s:Image left="148" top="1206" width="628" height="28" source="resources/gray.png"/>
                        <s:ProgressBar id="progress_bar" width="628" height="28" left="148" top="1206" value="50" minimum="0" maximum="100" >
                            <s:Skin>
                                <s:Image id="thumb" width="100%" height="100%" source="resources/red.png" scale9Grid="1,1,4,4"/>
                            </s:Skin>
                        </s:ProgressBar>
                        <s:Image id="balloon" horizontalCenter="0" alpha="0.95" bottom="390" source="resources/product_ballon/ballon.png" />
                    </s:Group>

                </s:Group>
                </s:Scroller>
            </s:Skin>
        </s:Panel>`;

        var clazz = EXML.parse(exml);
        var panel = new clazz();

        this.addChild( panel );
        var layout = new swan.HorizontalLayout();
        layout.gap = 10;
        layout.verticalAlign = "middle";
        panel.group_time.layout = layout;

        panel.lable_already.text="已被吹 4599 次";
        panel.lable_left.text="还需吹 1412 次";
        panel.lable_total.text="总需 6000 次";
        panel.scroller.height=panel.stage.stageHeight;

        var persent:number=1;
        var b_width:number=914;
        var b_height:number=1080;

        panel.balloon.height = b_height * persent;
        panel.balloon.width = b_width * persent;



    }
}
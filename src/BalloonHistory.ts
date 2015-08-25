class BalloonHistory extends lark.Sprite
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
                        <s:Image id="balloon" horizontalCenter="0" alpha="0.95" bottom="390" source="resources/exploding/exploding.png" />
                    </s:Group>

                    <s:Group id="result" width="876" height="372" bottom="140">
                        <s:Image source="resources/history/blow_bg.png" width="100%" height="100%"/>
                        <s:Group id="result_content" width="734" height="162" bottom="40" left="36">
                            <s:Image source="resources/history/profile.png" width="162" height="162"/>
                            <s:Group id="result_content_label" height="100%">
                                <s:Label fontSize="40" id="user" />
                                <s:Label fontSize="40" id="total" />
                                <s:Label fontSize="40" id="time" />
                            </s:Group>
                        </s:Group>
                    </s:Group>

                </s:Group>
                </s:Scroller>
            </s:Skin>
        </s:Panel>`;

        var clazz = EXML.parse(exml);
        var panel = new clazz();

        this.addChild( panel );

        panel.user.text="用户名：杨幂";
        panel.total.text="本期参与 1412 次";
        panel.time.text="吹爆时间 2015年06月12日 11:23";
        panel.scroller.height=panel.stage.stageHeight;

        var persent:number=1;
        var b_width:number=914;
        var b_height:number=1080;

        panel.balloon.height = b_height * persent;
        panel.balloon.width = b_width * persent;

        var layout_result_content = new swan.HorizontalLayout();
        layout_result_content.gap = 20;
        panel.result_content.layout = layout_result_content;

        var layout_result_content_label = new swan.VerticalLayout();
        layout_result_content_label.gap=20;
        panel.result_content_label.layout = layout_result_content_label


    }
}
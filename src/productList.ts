class ProductList extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml =
        `<s:Panel title="商品列表" width="100%" height="100%" xmlns:s="http://ns.egret.com/swan">
            <s:Skin>
                <s:Image id="top_banner" top="0" left="0" width="480" height="96" source="resources/product_list/top_banner.png" />
                <s:Scroller width="480" height="706" top="96" scrollPolicyH="ScrollPolicy.OFF" >
                    <s:List id="product_list" width="100%" top="0">
                        <s:itemRenderer width="100%">
                            <s:ItemRenderer states="up,down,disabled" width="100%" height="138" touchThrough="false">
                                <s:Image left="25"  top="16" width="88" height="106" source="{data.img}"/>
                                <s:Image right="85" top="68" width="60" height="60" source="{data.blow}"/>
                                <s:Image bottom="0" width="100%" height="1" source="resources/gray.png"/>
                                <s:Label width="322" height="52" verticalAlign="top" fontSize="21" fontFamily="SimHei" text="{data.desc}"
                                         textColor="0xe85846" left="134" top="16"/>
                                <s:Label fontSize="18" fontFamily="SimHei" text="{data.total}"
                                         textColor="0xbbbbbb" left="134" top="80"/>
                                <s:Label fontSize="18" fontFamily="SimHei" text="{data.already}"
                                         textColor="0xbbbbbb" left="134" top="108"/>
                                <s:Label fontSize="18" fontFamily="SimHei" text="{data.left}"
                                         textColor="0xbbbbbb" left="246" top="108"/>
                                <s:Image top="102" left="134" width="212" height="4" source="resources/gray.png"/>
                                <s:ProgressBar id="progress_bar" width="212" height="4" left="134" top="102" value="{data.value}" minimum="0" maximum="100" >
                                    <s:Skin>
                                        <s:Image id="thumb" width="100%" height="100%" source="resources/red.png" scale9Grid="1,1,4,4"/>
                                    </s:Skin>
                                </s:ProgressBar>
                            </s:ItemRenderer>
                        </s:itemRenderer>
                    </s:List>
                </s:Scroller>
            </s:Skin>
        </s:Panel>`;

        var clazz = EXML.parse(exml);
        var panel = new clazz();
        //panel.width=panel.stage.stageWidth;
        //panel.height=panel.stage.stageHeight;
        this.addChild( panel );
        var list:swan.List = panel.product_list;
        var collection = new swan.ArrayCollection();
        for(var i = 0; i < 8; i ++) {
            collection.addItem({
                "desc":"非凡的魅力，书写完美境界，款式随机，清仓甩卖，只要998！" + i,
                "total":"总需 6000 吹",
                "already":"3456 已吹",
                "left":"还需 1200 吹",
                "value":30 + i * 30,
                "img":"resources/prod.jpg",
                "blow":"resources/product_list/blow_btn.png"
            });
        }
        list.dataProvider = collection;
        lark.log(panel.top_banner.x+":"+panel.top_banner.y);
    }
}
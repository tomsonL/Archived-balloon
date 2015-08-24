class VoteList extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml =
        `<s:Panel title="商品列表" width="960" height="1600" xmlns:s="http://ns.egret.com/swan">
            <s:Skin>
                <s:Image id="top_banner" top="0" left="0" width="100%" height="192" source="resources/girls_list/top_banner.png" />
                <s:Scroller width="100%" height="1412" top="192" bottom="0" >
                    <s:List id="girls_list" width="100%" top="0">
                        <s:itemRenderer width="100%">
                            <s:ItemRenderer states="up,down,disabled" width="100%" height="228" touchThrough="false">
                                <s:Image left="50"  verticalCenter="0" width="176" height="212" source="{data.img}"/>
                                <s:Image right="50" verticalCenter="0" width="248" height="100" source="{data.voting_btn}"/>
                                <s:Group verticalCenter="0" left="256" height="104">
                                    <s:Group top="0" width="376">
                                        <s:Label left="0" fontSize="42" fontFamily="SimHei" text="{data.username}" textColor="0xe85846" />
                                        <s:Image left="160" width="52" height="52" source="{data.credit_icon}"/>
                                    </s:Group>
                                    <s:Label fontSize="36" fontFamily="SimHei" text="{data.voted}"
                                         textColor="0xbbbbbb" bottom="0"/>
                                </s:Group>
                                <s:Image bottom="0" width="100%" height="1" source="resources/gray.png"/>
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
        var list:swan.List = panel.girls_list;
        var collection = new swan.ArrayCollection();
        for(var i = 0; i < 8; i ++) {
            collection.addItem({
                "img":"resources/prod.jpg",
                "username":"用户名",
                "voted":"投票数 897887",
                "voting_btn":"resources/girls_list/voting_btn.png",
                "credit_icon":"resources/girls_list/credit_icon.png"
            });
        }
        list.dataProvider = collection;
    }
}
class Participants extends lark.Sprite
{
    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml =
        `<s:Panel title="参与记录" width="960" height="1600" xmlns:s="http://ns.egret.com/swan">
            <s:Skin>
                <s:Image id="top_banner" top="0" left="0" width="100%" height="192" source="resources/participants/top_banner.png" />
                <s:Scroller width="100%" height="1412" top="192" bottom="0" >
                    <s:List id="girls_list" width="100%" top="0">
                        <s:itemRenderer width="100%">
                            <s:ItemRenderer states="up,down,disabled" width="100%" height="228" touchThrough="false">
                                <s:Image left="32"  verticalCenter="0" width="176" height="176" source="{data.img}"/>
                                <s:Label left="236" top="30" fontSize="40" fontFamily="SimHei" text="{data.username}" textColor="0xe85846" />
                                <s:Label left="236" top="102" fontSize="40" fontFamily="SimHei" text="{data.time}" textColor="0xe85846" />
                                <s:Label left="236" top="166" fontSize="40" fontFamily="SimHei" text="{data.paticipants}" textColor="0xe85846" />
                                <s:Image bottom="0" width="100%" height="1" source="resources/gray.png"/>
                            </s:ItemRenderer>
                        </s:itemRenderer>
                    </s:List>
                </s:Scroller>
            </s:Skin>
        </s:Panel>`;

        var clazz = EXML.parse(exml);
        var panel = new clazz();

        this.addChild( panel );
        var list:swan.List = panel.girls_list;
        var collection = new swan.ArrayCollection();
        for(var i = 0; i < 8; i ++) {
            collection.addItem({
                "img":"resources/prod.jpg",
                "username":"李安",
                "time":"2015-06-23 10:26:35",
                "paticipants":"已参与 1 次",
            });
        }
        list.dataProvider = collection;
    }
}
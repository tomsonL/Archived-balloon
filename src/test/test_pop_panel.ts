class TestPopPanel extends lark.Sprite
{

    private panel1:swan.Panel;
    private panel2:swan.Panel;
    private maskImg:swan.Image;

    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml = `
        <s:Panel width="100%" height="100%" xmlns:s="http://ns.egret.com/swan">
            <s:Group id="img_group" width="100%"  height="100%">
                <s:Image id="img_1" width="960" height="1600" source="resources/test/1.png"/>
            </s:Group>
            <s:Image id="mask_img" visible="false" alpha="0.3" width="100%" height="100%" source="resources/gray.png"/>
        </s:Panel>
        `;

        var clazz = EXML.parse(exml);
        var panel1 = new clazz();
        this.addChild( panel1 );

        this.panel1 = panel1;
        this.maskImg = panel1.mask_img;
        panel1.on(lark.TouchEvent.TOUCH_TAP, this.tap, this);

    }

    private tap(e:lark.TouchEvent){
        var pop = `
        <s:Panel width="50%" height="50%" xmlns:s="http://ns.egret.com/swan">
            <s:Image id="mask_img" width="100%" height="100%" source="resources/red.png"/>
            <s:Group id="img_group" width="100%"  height="100%">
                <s:Image id="img_1" width="400" height="400" source="resources/test/2.png"/>
            </s:Group>
        </s:Panel>
        `;
        var clazz = EXML.parse(pop);
        var panel = new clazz();
        this.addChild( panel );
        panel.x = (panel.stage.stageWidth - panel.width) / 2;
        panel.y = (panel.stage.stageHeight - panel.height) / 2;
        this.panel1.mask= this.maskImg;

    }
}
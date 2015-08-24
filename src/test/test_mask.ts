class TestMask extends lark.Sprite
{

    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml = `
        <s:Panel width="100%" height="100%" xmlns:s="http://ns.egret.com/swan">
            <s:Group id="img_group" width="300"  top="0" height="100%">
                <s:Image id="img_1" width="300" height="300" source="resources/test/1.png"/>
            </s:Group>
            <s:Image visible="false" id="mask_img" alpha="0.1" width="100%" height="100%" source="resources/gray.png"/>
        </s:Panel>
        `;
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild( panel );

        panel.mask = panel.mask_img;

    }
}
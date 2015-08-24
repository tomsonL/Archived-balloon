class TestInputBox extends lark.Sprite {

    private list:swan.List;

    public constructor() {
        super();
        var exml = `
            <s:Panel title="input" xmlns:s="http://ns.egret.com/swan">
                <s:Image  left="100" top="100" width="300" height="80" source="resources/gray.png"/>
                <s:EditableText left="100" top="100" width="300" height="80" textColor="0x2233cc"  />
            </s:Panel>


           `;
        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        this.addChild(scroller);


    }

    public select( e:lark.TouchEvent ){
        lark.log( this.list.selectedItems );
    }
}
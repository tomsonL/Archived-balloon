class TestAction extends lark.Sprite {
    private tupian:swan.Image;

    private center:number;

    public constructor() {
        super();
        var exml = `
            <s:Panel title="input" xmlns:s="http://ns.egret.com/swan">
                <s:Image id="img_id" width="300" height="80" source="resources/gray.png"/>
            </s:Panel>
           `;
        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        this.addChild(scroller);

        this.tupian=scroller.img_id;
        this.tupian.x=100;
        this.tupian.y=100;
        this.center=scroller.img_id.x;
        scroller.img_id.on(lark.Event.ENTER_FRAME, this.right_float, this);
    }

    public right_float( e:lark.Event ){
        e.target.x += 1;
        if( Math.abs(this.tupian.x-this.center) > 30 ){
            this.tupian.removeListener(lark.Event.ENTER_FRAME, this.right_float, this);
            this.tupian.on(lark.Event.ENTER_FRAME, this.left_float, this);
        }
    }

    public left_float( e:lark.TouchEvent ){
        e.target.x -= 1;
        if( Math.abs(this.tupian.x-this.center) > 30 ){
            this.tupian.removeListener(lark.Event.ENTER_FRAME, this.left_float, this);
            this.tupian.on(lark.Event.ENTER_FRAME, this.right_float, this);
        }
    }
}
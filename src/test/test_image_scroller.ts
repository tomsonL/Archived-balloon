class Test extends lark.Sprite
{

    private touch_start:number;
    private touch_end:number;
    private img_3:swan.Image;
    private img_group:swan.Group;
    private start_x:number;

    public constructor( ) {
        super();
        this.on(lark.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage( event:lark.Event ):void {
        var exml = `
        <s:Panel width="100%" height="800" xmlns:s="http://ns.egret.com/swan">
            <s:Group id="img_group" width="900"  top="0" height="100%">
                <s:Image id="img_1" width="300" height="300" source="resources/test/1.png"/>
                <s:Image id="img_2" width="300" height="300" source="resources/test/2.png"/>
                <s:Image id="img_3" width="300" height="300" source="resources/test/3.png"/>
            </s:Group>
        </s:Panel>
        `;
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild( panel );

        var layout=new swan.HorizontalLayout();
        layout.gap=10;
        panel.img_group.layout=layout;
        this.img_group = panel.img_group;

        panel.img_group.on( lark.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        panel.img_group.on( lark.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    }

    public onTouchBegin(e:lark.TouchEvent){
        this.touch_start = e.stageX;
    }

    public onTouchEnd(e:lark.TouchEvent){
        this.touch_end = e.stageX;
        var abs=Math.abs(this.touch_end - this.touch_start);
        //右滑
        if( this.touch_end > this.touch_start && abs > 80 ){
            this.start_x = this.img_group.x;
            this.img_group.on(lark.Event.ENTER_FRAME, this.right_slide, this);
        }
        //左滑
        if( this.touch_end < this.touch_start && abs > 80 ){
            this.start_x = this.img_group.x;
            this.img_group.on(lark.Event.ENTER_FRAME, this.left_slide, this);
        }
    }

    public right_slide( e:lark.Event ){
        this.img_group.x += 50;
        if(Math.abs(this.start_x - this.img_group.x) >= 300){
            e.target.removeListener(lark.Event.ENTER_FRAME,this.right_slide,this);
        }
    }

    public left_slide( e:lark.Event ){
        this.img_group.x -= 50;
        if(Math.abs(this.start_x - this.img_group.x) >= 300){
            e.target.removeListener(lark.Event.ENTER_FRAME,this.left_slide,this);
        }
    }

}
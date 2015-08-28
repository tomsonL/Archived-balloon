class ApiHandler extends lark.Sprite
{
    private base_url = "http://a.1kuaichui.cn/";
    public constructor( ) {
        super();
    }

    //public request( url:String, param:Array ){
    public request(  ){
        var url = this.base_url + "user/check_username/";

        var request:lark.HttpRequest = new lark.HttpRequest();

        var respHandler = function( evt:lark.Event ):void {
            switch ( evt.type ){
                case lark.Event.COMPLETE:
                    var request:lark.HttpRequest = evt.currentTarget;
                    console.log( "respHandler2:\n", request.response );
                    break;
                case lark.Event.IO_ERROR:
                    console.log( "respHandler io error" );
                    break;
            }
        }


        request.open( url, lark.HttpMethod.GET );

        request.send( "a=1" );

        request.once( lark.Event.COMPLETE, respHandler, null);
        request.once( lark.Event.IO_ERROR, respHandler, null);
    }
}

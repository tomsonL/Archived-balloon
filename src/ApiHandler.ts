class ApiHandler extends lark.Sprite
{
    private base_url = "http://a.1kuaichui.cn/";
    public constructor( ) {
        super();
        this.request();
    }

    public request(){
        var url = this.base_url + "user/check_username/";

        var request:lark.HttpRequest = new lark.HttpRequest();

        var respHandler = function( evt:lark.Event ):void {
            switch ( evt.type ){
                case lark.Event.COMPLETE:
                    var request:lark.HttpRequest = evt.currentTarget;
                    console.log( "respHandler:\n", request.response );
                    break;
                case lark.Event.IO_ERROR:
                    console.log( "respHandler io error" );
                    break;
            }
        }
        request.once( lark.Event.COMPLETE, respHandler, null);
        request.once( lark.Event.IO_ERROR, respHandler, null);
        request.open( url, lark.HttpMethod.POST );
        request.send( "user_name=18600363636" );
    }
}
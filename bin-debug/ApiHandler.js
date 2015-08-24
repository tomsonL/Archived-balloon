var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var ApiHandler = (function (_super) {
    __extends(ApiHandler, _super);
    function ApiHandler() {
        _super.call(this);
        this.base_url = "http://a.1kuaichui.cn/";
        this.request();
    }
    var d = __define,c=ApiHandler;p=c.prototype;
    p.request = function () {
        var url = this.base_url + "user/check_username/";
        var request = new lark.HttpRequest();
        var respHandler = function (evt) {
            switch (evt.type) {
                case lark.Event.COMPLETE:
                    var request = evt.currentTarget;
                    console.log("respHandler:\n", request.response);
                    break;
                case lark.Event.IO_ERROR:
                    console.log("respHandler io error");
                    break;
            }
        };
        request.once(lark.Event.COMPLETE, respHandler, null);
        request.once(lark.Event.IO_ERROR, respHandler, null);
        request.open(url, lark.HttpMethod.POST);
        request.send("user_name=18600363636");
    };
    return ApiHandler;
})(lark.Sprite);
lark.registerClass(ApiHandler,"ApiHandler");

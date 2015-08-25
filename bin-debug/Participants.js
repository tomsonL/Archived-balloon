var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var Participants = (function (_super) {
    __extends(Participants, _super);
    function Participants() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Participants;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "<s:Panel title=\"参与记录\" width=\"960\" height=\"1600\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Skin>\n                <s:Image id=\"top_banner\" top=\"0\" left=\"0\" width=\"100%\" height=\"192\" source=\"resources/participants/top_banner.png\" />\n                <s:Scroller width=\"100%\" height=\"1412\" top=\"192\" bottom=\"0\" >\n                    <s:List id=\"girls_list\" width=\"100%\" top=\"0\">\n                        <s:itemRenderer width=\"100%\">\n                            <s:ItemRenderer states=\"up,down,disabled\" width=\"100%\" height=\"228\" touchThrough=\"false\">\n                                <s:Image left=\"32\"  verticalCenter=\"0\" width=\"176\" height=\"176\" source=\"{data.img}\"/>\n                                <s:Label left=\"236\" top=\"30\" fontSize=\"40\" fontFamily=\"SimHei\" text=\"{data.username}\" textColor=\"0xe85846\" />\n                                <s:Label left=\"236\" top=\"102\" fontSize=\"40\" fontFamily=\"SimHei\" text=\"{data.time}\" textColor=\"0xe85846\" />\n                                <s:Label left=\"236\" top=\"166\" fontSize=\"40\" fontFamily=\"SimHei\" text=\"{data.paticipants}\" textColor=\"0xe85846\" />\n                                <s:Image bottom=\"0\" width=\"100%\" height=\"1\" source=\"resources/gray.png\"/>\n                            </s:ItemRenderer>\n                        </s:itemRenderer>\n                    </s:List>\n                </s:Scroller>\n            </s:Skin>\n        </s:Panel>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        this.addChild(panel);
        var list = panel.girls_list;
        var collection = new swan.ArrayCollection();
        for (var i = 0; i < 8; i++) {
            collection.addItem({
                "img": "resources/prod.jpg",
                "username": "李安",
                "time": "2015-06-23 10:26:35",
                "paticipants": "已参与 1 次",
            });
        }
        list.dataProvider = collection;
    };
    return Participants;
})(lark.Sprite);
lark.registerClass(Participants,"Participants");

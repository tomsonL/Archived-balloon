var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) { 
  Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var VoteList = (function (_super) {
    __extends(VoteList, _super);
    function VoteList() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=VoteList;p=c.prototype;
    p.onAddToStage = function (event) {
        var exml = "<s:Panel title=\"商品列表\" width=\"960\" height=\"1600\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Skin>\n                <s:Image id=\"top_banner\" top=\"0\" left=\"0\" width=\"100%\" height=\"192\" source=\"resources/girls_list/top_banner.png\" />\n                <s:Scroller width=\"100%\" height=\"1412\" top=\"192\" bottom=\"0\" >\n                    <s:List id=\"girls_list\" width=\"100%\" top=\"0\">\n                        <s:itemRenderer width=\"100%\">\n                            <s:ItemRenderer states=\"up,down,disabled\" width=\"100%\" height=\"228\" touchThrough=\"false\">\n                                <s:Image left=\"50\"  verticalCenter=\"0\" width=\"176\" height=\"212\" source=\"{data.img}\"/>\n                                <s:Image right=\"50\" verticalCenter=\"0\" width=\"248\" height=\"100\" source=\"{data.voting_btn}\"/>\n                                <s:Group verticalCenter=\"0\" left=\"256\" height=\"104\">\n                                    <s:Group top=\"0\" width=\"376\">\n                                        <s:Label left=\"0\" fontSize=\"42\" fontFamily=\"SimHei\" text=\"{data.username}\" textColor=\"0xe85846\" />\n                                        <s:Image left=\"160\" width=\"52\" height=\"52\" source=\"{data.credit_icon}\"/>\n                                    </s:Group>\n                                    <s:Label fontSize=\"36\" fontFamily=\"SimHei\" text=\"{data.voted}\"\n                                         textColor=\"0xbbbbbb\" bottom=\"0\"/>\n                                </s:Group>\n                                <s:Image bottom=\"0\" width=\"100%\" height=\"1\" source=\"resources/gray.png\"/>\n                            </s:ItemRenderer>\n                        </s:itemRenderer>\n                    </s:List>\n                </s:Scroller>\n            </s:Skin>\n        </s:Panel>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        //panel.width=panel.stage.stageWidth;
        //panel.height=panel.stage.stageHeight;
        this.addChild(panel);
        var list = panel.girls_list;
        var collection = new swan.ArrayCollection();
        for (var i = 0; i < 8; i++) {
            collection.addItem({
                "img": "resources/prod.jpg",
                "username": "用户名",
                "voted": "投票数 897887",
                "voting_btn": "resources/girls_list/voting_btn.png",
                "credit_icon": "resources/girls_list/credit_icon.png"
            });
        }
        list.dataProvider = collection;
    };
    return VoteList;
})(lark.Sprite);
lark.registerClass(VoteList,"VoteList");

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ProductList = (function (_super) {
    __extends(ProductList, _super);
    function ProductList() {
        _super.call(this);
        this.on(lark.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    ProductList.prototype.onAddToStage = function (event) {
        var stageWidth = Math.min(this.stage.stageWidth, 480);
        var stageHeight = Math.min(this.stage.stageHeight, 800);
        var scaleX = stageWidth / 480;
        var scaleY = stageHeight / 800;
        var exml = "<s:Panel title=\"商品列表\" width=\"480\" height=\"800\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Skin>\n                <s:Image id=\"top_banner\" left=\"0\" width=\"480\" height=\"96\" source=\"resources/product_list/top_banner.png\" />\n                <s:Scroller width=\"480\" height=\"706\" top=\"96\" scrollPolicyH=\"ScrollPolicy.OFF\" >\n                    <s:List id=\"product_list\" width=\"100%\" top=\"0\">\n                        <s:itemRenderer width=\"100%\">\n                            <s:ItemRenderer states=\"up,down,disabled\" width=\"100%\" height=\"138\" touchThrough=\"false\">\n                                <s:Image left=\"25\"  top=\"16\" width=\"88\" height=\"106\" source=\"{data.img}\"/>\n                                <s:Image right=\"85\" top=\"68\" width=\"60\" height=\"60\" source=\"{data.blow}\"/>\n                                <s:Image top=\"138\" width=\"100%\" height=\"2\" source=\"resources/product_list/line.png\"/>\n                                <s:Label width=\"322\" height=\"52\" verticalAlign=\"top\" fontSize=\"21\" fontFamily=\"SimHei\" text=\"{data.desc}\"\n                                         textColor=\"0xe85846\" left=\"134\" top=\"16\"/>\n                                <s:Label fontSize=\"18\" fontFamily=\"SimHei\" text=\"{data.total}\"\n                                         textColor=\"0xbbbbbb\" left=\"134\" top=\"80\"/>\n                                <s:Label fontSize=\"18\" fontFamily=\"SimHei\" text=\"{data.already}\"\n                                         textColor=\"0xbbbbbb\" left=\"134\" top=\"108\"/>\n                                <s:Label fontSize=\"18\" fontFamily=\"SimHei\" text=\"{data.left}\"\n                                         textColor=\"0xbbbbbb\" left=\"246\" top=\"108\"/>\n                                <s:Image top=\"102\" left=\"134\" width=\"212\" height=\"4\" source=\"resources/gray.png\"/>\n                                <s:ProgressBar id=\"progress_bar\" width=\"212\" height=\"4\" left=\"134\" top=\"102\" value=\"{data.value}\" minimum=\"0\" maximum=\"100\" >\n                                    <s:Skin>\n                                        <s:Image id=\"thumb\" width=\"100%\" height=\"100%\" source=\"resources/red.png\" scale9Grid=\"1,1,4,4\"/>\n                                    </s:Skin>\n                                </s:ProgressBar>\n                            </s:ItemRenderer>\n                        </s:itemRenderer>\n                    </s:List>\n                </s:Scroller>\n            </s:Skin>\n        </s:Panel>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        panel.width = stageWidth;
        panel.height = stageHeight;
        panel.scaleX = scaleX;
        panel.scaleY = scaleY;
        this.addChild(panel);
        var list = panel.product_list;
        var collection = new swan.ArrayCollection();
        for (var i = 0; i < 8; i++) {
            collection.addItem({
                "desc": "非凡的魅力，书写完美境界，款式随机，清仓甩卖，只要998！" + i,
                "total": "总需 6000 吹",
                "already": "3456 已吹",
                "left": "还需 1200 吹",
                "value": 30 + i * 30,
                "img": "resources/prod.jpg",
                "blow": "resources/product_list/blow_btn.png"
            });
        }
        list.dataProvider = collection;
    };
    return ProductList;
})(lark.Sprite);
//# sourceMappingURL=productList.js.map
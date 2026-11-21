/* 蜜雪冰城官方商品图映射
 * 封面一律用官方物料（小程序菜单截图抠图 / 官方公众号海报裁图）；
 * 用户自己的实拍图仅作为详情正文配图（见 drinks-data.js 的 had[i][1]）。
 * key = 品牌id + ':' + 场景(had|todo) + ':' + 序号
 * 值: { img, note }  note 非空表示"最接近款/官方示意图"，非精确同款。
 */
window.DRINKS_OFFICIAL = {
  /* ---- 已喝过 5 杯（封面用官方图，自拍移到正文） ---- */
  "mixue:had:0": { img: "苹果奶绿.png" },
  "mixue:had:1": { img: "满杯百香果.png" },
  "mixue:had:2": { img: "桑葚莓莓.png", note: "官方图：桑葚莓莓，与所记「雪王黑饮·桑葚气泡」同系列" },
  "mixue:had:3": { img: "棒打鲜橙.png", note: "官方图：棒打鲜橙，橘色果茶示意，非霸气橘原款" },
  "mixue:had:4": { img: "草莓摇摇奶昔-官.png", note: "官方图：草莓摇摇奶昔，雪顶奶昔近似款" },

  /* ---- 待解锁 14 款（官方图替换杯型插画） ---- */
  "mixue:todo:0":  { img: "冰鲜柠檬水.png" },
  "mixue:todo:1":  { img: "珍珠奶茶.png" },
  "mixue:todo:2":  { img: "茉莉奶绿.png" },
  "mixue:todo:3":  { img: "黑糖珍珠奶茶.png" },
  "mixue:todo:4":  { img: "蜜桃四季春.png" },
  "mixue:todo:5":  { img: "棒打鲜橙.png" },
  "mixue:todo:6":  { img: "芋圆葡萄.png" },
  "mixue:todo:7":  { img: "三拼霸霸奶茶.png" },
  "mixue:todo:8":  { img: "草莓啵啵.png" },
  "mixue:todo:9":  { img: "杨枝甘露.png" },
  "mixue:todo:10": { img: "生椰拿铁.png" },
  "mixue:todo:11": { img: "芋泥鲜牛乳.png" },
  "mixue:todo:12": { img: "雪王大圣代草莓.png", note: "官方图：雪王大圣代，抹茶口味以草莓款示意" },
  "mixue:todo:13": { img: "黑糖珍珠鲜牛乳.png", note: "官方图：黑糖珍珠鲜牛乳，与撞奶同系列" }
};

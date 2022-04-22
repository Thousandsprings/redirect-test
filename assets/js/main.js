function loaded() {
  const codes = {
    // ブランデーケーキ掛け紙 英字柄(247×295mm) SK:その他ペーパー・シート, ODR:その他付属品 (カテゴリー分類)
    "/shopbrand/ct560/": "/component/c/c7030",

    //要配列追加
  };

  // ブランデーケーキ掛け紙英字柄(247×295mm) SKサイト
  //カテゴリーだとその他ペーパー・シート ↓
  //https://skweb.marubishi-group.co.jp/shopbrand/ct560/
  //商品詳細だと↓
  // https://skweb.marubishi-group.co.jp/shopdetail/000000000018/ct560/page1/order/
  // この場合はlocation.path=/shopdetail/000000000018/ct560/page1/order/ がlocation.pathname?

  //get a current URL
  // const currentUrl = location.href;

  //get a pathname of SK
  const pathName = location.pathname;
  console.log(pathName);
  // /shopbrand/ct560/l

  // const oldValue = Object.keys(codes);
  const newValue = codes[pathName];

  document.getElementById("loading").classList.remove("active");

  if (pathName == void 0) {
    window.location.href = "https://orderie.jp/";
  } else {
    window.location.href = `https://orderie.jp${newValue}`;
  }
}
setTimeout(loaded, 3000);

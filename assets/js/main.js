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
    // リダイレクト先にパラメーターを引き継ぐ
    const redirect_url = "https://orderie.jp/" + location.search;
    // 直前のURLがあるかどうか(urlを直接叩いての流入なのか判別)
    if (document.referrer) {
      // リダイレクト先に渡す用のパラメーターを作成
      const referrer = "referrer=" + encodeURIComponent(document.referrer);
      // リダイレクト先にリファラー情報をパラメーターとして渡す
      // (クエリ文字があれば&で繋いでなければ?でクエリ文字として追加)
      redirect_url = redirect_url + (location.search ? "&" : "?") + referrer;
      console.log(referrer);
    }
    window.location.href = redirect_url;
  } else {
    // リダイレクト先にパラメーターを引き継ぐ
    const redirect_url_category =
      `https://orderie.jp${newValue}` + location.search;
    // 直前のURLがあるかどうか(urlを直接叩いての流入なのか判別)
    if (document.referrer) {
      // リダイレクト先に渡す用のパラメーターを作成
      const referrer = "referrer=" + encodeURIComponent(document.referrer);
      // リダイレクト先にリファラー情報をパラメーターとして渡す
      // (クエリ文字があれば&で繋いでなければ?でクエリ文字として追加)
      redirect_url_category =
        redirect_url + (location.search ? "&" : "?") + referrer;
      console.log(referrer);
    }
    window.location.href = redirect_url_category;
  }
}
setTimeout(loaded, 3000);

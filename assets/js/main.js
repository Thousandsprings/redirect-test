function loaded() {
  const codes = {
    // ブランデーケーキ掛け紙 英字柄(247×295mm)
    // "000000000018": "05397-2000",
    // その他付属品 カテゴリー
    ct538: "7030",
  };

  // const newValue = codes["000000000018"];

  const oldValue = Object.keys(codes);

  console.log(oldValue);

  // SKカテゴリー＝ラッピング
  // https://skweb.marubishi-group.co.jp/shopbrand/ct538/

  if (a in codes) {
    let newValue = codes[a[0]];

    document.getElementById("loading").classList.remove("active");

    //対応する商品↓
    // window.location.href = `https://orderie.jp/component/g/g${newValue}/`;

    // カテゴリーなら ↓
    window.location.href = `https://orderie.jp/component/c/c${newValue}/`;
  } else {
    window.location.href = "https://orderie.jp/";
  }
}
setTimeout(loaded, 3000);

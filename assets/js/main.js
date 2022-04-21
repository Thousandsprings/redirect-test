function loaded() {
  let codes = {
    "000000000018": "05397-2000",
    "000000003415": "66064",
  };

  const oldValue = codes["000000000018"];
  ("https://skweb.marubishi-group.co.jp/shopdetail/${oldValue}/index.html");
  const newValue = oldValue;
  document.getElementById("loading").classList.remove("active");

  window.location.href = `https://orderie.jp/component/g/g${newValue}/`;
}
setTimeout(loaded, 3000);

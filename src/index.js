const onClickAdd = () => {
  // テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  // 値を初期化する
  document.getElementById("add-text").value = "";
  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button（完了）タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // button（削除）タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

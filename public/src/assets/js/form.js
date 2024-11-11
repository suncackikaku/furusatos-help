document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // デフォルトの送信を防止
  
  const formData = new FormData(this);
  const url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfOuMSSU_QsmwmBi_ZMmI1cQmhKyPjKH5PVEbIqvu2--83ifw/formResponse";

  for (let value of formData.entries()) { 
    console.log(value); 
  }

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    body: formData
  })
  .then(() => {
    document.getElementById("form-wrap").style.display = "none"; // 送信ボタンを非表示に
    document.getElementById("thank-you-message").style.display = "block"; // 送信完了メッセージを表示
  })
  .catch(error => {
    console.error("送信に失敗しました:", error);
  });
});
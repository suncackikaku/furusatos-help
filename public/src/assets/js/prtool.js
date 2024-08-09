const bnrWrap = document.getElementById('js-bnr_wrapper');

// クローズボタン押下時のイベントハンドリングする関数
setup = () => {
  const key = getPagePath();
  const data = getLocaleStrage(key);
  if(data === null || isExpired(key)) { // keyが保存されていない || 保存期限を過ぎている 
    showBnr();
  } else {// keyに値が設定されている場合
  }

  const btn = document.getElementById('js-bnr_close_btn');
  btn.addEventListener('click',(e) => {
    e.preventDefault();
    hideBnr();
    setHideDate(key);
  });
}

// バナーを表示させる関数
showBnr = () => {
  bnrWrap.classList.add("is-show");
}

// バナーを非表示にする関数
hideBnr = () => {
  bnrWrap.classList.remove("is-show");
}

// ページURLを取得する関数
getPagePath = () => {
  return location.pathname;
}

// ローカルストレージ（LS）の値を取得する関数
getLocaleStrage = (key) => {
  return localStorage.getItem(key)
}

// LSへ値を保存する関数
setLocalStrage = (key, value) => {
  localStorage.setItem(key, value);
} 

// クローズボタン押下時にLSへ非表示とした年月日を保存する関数
setHideDate = (key) => {
  const visitedDay = getToday(); // 実際の動作用
  // const visitedDay = "2024/09/08"; //debug用の記述
  const twoWeekLater = get2weekLater(visitedDay)
  const obj = {
    isHideDate: visitedDay,
    twoWeekLater: twoWeekLater
  }
  setLocalStrage(key, JSON.stringify(obj));
}

// 再訪時の年月日とLSに保存された非表示とした年月日を比較する関数
isExpired = (key) => {
  const value = JSON.parse(getLocaleStrage(key));
  const today = new Date(getToday()); // 実際の動作用
  // const today = new Date("2024/09/08"); //debug用の記述
  const twoWeekLater = new Date(value.twoWeekLater);

  if(today > twoWeekLater) { // 保存期限を過ぎている場合
    return true
  } else {
    return false;
  }
}

// 訪問時の年月日を取得する関数
getToday = () => {
  const visitedDay = new Date(Date.now());
  return formatDate(visitedDay);
}

// 非表示とした年月日から2週間後の日付を取得する関数
get2weekLater = (today) => {
  const d_milli_sec = new Date(today).getTime();
  const twoWeekLater = new Date(d_milli_sec + 14 * 24 * 60 * 60 * 1000);
  return formatDate(twoWeekLater);
}

// 日付のフォーマットをyyyy/mm/ddに整える関数 
formatDate = (milli_sec_date) => {
  const year = milli_sec_date.getFullYear();
  const month = (`0${milli_sec_date.getMonth() + 1}`).slice( -2 );
  const date = (`0${milli_sec_date.getDate()}`).slice( -2 );
  return `${year}/${month}/${date}`
}

setup();
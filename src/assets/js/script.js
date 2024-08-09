/**
 * スクロール時のアニメーションの処理
 */
const floatNav = document.querySelector('.js-floating-nav');
const displayingAnimKeyframes = [
  {
    opacity: '0'
  },
  {
    opacity: '1'
  }
]
const hidingAnimKeyframes = [
  {
    opacity: '1'
  },
  {
    opacity: '0'
  }
]

const defaultAnimTiming = {
    duration: 600,
    easing: "ease-out",
    fill: "forwards"
  };

const intersectionObserver = new IntersectionObserver((entries) => {
  if(entries[0].intersectionRatio <= 0) {
    const closingAnim = floatNav.animate(hidingAnimKeyframes, defaultAnimTiming);
    closingAnim.onfinish = () => {
      floatNav.classList.remove('is-show');
    }
    if(navOuter.classList.contains('is-opened')) {
      navOuter.classList.remove('is-opened'); // 
      navOuter.animate(closingAnimkeyframes,defaultAnimTiming) // 
    }
  } else {
    floatNav.classList.add('is-show');
    const openingAnim = floatNav.animate(displayingAnimKeyframes, defaultAnimTiming);
  }
});

intersectionObserver.observe(document.getElementById('top-index'));

/**
 * ナビゲーションの処理
*/

const openingAnimkeyframes = [
  {
    width: "64px",
    height: "64px",
    borderRadius: "50%"
  },
  {
    width: "380px",
    height: "64px",
    borderRadius: "16px"
  },
  {
    width: "380px",
    height: "250px",
    borderRadius: "16px"
  }
]

const closingAnimkeyframes = [
  {
    width: "380px",
    height: "250px",
    borderRadius: "16px"
  },
  {
    width: "380px",
    height: "64px",
    borderRadius: "16px"
  },
  {
    width: "64px",
    height: "64px",
    borderRadius: "16px"
  },
  {
    width: "64px",
    height: "64px",
    borderRadius: "50%"
  },
]

const defaultPattern = {
  dir: 'defaultQuestion',
  questions: ['question1.json','question2.json','question3.json',]
}

const opneBtn = document.getElementById('navBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const navOuter = document.querySelector('.nav-outer');
const panels = document.getElementById('js-slide');
let currentIndex = 0;
let maxIndex = 0;

// 質問パターンからリストを作成する関数
createListFromPattern = (pattern) => {
  const dir = pattern.dir
  const arrary = pattern.questions;
  const len = arrary.length;
  arrary.map((filename,i) => {
    const jsonPath = getJsonFilePath(dir, filename);
    createQAFromJson(jsonPath,i,len);
  });
}

// jsonを取得する関数
getJsonFilePath = (path, filename) => {
  const filePath = `/json/${path}/${filename}`
  return filePath;
}

// jsonファイルからhtml要素を生成する関数
createQAFromJson = (jsonPath,index,length) => {
  fetch(jsonPath)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const keys = Object.keys(data[0])

    let html = '';

    keys.map((e) => {
      const qa = data[0][e]
      const question = qa.question;

      const answers = Object.keys(qa.answers).map((a) => {
        const answer = qa.answers[a].answer;
        const nextQ = qa.answers[a].nextQ;
        const nextIndex = index !== length - 1 ? Number(index) + 1 : -1;

        return `<li><a href="#${nextQ}" class="js-nextSlideLink" data-next-Index="${nextIndex}">${answer}</a></li>`
      }).join('')

      html += `<div class="navigation-boxInner" id="${e}"><p>${question}</p><ul class="questionList">${answers}</ul></div>
      `
    })

    const div = document.createElement('div');
    div.className = 'navigation-box';
    div.id = `navigation-box${( '00' + index ).slice( -2 )}`;
    div.innerHTML = html;
    div.dataset.navigationIndex = index;

    div.querySelectorAll('.js-nextSlideLink').forEach((e) => {
      setupNextSlideLinkClickEvent(e);
    });

    document.getElementById('js-slide').appendChild(div);

    const navBoxes = document.querySelectorAll('.navigation-box');
    navBoxes.forEach((box) => {
      box.querySelector('.navigation-boxInner').classList.add('is-active');
    })
  })
  .catch((error) => {
    console.error(error, 'jsonファイルの取得に失敗しました');
  })
}

// 次のパネルを表示させるクリックイベントを設定する関数
setupNextSlideLinkClickEvent = (a) => {
  a.addEventListener('click',(e) => {
    e.preventDefault();
    const hash = e.target.hash;
    const nextIndex = e.target.dataset.nextIndex;
    const nextSlide = document.querySelector(hash);
    
    // 次の選択肢を表示させる
    if(nextSlide) {// href="#XXX"の形だった場合の処理
      const nextPanel = document.querySelector(`[data-navigation-index="${nextIndex}"]`)
      nextPanel.querySelectorAll('.navigation-boxInner').forEach((inner) => {
        inner.classList.remove('is-active');
      });
      nextPanel.querySelector(hash).classList.add('is-active');
      currentIndex = Number(nextIndex);
    } else {
      console.log('リンク先へ遷移');
      return;
    }
    slidePanel(nextIndex);
    togglePrevBtnClass();
  });
}

// パネルをスライドさせる関数
slidePanel = (index, dirction = -1, slideWidth = 380) => { 
  panels.style.transform = `translateX(${ slideWidth * index * dirction}px)`; 
}

// パネルを初期化する関数
initPanel = () => {
  currentIndex = 0;
  togglePrevBtnClass();
  slidePanel(currentIndex);
}

// prevBtnのクラスを切り替える関数
togglePrevBtnClass = () => {
  if(currentIndex === 0) {
    prevBtn.classList.add('is-hide');
  } else {
    prevBtn.classList.remove('is-hide');
  }
}

// ナビゲーション内にQAをセットする関数
setupQA = () => {
  createListFromPattern(defaultPattern);
  togglePrevBtnClass();
}

prevBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if(currentIndex === 0) return;
  slidePanel(currentIndex - 1);
  currentIndex--
  togglePrevBtnClass();
});

nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if(currentIndex === maxIndex) return;
  slidePanel(currentIndex + 1)
  currentIndex++
  togglePrevBtnClass();
})

opneBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (navOuter.classList.contains('is-opened')) {
    navOuter.classList.remove('is-opened');
    const closingAnim = navOuter.animate(closingAnimkeyframes,defaultAnimTiming)
  } else {
    initPanel();
    navOuter.classList.add('is-opened');
    const openingAnim = navOuter.animate(openingAnimkeyframes,defaultAnimTiming);
    openingAnim.onfinish = () => {
    }
  }
});

c = (text) => {
  console.log(text);
}

setupArticles = () => {
  const jsonPath = getJsonFilePath("notice", "notice1.json");
  fetch(jsonPath)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    maxIndex = data.length - 1;
    
    data.forEach((d, index) => {
      const anchor = `<a class="articleInner" href="${d.href}"><div><img src="${d.imgSrc}" alt=""></div><div><h4>${d.title}</h4><p>${d.text}</p></div></a>`;
      const article = document.createElement('article');
      article.className = 'navigation-box';
      article.id = `navigation-box${( '00' + index ).slice( -2 )}`;
      article.innerHTML = anchor;
      article.dataset.navigationIndex = index;
      document.getElementById('js-slide').appendChild(article);
    });
  })
  .catch((e) => {
    c(e);
  })
};
if(true) {
  setupArticles();
} else {
  setupQA();
}
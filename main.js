console.log('これは v4.0 です');

(function () {
const log = document.getElementById('log-range');

const levelElm = document.getElementById('level');
const soldElm = document.getElementById('sold');
const levelUpElm = document.getElementById('level-up');

const table1_1_elm = document.getElementById('table1-1_elm');
const table1_2_elm = document.getElementById('table1-2_elm');
const table1_3_elm = document.getElementById('table1-3_elm');
const table1_4_elm = document.getElementById('table1-4_elm');
const table1_5_elm = document.getElementById('table1-5_elm');
const table1_6_elm = document.getElementById('table1-6_elm');
const table1_7_elm = document.getElementById('table1-7_elm');
const table1_8_elm = document.getElementById('table1-8_elm');
const table1_9_elm = document.getElementById('table1-9_elm');
const table1_10_elm = document.getElementById('table1-10_elm');

const table1_1_name = document.getElementById('table1-1_name');
const table1_2_name = document.getElementById('table1-2_name');
const table1_3_name = document.getElementById('table1-3_name');
const table1_4_name = document.getElementById('table1-4_name');
const table1_5_name = document.getElementById('table1-5_name');
const table1_6_name = document.getElementById('table1-6_name');
const table1_7_name = document.getElementById('table1-7_name');
const table1_8_name = document.getElementById('table1-8_name');
const table1_9_name = document.getElementById('table1-9_name');
const table1_10_name = document.getElementById('table1-10_name');

const table1_1_num = document.getElementById('table1-1_num');
const table1_2_num = document.getElementById('table1-2_num');
const table1_3_num = document.getElementById('table1-3_num');
const table1_4_num = document.getElementById('table1-4_num');
const table1_5_num = document.getElementById('table1-5_num');
const table1_6_num = document.getElementById('table1-6_num');
const table1_7_num = document.getElementById('table1-7_num');
const table1_8_num = document.getElementById('table1-8_num');
const table1_9_num = document.getElementById('table1-9_num');
const table1_10_num = document.getElementById('table1-10_num');

const table2_1_elm = document.getElementById('table2-1_elm');
const table2_2_elm = document.getElementById('table2-2_elm');
const table2_3_elm = document.getElementById('table2-3_elm');
const table2_4_elm = document.getElementById('table2-4_elm');
const table2_5_elm = document.getElementById('table2-5_elm');
const table2_6_elm = document.getElementById('table2-6_elm');
const table2_7_elm = document.getElementById('table2-7_elm');
const table2_8_elm = document.getElementById('table2-8_elm');
const table2_9_elm = document.getElementById('table2-9_elm');

const table2_1_name = document.getElementById('table2-1_name');
const table2_2_name = document.getElementById('table2-2_name');
const table2_3_name = document.getElementById('table2-3_name');
const table2_4_name = document.getElementById('table2-4_name');
const table2_5_name = document.getElementById('table2-5_name');
const table2_6_name = document.getElementById('table2-6_name');
const table2_7_name = document.getElementById('table2-7_name');
const table2_8_name = document.getElementById('table2-8_name');
const table2_9_name = document.getElementById('table2-9_name');

const table2_1_num = document.getElementById('table2-1_num');
const table2_2_num = document.getElementById('table2-2_num');
const table2_3_num = document.getElementById('table2-3_num');
const table2_4_num = document.getElementById('table2-4_num');
const table2_5_num = document.getElementById('table2-5_num');
const table2_6_num = document.getElementById('table2-6_num');
const table2_7_num = document.getElementById('table2-7_num');
const table2_8_num = document.getElementById('table2-8_num');
const table2_9_num = document.getElementById('table2-9_num');

const buyOpen = document.getElementById('modal_open1');
const makeOpen = document.getElementById('modal_open2');

const buyToL = document.getElementById('buy-left');
const buyToR = document.getElementById('buy-right');
const buyName = document.getElementById('content1');
const buyImg = document.getElementById('img1');
const buyNedan = document.getElementById('nedan');
const buyHave = document.getElementById('buy-have');
const buyOpenLv = document.getElementById('buyOpenLv');
const buyOpenLvElm = document.getElementById('buyOpenLvElm');

const makeToL = document.getElementById('make-left');
const makeToR = document.getElementById('make-right');
const makeName = document.getElementById('content2');
const makeImg = document.getElementById('img2');
const income = document.getElementById('income');
const makeHave = document.getElementById('make-have');
const makeOpenLv = document.getElementById('makeOpenLv');
const makeOpenLvElm = document.getElementById('makeOpenLvElm');

const ing1 = document.getElementById('ing1');
const ing2 = document.getElementById('ing2');
const ing3 = document.getElementById('ing3');
const ing1_img = document.getElementById('ing1-img');
const ing2_img = document.getElementById('ing2-img');
const ing3_img = document.getElementById('ing3-img');
const ing1_have = document.getElementById('ing1-have');
const ing2_have = document.getElementById('ing2-have');
const ing3_have = document.getElementById('ing3-have');
const ing1_need = document.getElementById('ing1-need');
const ing2_need = document.getElementById('ing2-need');
const ing3_need = document.getElementById('ing3-need');

const buy1 = document.getElementById('buy1');
const buy10 = document.getElementById('buy10');
const buy100 = document.getElementById('buy100');
const buyAll = document.getElementById('buyAll');
const sell1 = document.getElementById('sell1');
const sell10 = document.getElementById('sell10');
const sell100 = document.getElementById('sell100');
const sellAll = document.getElementById('sellAll');
const make1 = document.getElementById('make1');
const make10 = document.getElementById('make10');
const make100 = document.getElementById('make100');
const makeAll = document.getElementById('makeAll');

const upgradeL1 = document.getElementById('upgradeLv-1');
const upgradeL2 = document.getElementById('upgradeLv-2');
const upgradeL3 = document.getElementById('upgradeLv-3');
const upgradeUL1 = document.getElementById('upgrade-unlock-Lv-1');
const upgradeUL2 = document.getElementById('upgrade-unlock-Lv-2');
const upgradeUL3 = document.getElementById('upgrade-unlock-Lv-3');
const upgradeB1 = document.getElementById('upgrade-button1');
const upgradeB2 = document.getElementById('upgrade-button2');
const upgradeB3 = document.getElementById('upgrade-button3');
const upgradeN1 = document.getElementById('upgrade-need1');
const upgradeN2 = document.getElementById('upgrade-need2');
const upgradeN3 = document.getElementById('upgrade-need3');

const saveElm = document.getElementById('save');
const loadElm = document.getElementById('load');

const moneyElm1 = document.getElementById('money1');
const moneyElm2 = document.getElementById('money2');

let money = localStorage.getItem('money') !== null ? Number(localStorage.getItem('money')) : 115;
let level = localStorage.getItem('level') !== null ? Number(localStorage.getItem('level')) : 1;
let sold = localStorage.getItem('sold') !== null ? Number(localStorage.getItem('sold')) : 0;
let levelUp = localStorage.getItem('levelUp') !== null ? Number(localStorage.getItem('levelUp')) : 4;
let buyPage = 1;
let makePage = 1;
let profit = localStorage.getItem('profit') !== null ? Number(localStorage.getItem('profit')) : 0; //累計利益

let uniqueId;
let bakeryName = localStorage.getItem('bakeryNameKey');
let all;

//配列
//buy = [材料名],[値段],[画像ファイル],[持っている数],[解放レベル]
let buyDisplay = JSON.parse(localStorage.getItem('buyDisplay')) ?? [
    [null],
    [['小麦'],[30],['img/komugi.png'],[0],[1]],
    [['小豆'],[50],['img/azuki.png'],[0],[1]],
    [['チョコレート'],[80],['img/choko.png'],[0],[2]],
    [['卵'],[90],['img/tamago.png'],[0],[2]],
    [['牛乳'],[105],['img/gyunyu.png'],[0],[2]],
    [['砂糖'],[110],['img/satou.png'],[0],[3]],
    [['バター'],[120],['img/bata.png'],[0],[3]],
    [['塩'],[160],['img/sio.png'],[0],[4]],
    [['はちみつ'],[200],['img/hatimitu.png'],[0],[5]],
    [['野菜セット'],[750],['img/yasai.png'],[0],[5]]
];

/*make =[名前],[[材料の種類],[材料の数]],[[材料の種類],[材料の数]],[[材料の種類],[材料の数]],
[収入],[画像ファイル],[所持数],[解放レベル]*/
let makeDisplay = JSON.parse(localStorage.getItem('makeDisplay')) ?? [
    [null],
    [['パン'],[[1],[1]],[[0],[0]],[[0],[0]],[45],['img/pan.png'],[0],[1]],
    [['あんぱん'],[[1],[2]],[[2],[1]],[[0],[0]],[130],['img/anpan.png'],[0],[1]],
    [['チョココロネ'],[[1],[1]],[[3],[1]],[[0],[0]],[270],['img/korone.png'],[0],[2]],
    [['クリームパン'],[[1],[1]],[[4],[1]],[[5],[1]],[440],['img/kurimu.png'],[0],[3]],
    [['ウシジマパン'],[[1],[3]],[[6],[2]],[[7],[1]],[590],['img/ushijima.png'],[0],[4]],
    [['塩パン'],[[1],[1]],[[7],[1]],[[8],[1]],[650],['img/siopan.png'],[0],[5]],
    [['フランスパン'],[[1],[10]],[[6],[1]],[[7],[1]],[750],['img/huransupan.png'],[0],[5]],
    [['ベーグル'],[[1],[2]],[[6],[2]],[[9],[1]],[920],['img/beguru.png'],[0],[6]],
    [['イタリアンピザ'],[[1],[2]],[[5],[1]],[[10],[1]],[1380],['img/piza.png'],[0],[6]]
];

let upgradeDisplay = JSON.parse(localStorage.getItem('upgradeDisplay')) ?? [
    [null],
    [['チラシ配り'],[1],[3],[540]],
    [['美味しいパン'],[1],[6],[920]],
    [['黒字'],[1],[11],[1080]]
];

//ストレージ
function save() {
    console.log('Saving data...');
    localStorage.setItem('money',money);
    localStorage.setItem('level',level);
    localStorage.setItem('sold',sold);
    localStorage.setItem('levelUp',levelUp);
    localStorage.setItem('profit',profit);
    if (bakeryName) localStorage.setItem('bakeryNameKey',bakeryName);
    localStorage.setItem('buyDisplay',JSON.stringify(buyDisplay));
    localStorage.setItem('makeDisplay',JSON.stringify(makeDisplay));
    localStorage.setItem('upgradeDisplay',JSON.stringify(upgradeDisplay));
    dataForSend();
}


buyOpen.addEventListener('click', () => {
    buyPage = 1;
    reloadOfBuy();
});

buyToL.addEventListener('click', () => {
    if (buyPage > 1) {
        buyPage--;
    }
    reloadOfBuy();
});

buyToR.addEventListener('click', () => {
    if (buyPage < buyDisplay.length - 1) {
        buyPage++;
    }
    reloadOfBuy();
});

makeOpen.addEventListener('click', () => {
    makePage = 1;
    reloadOfMake();
});

makeToL.addEventListener('click', () => {
    if (makePage > 1) {
        makePage--;
    }
    reloadOfMake();
});

makeToR.addEventListener('click', () => {
    if (makePage < makeDisplay.length - 1) {
        makePage++;
    }
    reloadOfMake();
});

buy1.addEventListener('click', () => {
    if (buyDisplay[buyPage][4] <= level) {
        buy(1);
    }
});

buy10.addEventListener('click', () => {
    if (buyDisplay[buyPage][4] <= level) {
        buy(10);
    }
});

buy100.addEventListener('click', () => {
    if (buyDisplay[buyPage][4] <= level) {
        buy(100);
    }
});

buyAll.addEventListener('click', () => {
    if (buyDisplay[buyPage][4] <= level) {
        let num = Math.floor(money / buyDisplay[buyPage][1]);
        buy(num);
    }
});

sell1.addEventListener('click', () => {
    if (buyDisplay[buyPage][4] <= level) {
        sell(1);
    }
});

sell10.addEventListener('click', () => {
    if (buyDisplay[buyPage][4] <= level) {
        sell(10);
    }
});

sell100.addEventListener('click', () => {
    if (buyDisplay[buyPage][4] <= level) {
        sell(100);
    }
});

sellAll.addEventListener('click', () => {
    if (buyDisplay[buyPage][4] <= level) {
        let num = buyDisplay[buyPage][3];
        sell(num);
    }
});

make1.addEventListener('click', () => {
    if (makeDisplay[makePage][7] <= level) {
        make(1);
    }
});

make10.addEventListener('click', () => {
    if (makeDisplay[makePage][7] <= level) {
        let canmake = true;
        let makeN = 0;
        if (makeDisplay[makePage][1][0] != 0) { //材料枠1に材料がある?
            if (buyDisplay[makeDisplay[makePage][1][0]][3] >= makeDisplay[makePage][1][1]) {//持っている数が必要数ある?
                makeN = Math.floor(buyDisplay[makeDisplay[makePage][1][0]][3] / makeDisplay[makePage][1][1]);
                //持っている数÷必要数を切り下げて、何個作れるか
            } else {
                canmake = false;
            };
        };
    
        if (makeDisplay[makePage][2][0] != 0) { //材料枠2に材料がある?
            if (buyDisplay[makeDisplay[makePage][2][0]][3] >= makeDisplay[makePage][2][1]) {//持っている数が必要数ある? 
              if (makeN > Math.floor(buyDisplay[makeDisplay[makePage][2][0]][3] / makeDisplay[makePage][2][1])) {
                    //材料枠1の条件で買える量より少なかったら合わせる
                    makeN = Math.floor(buyDisplay[makeDisplay[makePage][2][0]][3] / makeDisplay[makePage][2][1]);
                };
                //持っている数÷必要数を切り下げて、何個作れるか
            } else {
                canmake = false;
            };
        };

        if (makeDisplay[makePage][3][0] != 0) { //材料枠3に材料がある?
            if (buyDisplay[makeDisplay[makePage][3][0]][3] >= makeDisplay[makePage][3][1]) {//持っている数が必要数ある?
                if (makeN > Math.floor(buyDisplay[makeDisplay[makePage][3][0]][3] / makeDisplay[makePage][3][1])) {
                    //材料枠1,2の条件で買える量より少なかったら合わせる
                    makeN = Math.floor(buyDisplay[makeDisplay[makePage][3][0]][3] / makeDisplay[makePage][3][1]);
                };
                //持っている数÷必要数を切り下げて、何個作れるか
            } else {
                canmake = false;
            };
        };

        if (makeN >= 10) make(10);
    };
});

make100.addEventListener('click', () => {
    if (makeDisplay[makePage][7] <= level) {
        let canmake = true;
        let makeN = 0;
        if (makeDisplay[makePage][1][0] != 0) { //材料枠1に材料がある?
            if (buyDisplay[makeDisplay[makePage][1][0]][3] >= makeDisplay[makePage][1][1]) {//持っている数が必要数ある?
                makeN = Math.floor(buyDisplay[makeDisplay[makePage][1][0]][3] / makeDisplay[makePage][1][1]);
                //持っている数÷必要数を切り下げて、何個作れるか
            } else {
                canmake = false;
            };
        };
    
        if (makeDisplay[makePage][2][0] != 0) { //材料枠2に材料がある?
            if (buyDisplay[makeDisplay[makePage][2][0]][3] >= makeDisplay[makePage][2][1]) {//持っている数が必要数ある? 
              if (makeN > Math.floor(buyDisplay[makeDisplay[makePage][2][0]][3] / makeDisplay[makePage][2][1])) {
                    //材料枠1の条件で買える量より少なかったら合わせる
                    makeN = Math.floor(buyDisplay[makeDisplay[makePage][2][0]][3] / makeDisplay[makePage][2][1]);
                };
                //持っている数÷必要数を切り下げて、何個作れるか
            } else {
                canmake = false;
            };
        };

        if (makeDisplay[makePage][3][0] != 0) { //材料枠3に材料がある?
            if (buyDisplay[makeDisplay[makePage][3][0]][3] >= makeDisplay[makePage][3][1]) {//持っている数が必要数ある?
                if (makeN > Math.floor(buyDisplay[makeDisplay[makePage][3][0]][3] / makeDisplay[makePage][3][1])) {
                    //材料枠1,2の条件で買える量より少なかったら合わせる
                    makeN = Math.floor(buyDisplay[makeDisplay[makePage][3][0]][3] / makeDisplay[makePage][3][1]);
                };
                //持っている数÷必要数を切り下げて、何個作れるか
            } else {
                canmake = false;
            };
        };

        if (makeN >= 100) make(100);
    };
});

makeAll.addEventListener('click', () => {
    let canmake = true;
    let makeN = 0;
    if (makeDisplay[makePage][1][0] != 0) { //材料枠1に材料がある?
        if (buyDisplay[makeDisplay[makePage][1][0]][3] >= makeDisplay[makePage][1][1]) {//持っている数が必要数ある?
            makeN = Math.floor(buyDisplay[makeDisplay[makePage][1][0]][3] / makeDisplay[makePage][1][1]);
            //持っている数÷必要数を切り下げて、何個作れるか
        } else {
            canmake = false;
        };
    };
    
    if (makeDisplay[makePage][2][0] != 0) { //材料枠2に材料がある?
        if (buyDisplay[makeDisplay[makePage][2][0]][3] >= makeDisplay[makePage][2][1]) {//持っている数が必要数ある?
            if (makeN > Math.floor(buyDisplay[makeDisplay[makePage][2][0]][3] / makeDisplay[makePage][2][1])) {
                //材料枠1の条件で買える量より少なかったら合わせる
                makeN = Math.floor(buyDisplay[makeDisplay[makePage][2][0]][3] / makeDisplay[makePage][2][1]);
            };
            //持っている数÷必要数を切り下げて、何個作れるか
        } else {
            canmake = false;
        };
    };

    if (makeDisplay[makePage][3][0] != 0) { //材料枠3に材料がある?
        if (buyDisplay[makeDisplay[makePage][3][0]][3] >= makeDisplay[makePage][3][1]) {//持っている数が必要数ある?
            if (makeN > Math.floor(buyDisplay[makeDisplay[makePage][3][0]][3] / makeDisplay[makePage][3][1])) {
                //材料枠1,2の条件で買える量より少なかったら合わせる
                makeN = Math.floor(buyDisplay[makeDisplay[makePage][3][0]][3] / makeDisplay[makePage][3][1]);
            };
            //持っている数÷必要数を切り下げて、何個作れるか
        } else {
            canmake = false;
        };
    };

    canmake === true && make(makeN)
    //作れるなら作れる分作る
});

upgradeB1.addEventListener('click', () => {
    if (level >= upgradeDisplay[1][2] && money >= upgradeDisplay[1][3]) {
        upgradeDisplay[1][1]++;
        money = money - upgradeDisplay[1][3];
        upgradeDisplay[1][3] = Math.floor(upgradeDisplay[1][3] * 1.2);
        save();
    }
    reloadOfUpgrade();
});

upgradeB2.addEventListener('click', () => {
    if (level >= upgradeDisplay[2][2] && money >= upgradeDisplay[2][3]) {
        upgradeDisplay[2][1]++;
        money = money - upgradeDisplay[2][3];
        upgradeDisplay[2][3] = Math.floor(upgradeDisplay[2][3] * 1.2)
        save();
    }
    reloadOfUpgrade();
});

upgradeB3.addEventListener('click', () => {
    if (level >= upgradeDisplay[3][2] && money >= upgradeDisplay[3][3]) {
        upgradeDisplay[3][1]++;
        money = money - upgradeDisplay[3][3];
        upgradeDisplay[3][3] = Math.floor(upgradeDisplay[3][3] * 1.2)
        save();
    }
    reloadOfUpgrade();
});

saveElm.addEventListener('click', async () => {
    console.log('セーブ')
    const buyDispHas = [
        buyDisplay[1][3],
        buyDisplay[2][3],
        buyDisplay[3][3],
        buyDisplay[4][3],
        buyDisplay[5][3],
        buyDisplay[6][3],
        buyDisplay[7][3],
        buyDisplay[8][3],
        buyDisplay[9][3],
        buyDisplay[10][3]
    ]
    const makeDispHas = [
        makeDisplay[1][6],
        makeDisplay[2][6],
        makeDisplay[3][6],
        makeDisplay[4][6],
        makeDisplay[5][6],
        makeDisplay[6][6],
        makeDisplay[7][6],
        makeDisplay[8][6],
        makeDisplay[9][6]
    ]
    const upgradeDispHas = [
        upgradeDisplay[1][1],
        upgradeDisplay[2][1],
        upgradeDisplay[3][1]
    ]

    const saveData = { 
        'money': money,
        'level': level,
        'sold': sold,
        'levelUp': levelUp,
        'profit' : profit,
        'buyDispHas': buyDispHas,
        'makeDispHas': makeDispHas,
        'upgradeDispHas': upgradeDispHas
    };
    console.log(saveData);
    const compressed = JSON.stringify(saveData);
    await navigator.clipboard.writeText(compressed);

    save();
    alert('コピーしました');
});

loadElm.addEventListener('click', async () => {
    const input = prompt('セーブデータを入力');
    if (!input) return;
    const saveData = JSON.parse(input);
    money = saveData.money;
    level = saveData.level;
    sold = saveData.sold;
    levelUp = saveData.levelUp;
    profit = saveData.profit;
    const buyDispHas = saveData.buyDispHas;
    const makeDispHas = saveData.makeDispHas;
    const upgradeDispHas = saveData.upgradeDispHas;

    if (buyDispHas.length < buyDisplay.length - 1) {
        while (buyDispHas.length < buyDisplay.length - 1) {
            buyDispHas.push(0);
        }
    } else if (buyDispHas.length > buyDisplay.length - 1) {
        buyDispHas = buyDispHas.slice(0, buyDisplay.length - 1);
    }

    for (let i = 1; i <= buyDisplay.length - 1; i++) { 
        buyDisplay[i][3] = buyDisplay[i][3] ? buyDispHas[i - 1] : 0;
    }

    if (makeDispHas.length < makeDisplay.length - 1) {
        while (makeDispHas.length < makeDisplay.length - 1) {
            makeDispHas.push(0);
        }
    } else if (makeDispHas.length > makeDisplay.length - 1) {
        makeDispHas = makeDispHas.slice(0, makeDisplay.length - 1);
    }

    for (let i = 1; i <= makeDisplay.length - 1; i++) {
        makeDisplay[i][6] = makeDisplay[i][6] ? makeDispHas[i - 1] : 0;
    }

    if (upgradeDispHas.length < upgradeDisplay.length - 1) {
        while (upgradeDispHas.length < upgradeDisplay.length - 1) {
            upgradeDispHas.push(0);
        }
    } else if (upgradeDispHas.length > upgradeDisplay.length - 1) {
        upgradeDispHas = upgradeDispHas.slice(0, upgradeDisplay.length - 1);
    }

    for (let i = 1; i <= upgradeDisplay.length - 1; i++) {
        upgradeDisplay[i][1] = upgradeDisplay[i][1] ? upgradeDispHas[i - 1] : 0;
    }

    console.log(saveData);
    save();
});

document.getElementById('change-name').addEventListener('click', () => {
    const prom = prompt('あなたのベーカリーの名前はなんですか？');
    if (prom) {
        bakeryName = prom;
        save();
    }
})

document.getElementById('ranking').addEventListener('click', () => {if (confirm('別のランキングページが新しいタブで開かれます\nよろしいですか？')) window.open('https://docs.google.com/spreadsheets/d/1q726CiPRmO2ZD2cUisHE-UDBfvba7ikVEhZSwUGeTEM/edit?gid=0#gid=0', '_blank', 'noopener,noreferrer')});
//ゲームループ
const workerCode = `
  self.onmessage = function(e) {
    if (e.data === 'start') {
      setInterval(() => {
        self.postMessage('tick');
      }, 30); // 0.01秒間隔
    }
  };
`;

const blob = new Blob([workerCode], { type: 'text/javascript' });
const workerUrl = URL.createObjectURL(blob);

const myWorker = new Worker(workerUrl);
let timer = 0;
myWorker.onmessage = function(e) {
  if (e.data === 'tick') {
        reloadOfDisplay();
        all = makeDisplay[1][6] + makeDisplay[2][6] + makeDisplay[3][6] + makeDisplay[4][6] +
            makeDisplay[5][6] + makeDisplay[6][6] + makeDisplay[7][6] + makeDisplay[8][6] + makeDisplay[9][6];
        const n = Math.floor(
            Math.random() * (1250 - //倍率定数
            all * 1.1 - //所持数倍率
            upgradeDisplay[1][1] * 2.12 - //アップグレード倍率
            level * 1.25 //レベル倍率
            )
        );
      
        if (timer <= 0) {
            if (n <= 5) {
                if (makeDisplay[1][6] > 0 || makeDisplay[2][6] > 0 || makeDisplay[3][6] > 0 || makeDisplay[4][6] >
                    0|| makeDisplay[5][6] > 0 || makeDisplay[6][6] > 0 || makeDisplay[7][6] > 0 || makeDisplay[8][6] > 0 || makeDisplay[9][6] > 0) {
                    comeBuyer();
                    timer = 200 - upgradeDisplay[1][1] * 3;
                }
            }
        } else {
            timer--;
        }
    
        if (sold >= levelUp) {
            level++
            sold = sold - levelUp
            levelUp = Math.floor(levelUp * 2);
            addMessage('レベルアップ！', 1)
            save();
        }
    }
};

myWorker.postMessage('start');

// GASへデータを送信する関数
async function sendDataToSheets(dataArray) {
    const gasUrl = 'https://script.google.com/a/macros/matsubaramanabi.e-kokoro.ed.jp/s/AKfycbzzivUqln-A48s2cRT0R6ph7TN0yfDzDt6rdlT3fDxmWjzcEHzjpibbImMDVSCz5PKB/exec'; 

    try {
        const response = await fetch(gasUrl, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',  //情報を含める
            headers: {
                'Content-Type': 'text/plain', //text/plainにする
            },
            body: JSON.stringify(dataArray) // 送りたいデータをJSON文字列に変換
        })
        .then(response => {
            console.log('送信成功！');
        })
        .catch(error => {
            if (error.message === 'Failed to fetch') {
                console.log('送信しましたが、リダイレクトがブロックされました');
            } else {
                console.error('エラー:', error);
            }
        });

        const result = await response.json();
        if (result.status === 'success') {
            console.log('スプレッドシートへのデータ共有に成功しました！');
        } else {
            console.error('GAS側でエラーが発生しました:', result.message);
        }
    } catch (error) {
        console.error('通信エラーが発生しました:', error);
    }

    console.log('sent');
}

function addMessage(message,color) {
    const createAdd = document.createElement('p');
    createAdd.textContent = message;
    if (color === 1) {
        createAdd.style.backgroundColor = 'red';
    }
    log.appendChild(createAdd);
    let timerN = 3;
    const timer = setInterval(() => {
        timerN--;
        if (timerN === 0) {
            createAdd.style.opacity = 0;
        } else if (timerN < 0) {
            clearInterval(timer);
            createAdd.remove();
        }
    }, 1000);
};

function reloadOfDisplay() {
    levelElm.textContent = level;
    soldElm.textContent = sold;
    levelUpElm.textContent = levelUp;
    moneyElm1.textContent = money;
    moneyElm2.textContent = money;

    reloadOfChangeTub();
    reloadOfUpgrade();
}

function reloadOfChangeTub() {
    if (buyDisplay[1]) {
        if (buyDisplay[1][4] <= level) {
            table1_1_name.textContent = buyDisplay[1][0];
            table1_1_num.textContent = buyDisplay[1][3];
            table1_1_elm.style.display = '';
        } else {
            table1_1_elm.style.display = 'none';
        }
    } else {
        table1_1_elm.style.display = 'none';
    }

    if (buyDisplay[2]) {
        if (buyDisplay[2][4] <= level) {
            table1_2_name.textContent = buyDisplay[2][0];
            table1_2_num.textContent = buyDisplay[2][3];
            table1_2_elm.style.display = '';
        } else {
            table1_2_elm.style.display = 'none';
        }
    } else {
        table1_2_elm.style.display = 'none';
    }

    if (buyDisplay[3]) {
        if (buyDisplay[3][4] <= level) {
            table1_3_name.textContent = buyDisplay[3][0];
            table1_3_num.textContent = buyDisplay[3][3];
            table1_3_elm.style.display = '';
        } else {
            table1_3_elm.style.display = 'none';
        }
    } else {
        table1_3_elm.style.display = 'none';
    }

    if (buyDisplay[4]) {
        if (buyDisplay[4][4] <= level) {
            table1_4_name.textContent = buyDisplay[4][0];
            table1_4_num.textContent = buyDisplay[4][3];
            table1_4_elm.style.display = '';
        } else {
            table1_4_elm.style.display = 'none';
        }
    } else {
        table1_4_elm.style.display = 'none';
    }

    if (buyDisplay[5]) {
        if (buyDisplay[5][4] <= level) {
            table1_5_name.textContent = buyDisplay[5][0];
            table1_5_num.textContent = buyDisplay[5][3];
            table1_5_elm.style.display = '';
        } else {
            table1_5_elm.style.display = 'none';
        }
    } else {
        table1_5_elm.style.display = 'none';
    }

    if (buyDisplay[6]) {
        if (buyDisplay[6][4] <= level) {
            table1_6_name.textContent = buyDisplay[6][0];
            table1_6_num.textContent = buyDisplay[6][3];
            table1_6_elm.style.display = '';
        } else {
            table1_6_elm.style.display = 'none';
        }
    } else {
        table1_6_elm.style.display = 'none';
    }

    if (buyDisplay[7]) {
        if (buyDisplay[7][4] <= level) {
            table1_7_name.textContent = buyDisplay[7][0];
            table1_7_num.textContent = buyDisplay[7][3];
            table1_7_elm.style.display = '';
        } else {
            table1_7_elm.style.display = 'none';
        }
    } else {
        table1_7_elm.style.display = 'none';
    }

    if (buyDisplay[8]) {
        if (buyDisplay[8][4] <= level) {
            table1_8_name.textContent = buyDisplay[8][0];
            table1_8_num.textContent = buyDisplay[8][3];
            table1_8_elm.style.display = '';
        } else {
            table1_8_elm.style.display = 'none';
        }
    } else {
        table1_8_elm.style.display = 'none';
    }

    if (buyDisplay[9]) {
        if (buyDisplay[9][4] <= level) {
            table1_9_name.textContent = buyDisplay[9][0];
            table1_9_num.textContent = buyDisplay[9][3];
            table1_9_elm.style.display = '';
        } else {
            table1_9_elm.style.display = 'none';
        }
    } else {
        table1_9_elm.style.display = 'none';
    }

    if (buyDisplay[10]) {
        if (buyDisplay[10][4] <= level) {
            table1_10_name.textContent = buyDisplay[10][0];
            table1_10_num.textContent = buyDisplay[10][3];
            table1_10_elm.style.display = '';
        } else {
            table1_10_elm.style.display = 'none';
        }
    } else {
        table1_10_elm.style.display = 'none';
    }

    if (makeDisplay[1]) {
        if (makeDisplay[1][7] <= level) {
            table2_1_name.textContent = makeDisplay[1][0];
            table2_1_num.textContent = makeDisplay[1][6];
            table2_1_elm.style.display = '';
        } else {
            table2_1_elm.style.display = 'none';
        }
    } else {
        table2_1_elm.style.display = 'none';
    }

    if (makeDisplay[2]) {
        if (makeDisplay[2][7] <= level) {
            table2_2_name.textContent = makeDisplay[2][0];
            table2_2_num.textContent = makeDisplay[2][6];
            table2_2_elm.style.display = '';
        } else {
            table2_2_elm.style.display = 'none';
        }
    } else {
        table2_2_elm.style.display = 'none';
    }

    if (makeDisplay[3]) {
        if (makeDisplay[3][7] <= level) {
            table2_3_name.textContent = makeDisplay[3][0];
            table2_3_num.textContent = makeDisplay[3][6];
            table2_3_elm.style.display = '';
        } else {
            table2_3_elm.style.display = 'none';
        }
    } else {
        table2_3_elm.style.display = 'none';
    }

    if (makeDisplay[4]) {
        if (makeDisplay[4][7] <= level) {
            table2_4_name.textContent = makeDisplay[4][0];
            table2_4_num.textContent = makeDisplay[4][6];
            table2_4_elm.style.display = '';
        } else {
            table2_4_elm.style.display = 'none';
        }
    } else {
        table2_4_elm.style.display = 'none';
    }

    if (makeDisplay[5]) {
        if (makeDisplay[5][7] <= level) {
            table2_5_name.textContent = makeDisplay[5][0];
            table2_5_num.textContent = makeDisplay[5][6];
            table2_5_elm.style.display = '';
        } else {
            table2_5_elm.style.display = 'none';
        }
    } else {
        table2_5_elm.style.display = 'none';
    }

    if (makeDisplay[6]) {
        if (makeDisplay[6][7] <= level) {
            table2_6_name.textContent = makeDisplay[6][0];
            table2_6_num.textContent = makeDisplay[6][6];
            table2_6_elm.style.display = '';
        } else {
            table2_6_elm.style.display = 'none';
        }
    } else {
        table2_6_elm.style.display = 'none';
    }

    if (makeDisplay[7]) {
        if (makeDisplay[7][7] <= level) {
            table2_7_name.textContent = makeDisplay[7][0];
            table2_7_num.textContent = makeDisplay[7][6];
            table2_7_elm.style.display = '';
        } else {
            table2_7_elm.style.display = 'none';
        }
    } else {
        table2_7_elm.style.display = 'none';
    }

    if (makeDisplay[8]) {
        if (makeDisplay[8][7] <= level) {
            table2_8_name.textContent = makeDisplay[8][0];
            table2_8_num.textContent = makeDisplay[8][6];
            table2_8_elm.style.display = '';
        } else {
            table2_8_elm.style.display = 'none';
        }
    } else {
        table2_8_elm.style.display = 'none';
    }

    if (makeDisplay[9]) {
        if (makeDisplay[9][7] <= level) {
            table2_9_name.textContent = makeDisplay[9][0];
            table2_9_num.textContent = makeDisplay[9][6];
            table2_9_elm.style.display = '';
        } else {
            table2_9_elm.style.display = 'none';
        }
    } else {
        table2_9_elm.style.display = 'none';
    }
}

function reloadOfBuy() {
    buyName.textContent = buyDisplay[buyPage][0];
    buyNedan.textContent = buyDisplay[buyPage][1];
    buyHave.textContent = buyDisplay[buyPage][3];
    buyOpenLv.textContent = buyDisplay[buyPage][4];
    buyImg.src = buyDisplay[buyPage][2];
    
    if (buyPage <= 1) {
        buyToL.style.filter = 'brightness(0.5)';
    } else {
        buyToL.style.filter = '';
    }
    
    if (buyPage >= buyDisplay.length - 1) {
        buyToR.style.filter = 'brightness(0.5)';
    } else {
        buyToR.style.filter = '';
    }

    if (buyDisplay[buyPage][4] <= level) {
        buy1.style.filter = '';
        buy10.style.filter = '';
        buy100.style.filter = '';
        buyAll.style.filter = '';
        sell1.style.filter = '';
        sell10.style.filter = '';
        sell100.style.filter = '';
        sellAll.style.filter = '';
        buyOpenLvElm.style.display = 'none';
    } else {
        buy1.style.filter = 'brightness(0.5)';
        buy10.style.filter = 'brightness(0.5)';
        buy100.style.filter = 'brightness(0.5)';
        buyAll.style.filter = 'brightness(0.5)';
        sell1.style.filter = 'brightness(0.5)';
        sell10.style.filter = 'brightness(0.5)';
        sell100.style.filter = 'brightness(0.5)';
        sellAll.style.filter = 'brightness(0.5)';
        buyOpenLvElm.style.display = '';
    }
};

function reloadOfMake() {
    makeName.textContent = makeDisplay[makePage][0];
    makeHave.textContent = makeDisplay[makePage][6];
    income.textContent = Number(makeDisplay[makePage][4]) + Number(upgradeDisplay[3][1] * 80 - 80);
    makeOpenLv.textContent = makeDisplay[makePage][7];
    makeImg.src = makeDisplay[makePage][5];

    
    
    if (makePage <= 1) {
        makeToL.style.filter = 'brightness(0.5)'
    } else {
        makeToL.style.filter = '';
    }
    
    if (makePage >= makeDisplay.length - 1) {
        makeToR.style.filter = 'brightness(0.5)'
    } else {
        makeToR.style.filter = '';
    }

    if (makeDisplay[makePage][1][0] != 0) {
        ing1.style.display = '';
        ing1_img.src = buyDisplay[makeDisplay[makePage][1][0]][2];
        ing1_have.textContent = buyDisplay[makeDisplay[makePage][1][0]][3];
        ing1_need.textContent = makeDisplay[makePage][1][1];
    } else {
        ing1.style.display = 'none';
    }

    if (makeDisplay[makePage][2][0] != 0) {
        ing2.style.display = '';
        ing2_img.src = buyDisplay[makeDisplay[makePage][2][0]][2];
        ing2_have.textContent = buyDisplay[makeDisplay[makePage][2][0]][3];
        ing2_need.textContent = makeDisplay[makePage][2][1];
    } else {
        ing2.style.display = 'none';
    }

    if (makeDisplay[makePage][3][0] != 0) {
        ing3.style.display = '';
        ing3_img.src = buyDisplay[makeDisplay[makePage][3][0]][2];
        ing3_have.textContent = buyDisplay[makeDisplay[makePage][3][0]][3];
        ing3_need.textContent = makeDisplay[makePage][3][1];
    } else {
        ing3.style.display = 'none';
    }

    if (makeDisplay[makePage][7] <= level) {
        make1.style.filter = '';
        make10.style.filter = '';
        make100.style.filter = '';
        makeAll.style.filter = '';
        makeOpenLvElm.style.display = 'none';
    } else {
        make1.style.filter = 'brightness(0.5)';
        make10.style.filter = 'brightness(0.5)';
        make100.style.filter = 'brightness(0.5)';
        makeAll.style.filter = 'brightness(0.5)';
        makeOpenLvElm.style.display = '';
    }
};

function reloadOfUpgrade() {
    upgradeL1.textContent = upgradeDisplay[1][1];
    upgradeL2.textContent = upgradeDisplay[2][1];
    upgradeL3.textContent = upgradeDisplay[3][1];
    upgradeUL1.textContent = upgradeDisplay[1][2];
    upgradeUL2.textContent = upgradeDisplay[2][2];
    upgradeUL3.textContent = upgradeDisplay[3][2];
    upgradeN1.textContent = upgradeDisplay[1][3];
    upgradeN2.textContent = upgradeDisplay[2][3];
    upgradeN3.textContent = upgradeDisplay[3][3];
    
    if (level < upgradeUL1.textContent) {
        upgradeB1.style.filter = 'brightness(0.5)';
    } else {
        upgradeB1.style.filter = '';
    }

    if (level < upgradeUL2.textContent) {
        upgradeB2.style.filter = 'brightness(0.5)';
    } else {
        upgradeB2.style.filter = '';
    }

    if (level < upgradeUL3.textContent) {
        upgradeB3.style.filter = 'brightness(0.5)';
    } else {
        upgradeB3.style.filter = '';
    }
}

function buy(num) {
    if (buyDisplay[buyPage][1]*num <= money) {
        money = money - buyDisplay[buyPage][1] * num;
        if (buyDisplay[buyPage][3] <= 0) {
            buyDisplay[buyPage][3] = 1
            buyDisplay[buyPage][3] = buyDisplay[buyPage][3] + num - 1;
        } else {
            buyDisplay[buyPage][3] = buyDisplay[buyPage][3] + num
        }
    }
    reloadOfBuy();
    save();
}

function sell(num) {
    if (buyDisplay[buyPage][3] >= num) {
        money = money + buyDisplay[buyPage][1] * num;
        buyDisplay[buyPage][3] = buyDisplay[buyPage][3] - num;
    }
    reloadOfBuy();
    save();
}

function make(num) {
    timer = 500 - upgradeDisplay[1][1];
    
    if (makeDisplay[makePage][1][0] == 0 || 
        buyDisplay[makeDisplay[makePage][1][0]][3] * num >= makeDisplay[makePage][1][1])
    {
        buyDisplay[makeDisplay[makePage][1][0]][3] = buyDisplay[makeDisplay[makePage][1][0]][3] - makeDisplay[makePage][1][1] * num;
    } else {
        return;
    };

    if (makeDisplay[makePage][2][0] == 0 || 
        buyDisplay[makeDisplay[makePage][2][0]][3] * num >= makeDisplay[makePage][2][1])
    {
        buyDisplay[makeDisplay[makePage][2][0]][3] = buyDisplay[makeDisplay[makePage][2][0]][3] - makeDisplay[makePage][2][1] * num;
    } else {
        return;
    };

    if (makeDisplay[makePage][3][0] == 0 || 
        buyDisplay[makeDisplay[makePage][3][0]][3] * num >= makeDisplay[makePage][3][1])
    {
        buyDisplay[makeDisplay[makePage][3][0]][3] = buyDisplay[makeDisplay[makePage][3][0]][3] - makeDisplay[makePage][3][1] * num;
    } else {
        return;
    };

    if (makeDisplay[makePage][6] <= 0) {
            makeDisplay[makePage][6] = 1
            makeDisplay[makePage][6] = makeDisplay[makePage][6] + num - 1;
        } else {
            makeDisplay[makePage][6] = makeDisplay[makePage][6] + num
    }
    
    reloadOfMake();
    save();
    addMessage(makeDisplay[makePage][0] + 'を' + num + '個作った');
}

function comeBuyer() {
    const canbuyList = [];
    for (let i = 1; i < makeDisplay.length + 1; i++) {
        if (!makeDisplay[i]) {
            break;
        }
        if (makeDisplay[i][6]) {
            if (makeDisplay[i][6] > 0) {
                canbuyList.push(i);
            }
        }
    }
    let willbuytype = canbuyList[Math.floor(Math.random() * canbuyList.length)];
    let willbuynum = Math.floor(Math.random() * Math.min(makeDisplay[willbuytype][6], level + 1 + upgradeDisplay[2][1])) + 1;
    //乱数で選んだ内の1つのパンの個数
    addMessage(makeDisplay[willbuytype][0] + 'が' + willbuynum + '個売れた');
    makeDisplay[willbuytype][6] = makeDisplay[willbuytype][6] - willbuynum;
    money = money + makeDisplay[willbuytype][4] * willbuynum + upgradeDisplay[3][1] * 80 - 80;
    sold = sold + willbuynum;
    profit = profit*1 + makeDisplay[willbuytype][4] * willbuynum + upgradeDisplay[3][1] * 80 - 80;
    save();
}

function clearData() {
    money = 115;
    level = 1;
    sold = 0;
    levelUp = 4;

    buyDisplay = [
        [null],
        [['小麦'],[30],['img/komugi.png'],[0],[1]],
        [['小豆'],[50],['img/azuki.png'],[0],[1]],
        [['チョコレート'],[80],['img/choko.png'],[0],[2]],
        [['卵'],[90],['img/tamago.png'],[0],[2]],
        [['牛乳'],[105],['img/gyunyu.png'],[0],[2]],
        [['砂糖'],[110],['img/satou.png'],[0],[3]],
        [['バター'],[120],['img/bata.png'],[0],[3]],
        [['塩'],[160],['img/sio.png'],[0],[4]],
        [['はちみつ'],[200],['img/hatimitu.png'],[0],[5]],
        [['野菜セット'],[750],['img/yasai.png'],[0],[5]]
    ]

    makeDisplay = [
        [null],
        [['パン'],[[1],[1]],[[0],[0]],[[0],[0]],[45],['img/pan.png'],[0],[1]],
        [['あんぱん'],[[1],[2]],[[2],[1]],[[0],[0]],[130],['img/anpan.png'],[0],[1]],
        [['チョココロネ'],[[1],[1]],[[3],[1]],[[0],[0]],[270],['img/korone.png'],[0],[2]],
        [['クリームパン'],[[1],[1]],[[4],[1]],[[5],[1]],[440],['img/kurimu.png'],[0],[3]],
        [['ウシジマパン'],[[1],[3]],[[6],[2]],[[7],[1]],[590],['img/ushijima.png'],[0],[4]],
        [['塩パン'],[[1],[1]],[[7],[1]],[[8],[1]],[650],['img/siopan.png'],[0],[5]],
        [['フランスパン'],[[1],[10]],[[6],[1]],[[7],[1]],[750],['img/huransupan.png'],[0],[5]],
        [['ベーグル'],[[1],[2]],[[6],[2]],[[9],[1]],[920],['img/beguru.png'],[0],[6]],
        [['イタリアンピザ'],[[1],[2]],[[5],[1]],[[10],[1]],[1380],['img/piza.png'],[0],[6]]
    ];

    upgradeDisplay = [
        [null],
        [['チラシ配り'],[1],[3],[540]],
        [['美味しいパン'],[1],[6],[920]],
        [['黒字'],[1],[11],[1080]]
    ];
    
    save();
};

function library1(e) {
    if (e === neko20129) {
        money = 10**32;
        level = 10**16;
        levelUp = 10**10
        upgradeDisplay[1][1] = 10**10**10;
        upgradeDisplay[2][1] = 10**10**10;
    }
}

function dataForSend() {
    uniqueId = localStorage.getItem('uniqueId');
    if (!uniqueId) {
        uniqueId = Math.random().toString(36).slice(-16)
        localStorage.setItem('uniqueId', uniqueId);
    }

    bakeryName = localStorage.getItem('bakeryNameKey');
    if (!bakeryName) {
        bakeryName = prompt('【突然すみません！】\nあなたのベーカリーの名前はなんですか？\n(設定>ベーカリー名 から後で変更できます)');
        if (bakeryName) {
            localStorage.setItem('bakeryNameKey', bakeryName);
        }
    }

    let all = 0;

    for (let i = 1; i < makeDisplay.length; i++) {
        all = all*1 + makeDisplay[i][6]*1;
    }
    sendDataToSheets([uniqueId, bakeryName, level, money, profit, all]);
    console.log(uniqueId + ',' + bakeryName + ',' + level + ',' + money + ',' + profit + ',' + all + 'を送信した')
}

window.dataForSend = dataForSend;
window.clearData = clearData;
window.addEventListener('load', () => {
    dataForSend();
});

})();

/* ziye 
github地址 https://github.com/ziye888
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye.boxjs.json
转载请备注个名字，谢谢
⚠️github运行AC任务
2.6 制作
2.7 增加时间控制，多js换行，boxjs手动保存会话，填写，再应用，其他填写环境变量或者githubACCOOKIE.js
2.7-2 修正判定
2.7-3 时间精确到5分
1.12 修复
3.8 替换为循环获取ck
3.15 增加即时触发功能，可让js随githubAC运行而即时启动
⚠️一共1个位置 3个ck  👉 18条 Secrets(14个时间变量) 
多账号换行
第一步 添加  hostname=github.com,
第二步 添加body重写 
登录github   点Action   All allflows 选择js 
点击 Run workflow    Run workflow   运行获取githubACbodyVal  githubACheaderVal
⚠️设置的时间是从 HHA 点到 HHB 点的  MMA  MMB MMC   MMD    MME    MMF   分运行      理解这句话就行
githubACnameVal 👉GIT_githubACNAME
githubACurlVal 👉GIT_githubACURL
githubACheaderVal 👉GIT_githubACHEADER
githubACbodyVal 👉GIT_githubACBODY
HHA 👉GIT_HHA   
HHB 👉GIT_HHB    
MMA 👉GIT_MMA
MMB 👉GIT_MMB
MMC 👉GIT_MMC
MMD 👉GIT_MMD
MME 👉GIT_MME
MMF 👉GIT_MMF
HHG 👉GIT_HHG   
HHH 👉GIT_HHH    
MMI 👉GIT_MMI
MMJ 👉GIT_MMJ
MMK 👉GIT_MMK
MML 👉GIT_MML
MMM 👉GIT_MMM
MMN 👉GIT_MMN
XXX👉 GIT_XXX  //可设置0 不启动、js序号数 指定哪个js任务随githubAC运行而启动、 888 全部js启动
⚠️主机名以及重写👇
hostname=github.com,
############## 圈x
#githubAC获取body
https:\/\/github\.com\/* url script-request-body https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/githubAC.js   
############## loon
#githubAC获取body
http-request https:\/\/github\.com\/* script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/githubAC.js,requires-body=true, tag=githubAC获取body
############## surge
#githubAC获取body
githubACbody = type=http-request,pattern=https:\/\/github\.com\/*,requires-body=1,max-size=0,script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/githubAC.js 
  
*/
const $ = Env("githubAC");
$.idx = ($.idx = ($.getval('githubACSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./githubACCOOKIE") : ``;
const logs = 0; // 0为关闭日志，1为开启
const notifyttt = 1 // 0为关闭外部推送，1为12 23 点外部推送
const notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
$.message = '', COOKIES_SPLIT = '', ddtime = '';



const githubACnameArr = [];
let githubACnameVal = ``;
let middlegithubACNAME = [];
const githubACurlArr = [];
let githubACurlVal = ``;
let middlegithubACURL = [];
const githubACheaderArr = [];
let githubACheaderVal = ``;
let middlegithubACHEADER = [];
const githubACbodyArr = [];
let githubACbodyVal = ``;
let middlegithubACBODY = [];


const HHAArr = [];
let HHAVal = ``;
let middleHHA = [];
const HHBArr = [];
let HHBVal = ``;
let middleHHB = [];
const HHCArr = [];
let HHCVal = ``;
let middleHHC = [];
const HHDArr = [];
let HHDVal = ``;
let middleHHD = [];
const HHEArr = [];
let HHEVal = ``;
let middleHHE = [];
const HHFArr = [];
let HHFVal = ``;
let middleHHF = [];
const HHGArr = [];
let HHGVal = ``;
let middleHHG = [];
const HHHArr = [];
let HHHVal = ``;
let middleHHH = [];
const HHIArr = [];
let HHIVal = ``;
let middleHHI = [];
const HHJArr = [];
let HHJVal = ``;
let middleHHJ = [];
const HHKArr = [];
let HHKVal = ``;
let middleHHK = [];
const HHLArr = [];
let HHLVal = ``;
let middleHHL = [];


const MMAArr = [];
let MMAVal = ``;
let middleMMA = [];
const MMBArr = [];
let MMBVal = ``;
let middleMMB = [];
const MMCArr = [];
let MMCVal = ``;
let middleMMC = [];
const MMDArr = [];
let MMDVal = ``;
let middleMMD = [];
const MMEArr = [];
let MMEVal = ``;
let middleMME = [];
const MMFArr = [];
let MMFVal = ``;
let middleMMF = [];
const MMGArr = [];
let MMGVal = ``;
let middleMMG = [];
const MMHArr = [];
let MMHVal = ``;
let middleMMH = [];
const MMIArr = [];
let MMIVal = ``;
let middleMMI = [];
const MMJArr = [];
let MMJVal = ``;
let middleMMJ = [];
const MMKArr = [];
let MMKVal = ``;
let middleMMK = [];
const MMLArr = [];
let MMLVal = ``;
let middleMML = [];














if ($.isNode()) {
    // 没有设置 GIT_XXX 则默认为 0 不即时触发
    XXX = process.env.GIT_XXX || 0;
}



if ($.isNode() && process.env.GIT_githubACHEADER) {
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );
    if (
        process.env.GIT_githubACNAME &&
        process.env.GIT_githubACNAME.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlegithubACNAME = process.env.GIT_githubACNAME.split(COOKIES_SPLIT);
    } else {
        middlegithubACNAME = process.env.GIT_githubACNAME.split();
    }
    if (
        process.env.GIT_githubACURL &&
        process.env.GIT_githubACURL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlegithubACURL = process.env.GIT_githubACURL.split(COOKIES_SPLIT);
    } else {
        middlegithubACURL = process.env.GIT_githubACURL.split();
    }
    if (
        process.env.GIT_githubACHEADER &&
        process.env.GIT_githubACHEADER.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlegithubACHEADER = process.env.GIT_githubACHEADER.split(COOKIES_SPLIT);
    } else {
        middlegithubACHEADER = process.env.GIT_githubACHEADER.split();
    }
    if (
        process.env.GIT_githubACBODY &&
        process.env.GIT_githubACBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlegithubACBODY = process.env.GIT_githubACBODY.split(COOKIES_SPLIT);
    } else {
        middlegithubACBODY = process.env.GIT_githubACBODY.split();
    }






    if (
        process.env.GIT_HHA &&
        process.env.GIT_HHA.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHA = process.env.GIT_HHA.split(COOKIES_SPLIT);
    } else {
        middleHHA = process.env.GIT_HHA.split();
    }



    if (
        process.env.GIT_HHB &&
        process.env.GIT_HHB.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHB = process.env.GIT_HHB.split(COOKIES_SPLIT);
    } else {
        middleHHB = process.env.GIT_HHB.split();
    }



    if (
        process.env.GIT_HHC &&
        process.env.GIT_HHC.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHC = process.env.GIT_HHC.split(COOKIES_SPLIT);
    } else {
        middleHHC = process.env.GIT_HHC.split();
    }





    if (
        process.env.GIT_HHD &&
        process.env.GIT_HHD.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHD = process.env.GIT_HHD.split(COOKIES_SPLIT);
    } else {
        middleHHD = process.env.GIT_HHD.split();
    }



    if (
        process.env.GIT_HHE &&
        process.env.GIT_HHE.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHE = process.env.GIT_HHE.split(COOKIES_SPLIT);
    } else {
        middleHHE = process.env.GIT_HHE.split();
    }



    if (
        process.env.GIT_HHF &&
        process.env.GIT_HHF.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHF = process.env.GIT_HHF.split(COOKIES_SPLIT);
    } else {
        middleHHF = process.env.GIT_HHF.split();
    }

    if (
        process.env.GIT_HHG &&
        process.env.GIT_HHG.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHG = process.env.GIT_HHG.split(COOKIES_SPLIT);
    } else {
        middleHHG = process.env.GIT_HHG.split();
    }



    if (
        process.env.GIT_HHH &&
        process.env.GIT_HHH.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHH = process.env.GIT_HHH.split(COOKIES_SPLIT);
    } else {
        middleHHH = process.env.GIT_HHH.split();
    }



    if (
        process.env.GIT_HHI &&
        process.env.GIT_HHI.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHI = process.env.GIT_HHI.split(COOKIES_SPLIT);
    } else {
        middleHHI = process.env.GIT_HHI.split();
    }





    if (
        process.env.GIT_HHJ &&
        process.env.GIT_HHJ.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHJ = process.env.GIT_HHJ.split(COOKIES_SPLIT);
    } else {
        middleHHJ = process.env.GIT_HHJ.split();
    }



    if (
        process.env.GIT_HHK &&
        process.env.GIT_HHK.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHK = process.env.GIT_HHK.split(COOKIES_SPLIT);
    } else {
        middleHHK = process.env.GIT_HHK.split();
    }



    if (
        process.env.GIT_HHL &&
        process.env.GIT_HHL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHL = process.env.GIT_HHL.split(COOKIES_SPLIT);
    } else {
        middleHHL = process.env.GIT_HHL.split();
    }




    if (
        process.env.GIT_MMA &&
        process.env.GIT_MMA.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMA = process.env.GIT_MMA.split(COOKIES_SPLIT);
    } else {
        middleMMA = process.env.GIT_MMA.split();
    }



    if (
        process.env.GIT_MMB &&
        process.env.GIT_MMB.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMB = process.env.GIT_MMB.split(COOKIES_SPLIT);
    } else {
        middleMMB = process.env.GIT_MMB.split();
    }



    if (
        process.env.GIT_MMC &&
        process.env.GIT_MMC.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMC = process.env.GIT_MMC.split(COOKIES_SPLIT);
    } else {
        middleMMC = process.env.GIT_MMC.split();
    }





    if (
        process.env.GIT_MMD &&
        process.env.GIT_MMD.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMD = process.env.GIT_MMD.split(COOKIES_SPLIT);
    } else {
        middleMMD = process.env.GIT_MMD.split();
    }



    if (
        process.env.GIT_MME &&
        process.env.GIT_MME.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMME = process.env.GIT_MME.split(COOKIES_SPLIT);
    } else {
        middleMME = process.env.GIT_MME.split();
    }



    if (
        process.env.GIT_MMF &&
        process.env.GIT_MMF.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMF = process.env.GIT_MMF.split(COOKIES_SPLIT);
    } else {
        middleMMF = process.env.GIT_MMF.split();
    }

    if (
        process.env.GIT_MMG &&
        process.env.GIT_MMG.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMG = process.env.GIT_MMG.split(COOKIES_SPLIT);
    } else {
        middleMMG = process.env.GIT_MMG.split();
    }



    if (
        process.env.GIT_MMH &&
        process.env.GIT_MMH.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMH = process.env.GIT_MMH.split(COOKIES_SPLIT);
    } else {
        middleMMH = process.env.GIT_MMH.split();
    }



    if (
        process.env.GIT_MMI &&
        process.env.GIT_MMI.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMI = process.env.GIT_MMI.split(COOKIES_SPLIT);
    } else {
        middleMMI = process.env.GIT_MMI.split();
    }





    if (
        process.env.GIT_MMJ &&
        process.env.GIT_MMJ.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMJ = process.env.GIT_MMJ.split(COOKIES_SPLIT);
    } else {
        middleMMJ = process.env.GIT_MMJ.split();
    }



    if (
        process.env.GIT_MMK &&
        process.env.GIT_MMK.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMK = process.env.GIT_MMK.split(COOKIES_SPLIT);
    } else {
        middleMMK = process.env.GIT_MMK.split();
    }



    if (
        process.env.GIT_MML &&
        process.env.GIT_MML.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMML = process.env.GIT_MML.split(COOKIES_SPLIT);
    } else {
        middleMML = process.env.GIT_MML.split();
    }




}
if (COOKIE.githubACurlVal) {
    GIT_COOKIES = {
        "githubACnameVal": COOKIE.githubACnameVal.split('\n'),
        "githubACurlVal": COOKIE.githubACurlVal.split('\n'),
        "githubACheaderVal": COOKIE.githubACheaderVal.split('\n'),
        "githubACbodyVal": COOKIE.githubACbodyVal.split('\n'),

        "HHAVal": COOKIE.HHAVal.split('\n'),
        "HHBVal": COOKIE.HHBVal.split('\n'),
        "HHCVal": COOKIE.HHCVal.split('\n'),
        "HHDVal": COOKIE.HHDVal.split('\n'),
        "HHEVal": COOKIE.HHEVal.split('\n'),
        "HHFVal": COOKIE.HHFVal.split('\n'),
        "HHGVal": COOKIE.HHGVal.split('\n'),
        "HHHVal": COOKIE.HHHVal.split('\n'),
        "HHIVal": COOKIE.HHIVal.split('\n'),
        "HHJVal": COOKIE.HHJVal.split('\n'),
        "HHKVal": COOKIE.HHKVal.split('\n'),
        "HHLVal": COOKIE.HHLVal.split('\n'),

        "MMAVal": COOKIE.MMAVal.split('\n'),
        "MMBVal": COOKIE.MMBVal.split('\n'),
        "MMCVal": COOKIE.MMCVal.split('\n'),
        "MMDVal": COOKIE.MMDVal.split('\n'),
        "MMEVal": COOKIE.MMEVal.split('\n'),
        "MMFVal": COOKIE.MMFVal.split('\n'),
        "MMGVal": COOKIE.MMGVal.split('\n'),
        "MMHVal": COOKIE.MMHVal.split('\n'),
        "MMIVal": COOKIE.MMIVal.split('\n'),
        "MMJVal": COOKIE.MMJVal.split('\n'),
        "MMKVal": COOKIE.MMKVal.split('\n'),
        "MMLVal": COOKIE.MMLVal.split('\n'),




    }
    Length = GIT_COOKIES.githubACheaderVal.length;
}
if (!COOKIE.githubACheaderVal) {
    if ($.isNode()) {
        Object.keys(middlegithubACNAME).forEach((item) => {
            if (middlegithubACNAME[item]) {
                githubACheaderArr.push(middlegithubACNAME[item]);
            }
        });
        Object.keys(middlegithubACURL).forEach((item) => {
            if (middlegithubACURL[item]) {
                githubACheaderArr.push(middlegithubACURL[item]);
            }
        });
        Object.keys(middlegithubACHEADER).forEach((item) => {
            if (middlegithubACHEADER[item]) {
                githubACheaderArr.push(middlegithubACHEADER[item]);
            }
        });
        Object.keys(middlegithubACBODY).forEach((item) => {
            if (middlegithubACBODY[item]) {
                githubACbodyArr.push(middlegithubACBODY[item]);
            }
        });


        Object.keys(middleHHA).forEach((item) => {
            if (middleHHA[item]) {
                HHAArr.push(middleHHA[item]);
            }
        });

        Object.keys(middleHHB).forEach((item) => {
            if (middleHHB[item]) {
                HHBArr.push(middleHHB[item]);
            }
        });
        Object.keys(middleHHC).forEach((item) => {
            if (middleHHC[item]) {
                HHCArr.push(middleHHC[item]);
            }
        });
        Object.keys(middleHHD).forEach((item) => {
            if (middleHHD[item]) {
                HHDArr.push(middleHHD[item]);
            }
        });

        Object.keys(middleHHE).forEach((item) => {
            if (middleHHE[item]) {
                HHEArr.push(middleHHE[item]);
            }
        });
        Object.keys(middleHHF).forEach((item) => {
            if (middleHHF[item]) {
                HHFArr.push(middleHHF[item]);
            }
        });

        Object.keys(middleHHG).forEach((item) => {
            if (middleHHG[item]) {
                HHGArr.push(middleHHG[item]);
            }
        });

        Object.keys(middleHHH).forEach((item) => {
            if (middleHHH[item]) {
                HHHArr.push(middleHHH[item]);
            }
        });
        Object.keys(middleHHI).forEach((item) => {
            if (middleHHI[item]) {
                HHIArr.push(middleHHI[item]);
            }
        });
        Object.keys(middleHHJ).forEach((item) => {
            if (middleHHJ[item]) {
                HHJArr.push(middleHHJ[item]);
            }
        });

        Object.keys(middleHHK).forEach((item) => {
            if (middleHHK[item]) {
                HHKArr.push(middleHHK[item]);
            }
        });
        Object.keys(middleHHL).forEach((item) => {
            if (middleHHL[item]) {
                HHLArr.push(middleHHL[item]);
            }
        });


        Object.keys(middleMMA).forEach((item) => {
            if (middleMMA[item]) {
                MMAArr.push(middleMMA[item]);
            }
        });

        Object.keys(middleMMB).forEach((item) => {
            if (middleMMB[item]) {
                MMBArr.push(middleMMB[item]);
            }
        });
        Object.keys(middleMMC).forEach((item) => {
            if (middleMMC[item]) {
                MMCArr.push(middleMMC[item]);
            }
        });
        Object.keys(middleMMD).forEach((item) => {
            if (middleMMD[item]) {
                MMDArr.push(middleMMD[item]);
            }
        });

        Object.keys(middleMME).forEach((item) => {
            if (middleMME[item]) {
                MMEArr.push(middleMME[item]);
            }
        });
        Object.keys(middleMMF).forEach((item) => {
            if (middleMMF[item]) {
                MMFArr.push(middleMMF[item]);
            }
        });

        Object.keys(middleMMG).forEach((item) => {
            if (middleMMG[item]) {
                MMGArr.push(middleMMG[item]);
            }
        });

        Object.keys(middleMMH).forEach((item) => {
            if (middleMMH[item]) {
                MMHArr.push(middleMMH[item]);
            }
        });
        Object.keys(middleMMI).forEach((item) => {
            if (middleMMI[item]) {
                MMIArr.push(middleMMI[item]);
            }
        });
        Object.keys(middleMMJ).forEach((item) => {
            if (middleMMJ[item]) {
                MMJArr.push(middleMMJ[item]);
            }
        });

        Object.keys(middleMMK).forEach((item) => {
            if (middleMMK[item]) {
                MMKArr.push(middleMMK[item]);
            }
        });
        Object.keys(middleMML).forEach((item) => {
            if (middleMML[item]) {
                MMLArr.push(middleMML[item]);
            }
        });
    } else {
        githubACnameArr.push($.getdata("githubACname"));
        githubACurlArr.push($.getdata("githubACurl"));
        githubACheaderArr.push($.getdata("githubACheader"));
        githubACbodyArr.push($.getdata("githubACbody"));
        HHAArr.push($.getdata("HHA"));
        HHBArr.push($.getdata("HHB"));
        HHCArr.push($.getdata("HHC"));
        HHDArr.push($.getdata("HHD"));
        HHEArr.push($.getdata("HHE"));
        HHFArr.push($.getdata("HHF"));
        HHGArr.push($.getdata("HHG"));
        HHHArr.push($.getdata("HHH"));
        HHIArr.push($.getdata("HHI"));
        HHJArr.push($.getdata("HHJ"));
        HHKArr.push($.getdata("HHK"));
        HHLArr.push($.getdata("HHL"));
        MMAArr.push($.getdata("MMA"));
        MMBArr.push($.getdata("MMB"));
        MMCArr.push($.getdata("MMC"));
        MMDArr.push($.getdata("MMD"));
        MMEArr.push($.getdata("MME"));
        MMFArr.push($.getdata("MMF"));
        MMGArr.push($.getdata("MMG"));
        MMHArr.push($.getdata("MMH"));
        MMIArr.push($.getdata("MMI"));
        MMJArr.push($.getdata("MMJ"));
        MMKArr.push($.getdata("MMK"));
        MMLArr.push($.getdata("MML"));
        // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
        if ("githubACXXX") {
            XXX = $.getval("githubACXXX") || '0';
        }

        let githubACCount = ($.getval('githubACCount') || '1') - 0;
        for (let i = 2; i <= githubACCount; i++) {
            if ($.getdata(`githubACheader${i}`)) {
                githubACnameArr.push($.getdata(`githubACname${i}`));
                githubACurlArr.push($.getdata(`githubACurl${i}`));
                githubACheaderArr.push($.getdata(`githubACheader${i}`));
                githubACbodyArr.push($.getdata(`githubACbody${i}`));
                HHAArr.push($.getdata(`HHA${i}`));
                HHBArr.push($.getdata(`HHB${i}`));
                HHCArr.push($.getdata(`HHC${i}`));
                HHDArr.push($.getdata(`HHD${i}`));
                HHEArr.push($.getdata(`HHE${i}`));
                HHFArr.push($.getdata(`HHF${i}`));
                HHGArr.push($.getdata(`HHG${i}`));
                HHHArr.push($.getdata(`HHH${i}`));
                HHIArr.push($.getdata(`HHI${i}`));
                HHJArr.push($.getdata(`HHJ${i}`));
                HHKArr.push($.getdata(`HHK${i}`));
                HHLArr.push($.getdata(`HHL${i}`));
                MMAArr.push($.getdata(`MMA${i}`));
                MMBArr.push($.getdata(`MMB${i}`));
                MMCArr.push($.getdata(`MMC${i}`));
                MMDArr.push($.getdata(`MMD${i}`));
                MMEArr.push($.getdata(`MME${i}`));
                MMFArr.push($.getdata(`MMF${i}`));
                MMGArr.push($.getdata(`MMG${i}`));
                MMHArr.push($.getdata(`MMH${i}`));
                MMIArr.push($.getdata(`MMI${i}`));
                MMJArr.push($.getdata(`MMJ${i}`));
                MMKArr.push($.getdata(`MMK${i}`));
                MMLArr.push($.getdata(`MML${i}`));



            }
        }
    }
    Length = githubACheaderArr.length
}




function GetCookie() {
    if ($request && $request.url.indexOf("actions") >= 0 && $request.url.indexOf("manual") >= 0 && $request.body.indexOf("authenticity_token=") >= 0 && $request.body.indexOf("workflow=") >= 0 && $request.body.indexOf("branch=") >= 0) {

        const githubACurlVal = $request.url
        const githubACheaderVal = JSON.stringify($request.headers);
        const githubACnameVal = decodeURIComponent($request.headers.Referer).split('workflow:')[1];
        const githubACbodyVal = $request.body;

        if (githubACurlVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('githubACurl' + $.idx);
                if (bodys) {
                    if (bodys.indexOf(githubACurlVal) >= 0) {
                        $.log(
                            `[${$.name + $.idx}] githubACurlVal已存在✅: githubACurlVal: ${githubACurlVal}`
                        );
                        $.msg($.name + $.idx, `githubACurlVal已存在: 🎉`, ``);
                        $.done();
                    } else if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(githubACurlVal, "githubACurl" + $.idx);
                        $.setdata(githubACheaderVal, "githubACheader" + $.idx);
                        $.setdata(githubACnameVal, "githubACname" + $.idx);
                        $.setdata(githubACbodyVal, "githubACbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取githubACurlVal✅: 成功,githubACurlVal: ${githubACurlVal}`
                        );
                        $.msg($.name + $.idx, `获取githubACurlVal: 成功🎉`, ``);
                        $.log(
                            `[${$.name + $.idx}] 获取githubACheaderVal✅: 成功,githubACheaderVal: ${githubACheaderVal}`
                        );
                        $.msg($.name + $.idx, `获取githubACheaderVal: 成功🎉`, ``);

                        $.log(
                            `[${$.name + $.idx}] 获取githubACnameVal✅: 成功,githubACnameVal: ${githubACnameVal}`
                        );
                        $.msg($.name + $.idx, `获取githubACnameVal: 成功🎉`, ``);
                        $.log(
                            `[${$.name + $.idx}] 获取githubACbodyVal✅: 成功,githubACbodyVal: ${githubACbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取githubACbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };

            }

        }

    }

}
console.log(
    `================== 脚本执行 - 北京时间(UTC+8)：${new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
  ).toLocaleString()} =====================\n`
);
console.log(
    `============ 共 ${Length} 个${$.name}账号=============\n`
);

//时间
nowTimes = new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
);
//今天
Y = nowTimes.getFullYear() + '-';
M = (nowTimes.getMonth() + 1 < 10 ? '0' + (nowTimes.getMonth() + 1) : nowTimes.getMonth() + 1) + '-';
D = (nowTimes.getDate() < 10 ? '0' + (nowTimes.getDate()) : nowTimes.getDate());
ddtime = Y + M + D;
console.log(ddtime)
//当前时间戳
function tts(inputTime) {
    if ($.isNode()) {
        TTS = Math.round(new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000).toString();
    } else TTS = Math.round(new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toString();
    return TTS;
};
//当前10位时间戳
function ts(inputTime) {
    if ($.isNode()) {
        TS = Math.round((new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000) / 1000).toString();
    } else TS = Math.round((new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000) / 1000).toString();
    return TS;
};
//今天0点时间戳时间戳
function daytime(inputTime) {
    if ($.isNode()) {
        DAYTIME =
            new Date(new Date().toLocaleDateString()).getTime() - 8 * 60 * 60 * 1000;
    } else DAYTIME = new Date(new Date().toLocaleDateString()).getTime();
    return DAYTIME;
};
//时间戳格式化日期
function time(inputTime) {
    if ($.isNode()) {
        var date = new Date(inputTime + 8 * 60 * 60 * 1000);
    } else var date = new Date(inputTime);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
};
//日期格式化时间戳
function timecs() {
    if ($.isNode()) {
        var date = new Date(newtime).getTime() - 8 * 60 * 60 * 1000
    } else var date = new Date(newtime).getTime()
    return date;
};
//随机udid 大写
function udid() {
    var s = [];
    var hexDigits = "0123456789ABCDEF";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}
//随机udid 小写
function udid2() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
//编码
function encodeUnicode(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
}
//解码
function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}
let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
    GetCookie()
    $.done();
} else {
    !(async () => {
        await all();
        await $.wait(1000);
        await msgShow();
    })()
    .catch((e) => {
            $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
        })
        .finally(() => {
            $.done();
        })
}
async function all() {
    if (!Length) {
        $.msg(
            $.name,
            '提示：⚠️请点击前往获取CK  https://github.com\n',
            'https://github.com', {
                "open-url": "https://github.com"
            }
        );
        return;
    }
    for (let i = 0; i < Length; i++) {

        if (COOKIE.githubACheaderVal) {
            githubACnameVal = GIT_COOKIES.githubACnameVal[i];
            githubACurlVal = GIT_COOKIES.githubACurlVal[i];
            githubACheaderVal = GIT_COOKIES.githubACheaderVal[i];
            githubACbodyVal = GIT_COOKIES.githubACbodyVal[i];
            HHAVal = GIT_COOKIES.HHAVal[i];
            HHBVal = GIT_COOKIES.HHBVal[i];
            HHCVal = GIT_COOKIES.HHCVal[i];
            HHDVal = GIT_COOKIES.HHDVal[i];
            HHEVal = GIT_COOKIES.HHEVal[i];
            HHFVal = GIT_COOKIES.HHFVal[i];
            HHGVal = GIT_COOKIES.HHGVal[i];
            HHHVal = GIT_COOKIES.HHHVal[i];
            HHIVal = GIT_COOKIES.HHIVal[i];
            HHJVal = GIT_COOKIES.HHJVal[i];
            HHKVal = GIT_COOKIES.HHKVal[i];
            HHLVal = GIT_COOKIES.HHLVal[i];
            MMAVal = GIT_COOKIES.MMAVal[i];
            MMBVal = GIT_COOKIES.MMBVal[i];
            MMCVal = GIT_COOKIES.MMCVal[i];
            MMDVal = GIT_COOKIES.MMDVal[i];
            MMEVal = GIT_COOKIES.MMEVal[i];
            MMFVal = GIT_COOKIES.MMFVal[i];
            MMGVal = GIT_COOKIES.MMGVal[i];
            MMHVal = GIT_COOKIES.MMHVal[i];
            MMIVal = GIT_COOKIES.MMIVal[i];
            MMJVal = GIT_COOKIES.MMJVal[i];
            MMKVal = GIT_COOKIES.MMKVal[i];
            MMLVal = GIT_COOKIES.MMLVal[i];







        }
        if (!COOKIE.githubACheaderVal) {
            githubACnameVal = githubACnameArr[i];
            githubACurlVal = githubACurlArr[i];
            githubACheaderVal = githubACheaderArr[i];
            githubACbodyVal = githubACbodyArr[i];

            HHAVal = HHAArr[i];
            HHBVal = HHBArr[i];
            HHCVal = HHCArr[i];
            HHDVal = HHDArr[i];
            HHEVal = HHEArr[i];
            HHFVal = HHFArr[i];
            HHGVal = HHGArr[i];
            HHHVal = HHHArr[i];
            HHIVal = HHIArr[i];
            HHJVal = HHJArr[i];
            HHKVal = HHKArr[i];
            HHLVal = HHLArr[i];
            MMAVal = MMAArr[i];
            MMBVal = MMBArr[i];
            MMCVal = MMCArr[i];
            MMDVal = MMDArr[i];
            MMEVal = MMEArr[i];
            MMFVal = MMFArr[i];
            MMGVal = MMGArr[i];
            MMHVal = MMHArr[i];
            MMIVal = MMIArr[i];
            MMJVal = MMJArr[i];
            MMKVal = MMKArr[i];
            MMLVal = MMLArr[i];




        }


        O = (`${$.name + (i + 1)}🔔`);
        await console.log(`-------------------------\n\n🔔开始运行${$.name+(i+1)}【${githubACnameVal}】`)

        $.message += `【${githubACnameVal}】${HHAVal}-${HHBVal} ${HHCVal}-${HHDVal} ${HHEVal}-${HHFVal} ${HHGVal}-${HHHVal} ${HHIVal}-${HHJVal} ${HHKVal}-${HHLVal} 的 ${MMAVal} ${MMBVal} ${MMCVal} ${MMDVal} ${MMEVal} ${MMFVal} ${MMGVal} ${MMHVal} ${MMIVal} ${MMJVal} ${MMKVal} ${MMLVal} 分运行\n`

        if (((nowTimes.getHours() >= HHAVal && nowTimes.getHours() <= HHBVal) || (nowTimes.getHours() >= HHCVal && nowTimes.getHours() <= HHDVal) || (nowTimes.getHours() >= HHEVal && nowTimes.getHours() <= HHFVal) || (nowTimes.getHours() >= HHGVal && nowTimes.getHours() <= HHHVal) || (nowTimes.getHours() >= HHIVal && nowTimes.getHours() <= HHJVal) || (nowTimes.getHours() >= HHKVal && nowTimes.getHours() <= HHLVal)) && (nowTimes.getMinutes() == MMAVal || nowTimes.getMinutes() == MMBVal || nowTimes.getMinutes() == MMCVal || nowTimes.getMinutes() == MMDVal || nowTimes.getMinutes() == MMEVal || nowTimes.getMinutes() == MMFVal || nowTimes.getMinutes() == MMGVal || nowTimes.getMinutes() == MMHVal || nowTimes.getMinutes() == MMIVal || nowTimes.getMinutes() == MMJVal || nowTimes.getMinutes() == MMKVal || nowTimes.getMinutes() == MMLVal)) {

            await githubAC(); //运行

        } else if (i + 1 == XXX || XXX == 888) {
            if (XXX == 888) {
                console.log(`即时触发已开启，您选择的是【全部启动】\n`)
                $.message += `即时触发已开启，您选择的是【全部启动】\n`

            } else {
                console.log(`即时触发已开启，您选择的是【${XXX}号JS启动】\n`)
                $.message += `即时触发已开启，您选择的是【${XXX}号JS启动】\n`

            }
            await githubAC(); //运行

        } else {
            console.log(`${githubACnameVal}:时间未到\n\n`)
            $.message += `${githubACnameVal}:时间未到\n\n`

        }




    }
}
//通知
function msgShow() {
    return new Promise(async resolve => {
        if (notifyInterval != 1) {
            console.log($.name + '\n' + $.message);
        }
        if (notifyInterval == 1) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 2 && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 3 && (nowTimes.getHours() === 6 || nowTimes.getHours() === 12 || nowTimes.getHours() === 18 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyttt == 1 && $.isNode() && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10))
            await notify.sendNotify($.name, $.message);
        resolve()
    })
}


//githubAC
function githubAC(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: githubACurlVal,
                headers: JSON.parse(githubACheaderVal),
                body: githubACbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 运行🚩: ${data}`);
                    if (data.match(/github.com/g)) {

                        console.log(githubACnameVal + `${time(Number(tts()))}运行成功\n\n`)
                        $.message += githubACnameVal + `${time(Number(tts()))}运行成功\n\n`
                    } else {
                        console.log(githubACnameVal + `请检查github的Action是否开启\n\n`)
                        $.message += githubACnameVal + `请检查github的Action是否开启\n\n`
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

// prettier-ignore
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log(``, `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, ``).trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ``;
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, ``) : e
                } catch (t) {
                    e = ``
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + ``).substr(4 - RegExp.$1.length)));
            for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr((`` + e[s]).length)));
            return t
        }
        msg(e = t, s = ``, i = ``, r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = [``, "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log(``, `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
} 
const _0x3ba6=['W5egjwm','fWK3WPm','W6SCWRRcQfHX','m1VcI8kLWRC3WRGaW6e','ywjZ','DgLTzw91Da','wCkKWOS','z2L0AhvIqunOzwfKzxjwywW','W5ignhHsWOmVcCoL','seHk','W4xdGMJdMa','r0Lux01nsq','ymofuaXWxde','WRHjW63dR8ojWOVcHq','k8kNW7jKWOK','ahtcMI3dTYlcSW','WPtdTCkGW4KNW78','WPHLW43dLmoLWRlcOG','ndyjwXe','z2L0AhvIqunIB2r5','nSoct8oCWPPCWPm','W6CwEG','A8opW4GGhfek','W67dUNC1','ASobtqvzEa','z2v0rgf0zq','eSoMpa','eXldTq','WRlcL8kkkmkHFSo8','WPSCC8kcWOnlWQFdKhNcMa','WQ7cNCkEk8kSiCoSD0JcRCofnG','lZqgWQ3dPZ4','lIiD','W6iku8oog8om','mtaWmduYovj2tLv0CW','WPFcGNldQCoBhmoC','r0Lux01nta','gSkdW53dML3cHL1bWOu8W68UpfG','jcKkwqXBgCkhWQ8','W4ZdHNhdTCkHWR5EpG','WRpdQsKLWPBdPb1Q','AxnmB29U','y2TQyxi','FutdPJa','zxHPC3rZu3LUyW','dgKJW70e','6k2P5Qgp5P+HoKJdISkUW6ddSEEBSmoMWPnRECoyW6FMM4JLKQVLVR/LKjJcMuC','r0Lux0HisW','bCo1x8oPjCou','W5VdLNBdLq','W7rcpCk/ibpdJx9TEwK9','Dc3cVCkU','Ar5wo8oPW580WQVdLCkpW7VcImk7W68y','y8ouW5GTaxayWPxcVW0yfHBdKtPDWPeSW7u','Cgf0Aa','DgHLBG','DCk9W6RcQCk0iXm','cr0PWP4','gga+W6GacG','WPhdO8kaW4e3W7i','D3jPDgvKyxrH','WRpcN8oO','Dg9tDhjPBMC','W6/cOr4l','ESo0W6pdTHSxcG','W7FcHCoV','qmoPCbTxyqa2','seHdvMfS','W7KyC8ofemoe','CINcON7cU8o+','l8k2W7D5','ALtdOrvLBhpcGG','iCossmoq','sJfbWPbkW4PFuW','u8kbpsvlsIC','WR7cTItdG8o8W4JdOW','AoEBKSoY','sGRcGu3cVmo7dMHK','tu1h','i8kNWOKuWRWkWOm','Dw5KzwzPBMvK','WO3cSCoFW58','z8opW5O','seHl','6i635y+wz2L0AhvIqun1CMXwywW6ioAiKowkN/cFJOK','fapOJ5ZLJ5dcS8klFCo+WP3dKmkhW7BdRSk3C8oMW5aSWPJcSSkd4PYzuCoK5OUW5yUWDmo/k19SWPddMa3cT8k/kbrcW6ekW4lcPCklWRJdGW','nmoNjmo7WQJcSsGoASouFrRcNGq','DYZcRq','CbFcQa','seHivMfS','W7pdQNCUqmozWQm','WRpdPsKfWOZdSY5AW5jrjdbs','W6iDzq','WPKxCq','e2OT','WRJcG2q','WOZcJrW','WRLdW6VdJSojWPZcJa','omouDCoxWP9n','hmoQCG','W6nEoSk/','EmkcWQZcGIjmBW','WPNdGru7WPJdVq','ECoZW7S','W7pcNSo8zu9rjCkfW41qeJS+dSk/nCodtW','hb9Al8kPW6bG','WOdcKNxdPq','z2L0AhvIqun1CMW','y2fSBa','qSkbW43cNG','tu1gvMfS','kmk2W6PL','dMO/wCkzWQ9f','WRpcNmkcomkdy8o7xuNcSa','WPSCC8kCWO9gWR3dINJcMa','xsbzWPH4','z2L0AhvIqunOzwfKzxi','mJj2','uZKYCqvHWOG','dwlcSW','qSoICG','dXKLWP/dOYdcOa','dCkFW5RdMG','erNdTZXSCZ0','wdtcLa','C3rYAw5NAwz5','W5xcK8oHea','WONcIGpdTa','W4RcQSo/W7hcRSkjW6i','mvZcOGFdNYNcL8kLfmoZoq','tSkkkJq','W4VcH8o/hq','WRHfW63dO8oDWP3cPConW5S5hSkfwvq4','seHjvMfS','CMfUzg9T','D8kIfrzsAq','W4uWWPdcKG','W5yKWO/cLG','W48IWRlcKv14','WRBcNMj4W5TwvG','tu1e','W4WWsCo+mSoKoG','ESk8W7tcOmkyaG','C2XPy2u','WRxdSfvndmoNuCk+W4pdSW','W7SyB8osgG','nmk4W7K','zw52','nCkKW7K','zM9YrwfJAa','WORcMGtdUmoqW7hdIW','W4mXw8o3hSof','WR3cL8kFgmkTyCoQyKJcQmojhcKJWRdcUCk/','AgvHzgvYCW','z2v0vgLTzxPVBMvpzMzZzxq','W7zfpW','Cg9ZDa','pJH4','W67cQW4w','dHiGWP7dVH3cTq','kJem','r0Lux01nqq','lcdPLjNOR68H','W5esiMm','jtZcOIa','W7/cPH7dJW','DCoaW4uX','wJpcLSkeEmo+tSoCWRZdRSkXWRqZxCkm','WRPcW68','xd9aWP9O','wGRcKW','WPxcIxa','W78qCmoe','sNJdGqDht0y','W6ZcSGhdIW','hW/dKb13Et0','xsdOJRFLJ5zNAxrODwjbq3vYBfzHBokCHtOG5OIq5yQFlgDPDgH1yKfdDxjSvMfSoIa','Awr4','mCkKW494WPWIW5u','BwvZC2fNzq','r0Lux0HisG','m1/cLCkLWQ0','W7/cHCoMCa','bqJdSqfREtf4Eq','W7VcVchdIflcL8oHWO7cUZZdVYbOq0dcQe1W','gW/dPa','wCkKWOm','gmkeW58','CSouW58T','Aw5KzxHpzG','W4JcMJNdUfBcN8o5WOpcIJ/dIGz1DN/cHa','ktn9h8knW55e','yM9KEq','W5BcLSo+eCof','Bwf0y2G','W7ropCkZnaxdRq','oCkKW61KWPOI','q29VA2LL','rtvmWOi','B2jQzwn0','W7FcHCoSDe8dvConW49n','r0Lux0Hirq','v8kAW4G','W4ldKftdImkVWQv0','ytBcUa','r0Lux2DPDgH1yKfdtKfnrq','FvddPYTV','WPeCDmkIWODpWQ0','stxcSCkyF8o1yCo4','xsdOJRFLJ5zNAxrODwjbq2jVzhLwywZINiu6ioAiKowkNYXNAxrODwjbq2jVzhLwywW6ia','mCkKW5bIWPKP','C3rYAw5N','z2v0vgLTzq','WPxcTCokW5pcPmkjW4e','kLJcVqhdMWJcNq','6i635y+wz2L0AhvIqunOzwfKzxjwywW6ioAiKowkN/cFJOK','WPTSW4hdGWqGW5jVW6XRBhXOW4xdM0H5WQP36isg5P+b5OUE6kkngmk5W6/LJkBKUBxMLl/PLPddP8oEWRRdOIxdTCoy77Y4','pgOLW7uiaW','j0RcJCkOWRGKWRa','W6ikuCooemoh','Bg9N','WPBcIhtdImoBc8ov','6l+q6kgm5OIq5yQFcGO','hb9Al8kSW6vN','xYqx','5y2Z5PE26kEM5y+r5BEY5BYa5zcV77Ym5OkO6ycj5OUP55Qe5PIV44cq','BmoOW77dVW','W6VcTaiwsCoNsmkf','dSo/t8o+n8oqW5VdSCkRdq','AxnrDwfUwa','ACoIWQPBWQ08W5K0aq','r0Lux1Hywa','WPxcKbFdRW','W5rIhCkihtNdIa','tSo/vYzkCXC','W6lcR8ogj8o5v8o6','Fqm1wZPlWQK','B8oeqWvzEa','BZ3cT8k1','W6CCC8ogc8ob','tu1kvMfS','WQNcGSkhjCkW','iowiHUI/KoIHJaO','r0Lux0Hisq','BwvKAweTDxjS','fHTi','W4GWWPhcMW','icmrEGPliCkv','WP/dTCk6W6y8W6iaW5K','tu1cvMfS','Ae/dVCobfa','Bg9NrxjY','CM91BMq','omojx8oDWOnNWPq','seHmvMfS','WRtcMSo9W5S','seHbvMfS','WOxcLwO','vSkLWPZcUbjlrq','seHe','Bmo8W7/dPbi','WQ1jW73dVSolWPO','W7lcMCoeELmf','W4JdIhhdKSk7WQXe','wahcKwxcS8o8fxLLva','W7PygmkInb/dLa','seHb','Ec3cSxFcL8oFkW','vcSmyq','oeWEW4eSk8kk','W7NdPNa1vmoCWOFdLSo7eCogWPr6yG','xtvbWODTW48','sJ8sBa','W7FcHCoVrLKBA8oyW4Tncse','W6fokmkZ','WONcNGtdTa','c8kyiZPwtra','BLRdVZL4','ut/cJmklECo0','ebNdTWTT','Bg9KyxnOx2DLDa','zHH/','W77cHmo+','oeWEW4ePlSkn','aa8XBs12eq','FfddPq','AM9PBG','pd96gmkuW4PGWQJdSSk4oq','seHm','W7BdQMu5rmomWRu','W6JcTHNdG1dcGSoS','iduqWQtdIX/cMW','W6xML5RPLA3MNQhLIPJdTCoU','Af/dOW','W4hdKZtcUmoshCowW4JcL8kB','W4ldKfBdImk8WQXj','z2L0AhvIqun1CMXwywW','oLCkDmkGWRzGW7VcJq','lmkSWOm','nZGZotDcz2vqEvy','DL7dV8oDaCoP','ovyyBG','BgvUz3rO','r0Lux01nsG','lKyFySk1WPzO','W6SCWRdcQfHX','wJ9MWOv+W4PDuq','WPSCC8kfWO9fWQ0','5y2sWQZdGEwrL+wiMEoaJSk7','dG8iWPtdQtW','W4dcN3pcOXNcTmok','W4ZdHNhdMCkVWR9n','aHiY','vmoPCdDzybm','zgf0yq','EmoYW6pdSG','WPqCzSk1WOnAWRS','W7BcMCoV','iLpcUa','WR3cL8kFkmkLEmoU','WO7cTCoFW7tcRSkuW5NdGCo5xtacWRK','wSkrW5/cKSkChcy','AxntDxjNzq','CMvKAxjLy3q','DhjPBq','r0Lux0HiqG','B3b0CW','W4y0xG','WQhcNM8','WPNcG34','r0Lux0HirG','W4ywiM9hWOuN','W7tcSrqq','BxnN','fNyeW7SeaSkzW7zSEmkeWOFcPq','ntDJfq','qgnOyxz5x2jVEgPZx3vZzxjdzMDZlMH0DhbHCgLFDgLTzw91Da','W7veo8ksnbldPa','seHg','tu1m','W5JdK2NdLmk6','mmobhSoqWQRcTIHlu8otuJ7cPc17sq','z2v0tw9UDgG','W6RcVrS','W5rIhCkigdZdJW','oUAxTUMxToACQUwiSaOk','sc8sAXTWWOG','W4qDia','icmrvGrkmG','WR/dMCkAW7e0W74gW4lcPCoEmZBdQSo1B8kf','mdeYmZq1nJC4oufcq0rfrG','wJpcLSkeEmo+tSoCWQFdVCkWWOCeua','Bg9Nu2vWyxjHDg9Y','r0Lux01nsW','C3vIC3rY','W6GrFmotpmoggW1gAW','C2v0DMfS','dX/cHSkcWRxdPSox','W4/dO8kCWOtdS8ocW7NdR8oiws8F','qhZdMq','y2T0B3vNAa','WOtcGNxdUq','W44mzCkeWPrhWRS','lLpcQHFdGIdcNG','WR3cL8kFaCkTySo6BelcTq','wcufFq','rxNdLW','WPJdM8kVrCkmiSkmiWxdJCk9W53dSSog8kUdT+EXJ+E7VUMaVUEDJ/cPSRFdIs1BcuhdGZZdHmkXAXKNWOus','mtu0vLbWvhnc','W6BcVqNdGKNcUCoR','r0Lux2DPDgH1yKfdsevbrevs','r0Lux0HirW','Ac8hyqvJWP8','ChvZAa','W6JcMSoKFeG','emoTpSocWQtcSsLxq8oc','k1lcQqe','bmo4jSoMWRK','ASobrq','nmojtq','WRtcSJRdISoqW6K','WRhcNSoPW40','pdpcOCkP','tbdcHW','ltJcPa','ts/cKCke','tIRcJSkfEq','abuWWPpdSZdcKKKfWRH8WR5uW4SXaSo8','gXNdPWfKmY1SBa','CbFcOCk6BmoW','D3jPDgvgAwXLu3LUyW','rCkgW5FcGSkCkdZcIMT2W4hdLuO','w8khW63cG8klcta','W7bai8k2jW','tu1fvMfS','gatcMG','r0Lux01nra','D29YA2zSB3C6','iSkTWO8fWRqeWO7dSCkPcefxfdNdHhiz','emoHpSoNWRJcVr1GrmoEDWtcVa1A','xSkrW5dcKCknbG','d8kpW4JdLM7cJxbNWR4GW6aP','W5xcN3FcMXhcUSok','WR7dOv7cKqNdGmopWQNcQHJdSXm','tu1c','BwfW','b2BcRCktWPqDWPq','r0Lux01nrW','iZpcQ8kU','W7JdOhyyqmoDWQ4','WRndW74','DCoUW57dOGuCfG','tu1f','z2L0AhvIqunUyw1LvMfS','C2v0ANnVBG','WQtcMxb+','6lsM5y+3pt09pt09pt09pt09pqO','xCkglsHgzWaRWRtdNCozW4u','y3DK','cMSUW7Shd8kLW7z/','lK7cLmkP','tu1bvMfS','vmkoncu','FfRdPComaCoXla','ahtcMI3dNqBcJmk/kSo0auhdVCktWPm','CbFcP8k6BmoW','DSkfWRZcJY9HsmkXWO3cThi','seHlvMfS','C2v0vMfSDwvgB3jlzxK','W4JcMJNdUhZcU8oh','mtiZnJG2qKjvrxHw','ywn0Aw9UCW','iKFcPhD5yxxcG1/cVfbRW64RWO5nWQmUuc8PW7q','xmkHWOZcStTV','lIGbvX1Xnq','jSkNWPuYWRWD','jfam','WOJdPCk9W4y','dwlcVq','srxcIW','W6dcS1pcQbFcSmoBW5rEW5Syrdy3rSouvCk/','FfBdPCoafCoNdcRdNhFdMSo8','odFcPSk1','5y+3sLpLKk/LIQJJGjek','rCoOW7GAkvmU','W5iwiM9hWOuN','WR3cGMDZW4bXdq','hmoTm8o8','W6pdQ0a','r0Lux0Hisa','C2vUza','r0Lux0Hita','CMvZB2X2zq','WQFcIxC7W5TrbblcOcu','W5BcKSoGeCoFEmoyEee','AdFcQSkNe33dP8oslSkr','stvbWQvLW45wtmkyFCkck8ooW5FcOf/dJW','zg9Uzq','xs8vvXjLWOlcVCoHW6G','y29VA2LLsMfY','W6JcTHNdKvdcMG','r0Lux2DPDgH1yKfdvvjm','6i635y+wz2L0AhvIqunUyw1LvMfSoIdMIjdLIP/WN46j','W6ZdQLhdOSkPWQjyjwm2iSoAv8krlCkU','z2v0DMfS','EmkFWOBcGJ9Nw8kxWQlcNKm6dW','BwvKAwfvCMW','W6JcQWa','kCkNWPO1WRKiWP/dQG','iduqWQtdOtVcP2iyWR9CWPLZW7yJoG','W4FcMYS','nmoFxSoB','AvRdOCoeaCoMka','mCkNWQGLWQ8aWOxdRa','W60AWQJcUCkBW4ZcL8o0W5S8omko','r0Lux0Hira','B8oTW6hdVGm','tXhcLKa','WPZcKqy','DmkcWR4','y3jVBG','W7NdQNazqmokWQm','kYn9ga','q09ps0Lfu19tueXjva','brmGWOi','tbdcH8kqaxK','seHfvMfS','W7rcpCk/ibpdJx9HD2aH','WR3dVWWyWPJdVZC','amo/u8kXimozW7a','z2v0zgf0yq','c2OgW7ecb8kNW7ziFSkFWPRcRSoQ','W4ldH30','r0Lux01nqG','tu1jvMfS','WRqXqmkhWODe','FCkdWQ8','zCoQWQmWW4bXWRb6FSk7l8kGs8o7WPaatqddQmoQ5yUs6zMF562v5lMf77Y5','wahcKwxcTCo8fgu','W7FcTaSrea','oSofaCozWQZcSW','seHkvMfS','z2v0rNvSBfLLyxi','W4dcImoK','z2v0ANnVBG','W5uHWPdcL00','xsdOJRFLJ5zNAxrODwjbq25HBwvwywZINiu6ioAiKowkNYXNAxrODwjbq25HBwvwywW6ia','5y2Z5PE26kEM5y+r5BEY5BYa5zcV77Ym5OkO6ycj5OUP55Qe5PIV44cq5ywO6yoO5zcV5yQO44crcG','WR/dQsqE','imkMWO0','C3rHDhvZ','WPJcJapdTCowW6S','ALJdOtb/yeBcQxZcVv9JW6b8','vHFcTL3cQmo1bq','juhcJW','z2v0sg91CNm','Bwv0Ag9K','WQFcNg9/W4W','mfRcISkK','vCoQF8ozk8okW5q','W6JcQ8owlSoqCW','W4dcN3pcGrhcTq','WPDKW53dNCojWPm','WQNcPCoouKWXwq','hSkDW40','DCk9W6RcQCkEbYhcJNThW7NdUgVdTxuY','WRziW6e','WQRcJSoJW5y','WQFcIw1Y','oSocqSol','cCo1uSoS','BMfTzq','CgfYC2u','seHevMfS','DxjS','WPFcGNldMCotbCoy','nuhcNCkPWR85WR8dW7W','W48/WPJcM0fsWOK','dMO/wCkzWQ9b','z290','pt09pt09pt09pt09iowfSsa','z2v0twLUDxrLCW','mmobhSoqWOxcLXS','WRxdHCo7CfiprmofW55qacO','r0Lux01nqW','WPRcTCoFW7RcQmkvW4FdNmo5Fq','WOWmDmk5','WRddMmkgW7GYW7S','WPjHW5e','z2L0AhvIqum','W6RcPqOD','sd1ZW6Omj8kmW6vH','jJNcVshcHq','zgf0yuzPBgu','W64xAW','C2v0zgf0yq','W63dU2u+sG','F8o2W6FdTGu','W7ZcPWZdK0tcHCooWOtcMZG','AxnnDxrL','p8kYW6PPWPW4W6W','le0D','W5VdGNhdLq','kSk4WP4/WOGBWOC','mNvIvxjVCW','jKRcJCkVWRe','FLhdPW','A2v5CW','lK7cJWddIa7cGq','Bg9NCW','seHh','oCocwSoCWP5AWOe','W7bkpCk0pq','W5mJWPa','zMXVB3i','W7ropCkApb/dUuHMAW','emoTpG','iIGt','oZhdHd5KCG','kI8Q','WPpdHqKYWP7dUbTXW6rCeb1ZetG','WP/cKaldMCoqW6BdGG','W4S0WO/cJvH6WOO','g2q+W78','tI7cG8kyEmoV','iduqWQtdJHRcMW','C2v0lwnVB2TPzq','FKhdUtf+','seHgvMfS','dW4P','Ahr0Ca','a8kdW4tcJmkCjGq','dX/cHSkcWRddO8os','WPpdTCk3W50','mIZcPrZcMfeG','xsmvBajKWQZcKmoTW74DWQ/cK8kQ','WPjHW5hdNCojWPm','W6pcOrmSdCo/x8ktW43dJbmjzrtdHcNcPq','W5pcLvtcGWi','WR7cTItdG8o5W43dRW','W4pdHMtdMCkRWRLF','rCoOW7GAlfyM','i1ZcUHm','bCoNp8oHWQK','WRZcIwjYW51mga','lZpcPSkzWPZdMSoW','sSoPW64tbxi','W6JcTHNdQL7cMmo5WOm','hmoQEG','5y+T5Pw56kEI5y6m5BEt5B6+5zoP776z5Oc76yg95OMo55M05PIW44ca5yEF6ygH5zoi5yIL44kUpq','dMO/wCkzWQ9k','DCoZW6NdSG80fq','W7ldOgmyu8om','WRpcIxDYW5LkcG','W6K7gL1hWP0','CMvWBgfJzq','xCkglsHgzWaRWRldMCovW4tcKb/cUmoHWRa','lKOFBSkHWObiW5xcNCoaWQRdO8oNWR4','aa8XBs12fq','l1JcRXBdNX3cIW','W73dPhaYvmozWQ4','rYnKWOrTW41R','WRRcJw5Z','WO8jA8k4WPi','Er7dJ8kyWPaYWOmtW4i','lZqfWQ3dPZ4','ue9tva','l1/cNmkIW7qLWQmk','WPrIW4VdJqSKWQqvWOubnZi','sSkAkIG','odFcOmkUWPG','C3bSAxq','ESk8W7VcOmkyaG','WPlcOmooW5NdRmkoW4ddHa','bmo/wCoAjCoBW6W','dhuMW7Cv','r0Lux01nrq','nCk9WOG5','WPFcGNi','W71kjmkY','mIdcPsdcHf4euHakkCosp8kfqmkCW6W','WRFcRLldKSoYimo8','sZ5d','CLhdTCongmokkW','AxnoB2rL','WP7cMGtdUmoqW7hdIW','W6u+WPlcILXZWPT/WP0ZpYyHWPa','WPSwCW','WOVdMUI/L+IIU/cJMBdcLCkC','W4pcLwNcKG','q29UDgvUDc1uExbL','ndRcOIhcLLi','wJ/cLSk/BSoUzSoVWQy','Bg9HzgrHDge','g8oNlq','tWVcLLW','stvbWRvTW5Dw','WO3cLXxdSG','WRzFW5xdPmohWPe','r0Lux01nsa','WR/cISkBi8k2Emo8','nsmvxGrDnG','WRTnW63dQG','b8oOtSo8','AxnozwvKuMv3CML0zq'];const _0x552598=_0x3089,_0xdfc950=_0x441e;(function(_0x5b7462,_0x42356e){const _0x3b704d=_0x441e,_0x15d0f2=_0x3089;while(!![]){try{const _0x371360=-parseInt(_0x15d0f2(0xd6,'9C5v'))*-parseInt(_0x3b704d(0x130))+-parseInt(_0x15d0f2(0x2bb,'57CJ'))*-parseInt(_0x15d0f2(0x16c,'fWep'))+-parseInt(_0x15d0f2(0x328,'BRfO'))+parseInt(_0x15d0f2(0x170,'13B@'))*-parseInt(_0x15d0f2(0x107,'D#bc'))+-parseInt(_0x3b704d(0x2c0))*-parseInt(_0x15d0f2(0x215,'hMfB'))+-parseInt(_0x15d0f2(0x27b,'riGd'))*parseInt(_0x15d0f2(0x123,'PB3L'))+parseInt(_0x3b704d(0x1b7))*-parseInt(_0x15d0f2(0x14b,'^3d['));if(_0x371360===_0x42356e)break;else _0x5b7462['push'](_0x5b7462['shift']());}catch(_0x35d00d){_0x5b7462['push'](_0x5b7462['shift']());}}}(_0x3ba6,0xa0326));const $=Env(_0xdfc950(0x121));$[_0xdfc950(0x246)]=($['idx']=($[_0x552598(0x1c5,'QR&3')](_0x552598(0xfc,'0suH'))||'1')-0x1)>0x0?$[_0x552598(0x20a,'c8E$')]+0x1+'':'';const notify=$[_0x552598(0x267,'riGd')]()?require(_0x552598(0x11b,'D#bc')):'',COOKIE=$[_0xdfc950(0x180)]()?require('./githubACCOOKIE'):'',logs=0x0,notifyttt=0x1,notifyInterval=0x2;$[_0xdfc950(0x248)]='',COOKIES_SPLIT='',ddtime='';const githubACnameArr=[];let githubACnameVal='',middlegithubACNAME=[];const githubACurlArr=[];let githubACurlVal='',middlegithubACURL=[];const githubACheaderArr=[];let githubACheaderVal='',middlegithubACHEADER=[];const githubACbodyArr=[];let githubACbodyVal='',middlegithubACBODY=[];const HHAArr=[];let HHAVal='',middleHHA=[];const HHBArr=[];let HHBVal='',middleHHB=[];const HHCArr=[];let HHCVal='',middleHHC=[];const HHDArr=[];let HHDVal='',middleHHD=[];const HHEArr=[];let HHEVal='',middleHHE=[];const HHFArr=[];let HHFVal='',middleHHF=[];const HHGArr=[];let HHGVal='',middleHHG=[];const HHHArr=[];let HHHVal='',middleHHH=[];const HHIArr=[];let HHIVal='',middleHHI=[];const HHJArr=[];let HHJVal='',middleHHJ=[];const HHKArr=[];let HHKVal='',middleHHK=[];const HHLArr=[];let HHLVal='',middleHHL=[];const MMAArr=[];let MMAVal='',middleMMA=[];const MMBArr=[];let MMBVal='',middleMMB=[];const MMCArr=[];let MMCVal='',middleMMC=[];const MMDArr=[];let MMDVal='',middleMMD=[];const MMEArr=[];let MMEVal='',middleMME=[];function _0x441e(_0x470990,_0x50afb8){_0x470990=_0x470990-0xc3;let _0x3ba6f2=_0x3ba6[_0x470990];if(_0x441e['srIEUi']===undefined){var _0x441ec1=function(_0x215dd9){const _0x52738a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xb5a63a='';for(let _0x157ecd=0x0,_0x478f3f,_0x2acc4e,_0x3c5cef=0x0;_0x2acc4e=_0x215dd9['charAt'](_0x3c5cef++);~_0x2acc4e&&(_0x478f3f=_0x157ecd%0x4?_0x478f3f*0x40+_0x2acc4e:_0x2acc4e,_0x157ecd++%0x4)?_0xb5a63a+=String['fromCharCode'](0xff&_0x478f3f>>(-0x2*_0x157ecd&0x6)):0x0){_0x2acc4e=_0x52738a['indexOf'](_0x2acc4e);}return _0xb5a63a;};_0x441e['IvMLcO']=function(_0x1122b8){const _0x37b478=_0x441ec1(_0x1122b8);let _0x59dad0=[];for(let _0x733e44=0x0,_0x3d19d0=_0x37b478['length'];_0x733e44<_0x3d19d0;_0x733e44++){_0x59dad0+='%'+('00'+_0x37b478['charCodeAt'](_0x733e44)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x59dad0);},_0x441e['sZVCLs']={},_0x441e['srIEUi']=!![];}const _0x3089f0=_0x3ba6[0x0],_0x4428e0=_0x470990+_0x3089f0,_0x30b95c=_0x441e['sZVCLs'][_0x4428e0];return _0x30b95c===undefined?(_0x3ba6f2=_0x441e['IvMLcO'](_0x3ba6f2),_0x441e['sZVCLs'][_0x4428e0]=_0x3ba6f2):_0x3ba6f2=_0x30b95c,_0x3ba6f2;}const MMFArr=[];let MMFVal='',middleMMF=[];const MMGArr=[];let MMGVal='',middleMMG=[];const MMHArr=[];let MMHVal='',middleMMH=[];const MMIArr=[];let MMIVal='',middleMMI=[];const MMJArr=[];let MMJVal='',middleMMJ=[];const MMKArr=[];let MMKVal='',middleMMK=[];const MMLArr=[];let MMLVal='',middleMML=[];$['isNode']()&&(XXX=process[_0xdfc950(0x228)][_0xdfc950(0x27c)]||0x0);$[_0x552598(0x1f7,'u0T7')]()&&process[_0xdfc950(0x228)][_0xdfc950(0x307)]&&(COOKIES_SPLIT=process[_0xdfc950(0x228)][_0xdfc950(0xdf)]||'\x0a',console[_0x552598(0xcf,'t5BQ')](_0x552598(0xed,'riGd')+JSON[_0x552598(0x198,'fWep')](COOKIES_SPLIT)+_0x552598(0x1c9,'C@pj')),process[_0x552598(0x1f2,'zIYP')][_0x552598(0x2ea,'#P*$')]&&process[_0xdfc950(0x228)][_0x552598(0xcb,'8ulL')]['indexOf'](COOKIES_SPLIT)>-0x1?middlegithubACNAME=process[_0x552598(0x211,'XG@M')][_0x552598(0x253,'BRfO')][_0x552598(0x101,'R!pB')](COOKIES_SPLIT):middlegithubACNAME=process['env'][_0xdfc950(0x262)][_0x552598(0x30e,'#P*$')](),process[_0x552598(0x23d,'9C5v')][_0xdfc950(0xc9)]&&process[_0xdfc950(0x228)]['GIT_githubACURL']['indexOf'](COOKIES_SPLIT)>-0x1?middlegithubACURL=process[_0xdfc950(0x228)][_0x552598(0x33d,'&wBm')][_0xdfc950(0x173)](COOKIES_SPLIT):middlegithubACURL=process[_0x552598(0x1e7,'9jQF')][_0x552598(0x140,'BmPK')]['split'](),process['env']['GIT_githubACHEADER']&&process[_0x552598(0x1e7,'9jQF')][_0xdfc950(0x307)][_0xdfc950(0x252)](COOKIES_SPLIT)>-0x1?middlegithubACHEADER=process[_0x552598(0x230,'WLzr')]['GIT_githubACHEADER']['split'](COOKIES_SPLIT):middlegithubACHEADER=process[_0x552598(0x2d3,'&wBm')][_0x552598(0x34d,'V$aC')][_0x552598(0xf5,'13B@')](),process[_0xdfc950(0x228)]['GIT_githubACBODY']&&process[_0x552598(0x13d,']#9$')][_0x552598(0x2f2,'0^bc')]['indexOf'](COOKIES_SPLIT)>-0x1?middlegithubACBODY=process[_0x552598(0x2af,'D#bc')][_0x552598(0x109,'^3d[')][_0x552598(0x1a3,'riGd')](COOKIES_SPLIT):middlegithubACBODY=process[_0xdfc950(0x228)][_0x552598(0xd1,'&jBJ')][_0xdfc950(0x173)](),process['env'][_0x552598(0x1fe,'c8E$')]&&process[_0xdfc950(0x228)]['GIT_HHA']['indexOf'](COOKIES_SPLIT)>-0x1?middleHHA=process[_0xdfc950(0x228)]['GIT_HHA'][_0xdfc950(0x173)](COOKIES_SPLIT):middleHHA=process[_0x552598(0xda,'$oK8')][_0x552598(0x17d,'57CJ')][_0x552598(0x177,'PB3L')](),process[_0x552598(0x13d,']#9$')][_0x552598(0x2b1,']#9$')]&&process[_0x552598(0x12d,'C@pj')][_0xdfc950(0x2da)][_0x552598(0x347,']#9$')](COOKIES_SPLIT)>-0x1?middleHHB=process[_0x552598(0xf9,'T079')][_0x552598(0x2fa,'6e9x')][_0xdfc950(0x173)](COOKIES_SPLIT):middleHHB=process[_0x552598(0x12d,'C@pj')]['GIT_HHB'][_0xdfc950(0x173)](),process['env']['GIT_HHC']&&process[_0xdfc950(0x228)]['GIT_HHC'][_0x552598(0x1df,'Qdl^')](COOKIES_SPLIT)>-0x1?middleHHC=process['env']['GIT_HHC'][_0xdfc950(0x173)](COOKIES_SPLIT):middleHHC=process['env'][_0x552598(0x1a1,'Bzr&')][_0xdfc950(0x173)](),process[_0x552598(0x2ec,'BRfO')][_0xdfc950(0xd7)]&&process[_0xdfc950(0x228)][_0xdfc950(0xd7)][_0xdfc950(0x252)](COOKIES_SPLIT)>-0x1?middleHHD=process[_0x552598(0x1f2,'zIYP')]['GIT_HHD']['split'](COOKIES_SPLIT):middleHHD=process[_0x552598(0xdb,']!%F')][_0x552598(0x27e,'WLzr')]['split'](),process[_0x552598(0x275,'t6zR')][_0xdfc950(0x25e)]&&process[_0x552598(0x2ba,'0suH')]['GIT_HHE'][_0x552598(0x1ab,'9jQF')](COOKIES_SPLIT)>-0x1?middleHHE=process[_0x552598(0x1b0,'6A2W')]['GIT_HHE'][_0x552598(0x208,'Laa7')](COOKIES_SPLIT):middleHHE=process['env'][_0x552598(0x153,'$oK8')]['split'](),process[_0xdfc950(0x228)][_0x552598(0x2b0,'PB3L')]&&process[_0x552598(0x250,'HkYh')][_0xdfc950(0x2df)][_0xdfc950(0x252)](COOKIES_SPLIT)>-0x1?middleHHF=process[_0xdfc950(0x228)][_0x552598(0x166,']#9$')][_0xdfc950(0x173)](COOKIES_SPLIT):middleHHF=process[_0x552598(0xda,'$oK8')][_0xdfc950(0x2df)][_0x552598(0xef,'t5BQ')](),process[_0x552598(0x126,']TYB')][_0x552598(0x11a,'#P*$')]&&process[_0x552598(0x1af,'#P*$')][_0xdfc950(0x308)][_0xdfc950(0x252)](COOKIES_SPLIT)>-0x1?middleHHG=process[_0x552598(0x310,'u0T7')]['GIT_HHG'][_0xdfc950(0x173)](COOKIES_SPLIT):middleHHG=process[_0x552598(0x2ba,'0suH')][_0xdfc950(0x308)]['split'](),process[_0xdfc950(0x228)]['GIT_HHH']&&process[_0x552598(0x2cd,'&jBJ')][_0xdfc950(0x356)][_0x552598(0x292,'u0T7')](COOKIES_SPLIT)>-0x1?middleHHH=process['env'][_0x552598(0x145,'&jBJ')][_0xdfc950(0x173)](COOKIES_SPLIT):middleHHH=process[_0x552598(0x20d,'Bzr&')][_0xdfc950(0x356)][_0x552598(0x2e9,'8ulL')](),process[_0x552598(0xfe,'fWep')][_0xdfc950(0x288)]&&process[_0x552598(0x211,'XG@M')][_0xdfc950(0x288)][_0x552598(0x353,'R!pB')](COOKIES_SPLIT)>-0x1?middleHHI=process['env'][_0xdfc950(0x288)][_0xdfc950(0x173)](COOKIES_SPLIT):middleHHI=process[_0xdfc950(0x228)][_0xdfc950(0x288)][_0xdfc950(0x173)](),process[_0x552598(0x17e,'Laa7')][_0xdfc950(0x249)]&&process['env']['GIT_HHJ']['indexOf'](COOKIES_SPLIT)>-0x1?middleHHJ=process[_0x552598(0x232,'c8E$')]['GIT_HHJ']['split'](COOKIES_SPLIT):middleHHJ=process[_0x552598(0x2f0,'xBO$')][_0x552598(0x155,'9jQF')][_0x552598(0x208,'Laa7')](),process['env'][_0xdfc950(0x1c4)]&&process[_0x552598(0x2f0,'xBO$')][_0x552598(0x280,'8RJ2')][_0x552598(0x306,'BRfO')](COOKIES_SPLIT)>-0x1?middleHHK=process['env']['GIT_HHK']['split'](COOKIES_SPLIT):middleHHK=process['env'][_0xdfc950(0x1c4)]['split'](),process[_0xdfc950(0x228)][_0x552598(0x297,']!%F')]&&process[_0x552598(0x2cd,'&jBJ')]['GIT_HHL']['indexOf'](COOKIES_SPLIT)>-0x1?middleHHL=process['env']['GIT_HHL'][_0x552598(0x1a7,']#9$')](COOKIES_SPLIT):middleHHL=process['env'][_0xdfc950(0x358)]['split'](),process['env']['GIT_MMA']&&process[_0xdfc950(0x228)][_0xdfc950(0x236)][_0xdfc950(0x252)](COOKIES_SPLIT)>-0x1?middleMMA=process[_0x552598(0x25f,'^3d[')][_0x552598(0x242,'0suH')]['split'](COOKIES_SPLIT):middleMMA=process[_0xdfc950(0x228)][_0x552598(0x2a2,'PB3L')]['split'](),process[_0x552598(0x23f,'t0E2')]['GIT_MMB']&&process[_0xdfc950(0x228)]['GIT_MMB'][_0x552598(0x17f,'MBf8')](COOKIES_SPLIT)>-0x1?middleMMB=process['env'][_0x552598(0x351,'9jQF')]['split'](COOKIES_SPLIT):middleMMB=process['env'][_0xdfc950(0xe9)][_0x552598(0x30b,'D#bc')](),process[_0x552598(0x2ba,'0suH')][_0xdfc950(0x11c)]&&process['env'][_0x552598(0x15e,'C@pj')][_0xdfc950(0x252)](COOKIES_SPLIT)>-0x1?middleMMC=process[_0x552598(0x230,'WLzr')]['GIT_MMC'][_0xdfc950(0x173)](COOKIES_SPLIT):middleMMC=process['env'][_0x552598(0x2ed,'WLzr')][_0x552598(0x177,'PB3L')](),process['env'][_0xdfc950(0x321)]&&process[_0x552598(0x261,'4kg6')]['GIT_MMD']['indexOf'](COOKIES_SPLIT)>-0x1?middleMMD=process['env'][_0x552598(0x281,'t6zR')][_0x552598(0x1a7,']#9$')](COOKIES_SPLIT):middleMMD=process['env']['GIT_MMD'][_0x552598(0x208,'Laa7')](),process['env'][_0x552598(0x222,']TYB')]&&process[_0xdfc950(0x228)][_0xdfc950(0x178)]['indexOf'](COOKIES_SPLIT)>-0x1?middleMME=process[_0x552598(0x315,'6e9x')][_0x552598(0x32b,'fWep')][_0xdfc950(0x173)](COOKIES_SPLIT):middleMME=process['env']['GIT_MME'][_0x552598(0x147,'0suH')](),process[_0x552598(0x12d,'C@pj')][_0x552598(0x1a6,'9C5v')]&&process[_0x552598(0x20d,'Bzr&')][_0x552598(0x1cd,'^3d[')][_0x552598(0x15f,'p@Z%')](COOKIES_SPLIT)>-0x1?middleMMF=process[_0x552598(0x1fc,'p@Z%')][_0x552598(0x274,'c8E$')][_0x552598(0x317,'XG@M')](COOKIES_SPLIT):middleMMF=process[_0x552598(0x2af,'D#bc')]['GIT_MMF']['split'](),process[_0x552598(0x1b0,'6A2W')]['GIT_MMG']&&process[_0xdfc950(0x228)]['GIT_MMG'][_0x552598(0x1fa,']!%F')](COOKIES_SPLIT)>-0x1?middleMMG=process[_0x552598(0xf3,'8RJ2')][_0x552598(0x14c,'6e9x')][_0xdfc950(0x173)](COOKIES_SPLIT):middleMMG=process[_0xdfc950(0x228)][_0xdfc950(0x32c)][_0x552598(0x124,'Rw6&')](),process[_0x552598(0x310,'u0T7')][_0x552598(0x116,'C@pj')]&&process[_0xdfc950(0x228)][_0xdfc950(0x18f)]['indexOf'](COOKIES_SPLIT)>-0x1?middleMMH=process[_0x552598(0x2ec,'BRfO')][_0x552598(0x2b8,'&jBJ')][_0xdfc950(0x173)](COOKIES_SPLIT):middleMMH=process[_0xdfc950(0x228)][_0xdfc950(0x18f)][_0x552598(0x101,'R!pB')](),process[_0xdfc950(0x228)][_0xdfc950(0x1a0)]&&process['env']['GIT_MMI']['indexOf'](COOKIES_SPLIT)>-0x1?middleMMI=process[_0x552598(0x232,'c8E$')]['GIT_MMI'][_0xdfc950(0x173)](COOKIES_SPLIT):middleMMI=process[_0x552598(0x211,'XG@M')][_0x552598(0x1e0,'$oK8')][_0x552598(0x256,'8RJ2')](),process[_0xdfc950(0x228)]['GIT_MMJ']&&process[_0x552598(0x13d,']#9$')][_0xdfc950(0x2c4)][_0xdfc950(0x252)](COOKIES_SPLIT)>-0x1?middleMMJ=process[_0xdfc950(0x228)][_0x552598(0x342,'BRfO')][_0x552598(0xd8,'p@Z%')](COOKIES_SPLIT):middleMMJ=process[_0xdfc950(0x228)][_0xdfc950(0x2c4)][_0x552598(0x286,'Y2Ex')](),process[_0x552598(0x2f0,'xBO$')][_0x552598(0x2a0,'t0E2')]&&process[_0x552598(0x250,'HkYh')][_0x552598(0x1a4,'&wBm')][_0x552598(0x234,'&jBJ')](COOKIES_SPLIT)>-0x1?middleMMK=process[_0x552598(0x17e,'Laa7')]['GIT_MMK']['split'](COOKIES_SPLIT):middleMMK=process['env'][_0xdfc950(0x2f6)]['split'](),process[_0x552598(0x132,'MBf8')][_0xdfc950(0x1b9)]&&process[_0xdfc950(0x228)][_0xdfc950(0x1b9)][_0xdfc950(0x252)](COOKIES_SPLIT)>-0x1?middleMML=process['env'][_0xdfc950(0x1b9)][_0xdfc950(0x173)](COOKIES_SPLIT):middleMML=process['env'][_0x552598(0x205,'C@pj')]['split']());COOKIE[_0xdfc950(0x2bd)]&&(GIT_COOKIES={'githubACnameVal':COOKIE[_0x552598(0x23c,'XG@M')][_0xdfc950(0x173)]('\x0a'),'githubACurlVal':COOKIE[_0x552598(0x165,'C@pj')]['split']('\x0a'),'githubACheaderVal':COOKIE['githubACheaderVal'][_0xdfc950(0x173)]('\x0a'),'githubACbodyVal':COOKIE[_0x552598(0x219,'9C5v')][_0xdfc950(0x173)]('\x0a'),'HHAVal':COOKIE[_0x552598(0x16d,'&jBJ')]['split']('\x0a'),'HHBVal':COOKIE[_0x552598(0x15a,'9jQF')][_0xdfc950(0x173)]('\x0a'),'HHCVal':COOKIE[_0xdfc950(0x1d8)][_0x552598(0x28f,'MBf8')]('\x0a'),'HHDVal':COOKIE[_0x552598(0x106,'9C5v')][_0x552598(0x30b,'D#bc')]('\x0a'),'HHEVal':COOKIE[_0x552598(0x174,'^3d[')]['split']('\x0a'),'HHFVal':COOKIE[_0xdfc950(0x148)][_0xdfc950(0x173)]('\x0a'),'HHGVal':COOKIE[_0x552598(0xeb,'zIYP')][_0xdfc950(0x173)]('\x0a'),'HHHVal':COOKIE[_0xdfc950(0x1ee)]['split']('\x0a'),'HHIVal':COOKIE[_0x552598(0xe1,'4kg6')][_0xdfc950(0x173)]('\x0a'),'HHJVal':COOKIE[_0xdfc950(0xf1)][_0xdfc950(0x173)]('\x0a'),'HHKVal':COOKIE[_0xdfc950(0x340)][_0xdfc950(0x173)]('\x0a'),'HHLVal':COOKIE[_0x552598(0x162,'xBO$')][_0x552598(0x317,'XG@M')]('\x0a'),'MMAVal':COOKIE[_0xdfc950(0x33a)][_0xdfc950(0x173)]('\x0a'),'MMBVal':COOKIE[_0xdfc950(0x28e)][_0x552598(0x124,'Rw6&')]('\x0a'),'MMCVal':COOKIE[_0x552598(0x31a,'XG@M')][_0x552598(0x208,'Laa7')]('\x0a'),'MMDVal':COOKIE[_0x552598(0x104,'8RJ2')][_0x552598(0x317,'XG@M')]('\x0a'),'MMEVal':COOKIE[_0x552598(0x33e,'XG@M')][_0x552598(0x16b,'zIYP')]('\x0a'),'MMFVal':COOKIE[_0xdfc950(0x203)][_0xdfc950(0x173)]('\x0a'),'MMGVal':COOKIE[_0x552598(0x13e,'6A2W')][_0x552598(0x317,'XG@M')]('\x0a'),'MMHVal':COOKIE[_0x552598(0x1fb,'BmPK')][_0xdfc950(0x173)]('\x0a'),'MMIVal':COOKIE[_0x552598(0x1ad,'Bzr&')][_0x552598(0x147,'0suH')]('\x0a'),'MMJVal':COOKIE[_0x552598(0x311,'$oK8')][_0x552598(0x24a,'fWep')]('\x0a'),'MMKVal':COOKIE[_0x552598(0xf0,'#P*$')]['split']('\x0a'),'MMLVal':COOKIE[_0x552598(0x2c6,'13B@')]['split']('\x0a')},Length=GIT_COOKIES['githubACheaderVal'][_0xdfc950(0x2c3)]);if(!COOKIE[_0xdfc950(0x19c)]){if($['isNode']())Object['keys'](middlegithubACNAME)[_0xdfc950(0x22a)](_0x4428e0=>{middlegithubACNAME[_0x4428e0]&&githubACheaderArr['push'](middlegithubACNAME[_0x4428e0]);}),Object[_0xdfc950(0x133)](middlegithubACURL)[_0xdfc950(0x22a)](_0x30b95c=>{const _0x196d0a=_0x552598;middlegithubACURL[_0x30b95c]&&githubACheaderArr[_0x196d0a(0x202,'^3d[')](middlegithubACURL[_0x30b95c]);}),Object[_0x552598(0x312,'5ZrL')](middlegithubACHEADER)[_0x552598(0x1e4,'T079')](_0x215dd9=>{const _0x5ac73e=_0x552598;middlegithubACHEADER[_0x215dd9]&&githubACheaderArr[_0x5ac73e(0x2c2,'C@pj')](middlegithubACHEADER[_0x215dd9]);}),Object[_0x552598(0x25b,'Laa7')](middlegithubACBODY)[_0x552598(0x1f6,'9C5v')](_0x52738a=>{middlegithubACBODY[_0x52738a]&&githubACbodyArr['push'](middlegithubACBODY[_0x52738a]);}),Object[_0x552598(0x354,'#P*$')](middleHHA)[_0x552598(0x176,'QR&3')](_0xb5a63a=>{const _0x2940ff=_0xdfc950;middleHHA[_0xb5a63a]&&HHAArr[_0x2940ff(0x30a)](middleHHA[_0xb5a63a]);}),Object[_0xdfc950(0x133)](middleHHB)['forEach'](_0x157ecd=>{const _0x15024d=_0xdfc950;middleHHB[_0x157ecd]&&HHBArr[_0x15024d(0x30a)](middleHHB[_0x157ecd]);}),Object[_0x552598(0x283,'4kg6')](middleHHC)[_0xdfc950(0x22a)](_0x478f3f=>{const _0x1c4190=_0x552598;middleHHC[_0x478f3f]&&HHCArr[_0x1c4190(0x239,'Rw6&')](middleHHC[_0x478f3f]);}),Object[_0x552598(0xf8,'BmPK')](middleHHD)[_0xdfc950(0x22a)](_0x2acc4e=>{const _0x2950eb=_0x552598;middleHHD[_0x2acc4e]&&HHDArr[_0x2950eb(0x102,'fWep')](middleHHD[_0x2acc4e]);}),Object[_0xdfc950(0x133)](middleHHE)[_0xdfc950(0x22a)](_0x3c5cef=>{const _0x1eb2d1=_0xdfc950;middleHHE[_0x3c5cef]&&HHEArr[_0x1eb2d1(0x30a)](middleHHE[_0x3c5cef]);}),Object[_0xdfc950(0x133)](middleHHF)[_0xdfc950(0x22a)](_0x1122b8=>{const _0x54aa01=_0xdfc950;middleHHF[_0x1122b8]&&HHFArr[_0x54aa01(0x30a)](middleHHF[_0x1122b8]);}),Object[_0xdfc950(0x133)](middleHHG)[_0x552598(0x141,'$oK8')](_0x37b478=>{const _0x3a7b15=_0xdfc950;middleHHG[_0x37b478]&&HHGArr[_0x3a7b15(0x30a)](middleHHG[_0x37b478]);}),Object[_0x552598(0x1d4,'t5BQ')](middleHHH)[_0xdfc950(0x22a)](_0x59dad0=>{const _0x3177a9=_0x552598;middleHHH[_0x59dad0]&&HHHArr[_0x3177a9(0x179,'T079')](middleHHH[_0x59dad0]);}),Object[_0xdfc950(0x133)](middleHHI)[_0xdfc950(0x22a)](_0x733e44=>{const _0x10f6a6=_0x552598;middleHHI[_0x733e44]&&HHIArr[_0x10f6a6(0x1c8,'4kg6')](middleHHI[_0x733e44]);}),Object['keys'](middleHHJ)[_0xdfc950(0x22a)](_0x3d19d0=>{const _0xea6f17=_0x552598;middleHHJ[_0x3d19d0]&&HHJArr[_0xea6f17(0x2e1,'t5BQ')](middleHHJ[_0x3d19d0]);}),Object[_0xdfc950(0x133)](middleHHK)[_0xdfc950(0x22a)](_0x46bffc=>{const _0x538d65=_0xdfc950;middleHHK[_0x46bffc]&&HHKArr[_0x538d65(0x30a)](middleHHK[_0x46bffc]);}),Object[_0x552598(0x14d,'0^bc')](middleHHL)[_0xdfc950(0x22a)](_0x16c36d=>{middleHHL[_0x16c36d]&&HHLArr['push'](middleHHL[_0x16c36d]);}),Object[_0x552598(0x354,'#P*$')](middleMMA)[_0xdfc950(0x22a)](_0x3fba57=>{const _0x439142=_0xdfc950;middleMMA[_0x3fba57]&&MMAArr[_0x439142(0x30a)](middleMMA[_0x3fba57]);}),Object['keys'](middleMMB)[_0xdfc950(0x22a)](_0x567c85=>{const _0x4ebc66=_0x552598;middleMMB[_0x567c85]&&MMBArr[_0x4ebc66(0x179,'T079')](middleMMB[_0x567c85]);}),Object['keys'](middleMMC)[_0x552598(0x272,'57CJ')](_0x4478b8=>{const _0x9f4149=_0x552598;middleMMC[_0x4478b8]&&MMCArr[_0x9f4149(0x213,'8RJ2')](middleMMC[_0x4478b8]);}),Object['keys'](middleMMD)[_0xdfc950(0x22a)](_0x43e509=>{const _0x2500c1=_0x552598;middleMMD[_0x43e509]&&MMDArr[_0x2500c1(0x20f,'HkYh')](middleMMD[_0x43e509]);}),Object[_0xdfc950(0x133)](middleMME)['forEach'](_0x3bb4bb=>{const _0x262df7=_0xdfc950;middleMME[_0x3bb4bb]&&MMEArr[_0x262df7(0x30a)](middleMME[_0x3bb4bb]);}),Object[_0x552598(0x32d,'6e9x')](middleMMF)[_0xdfc950(0x22a)](_0x43b862=>{const _0x4ef071=_0x552598;middleMMF[_0x43b862]&&MMFArr[_0x4ef071(0x2a5,'t6zR')](middleMMF[_0x43b862]);}),Object[_0xdfc950(0x133)](middleMMG)[_0x552598(0x32e,'Q#In')](_0x389322=>{const _0xa79540=_0x552598;middleMMG[_0x389322]&&MMGArr[_0xa79540(0xde,'c8E$')](middleMMG[_0x389322]);}),Object[_0x552598(0x10d,'u0T7')](middleMMH)['forEach'](_0x1b254b=>{const _0x3f1d21=_0xdfc950;middleMMH[_0x1b254b]&&MMHArr[_0x3f1d21(0x30a)](middleMMH[_0x1b254b]);}),Object[_0x552598(0x10e,'QR&3')](middleMMI)['forEach'](_0x4321d7=>{const _0x1e89e0=_0x552598;middleMMI[_0x4321d7]&&MMIArr[_0x1e89e0(0x1ff,'57CJ')](middleMMI[_0x4321d7]);}),Object[_0xdfc950(0x133)](middleMMJ)[_0xdfc950(0x22a)](_0x1d6afc=>{const _0x4dfb92=_0x552598;middleMMJ[_0x1d6afc]&&MMJArr[_0x4dfb92(0x23a,'BRfO')](middleMMJ[_0x1d6afc]);}),Object['keys'](middleMMK)['forEach'](_0xe4a701=>{middleMMK[_0xe4a701]&&MMKArr['push'](middleMMK[_0xe4a701]);}),Object[_0xdfc950(0x133)](middleMML)[_0x552598(0x2e6,'WLzr')](_0x10b5f9=>{const _0x4263a3=_0x552598;middleMML[_0x10b5f9]&&MMLArr[_0x4263a3(0x334,'R!pB')](middleMML[_0x10b5f9]);});else{githubACnameArr[_0x552598(0x10b,'5ZrL')]($['getdata'](_0x552598(0x1c7,'WLzr'))),githubACurlArr[_0x552598(0x1c0,'0suH')]($['getdata'](_0xdfc950(0x200))),githubACheaderArr[_0xdfc950(0x30a)]($[_0x552598(0x2b7,'BRfO')](_0x552598(0x1ba,'HkYh'))),githubACbodyArr[_0x552598(0x251,'9jQF')]($[_0xdfc950(0xe6)](_0x552598(0xe3,'WLzr'))),HHAArr[_0xdfc950(0x30a)]($['getdata'](_0xdfc950(0x29f))),HHBArr[_0x552598(0x2c2,'C@pj')]($['getdata']('HHB')),HHCArr[_0xdfc950(0x30a)]($[_0x552598(0x2c5,'C@pj')]('HHC')),HHDArr[_0x552598(0x316,'XG@M')]($[_0xdfc950(0xe6)]('HHD')),HHEArr[_0xdfc950(0x30a)]($['getdata'](_0x552598(0x355,'8ulL'))),HHFArr[_0xdfc950(0x30a)]($['getdata'](_0x552598(0xd2,'BRfO'))),HHGArr[_0x552598(0x1ac,'Q#In')]($[_0xdfc950(0xe6)](_0xdfc950(0x136))),HHHArr[_0xdfc950(0x30a)]($[_0x552598(0x2c5,'C@pj')](_0x552598(0x1ec,'t0E2'))),HHIArr['push']($[_0x552598(0x2d4,'Y2Ex')](_0x552598(0x314,'4kg6'))),HHJArr[_0xdfc950(0x30a)]($[_0xdfc950(0xe6)](_0x552598(0x2ae,'Laa7'))),HHKArr[_0xdfc950(0x30a)]($[_0x552598(0x1a2,'9C5v')](_0xdfc950(0x1e8))),HHLArr['push']($[_0xdfc950(0xe6)](_0x552598(0x149,']#9$'))),MMAArr['push']($['getdata'](_0x552598(0x30f,'Bzr&'))),MMBArr[_0xdfc950(0x30a)]($[_0x552598(0x2e0,'xBO$')](_0xdfc950(0x329))),MMCArr[_0x552598(0x10b,'5ZrL')]($[_0xdfc950(0xe6)](_0x552598(0x2dc,']TYB'))),MMDArr[_0x552598(0x316,'XG@M')]($['getdata'](_0xdfc950(0x221))),MMEArr[_0xdfc950(0x30a)]($[_0xdfc950(0xe6)](_0x552598(0x34c,'4kg6'))),MMFArr[_0xdfc950(0x30a)]($[_0xdfc950(0xe6)](_0x552598(0x28a,'c8E$'))),MMGArr[_0x552598(0x214,'$oK8')]($[_0xdfc950(0xe6)](_0xdfc950(0x1e3))),MMHArr[_0x552598(0x2e1,'t5BQ')]($[_0xdfc950(0xe6)](_0x552598(0x235,'&jBJ'))),MMIArr[_0xdfc950(0x30a)]($[_0xdfc950(0xe6)](_0x552598(0x1f8,'u0T7'))),MMJArr[_0x552598(0x214,'$oK8')]($[_0xdfc950(0xe6)](_0x552598(0x1ed,'XG@M'))),MMKArr[_0x552598(0x171,'Qdl^')]($['getdata'](_0x552598(0x320,'Rw6&'))),MMLArr[_0x552598(0x196,'&jBJ')]($[_0x552598(0x1b8,'57CJ')](_0x552598(0x2fc,'0suH')));'githubACXXX'&&(XXX=$[_0x552598(0x105,'V$aC')](_0x552598(0x33f,']!%F'))||'0');let githubACCount=($[_0x552598(0x1cf,'PB3L')](_0x552598(0x1f0,'BmPK'))||'1')-0x0;for(let i=0x2;i<=githubACCount;i++){$[_0xdfc950(0xe6)](_0x552598(0x2a3,'Q#In')+i)&&(githubACnameArr[_0xdfc950(0x30a)]($[_0x552598(0x1b8,'57CJ')](_0x552598(0x336,'Qdl^')+i)),githubACurlArr[_0x552598(0x2e1,'t5BQ')]($[_0xdfc950(0xe6)](_0x552598(0x2b4,'c8E$')+i)),githubACheaderArr[_0xdfc950(0x30a)]($[_0x552598(0x258,'WLzr')](_0x552598(0x14f,'t6zR')+i)),githubACbodyArr['push']($[_0x552598(0x258,'WLzr')](_0xdfc950(0x1a8)+i)),HHAArr['push']($[_0xdfc950(0xe6)](_0xdfc950(0x29f)+i)),HHBArr[_0xdfc950(0x30a)]($[_0x552598(0x2e0,'xBO$')](_0x552598(0x303,'0suH')+i)),HHCArr[_0x552598(0x334,'R!pB')]($[_0x552598(0x181,'$oK8')](_0x552598(0x19b,']!%F')+i)),HHDArr[_0x552598(0x1dd,'u0T7')]($[_0x552598(0x161,'R!pB')](_0xdfc950(0x298)+i)),HHEArr[_0x552598(0x202,'^3d[')]($['getdata']('HHE'+i)),HHFArr[_0x552598(0x1f9,'WLzr')]($[_0x552598(0x1a9,'u0T7')](_0xdfc950(0x2e7)+i)),HHGArr[_0x552598(0x34a,'0^bc')]($[_0xdfc950(0xe6)](_0xdfc950(0x136)+i)),HHHArr[_0x552598(0x195,'xBO$')]($[_0x552598(0x1a9,'u0T7')]('HHH'+i)),HHIArr[_0xdfc950(0x30a)]($['getdata']('HHI'+i)),HHJArr[_0xdfc950(0x30a)]($['getdata'](_0xdfc950(0x19e)+i)),HHKArr[_0xdfc950(0x30a)]($[_0x552598(0x26f,'fWep')](_0x552598(0x24f,']!%F')+i)),HHLArr['push']($[_0xdfc950(0xe6)](_0xdfc950(0x2b5)+i)),MMAArr[_0xdfc950(0x30a)]($[_0xdfc950(0xe6)](_0x552598(0x15c,'u0T7')+i)),MMBArr[_0x552598(0x1f9,'WLzr')]($['getdata']('MMB'+i)),MMCArr[_0xdfc950(0x30a)]($['getdata']('MMC'+i)),MMDArr[_0xdfc950(0x30a)]($['getdata'](_0x552598(0x34b,'fWep')+i)),MMEArr[_0x552598(0x21e,'13B@')]($['getdata'](_0xdfc950(0x331)+i)),MMFArr[_0x552598(0x1c6,'8ulL')]($[_0xdfc950(0xe6)]('MMF'+i)),MMGArr[_0x552598(0x277,'p@Z%')]($[_0xdfc950(0xe6)]('MMG'+i)),MMHArr['push']($[_0x552598(0x2f1,']#9$')](_0x552598(0x120,'9C5v')+i)),MMIArr[_0x552598(0x11e,'zIYP')]($['getdata']('MMI'+i)),MMJArr[_0xdfc950(0x30a)]($[_0x552598(0x33c,'MBf8')](_0x552598(0x20c,'fWep')+i)),MMKArr[_0x552598(0x213,'8RJ2')]($['getdata']('MMK'+i)),MMLArr[_0xdfc950(0x30a)]($[_0x552598(0x1a2,'9C5v')](_0xdfc950(0x2e8)+i)));}}Length=githubACheaderArr[_0x552598(0x284,']TYB')];}function GetCookie(){const _0x46102d=_0xdfc950,_0x372c3c=_0x552598;if($request&&$request[_0x372c3c(0x139,'13B@')][_0x46102d(0x252)](_0x46102d(0x344))>=0x0&&$request[_0x46102d(0x112)][_0x372c3c(0x300,'&wBm')](_0x372c3c(0x2c1,'MBf8'))>=0x0&&$request[_0x372c3c(0x302,'t6zR')][_0x46102d(0x252)](_0x372c3c(0x1ca,'9jQF'))>=0x0&&$request[_0x46102d(0x255)]['indexOf']('workflow=')>=0x0&&$request['body'][_0x372c3c(0x115,'13B@')](_0x372c3c(0x220,'R!pB'))>=0x0){const _0x3feb31=$request[_0x372c3c(0x2dd,'R!pB')],_0x52a2c7=JSON[_0x46102d(0x212)]($request['headers']),_0x51b29f=decodeURIComponent($request[_0x46102d(0x22e)][_0x372c3c(0x309,'t6zR')])[_0x46102d(0x173)](_0x46102d(0x322))[0x1],_0x58f02e=$request['body'];if(_0x3feb31){_0x29958d();function _0x29958d(){const _0xe6c7b=_0x46102d,_0x516641=_0x372c3c;bodys=$[_0x516641(0x2cc,'8ulL')]('githubACurl'+$[_0x516641(0x1f1,']TYB')]);if(bodys){if(bodys['indexOf'](_0x3feb31)>=0x0)$[_0x516641(0xec,']!%F')]('['+($['name']+$[_0x516641(0x2de,'57CJ')])+']\x20githubACurlVal已存在✅:\x20githubACurlVal:\x20'+_0x3feb31),$[_0x516641(0x2d2,'D#bc')]($['name']+$[_0x516641(0x1d2,'5ZrL')],'githubACurlVal已存在:\x20🎉',''),$[_0x516641(0x2d0,'p@Z%')]();else $['idx']==''?($[_0xe6c7b(0x246)]=0x2,_0x29958d()):($[_0xe6c7b(0x246)]=$[_0x516641(0xe8,'8ulL')]+0x1,_0x29958d());}else{$[_0xe6c7b(0x127)](_0x3feb31,_0xe6c7b(0x200)+$[_0xe6c7b(0x246)]),$[_0x516641(0x352,'xBO$')](_0x52a2c7,_0xe6c7b(0x209)+$['idx']),$['setdata'](_0x51b29f,'githubACname'+$['idx']),$[_0x516641(0x2ce,'Bzr&')](_0x58f02e,_0x516641(0x34e,'MBf8')+$[_0x516641(0x2bf,'T079')]),$['log']('['+($[_0x516641(0x2a1,'t6zR')]+$[_0xe6c7b(0x246)])+_0xe6c7b(0x245)+_0x3feb31),$['msg']($[_0xe6c7b(0x10f)]+$[_0xe6c7b(0x246)],_0xe6c7b(0x1e9),''),$[_0x516641(0x1f4,'R!pB')]('['+($[_0x516641(0x218,'8RJ2')]+$[_0x516641(0x1b5,']#9$')])+_0x516641(0x1ea,'C@pj')+_0x52a2c7),$[_0x516641(0x349,'C@pj')]($['name']+$[_0x516641(0x2de,'57CJ')],_0xe6c7b(0x26c),''),$['log']('['+($[_0xe6c7b(0x10f)]+$[_0xe6c7b(0x246)])+_0xe6c7b(0xf6)+_0x51b29f),$['msg']($[_0x516641(0x2e4,'c8E$')]+$[_0xe6c7b(0x246)],_0xe6c7b(0xca),''),$[_0x516641(0x1f3,'PB3L')]('['+($[_0xe6c7b(0x10f)]+$[_0x516641(0x10a,'9C5v')])+_0xe6c7b(0x266)+_0x58f02e),$[_0x516641(0x229,'riGd')]($[_0x516641(0x339,'fWep')]+$[_0xe6c7b(0x246)],'获取githubACbodyVal:\x20成功🎉',''),$[_0x516641(0x185,'V$aC')]();};}}}}console[_0x552598(0x1d6,'D#bc')](_0x552598(0x26d,'13B@')+new Date(new Date()[_0xdfc950(0x269)]()+new Date()[_0x552598(0x22d,'Y2Ex')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x552598(0xe7,'PB3L')]()+'\x20=====================\x0a'),console[_0xdfc950(0x271)](_0xdfc950(0x118)+Length+'\x20个'+$[_0x552598(0x16a,'R!pB')]+_0xdfc950(0x335)),nowTimes=new Date(new Date()[_0xdfc950(0x269)]()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8),Y=nowTimes['getFullYear']()+'-',M=(nowTimes[_0xdfc950(0x2eb)]()+0x1<0xa?'0'+(nowTimes[_0x552598(0xee,'t0E2')]()+0x1):nowTimes[_0x552598(0x15b,'BRfO')]()+0x1)+'-',D=nowTimes[_0x552598(0xdd,'Q#In')]()<0xa?'0'+nowTimes['getDate']():nowTimes[_0x552598(0x159,'6e9x')](),ddtime=Y+M+D,console[_0xdfc950(0x271)](ddtime);function tts(_0xb2704f){const _0x2f427c=_0xdfc950,_0x37b2a6=_0x552598;if($['isNode']())TTS=Math['round'](new Date()[_0x37b2a6(0x2cb,'V$aC')]()+new Date()[_0x37b2a6(0x323,'T079')]()*0x3c*0x3e8)[_0x2f427c(0x1d3)]();else TTS=Math[_0x37b2a6(0x157,'#P*$')](new Date()[_0x37b2a6(0x14e,'Rw6&')]()+new Date()[_0x2f427c(0x22f)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)['toString']();return TTS;};function ts(_0x1d04b8){const _0x46c011=_0xdfc950,_0x560ec6=_0x552598;if($['isNode']())TS=Math[_0x560ec6(0x23e,'Laa7')]((new Date()[_0x46c011(0x269)]()+new Date()[_0x560ec6(0xc4,'Laa7')]()*0x3c*0x3e8)/0x3e8)[_0x46c011(0x1d3)]();else TS=Math[_0x46c011(0x291)]((new Date()['getTime']()+new Date()[_0x560ec6(0x151,'t5BQ')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)/0x3e8)[_0x46c011(0x1d3)]();return TS;};function daytime(_0x48f709){const _0x44362f=_0x552598,_0x427f28=_0xdfc950;if($['isNode']())DAYTIME=new Date(new Date()['toLocaleDateString']())[_0x427f28(0x269)]()-0x8*0x3c*0x3c*0x3e8;else DAYTIME=new Date(new Date()[_0x44362f(0x24d,'BRfO')]())[_0x44362f(0x113,'57CJ')]();return DAYTIME;};function time(_0x1b9871){const _0x5d1c20=_0x552598,_0x22b6ad=_0xdfc950;if($[_0x22b6ad(0x180)]())var _0x8d9fb4=new Date(_0x1b9871+0x8*0x3c*0x3c*0x3e8);else var _0x8d9fb4=new Date(_0x1b9871);return Y=_0x8d9fb4['getFullYear']()+'-',M=(_0x8d9fb4[_0x5d1c20(0x1dc,'0suH')]()+0x1<0xa?'0'+(_0x8d9fb4['getMonth']()+0x1):_0x8d9fb4['getMonth']()+0x1)+'-',D=_0x8d9fb4[_0x22b6ad(0x1ae)]()+'\x20',h=_0x8d9fb4[_0x22b6ad(0xff)]()+':',m=_0x8d9fb4[_0x22b6ad(0x119)]()+':',s=_0x8d9fb4[_0x5d1c20(0x1b2,'zIYP')](),Y+M+D+h+m+s;};function timecs(){const _0x7df351=_0xdfc950,_0x36df39=_0x552598;if($[_0x36df39(0x1b6,']TYB')]())var _0x2f615c=new Date(newtime)[_0x36df39(0x2c8,'zIYP')]()-0x8*0x3c*0x3c*0x3e8;else var _0x2f615c=new Date(newtime)[_0x7df351(0x269)]();return _0x2f615c;};function udid(){const _0x1aef58=_0xdfc950;var _0x35ae17=[],_0xa743b1=_0x1aef58(0x2f3);for(var _0x2fff2d=0x0;_0x2fff2d<0x24;_0x2fff2d++){_0x35ae17[_0x2fff2d]=_0xa743b1[_0x1aef58(0x2f7)](Math[_0x1aef58(0x13a)](Math[_0x1aef58(0x21b)]()*0x10),0x1);}_0x35ae17[0xe]='4',_0x35ae17[0x13]=_0xa743b1[_0x1aef58(0x2f7)](_0x35ae17[0x13]&0x3|0x8,0x1),_0x35ae17[0x8]=_0x35ae17[0xd]=_0x35ae17[0x12]=_0x35ae17[0x17]='-';var _0x45e49b=_0x35ae17[_0x1aef58(0x2b3)]('');return _0x45e49b;}function udid2(){function _0x3d2ebb(){const _0xb9da4b=_0x441e,_0x80805c=_0x3089;return((0x1+Math[_0x80805c(0x1d9,']TYB')]())*0x10000|0x0)[_0xb9da4b(0x1d3)](0x10)[_0x80805c(0x19d,'xBO$')](0x1);}return _0x3d2ebb()+_0x3d2ebb()+'-'+_0x3d2ebb()+'-'+_0x3d2ebb()+'-'+_0x3d2ebb()+'-'+_0x3d2ebb()+_0x3d2ebb()+_0x3d2ebb();}function encodeUnicode(_0x517e35){const _0x3da182=_0xdfc950,_0x230873=_0x552598;var _0x5bd6c3=[];for(var _0x4074f8=0x0;_0x4074f8<_0x517e35['length'];_0x4074f8++){_0x5bd6c3[_0x4074f8]=('00'+_0x517e35[_0x230873(0x2f8,']TYB')](_0x4074f8)[_0x230873(0xd5,'T079')](0x10))[_0x230873(0x1c2,'PB3L')](-0x4);}return'\x5cu'+_0x5bd6c3[_0x3da182(0x2b3)]('\x5cu');}function decodeUnicode(_0x47a4eb){return _0x47a4eb=_0x47a4eb['replace'](/\\/g,'%'),unescape(_0x47a4eb);}let isGetCookie=typeof $request!==_0x552598(0x114,'fWep');isGetCookie?(GetCookie(),$[_0xdfc950(0xc5)]()):!(async()=>{const _0x1f10c9=_0x552598;await all(),await $[_0x1f10c9(0x1db,'riGd')](0x3e8),await msgShow();})()[_0x552598(0x138,'WLzr')](_0x3be6d7=>{const _0x3825cc=_0x552598;$[_0x3825cc(0x18a,'#P*$')]('','❌\x20'+$[_0x3825cc(0x122,'t5BQ')]+',\x20失败!\x20原因:\x20'+_0x3be6d7+'!','');})[_0x552598(0x1d5,'p@Z%')](()=>{const _0x4607c=_0x552598;$[_0x4607c(0x24b,'D#bc')]();});function _0x3089(_0x470990,_0x50afb8){_0x470990=_0x470990-0xc3;let _0x3ba6f2=_0x3ba6[_0x470990];if(_0x3089['svYmQt']===undefined){var _0x441ec1=function(_0x52738a){const _0xb5a63a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x157ecd='';for(let _0x478f3f=0x0,_0x2acc4e,_0x3c5cef,_0x1122b8=0x0;_0x3c5cef=_0x52738a['charAt'](_0x1122b8++);~_0x3c5cef&&(_0x2acc4e=_0x478f3f%0x4?_0x2acc4e*0x40+_0x3c5cef:_0x3c5cef,_0x478f3f++%0x4)?_0x157ecd+=String['fromCharCode'](0xff&_0x2acc4e>>(-0x2*_0x478f3f&0x6)):0x0){_0x3c5cef=_0xb5a63a['indexOf'](_0x3c5cef);}return _0x157ecd;};const _0x215dd9=function(_0x37b478,_0x59dad0){let _0x733e44=[],_0x3d19d0=0x0,_0x46bffc,_0x16c36d='',_0x3fba57='';_0x37b478=_0x441ec1(_0x37b478);for(let _0x4478b8=0x0,_0x43e509=_0x37b478['length'];_0x4478b8<_0x43e509;_0x4478b8++){_0x3fba57+='%'+('00'+_0x37b478['charCodeAt'](_0x4478b8)['toString'](0x10))['slice'](-0x2);}_0x37b478=decodeURIComponent(_0x3fba57);let _0x567c85;for(_0x567c85=0x0;_0x567c85<0x100;_0x567c85++){_0x733e44[_0x567c85]=_0x567c85;}for(_0x567c85=0x0;_0x567c85<0x100;_0x567c85++){_0x3d19d0=(_0x3d19d0+_0x733e44[_0x567c85]+_0x59dad0['charCodeAt'](_0x567c85%_0x59dad0['length']))%0x100,_0x46bffc=_0x733e44[_0x567c85],_0x733e44[_0x567c85]=_0x733e44[_0x3d19d0],_0x733e44[_0x3d19d0]=_0x46bffc;}_0x567c85=0x0,_0x3d19d0=0x0;for(let _0x3bb4bb=0x0;_0x3bb4bb<_0x37b478['length'];_0x3bb4bb++){_0x567c85=(_0x567c85+0x1)%0x100,_0x3d19d0=(_0x3d19d0+_0x733e44[_0x567c85])%0x100,_0x46bffc=_0x733e44[_0x567c85],_0x733e44[_0x567c85]=_0x733e44[_0x3d19d0],_0x733e44[_0x3d19d0]=_0x46bffc,_0x16c36d+=String['fromCharCode'](_0x37b478['charCodeAt'](_0x3bb4bb)^_0x733e44[(_0x733e44[_0x567c85]+_0x733e44[_0x3d19d0])%0x100]);}return _0x16c36d;};_0x3089['MTHYez']=_0x215dd9,_0x3089['ugIHXC']={},_0x3089['svYmQt']=!![];}const _0x3089f0=_0x3ba6[0x0],_0x4428e0=_0x470990+_0x3089f0,_0x30b95c=_0x3089['ugIHXC'][_0x4428e0];return _0x30b95c===undefined?(_0x3089['GqkEhH']===undefined&&(_0x3089['GqkEhH']=!![]),_0x3ba6f2=_0x3089['MTHYez'](_0x3ba6f2,_0x50afb8),_0x3089['ugIHXC'][_0x4428e0]=_0x3ba6f2):_0x3ba6f2=_0x30b95c,_0x3ba6f2;}async function all(){const _0x527962=_0xdfc950,_0x15771f=_0x552598;if(!Length){$[_0x15771f(0x24e,'6A2W')]($[_0x15771f(0x33b,'Qdl^')],'提示：⚠️请点击前往获取CK\x20\x20https://github.com\x0a',_0x15771f(0x1fd,'D#bc'),{'open-url':'https://github.com'});return;}for(let _0x423e82=0x0;_0x423e82<Length;_0x423e82++){COOKIE[_0x15771f(0x318,'&jBJ')]&&(githubACnameVal=GIT_COOKIES[_0x527962(0x332)][_0x423e82],githubACurlVal=GIT_COOKIES[_0x15771f(0x2f4,'XG@M')][_0x423e82],githubACheaderVal=GIT_COOKIES[_0x15771f(0x164,'Qdl^')][_0x423e82],githubACbodyVal=GIT_COOKIES[_0x15771f(0x324,'#P*$')][_0x423e82],HHAVal=GIT_COOKIES[_0x527962(0x295)][_0x423e82],HHBVal=GIT_COOKIES[_0x15771f(0x1b4,'&jBJ')][_0x423e82],HHCVal=GIT_COOKIES[_0x527962(0x1d8)][_0x423e82],HHDVal=GIT_COOKIES[_0x527962(0x111)][_0x423e82],HHEVal=GIT_COOKIES[_0x527962(0xe2)][_0x423e82],HHFVal=GIT_COOKIES[_0x15771f(0x22c,']TYB')][_0x423e82],HHGVal=GIT_COOKIES[_0x15771f(0x282,'Bzr&')][_0x423e82],HHHVal=GIT_COOKIES[_0x15771f(0x11f,'0^bc')][_0x423e82],HHIVal=GIT_COOKIES[_0x527962(0x21a)][_0x423e82],HHJVal=GIT_COOKIES[_0x15771f(0x223,'^3d[')][_0x423e82],HHKVal=GIT_COOKIES['HHKVal'][_0x423e82],HHLVal=GIT_COOKIES[_0x527962(0x293)][_0x423e82],MMAVal=GIT_COOKIES[_0x527962(0x33a)][_0x423e82],MMBVal=GIT_COOKIES[_0x527962(0x28e)][_0x423e82],MMCVal=GIT_COOKIES['MMCVal'][_0x423e82],MMDVal=GIT_COOKIES[_0x15771f(0x346,']!%F')][_0x423e82],MMEVal=GIT_COOKIES[_0x527962(0x31f)][_0x423e82],MMFVal=GIT_COOKIES[_0x15771f(0x197,'13B@')][_0x423e82],MMGVal=GIT_COOKIES[_0x15771f(0x1da,'t0E2')][_0x423e82],MMHVal=GIT_COOKIES[_0x15771f(0x150,'9C5v')][_0x423e82],MMIVal=GIT_COOKIES[_0x527962(0xea)][_0x423e82],MMJVal=GIT_COOKIES[_0x527962(0x285)][_0x423e82],MMKVal=GIT_COOKIES['MMKVal'][_0x423e82],MMLVal=GIT_COOKIES[_0x15771f(0x21c,'Qdl^')][_0x423e82]);!COOKIE[_0x15771f(0x17c,'Rw6&')]&&(githubACnameVal=githubACnameArr[_0x423e82],githubACurlVal=githubACurlArr[_0x423e82],githubACheaderVal=githubACheaderArr[_0x423e82],githubACbodyVal=githubACbodyArr[_0x423e82],HHAVal=HHAArr[_0x423e82],HHBVal=HHBArr[_0x423e82],HHCVal=HHCArr[_0x423e82],HHDVal=HHDArr[_0x423e82],HHEVal=HHEArr[_0x423e82],HHFVal=HHFArr[_0x423e82],HHGVal=HHGArr[_0x423e82],HHHVal=HHHArr[_0x423e82],HHIVal=HHIArr[_0x423e82],HHJVal=HHJArr[_0x423e82],HHKVal=HHKArr[_0x423e82],HHLVal=HHLArr[_0x423e82],MMAVal=MMAArr[_0x423e82],MMBVal=MMBArr[_0x423e82],MMCVal=MMCArr[_0x423e82],MMDVal=MMDArr[_0x423e82],MMEVal=MMEArr[_0x423e82],MMFVal=MMFArr[_0x423e82],MMGVal=MMGArr[_0x423e82],MMHVal=MMHArr[_0x423e82],MMIVal=MMIArr[_0x423e82],MMJVal=MMJArr[_0x423e82],MMKVal=MMKArr[_0x423e82],MMLVal=MMLArr[_0x423e82]);O=$[_0x15771f(0x294,'5ZrL')]+(_0x423e82+0x1)+'🔔',await console['log']('-------------------------\x0a\x0a🔔开始运行'+($[_0x15771f(0x17b,'WLzr')]+(_0x423e82+0x1))+'【'+githubACnameVal+'】'),$['message']+='【'+githubACnameVal+'】'+HHAVal+'-'+HHBVal+'\x20'+HHCVal+'-'+HHDVal+'\x20'+HHEVal+'-'+HHFVal+'\x20'+HHGVal+'-'+HHHVal+'\x20'+HHIVal+'-'+HHJVal+'\x20'+HHKVal+'-'+HHLVal+_0x15771f(0x1e1,'6e9x')+MMAVal+'\x20'+MMBVal+'\x20'+MMCVal+'\x20'+MMDVal+'\x20'+MMEVal+'\x20'+MMFVal+'\x20'+MMGVal+'\x20'+MMHVal+'\x20'+MMIVal+'\x20'+MMJVal+'\x20'+MMKVal+'\x20'+MMLVal+_0x527962(0x287);if((nowTimes['getHours']()>=HHAVal&&nowTimes[_0x527962(0xff)]()<=HHBVal||nowTimes['getHours']()>=HHCVal&&nowTimes[_0x527962(0xff)]()<=HHDVal||nowTimes[_0x15771f(0x1bd,'BmPK')]()>=HHEVal&&nowTimes[_0x527962(0xff)]()<=HHFVal||nowTimes[_0x15771f(0x1bc,'8ulL')]()>=HHGVal&&nowTimes['getHours']()<=HHHVal||nowTimes[_0x527962(0xff)]()>=HHIVal&&nowTimes['getHours']()<=HHJVal||nowTimes[_0x15771f(0x28d,'0^bc')]()>=HHKVal&&nowTimes[_0x15771f(0x28c,']#9$')]()<=HHLVal)&&(nowTimes[_0x527962(0x119)]()==MMAVal||nowTimes[_0x527962(0x119)]()==MMBVal||nowTimes[_0x15771f(0x207,'zIYP')]()==MMCVal||nowTimes['getMinutes']()==MMDVal||nowTimes[_0x15771f(0x301,'Y2Ex')]()==MMEVal||nowTimes[_0x15771f(0x13b,'WLzr')]()==MMFVal||nowTimes[_0x15771f(0x11d,'hMfB')]()==MMGVal||nowTimes[_0x527962(0x119)]()==MMHVal||nowTimes[_0x527962(0x119)]()==MMIVal||nowTimes['getMinutes']()==MMJVal||nowTimes[_0x527962(0x119)]()==MMKVal||nowTimes[_0x527962(0x119)]()==MMLVal))await githubAC();else _0x423e82+0x1==XXX||XXX==0x378?(XXX==0x378?(console[_0x527962(0x271)](_0x15771f(0x15d,'Q#In')),$[_0x15771f(0x264,'zIYP')]+=_0x527962(0xf7)):(console[_0x527962(0x271)]('即时触发已开启，您选择的是【'+XXX+_0x527962(0x350)),$['message']+=_0x527962(0x276)+XXX+_0x15771f(0x2c9,'8RJ2')),await githubAC()):(console['log'](githubACnameVal+_0x527962(0x2ee)),$[_0x15771f(0x1ef,'Q#In')]+=githubACnameVal+_0x15771f(0x2b9,'9C5v'));}}function msgShow(){return new Promise(async _0x3e27c2=>{const _0x317501=_0x3089,_0x1edb05=_0x441e;notifyInterval!=0x1&&console['log']($[_0x1edb05(0x10f)]+'\x0a'+$[_0x1edb05(0x248)]);notifyInterval==0x1&&$['msg']($[_0x317501(0x2a1,'t6zR')],'',$[_0x1edb05(0x248)]);notifyInterval==0x2&&(nowTimes[_0x1edb05(0xff)]()===0xc||nowTimes['getHours']()===0x17)&&(nowTimes[_0x317501(0x29d,'t0E2')]()>=0x0&&nowTimes[_0x317501(0x30c,'#P*$')]()<=0xa)&&$[_0x1edb05(0x2e2)]($[_0x1edb05(0x10f)],'',$[_0x317501(0x26b,'&wBm')]);notifyInterval==0x3&&(nowTimes[_0x317501(0x1d7,'Bzr&')]()===0x6||nowTimes['getHours']()===0xc||nowTimes[_0x1edb05(0xff)]()===0x12||nowTimes[_0x1edb05(0xff)]()===0x17)&&(nowTimes[_0x1edb05(0x119)]()>=0x0&&nowTimes[_0x1edb05(0x119)]()<=0xa)&&$[_0x317501(0x349,'C@pj')]($[_0x317501(0x28b,'13B@')],'',$[_0x1edb05(0x248)]);if(notifyttt==0x1&&$[_0x317501(0x21f,'13B@')]()&&(nowTimes[_0x1edb05(0xff)]()===0xc||nowTimes[_0x1edb05(0xff)]()===0x17)&&(nowTimes[_0x1edb05(0x119)]()>=0x0&&nowTimes[_0x1edb05(0x119)]()<=0xa))await notify['sendNotify']($[_0x317501(0x1ce,'&jBJ')],$['message']);_0x3e27c2();});}function githubAC(_0x1aca6f=0x0){return new Promise(_0x1b41f2=>{setTimeout(()=>{const _0x3e8fd0=_0x441e,_0x28942d=_0x3089;let _0x351e36={'url':githubACurlVal,'headers':JSON[_0x28942d(0x172,'6e9x')](githubACheaderVal),'body':githubACbodyVal};$[_0x3e8fd0(0x231)](_0x351e36,async(_0x952633,_0x42ef64,_0x4b1366)=>{const _0x2968d0=_0x3e8fd0,_0x2e19ca=_0x28942d;try{if(logs)$[_0x2e19ca(0x1aa,']TYB')](O+_0x2e19ca(0x184,'V$aC')+_0x4b1366);_0x4b1366[_0x2968d0(0x257)](/github.com/g)?(console[_0x2968d0(0x271)](githubACnameVal+(time(Number(tts()))+_0x2968d0(0x273))),$[_0x2e19ca(0x142,'13B@')]+=githubACnameVal+(time(Number(tts()))+_0x2968d0(0x273))):(console['log'](githubACnameVal+_0x2e19ca(0x1c3,'Q#In')),$[_0x2968d0(0x248)]+=githubACnameVal+'请检查github的Action是否开启\x0a\x0a');}catch(_0x5bea89){$['logErr'](_0x5bea89,_0x42ef64);}finally{_0x1b41f2();}});},_0x1aca6f);});}function Env(_0x3a82cd,_0x493f07){const _0x32044a=_0xdfc950,_0x50da80=_0x552598;class _0x3e845d{constructor(_0xadb03f){this['env']=_0xadb03f;}[_0x50da80(0x10c,'R!pB')](_0x2e793f,_0x3d74eb='GET'){const _0x104084=_0x50da80,_0x47e88e=_0x441e;_0x2e793f=_0x47e88e(0x268)==typeof _0x2e793f?{'url':_0x2e793f}:_0x2e793f;let _0x192be3=this[_0x104084(0x13c,'#P*$')];return _0x47e88e(0x16e)===_0x3d74eb&&(_0x192be3=this[_0x47e88e(0x231)]),new Promise((_0x3644c5,_0x389c0c)=>{const _0x6e611=_0x104084;_0x192be3[_0x6e611(0x243,'BRfO')](this,_0x2e793f,(_0x3713cf,_0x187984,_0x7865c6)=>{_0x3713cf?_0x389c0c(_0x3713cf):_0x3644c5(_0x187984);});});}['get'](_0x3a800f){const _0x5ae1e7=_0x441e;return this['send'][_0x5ae1e7(0x201)](this[_0x5ae1e7(0x228)],_0x3a800f);}['post'](_0x29e6a9){const _0x419dde=_0x50da80,_0x26693b=_0x441e;return this[_0x26693b(0x357)][_0x419dde(0x21d,'13B@')](this[_0x419dde(0x240,'57CJ')],_0x29e6a9,'POST');}}return new class{constructor(_0x47826d,_0x374cba){const _0x236f4d=_0x50da80,_0x458631=_0x441e;this[_0x458631(0x10f)]=_0x47826d,this[_0x458631(0x14a)]=new _0x3e845d(this),this['data']=null,this[_0x458631(0x125)]=_0x236f4d(0xe5,'QR&3'),this[_0x236f4d(0x27d,'$oK8')]=[],this[_0x458631(0x12b)]=!0x1,this[_0x236f4d(0xcd,']!%F')]=!0x1,this[_0x236f4d(0x2a6,'D#bc')]='\x0a',this[_0x236f4d(0x2be,'C@pj')]=new Date()['getTime'](),Object['assign'](this,_0x374cba),this[_0x458631(0x271)]('','🔔'+this[_0x236f4d(0x19f,'8ulL')]+',\x20开始!');}[_0x50da80(0x1d0,'0^bc')](){const _0xfbe336=_0x50da80,_0x50842b=_0x441e;return _0x50842b(0x1e5)!=typeof module&&!!module[_0xfbe336(0x190,'Y2Ex')];}[_0x32044a(0x27a)](){const _0x2bf868=_0x50da80;return _0x2bf868(0x338,'PB3L')!=typeof $task;}['isSurge'](){const _0x5882d0=_0x50da80;return'undefined'!=typeof $httpClient&&_0x5882d0(0x1e2,'t0E2')==typeof $loon;}['isLoon'](){const _0x253d02=_0x32044a;return _0x253d02(0x1e5)!=typeof $loon;}['toObj'](_0x4afae2,_0x28b6b8=null){try{return JSON['parse'](_0x4afae2);}catch{return _0x28b6b8;}}[_0x50da80(0x152,'V$aC')](_0x4edd64,_0x435f22=null){try{return JSON['stringify'](_0x4edd64);}catch{return _0x435f22;}}[_0x32044a(0xf4)](_0x4cd9b5,_0x4a3cb5){const _0x40b51d=_0x32044a,_0x1520cd=_0x50da80;let _0x52117d=_0x4a3cb5;const _0x2894e1=this[_0x1520cd(0x12c,'riGd')](_0x4cd9b5);if(_0x2894e1)try{_0x52117d=JSON[_0x40b51d(0x110)](this[_0x40b51d(0xe6)](_0x4cd9b5));}catch{}return _0x52117d;}[_0x32044a(0x333)](_0x42bba1,_0x128d58){const _0x305f09=_0x32044a,_0x272bb0=_0x50da80;try{return this[_0x272bb0(0x22b,'$oK8')](JSON[_0x305f09(0x212)](_0x42bba1),_0x128d58);}catch{return!0x1;}}[_0x50da80(0x188,'XG@M')](_0x313912){return new Promise(_0x4e5d66=>{this['get']({'url':_0x313912},(_0x1d89e9,_0xf3ff28,_0x133c51)=>_0x4e5d66(_0x133c51));});}['runScript'](_0x263517,_0x5f61d0){const _0x7827c8=_0x50da80;return new Promise(_0x2424cd=>{const _0x2c7ddf=_0x3089,_0x3e26c1=_0x441e;let _0x1846e6=this[_0x3e26c1(0xe6)]('@chavy_boxjs_userCfgs.httpapi');_0x1846e6=_0x1846e6?_0x1846e6[_0x2c7ddf(0x191,']#9$')](/\n/g,'')[_0x3e26c1(0x2d9)]():_0x1846e6;let _0xf23f56=this[_0x3e26c1(0xe6)](_0x3e26c1(0x2e5));_0xf23f56=_0xf23f56?0x1*_0xf23f56:0x14,_0xf23f56=_0x5f61d0&&_0x5f61d0['timeout']?_0x5f61d0[_0x3e26c1(0x19a)]:_0xf23f56;const [_0x1022c2,_0x372bdc]=_0x1846e6['split']('@'),_0x270c19={'url':'http://'+_0x372bdc+_0x2c7ddf(0x345,'0suH'),'body':{'script_text':_0x263517,'mock_type':_0x3e26c1(0xdc),'timeout':_0xf23f56},'headers':{'X-Key':_0x1022c2,'Accept':_0x3e26c1(0x13f)}};this[_0x3e26c1(0x231)](_0x270c19,(_0x300751,_0xb82c67,_0x41c623)=>_0x2424cd(_0x41c623));})['catch'](_0x12fd4c=>this[_0x7827c8(0x160,'Q#In')](_0x12fd4c));}[_0x50da80(0xd0,'T079')](){const _0x2536f8=_0x32044a,_0x1e1d3d=_0x50da80;if(!this[_0x1e1d3d(0x1b6,']TYB')]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this[_0x2536f8(0x1cb)]?this[_0x1e1d3d(0x34f,'6e9x')]:require(_0x1e1d3d(0x2a8,'$oK8'));const _0xde58b8=this[_0x2536f8(0x1cb)][_0x1e1d3d(0x2ef,'t6zR')](this['dataFile']),_0x4c7484=this[_0x1e1d3d(0x1e6,'hMfB')][_0x1e1d3d(0x254,'c8E$')](process[_0x1e1d3d(0x108,'HkYh')](),this[_0x1e1d3d(0x1de,'Laa7')]),_0x23472d=this['fs'][_0x2536f8(0x1c1)](_0xde58b8),_0x4f12ad=!_0x23472d&&this['fs']['existsSync'](_0x4c7484);if(!_0x23472d&&!_0x4f12ad)return{};{const _0x2a92a8=_0x23472d?_0xde58b8:_0x4c7484;try{return JSON[_0x1e1d3d(0x226,']TYB')](this['fs'][_0x1e1d3d(0x326,'HkYh')](_0x2a92a8));}catch(_0x211cfb){return{};}}}}[_0x32044a(0x1d1)](){const _0x346ae4=_0x50da80,_0x22ad2d=_0x32044a;if(this[_0x22ad2d(0x180)]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x22ad2d(0x1cb)]=this[_0x346ae4(0x238,'xBO$')]?this[_0x22ad2d(0x1cb)]:require(_0x22ad2d(0x1cb));const _0x4cf2ae=this[_0x346ae4(0x12e,'8ulL')][_0x22ad2d(0x359)](this[_0x22ad2d(0x125)]),_0x2fe0b2=this[_0x346ae4(0x204,'riGd')]['resolve'](process[_0x22ad2d(0x337)](),this[_0x22ad2d(0x125)]),_0x1483fa=this['fs'][_0x22ad2d(0x1c1)](_0x4cf2ae),_0x82bfe1=!_0x1483fa&&this['fs'][_0x22ad2d(0x1c1)](_0x2fe0b2),_0x43d821=JSON[_0x346ae4(0x24c,'6A2W')](this[_0x346ae4(0x156,'&wBm')]);_0x1483fa?this['fs']['writeFileSync'](_0x4cf2ae,_0x43d821):_0x82bfe1?this['fs'][_0x22ad2d(0x31b)](_0x2fe0b2,_0x43d821):this['fs'][_0x346ae4(0x31c,'^3d[')](_0x4cf2ae,_0x43d821);}}[_0x50da80(0x25d,'D#bc')](_0x553a6c,_0x2461b0,_0x280dfb){const _0x98cd0a=_0x32044a,_0x45c5df=_0x50da80,_0x3d953a=_0x2461b0[_0x45c5df(0x327,'V$aC')](/\[(\d+)\]/g,'.$1')[_0x98cd0a(0x173)]('.');let _0x15e52f=_0x553a6c;for(const _0x2f9811 of _0x3d953a)if(_0x15e52f=Object(_0x15e52f)[_0x2f9811],void 0x0===_0x15e52f)return _0x280dfb;return _0x15e52f;}[_0x50da80(0xc3,'4kg6')](_0x44de0d,_0x295cf6,_0xcdfe2f){const _0x4402bd=_0x32044a,_0x24b74c=_0x50da80;return Object(_0x44de0d)!==_0x44de0d?_0x44de0d:(Array[_0x24b74c(0x134,'&wBm')](_0x295cf6)||(_0x295cf6=_0x295cf6[_0x24b74c(0x265,'XG@M')]()[_0x4402bd(0x257)](/[^.[\]]+/g)||[]),_0x295cf6[_0x4402bd(0x224)](0x0,-0x1)[_0x24b74c(0x29a,'9C5v')]((_0x4125a4,_0x5c3a34,_0x1d4982)=>Object(_0x4125a4[_0x5c3a34])===_0x4125a4[_0x5c3a34]?_0x4125a4[_0x5c3a34]:_0x4125a4[_0x5c3a34]=Math[_0x4402bd(0x199)](_0x295cf6[_0x1d4982+0x1])>>0x0==+_0x295cf6[_0x1d4982+0x1]?[]:{},_0x44de0d)[_0x295cf6[_0x295cf6['length']-0x1]]=_0xcdfe2f,_0x44de0d);}[_0x32044a(0xe6)](_0x380bb6){const _0x503f4e=_0x32044a,_0x3caf52=_0x50da80;let _0x1572ef=this['getval'](_0x380bb6);if(/^@/[_0x3caf52(0x217,'Qdl^')](_0x380bb6)){const [,_0x50a30c,_0x47051d]=/^@(.*?)\.(.*?)$/[_0x3caf52(0xd3,'u0T7')](_0x380bb6),_0x5ce57f=_0x50a30c?this['getval'](_0x50a30c):'';if(_0x5ce57f)try{const _0x222f6c=JSON[_0x3caf52(0x263,'0suH')](_0x5ce57f);_0x1572ef=_0x222f6c?this[_0x503f4e(0x2ad)](_0x222f6c,_0x47051d,''):_0x1572ef;}catch(_0x1bcf32){_0x1572ef='';}}return _0x1572ef;}[_0x32044a(0x127)](_0x539770,_0x48f0df){const _0x423a54=_0x32044a,_0x1cf21f=_0x50da80;let _0x308ab1=!0x1;if(/^@/[_0x1cf21f(0x313,'6e9x')](_0x48f0df)){const [,_0x1a8d01,_0x106689]=/^@(.*?)\.(.*?)$/[_0x1cf21f(0x193,'QR&3')](_0x48f0df),_0x32d792=this[_0x423a54(0xcc)](_0x1a8d01),_0x23d7c4=_0x1a8d01?'null'===_0x32d792?null:_0x32d792||'{}':'{}';try{const _0x146f3a=JSON[_0x1cf21f(0x299,'p@Z%')](_0x23d7c4);this['lodash_set'](_0x146f3a,_0x106689,_0x539770),_0x308ab1=this['setval'](JSON[_0x423a54(0x212)](_0x146f3a),_0x1a8d01);}catch(_0x408934){const _0xc225e3={};this[_0x1cf21f(0x279,'QR&3')](_0xc225e3,_0x106689,_0x539770),_0x308ab1=this[_0x423a54(0x2f9)](JSON[_0x1cf21f(0x35b,'8RJ2')](_0xc225e3),_0x1a8d01);}}else _0x308ab1=this[_0x423a54(0x2f9)](_0x539770,_0x48f0df);return _0x308ab1;}[_0x50da80(0xc8,'BRfO')](_0xe0d097){const _0x579b0f=_0x50da80,_0x4c9987=_0x32044a;return this[_0x4c9987(0x2d7)]()||this[_0x4c9987(0x1be)]()?$persistentStore[_0x579b0f(0x2a7,'WLzr')](_0xe0d097):this[_0x4c9987(0x27a)]()?$prefs[_0x579b0f(0x216,'&wBm')](_0xe0d097):this['isNode']()?(this[_0x4c9987(0x2cf)]=this[_0x4c9987(0x189)](),this[_0x4c9987(0x2cf)][_0xe0d097]):this[_0x579b0f(0x143,'PB3L')]&&this[_0x579b0f(0x192,'9C5v')][_0xe0d097]||null;}[_0x50da80(0x2a4,'Laa7')](_0x587a7b,_0x3230dd){const _0x384e70=_0x32044a,_0x567fef=_0x50da80;return this[_0x567fef(0x27f,'Bzr&')]()||this[_0x567fef(0x29b,'D#bc')]()?$persistentStore['write'](_0x587a7b,_0x3230dd):this[_0x384e70(0x27a)]()?$prefs[_0x384e70(0x341)](_0x587a7b,_0x3230dd):this[_0x384e70(0x180)]()?(this[_0x567fef(0x192,'9C5v')]=this['loaddata'](),this['data'][_0x3230dd]=_0x587a7b,this[_0x384e70(0x1d1)](),!0x0):this[_0x384e70(0x2cf)]&&this[_0x384e70(0x2cf)][_0x3230dd]||null;}['initGotEnv'](_0x46e9bc){const _0xf53b32=_0x50da80,_0x21900d=_0x32044a;this['got']=this[_0x21900d(0x117)]?this['got']:require(_0x21900d(0x117)),this[_0xf53b32(0x168,'Q#In')]=this[_0xf53b32(0x29c,'8ulL')]?this[_0x21900d(0x2fd)]:require(_0xf53b32(0x1b3,'Y2Ex')),this[_0x21900d(0x1bf)]=this[_0xf53b32(0x129,'p@Z%')]?this[_0xf53b32(0x31e,'WLzr')]:new this[(_0x21900d(0x2fd))]['CookieJar'](),_0x46e9bc&&(_0x46e9bc['headers']=_0x46e9bc[_0x21900d(0x22e)]?_0x46e9bc[_0xf53b32(0x2b6,'Q#In')]:{},void 0x0===_0x46e9bc[_0x21900d(0x22e)][_0xf53b32(0x26e,'PB3L')]&&void 0x0===_0x46e9bc[_0x21900d(0xc7)]&&(_0x46e9bc[_0x21900d(0xc7)]=this['ckjar']));}['get'](_0x5a9299,_0xb39673=()=>{}){const _0x3dc774=_0x32044a,_0x4d1ec0=_0x50da80;_0x5a9299['headers']&&(delete _0x5a9299[_0x4d1ec0(0x154,'8ulL')][_0x3dc774(0x186)],delete _0x5a9299[_0x3dc774(0x22e)][_0x4d1ec0(0x1eb,'#P*$')]),this['isSurge']()||this[_0x3dc774(0x1be)]()?(this[_0x4d1ec0(0x31d,'^3d[')]()&&this[_0x3dc774(0x194)]&&(_0x5a9299['headers']=_0x5a9299[_0x4d1ec0(0x158,'R!pB')]||{},Object[_0x4d1ec0(0x259,'riGd')](_0x5a9299[_0x3dc774(0x22e)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x4d1ec0(0x17a,'57CJ')](_0x5a9299,(_0x59a09e,_0x51e792,_0x26078a)=>{const _0x48152f=_0x4d1ec0,_0x5c69a0=_0x3dc774;!_0x59a09e&&_0x51e792&&(_0x51e792[_0x5c69a0(0x255)]=_0x26078a,_0x51e792[_0x48152f(0x12a,'BRfO')]=_0x51e792[_0x5c69a0(0xfa)]),_0xb39673(_0x59a09e,_0x51e792,_0x26078a);})):this[_0x4d1ec0(0x260,'8ulL')]()?(this[_0x3dc774(0x194)]&&(_0x5a9299['opts']=_0x5a9299['opts']||{},Object[_0x4d1ec0(0x187,'Rw6&')](_0x5a9299[_0x3dc774(0x2db)],{'hints':!0x1})),$task[_0x4d1ec0(0x131,'fWep')](_0x5a9299)[_0x4d1ec0(0x18d,'$oK8')](_0x299b34=>{const {statusCode:_0x3cd856,statusCode:_0x1dfba9,headers:_0x5b8b29,body:_0x4e5918}=_0x299b34;_0xb39673(null,{'status':_0x3cd856,'statusCode':_0x1dfba9,'headers':_0x5b8b29,'body':_0x4e5918},_0x4e5918);},_0x44283f=>_0xb39673(_0x44283f))):this[_0x3dc774(0x180)]()&&(this[_0x4d1ec0(0x206,'Y2Ex')](_0x5a9299),this[_0x4d1ec0(0x183,'zIYP')](_0x5a9299)['on'](_0x3dc774(0x2d8),(_0x462e94,_0x4990fc)=>{const _0x3524a2=_0x3dc774,_0xa4e2a6=_0x4d1ec0;try{if(_0x462e94[_0xa4e2a6(0x26a,'hMfB')][_0x3524a2(0x146)]){const _0x389159=_0x462e94[_0x3524a2(0x22e)][_0xa4e2a6(0x35a,'R!pB')][_0x3524a2(0x32a)](this['cktough'][_0x3524a2(0x25a)]['parse'])[_0xa4e2a6(0x2c7,'Laa7')]();this['ckjar'][_0xa4e2a6(0x2d5,'hMfB')](_0x389159,null),_0x4990fc[_0xa4e2a6(0x1bb,']#9$')]=this[_0xa4e2a6(0x2aa,'0suH')];}}catch(_0x4984b8){this[_0x3524a2(0x290)](_0x4984b8);}})[_0x3dc774(0x1cc)](_0x3e15f0=>{const {statusCode:_0x22be06,statusCode:_0x3c807e,headers:_0x4885d0,body:_0x2ce889}=_0x3e15f0;_0xb39673(null,{'status':_0x22be06,'statusCode':_0x3c807e,'headers':_0x4885d0,'body':_0x2ce889},_0x2ce889);},_0x40512b=>{const {message:_0x3cb7e9,response:_0x345adc}=_0x40512b;_0xb39673(_0x3cb7e9,_0x345adc,_0x345adc&&_0x345adc['body']);}));}['post'](_0x4dfc96,_0x39ae71=()=>{}){const _0x82e56d=_0x32044a,_0x4df75a=_0x50da80;if(_0x4dfc96[_0x4df75a(0xe0,'&jBJ')]&&_0x4dfc96[_0x82e56d(0x22e)]&&!_0x4dfc96[_0x82e56d(0x22e)][_0x82e56d(0x186)]&&(_0x4dfc96[_0x4df75a(0x1b1,'Y2Ex')]['Content-Type']='application/x-www-form-urlencoded'),_0x4dfc96[_0x4df75a(0x2d1,'zIYP')]&&delete _0x4dfc96[_0x4df75a(0x167,'&wBm')][_0x4df75a(0x182,'13B@')],this[_0x4df75a(0x244,'6A2W')]()||this[_0x4df75a(0x270,']TYB')]())this[_0x4df75a(0x330,'p@Z%')]()&&this[_0x4df75a(0x2e3,'PB3L')]&&(_0x4dfc96[_0x4df75a(0x137,'u0T7')]=_0x4dfc96[_0x4df75a(0x2d6,'^3d[')]||{},Object['assign'](_0x4dfc96[_0x4df75a(0x20e,'&jBJ')],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x82e56d(0x231)](_0x4dfc96,(_0x5f4faf,_0x5ac9d7,_0x63a401)=>{const _0x26e53a=_0x4df75a,_0x46b0b7=_0x82e56d;!_0x5f4faf&&_0x5ac9d7&&(_0x5ac9d7[_0x46b0b7(0x255)]=_0x63a401,_0x5ac9d7['statusCode']=_0x5ac9d7[_0x26e53a(0x144,'XG@M')]),_0x39ae71(_0x5f4faf,_0x5ac9d7,_0x63a401);});else{if(this[_0x4df75a(0x169,'Laa7')]())_0x4dfc96[_0x82e56d(0x100)]='POST',this['isNeedRewrite']&&(_0x4dfc96[_0x82e56d(0x2db)]=_0x4dfc96['opts']||{},Object[_0x4df75a(0xfb,'$oK8')](_0x4dfc96[_0x82e56d(0x2db)],{'hints':!0x1})),$task[_0x4df75a(0x2ac,'6A2W')](_0x4dfc96)[_0x82e56d(0x1cc)](_0x1c660d=>{const {statusCode:_0x2e1d34,statusCode:_0x21992f,headers:_0x48ba11,body:_0x55310a}=_0x1c660d;_0x39ae71(null,{'status':_0x2e1d34,'statusCode':_0x21992f,'headers':_0x48ba11,'body':_0x55310a},_0x55310a);},_0x88dfac=>_0x39ae71(_0x88dfac));else{if(this[_0x82e56d(0x180)]()){this['initGotEnv'](_0x4dfc96);const {url:_0x21cef5,..._0x295d7e}=_0x4dfc96;this[_0x4df75a(0x2b2,'MBf8')]['post'](_0x21cef5,_0x295d7e)[_0x82e56d(0x1cc)](_0xc5bdda=>{const {statusCode:_0x148e85,statusCode:_0x2a8ade,headers:_0x2059f0,body:_0x44e9b4}=_0xc5bdda;_0x39ae71(null,{'status':_0x148e85,'statusCode':_0x2a8ade,'headers':_0x2059f0,'body':_0x44e9b4},_0x44e9b4);},_0x2095f1=>{const _0x1f7fa5=_0x82e56d,{message:_0x28c6e7,response:_0x287ebb}=_0x2095f1;_0x39ae71(_0x28c6e7,_0x287ebb,_0x287ebb&&_0x287ebb[_0x1f7fa5(0x255)]);});}}}}[_0x50da80(0x241,']TYB')](_0x15ed0c){const _0xad4471=_0x32044a,_0x11e318=_0x50da80;let _0x3c53bd={'M+':new Date()['getMonth']()+0x1,'d+':new Date()[_0x11e318(0x18c,'Laa7')](),'H+':new Date()[_0xad4471(0xff)](),'m+':new Date()[_0x11e318(0x29d,'t0E2')](),'s+':new Date()[_0x11e318(0xc6,'t6zR')](),'q+':Math[_0xad4471(0x13a)]((new Date()[_0xad4471(0x2eb)]()+0x3)/0x3),'S':new Date()['getMilliseconds']()};/(y+)/[_0x11e318(0x2fe,'57CJ')](_0x15ed0c)&&(_0x15ed0c=_0x15ed0c[_0x11e318(0xd4,'MBf8')](RegExp['$1'],(new Date()[_0xad4471(0xf2)]()+'')[_0xad4471(0x2f7)](0x4-RegExp['$1']['length'])));for(let _0x36cf6e in _0x3c53bd)new RegExp('('+_0x36cf6e+')')['test'](_0x15ed0c)&&(_0x15ed0c=_0x15ed0c[_0xad4471(0x163)](RegExp['$1'],0x1==RegExp['$1'][_0x11e318(0x1a5,'0^bc')]?_0x3c53bd[_0x36cf6e]:('00'+_0x3c53bd[_0x36cf6e])[_0xad4471(0x2f7)]((''+_0x3c53bd[_0x36cf6e])[_0x11e318(0x2ab,'XG@M')])));return _0x15ed0c;}[_0x32044a(0x2e2)](_0x39e838=_0x3a82cd,_0x301d27='',_0x522b06='',_0x5f069d){const _0x3b743a=_0x50da80,_0x2c5e9a=_0x32044a,_0x51b65e=_0x5952c9=>{const _0x176f0a=_0x3089,_0x345ae4=_0x441e;if(!_0x5952c9)return _0x5952c9;if('string'==typeof _0x5952c9)return this['isLoon']()?_0x5952c9:this[_0x345ae4(0x27a)]()?{'open-url':_0x5952c9}:this[_0x176f0a(0xfd,'t0E2')]()?{'url':_0x5952c9}:void 0x0;if(_0x345ae4(0x25c)==typeof _0x5952c9){if(this[_0x345ae4(0x1be)]()){let _0x18def9=_0x5952c9['openUrl']||_0x5952c9[_0x176f0a(0x1f5,'$oK8')]||_0x5952c9[_0x176f0a(0x278,'t5BQ')],_0x4efbde=_0x5952c9[_0x345ae4(0xce)]||_0x5952c9[_0x345ae4(0x289)];return{'openUrl':_0x18def9,'mediaUrl':_0x4efbde};}if(this[_0x176f0a(0xe4,'BmPK')]()){let _0x47b992=_0x5952c9[_0x176f0a(0x16f,'fWep')]||_0x5952c9[_0x176f0a(0x296,'57CJ')]||_0x5952c9['openUrl'],_0x3da525=_0x5952c9[_0x176f0a(0x319,'6A2W')]||_0x5952c9['mediaUrl'];return{'open-url':_0x47b992,'media-url':_0x3da525};}if(this[_0x176f0a(0x20b,'t6zR')]()){let _0x474b6a=_0x5952c9[_0x345ae4(0x112)]||_0x5952c9[_0x176f0a(0x12f,'T079')]||_0x5952c9[_0x176f0a(0x175,'hMfB')];return{'url':_0x474b6a};}}};this[_0x2c5e9a(0x12b)]||(this[_0x3b743a(0x2bc,'8ulL')]()||this[_0x3b743a(0x2ca,'&jBJ')]()?$notification[_0x3b743a(0x18b,'t0E2')](_0x39e838,_0x301d27,_0x522b06,_0x51b65e(_0x5f069d)):this['isQuanX']()&&$notify(_0x39e838,_0x301d27,_0x522b06,_0x51b65e(_0x5f069d)));let _0x3643fc=['',_0x3b743a(0x304,'8RJ2')];_0x3643fc['push'](_0x39e838),_0x301d27&&_0x3643fc[_0x3b743a(0xd9,'t0E2')](_0x301d27),_0x522b06&&_0x3643fc[_0x2c5e9a(0x30a)](_0x522b06),console[_0x2c5e9a(0x271)](_0x3643fc[_0x2c5e9a(0x2b3)]('\x0a')),this['logs']=this['logs'][_0x3b743a(0x348,'T079')](_0x3643fc);}['log'](..._0x5d0df8){const _0x42e365=_0x32044a,_0x1d4768=_0x50da80;_0x5d0df8[_0x1d4768(0x325,'^3d[')]>0x0&&(this[_0x42e365(0x135)]=[...this[_0x1d4768(0x30d,'&wBm')],..._0x5d0df8]),console[_0x42e365(0x271)](_0x5d0df8[_0x1d4768(0x233,'t5BQ')](this[_0x42e365(0x2f5)]));}[_0x32044a(0x290)](_0x27de2b,_0x4bf031){const _0x3c2f40=_0x32044a,_0x4fc4c8=_0x50da80,_0x5e5297=!this['isSurge']()&&!this[_0x4fc4c8(0x247,'riGd')]()&&!this[_0x3c2f40(0x1be)]();_0x5e5297?this[_0x4fc4c8(0x227,'riGd')]('','❗️'+this[_0x3c2f40(0x10f)]+_0x3c2f40(0x237),_0x27de2b[_0x4fc4c8(0x128,'Q#In')]):this['log']('','❗️'+this['name']+_0x3c2f40(0x237),_0x27de2b);}[_0x50da80(0x23b,'9jQF')](_0x38b2a5){return new Promise(_0x2a836e=>setTimeout(_0x2a836e,_0x38b2a5));}[_0x32044a(0xc5)](_0x300cf4={}){const _0x1e4021=_0x32044a,_0x1989ea=_0x50da80,_0x5aac24=new Date()[_0x1989ea(0x210,'6A2W')](),_0x47115b=(_0x5aac24-this['startTime'])/0x3e8;this[_0x1989ea(0x32f,'9C5v')]('','🔔'+this[_0x1e4021(0x10f)]+',\x20结束!\x20🕛\x20'+_0x47115b+'\x20秒'),this['log'](),(this[_0x1e4021(0x2d7)]()||this[_0x1989ea(0x29e,'WLzr')]()||this[_0x1989ea(0x18e,'9C5v')]())&&$done(_0x300cf4);}}(_0x3a82cd,_0x493f07);}

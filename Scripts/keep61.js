/*
#keep
^https?:\/\/(api|apm)\.gotokeep\.com url script-response-body keep61.js

MITM = api.gotokeep.com,apm.gotokeep.com
*/
const path1="/kprime/v2/home/coursePlus"
const path2="/homepage/v1/configs";
const path3="/course/v2";
const path4="/course/v3";
const path5="/config/v2/basic";
const path6="/nuocha/course/v2";
const path7="/nuocha/plans/";
const path8="/homepage/v2/configs";




var body = $response.body;
str = JSON.stringify(body);

if ($request.url.indexOf(path1) != -1||$request.url.indexOf(path2) != -1|$request.url.indexOf(path3) != -1|$request.url.indexOf(path4) != -1|$request.url.indexOf(path5) != -1|$request.url.indexOf(path6) != -1|$request.url.indexOf(path7) != -1|$request.url.indexOf(path8) != -1){
str=str.replace(/false/g,"true");
}
body= JSON.parse(str);

$done({body});

/*

APP防火墙 = type=cron,cronexp="0 0 1 1 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/wangshiw/QX/main/Surge/Scripts/APPFirewall.js

*/
const data = $intent.parameter;
const write = $persistentStore.write(data, "APP_BJ");
$done();

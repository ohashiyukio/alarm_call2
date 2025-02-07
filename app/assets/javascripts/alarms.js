document.addEventListener("DOMContentLoaded", function() {
  const alarms = JSON.parse(document.getElementById("alarmData").textContent);
  console.log("アラームデータ:", alarms);

  function checkAlarms() {
    const now = new Date();
    console.log("現在時刻:", now.toISOString());

    alarms.forEach(alarm => {
      const alarmTime = new Date(alarm.time);
      console.log("チェック中アラーム:", alarmTime.toISOString(), alarm.comment);

      if (now.getFullYear() === alarmTime.getFullYear() &&
          now.getMonth() === alarmTime.getMonth() &&
          now.getDate() === alarmTime.getDate() &&
          now.getHours() === alarmTime.getHours() &&
          now.getMinutes() === alarmTime.getMinutes()) {
        console.log("アラームが鳴ります:", alarm.comment);
        window.location.href = `/alarms/${alarm.id}`;
      }
    });
  }

  setInterval(checkAlarms, 10000); // 10秒ごとにチェック
});

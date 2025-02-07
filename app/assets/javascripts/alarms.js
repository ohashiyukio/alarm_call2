document.addEventListener("DOMContentLoaded", function() {
  const alarms = JSON.parse(document.getElementById("alarmData").textContent);
  console.log("アラームデータ:", alarms);

  function checkAlarms() {
    const now = new Date();
    alarms.forEach(alarm => {
      const alarmTime = new Date(alarm.time);
      if (now.getFullYear() === alarmTime.getFullYear() &&
          now.getMonth() === alarmTime.getMonth() &&
          now.getDate() === alarmTime.getDate() &&
          now.getHours() === alarmTime.getHours() &&
          now.getMinutes() === alarmTime.getMinutes()) {
        console.log("アラームが鳴りました:", alarm.comment);
        window.location.href = `/alarms/${alarm.id}`;
      }
    });
  }

  setInterval(checkAlarms, 60000);
});

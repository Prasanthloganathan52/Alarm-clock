document.addEventListener('DOMContentload',function() {
    const timeDisplay=document.getElementById('time');
    const setAlarmBtn=document.getElementById('setAlarmBtn');
    const stopAlarmbtn=document.getElementById('stopAlarmbtn');
    const alarmTimeInput=document.getElementById('alarmTimeInput');
    const saveAlarmBtn=document.getElementById('saveAlarmbtn');
    const alarmsound=document.getElementById('alarmsound');

    let alarmTime=null;
    let alarmInterval=null;

    function updateTime(){
        const now=new Date;
        const hours=String(now.getHours()).padStart(2,'0');
        const minutes=String(now.getMinutes()).padStart(2,'0');
        const Seconds=String(now.getSeconds()).padStart(2,'0');
         timeDisplay.textContent='${hours}:${minutes}:${Seconds}';

         if(alarmTime&&now.getHours()===alarmTime.getHours()&& now.getMinutes()===alarmTime.getseconds()===0){
            playAlarm();
         }
        }
        function playAlarm(){
            stopAlarmBtn.disabled=false;
            setAlarmBtn.disabled=true;
            alarmsound.play();
        }
        function stopAlarm(){
            stopAlarmBtn.disabled=true;
            setAlarmBtn.disabled=false;
            clearInterval(alarmInterval);
            alarmsound.pause();
            alarmsound.currentTime=0;
        }
   setAlarmBtn. addEventListener('click',function(){
    alarmTimeInput.value=null;
    alarmTimeInput.focus();
   });
    
saveAlarmBtn.addEventListener('click',function(){

    alarmTime.sethours(parseInt(hours));
    alarmTime.setMinutes(parseInt(minutes));
    alarmTime.setseconds(0);
    alarmTime.setmilliseconds(0);
    stopAlarm();
});
stopAlarmbtn.addEventListener('click',stopAlarm);
updateTime();
setInterval(updateTime,1000);
});


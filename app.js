var min=0;
var sec=0;
var msec=0;
var interval;
var min_h2=document.getElementById("min");
var sec_h2=document.getElementById("sec");
var msec_h2=document.getElementById("msec");
function time()
{
    msec++;
    msec_h2.innerHTML=msec;
    if(msec>=100)
    {
        sec++;
        sec_h2.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60)
    {
        min++;
        min_h2.innerHTML=min;
        sec=0;
    }
}
function start()
{
    interval=setInterval(time,10);
}
function stop()
{
    clearInterval(interval);
}
function reset()
{
    min=0;
    sec=0;
    msec=0;
    msec_h2.innerHTML=msec;
    sec_h2.innerHTML=sec;
    min_h2.innerHTML=min;
    stop();


}
function disableButton(btn){
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = false;
}
    
function disableButton2(btn){
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("reset").disabled = false;

}
function disableButton3(btn){
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("reset").disabled = true;
}


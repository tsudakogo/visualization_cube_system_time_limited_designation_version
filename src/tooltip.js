function MakeTooltipMessage(){
    if(flag===0){
        TrendFlag="area";
    }else if(flag===1){
        TrendFlag="time";
    }
    
    if(xtypename==="datemonthyear"){
        time="date";
    }else if(xtypename==="monthyear"){
        time="month";
    }else{
        time="year";
    }

    area=transformequal.slice();

    sd=yfieldline.slice();

    if(type==0){
        viewtype="Line";
    }else if(type===1){
        viewtype="Map";
    }else if(type===2){
        viewtype="Bar";
    }else if(type===3){
        viewtype="Arc";
    }else if(type===4){
        viewtype="Area";
    }else if(type===5){
        viewtype="Point";
    }

    publishTooltipMessage(TrendFlag,time,area,sd,viewtype)
}

function publishTooltipMessage(TrendFlag,time,area,sd,viewtype){

    MessageContent="動向軸："+TrendFlag+"<br>時間軸："+time+"<br>空間軸："+area+"<br>統計データ軸："+sd+"<br>可視化表現軸："+viewtype;
    cubetooltip[0].setContent(MessageContent);
    cube2tooltip[0].setContent(MessageContent);
    cube3tooltip[0].setContent(MessageContent);
    cube4tooltip[0].setContent(MessageContent);
}

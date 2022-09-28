function Startbuttonselect(){
  document.getElementById("Spin").style.visibility="hidden";
  document.getElementById("Tdrillup").style.visibility="hidden";
  document.getElementById("Tdrillup2").style.visibility="hidden";
  document.getElementById("Tdrilldown").style.visibility="hidden"
  document.getElementById("Tdrilldown2").style.visibility="hidden";
  document.getElementById("Adrillup").style.visibility="hidden";
  document.getElementById("Adrillup2").style.visibility="hidden";
  document.getElementById("Adrilldown").style.visibility="hidden";
  document.getElementById("Adrilldown2").style.visibility="hidden";
  document.getElementById("compare").style.visibility="hidden";
  document.getElementById("compare2").style.visibility="hidden";
  document.getElementById("Adddata").style.visibility="hidden";
  document.getElementById("Transition").style.visibility="hidden";
  document.getElementById("Removedata").style.visibility="hidden";
  document.getElementById("Reset").style.visibility="hidden";

  document.getElementById("id_form").style.visibility="hidden";
  document.getElementById("comparedata").style.visibility="hidden";
  document.getElementById("form7").style.visibility="hidden";
  document.getElementById("form2").style.visibility="hidden";
  document.getElementById("form5").style.visibility="hidden";
  document.getElementById("form3").style.visibility="hidden";
  document.getElementById("form6").style.visibility="hidden";
  document.getElementById("form4").style.visibility="hidden";

  document.getElementById("help").style.visibility="hidden";
  document.getElementById("help2").style.visibility="hidden";
  document.getElementById("help3").style.visibility="hidden";

  document .getElementById("cube").style.visibility="hidden"
}
function Setselect(){
  document.getElementById("comparedata").style.visibility="visible"
  document.getElementById("form3").style.visibility="visible"
  document.getElementById("form6").style.visibility="visible"
  document.getElementById("form4").style.visibility="visible"

  setAdrilldownselect();
  setTransitionselect();
  setCompareselect();
  setComparedataselect();
  setRemoveselect()
}
function Setbutton(){
  document.getElementById("Adddata").style.visibility="visible"
  document.getElementById("Tdrillup").style.visibility="visible"
  document.getElementById("Tdrillup2").style.visibility="visible"
  document.getElementById("Tdrilldown").style.visibility="visible"
  document.getElementById("Tdrilldown2").style.visibility="visible"
  document.getElementById("Adrillup").style.visibility="hidden"
  document.getElementById("Adrillup2").style.visibility="hidden"
  document.getElementById("Adrilldown").style.visibility="visible"
  document.getElementById("Adrilldown2").style.visibility="visible"
  document.getElementById("Spin").style.visibility="visible"
  document.getElementById("compare").style.visibility="visible"
  document.getElementById("compare2").style.visibility="visible"
  document.getElementById("Transition").style.visibility="visible"
  document.getElementById("id_form").style.visibility="visible"
  document.getElementById("Reset").style.visibility="visible"
  document.getElementById("myCanvas").style.visibility="visible"
  document.getElementById("myCanvas2").style.visibility="visible"
  document.getElementById("myCanvas3").style.visibility="visible"
  document.getElementById("myCanvas4").style.visibility="visible"
  document.getElementById("vis").style.visibility="visible"

  document.getElementById("help").style.visibility="visible"
  document.getElementById("help2").style.visibility="visible"
  document.getElementById("help3").style.visibility="visible"

  document.getElementById("Start").style.visibility="hidden"
  document.getElementById("selectdata").style.visibility="hidden"
  document.getElementById("help_icon").style.visibility="hidden"

  document.getElementById("startmonth").style.visibility="hidden";  ////////////////////////////////////////////////////////
  document.getElementById("to").style.visibility="hidden";  ////////////////////////////////////////////////////////
  document.getElementById("endmonth").style.visibility="hidden";  ////////////////////////////////////////////////////////

  document.getElementById("cube").style.visibility="visible"
}
function Tdrillupdown(){
  if(xtypename==="datemonthyear"){
    document.getElementById("Tdrilldown").style.visibility="hidden"
    document.getElementById("Tdrilldown2").style.visibility="hidden"
    document.getElementById("Tdrillup").style.visibility="visible"
    document.getElementById("Tdrillup2").style.visibility="visible"
  }else if(xtypename==="year"){
    document.getElementById("Tdrillup").style.visibility="hidden"
    document.getElementById("Tdrillup2").style.visibility="hidden"
    document.getElementById("Tdrilldown").style.visibility="visible"
    document.getElementById("Tdrilldown2").style.visibility="visible"
  }else if(xtypename==="monthyear"){
      document.getElementById("Tdrillup").style.visibility="visible"
      document.getElementById("Tdrillup2").style.visibility="visible"
      document.getElementById("Tdrilldown").style.visibility="visible"
      document.getElementById("Tdrilldown2").style.visibility="visible"
  }
}
function Adrillupdown(){
  if(Arealevel==="Japan"){
    document.getElementById("Adrillup").style.visibility="hidden"
    document.getElementById("Adrilldown").style.visibility="visible"
    document.getElementById("Adrillup2").style.visibility="hidden"
    document.getElementById("Adrilldown2").style.visibility="visible"

    document.getElementById("form2").style.visibility="hidden"
    document.getElementById("form5").style.visibility="hidden"
  }else if(Arealevel==="Region"){
    document.getElementById("Adrillup").style.visibility="visible"
    document.getElementById("Adrilldown").style.visibility="visible"
    document.getElementById("Adrillup2").style.visibility="visible"
    document.getElementById("Adrilldown2").style.visibility="visible"

    document.getElementById("form2").style.visibility="visible"
    document.getElementById("form5").style.visibility="visible"
  }else if(Arealevel==="Prefectures"){
    document.getElementById("Adrillup").style.visibility="visible"
    document.getElementById("Adrilldown").style.visibility="hidden"
    document.getElementById("Adrillup2").style.visibility="visible"
    document.getElementById("Adrilldown2").style.visibility="hidden"

    document.getElementById("form2").style.visibility="hidden"
    document.getElementById("form5").style.visibility="hidden"
  }
}
function setAdrilldownselect(){
  var select1 = document.forms.form2.Adrill1; //変数select1を宣言
  var select2 = document.forms.form5.Adrill2; //変数select1を宣言

   select1.options.length = 0;
   select1.options[0] = new Option("北海道地方");
   select1.options[1] = new Option("東北地方");
   select1.options[2] = new Option("関東地方");
   select1.options[3] = new Option("中部地方");
   select1.options[4] = new Option("近畿地方");
   select1.options[5] = new Option("中国地方");
   select1.options[6] = new Option("四国地方");
   select1.options[7] = new Option("九州地方");
   select1.options[0].value ="HokkaiDo";
   select1.options[1].value ="Tohoku";
   select1.options[2].value ="Kanto";
   select1.options[3].value ="Chubu";
   select1.options[4].value ="Kinki";
   select1.options[5].value ="Chugoku";
   select1.options[6].value ="Shikoku";
   select1.options[7].value ="Kyushu";

   select2.options.length = 0;
   select2.options[0] = new Option("北海道地方");
   select2.options[1] = new Option("東北地方");
   select2.options[2] = new Option("関東地方");
   select2.options[3] = new Option("中部地方");
   select2.options[4] = new Option("近畿地方");
   select2.options[5] = new Option("中国地方");
   select2.options[6] = new Option("四国地方");
   select2.options[7] = new Option("九州地方");
   select2.options[0].value ="HokkaiDo";
   select2.options[1].value ="Tohoku";
   select2.options[2].value ="Kanto";
   select2.options[3].value ="Chubu";
   select2.options[4].value ="Kinki";
   select2.options[5].value ="Chugoku";
   select2.options[6].value ="Shikoku";
   select2.options[7].value ="Kyushu";
}
function setCompareselect(){
  var cselect2 = document.forms.form3.compareselect2; //変数select2を宣言
  var cselect4 = document.forms.form6.compareselect4; //変数select2を宣言

  for(let i=0;i<17;i++){
    cselect2.options[i].hidden=false;
    cselect4.options[i].hidden=false;
    if(cselect2.options[i].value===MainArea[0]){
      cselect2.options[i].hidden=true;
      cselect4.options[i].hidden=true;
    }
  }
  cselect2.options[1].selected=true;
  cselect4.options[1].selected=true;
}
function Compareselect(){
  var cselect2 = document.forms.form3.compareselect2; //変数select2を
  var cselect4 = document.forms.form6.compareselect4; //変数select2を宣言

  for(let i=0;i<17;i++){
    cselect2.options[i].hidden=false;
    cselect4.options[i].hidden=false;
  }
  for(let j=0;j<transformequal.length;j++){
    for(let i=0;i<17;i++){
      if(cselect2.options[i].value===transformequal[j]){
        cselect2.options[i].hidden=true;
        cselect4.options[i].hidden=true;
      }
    }
  }
  for(let i=0;i<17;i++){
    if(cselect2.options[i].hidden!==true){
      cselect2.options[i].selected=true;
      cselect4.options[i].selected=true;
      break;
    }
  }
}
function setComparedataselect(){
  var cdselect1 = document.forms.form1.selectdata; //変数select1を宣言
  var cdselect2 = document.forms.form1.comparedata; //変数select2を宣言

  cdselect2.options.length = 0; // 選択肢の数がそれぞれに異なる場合、これが重要

  dataset=[]
  dataset_ja=[]

  for(let i=0;i<dset.length;i++){
    if(dset[i]!=cdselect1.options[cdselect1.selectedIndex].value){
      dataset.push(dset[i]);
      dataset_ja.push(dset_ja[i]);
    }
  }
  Comparedataselect()
}
function Comparedataselect(){
  const comparedata1 = document.form1.comparedata;

  comparedata1.options.length = 0;

  for(let i=0;i<dataset.length;i++){
    comparedata1.options[i] = new Option(dataset_ja[i]);
    comparedata1.options[i].value = dataset[i];
  }
}
function setRemoveselect(){
  const rselect = document.forms.form7.removedata;

  rselect.options.length = 0; // 選択肢の数がそれぞれに異なる場合、これが重要
}
function Removeselect(){
  const rselect = document.forms.form7.removedata;

  rselect.options.length = 0; // 選択肢の数がそれぞれに異なる場合、これが重要

  for(let i=0;i<yfieldline.length;i++){
    for(let j=0;j<dset.length;j++){
      if(yfieldline[i]===dset[j]){
        rselect.options[i] = new Option(dset_ja[j]);
        rselect.options[i].value=dset[j];
      }
    }
  }

  RemovebottonView();
}
function RemovebottonView(){
  if(yfieldline.length<=1){
    document.getElementById("Removedata").style.visibility="hidden"
    document.getElementById("form7").style.visibility="hidden"
  }else{
    document.getElementById("Removedata").style.visibility="visible"
    document.getElementById("form7").style.visibility="visible"
  }
}
function Spinbutton(){
  if(type===1){
    document.getElementById("Spin").style.visibility="hidden"
  }else{
    document.getElementById("Spin").style.visibility="visible"
  }
}
function setTransitionselect(){
  markset=[];
  markset_ja=[];
  if(flag==0){
    mset=["line","map","bar","pie","varea","point"];
    mset_ja=["折れ線","地図","棒","円","面","点"];
  }else{
    mset=["line","","bar","pie","varea","point"];
    mset_ja=["折れ線","","棒","円","面","点"];
  }

  for(let i=0;i<mset.length;i++){
    if(i!=type && mset[i]!=""){
      markset.push(mset[i])
      markset_ja.push(mset_ja[i])
    }
  }

  Transitionselect();
}
function Transitionselect(){
  var tselect1 = document.forms.form4.transition; //変数select1を宣言

  tselect1.options.length = 0; // 選択肢の数がそれぞれに異なる場合、これが重要

  for(let i=0;i<markset.length;i++){
    tselect1.options[i] = new Option(markset_ja[i]);
    tselect1.options[i].value =markset[i];
  }
}
function Collectlog(buttonname,elements) {
  logcount++;
  now = new Date();
  Year = now.getFullYear();
  Month = now.getMonth()+1;
  Day = now.getDate();
  Hour = now.getHours();
  Min = now.getMinutes();
  Sec = now.getSeconds();

  if(flag===0){
    trend="area";
    axisParticleSize=Arealevel;
  }else if(flag===1){
    trend="time";
    axisParticleSize=xtypename;
  }

  if(type==0){
    typeOfView="Line";
  }else if(type===1){
    typeOfView="Map";
  }else if(type===2){
    typeOfView="Bar";
  }else if(type===3){
    typeOfView="Arc";
  }else if(type===4){
    typeOfView="Area";
  }else if(type===5){
    typeOfView="Point";
  }

  startPointDate=startedit.slice();
  endPointDate=endedit.slice();

  statisticaldata=yfieldline.slice();

  data = {
      "system":"systemA",
      "date":Year+"-"+Month+"-"+Day,
      "time":Hour+":"+Min+":"+Sec,
      "trendAxis":trend,
      "statisticalData":statisticaldata,
      "typeOfView":typeOfView,
      "axisParticleSize":axisParticleSize,
      "button":buttonname,
      "elements":elements,
      "count":logcount,
      "startdate":startPointDate,
      "enddate":endPointDate,
    };

    masterData.push(data);
}
function publish() {
    let masterData2 = JSON.stringify( masterData, null, ' ')
    var blob = new Blob([masterData2], { "type": "text/plain" });
    // IEの場合
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, "outFileFromWindows.json");
        // IE以外の場合
    } else {
        document.getElementById("createFile").href = window.URL.createObjectURL(blob);
    }
}
function Re(){
  document.getElementById("Spin").style.visibility="hidden"
  document.getElementById("Tdrillup").style.visibility="hidden"
  document.getElementById("Tdrillup2").style.visibility="hidden"
  document.getElementById("Tdrilldown").style.visibility="hidden"
  document.getElementById("Tdrilldown2").style.visibility="hidden"
  document.getElementById("Adrillup").style.visibility="hidden"
  document.getElementById("Adrillup2").style.visibility="hidden"
  document.getElementById("Adrilldown").style.visibility="hidden"
  document.getElementById("Adrilldown2").style.visibility="hidden"
  document.getElementById("compare").style.visibility="hidden"
  document.getElementById("compare2").style.visibility="hidden"
  document.getElementById("Adddata").style.visibility="hidden"
  document.getElementById("Transition").style.visibility="hidden"
  document.getElementById("Removedata").style.visibility="hidden"
  document.getElementById("Reset").style.visibility="hidden"
  document.getElementById("comparedata").style.visibility="hidden"
  document.getElementById("form7").style.visibility="hidden"
  document.getElementById("form2").style.visibility="hidden"
  document.getElementById("form5").style.visibility="hidden"
  document.getElementById("form3").style.visibility="hidden"
  document.getElementById("form6").style.visibility="hidden"
  document.getElementById("form4").style.visibility="hidden"
  document.getElementById("myCanvas").style.visibility="hidden"
  document.getElementById("myCanvas2").style.visibility="hidden"
  document.getElementById("myCanvas3").style.visibility="hidden"
  document.getElementById("myCanvas4").style.visibility="hidden"
  document.getElementById("vis").style.visibility="hidden"
  document.getElementById("Start").style.visibility="visible"
  document.getElementById("selectdata").style.visibility="visible"
  document.getElementById("help_icon").style.visibility="visible"

  document.getElementById("startmonth").style.visibility="hidden";  ////////////////////////////////////////////////////////
  document.getElementById("to").style.visibility="hidden";  ////////////////////////////////////////////////////////
  document.getElementById("endmonth").style.visibility="hidden";  ////////////////////////////////////////////////////////

  document.getElementById("cube").style.visibility="hidden"
}

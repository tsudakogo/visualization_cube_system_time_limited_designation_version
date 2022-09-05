function St(){
  const selectdata1 = document.form1.selectdata;
  const selectdatanum = selectdata1.selectedIndex;
  selectdatastr = selectdata1.options[selectdatanum].value;

  const startmonth = document.getElementById("startmonth").value; /////////////////////////////////////////////////////////////
  startedit=startmonth.split("-") /////////////////////////////////////////////////////////////
  const endmonth = document.getElementById("endmonth").value; /////////////////////////////////////////////////////////////
  endedit=endmonth.split("-") /////////////////////////////////////////////////////////////

  set(selectdatastr);
  DataJoinArray();
  AreaJoinArray();
}
function set(selectdatastr){
    // dataurl="https://dl.dropboxusercontent.com/s/g7pxrukinj2nvnf/dataset242.csv";
    dataurl="https://dl.dropboxusercontent.com/s/agurpg8bnylpqgu/DatasetMonth.csv";
    MainArea=["Japan"];
    xtypename="monthyear";
    MainData=[selectdatastr];
    dset_ja=["陽性者数","陽性者数累計","死者数","死者数累計","ワクチン1回目","ワクチン2回目","重症者数"];
    dset=["pcr_positive","pcr_positive_total","dead","dead_total","vaccine_status1","vaccine_status2","severe"];
    flag=0;
    type=2;
    CompareArea=[]
    AFlag=0;
    Atmp=[];
    Atmpnum=0;
    ARFlag=0;
    ARtmpnum=0;
    ARtmp=[];
    AJFlag=0;
    AJtmpnum=0;
    AJtmp=[];
    AddData=[];
    Arealevel="Japan";
}
function Setdata(){
  if(xtypename==="datemonthyear"){
    // dataurl="https://dl.dropboxusercontent.com/s/db18rmizllgguzg/dataset4.csv";
    dataurl="https://dl.dropboxusercontent.com/s/ce6rnmwdyhw79f0/DatasetDate.csv";
  }else if(xtypename==="monthyear"){
    // dataurl="https://dl.dropboxusercontent.com/s/g7pxrukinj2nvnf/dataset242.csv";
    dataurl="https://dl.dropboxusercontent.com/s/agurpg8bnylpqgu/DatasetMonth.csv";
  }else if(xtypename==="year"){
    // dataurl="https://dl.dropboxusercontent.com/s/fs2pyjqwqf81sfd/dataset232.csv";
    dataurl="https://dl.dropboxusercontent.com/s/ttzmwxmphcb7l8x/DatasetYear.csv";
  }
}
function TDU(){
  if(xtypename==="monthyear"){
    xtypename="year";
  }else if(xtypename==="datemonthyear"){
    xtypename="monthyear";
  }
}
function TDD(){  //////////////////////////////////////////////////////// ////////////////////////////////////////////////////////
  if(xtypename==="year"){
    xtypename="monthyear";
  }else if(xtypename==="monthyear"){
    xtypename="datemonthyear";
  }
}
function Adrill1(){
  const adrilldown1 = document.form2.Adrill1;
  const adrilldownnum = adrilldown1.selectedIndex;
  adrilldownstr = adrilldown1.options[adrilldownnum].value;
  ADD(adrilldownstr);
}
function Adrill2(){
  const adrilldown2 = document.form5.Adrill2;
  const adrilldownnum2 = adrilldown2.selectedIndex;
  adrilldownstr2 = adrilldown2.options[adrilldownnum2].value;
  ADD(adrilldownstr2);
}
function ADD(adrilldownstr){
  if(Arealevel=="Japan"){
    MainArea=AdrilldownAreaTransform(Arealevel);
    Arealevel="Region";
  }else if(Arealevel=="Region"){
    MainArea=AdrilldownAreaTransform(adrilldownstr);
    Arealevel="Prefectures";
  }
}
function ADU(){
  if(Arealevel=="Region"){
    MainArea=["Japan"];
    Arealevel="Japan";
  }else if(Arealevel=="Prefectures"){
    MainArea=AdrillupAreaTransform(Arealevel);
    Arealevel="Region";
  }
}
function AdrilldownAreaTransform(Areaname){
  if(Areaname=="HokkaiDo" || Areaname=="Hokkai Do"){
    transform=["Hokkai Do"];
  }else if(Areaname=="Tohoku" || Areaname=="Aomori Ken"){
    transform=["Aomori Ken","Iwate Ken","Akita Ken","Miyagi Ken","Yamagata Ken","Fukushima Ken"];
  }else if(Areaname=="Kanto" || Areaname=="Ibaraki Ken"){
    transform=["Ibaraki Ken","Tochigi Ken","Gunma Ken","Chiba Ken","Saitama Ken","Tokyo To","Kanagawa Ken"];
  }else if(Areaname=="Chubu" || Areaname=="Niigata Ken"){
    transform=["Niigata Ken","Toyama Ken","Ishikawa Ken","Fukui Ken","Nagano Ken","Gifu Ken","Yamanashi Ken","Shizuoka Ken","Aichi Ken"];
  }else if(Areaname=="Kinki" || Areaname=="Mie Ken"){
    transform=["Mie Ken","Wakayama Ken","Kyoto Fu","Shiga Ken","Nara Ken","Osaka Fu","Hyogo Ken"];
  }else if(Areaname=="Chugoku" || Areaname=="Shimane Ken"){
    transform=["Shimane Ken","Tottori Ken","Okayama Ken","Hiroshima Ken","Yamaguchi Ken"];
  }else if(Areaname=="Shikoku" || Areaname=="Kagawa Ken"){
    transform=["Kagawa Ken","Tokushima Ken","Ehime Ken","Kochi Ken"];
  }else if(Areaname=="Kyushu" || Areaname=="Fukuoka Ken"){
    transform=["Fukuoka Ken","Oita Ken","Saga Ken","Nagasaki Ken","Kumamoto Ken","Miyazaki Ken","Kagoshima Ken","Okinawa Ken"];
  }else if(Areaname=="Japan"){
    transform=["HokkaiDo","Tohoku","Kanto","Chubu","Kinki","Chugoku","Shikoku","Kyushu"];
  }

  return transform
}
function AdrillupAreaTransform(Areaname){
  if(Areaname=="Prefectures"){
    transform=["HokkaiDo","Tohoku","Kanto","Chubu","Kinki","Chugoku","Shikoku","Kyushu"];
  }

  return transform
}
function com1(){
  const cselect2 = document.form3.compareselect2;
  const comparenum = cselect2.selectedIndex;
  comparestr = cselect2.options[comparenum].value;

  Com(comparestr);
}
function com2(){
  const cselect4 = document.form6.compareselect4;
  const comparenum2 = cselect4.selectedIndex;
  comparestr = cselect4.options[comparenum2].value;

  Com(comparestr);
}
function Com(comparestr){
  let ctmp=CompareTransform(comparestr)
  CompareArea=CompareArea.concat(ctmp[0])
}
function CompareAreaOperate(){
  if(Arealevel=="Japan"){
    if(AJFlag==0){
      if(ARFlag==1){
        CompareAreaAdd(ARtmpnum[0],ARtmpnum[1]);
        ARFlag=0;
      }
      if(AFlag==1){
        CompareAreaAdd(Atmpnum[0],Atmpnum[1]);
        AFlag=0;
      }
      AJtmpnum=CompareAreaDelete();
      AJFlag=AJtmpnum[2]
    }
  }else if(Arealevel=="Region"){
    if(ARFlag==0){
      if(AJFlag==1){
        CompareAreaAdd(AJtmpnum[0],AJtmpnum[1]);
        AJFlag=0;
      }
      if(AFlag==1){
        CompareAreaAdd(Atmpnum[0],Atmpnum[1]);
        AFlag=0;
      }
      ARtmpnum=CompareAreaDelete();
      ARFlag=ARtmpnum[2]
    }
  }else if(Arealevel=="Prefectures"){
    if(AFlag==0){
      if(AJFlag==1){
        CompareAreaAdd(AJtmpnum[0],AJtmpnum[1]);
        AJFlag=0;
      }
      if(ARFlag==1){
        CompareAreaAdd(ARtmpnum[0],ARtmpnum[1]);
        ARFlag=0;
      }
      Atmpnum=CompareAreaDelete();
      AFlag=Atmpnum[2]
    }
  }
}
function CompareAreaDelete(){
  let cFlag=0;
  for(let i=0;i<CompareArea.length;i++){
      if(MainArea[0]===CompareArea[i]){
          let istep=CompareTransform(CompareArea[i]);
          Atmp=CompareArea.splice(i,istep[1]);
          Atmpnum=i;
          cFlag=1;
          Adrillcoordinate();
          i=i+istep[1];
      }
  }
  return [Atmpnum, Atmp,cFlag]
}
function CompareAreaAdd(Atmpnum,Atmp){
  Array.prototype.splice.apply(CompareArea,[Atmpnum,0].concat(Atmp));
  caddcoordinate();
}
function AreaJoinArray(){
  transformequal=MainArea.concat(CompareArea);
}
function CompareTransform(Areaname){
  let acount=0;
  if(Areaname=="HokkaiDo" || Areaname=="Tohoku" || Areaname=="Kanto" || Areaname=="Chubu" || Areaname=="Kinki" || Areaname=="Chugoku" || Areaname=="Shikoku" || Areaname=="Kyushu" || Areaname=="Japan"){
    transform=[Areaname];
    acount=1;
  }else if(Areaname=="Hokkai Do"){
    transform=["Hokkai Do"];
    acount=1;
  }else if(Areaname=="Aomori Ken"){
    transform=["Aomori Ken","Iwate Ken","Akita Ken","Miyagi Ken","Yamagata Ken","Fukushima Ken"];
    acount=6;
  }else if(Areaname=="Ibaraki Ken"){
    transform=["Ibaraki Ken","Tochigi Ken","Gunma Ken","Chiba Ken","Saitama Ken","Tokyo To","Kanagawa Ken"];
    acount=7;
  }else if(Areaname=="Niigata Ken"){
    transform=["Niigata Ken","Toyama Ken","Ishikawa Ken","Fukui Ken","Nagano Ken","Gifu Ken","Yamanashi Ken","Shizuoka Ken","Aichi Ken"];
    acount=9;
  }else if(Areaname=="Mie Ken"){
    transform=["Mie Ken","Wakayama Ken","Kyoto Fu","Shiga Ken","Nara Ken","Osaka Fu","Hyogo Ken"];
    acount=7;
  }else if(Areaname=="Shimane Ken"){
    transform=["Shimane Ken","Tottori Ken","Okayama Ken","Hiroshima Ken","Yamaguchi Ken"];
    acount=5;
  }else if(Areaname=="Kagawa Ken"){
    transform=["Kagawa Ken","Tokushima Ken","Ehime Ken","Kochi Ken"];
    acount=4;
  }else if(Areaname=="Fukuoka Ken"){
    transform=["Fukuoka Ken","Oita Ken","Saga Ken","Nagasaki Ken","Kumamoto Ken","Miyazaki Ken","Kagoshima Ken","Okinawa Ken"];
    acount=8;
  }
  return [transform,acount]
}
function Comparedata(){
  const comparedata1 = document.form1.comparedata;
  const comparedatanum = comparedata1.selectedIndex;
  comparedatastr = comparedata1.options[comparedatanum].value;

  for(let i=0;i<dataset.length;i++){
    if(dataset[i]==comparedatastr){
      dataset.splice(i,1);
      dataset_ja.splice(i,1)
    }
  }

  AddData.push(comparedatastr);
}
function RemoveData(){
  const rselect = document.forms.form7.removedata;
  const rselectnum = rselect.selectedIndex;
  rselectstr = rselect.options[rselectnum].value;

  for(let i=0;i<yfieldline.length;i++){
    if(yfieldline[i]===rselectstr){
      rdata=yfieldline.splice(i,1)
      if(i==0){
        MainData[0]=AddData[0];
        AddData.splice(0,1);
      }else{
        AddData.splice(i-1,1);
      }
    }
  }
  Editdataset(rdata);
}
function Editdataset(rdata){
  for(let i=0;i<dset.length;i++){
    if(rdata==dset[i]){
      dataset_ja.push(dset_ja[i]);
      dataset.push(dset[i]);
    }
  }
  Comparedataselect();
}
function DataJoinArray(){
  yfieldline=MainData.concat(AddData);
}
function Sp(){
  if(flag===0){
    flag=1;
  }else{
    flag=0;
  }
}
function Trans(){
  const transition1 = document.form4.transition;
  const transitionnum = transition1.selectedIndex;
  transitionstr = transition1.options[transitionnum].value;

  if(transitionstr==="line"){
    type=0;
  }else if(transitionstr==="map"){
    type=1;
  }else if(transitionstr==="bar"){
    type=2;
  }else if(transitionstr==="pie"){
    type=3;
  }else if(transitionstr==="varea"){
    type=4;
  }else if(transitionstr==="point"){
    type=5;
  }
}
function setConfig(){
  if(flag===0){
    if(type===0){
      viswidth=1200;
      visheight=500;
    }else if(type===1){ ////////////////////////////////////////////////////////////////////////////////////////////
      viswidth=300;
      visheight=300;
      // if(yfieldline.length<=2){
      //   viscolumns=4;
      // }else if(yfieldline.length===3){
      //   viscolumns=3;
      // }else{
        // viscolumns=2;
      // }
    }else if(type===2){ ////////////////////////////////////////////////////////////////////////////////////////////
      // if(xtypename==="year"){
      //   viswidth=300;
      //   visheight=250;
      //   if(yfieldline.length<=4){
      //     viscolumns=20;
      //   }else{
      //     viscolumns=112;
      //   }
      // }else if(xtypename==="monthyear"){
          visheight=350;
        // if(transformequal.length<=2){
          viswidth=50*transformequal.length*yfieldline.length;
          viscolumns=1;
        // }else{
        //   viswidth=100*transformequal.length;
        //   viscolumns=10;
        // }
      // }else{
      //   visheight=300;
      //   viswidth=300
      //   viscolumns=4;
      // }
    }else if(type===3){ ////////////////////////////////////////////////////////////////////////////////////////////
      // if(yfieldline.length<=2){
        // viscolumns=4;
      // }else if(yfieldline.length<=4){
        viscolumns=1;
      // }else{
      //   viscolumns=1;
      // }
      viswidth=300;
      visheight=300;
    }else if(type===4){
      viswidth=1200;
      visheight=500;
      viscolumns=1;
    }else if(type===5){
      viswidth=1000;
      visheight=500;
    }
  }else{
    if(type===0){
      viswidth=1200;
      visheight=500;
    }else if(type===2){
      visheight=350;
      viswidth=800;
      viscolumns=1;
    }else if(type===3){ ////////////////////////////////////////////////////////////////////////////////////////////
      // if(yfieldline.length<=2){
      //   viscolumns=4;
      // }else if(yfieldline.length<=4){
      //   viscolumns=2;
      // }else{
      //   viscolumns=1;
      // }

      viscolumns=1;
      viswidth=300;
      visheight=300;
    }else if(type===4){
      viswidth=1200;
      visheight=500;
      viscolumns=1;
    }else if(type===5){
      viswidth=1000;
      visheight=500;
    }
  }
}
function visualize(){  //////////////////////////////////////////////////////// //////////////////////////////////////////////////////// //////////////////////////////////////////////////////// ////////////////////////////////////////////////////////
  setConfig();
  Setdata();
  if(xtypename=="year"){
    if(type===0){
      visualizeLineyear();
    }else if(type===1){
      visualizeMapyear();
    }else if(type===2){
      visualizeBaryear();
    }else if(type===3){
      visualizeArcyear();
    }else if(type===4){
      visualizeAreayear();
    }else if(type===5){
      visualizePointyear();
    }
  }else if(xtypename=="monthyear"){
    if(type===0){
      visualizeLinemonth();
    }else if(type===1){
      visualizeMapmonth();
    }else if(type===2){
      visualizeBarmonth();
    }else if(type===3){
      visualizeArcmonth();
    }else if(type===4){
      visualizeAreamonth();
    }else if(type===5){
      visualizePointmonth();
    }
  }else{
    if(type===0){
      visualizeLinedate();
    }else if(type===1){
      visualizeMapdate();
    }else if(type===2){
      visualizeBardate();
    }else if(type===3){
      visualizeArcdate();
    }else if(type===4){
      visualizeAreadate();
    }else if(type===5){
      visualizePointdate();
    }
  }
}
function visualizeLinedate(){
  if (flag===0){
      var visualline={
        "width":viswidth,
        "height":visheight,
        "data":{"url":dataurl},
        "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                     {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1],"date":1},{"year":endedit[0],"month":endedit[1],"date":31}]}},
                     {"fold":yfieldline}],
        "params": [{"name": "click","select": {"type": "point", "encodings": ["color"]}}],
        "mark":{"type":"line"},
        "encoding":{
          "x":{"field":"name","type":"nominal","title":""},
          "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
          "color": {"condition": {"param": "click","field": "date","timeUnit":xtypename,"type":"nominal","scale": {"scheme": "category20"},"legend":{"symbolLimit":502,"columns":5}},"value":"lightgray"},
          "strokeDash": {"field": "key", "type": "ordinal","title":"data"},
          "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
      };
  }else{
    var visualline={
      "width":viswidth,
      "height":visheight,
      "data":{"url":dataurl},
      "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                   {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1],"date":1},{"year":endedit[0],"month":endedit[1],"date":31}]}},
                   {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["color"]}}],
      "mark":{"type":"line"},
      "encoding":{
        "x":{"field":"date","timeUnit":xtypename,"title":""},
        "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
        "color": {"condition": {"param": "click","field": "name","type":"nominal","scale": {"scheme": "category20"}},"value": "lightgray"},
        "strokeDash": {"field": "key", "type": "ordinal","title":"data"},
        "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
      }
    };
  }

  vegaEmbed('#vis', visualline);
}
function visualizeBardate(){
  if (flag===1){
      var visualbar={
        "data":{"url":dataurl},
        "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                     {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1],"date":1},{"year":endedit[0],"month":endedit[1],"date":31}]}},
                     {"fold":yfieldline}],
        "params": [{"name": "click","select": {"type": "point", "encodings": ["x","color"]}}],
        "facet":{"field":"name","type":"nominal","title":"",},
        "columns":viscolumns,
        "spec":{
          "height":visheight,
          "width":viswidth,
            "mark":{"type":"bar"},
            "encoding":{
              "x":{"field":"date","timeUnit":xtypename,"title":""},
              "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
              "facet":{"field":"key","type":"nominal","title":"","spacing":-2,"header":{"labelFontSize":9},"scale":{"y":"independent"},"columns":2},
              "color": {"condition": {"param": "click","field": "name","type":"nominal","scale": {"scheme": "category20"}},"value":"lightgray"},
              "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
          },
          "resolve": {"scale": {"x": "independent"}}
        },
      };
  }else{
    var visualbar={
      "data":{"url":dataurl},
      "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                   {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1],"date":1},{"year":endedit[0],"month":endedit[1],"date":31}]}},
                   {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["x","strokeDash"]}}],
      "facet":{"field":"date","timeUnit":xtypename,"title":"","spacing":-2,"header":{"labelFontSize":6}},
      "columns":viscolumns,
      "spacing":-2,
      "spec":{
        "height":visheight,
        "width":viswidth,
          "mark":{"type":"bar"},
          "encoding":{
            "x":{"field":"name","type":"nominal","title":""},
            "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
            "xOffset":{"field":"key","type":"nominal","title":"","spacing":-2},
            "strokeDash": {"field": "date","timeUnit":xtypename,"type": "nominal","legend":null},
            "color": {"condition": {"param": "click","field": "key","type":"nominal","scale": {"scheme": "category20"}},"value": "lightgray"},
            "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
      },
      "resolve": {"axis": {"x": "independent"}}
    };
  }
  vegaEmbed('#vis', visualbar);
}
function visualizeMapdate(){
  var visualmap={
    "data": {"url": dataurl},
    "transform": [
      {"filter":{"field":"name","oneOf": transformequal}},
      {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1],"date":1},{"year":endedit[0],"month":endedit[1],"date":31}]}},
      {"lookup": "name",
       "from": {"data": {"url": "https://dl.dropboxusercontent.com/s/ueuefj52e84dfdf/japan3.geojson","format":{"type": "json","property":"features"}},
                "key": "properties.nam"},"as":"geo"
      }
    ],
    "params": [{"name": "click","select": {"type": "point", "encodings": ["shape","color"]}}],
    "repeat":{"row":yfieldline},
    "spec":{
      "width": viswidth,
      "height": visheight,
      "mark": {"type": "geoshape"},
      "projection": {"type": "mercator"},
      "encoding": {
        "shape": {"field": "geo","type":"geojson"},
        "color": {"condition": {"param": "click","field": {"repeat":"row"},"type":"quantitative"},"value": "lightgray"},
        "facet":{"field":"date","timeUnit":xtypename,"title":""},
        "tooltip":[{"field":"name","type":"nominal"},{"field":{"repeat":"row"},"type":"quantitative"}]
      },
    },
    "resolve": {"scale": {"color": "independent"}},
    "config": {"view": {"stroke": "transparent"}}
  };
  vegaEmbed('#vis', visualmap);
}
function visualizeArcdate(){
  if (flag===1){
      var visualarc={
        "data": {"url":dataurl},
        "transform": [{"filter": {"field": "name", "oneOf":transformequal}},
                      {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1],"date":1},{"year":endedit[0],"month":endedit[1],"date":31}]}},
                      {"fold": yfieldline}],
        "params": [{"name": "click","select": {"type": "point","encodings":["strokeOpacity","color"]}}],
        "facet":{"field":"name","type":"nominal","title":""},
        "columns":viscolumns,
        "spec":{
          "mark": {"type":"arc"},
          "encoding": {
            "theta": {"field": "value","type":"quantitative","aggregate":"sum","stack": "normalize"},
            "column": {"field": "key", "type": "nominal","title":""},
            "color": {"condition": {"param": "click","field":"date","timeUnit":xtypename,"type":"nominal","scale": {"scheme": "category20"}},"value": "lightgray"},
            "strokeOpacity": {"field": "name", "type": "nominal","legend":null},
            "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nomianl","title":"data"},{"field":"value","type":"quantitative"}]
          },
          "view": {"stroke": "transparent"}
        }
      };
  }else{
    var visualarc={
      "data": {"url":dataurl},
      "transform": [{"filter": {"field": "name", "oneOf":transformequal}},
                    {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1],"date":1},{"year":endedit[0],"month":endedit[1],"date":31}]}},
                    {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["color","strokeOpacity"]}}],
      "facet":{"field":"date","timeUnit":xtypename,"type":"nominal","title":""},
      "columns": viscolumns,
      "spec":{
        "width": viswidth,
        "height": visheight,
        "mark": {"type":"arc"},
        "encoding": {
          "theta": {"field": "value","type":"quantitative","aggregate":"sum","stack": "normalize"},
          "color": {"condition": {"param": "click","field":"name","type":"nominal","scale": {"scheme": "category20"}},"value": "lightgray"},
          "strokeOpacity": {"field": "date", "timeUnit": xtypename,"legend":null},
          "facet":{"field":"key","type":"nominal","title":""},
          "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
        "view": {"stroke": "transparent"}
      },
      };
  }
  vegaEmbed('#vis', visualarc);
}
function visualizeAreadate(){
    if (flag===0){
      var visualarea={
        "width": viswidth,
        "height": visheight,
        "data": {"url": dataurl},
        "transform": [{"filter": {"field": "name", "oneOf":transformequal}},
                      {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1],"date":1},{"year":endedit[0],"month":endedit[1],"date":31}]}},
                      {"fold":yfieldline}],
        "params": [{"name": "click","select": {"type": "point", "encodings": ["color"]}}],
        "mark": {"type":"area"},
        "encoding": {
          "x": {"timeUnit": xtypename, "field": "date","title":""},
          "y": {"field": "value","type":"quantitative","stack": "normalize","aggregate": "sum", "axis": null},
          "color": {"condition": {"param": "click","field":"name","type":"nominal","scale": {"scheme": "category20"},"legend":{"symbolLimit":502,"columns":5}},"value": "lightgray"},
          "facet":{"field":"key","type":"nominal","title":"","columns":viscolumns},
          "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
        "resolve": {"scale": {"x": "independent"}}
      }
    }else{
      var visualarea={
        "width": viswidth,
        "height": visheight,
        "data": {"url": dataurl},
        "transform": [{"filter": {"field": "name", "oneOf":transformequal}},
                      {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1],"date":1},{"year":endedit[0],"month":endedit[1],"date":31}]}},
                      {"fold":yfieldline}],
        "params": [{"name": "click","select": {"type": "point", "encodings": ["color"]}}],
        "mark": {"type":"area"},
        "encoding": {
          "x": {"field": "name","type":"nominal","title":null},
          "y": {"field": "value","type":"quantitative","stack": "normalize","aggregate": "sum","axis":null},
          "color": {"condition": {"param": "click","field":"date","timeUnit":xtypename,"type":"nominal","scale": {"scheme": "category20"},"legend":{"symbolLimit":502,"columns":5}},"value": "lightgray"},
          "facet":{"field":"key","type":"nominal","title":"","columns":viscolumns},
          "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
        "resolve": {"scale": {"x": "independent"}},
        "config": {"view": {"stroke": "transparent"},"scale": {"pointPadding": 0}}
      };
    }
    vegaEmbed('#vis', visualarea);
  }
function visualizePointdate(){
  if (flag===0){
    var visualpoint={
      "data":{"url":dataurl},
      "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                   {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1],"date":1},{"year":endedit[0],"month":endedit[1],"date":31}]}},
                   {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["color","x"]}}],
      "width":viswidth,
      "height":visheight,
      "mark":{"type":"point"},
      "encoding":{
        "x":{"field":"name","tyoe":"nominal","title":""},
        "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
        "color":{"condition":{"param":"click","field":"date","timeUnit":xtypename,"type":"nominal","scale": {"scheme": "category20"}},"value":"lightgray"},
        "size":{"condition":{"param":"click","value":150},"value":50},
        "shape": {"field": "key","type": "nominal"},
        "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
      },
    };
  }else{
    var visualpoint={
      "data":{"url":dataurl},
      "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                   {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1],"date":1},{"year":endedit[0],"month":endedit[1],"date":31}]}},
                   {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["color","x"]}}],
      "width":viswidth,
      "height":visheight,
      "mark":{"type":"point"},
      "encoding":{
        "x":{"field":"date","timeUnit":xtypename,"title":""},
        "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
        "color": {"condition":{"param":"click","field": "name","type":"nominal","scale": {"scheme": "category20"}},"value":"lightgray"},
        "size":{"condition":{"param":"click","value":150},"value":50},
        "shape": {"field": "key", "type": "nominal","title":"data"},
        "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
      }
    };
  }
  vegaEmbed('#vis', visualpoint);
}

function visualizeLinemonth(){
  if (flag===0){
      var visualline={
        "width":viswidth,
        "height":visheight,
        "data":{"url":dataurl},
        "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                     {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1]},{"year":endedit[0],"month":endedit[1]}]}},
                     {"fold":yfieldline}],
        "params": [{"name": "click","select": {"type": "point", "encodings": ["color"]}}],
        "mark":{"type":"line"},
        "encoding":{
          "x":{"field":"name","type":"nominal","title":""},
          "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
          "color": {"condition": {"param": "click","field": "date","timeUnit":xtypename,"type":"nominal","scale": {"scheme": "category20"},"legend":{"symbolLimit":502,"columns":5}},"value":"lightgray"},
          "strokeDash": {"field": "key", "type": "ordinal","title":"data"},
          "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
      };
  }else{
    var visualline={
      "width":viswidth,
      "height":visheight,
      "data":{"url":dataurl},
      "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                   {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1]},{"year":endedit[0],"month":endedit[1]}]}},
                   {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["color"]}}],
      "mark":{"type":"line"},
      "encoding":{
        "x":{"field":"date","timeUnit":xtypename,"title":""},
        "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
        "color": {"condition": {"param": "click","field": "name","type":"nominal","scale": {"scheme": "category20"}},"value": "lightgray"},
        "strokeDash": {"field": "key", "type": "ordinal","title":"data"},
        "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
      }
    };
  }

  vegaEmbed('#vis', visualline);
}
function visualizeBarmonth(){
  if (flag===1){
      var visualbar={
        "data":{"url":dataurl},
        "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                     {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1]},{"year":endedit[0],"month":endedit[1]}]}},
                     {"fold":yfieldline}],
        "params": [{"name": "click","select": {"type": "point", "encodings": ["x","color"]}}],
        "facet":{"field":"name","type":"nominal","title":"",},
        "columns":viscolumns,
        "spec":{
          "height":visheight,
          "width":viswidth,
            "mark":{"type":"bar"},
            "encoding":{
              "x":{"field":"date","timeUnit":xtypename,"title":""},
              "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
              "facet":{"field":"key","type":"nominal","title":"","spacing":-2,"header":{"labelFontSize":9},"scale":{"y":"independent"},"columns":2},
              "color": {"condition": {"param": "click","field": "name","type":"nominal","scale": {"scheme": "category20"}},"value":"lightgray"},
              "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
          },
          "resolve": {"scale": {"x": "independent"}}
        },
      };
  }else{
    var visualbar={
      "data":{"url":dataurl},
      "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                   {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1]},{"year":endedit[0],"month":endedit[1]}]}},
                   {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["x","strokeDash"]}}],
      "facet":{"field":"date","timeUnit":xtypename,"title":"","spacing":-2,"header":{"labelFontSize":6}},
      "columns":viscolumns,
      "spacing":-2,
      "spec":{
        "height":visheight,
        "width":viswidth,
          "mark":{"type":"bar"},
          "encoding":{
            "x":{"field":"name","type":"nominal","title":""},
            "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
            "xOffset":{"field":"key","type":"nominal","title":"","spacing":-2},
            "strokeDash": {"field": "date","timeUnit":xtypename,"type": "nominal","legend":null},
            "color": {"condition": {"param": "click","field": "key","type":"nominal","scale": {"scheme": "category20"}},"value": "lightgray"},
            "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
      },
      "resolve": {"axis": {"x": "independent"}}
    };
  }
  vegaEmbed('#vis', visualbar);
}
function visualizeMapmonth(){
  var visualmap={
    "data": {"url": dataurl},
    "transform": [
      {"filter":{"field":"name","oneOf": transformequal}},
      {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1]},{"year":endedit[0],"month":endedit[1]}]}},
      {"lookup": "name",
       "from": {"data": {"url": "https://dl.dropboxusercontent.com/s/ueuefj52e84dfdf/japan3.geojson","format":{"type": "json","property":"features"}},
                "key": "properties.nam"},"as":"geo"
      }
    ],
    "params": [{"name": "click","select": {"type": "point", "encodings": ["shape","color"]}}],
    "repeat":{"row":yfieldline},
    "columns":1,
    "spec":{
      "width": viswidth,
      "height": visheight,
      "mark": {"type": "geoshape"},
      "projection": {"type": "mercator"},
      "encoding": {
        "shape": {"field": "geo","type":"geojson"},
        "color": {"condition": {"param": "click","field": {"repeat":"row"},"type":"quantitative"},"value": "lightgray"},
        "facet":{"field":"date","timeUnit":xtypename,"title":""},
        "tooltip":[{"field":"name","type":"nominal"},{"field":{"repeat":"row"},"type":"quantitative"}]
      },
    },
    "resolve": {"scale": {"color": "independent"}},
    "config": {"view": {"stroke": "transparent"}}
  };
  vegaEmbed('#vis', visualmap);
}
function visualizeArcmonth(){
  if (flag===1){
      var visualarc={
        "data": {"url":dataurl},
        "transform": [{"filter": {"field": "name", "oneOf":transformequal}},
                      {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1]},{"year":endedit[0],"month":endedit[1]}]}},
                      {"fold": yfieldline}],
        "params": [{"name": "click","select": {"type": "point","encodings":["strokeOpacity","color"]}}],
        "facet":{"field":"name","type":"nominal","title":""},
        "columns":viscolumns,
        "spec":{
          "mark": {"type":"arc"},
          "encoding": {
            "theta": {"field": "value","type":"quantitative","aggregate":"sum","stack": "normalize"},
            "column": {"field": "key", "type": "nominal","title":""},
            "color": {"condition": {"param": "click","field":"date","timeUnit":xtypename,"type":"nominal","scale": {"scheme": "category20"}},"value": "lightgray"},
            "strokeOpacity": {"field": "name", "type": "nominal","legend":null},
            "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nomianl","title":"data"},{"field":"value","type":"quantitative"}]
          },
          "view": {"stroke": "transparent"}
        }
      };
  }else{
    var visualarc={
      "data": {"url":dataurl},
      "transform": [{"filter": {"field": "name", "oneOf":transformequal}},
                    {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1]},{"year":endedit[0],"month":endedit[1]}]}},
                    {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["color","strokeOpacity"]}}],
      "facet":{"field":"date","timeUnit":xtypename,"type":"nominal","title":""},
      "columns": viscolumns,
      "spec":{
        "width": viswidth,
        "height": visheight,
        "mark": {"type":"arc"},
        "encoding": {
          "theta": {"field": "value","type":"quantitative","aggregate":"sum","stack": "normalize"},
          "color": {"condition": {"param": "click","field":"name","type":"nominal","scale": {"scheme": "category20"}},"value": "lightgray"},
          "strokeOpacity": {"field": "date", "timeUnit": xtypename,"legend":null},
          "facet":{"field":"key","type":"nominal","title":""},
          "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
        "view": {"stroke": "transparent"}
      },
      };
  }
  vegaEmbed('#vis', visualarc);
}
function visualizeAreamonth(){
    if (flag===0){
      var visualarea={
        "width": viswidth,
        "height": visheight,
        "data": {"url": dataurl},
        "transform": [{"filter": {"field": "name", "oneOf":transformequal}},
                      {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1]},{"year":endedit[0],"month":endedit[1]}]}},
                      {"fold":yfieldline}],
        "params": [{"name": "click","select": {"type": "point", "encodings": ["color"]}}],
        "mark": {"type":"area"},
        "encoding": {
          "x": {"timeUnit": xtypename, "field": "date","title":""},
          "y": {"field": "value","type":"quantitative","stack": "normalize","aggregate": "sum", "axis": null},
          "color": {"condition": {"param": "click","field":"name","type":"nominal","scale": {"scheme": "category20"},"legend":{"symbolLimit":502,"columns":5}},"value": "lightgray"},
          "facet":{"field":"key","type":"nominal","title":"","columns":viscolumns},
          "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
        "resolve": {"scale": {"x": "independent"}}
      }
    }else{
      var visualarea={
        "width": viswidth,
        "height": visheight,
        "data": {"url": dataurl},
        "transform": [{"filter": {"field": "name", "oneOf":transformequal}},
                      {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1]},{"year":endedit[0],"month":endedit[1]}]}},
                      {"fold":yfieldline}],
        "params": [{"name": "click","select": {"type": "point", "encodings": ["color"]}}],
        "mark": {"type":"area"},
        "encoding": {
          "x": {"field": "name","type":"nominal","title":null},
          "y": {"field": "value","type":"quantitative","stack": "normalize","aggregate": "sum","axis":null},
          "color": {"condition": {"param": "click","field":"date","timeUnit":xtypename,"type":"nominal","scale": {"scheme": "category20"},"legend":{"symbolLimit":502,"columns":5}},"value": "lightgray"},
          "facet":{"field":"key","type":"nominal","title":"","columns":viscolumns},
          "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
        "resolve": {"scale": {"x": "independent"}},
        "config": {"view": {"stroke": "transparent"},"scale": {"pointPadding": 0}}
      };
    }
    vegaEmbed('#vis', visualarea);
  }
function visualizePointmonth(){
  if (flag===0){
    var visualpoint={
      "data":{"url":dataurl},
      "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                   {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1]},{"year":endedit[0],"month":endedit[1]}]}},
                   {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["color","x"]}}],
      "width":viswidth,
      "height":visheight,
      "mark":{"type":"point"},
      "encoding":{
        "x":{"field":"name","tyoe":"nominal","title":""},
        "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
        "color":{"condition":{"param":"click","field":"date","timeUnit":xtypename,"type":"nominal","scale": {"scheme": "category20"}},"value":"lightgray"},
        "size":{"condition":{"param":"click","value":150},"value":50},
        "shape": {"field": "key","type": "nominal"},
        "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
      },
    };
  }else{
    var visualpoint={
      "data":{"url":dataurl},
      "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                   {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0],"month":startedit[1]},{"year":endedit[0],"month":endedit[1]}]}},
                   {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["color","x"]}}],
      "width":viswidth,
      "height":visheight,
      "mark":{"type":"point"},
      "encoding":{
        "x":{"field":"date","timeUnit":xtypename,"title":""},
        "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
        "color": {"condition":{"param":"click","field": "name","type":"nominal","scale": {"scheme": "category20"}},"value":"lightgray"},
        "size":{"condition":{"param":"click","value":150},"value":50},
        "shape": {"field": "key", "type": "nominal","title":"data"},
        "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
      }
    };
  }
  vegaEmbed('#vis', visualpoint);
}

function visualizeLineyear(){
  if (flag===0){
      var visualline={
        "width":viswidth,
        "height":visheight,
        "data":{"url":dataurl},
        "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                     {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0]},{"year":endedit[0]}]}},
                     {"fold":yfieldline}],
        "params": [{"name": "click","select": {"type": "point", "encodings": ["color"]}}],
        "mark":{"type":"line"},
        "encoding":{
          "x":{"field":"name","type":"nominal","title":""},
          "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
          "color": {"condition": {"param": "click","field": "date","timeUnit":xtypename,"type":"nominal","scale": {"scheme": "category20"},"legend":{"symbolLimit":502,"columns":5}},"value":"lightgray"},
          "strokeDash": {"field": "key", "type": "ordinal","title":"data"},
          "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
      };
  }else{
    var visualline={
      "width":viswidth,
      "height":visheight,
      "data":{"url":dataurl},
      "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                   {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0]},{"year":endedit[0]}]}},
                   {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["color"]}}],
      "mark":{"type":"line"},
      "encoding":{
        "x":{"field":"date","timeUnit":xtypename,"title":""},
        "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
        "color": {"condition": {"param": "click","field": "name","type":"nominal","scale": {"scheme": "category20"}},"value": "lightgray"},
        "strokeDash": {"field": "key", "type": "ordinal","title":"data"},
        "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
      }
    };
  }

  vegaEmbed('#vis', visualline);
}
function visualizeBaryear(){
  if (flag===1){
      var visualbar={
        "data":{"url":dataurl},
        "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                     {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0]},{"year":endedit[0]}]}},
                     {"fold":yfieldline}],
        "params": [{"name": "click","select": {"type": "point", "encodings": ["x","color"]}}],
        "facet":{"field":"name","type":"nominal","title":"",},
        "columns":viscolumns,
        "spec":{
          "height":visheight,
          "width":viswidth,
            "mark":{"type":"bar"},
            "encoding":{
              "x":{"field":"date","timeUnit":xtypename,"title":""},
              "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
              "facet":{"field":"key","type":"nominal","title":"","spacing":-2,"header":{"labelFontSize":9},"scale":{"y":"independent"},"columns":2},
              "color": {"condition": {"param": "click","field": "name","type":"nominal","scale": {"scheme": "category20"}},"value":"lightgray"},
              "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
          },
          "resolve": {"scale": {"x": "independent"}}
        },
      };
  }else{
    var visualbar={
      "data":{"url":dataurl},
      "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                   {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0]},{"year":endedit[0]}]}},
                   {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["x","strokeDash"]}}],
      "facet":{"field":"date","timeUnit":xtypename,"title":"","spacing":-2,"header":{"labelFontSize":6}},
      "columns":viscolumns,
      "spacing":-2,
      "spec":{
        "height":visheight,
        "width":viswidth,
          "mark":{"type":"bar"},
          "encoding":{
            "x":{"field":"name","type":"nominal","title":""},
            "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
            "xOffset":{"field":"key","type":"nominal","title":"","spacing":-2},
            "strokeDash": {"field": "date","timeUnit":xtypename,"type": "nominal","legend":null},
            "color": {"condition": {"param": "click","field": "key","type":"nominal","scale": {"scheme": "category20"}},"value": "lightgray"},
            "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
      },
      "resolve": {"axis": {"x": "independent"}}
    };
  }
  vegaEmbed('#vis', visualbar);
}
function visualizeMapyear(){
  var visualmap={
    "data": {"url": dataurl},
    "transform": [
      {"filter":{"field":"name","oneOf": transformequal}},
      {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0]},{"year":endedit[0]}]}},
      {"lookup": "name",
       "from": {"data": {"url": "https://dl.dropboxusercontent.com/s/ueuefj52e84dfdf/japan3.geojson","format":{"type": "json","property":"features"}},
                "key": "properties.nam"},"as":"geo"
      }
    ],
    "params": [{"name": "click","select": {"type": "point", "encodings": ["shape","color"]}}],
    "repeat":{"row":yfieldline},
    "spec":{
      "width": viswidth,
      "height": visheight,
      "mark": {"type": "geoshape"},
      "projection": {"type": "mercator"},
      "encoding": {
        "shape": {"field": "geo","type":"geojson"},
        "color": {"condition": {"param": "click","field": {"repeat":"row"},"type":"quantitative"},"value": "lightgray"},
        "facet":{"field":"date","timeUnit":xtypename,"title":""},
        "tooltip":[{"field":"name","type":"nominal"},{"field":{"repeat":"row"},"type":"quantitative"}]
      },
    },
    "resolve": {"scale": {"color": "independent"}},
    "config": {"view": {"stroke": "transparent"}}
  };
  vegaEmbed('#vis', visualmap);
}
function visualizeArcyear(){
  if (flag===1){
      var visualarc={
        "data": {"url":dataurl},
        "transform": [{"filter": {"field": "name", "oneOf":transformequal}},
                      {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0]},{"year":endedit[0]}]}},
                      {"fold": yfieldline}],
        "params": [{"name": "click","select": {"type": "point","encodings":["strokeOpacity","color"]}}],
        "facet":{"field":"name","type":"nominal","title":""},
        "columns":viscolumns,
        "spec":{
          "mark": {"type":"arc"},
          "encoding": {
            "theta": {"field": "value","type":"quantitative","aggregate":"sum","stack": "normalize"},
            "column": {"field": "key", "type": "nominal","title":""},
            "color": {"condition": {"param": "click","field":"date","timeUnit":xtypename,"type":"nominal","scale": {"scheme": "category20"}},"value": "lightgray"},
            "strokeOpacity": {"field": "name", "type": "nominal","legend":null},
            "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nomianl","title":"data"},{"field":"value","type":"quantitative"}]
          },
          "view": {"stroke": "transparent"}
        }
      };
  }else{
    var visualarc={
      "data": {"url":dataurl},
      "transform": [{"filter": {"field": "name", "oneOf":transformequal}},
                    {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0]},{"year":endedit[0]}]}},
                    {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["color","strokeOpacity"]}}],
      "facet":{"field":"date","timeUnit":xtypename,"type":"nominal","title":""},
      "columns": viscolumns,
      "spec":{
        "width": viswidth,
        "height": visheight,
        "mark": {"type":"arc"},
        "encoding": {
          "theta": {"field": "value","type":"quantitative","aggregate":"sum","stack": "normalize"},
          "color": {"condition": {"param": "click","field":"name","type":"nominal","scale": {"scheme": "category20"}},"value": "lightgray"},
          "strokeOpacity": {"field": "date", "timeUnit": xtypename,"legend":null},
          "facet":{"field":"key","type":"nominal","title":""},
          "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
        "view": {"stroke": "transparent"}
      },
      };
  }
  vegaEmbed('#vis', visualarc);
}
function visualizeAreayear(){
    if (flag===0){
      var visualarea={
        "width": viswidth,
        "height": visheight,
        "data": {"url": dataurl},
        "transform": [{"filter": {"field": "name", "oneOf":transformequal}},
                      {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0]},{"year":endedit[0]}]}},
                      {"fold":yfieldline}],
        "params": [{"name": "click","select": {"type": "point", "encodings": ["color"]}}],
        "mark": {"type":"area"},
        "encoding": {
          "x": {"timeUnit": xtypename, "field": "date","title":""},
          "y": {"field": "value","type":"quantitative","stack": "normalize","aggregate": "sum", "axis": null},
          "color": {"condition": {"param": "click","field":"name","type":"nominal","scale": {"scheme": "category20"},"legend":{"symbolLimit":502,"columns":5}},"value": "lightgray"},
          "facet":{"field":"key","type":"nominal","title":"","columns":viscolumns},
          "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
        "resolve": {"scale": {"x": "independent"}}
      }
    }else{
      var visualarea={
        "width": viswidth,
        "height": visheight,
        "data": {"url": dataurl},
        "transform": [{"filter": {"field": "name", "oneOf":transformequal}},
                      {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0]},{"year":endedit[0]}]}},
                      {"fold":yfieldline}],
        "params": [{"name": "click","select": {"type": "point", "encodings": ["color"]}}],
        "mark": {"type":"area"},
        "encoding": {
          "x": {"field": "name","type":"nominal","title":null},
          "y": {"field": "value","type":"quantitative","stack": "normalize","aggregate": "sum","axis":null},
          "color": {"condition": {"param": "click","field":"date","timeUnit":xtypename,"type":"nominal","scale": {"scheme": "category20"},"legend":{"symbolLimit":502,"columns":5}},"value": "lightgray"},
          "facet":{"field":"key","type":"nominal","title":"","columns":viscolumns},
          "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
        },
        "resolve": {"scale": {"x": "independent"}},
        "config": {"view": {"stroke": "transparent"},"scale": {"pointPadding": 0}}
      };
    }
    vegaEmbed('#vis', visualarea);
  }
function visualizePointyear(){
  if (flag===0){
    var visualpoint={
      "data":{"url":dataurl},
      "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                   {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0]},{"year":endedit[0]}]}},
                   {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["color","x"]}}],
      "width":viswidth,
      "height":visheight,
      "mark":{"type":"point"},
      "encoding":{
        "x":{"field":"name","tyoe":"nominal","title":""},
        "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
        "color":{"condition":{"param":"click","field":"date","timeUnit":xtypename,"type":"nominal","scale": {"scheme": "category20"}},"value":"lightgray"},
        "size":{"condition":{"param":"click","value":150},"value":50},
        "shape": {"field": "key","type": "nominal"},
        "tooltip":[{"field":"date","timeUnit":xtypename},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
      },
    };
  }else{
    var visualpoint={
      "data":{"url":dataurl},
      "transform":[{"filter": {"field": "name", "oneOf":transformequal}},
                   {"filter":{"field":"date","timeUnit":xtypename,"range":[{"year":startedit[0]},{"year":endedit[0]}]}},
                   {"fold":yfieldline}],
      "params": [{"name": "click","select": {"type": "point", "encodings": ["color","x"]}}],
      "width":viswidth,
      "height":visheight,
      "mark":{"type":"point"},
      "encoding":{
        "x":{"field":"date","timeUnit":xtypename,"title":""},
        "y":{"field":"value","type":"quantitative","aggregate":"sum","title":"Number of people"},
        "color": {"condition":{"param":"click","field": "name","type":"nominal","scale": {"scheme": "category20"}},"value":"lightgray"},
        "size":{"condition":{"param":"click","value":150},"value":50},
        "shape": {"field": "key", "type": "nominal","title":"data"},
        "tooltip":[{"field":"name","type":"nominal"},{"field":"key","type":"nominal","title":"data"},{"field":"value","type":"quantitative"}]
      }
    };
  }
  vegaEmbed('#vis', visualpoint);
}

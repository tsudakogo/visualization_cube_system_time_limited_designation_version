function setCube(){
  cubearray1=[];
  cubearray2=[];
  AreaQty=1;
  TimeQty=1;
  ViewQty=6;
  SDQty=1;
  ytrendcube1=2;
}
function setCubelabel(){
  timelabel="month"

  Mainarealabel=[];
  Comparearealabel=[];
  arealabel=[];
  arealabel=CreateArealabel();

  viewlabel=["line","map","bar","pie","area","point"];
  sdlabel=yfieldline;
}
function tick1(){
  renderer1.render(scene1, camera1);
  requestAnimationFrame(tick1);
}
function tick2(){
  renderer2.render(scene2, camera2);
  requestAnimationFrame(tick2);
}

function tick3(){ //////// カメラをマウスでコントロールするために必要なもの
  camera3.lookAt(new THREE.Vector3(-15, 0, -15));
  renderer3.render(scene3, camera3);
  requestAnimationFrame(tick3);
}
function tick4(){ //////// カメラをマウスでコントロールするために必要なもの
    camera4.lookAt(new THREE.Vector3(-15, 0, -15));
  renderer4.render(scene4, camera4);
  requestAnimationFrame(tick4);
}

function CreateCoordinateView(x,y,z,trendcube){
  let cubearray=[];

  for(let i=0;i<y;i++){
      cubearray.splice(1,0,[[1,1]])
  }

  if(x>=z){
      for(let i=0;i<x;i++){
          for(let j=0;j<z;j++){
              if(i!=0 || j!=0){
                  let tmp1=cubearray.splice(trendcube,1);
                  // tmp1=tmp1[0].concat([[2*i+1,2*j+1]]);
                  tmp1=tmp1[0].concat([[1,1]]);
                  cubearray.splice(trendcube,0,tmp1)
              }
          }
      }
  }else{
      for(let i=0;i<z;i++){
          for(let j=0;j<x;j++){
            if(i!=0 || j!=0){
                let tmp1=cubearray.splice(trendcube,1);
                // tmp1=tmp1[0].concat([[2*j+1,2*i+1]]);
                tmp1=tmp1[0].concat([[1,1]]);
                cubearray.splice(trendcube,0,tmp1)
            }
          }
      }
  }

  return cubearray
}
function CreateCoordinate(x,y,z,trendcube){
  let cubearray=[];

  for(let i=0;i<y;i++){
      cubearray.splice(1,0,[[1,1]])
  }

  if(x>=z){
    for(let k=0;k<y;k++){
      for(let i=0;i<x;i++){
          for(let j=0;j<z;j++){
              if(i!=0 || j!=0){
                let tmp1=cubearray.splice(k,1);
                // tmp1=tmp1[0].concat([[2*i+1,2*j+1]]);
                tmp1=tmp1[0].concat([[1,1]]);
                cubearray.splice(k,0,tmp1)
              }
          }
      }
    }
  }else{
      for(let i=0;i<z;i++){
          for(let j=0;j<x;j++){
            if(i!=0 || j!=0){
                let tmp1=cubearray.splice(trendcube,1);
                // tmp1=tmp1[0].concat([[2*j+1,2*i+1]]);
                tmp1=tmp1[0].concat([[1,1]]);
                cubearray.splice(trendcube,0,tmp1)
            }
          }
      }
  }

  return cubearray
}
function DrawAxis(){
  const lineAxis1 = new THREE.AxesHelper(30);
  lineAxis1.setColors(0x000000,0x000000,0x000000);
  scene1.add(lineAxis1);

  const lineAxis2 = new THREE.AxesHelper(30);
  lineAxis2.setColors(0x000000,0x000000,0x000000);
  scene2.add( lineAxis2 );

  const lineAxis3 = new THREE.AxesHelper(30);
  lineAxis3.setColors(0x000000,0x000000,0x000000);
  scene3.add(lineAxis3);

  const lineAxis4 = new THREE.AxesHelper(30);
  lineAxis4.setColors(0x000000,0x000000,0x000000);
  scene4.add(lineAxis4);

  let TimeLabelcolor;
  let AreaLabelcolor;

  if(flag==0){
    AreaLabelcolor=0xdc143c;
    TimeLabelcolor=0x000000;
  }else{
    AreaLabelcolor=0x000000;
    TimeLabelcolor=0xdc143c;
  }

  loader1.load('https://unpkg.com/three@0.131.3/examples/fonts/helvetiker_regular.typeface.json', function(font1){
    var xaxistextGeometry = new THREE.TextGeometry("Area", {font: font1,size: 0.5,curveSegments: 20,height: 0});
    var xaxismaterials = new THREE.MeshBasicMaterial( { color: AreaLabelcolor } );
    var xaxistextMesh = new THREE.Mesh(xaxistextGeometry, xaxismaterials);
    xaxistextMesh.position.set(5,0.5,0);
    xaxistextMesh.quaternion.copy( camera1.quaternion );
    scene1.add(xaxistextMesh);
    var yaxistextGeometry = new THREE.TextGeometry("Type of view", {font: font1,size: 0.4,curveSegments: 20,height: 0});
    var yaxismaterials = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var yaxistextMesh = new THREE.Mesh(yaxistextGeometry, yaxismaterials);
    yaxistextMesh.position.set(2.7,5,0);
    yaxistextMesh.quaternion.copy( camera1.quaternion );
    scene1.add(yaxistextMesh);
    var zaxistextGeometry = new THREE.TextGeometry("Time", {font: font1,size: 0.5,curveSegments: 20,height: 0});
    var zaxismaterials = new THREE.MeshBasicMaterial( { color: TimeLabelcolor } );
    var zaxistextMesh = new THREE.Mesh(zaxistextGeometry, zaxismaterials);
    zaxistextMesh.position.set(-1.5,1,6);
    zaxistextMesh.quaternion.copy( camera1.quaternion );
    scene1.add(zaxistextMesh);

    var xaxistextGeometry = new THREE.TextGeometry("Area", {font: font1,size: 0.5,curveSegments: 20,height: 0});
    var xaxismaterials = new THREE.MeshBasicMaterial( { color: AreaLabelcolor } );
    var xaxistextMesh = new THREE.Mesh(xaxistextGeometry, xaxismaterials);
    xaxistextMesh.position.set(5,0.5,0);
    xaxistextMesh.quaternion.copy( camera2.quaternion );
    scene2.add(xaxistextMesh);
    var yaxistextGeometry = new THREE.TextGeometry("Statistical data", {font: font1,size: 0.4,curveSegments: 20,height: 0});
    var yaxismaterials = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var yaxistextMesh = new THREE.Mesh(yaxistextGeometry, yaxismaterials);
    yaxistextMesh.position.set(2.4,5,0);
    yaxistextMesh.quaternion.copy( camera2.quaternion );
    scene2.add(yaxistextMesh);
    var zaxistextGeometry = new THREE.TextGeometry("Time", {font: font1,size: 0.5,curveSegments: 20,height: 0});
    var zaxismaterials = new THREE.MeshBasicMaterial( { color: TimeLabelcolor } );
    var zaxistextMesh = new THREE.Mesh(zaxistextGeometry, zaxismaterials);
    zaxistextMesh.position.set(-1.5,1,6);
    zaxistextMesh.quaternion.copy( camera2.quaternion );
    scene2.add(zaxistextMesh);

    var xaxistextGeometry = new THREE.TextGeometry("Area", {font: font1,size: 0.5,curveSegments: 20,height: 0});
    var xaxismaterials = new THREE.MeshBasicMaterial( { color: AreaLabelcolor } );
    var xaxistextMesh = new THREE.Mesh(xaxistextGeometry, xaxismaterials);
    xaxistextMesh.position.set(5,0.5,0);
    xaxistextMesh.quaternion.copy( camera3.quaternion );
    scene3.add(xaxistextMesh);
    var yaxistextGeometry = new THREE.TextGeometry("Type of view", {font: font1,size: 0.4,curveSegments: 20,height: 0});
    var yaxismaterials = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var yaxistextMesh = new THREE.Mesh(yaxistextGeometry, yaxismaterials);
    yaxistextMesh.position.set(2.7,5,0);
    yaxistextMesh.quaternion.copy( camera3.quaternion );
    scene3.add(yaxistextMesh);
    var zaxistextGeometry = new THREE.TextGeometry("Time", {font: font1,size: 0.5,curveSegments: 20,height: 0});
    var zaxismaterials = new THREE.MeshBasicMaterial( { color: TimeLabelcolor } );
    var zaxistextMesh = new THREE.Mesh(zaxistextGeometry, zaxismaterials);
    zaxistextMesh.position.set(-1.5,1,6);
    zaxistextMesh.quaternion.copy( camera3.quaternion );
    scene3.add(zaxistextMesh);
    var xaxistextGeometry = new THREE.TextGeometry("Area", {font: font1,size: 0.5,curveSegments: 20,height: 0});
    var xaxismaterials = new THREE.MeshBasicMaterial( { color: AreaLabelcolor } );
    var xaxistextMesh = new THREE.Mesh(xaxistextGeometry, xaxismaterials);
    xaxistextMesh.position.set(5,0.5,0);
    xaxistextMesh.quaternion.copy( camera4.quaternion );
    scene4.add(xaxistextMesh);
    var yaxistextGeometry = new THREE.TextGeometry("Statistical data", {font: font1,size: 0.4,curveSegments: 20,height: 0});
    var yaxismaterials = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var yaxistextMesh = new THREE.Mesh(yaxistextGeometry, yaxismaterials);
    yaxistextMesh.position.set(2.4,5,0);
    yaxistextMesh.quaternion.copy( camera4.quaternion );
    scene4.add(yaxistextMesh);
    var zaxistextGeometry = new THREE.TextGeometry("Time", {font: font1,size: 0.5,curveSegments: 20,height: 0});
    var zaxismaterials = new THREE.MeshBasicMaterial( { color: TimeLabelcolor } );
    var zaxistextMesh = new THREE.Mesh(zaxistextGeometry, zaxismaterials);
    zaxistextMesh.position.set(-1.5,1,6);
    zaxistextMesh.quaternion.copy( camera4.quaternion );
    scene4.add(zaxistextMesh);
  });
}
function Create(){
  if(flag==0){
    CameraXcoordinate=3;
    CameraZcoordinate=16;
    Camera3Xcoordinate=0
    Camera3Zcoordinate=55;
  }else{
    CameraXcoordinate=16;
    CameraZcoordinate=3;
    Camera3Xcoordinate=55;
    Camera3Zcoordinate=0;
  }
  canvasElement1 = document.getElementById('myCanvas');
  renderer1 = new THREE.WebGLRenderer({canvas: canvasElement1,alpha: true});
  renderer1.setPixelRatio(window.devicePixelRatio);
  renderer1.setSize(cubewidth, cubeheight);
  renderer1.setClearColor( 0xffffff, 0 );
  scene1 = new THREE.Scene();
  camera1 = new THREE.PerspectiveCamera(45, cubewidth / cubeheight,1,1000);
  camera1.position.set(CameraXcoordinate, 5, CameraZcoordinate);
  camera1.lookAt(new THREE.Vector3(0, 0, 0));
  controls1 = new THREE.OrbitControls(camera1, canvasElement1);

  canvasElement2 = document.getElementById('myCanvas2');
  renderer2 = new THREE.WebGLRenderer({canvas: canvasElement2,alpha: true});
  renderer2.setPixelRatio(window.devicePixelRatio);
  renderer2.setSize(cubewidth, cubeheight);
  renderer2.setClearColor( 0xffffff, 0 );
  scene2 = new THREE.Scene();
  camera2 = new THREE.PerspectiveCamera(45, cubewidth / cubeheight,1,1000);
  camera2.position.set(CameraXcoordinate, 5, CameraZcoordinate);
  camera2.lookAt(new THREE.Vector3(0, 0, 0));
  controls2 = new THREE.OrbitControls(camera2, canvasElement2);

  canvasElement3 = document.getElementById('myCanvas3');
  renderer3 = new THREE.WebGLRenderer({canvas: canvasElement3,alpha: true});
  renderer3.setPixelRatio(window.devicePixelRatio);
  renderer3.setSize(cubewidthbig, cubeheightbig);
  renderer3.setClearColor( 0xffffff, 0 );
  scene3 = new THREE.Scene();
  camera3 = new THREE.PerspectiveCamera(40, cubewidthbig / cubeheightbig,1,1000);
  camera3.position.set(Camera3Xcoordinate, 55, Camera3Zcoordinate);
  camera3.lookAt(new THREE.Vector3(0, 0, 0));
  controls3 = new THREE.OrbitControls(camera3, canvasElement3);

  canvasElement4 = document.getElementById('myCanvas4');
  renderer4 = new THREE.WebGLRenderer({canvas: canvasElement4,alpha: true});
  renderer4.setPixelRatio(window.devicePixelRatio);
  renderer4.setSize(cubewidthbig, cubeheightbig);
  renderer4.setClearColor( 0xffffff, 0 );
  scene4 = new THREE.Scene();
  camera4 = new THREE.PerspectiveCamera(40, cubewidthbig / cubeheightbig,1,1000);
  camera4.position.set(Camera3Xcoordinate, 55, Camera3Zcoordinate);
  camera4.lookAt(new THREE.Vector3(0, 0, 0));
  controls4 = new THREE.OrbitControls(camera4, canvasElement4);

  tick1();
  tick2();

  tick3();
  tick4();

  cubearray1=CreateCoordinateView(AreaQty,ViewQty,TimeQty,ytrendcube1);
  cubearray2=CreateCoordinate(AreaQty,SDQty,TimeQty,ytrendcube1);

  DrawAxis();
  CreateCube1();
  CreateCube2();
  CreateAreaTimeViewlabel1();
  CreateAreaTimeSdlabel2();
  CreateViewlabel();
}
function CreateArealabel(){
  let i=0;
  while(i<MainArea.length){
    let atmp=MainArealabelTransform(MainArea[i]);
    Mainarealabel=Mainarealabel.concat(atmp[0]);
    i=i+atmp[1];
  }
  i=0;
  while(i<CompareArea.length){
    let atmp=CompareArealabelTransform(CompareArea[i]);
    Comparearealabel=Comparearealabel.concat(atmp[0]);
    i=i+atmp[1];
  }

  ArealabelJoinArray(Mainarealabel,Comparearealabel)

  return arealabel;
}
function MainArealabelTransform(Areaname){
  let acount=0;
  if(Areaname=="HokkaiDo"){
    transform=["Region"];
    acount=8;
  }else if(Areaname=="Hokkai Do"){
    transform=["HokkaiDo_by_pre"];
    acount=1;
  }else if(Areaname=="Aomori Ken"){
    transform=["Tohoku_by_pre"];
    acount=6;
  }else if(Areaname=="Ibaraki Ken"){
    transform=["Kanto_by_pre"];
    acount=7;
  }else if(Areaname=="Niigata Ken"){
    transform=["Chubu_by_pre"];
    acount=9;
  }else if(Areaname=="Mie Ken"){
    transform=["Kinki_by_pre"];
    acount=7;
  }else if(Areaname=="Shimane Ken"){
    transform=["Chugoku_by_pre"];
    acount=5;
  }else if(Areaname=="Kagawa Ken"){
    transform=["Shikoku_by_pre"];
    acount=4;
  }else if(Areaname=="Fukuoka Ken"){
    transform=["Kyushu_by_pre"];
    acount=8
  }else if(Areaname=="Japan"){
    transform=[Areaname];
    acount=1;
  }

  return [transform,acount]
}
function CompareArealabelTransform(Areaname){
  let acount=0;
  if(Areaname=="Hokkai Do"){
    transform=["HokkaiDo_by_pre"];
    acount=1;
  }else if(Areaname=="Aomori Ken"){
    transform=["Tohoku_by_pre"];
    acount=6;
  }else if(Areaname=="Ibaraki Ken"){
    transform=["Kanto_by_pre"];
    acount=7;
  }else if(Areaname=="Niigata Ken"){
    transform=["Chubu_by_pre"];
    acount=9;
  }else if(Areaname=="Mie Ken"){
    transform=["Kinki_by_pre"];
    acount=7;
  }else if(Areaname=="Shimane Ken"){
    transform=["Chugoku_by_pre"];
    acount=5;
  }else if(Areaname=="Kagawa Ken"){
    transform=["Shikoku_by_pre"];
    acount=4;
  }else if(Areaname=="Fukuoka Ken"){
    transform=["Kyushu_by_pre"];
    acount=8
  }else if(Areaname=="Japan" || Areaname=="HokkaiDo" || Areaname=="Tohoku" || Areaname=="Kanto" || Areaname=="Chubu" || Areaname=="Kinki" || Areaname=="Chugoku" || Areaname=="Shikoku" || Areaname=="Kyushu"){
    transform=[Areaname];
    acount=1;
  }

  return [transform,acount]
}
function ArealabelJoinArray(Mainarealabel,Comparearealabel){
  arealabel=Mainarealabel.concat(Comparearealabel);
}
function CreateViewlabel(){
  let cubecount1=0;
  let viewlabelarray=[];
  let Timelabellength=cubelabelTime();
  let Arealabellength=cubelabelArea(1);
  for(let i=0;i<cubearray1.length;i++){
    ycoordinate1=cubecount1;
    viewlabelarray.push(cubecount1);
    for(let j=0;j<cubearray1[i].length;j++){
      loader1.load('https://unpkg.com/three@0.131.3/examples/fonts/helvetiker_regular.typeface.json', function(font1){
        var viewgeo = new THREE.TextGeometry(viewlabel[i], {font: font1,size: 0.5,curveSegments: 20,height: 0});
        var viewmate = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        var viewmesh = new THREE.Mesh(viewgeo, viewmate);
        viewmesh.position.set(Arealabellength[0][2],1.1+viewlabelarray[i],Timelabellength[2]);
        viewmesh.lookAt( new THREE.Vector3(0,100000000,1000000));
        scene1.add(viewmesh);
      });
    }
    cubecount1+=1;
  }
}
function CreateAreaTimeViewlabel1(){
  let arealabelarray=[];
  let Timelabellength=cubelabelTime();
  let Arealabellength=cubelabelArea(cubearray1[ytrendcube1].length);

  for(let k=0;k<cubearray1[ytrendcube1].length;k++){
    xtrendcube1=Arealabellength[k];
    arealabelarray.push(xtrendcube1);

    loader1.load('https://unpkg.com/three@0.131.3/examples/fonts/helvetiker_regular.typeface.json', function(font1){
      var areageo = new THREE.TextGeometry(arealabel[k], {font: font1,size: 0.17,curveSegments: 20,height: 0});
      var areamate = new THREE.MeshBasicMaterial( { color: 0x000000 } );
      var areamesh = new THREE.Mesh(areageo, areamate);
      areamesh.position.set(arealabelarray[k][0],0.35+ytrendcube1,Timelabellength[0]);
      areamesh.lookAt( new THREE.Vector3(0,0,1000000));
      scene1.add(areamesh);

      var timegeo = new THREE.TextGeometry(timelabel, {font: font1,size: 0.4,curveSegments: 20,height: 0});
      var timemate = new THREE.MeshBasicMaterial( { color: 0x000000 } );
      var timemesh = new THREE.Mesh(timegeo, timemate);
      timemesh.position.set(arealabelarray[k][1],0.3+ytrendcube1,Timelabellength[1]);
      timemesh.lookAt( new THREE.Vector3(1000000,0,0));
      scene1.add(timemesh);

      var viewgeo = new THREE.TextGeometry(viewlabel[ytrendcube1], {font: font1,size: 0.5,curveSegments: 20,height: 0});
      var viewmate = new THREE.MeshBasicMaterial( { color: 0x000000 } );
      var viewmesh = new THREE.Mesh(viewgeo, viewmate);
      viewmesh.position.set(arealabelarray[k][2],1.1+ytrendcube1,Timelabellength[2]);
      viewmesh.lookAt( new THREE.Vector3(0,100000000,1000000));
      scene1.add(viewmesh);

      var areageo = new THREE.TextGeometry(arealabel[k], {font: font1,size: 0.17,curveSegments: 20,height: 0});
      var areamate = new THREE.MeshBasicMaterial( { color: 0x000000 } );
      var areamesh = new THREE.Mesh(areageo, areamate);
      areamesh.position.set(arealabelarray[k][0],0.35+ytrendcube1,Timelabellength[0]);
      areamesh.lookAt( new THREE.Vector3(0,0,1000000));
      scene3.add(areamesh);

      var timegeo = new THREE.TextGeometry(timelabel, {font: font1,size: 0.4,curveSegments: 20,height: 0});
      var timemate = new THREE.MeshBasicMaterial( { color: 0x000000 } );
      var timemesh = new THREE.Mesh(timegeo, timemate);
      timemesh.position.set(arealabelarray[k][1],0.3+ytrendcube1,Timelabellength[1]);
      timemesh.lookAt( new THREE.Vector3(1000000,0,0));
      scene3.add(timemesh);

      var viewgeo = new THREE.TextGeometry(viewlabel[ytrendcube1], {font: font1,size: 0.5,curveSegments: 20,height: 0});
      var viewmate = new THREE.MeshBasicMaterial( { color: 0x000000 } );
      var viewmesh = new THREE.Mesh(viewgeo, viewmate);
      viewmesh.position.set(arealabelarray[k][2],1.1+ytrendcube1,Timelabellength[2]);
      viewmesh.lookAt( new THREE.Vector3(0,100000000,1000000));
      scene3.add(viewmesh);
    });
  }
}
function CreateAreaTimeSdlabel2(){
  let cubecount2=0;
  let Timelabellength=cubelabelTime();
  let Arealabellength=cubelabelArea(cubearray2[0].length);

  for(let i=0;i<cubearray2.length;i++){
    let arealabelarray=[];
    let sdlabelarray=[];
    for(let j=0;j<cubearray2[i].length;j++){
      xcoordinate2=Arealabellength[j]
      ycoordinate2=cubecount2;
      zcoordinate2=cubearray2[i][j][1];
      arealabelarray.push(xcoordinate2);
      sdlabelarray.push(ycoordinate2);


      loader1.load('https://unpkg.com/three@0.131.3/examples/fonts/helvetiker_regular.typeface.json', function(font1){
        var areageo = new THREE.TextGeometry(arealabel[j], {font: font1,size: 0.17,curveSegments: 20,height: 0});
        var areamate = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        var areamesh = new THREE.Mesh(areageo, areamate);
        areamesh.position.set(arealabelarray[j][0],0.35+sdlabelarray[j],Timelabellength[0]);
        areamesh.lookAt( new THREE.Vector3(0,0,1000000));
        scene2.add(areamesh);

        var timegeo = new THREE.TextGeometry(timelabel, {font: font1,size: 0.4,curveSegments: 20,height: 0});
        var timemate = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        var timemesh = new THREE.Mesh(timegeo, timemate);
        timemesh.position.set(arealabelarray[j][1],0.3+sdlabelarray[j],Timelabellength[1]);
        timemesh.lookAt( new THREE.Vector3(1000000,0,0));
        scene2.add(timemesh);

        var sdgeo = new THREE.TextGeometry(sdlabel[i], {font: font1,size: 0.17,curveSegments: 20,height: 0});
        var sdmate = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        var sdmesh = new THREE.Mesh(sdgeo, sdmate);
        sdmesh.position.set(arealabelarray[j][2],1.1+sdlabelarray[j],Timelabellength[2]);
        sdmesh.lookAt( new THREE.Vector3(0,100000000,1000000));
        scene2.add(sdmesh);

        var areageo = new THREE.TextGeometry(arealabel[j], {font: font1,size: 0.17,curveSegments: 20,height: 0});
        var areamate = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        var areamesh = new THREE.Mesh(areageo, areamate);
        areamesh.position.set(arealabelarray[j][0],0.35+sdlabelarray[j],Timelabellength[0]);
        areamesh.lookAt( new THREE.Vector3(0,0,1000000));
        scene4.add(areamesh);

        var timegeo = new THREE.TextGeometry(timelabel, {font: font1,size: 0.4,curveSegments: 20,height: 0});
        var timemate = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        var timemesh = new THREE.Mesh(timegeo, timemate);
        timemesh.position.set(arealabelarray[j][1],0.3+sdlabelarray[j],Timelabellength[1]);
        timemesh.lookAt( new THREE.Vector3(1000000,0,0));
        scene4.add(timemesh);

        var sdgeo = new THREE.TextGeometry(sdlabel[i], {font: font1,size: 0.17,curveSegments: 20,height: 0});
        var sdmate = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        var sdmesh = new THREE.Mesh(sdgeo, sdmate);
        sdmesh.position.set(arealabelarray[j][2],1.1+sdlabelarray[j],Timelabellength[2]);
        sdmesh.lookAt( new THREE.Vector3(0,100000000,1000000));
        scene4.add(sdmesh);
      });
    }
    cubecount2+=1;
  }
}

function cubelengthTime(){
  let cubelength=0;
  let cubeposition=0;

  if(xtypename=="year"){
    cubelength=4;
    cubeposition=1;
  }else if(xtypename=="monthyear"){
    cubelength=3;
    cubeposition=0.5;
  }else{
    cubelength=2;
    cubeposition=0;
  }

  return [cubelength,cubeposition];
}

function cubelabelTime(){
  let Timelength=cubelengthTime();
  let Timelabellength=[];

  Timelabellength=[Timelength[0]+0.1,Timelength[0]-0.1,Timelength[1]+1];

  return Timelabellength;
}


function cubelengthArea(){
  let cubelength=[];
  let cubeposition=[];
  let cubelengthmax=[];

    if(arealabel[0]=="Japan"){
      cubelength[0]=4;
      cubeposition[0]=1;
      cubelengthmax[0]=4;
    }else if(arealabel[0]=="Region" || arealabel[0]=="HokkaiDo" || arealabel[0]=="Tohoku" || arealabel[0]=="Kanto" || arealabel[0]=="Chubu" || arealabel[0]=="Kinki" || arealabel[0]=="Chugoku" || arealabel[0]=="Shikoku" || arealabel[0]=="Kyushu"){
      cubelength[0]=3;
      cubeposition[0]=0.5;
      cubelengthmax[0]=3;
    }else{
      cubelength[0]=2;
      cubeposition[0]=0;
      cubelengthmax[0]=2;
    }

  for(let i=1;i<arealabel.length;i++){
      if(arealabel[i]=="Japan"){
        cubelength[i]=4;
        cubeposition[i]=1+cubelengthmax[i-1];
      }else if(arealabel[i]=="Region" || arealabel[i]=="HokkaiDo" || arealabel[i]=="Tohoku" || arealabel[i]=="Kanto" || arealabel[i]=="Chubu" || arealabel[i]=="Kinki" || arealabel[i]=="Chugoku" || arealabel[i]=="Shikoku" || arealabel[i]=="Kyushu"){
        cubelength[i]=3;
        cubeposition[i]=0.5+cubelengthmax[i-1];
      }else{
        cubelength[i]=2;
        cubeposition[i]=0+cubelengthmax[i-1];
      }
      cubelengthmax[i]=cubelengthmax[i-1]+cubelength[i];
  }

  return [cubelength, cubeposition, cubelengthmax]
}

function cubelabelArea(size){
  let Arealength=cubelengthArea();
  let Arealabellength=[];

  if(arealabel[0]=="Japan"){
    Arealabellength=[[0,4.1,0]];
  }else if(arealabel[0]=="Region"){
    Arealabellength=[[0,3.1,0]];
  }else{
    Arealabellength=[[0,2.1,0]];
  }

  for(let i=1;i<size;i++){
    Arealabellength[i]=[Arealength[2][i-1]+0.1,Arealength[2][i]+0.1,Arealength[2][i-1]+0.1];
  }

  return Arealabellength;
}


function CreateCube1(){
  let cubecount1=0.5;
  let color1=0;
  let Timelength=cubelengthTime();
  let Arealength=cubelengthArea();

  for(let i=0;i<cubearray1.length;i++){
    for(let j=0;j<cubearray1[i].length;j++){
      xcoordinate1=cubearray1[i][j][0];
      ycoordinate1=cubecount1;
      zcoordinate1=cubearray1[i][j][1];
      geometry1 = new THREE.BoxGeometry(Arealength[0][j], 1, Timelength[0]);
      cube_material1 = new THREE.MeshBasicMaterial({ color:  `hsl(${color1}, 80%, 60%)`,opacity:0.3,transparent:true} );
      cube1 = new THREE.Mesh(geometry1, cube_material1);
      cube1.position.set(xcoordinate1+Arealength[1][j], ycoordinate1, zcoordinate1+Timelength[1]);
      scene1.add(cube1);
      lineedges1 = new THREE.EdgesGeometry( geometry1 );
      line1 = new THREE.LineSegments( lineedges1, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
      line1.position.set(xcoordinate1+Arealength[1][j], ycoordinate1, zcoordinate1+Timelength[1]);
      scene1.add( line1 );

      geometry3 = new THREE.BoxGeometry(Arealength[0][j], 1, Timelength[0]);
      cube_material3 = new THREE.MeshBasicMaterial({ color:  `hsl(${color1}, 80%, 60%)`,opacity:0.3,transparent:true} );
      cube3 = new THREE.Mesh(geometry3, cube_material3);
      cube3.position.set(xcoordinate1+Arealength[1][j], ycoordinate1, zcoordinate1+Timelength[1]);
      scene3.add(cube3);
      lineedges3 = new THREE.EdgesGeometry( geometry3 );
      line3 = new THREE.LineSegments( lineedges3, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
      line3.position.set(xcoordinate1+Arealength[1][j], ycoordinate1, zcoordinate1+Timelength[1]);
      scene3.add( line3 );

      color1+=36;
    }
    cubecount1+=1;
  }

  for(let k=0;k<cubearray1[ytrendcube1].length;k++){
    xtrendcube1=cubearray1[ytrendcube1][k][0];
    ztrendcube1=cubearray1[ytrendcube1][k][1];

    geometry1 = new THREE.BoxGeometry(Arealength[0][k], 1, Timelength[0]);
    cube_material1 = new THREE.MeshBasicMaterial({ color: 0xdc143c,opacity:1,transparent:true} );
    cube1 = new THREE.Mesh(geometry1, cube_material1);
    cube1.position.set(xtrendcube1+Arealength[1][k], ytrendcube1+0.5, ztrendcube1+Timelength[1]);
    scene1.add(cube1);

    geometry3 = new THREE.BoxGeometry(Arealength[0][k], 1, Timelength[0]);
    cube_material3 = new THREE.MeshBasicMaterial({ color: 0xdc143c,opacity:1,transparent:true} );
    cube3 = new THREE.Mesh(geometry3, cube_material3);
    cube3.position.set(xtrendcube1+Arealength[1][k], ytrendcube1+0.5, ztrendcube1+Timelength[1]);
    scene3.add(cube3);
  }
}
function CreateCube2(){
  let cubecount2=0.5;
  let color2=0;
  let Timelength=cubelengthTime();
  let Arealength=cubelengthArea();
  for(let i=0;i<cubearray2.length;i++){
    for(let j=0;j<cubearray2[i].length;j++){
      xcoordinate2=cubearray2[i][j][0];
      ycoordinate2=cubecount2;
      zcoordinate2=cubearray2[i][j][1];
      geometry2 = new THREE.BoxGeometry(Arealength[0][j], 1, Timelength[0]);
      cube_material2 = new THREE.MeshBasicMaterial({ color:  `hsl(${color2}, 80%, 60%)`,opacity:1,transparent:true} );
      cube2 = new THREE.Mesh(geometry2, cube_material2);
      cube2.position.set(xcoordinate2+Arealength[1][j], ycoordinate2, zcoordinate2+Timelength[1]);
      scene2.add(cube2);
      lineedges2 = new THREE.EdgesGeometry( geometry2 );
      line2 = new THREE.LineSegments( lineedges2, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
      line2.position.set(xcoordinate2+Arealength[1][j], ycoordinate2, zcoordinate2+Timelength[1]);
      scene2.add( line2 );

      geometry4 = new THREE.BoxGeometry(Arealength[0][j], 1, Timelength[0]);
      cube_material4 = new THREE.MeshBasicMaterial({ color:  `hsl(${color2}, 80%, 60%)`,opacity:1,transparent:true} );
      cube4 = new THREE.Mesh(geometry4, cube_material4);
      cube4.position.set(xcoordinate2+Arealength[1][j], ycoordinate2, zcoordinate2+Timelength[1]);
      scene4.add(cube4);
      lineedges2 = new THREE.EdgesGeometry( geometry4 );
      line4 = new THREE.LineSegments( lineedges2, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
      line4.position.set(xcoordinate2+Arealength[1][j], ycoordinate2, zcoordinate2+Timelength[1]);
      scene4.add( line4 );
    }
    color2+=36;
    cubecount2+=1;
  }
}
function adaddcoordinate(){
  SDQty++;
}
function caddcoordinate(){
  AreaQty++;
}
function rdatacoordinate(){
  SDQty--;
}
function Adrillcoordinate(){
  AreaQty--;
}
function SpinLabel(){
  if(flag===0){
    if(type===0){
      ytrendcube1=0;
    }else if(type===1){
      ytrendcube1=1;
    }else if(type===2){
      ytrendcube1=2;
    }else if(type===3){
      ytrendcube1=3;
    }else if(type===4){
      ytrendcube1=4;
    }else if(type===5){
      ytrendcube1=5;
    }
    viewlabel=["line","map","bar","pie","area","point"];
  }else if(flag===1){
    if(type===0){
      ytrendcube1=0;
    }else if(type===2){
      ytrendcube1=1;
    }else if(type===3){
      ytrendcube1=2;
    }else if(type===4){
      ytrendcube1=3;
    }else if(type===5){
      ytrendcube1=4;
    }
    viewlabel=["line","bar","pie","area","point"];
  }
}
function TDUTDDLabel(){
  if(xtypename==="datemonthyear"){
    timelabel="date";
  }else if(xtypename==="monthyear"){
    timelabel="month";
  }else if(xtypename==="year"){
    timelabel="year";
  }
}
function ADUADDComLabel(){
  Mainarealabel=[];
  Comparearealabel=[];
  arealabel=[];
  arealabel=CreateArealabel();
}
function AdRdLabel(){
  sdlabel=yfieldline;
}
function spindeletecoordinate(){
  if(flag==0){
    ViewQty++;
  }else{
    ViewQty--;
  }
}
function transitioncoordinate(){
  if(flag===0){
    if(type===0){
      ytrendcube1=0;
    }else if(type===1){
      ytrendcube1=1;
    }else if(type===2){
      ytrendcube1=2;
    }else if(type===3){
      ytrendcube1=3;
    }else if(type===4){
      ytrendcube1=4;
    }else if(type===5){
      ytrendcube1=5;
    }
  }else if(flag===1){
    if(type===0){
      ytrendcube1=0;
    }else if(type===2){
      ytrendcube1=1;
    }else if(type===3){
      ytrendcube1=2;
    }else if(type===4){
      ytrendcube1=3;
    }else if(type===5){
      ytrendcube1=4;
    }
  }
}

var todayPhoto = [
        {"url":"http://media.daum.net/photo/2841","img":"http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg","title":"&quot;뜨면 끝장&quot; 최강 공격헬기 성능이 설마","id":"20120516082207657"}
        ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100320","img":"http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg","title":"&#39;오늘만&#39; 필리핀 새댁 5개국어 능통 엄친딸","id":"20120516091011626"}
        ,{"url":"http://media.daum.net/photo/4010","img":"http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg","title":"[북한 결혼식 풍경] 신랑·신부 &quot;행복합니다&quot;","id":"20120516092605081"}
        ,{"url":"http://sports.media.daum.net/general/gallery/gagsports/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg","title":"&#39;내가 더 잘해&#39; 후보GK 경기 난입해 선방","id":"20120516100608409"}
        ,{"url":"http://sports.media.daum.net/general/gallery/0516ufc/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg","title":"양동이의 하이킥에 타바레스 &#39;주춤&#39;","id":"20120516093313331"}
        ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100539","img":"http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg","title":"이승철 아내와 딸 사진 공개 &quot;사주에. .&quot;","id":"20120516093918544"}
        ,{"url":"http://media.daum.net/photo/3899","img":"http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg","title":"생후 6개월에 프랑스로 입양됐던 아이가..","id":"20120516030614331"}
        ,{"url":"http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg","title":"&#39;교생&#39; 김연아, 스승의날에도 인기폭발","id":"20120516092003892"}
];

var whole = document.getElementById('whole');
whole.style.width = "275px";

var wrap = document.getElementById('wrap');

var str = '';
var image = [];

for(var i=0; i<todayPhoto.length; i++){    
    image.push( '<li>'+'<a href="'+todayPhoto[i].url+'">'+'<img src="'+todayPhoto[i].img+'"></a></br>'+todayPhoto[i].title+'</li>');
}

var image1 = image.splice(0,4);
var img1String = image1.join("");
var img2String = image.join("");

wrap.innerHTML = "<div id='firstPage'>"+"<ul>"+img1String+"</ul>"+"</div> "
                 + "<div id='secondPage' class='hide'>"+"<ul>"+img2String+"</ul>"+"</div>";

var firstPage = document.getElementById("firstPage");
var secondPage = document.getElementById("secondPage");

var preBtn = document.getElementById("preBtn");
var nextBtn = document.getElementById("nextBtn");

preBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

var span = document.getElementById("pageMove");
span.innerHTML = "1/2";

function next(){
	if(secondPage.className==="hide"){
		firstPage.className = "hide";
		secondPage.className = "";
	}
    span.innerHTML="2/2";
}

function prev(){
	if(firstPage.className==="hide"){
		firstPage.className = "";
		secondPage.className = "hide";
	}
    span.innerHTML="1/2";
}

var sheet = document.createElement('style');
sheet.type = "text/css";
sheet.innerHTML = "";
sheet.innerHTML = "li {float:left;margin:10px 5px 5px 20px;width:110px;height:120px;font-family:fantasy;font-size:11px;text-align:center}";
document.head.appendChild(sheet);

var footer = document.getElementById("footer");
footer.style.paddingLeft = "100px";


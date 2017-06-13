function showResult() {
	$("#preview").html($("#code").val());
}
function openTestView(p){
	var t=document.getElementById(p).value;
	var testdiv=document.getElementById("test");
	
	testdiv.style.display="block";
	
	var H = testdiv.offsetHeight;
	var W = testdiv.offsetWidth;
	
	var top = (document.documentElement.clientHeight - H)/2;
	var left = (document.documentElement.clientWidth - W)/2;
	
	testdiv.style.top=top+'px';
	testdiv.style.left=left+'px';
	document.getElementById("code").value=t;
	window.onresize = function(){
        var testdiv=document.getElementById("test");
	
		var H = testdiv.offsetHeight;
		var W = testdiv.offsetWidth;

		var top = (document.documentElement.clientHeight - H)/2;
		var left = (document.documentElement.clientWidth - W)/2;

		testdiv.style.top=top+'px';
		testdiv.style.left=left+'px';
    } 
}

function closeTestView(){
	testdiv=document.getElementById("test");
	testdiv.style.display="none";
}
/*function load(){
    
    for(var i=0; i!=localStorage.length ;i++)
    {
        var h = localStorage.key(i);
        console.log(h);

    
    }
}*/

function changeHeader() {
	var answer = prompt("Please enter a title:");
	if(answer == null || answer == "")
	{
		//window.alert("ERROR: No title is unacceptable.");
		alert("ERROR: No title is unacceptable.");
        changeHeader();
	}
	else {
		document.getElementById("titleMain").innerHTML = answer;
	}
}


function darkMode(){
    var pg = document.getElementById("whole");
    pg.style.backgroundColor="black";
    pg.style.background= "linear-gradient(#0d0c0c,#393434)";
    pg.style.color="white";
              
    var l = document.getElementById("light");
    var d = document.getElementById("dark");
    var r = document.getElementById("mode");
            
    l.style.borderColor="white";
    d.style.borderColor="white";
    r.style.borderColor="white";
              
    l.style.color="white";
    d.style.color="white";
    r.style.color="white";
            
    l.style.backgroundColor="#0e127e";
    d.style.backgroundColor="#266ca2";         
    r.style.backgroundColor="#0e127e";
    
               
    var d = document.getElementById("items");
    
}

function lightMode(){
    var pg=document.getElementById("whole");
    pg.style.backgroundColor="white";
    pg.style.background= "linear-gradient(#9d9494,white)";
    pg.style.color="black";
    
    var l = document.getElementById("light");
    var d = document.getElementById("dark");
    var r = document.getElementById("mode");
            
    l.style.borderColor="black";
    d.style.borderColor="black";
    r.style.borderColor="black";
              
    l.style.color="black";
    d.style.color="black";
    r.style.color="black";
            
    l.style.backgroundColor="#0e127e";
    d.style.backgroundColor="#266ca2";         
    r.style.backgroundColor="#266ca2";
    
} 

function sliderValue(){
    var slide = document.getElementById("priority").value;
    document.getElementById("stars").innerHTML = slide;
}

function dateValid(){
    var deadline = document.getElementById("date").value;
    var today = new Date();
    today = today + 1;
    var n = today;
    var m = new Date(deadline);
    //console.log(m);
    //console.log(n);
    
    if(n > m)
    {
        alert("ERROR: Date is in the past");
    }
}

function clearData(){
   document.getElementById("priority").value = null;
   document.getElementById("stars").innerHTML = "";	
}

function validate(){
	var slotOne = document.forms["formData"]["theTitle"].value;
	
	if(slotOne == "" || slotOne == null)
    {
        window.alert("Title Data is missing! Fill every field");
        return false;
    }
	
	var slotTwo = document.forms["formData"]["theType"].value;
    if(slotTwo == "" || slotTwo == null) 
    {
        window.alert("Type Data is missing! Fill every field");
		return false;
    }
	
	var slotThree = document.forms["formData"]["thePriority"].value;
    if(slotThree == "" || slotThree == null) 
    {
        window.alert("Priority Data is missing! Fill every field");
		return false;
    }
	
	var slotFour = document.forms["formData"]["theDate"].value;
    if(slotFour == "" || slotFour == null) 
    {
        window.alert("Priority Data is missing! Fill every field");
		return false;
    }
	return true;
}

 function addValues() {
     var titleData = document.getElementById("title").value;
     var t = document.getElementById("type");
     var typeData = t.options[t.selectedIndex].value;
     var priorityData = document.getElementById("priority").value;
     var dateData = document.getElementById("date").value;

     var validationCheck = validate();
     //console.log(validationCheck);
     if(validationCheck)
    {
                   
     var table = document.getElementById("bodyData");
     var row = table.insertRow();
     row.insertCell(0).innerHTML = titleData;
     row.insertCell(1).innerHTML = typeData;
     
     var stars = " ";
     for(var i=0; i<priorityData; i++)
     {
        stars = stars + "&#x2605";
     }
     
     // console.log(star);
     
     row.insertCell(2).innerHTML = stars;
     row.insertCell(3).innerHTML = dateData;
     row.insertCell(4).innerHTML = "<button onclick='del_row(this)'>&#x2705</button>";
     
    row = titleData + " " + typeData + " " + stars + " " + dateData + " " +"<button onclick='del_row(this)'>&#x2705</button>";
 
    localStorage.setItem("rowData",JSON.stringify(row));
    }
               
 }

function del_row(x){
    console.log("It does come here.");
   var rowDel = x.parentElement.parentElement.remove();
    /*
    console.log(rowDel);
   // console.log(x.parentNode.nodeName);
    //var d = x.sectionRowIndex();
    alert(x.sectionRowIndex());
    document.getElementById("bodyData").deleteRow(rowDel);
    */
    
}

function toggleMode(){
    var h = document.getElementById("whole");
    var btn_txt = document.getElementById("mode").innerHTML;
    console.log(btn_txt);
    if (btn_txt == "DarkMode"){
        document.getElementById("mode").innerHTML = "LightMode";
        
        darkMode();
    }
    console.log(btn_txt);
    
    if (btn_txt == "LightMode"){
        document.getElementById("mode").innerHTML = "DarkMode";
        
        lightMode();
    }
     //localStorage.setItem("preferredMode",btn_txt);
}
       
function loadJSON(){
   var data_file = "data.json";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser may not support AJAX, or refresh cause something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){

      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        // My Entire JSON Object from data.json
        console.log(jsonObj);
		
		var feedWrapper = document.getElementById('article-feed');
		
		
		
		
		
		
		
		for (var key in jsonObj){
			console.log(jsonObj[key]);
			
			var articleImage = document.createElement('img');
		articleImage.setAttribute('src',jsonObj[key].imageUrl);	
		
		var articleHeader = document.createElement('h1');
		articleHeader.innerHTML = (jsonObj[key].title);
		
		var articleCaption = document.createElement('h2');
		articleCaption.innerHTML = (jsonObj[key].caption);
		
		var articleCredit = document.createElement('em');
		articleCredit.innerHTML = (jsonObj[key].credits);
		
		feedWrapper.appendChild(articleHeader);
		feedWrapper.appendChild(articleImage);
		feedWrapper.appendChild(articleCaption);
		feedWrapper.appendChild(articleCredit);
		
		}
      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();
}

//auto load loadJSON();
function initMap() 
	{
		// map options
		var options = {
			zoom: 14,
			center: {lat: 30.2457,lng:-97.7688}
		}
		// new map
		var map = new 
		google.maps.Map(document.getElementById('map'), options);
		// var mySpot = {lat:30.2918274,lng:-97.78914559999998};
		// var marker = new google.maps.Marker({
  //   	position: mySpot,
  //   	map: map
  // 		});
  // 		marker.addListener('click', function()
		//  {
		//  	infoWindow.open(map,marker);
		//  });
	
		// infoWindow = new google.maps.InfoWindow;
            // Try HTML5 geolocation.
            if (navigator.geolocation) 
            {
                navigator.geolocation.getCurrentPosition(function (position) 
                {
                    var pos = 
                    {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    var marker = new google.maps.Marker({
			    	position: pos,
			    	map: map
			    	
			  		});
			  		var infoWindow = new google.maps.InfoWindow({
		 				content:'<h1> current location </h1>'
		 			})
		 			marker.addListener('click', function()
		 {
		 	console.log('clicked');
		 	infoWindow.open(map,marker);
		 });
		 marker.setMap(map);
                    // infoWindow.setPosition(pos);
                    // infoWindow.setContent();
                    // infoWindow.open(map);
                    map.setCenter(pos);
                }, function () 
                {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } 
            else 
            {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }
            		// add marker array
            var markerss = [
         //    {

         //    	coords: { lat: position.coords.latitude,
         //                lng: position.coords.longitude },
                        
         //    	content: '<h1> current location </h1>'
        	// },

            {
		

                coords: { lat: 30.291163, lng: -97.787247 },
                content: '<h1>1</h1>'

         

            },


            

            {

                coords: { lat: 30.249140, lng: -97.736471},
                content: '<h1>2</h1>'
            

          

            },

            {

                coords: { lat: 30.263507, lng: -97.753170},
                content: '<h1>3</h1>'

                

             

            },

            {

                coords: { lat: 30.266909, lng: -97.772870},
                content: '<h1>4</h1>'
     

            }
            ];



            

            // marker.setMap(map);
		 for(var i = 0;i < markerss.length; i++)
		 {
		 	console.log(markerss[i]);
        	addMarker(markerss[i]);
        	console.log('this worksX');
      	}
		 
		
		 //add marker function
		 function addMarker(props)
		 {
		 	var marker = new google.maps.Marker({
				position:props.coords,
				map:map,
				icon:props.iconImage
			 });
			 //check for marker function
			 console.log('this works');
		 if(props.iconImage){
		 	//set icon image
		 	marker.setIcon(props.iconImage)
		 }
		 // check contant
		 if(props.content)
		 {
		 	console.log(props.content);
		 	var infoWindow = new google.maps.InfoWindow({
		 		content:props.content
		 	})
		 }
		 marker.addListener('click', function()
		 {
		 	console.log('clicked');
		 	infoWindow.open(map,marker);
		 });
		 marker.setMap(map);
	  }
        }
        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
            infoWindow.open(map);
        }
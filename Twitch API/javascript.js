 
    var following = [];
    var clientId = "mh7g90kt669yqwoxha1nfp483p6otl";
    var channelsUrl = "https://api.twitch.tv/kraken/channels/freecodecamp?client_id=mh7g90kt669yqwoxha1nfp483p6otl"
   
$(function(){
        
    
        var streams= ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];
    
    //JSON Call for freecodecamp stream
    $.getJSON("https://api.twitch.tv/kraken/streams/freecodecamp?client_id=mh7g90kt669yqwoxha1nfp483p6otl").done(function(data){
        if(data.stream === null){
            $("#fcc").html(" is OFFLINE!");
        } else {
            $("#fcc").html(" is ONLINE!");
        }
    });
    //iterate through var stream with nested ajax call
    for(var i=0; i<streams.length; i++){
        
       $.ajax({
           type:"GET",
           url: "https://api.twitch.tv/kraken/channels/" + streams[i],
           headers: {
           'client-ID':'mh7g90kt669yqwoxha1nfp483p6otl'
       },
           success: function(dataI){
               $.getJSON("https://api.twitch.tv/kraken/streams/"+dataI.name+"?client_id=mh7g90kt669yqwoxha1nfp483p6otl").done(function(data2){
             
                    var name=dataI.name;
                   /*var status = data2.stream.channel.status;
                   var game= data2.stream.channel.game;
                   var logo;*/
                
                 
                if(data2.stream === null){
                    
                        
                        $("#user").append('<a target="blank" href="https://www.twitch.tv/'+ name+'">' +name+ '</a><br>');
                        
                        $("#status").append('OFFLINE!<br>');
                        $("#game").append("N/A <br>");
                        
                    } else {
                        $("#user").append('<a target="blank" href="https://www.twitch.tv/'+ name+'">' +name+ '</a><br>');
                        $("#status").append('Online!<br>');
                        $("#game").append(dataI.game + '<br>');
                    }
                });
               
           },
           error: function(err){
              //alert("Error: User Not Found");
               
                $("#user").append('Invalid User <br>');
                        $("#status").append('Not Found!<br>');
                        $("#game").append("N/A <br>");
           }
           
       });
        
        
        
    }; 
});
    
    
  



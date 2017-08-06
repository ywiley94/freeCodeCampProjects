$(document).ready(function() {
    //When search is clicked run code
    $('#search').click(function(){
        //Gets search inputs
        var searchTerm= $("#searchTerm").val();
        
        //API url with searchTerm
        var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
        //Wikipedia API ajax call
        
        $.ajax({
            type: "GET",
            url:url,
            async:false,
            dataType: "json",
            success: function(data){
                //get heading, description, and link //from search term
                $("#output").html(' ');

            for(i=0;i<data[1].length; i++){
                $("#output").prepend("<li><a target='blank'class= 'list-group-item list-group-item-action flex-column align-items-start' href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li><hr>");
                
            }
                
            },
            error: function(errorMessage){
                alert('Error Alert');
            }
        });
        
    });
});
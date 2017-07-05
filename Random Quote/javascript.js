 var quotes = [
        '\" Everything has its beauty but not everyone sees it.\". - Confucius 551 BC - 479 BC',
        
        '\"Better be wise by the misfortunes of others than by your own.\". - Aesop (620 BC - 560 BC)',
        
        '\"Pleasure in the job puts perfection in the work.\" - Aristotle (384 BC - 322 BC)',
        
        '\"A happy life consists in tranquillity of mind.\" - Cicero (106 BC - 43 BC)', 
        
        '\" Talk sense to a fool and he calls you foolish.\" ― Euripides (484 BC - 406 BC)',
        
        '\" Be a craftsman in speech that thou mayest be strong, for the strength of one is the tongue, and speech is mightier than all fighting.\" - Maxims of Ptahhotep, 3400 B.C.',
        
        '\"The mind ought sometimes to be diverted that it may return the better to thinking.\" ― Phaedrus (15 BC - 50 AD)'
    ];


    

    


function newQuote() {
   
    
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
    
   
$(".twitter-share-button").click(function(){
    $('a').attr("href", 'https://twitter.com/intent/tweet?text=' + quotes[randomNumber] );
  });

    
};
     




<!DOCTYPE html>
<html>
    <head>
        <title id>Guess That Lyric!</title>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="scripts.js?<?php echo rand(); ?>"></script>

        <link rel="stylesheet" type="text/css" href="styles.css?<?php echo rand(); ?>" />
    </head>

    <h1 id="title">Guess That Lyric!</h1>
   
   <body>
 
 
 
    <svg width="2000" height="525">
        <rect width="600" height="250" x="575" y="150" fill="#ccffff" stroke="black" stroke-width="5px"/>
        <text class="lyrics" id="line1" x="600" y="200" fill="black">His palms are sweaty</text>
        <text class="lyrics" id="line2" x="600" y="275" fill="black">knees weak</text>
        <text class="lyrics" id="line3" x="600" y="350" fill="black">arms are heavy</text>
    
    <div class="message">
    <text id="message" x="775" y="100"></text>
    </div>        
    
    </svg>




    <div class="picture">
        <img src="https://images.8tracks.com/cover/i/002/852/420/legends-401.jpg?rect=50,0,404,404&amp;q=98&amp;fm=jpg&amp;fit=max"
            height="500" width="1000" x="100" y="300">
    </div>
        
    <div class="guess">
    Guess Song:<br>
    <input type="text" id="guess" name="guess" size="50" align="center"><br>
    </div>
    
    <div class="checksong">
    <button onclick="checksong()">Check Song</button>
    </div>
    
    
    
    
    </body>
</html>



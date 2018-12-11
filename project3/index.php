<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script src="scripts.js?v=<$php echo rand(); $>"></script>
    <script>document.write('<link rel="stylesheet" type="text/css" href=styles.css?v="' + Math.floor(Math.random() * 1000) + '" />');</script>
</head>
<body>

        <h1>Equation Calculator</h1>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Circle-withsegments.svg/210px-Circle-withsegments.svg.png">
        
        
        
        <form>
            Radius: <input type="text" id="value1" name="value1" />
            <br />
            <button type="button" onclick="circumference()">Circumference</button>
         
        </form>

        Result: <span id="result"></span>

 
</body>
</html>




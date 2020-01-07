<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="feed.js"></script>

        <link rel="icon" href="#">
        <title>Bus preview</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="bus.css" />    
    </head>

    <body onload="previewalert()">
        <div>
            <a href="bus.html"><button>Go home</button></a>
        </div>
        Source
        <div id="pdestination">

        </div>
        Destination:
        <div id="psource">

        </div>
        No of Passengers:
        <div id="pcount">

        </div>
        Names:
        <div id="pnames">

        </div>
        <div>
            <button onclick="confirm()">Confirm</button>
        </div>
    </body>
</html>
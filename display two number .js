<html>
    <link rel="stylesheet" href="style.css">
<body>
    <div>
        First Number : <br>
        <input type="text" id="text1">
        <br>
        Second Number : <br>
        <input type="text" id="text2">
        <br>
        Result : <br>
        <input type="text" id="res">
        <br>
        <input type="button" value="Display Result" onclick="addNumber()">
    </div>

        <script>

            function addNumber(){
                var f_num = parseInt(document.getElementById("text1").value);
                var s_num = parseInt(document.getElementById("text2").value);

                var sum = f_num + s_num;

                document.getElementById("res").value = sum;  

            }
        </script>
    </body>
</html>

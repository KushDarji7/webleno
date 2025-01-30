<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="main.css" />
    <title>Assignment 2 PHP NO forms</title>


</head>

<body>
    <br>
    <div class="part1">

        Part 1 <br> isBitten function <br>
        <?php

        function isBitten()
        {

            $p1 = "Charlie bit my finger!";
            $p2 = "Charlie did not bite my finger";
            $chance = rand(1, 2);
            if ($chance == 1) {

                echo $p1 . "<br>";
            } else {
                echo $p2 . "<br>";
            }

            return;
        }

        echo isBitten();

        ?>

    </div>

    <br>
    <div class="part2">
        Part 2

        <?php


        function Checkerboard($size)
        {
            //makes sure that the checker board is actually a checkerboard with any input
            if ($size < 3) {
                echo "invalid input <br> input must be an odd number greater than 3";
                exit;
                //if the user gives a even number than fix size parameter by increasing the size
            } elseif ($size % 2 == 0) {
                $size = $size + 1;
            }
            $count = 0;

            echo '<table style="width:300px" border="1px" cellspacing="1px" cellpadding="1px"  >';
            for ($i = 0; $i < $size; $i++) {
                echo "<tr>";
                for ($j = 0; $j < $size; $j++) {
                    $count = $count + 1;

                    if ($count % 2 == 0) {
                        echo '<td height="35px" width="35px" style="background-color:red;"></td>';
                    } else {
                        echo '<td height="35px" width="35px" style="background-color:black;"></td>';
                    }
                }
            }

            echo "</tr>";
            echo "<br> Checkerboard of size: " . $size;
        }

        echo "</table></html>";


        echo Checkerboard(6);
        ?>
        <br>
    </div>

    <br>

    <div class="part3">

        Part 3
        <br>
        1. Print in order
        <br>
        <?php
        function part3(){

            $month = array(
                'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December'
            );
            
            
            echo "#1";
            
            for ($i = 0; $i < sizeof($month); $i++) {
                echo "$month[$i] <br>";
            }
            
            echo "#2";
            
        }
         echo part3();   
        
        ?>

    </div>

</body>

</html>
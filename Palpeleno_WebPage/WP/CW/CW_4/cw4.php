<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>PHP class work 04 exercises part 1 </title>
</head>

<body>

    <?php
    echo "My first PHP script!";
    echo "<br>";

    echo "php is out dated and ugly <br> Kush Darji <br> CW4 ";
    ?>

    <br>


    <p>
        Exercise 1: Function 
        <?php
        echo "<br> Hello World!";
        ?>

        Exercise 2: Loops
        <br>

        <?php

        for ($i = 1; $i <= 5; $i++) {
            for ($j = 1; $j <= $i; $j++) {
                echo "*";
            }
            echo "<br>";
        }
        ?>

        <br>

        Exercise 3: Function
       
        <br>

        <?php
        function triangle($size)
        {

            for ($i = 1; $i <= $size; $i++) {
                for ($j = 1; $j <= $i; $j++) {
                    echo "*";
                }
                echo "<br>";
            }
        }

        echo triangle(5);

        ?>
        <br>
        Exercise 4: Function word_count
        
        <?php
        function word_count($string)
        {
            $count = 0;
            $space = 0;
            $wordcount = 1;
            $add = $space;
            $i = 0;

            while ($i < strlen($string)) {
                // if a space, new line or, tabed 
                if ($string[$i] == " " || $string[$i] == "<br>")
                    $add = $space;

                else if ($add == $space) {
                    //update wordcount
                    $add = $wordcount;
                    ++$count;
                }
                ++$i;
            }
            echo "$string" , "<br> word count is";
            return $count;
            echo "<br>";

        }

        $string = "Hello, how are you";
        echo "Words: " . word_count($string);

        ?>


        <br>
        <br>
        Exercise 5: Function countWords
       <br>

        <?php
        function countWords($string)
        {

            $splitstring = explode(" ", $string);
            //print_r($splitstring);

            $wordcountarray = array();
            foreach ($splitstring as $word => $word_count) {
                if (array_key_exists($word_count, $wordcountarray)) {
                    //adds value to key if word exist
                    $wordcountarray[$word_count] += 1;
                } else {
                    // if key not in array hash initialize value as 1
                    $wordcountarray[$word_count] = 1;
                }
            }
            print_r($wordcountarray);
            echo "<br>";

        }

        $string = strtolower("Hello hello you there. Hello How are you doing today?");
        countWords($string);

        ?>

        <br>

        Exercise 6: Function remove_all
       <br>
        <?php

        function remove_all($string, $badchar)
        {

            $string = strtolower($string);
            //new String
            $a = "";
            //go through string
            for ($i = 0; $i < strlen($string); $i++) {
                # code...
                //adds characters that are not bad char to new string
                if ($string[$i] != $badchar[0])
                    # code...
                    $a .= $string[$i];
            }
            echo "$string", "<br>char to remove is:  ", "$badchar", "<br> result: ";
            return $a;
            echo "<br>";

        }
       
        $string = remove_all("summer is herE", "e");
        echo $string;

        ?>
    </p>



</body>

</html>
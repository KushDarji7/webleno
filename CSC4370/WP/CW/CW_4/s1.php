<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Random Number</title>
</head>

<body>

    <p>Generating a random number between 1 and 10:
        <?php
        echo "<br>";

        //sample 1


        echo rand(1, 10);

        ?>
    </p>

    //sample 2
    <br>
    <?php


    //defining the variables 
    $text = "Hello, World!";

    $num1 = 10;

    $num2 = 20;

    //echoing the variables 
    echo $text . "<br>";

    echo $num1 . "+" . $num2 . "=";

    echo $num1 + $num2, "<br>";
    ?>


    <?php

    // sample 3
    // PHP code to illustrate the  
    // array_diff_assoc() function 

    // Input Arrays 
    $array1 = array(
        "10" => "RAM", "20" => "LAXMAN", "30" => "RAVI",
        "40" => "KISHAN", "50" => "RISHI"
    );
    $array2 = array(
        "10" => "RAM", "70" => "LAXMAN",
        "30" => "KISHAN", "80" => "RAGHAV"
    );
    $array3 = array("30" => "LAXMAN", "80" => "RAGHAV");

    print_r(array_diff_assoc($array1, $array2, $array3));

    ?>

    The declaration of a user-defined function start with the word function, followed by the name of the function you want to create followed by parentheses i.e. () and finally place your function's code between curly brackets {}.

    This is a simple example of an user-defined function, that display today's date:

    <?php
    // Defining function
    function whatIsToday()
    {
        //echo "Today is " . date('l', mktime();
    }
    // Calling function
    whatIsToday();
    ?>



    A function name must start with a letter or underscore character not with a number, optionally followed by the more letters, numbers, or underscore characters. Function names are case-insensitive.



    Functions with Parameters

    <?php
    // Defining function
    function getsum1($num1, $num2)
    {
        $sum = $num1 + $num2;
        echo "Sum of the two numbers $num1 and $num2 is : $sum";
    }

    // Calling function
    getSum1(10, 20);
    ?>


    Functions with Optional Parameters and Default Values

    <?php
    // Defining function
    function customFont($font, $size = 1.5)
    {
        echo "<p style=\"font-family: $font; font-size: {$size}em;\">Hello, world!</p>";
    }

    // Calling function
    customFont("Arial", 2);
    customFont("Times", 3);
    customFont("Courier");
    ?>



    Returning Values from a Function #1
    A function can return a value back to the script that called the function using the return statement. The value may be of any type, including arrays and objects.

    <?php
    // Defining function
    function getSum($num1, $num2)
    {
        $total = $num1 + $num2;
        return $total;
    }

    // Printing returned value
    echo getSum(5, 10); // Outputs: 15
    ?>


    Returning Values from a Function #2
    <?php
    // Defining function
    function divideNumbers($dividend, $divisor)
    {
        $quotient = $dividend / $divisor;
        $array = array($dividend, $divisor, $quotient);
        return $array;
    }

    // Assign variables as if they were an array
    list($dividend, $divisor, $quotient) = divideNumbers(10, 2);
    echo $dividend;  // Outputs: 10
    echo $divisor;   // Outputs: 2
    echo $quotient;  // Outputs: 5
    ?>

    Passing Arguments to a Function by Reference

    <?php
    /* Defining a function that multiply a number
by itself and return the new value */
    function selfMultiply(&$number)
    {
        $number *= $number;
        return $number;
    }

    $mynum = 5;
    echo $mynum; // Outputs: 5

    selfMultiply($mynum);
    echo $mynum; // Outputs: 25
    ?>

    Understanding the Variable Scope

    <?php
    // Defining function
    function test()
    {
        $greet = "Hello World!";
        echo $greet;
    }

    test(); // Outputs: Hello World!

    echo $greet; // Generate undefined variable error
    ?>

    //Similarly, if you try to access or import an outside variable inside the function,
    //you'll get an undefined variable error, as shown in the following example:

    Understanding the Variable Scope - variable declared inside the function is not accessible

    <?php
    $greet = "Hello World!";

    // Defining function
    function test2()
    {
        global $greet;
        echo $greet;
    }

    test2(); // Outpus: Hello World!
    echo $greet; // Outpus: Hello World!

    // Assign a new value to variable
    $greet = "Goodbye";

    test(); // Outputs: Goodbye
    echo $greet; // Outputs: Goodbye
    ?>


    //Variable Scope is not being rendered outside of the scope
    // scope is limited

    <?php

    // Defining function
    function test1()
    {
        $greet = "Hello World!";
        echo $greet;
    }

    test1();  // Generate undefined variable error

    echo $greet; // Outputs: Hello World!
    ?>

    Creating Recursive Functions _arrays

    <?php
    // Defining recursive function
    function printValues($arr)
    {
        global $count;
        global $items;

        // Check input is an array
        if (!is_array($arr)) {
            die("ERROR: Input is not an array");
        }

        /*
    Loop through array, if value is itself an array recursively call the
    function else add the value found to the output items array,
    and increment counter by 1 for each value found
    */
        foreach ($arr as $a) {
            if (is_array($a)) {
                printValues($a);
            } else {
                $items[] = $a;
                $count++;
            }
        }

        // Return total count and values found in array
        return array('total' => $count, 'values' => $items);
    }

    // Define nested array
    $species = array(
        "birds" => array(
            "Eagle",
            "Parrot",
            "Swan"
        ),
        "mammals" => array(
            "Human",
            "cat" => array(
                "Lion",
                "Tiger",
                "Jaguar"
            ),
            "Elephant",
            "Monkey"
        ),
        "reptiles" => array(
            "snake" => array(
                "Cobra" => array(
                    "King Cobra",
                    "Egyptian cobra"
                ),
                "Viper",
                "Anaconda"
            ),
            "Crocodile",
            "Dinosaur" => array(
                "T-rex",
                "Alamosaurus"
            )
        )
    );

    // Count and print values in nested array
    $result = printValues($species);
    echo $result['total'] . ' value(s) found: ';
    echo implode(', ', $result['values']);
    ?>


</body>

</html>
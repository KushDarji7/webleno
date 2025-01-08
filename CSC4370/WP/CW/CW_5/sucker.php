<? ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" <html xml:lang="en" lang="en">

<head>
    <title>Form Data</title>
</head>

<body>

    <h1>Raw Form Data</h1>
    <pre>
        <?php
        print_r($_POST);  // this prints the associative array for debugging
        ?>
    </pre>

    <!-- Extract each form item from posted data -->

    <h1>Form input values</h1>

    <p>Your Name: <?php print $_POST["visitor_name"] ?></p>
    <p>Password: <?php print $_POST["password"] ?></p>
    <p>License accepted: <?php print $_POST["licenseOK"] ?></p>
    <p>Account type: <?php print $_POST["account_type"] ?></p>
    <p>Options: <?php print_r($_POST["options"])?></p>
    <p>Operating system: <?php print $_POST["system"] ?></p>
    <p>Remarks: <?php print $_POST["remarks"] ?></p>

    <!-- Run thru all elements of the array of posted data -->

    <h1>All Form Data</h1>

    <?php
    $arr_string = "";
    foreach ($_POST["options"] as $key => $value) {
        $arr_string .= $value . " ,";
        $options_string = rtrim($arr_string, ", ");
    }
    ?>
    <p>options: <?php print $options_string; ?> </p>

</body>

</html>
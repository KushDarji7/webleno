<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="nerdluv.css" />

    <title>matches submit</title>


</head>

<body>

    <?php



    /* Get all singles */
    $singles = file("./singles.txt");

    /* Find and get user */
    $user_info_line = '';
    for ($i = 0; $i < count($singles); $i++) {
        $user_info_line = strstr($singles[$i], $_GET["name"]);
        if ($user_info_line !== FALSE) {
            break;
        }
    }

    $user_info = explode(",", $user_info_line);

    $user_gender = $user_info[1];
    $user_age = (int)$user_info[2];
    $user_personality = $user_info[3];
    $user_os = $user_info[4];
    $user_min_seek = (int)$user_info[5];
    $user_max_age = (int)$user_info[6];

    /* get opposite gender */
    $match_gender = '';
    if (strcmp($user_gender, 'M') === 0) {
        $match_gender = 'F';
    } else {
        $match_gender = 'M';
    }


    $matches = array();

    /* Get matches */
    ?>
    <div>
        <?php
        $is_first = true;
        for ($i = 0; $i < count($singles); $i++) {
            /* Get others info */
            $other_info_array = explode(",", $singles[$i]);
            $other_gender = $other_info_array[1];
            $other_age = (int)$other_info_array[2];
            $other_personality = $other_info_array[3];
            $other_os = $other_info_array[4];
            $other_min_seek = (int)$other_info_array[5];
            $other_max_seek = (int)$other_info_array[6];

            /* Check gender */
            if (strcmp($match_gender, $other_gender) === 0) {

                /* Check age compatibility */
                $user_matches_others_choice = NULL;
                $other_matches_users_choice = NULL;

                if ($other_min_seek <= $user_age && $user_age <= $other_max_seek)
                    $user_matches_others_choice = TRUE;

                if ($user_min_seek <= $other_age && $other_age <= $user_max_age)
                    $other_matches_users_choice = TRUE;

                /* Check favorite OS */
                if ($user_matches_others_choice && $other_matches_users_choice) {
                    if (strcmp($user_os, $other_os) === 0) {

                        /* At least one personality type in common */
                        $inRegex = "/[" . $user_personality . "]/";
                        if (preg_match($inRegex, $other_personality) === 1) {
                            $matches[] = $singles[$i];

                            if ($is_first) {
        ?>
                                <strong>Matches for <?= $_GET["name"] ?></strong><br>
                            <?php
                                $is_first = false;
                            }
                            ?>
                            <div class="match">
                                <img src="./img/user.jpg" alt="photo" />
                                <div>
                                    <ul>
                                        <li>
                                            <p><?= $other_info_array[0] ?></p>
                                        </li>
                                        <li><strong>gender:</strong> <?= $other_gender ?></li>
                                        <li><strong> age:</strong> <?= $other_age ?> </li>
                                        <li><strong> type:</strong> <?= $other_personality ?> </li>
                                        <li><strong> OS:</strong> <?= $other_os ?></li>
                                    </ul>
                                </div>
                            </div>
        <?php
                        }
                    }
                }
            }
        }
        ?>
    </div>

    <?php
    if (count($matches) === 0) {
    ?>
        <div> No match is found. </div>
    <?php
    }
    ?>

    <div>
        <p>
            This page is for single nerds to meet and date each other! Type in your personal information and wait for the nerdly luv to begin! Thank you for using our site.
        </p>

        <p>
            Results and page (C) Copyright NerdLuv Inc.
        </p>

        <ul>
            <li>
                <a href="https://codd.cs.gsu.edu/~kdarji1/WP/HW/HW4/index.html">
                    <img src="./img/back.gif" alt="icon" />
                    Back to front page
                </a>
            </li>
        </ul>
    </div>

    <div id="w3c">
        <a href="https://validator.w3.org/">
            <img src="./img/w3c-xhtml.png" alt="Valid HTML" />
        </a>
        <a href="https://validator.w3.org/">
            <img src="./img/w3c-css.png" alt="Valid CSS" />
        </a>
    </div>

</body>

</html>
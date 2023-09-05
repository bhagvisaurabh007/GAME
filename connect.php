<?php
print_r($_POST);
if (isset($_POST['login']) && isset($_POST['password'])) {
    // handle login and password form
    $login = $_POST['login'];
    $password = $_POST['password'];
    $conn = new mysqli('localhost', 'root', '', 'contactus');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $stmt = $conn->prepare("insert into logindata (login, password) values (?,?)");
    $stmt->bind_param("ss", $login, $password);
    $success = $stmt->execute();
    if ($success) {
        // Redirect back to index.html with success message
        header('Location: index.html?login=1');
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
    $conn->close();
}
if (isset($_POST['fname']) && isset($_POST['email']) && isset($_POST['message'])) {
    // handle contact form
    $name = $_POST['fname'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $conn = new mysqli('localhost', 'root', '', 'contactus');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $stmt = $conn->prepare("insert into contact (name, email, message) values (?,?,?)");
    $stmt->bind_param("sss", $name, $email, $message);
    $success = $stmt->execute();
    if ($success) {
        // Redirect back to index.html with success message
        header('Location: index.html?success=1');
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
    $conn->close();
}
?>
?>
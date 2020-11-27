<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/var/www/mbbsabroadedu.com/PHPMailer/src/Exception.php';
require '/var/www/mbbsabroadedu.com/PHPMailer/src/PHPMailer.php';
require '/var/www/mbbsabroadedu.com/PHPMailer/src/SMTP.php';

		$mail = new PHPMailer(true);
		// error_reporting(-1);
		// ini_set('display_errors', 'On');
        $mail->SMTPDebug = 0;
		$mail->IsSMTP(true); // SMTP

        $mail->Host = 'email-smtp.ap-south-1.amazonaws.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'AKIATKTAEJJEKZDQFINQ';
        $mail->Password = 'BH1drJoRxFOEMSWtNsvUWyBQ0Kqbvjb5i3228pKfyvhL';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        $mail->setFrom('contact@becindia.org', 'BEC India');
	    $mail->isHTML(true);    

	//////   ABOVE CODE WOULD BE SAME FOR ALL FORMS/DOMAIN from your AWS ADDED BY WEBX  /////////


	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$phone=$_POST['phone'];
        $email=$_POST['email'];
		$city= $_POST['city'];
		$course=$_POST['course'];
		$services=$_POST['services'];
		$msg=$_POST['msg'];

		$to="info.bissav@gmail.com"; // Receiver Email ID, Replace with your email ID
		$subject='Register';
		$message="Name :".$name."\n"."Phone :".$phone."\n"."Email id : ".$email."\n"."Country : ".$services."\n"."Course :".$course."\n"."city :".$city."\n"."Message:"."\n".$msg;


 		// FORMATING CUSTOMISED TEXT FOR EACH FORM
		$mail->addAddress($to);
		$mail->addReplyTo($email, $name);
		$mail->Subject = $subject;
        $mail->Body = $message;
 
		try {
            $mail->send();
			header('Location: index.html');
        } catch (Exception $e) {
            echo "Contact by other medium Mail sending failed ! PHPMailer Error: {$mail->ErrorInfo}";
        }


 
	}
?>

	function validatereg(f) {
		if(f.firstName.value.length==0) {
			alert("please enter your first name with more than 0 characters");
			return false;
		}
		if(f.lastName.value.length==0) {
			alert("please enter your last name with more than 0 characters");
			return false;
		}
		
		var possible = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;
		if (!possible.test(f.emailId.value)) {
		    alert("Please provide a valid email address in the format xxxx@gmail.com");
		    return false;
		}
		if(f.password.value.length<6) {
			alert("please enter your password with more than 6 characters");
			return false;
		}
		if(f.repassword.value!=f.password.value){
                alert("Password and confirm password do not match");
                return false;

               }
		var phno= /^\d{10}$/;
		if(!phno.test(f.phNo.value)) {
			alert("Please enter valid phonenumber with only 10 digits");
			return false;
		}
                
else{
alert("Registration Successful!!");
}
		}
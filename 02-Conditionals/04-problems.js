// You are at a E-Commerce Site
// At the time of Checkout
/*
* Verify their email
* Verify their loginstatus
* Verify their cardInfo
only then Checkout successful
otherwise Check your Email, Login, Cardinfo
*/


// Login Pages
// Check if user is logging from one of these:
/**
 * Email
 * Facebook
 * Gmail
 * If any of login detail are available then Login Success otherwise register
 */



let isEmailVerified = true;
let isLoggedin = false;
let isCardVerified = true;




if(isEmailVerified && isLoggedin && isCardVerified) {
    console.log('Verification successful');
} else {
    console.log('please check your email, login or cardinfo');
}
let password = 'password';

password.length >= 12 
  ? console.log('password is very strong so WELCOME') 
: password.length >= 8 ? console.log('password is ok') 
: console.log('password is tooshortttt');


if (password.length >= 12) {
console.log('password is very strong so WELCOME');
} else if (password.length >= 8) {
console.log('password is ok');
} else {
console.log('password is tooshortttt');
}

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const detail = document.getElementById('detail');
//add Event Listener Or Form Container...
const submit = document.getElementsByClassName('body-container')[0];

submit.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let ebody = `
  <b>Name : </b>${fname.value}&nbsp;${lname.value}
  <br>
  <br>
  <b>Email : </b>${email.value}
  <br>
  <br>
  <b>Detail Masalah : </b>${detail.value}
  <br>
  `;
  
  //Email Code Here...
  Email.send({
    SecureToken : "99689145-9449-4a33-870e-2a2adc4df3c2",
    To : 'akunobbrow@gmail.com',
    From : "akunobbrow@gmail.com",
    Subject : "Email From " + email.value,
    Body : ebody
}).then(
  message => alert(message)
  );
});
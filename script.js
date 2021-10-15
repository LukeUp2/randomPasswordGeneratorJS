const button = document.getElementById('button');
const copy = document.getElementById('buttonCopy');
const input = document.getElementById('password');
const passwordLength = 12;
const allChars = [];

for(let i=32; i<127; i++){
  allChars.push(String.fromCharCode(i));
}


const generateRandomPassword = () => {
  console.log('generating...');
  console.log(allChars);
  let newPassword = '';

  for(let i = 0; i < passwordLength; i++){
    newPassword += allChars[Math.floor(Math.random() * allChars.length)]
  }
  input.value = newPassword
}

const copyPassword = () => {
  console.log('Coping...')

  input.select();
  input.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(input.value)
}

button.addEventListener('click', generateRandomPassword);
copy.addEventListener('click', copyPassword)
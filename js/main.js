let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector ('.sidebar')

menuToggle.addEventListener('click', function (event){
  event.preventDefault();
  menu.classList.toggle('visible')
})

//workshop Glo academy

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');
const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');

const listUsers = [
  {
    id: '01',
    email: 'revekka.doronina@gmail.com',
    password: '644944',
    displayName: 'BekkyD'
  },
  {
    id: '02',
    email: 'doroninaavigeja@gmail.com',
    password: '93654',
    displayName: 'V55V'
  }
];

const setUsers = {
  user: null,
  logIn(email, password, handler) {
  const user = this.getUser(email);
  if (user && user.password === password) {
    this.authorizedUser (user)
    handler();
  } else {
    alert('Пользователь с такими данными не найден')
  }
  },
  logOut() {
    console.log('выход')
  },
  signUp(email, password,handler) {

    if (!email.trim() || !password.trim()) {
      alert('Введите данные')
      return;
    }

    if (!this.getUser(email) ){
      const user = {email, password, displayName: email};
      listUsers.push(user);
      this.authorizedUser (user)
      handler();
    } else {
      alert('Пользователь с таким email уже зарегистрирован')
    }
  },
  getUser(email) {
    return listUsers.find(item => item.email === email)
  },
  authorizedUser(user) {
    this.user = user;
  }
};
const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user:', user);

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
  }
};
loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
  loginForm.reset();
});
loginSignup.addEventListener('click', event => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom);
  loginForm.reset();
});



toggleAuthDom();


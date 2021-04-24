export const HandleSigninPopUp = () => {
  let SignInButton = document.querySelector(".sign-in-button");
  let App = document.querySelector(".App");
  let AppFrontWrapper = document.querySelector(".AppFrontWrapper");
  let HomeSignInWrapper = document.querySelector(".home-sign-in-wrapper");

  function ShowSignInForm(e) {
    AppFrontWrapper.style.height = `${App.offsetHeight + 60}px`;

    HomeSignInWrapper.style.display = `flex`;
  }

  SignInButton.addEventListener("click", ShowSignInForm);
};

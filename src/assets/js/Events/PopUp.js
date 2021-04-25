export const HandleSigninPopUp = () => {
  let SignInButton = document.querySelector(".sign-in-button");
  let App = document.querySelector(".App");
  let AppFrontWrapper = document.querySelector(".AppFrontWrapper");
  let HomeSignInWrapper = document.querySelector(".home-sign-in-wrapper");
  let LoginOption = document.querySelector(".login-option");
  let HomeLogInWrapper = document.querySelector(".home-login-wrapper");
  let LoginBackButton = document.querySelector(".login-back-btn");
  let SearchButton = document.querySelector(".search-header-icon");
  let HomeSearchWrapper = document.querySelector(".home-search-wrapper");

  function ShowAuthForm(e, AuthWrapper) {
    AppFrontWrapper.style.height = `${App.offsetHeight + 60}px`;

    AuthWrapper.style.display = `flex`;
  }
  function HideAuthForm(e, AuthWrapper) {
    AppFrontWrapper.style.height = `${0}px`;

    AuthWrapper.style.display = `none`;
  }

  SignInButton.addEventListener("click", (e) =>
    ShowAuthForm(e, HomeSignInWrapper)
  );

  LoginOption.addEventListener("click", (e) =>
    ShowAuthForm(e, HomeLogInWrapper)
  );

  LoginBackButton.addEventListener("click", (e) =>
    HideAuthForm(e, HomeLogInWrapper)
  );
  SearchButton.addEventListener("click", (e) =>
    ShowAuthForm(e, HomeSearchWrapper)
  );
};

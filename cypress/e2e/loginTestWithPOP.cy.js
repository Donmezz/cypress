import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

const LoginPage = new Login();
const HomePage = new Home();

describe("Page object example", () => {
    it("Login & Logout Test", () => {
        // visit page
        LoginPage.navigate();

        // check inputs
        LoginPage.validateInputs();

        // type user email & password
        LoginPage.typeUserEmailAndPassword("user888@gmail.com", "1234567890");

        // submit login
        LoginPage.submitLogin();

        // open menu
        HomePage.openMenu()

        // logOut
        HomePage.logOut()

        // validate url
        LoginPage.validateLoginUrl()
    });
});


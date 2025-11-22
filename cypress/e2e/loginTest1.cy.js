describe("Test №1 - user888 ile giriş testi", () => {
  it("LMS sitesine giriş yapar ve çıkış yapar", () => {
    cy.visit("https://www.edu.goit.global/account/login");

    cy.login("user888@gmail.com", "1234567890");
  });
});

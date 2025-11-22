describe("Test №2 - testowyqa ile giriş testi", () => {
  it("LMS sitesine giriş yapar ve çıkış yapar", () => {
    cy.visit("https://www.edu.goit.global/account/login");

    cy.login("testowyqa@qa.team", "QA!automation-1");
  });
});

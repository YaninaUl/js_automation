describe("Test Suite2", () => {
  it("demoo test", function () {
    cy.visit("https://demoqa.com/");
    cy.get(".card").should("have.length", 6);
  });
});

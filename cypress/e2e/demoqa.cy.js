/// <reference types='cypress'/>

const cypressConfig = require("../../cypress.config");

describe("demoqa tests", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080); //to see the full screen
    cy.visit("https://demoqa.com/automation-practice-form");
  });
  it("to fill form", () => {
    cy.get("input#firstName")
      .should("have.attr", "placeholder", "First Name")
      .type("Yanina");
    cy.get("input#lastName")
      .should("have.attr", "placeholder", "Last Name")
      .type("Ul");
    cy.get("input#userEmail").type("test@test.test");
    cy.get("input#gender-radio-2").check({ force: true });
    cy.get("input#userNumber").type("297978487");
    cy.get("input#dateOfBirthInput").click();
    cy.get(".react-datepicker__year-select").select("1991");
    cy.get(".react-datepicker__month-select").select("July");
    cy.get("[class$=day--005]").click(); //class that ends as day--005
    cy.get("#subjectsInput").type("Commerce").type("{enter}");
    cy.get("#hobbies-checkbox-3").check({ force: true });
    //cy.get("#uploadPicture").click();
    cy.get("#currentAddress").type("test address");
    cy.contains("Select State").click({ force: true });
    cy.contains("Haryana").click({ force: true });
    cy.contains("Select City").click({ force: true });
    cy.contains("Panipat").click({ force: true });
    cy.get("#submit").click();
    cy.contains("Thanks for submitting the form").should("be.visible");
  });
});

describe("webtables", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://demoqa.com/webtables");
  });

  it("to add a new user", () => {
    cy.get("#addNewRecordButton").click();
    cy.get("div.modal-content").should("include.text", "Registration Form");
    cy.get("input#firstName").type("Yanina");
    cy.get("input#lastName").type("Ul");
    cy.get("input#userEmail").type("test@test.test");
    cy.get("input#age").type("32");
    cy.get("input#salary").type("2500");
    cy.get("input#department").type("IT");
    cy.get("button#submit").click();
    cy.get("div.rt-tr-group").should("contain.text", "test@test.test");
    cy.get("#searchBox").type("Yanina");
    //cy.get("div.rt-tr[role='row']:not(.-padRow)").should("have.length", 1);
    cy.get("span[title='Delete']").click();
    cy.contains("No rows found").should("be.visible");
    cy.get("rt-tbody div.rt-tr[role='row']:not(.-padRow)").should("not.exist");
  });
});

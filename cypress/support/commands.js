// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => {
  return cy.request({
    method: "POST",
    url: "/login",
    form: true,
    body: {
      email,
      password
    }
  });

  function RandomEmail() {
    var name = ["Jan", "Adam", "Janusz"];
    var surname = ["Kowalski", "Nowak", "Psikuta"];
    var rand_i = name[Math.floor(Math.random() * name.length)];
    var rand_n = surname[Math.floor(Math.random() * surname.length)];
    var number = Math.floor(Math.random() * 999);
    var randNameStr = rand_i.toString();
    var randSurnameStr = rand_n.toString();
    var randNumberStr = number.toString();
    var EmailAddress = randNameStr.concat(
      ".",
      randSurnameStr,
      randNumberStr,
      "@stxnext.pl"
    );
    return EmailAddress;
  }
});

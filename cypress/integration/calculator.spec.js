describe('Calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  });

  it('should update the display of the running total after clicking number buttons ', () => {
    cy.get('#number1').click();
    cy.get('#number4').click();
    cy.get('.display').should('have.text', '14');
  });

  it('should arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('have.text', '5');
  });

  it('should chain multiple operations together', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('.display').should('have.text', '2');
  });

  it('should display negative numbers', () => {
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-');
  });

  it('should display decimal positions', () => {
    cy.get('#number4').click();
    cy.get('#decimal').click();
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '.');
  });

  it('should display larger numbers with plus sign', () => {
    for (let i = 1; i < 7; i++) {
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#operator-multiply').click();
    }
    cy.get('.display').should('contain', '+');
  });

  it('should display null when dividing by zero', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', 'NULL');
  });
});

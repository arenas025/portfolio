describe('Test 1',()=>{

  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })
  //*Testing the page works
  it('The page works',()=>{
    cy.contains("Sergio Arenas")
  })



  //*Testing the tabs has to be shown
  it('Has to show the tabs',()=>{
    cy.get("#tabComponent-Experience");
    cy.get("#tabComponent-Skills");
    cy.get("#tabComponent-Projects");
  })
  



  //*Testing switching sections
  it("Has to show the content depend on the tab selected ", () => {
    const experience = cy.get("#tabComponent-Experience");
    const projects = cy.get("#tabComponent-Projects");
    const skills = cy.get("#tabComponent-Skills");
    
    experience.click()
    cy.get("#experience")
    cy.get("#portfolio").should('not.exist')
    cy.get("#skills").should("not.exist");


    projects.click()
    cy.get("#portfolio")
    cy.get("#experience").should("not.exist");
    cy.get("#skills").should("not.exist");


    skills.click();
    cy.get("#skills");
    cy.get("#experience").should("not.exist");
    cy.get("#portfolio").should("not.exist");
  });


  
  //*Testing the tabComponent styles when click on other tabs
  it("Has to switch the styles when switched ", () => {
    const experience = cy.get("#tabComponent-Experience");
    const projects = cy.get("#tabComponent-Projects");
    const skills = cy.get("#tabComponent-Skills");

    experience.click();
    cy.get(".active").should("contain", "Experience");
    cy.get("#tabComponent-Projects").should("not.have.class", "active");
    cy.get("#tabComponent-Skills").should("not.have.class", "active");

    projects.click();
    cy.get(".active").should("contain", "Projects");
    cy.get("#tabComponent-Experience").should("not.have.class", "active");
    cy.get("#tabComponent-Skills").should("not.have.class", "active");

    skills.click();
    cy.get(".active").should("contain", "Skills");
    cy.get("#tabComponent-Experience").should("not.have.class", "active");
    cy.get("#tabComponent-Projects").should("not.have.class", "active");
  });
})
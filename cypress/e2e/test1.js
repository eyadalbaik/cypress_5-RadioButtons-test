describe("log in" , ()=>{
    it ("test" , ()=>{

        cy.visit("https://codenboxautomationlab.com/practice/");
        

//  to select the first radio button based on the index 

//  cy.get('#radio-btn-example').find("input[type='radio']").eq(1).check()

// last element 

  cy.get('#radio-btn-example').find("input[type='radio']").last().check()


// first element

    // cy.get('#radio-btn-example').find("input[type='radio']").first().check()
  
    })
})

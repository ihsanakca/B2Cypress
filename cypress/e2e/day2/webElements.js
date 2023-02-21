///<reference types="cypress"/>

describe('Web Elements',()=>{
   
    it('First Test',()=>{
            //tag name
            cy.get('input')

            //by Id
            cy.get('#email')
            cy.get('#yourPassword')

            //class name
            cy.get('.credits')
            cy.get('.row.justify-content-center')

            //attribute name
            cy.get('[enctype]')

            //by attribute name and value
            cy.get('[for="email"]')

            //by class value
            cy.get('[class="row g-3 needs-validation"]')

            //by tagname and attribute value
            cy.get('form[class="row g-3 needs-validation"]')

            //by two different attributes or more
            cy.get('[for="email"][class="form-label"]')

            //contains
            cy.contains('Login').click;

            

        



    })


})
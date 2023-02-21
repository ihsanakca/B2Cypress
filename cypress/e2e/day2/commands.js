/**
 *  Parent commands always begin a new chain of commands.
 *  Even if you've chained it off of a previous command, parent commands will
    always start a new chain, and ignore previously yielded subjects.
 * * Examples of parent commands:
    cy.visit()
    cy.get()
    cy.request()
    cy.exec()
    cy.intercept()
 */
/**
 *  Child commands are always chained off of a parent command, or another
    child command.
 *  The previous subject will automatically be yielded to the callback function.
 * * Examples of child commands:
    .click()
    .trigger()
    .find()
    .should()
    .as()
 */
/**
 * * Examples of dual commands:
    cy.contains()
    cy.screenshot()
    cy.scrollTo()
    cy.wait()

    cy.dismiss() // no subject
    cy.get('#dialog').dismiss() // with subjec
 */

    //cypress reference type
///<reference types="cypress"/>

    //visit
    cy.visit('open url')
    cy.visit('url',{timeout:10000})

    cy.url().should('include',path)

    cy.get(loc).click //loc is reference locator
    cy.get(loc).should('be.visible')
    cy.get(loc).should('be.exist')
    
    cy.get(loc).should('not.be.visible')
    cy.get(loc).should('not.be.exist')

    cy.get('h1').should('have.text','should')
    cy.get('h2').should('have.text','Syntax')

    //parent to child and child to parent

    cy.get(loc).first()   //first child
    cy.get(loc).last()   //last child
    cy.get(loc).eq(3).click()  //3.childa git ve click yap

    cy.get(loc).next().click()  // bir sonrakine tıkla ... sonraki element var olamlı yoksa exception atar. true olmalı
    cy.go('back')//bir öncekine getirecektir (page or loc)

    cy.get('tbody tr').nextAll().click({multiple : true})//bütün table içine tıklamak için kullanılır.//loc olarak css kullanılıyor...

    cy.get(loc).prev().click()//previous one
    cy.get(loc).prevAll().click()

    //position handling
    cy.get(loc).click('top')
    cy.get(loc).click('bottom')
    cy.get(loc).click('topLeft')

    //hover handling
    cy.get(loc).trigger('mouseover').click()
    cy.get(loc).trigger('mouseup').click()
    cy.get(loc).trigger('mousedown').click()

    //login
    cy.get("#email").clear().type('sgezer@gmail.com')





























    



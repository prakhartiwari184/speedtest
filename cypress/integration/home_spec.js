let myApp = 'https://localhost:8444/enroll'
describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.visit(myApp)
	//cy.contains('Add a partner').click()
	cy.get('input[name=partner_name]').type('Ptiwari')
	cy.get('input[name=contact_fname]').type('Prakhar')
	cy.get('input[name=contact_lname]').type('Tiwari')
	cy.get('input[name=contact_email]').type('ptiwari@axway.com')
	cy.get('input[name=contact_phone]').type('12345784')
	cy.get('input[name=AS2_URL]').type('https://localhost')
	cy.get('input[name=partner_routing_ID]').type('ptiAs2')
	cy.contains('Register').click()
	cy.get('#content-message-action').click(10,30,{force:true})
	
	//cy.contains('Submit').click({ force: true })
	// change URL to match your dev URL
  })
})
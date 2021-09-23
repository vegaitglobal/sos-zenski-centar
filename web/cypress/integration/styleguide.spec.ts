describe('Styleguide', () => {
	it('Navigates to the styleguide', () => {
		cy.visit('/');

		cy.get('a').click();

		cy.url().should('include', '/styleguide');
	});

	it('Increments count', () => {
		cy.visit('/styleguide');

		cy.get('[data-cy="increment"]').click();
		cy.get('[data-cy="increment"]').click();
		cy.get('[data-cy="decrement"]').click();
		cy.get('[data-cy="count"]').contains('1');
	});
});

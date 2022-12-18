export class Menu {

	MENU_ITEMS = ':nth-child(1)> .oxd-main-menu-item > .oxd-text'

	changePage(pageName) {
		cy.get(this.MENU_ITEMS).contains(pageName).click()

	}
}
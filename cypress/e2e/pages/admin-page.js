export class AdminPage {

	//search function
	SEARCH_USERNAME_TEXTBOX = ':nth-child(2) > .oxd-input'
	SEARCH_NAME_TEXTBOX = '.oxd-autocomplete-text-input > input'
	SEARCH_NAME_AUTOCOMPLETE = '.oxd-autocomplete-dropdown'
	SEARCH_BUTTON = '.oxd-form-actions > .oxd-button--secondary'
	SEARCH_RESULT = '.orangehrm-horizontal-padding > .oxd-text'


	//user role dropdown
	SEARCH_ROLE_DROPDOWN = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
	SEARCH_ROLE_OPTION = '.oxd-select-option'
	SEARCH_ROLE_TEXT = '.oxd-table-row > :nth-child(3) > div'

	//status dropdown
	SEARCH_STATUS_DROPDOWN = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
	SEARCH_STATUS_OPTION = '.oxd-select-option'
	SEARCH_STATUS_TEXT = '.oxd-table-row > :nth-child(5) > div'

	//error
	INFO_TOAST_MESSAGE = '.oxd-toast'


	checkDefaultInputValues() {
		cy.get(this.SEARCH_USERNAME_TEXTBOX).should('have.value', '')
		cy.get(this.SEARCH_ROLE_DROPDOWN).should('contain', 'Select')
		cy.get(this.SEARCH_NAME_TEXTBOX).should('have.value', '')
		cy.get(this.SEARCH_STATUS_DROPDOWN).should('contain', 'Select')

	}

	nameAutocomplete() {
		cy.get(this.SEARCH_NAME_AUTOCOMPLETE).wait(3000).click()

	}

	searchResult(message) {
		cy.get(this.SEARCH_RESULT).should('contain', message)

	}

	selectOptionRole(option) {
		cy.get(this.SEARCH_ROLE_DROPDOWN).click()
		cy.contains(this.SEARCH_ROLE_OPTION, option).click()

	}

	checkSearchResultRole(role) {
		cy.get(this.SEARCH_ROLE_TEXT).should('contain', role)

	}

	selectOptionStatus(option) {
		cy.get(this.SEARCH_STATUS_DROPDOWN).click()
		cy.contains(this.SEARCH_STATUS_OPTION, option).click()

	}

	checkSearchResultStatus(status) {
		cy.get(this.SEARCH_STATUS_TEXT).should('contain', status)

	}

	checkSearchToastMessage(message) {
		cy.get(this.INFO_TOAST_MESSAGE, {
			timeout: 5000
		}).should('contain', message)

	}

	searchUsername(username) {
		cy.get(this.SEARCH_USERNAME_TEXTBOX).type(username)

	}

	searchName(name) {
		cy.get(this.SEARCH_NAME_TEXTBOX).type(name)

	}

	clickSearch() {
		cy.get(this.SEARCH_BUTTON).click({
			force: true
		})

	}

}
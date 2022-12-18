export class LoginPage {

	//login
	URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
	LOGIN_PAGE_TITLE = '.oxd-text--h5'
	USERNAME_TEXTBOX = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
	PASSWORD_TEXTBOX = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
	LOGIN_BUTTON = '.oxd-button'

	//login errors
	PAGE_TITLE = '.oxd-topbar-header-breadcrumb > .oxd-text'
	ERROR_LOGIN = '.oxd-alert-content > .oxd-text'
	ERROR_USERNAME_INPUT = ':nth-child(2) > .oxd-input-group > .oxd-text'
	ERROR_PASSWORD_INPUT = ':nth-child(3) > .oxd-input-group > .oxd-text'

	//reset password
	RESET_BUTTON = '.orangehrm-login-forgot > .oxd-text'
	RESET_P_TEXTBOX = '.oxd-input'
	RESET_BUTTON_SUBMIT = '.oxd-button--secondary'
	RESET_BUTTON_CANCEL = '.oxd-button--ghost'
	RESET_ER_USERNAME_INPUT = '.oxd-input-group > .oxd-text'
	RESET_SUCCESS_INFO = '.oxd-text--h6'

	//log out
	PROFILE_DROPDOWN = '.oxd-userdropdown-tab'
	LOGOUT_BUTTON = ':nth-child(4) > .oxd-userdropdown-link'


	login() {
		cy.visit(this.URL)
		cy.get(this.USERNAME_TEXTBOX).type('Admin')
		cy.get(this.PASSWORD_TEXTBOX).type('admin123')
		cy.get(this.LOGIN_BUTTON).click()

	}

	goToUrl() {
		cy.visit(this.URL)

	}

	enterUsername(username) {
		cy.get(this.USERNAME_TEXTBOX).type(username)

	}

	enterPassword(password) {
		cy.get(this.PASSWORD_TEXTBOX).type(password)

	}

	clickLogin() {
		cy.get(this.LOGIN_BUTTON).click()

	}

	checkValidLogin(title) {
		cy.get(this.PAGE_TITLE).should('contain', title)

	}

	checkInvalidLoginError() {
		cy.get(this.ERROR_LOGIN).should('contain', 'Invalid credentials')

	}

	checkInputErrorUsername() {
		cy.get(this.ERROR_USERNAME_INPUT).should('contain', 'Required')

	}

	checkInputErrorPassword() {
		cy.get(this.ERROR_PASSWORD_INPUT).should('contain', 'Required')

	}

	clickReset() {
		cy.get(this.RESET_BUTTON).click()

	}

	resetEnterUsername(username) {
		cy.get(this.RESET_P_TEXTBOX).type(username)

	}

	clickResetSubmit() {
		cy.get(this.RESET_BUTTON_SUBMIT).click()

	}

	clickResetCancel() {
		cy.get(this.RESET_BUTTON_CANCEL).click()

	}

	checkResetInputError() {
		cy.get(this.RESET_ER_USERNAME_INPUT).should('contain', 'Required')

	}

	checkResetSuccessInfo() {
		cy.get(this.RESET_SUCCESS_INFO).should('contain', 'Reset Password link sent successfully')

	}

	checkReturnToLoginPage() {
		cy.get(this.LOGIN_PAGE_TITLE).should('contain', 'Login')

	}

	logout() {
		cy.get(this.PROFILE_DROPDOWN).click()
		cy.get(this.LOGOUT_BUTTON).click()

	}

	checkEmptyInputs() {
		cy.get(this.USERNAME_TEXTBOX).should('have.value', '')
		cy.get(this.PASSWORD_TEXTBOX).should('have.value', '')

	}

}
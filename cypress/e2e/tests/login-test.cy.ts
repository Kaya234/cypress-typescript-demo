import { LoginPage } from "../pages/login-page.js"

const loginPage = new LoginPage()

const VALID_NAME = 'Admin'
const VALID_PASSWORD = 'admin123'

describe('Login Scenarios Tests - Login Page', () => {

	beforeEach(function() {
		loginPage.goToUrl()

	})

	describe('Login', () => {

		it('Test 1 - Without credentials', () => {
			loginPage.clickLogin()
			loginPage.checkInputErrorUsername()
			loginPage.checkInputErrorPassword()

		})

		it('Test 2 - Without email', () => {
			loginPage.enterPassword(VALID_PASSWORD)
			loginPage.clickLogin()
			loginPage.checkInputErrorUsername()

		})

		it('Test 3 - Without password', () => {
			loginPage.enterUsername(VALID_NAME)
			loginPage.clickLogin()
			loginPage.checkInputErrorPassword()

		})


		it('Test 4 - Valid credentials', () => {
			loginPage.enterUsername(VALID_NAME)
			loginPage.enterPassword(VALID_PASSWORD)
			loginPage.clickLogin()
			loginPage.checkValidLogin('Dashboard')

		})


		it('Test 5 - Invalid username', () => {
			loginPage.enterUsername('admi')
			loginPage.enterPassword(VALID_PASSWORD)
			loginPage.clickLogin()
			loginPage.checkInvalidLoginError()

		})

		it('Test 6 - Invalid password', () => {
			loginPage.enterUsername(VALID_NAME)
			loginPage.enterPassword('Admin123')
			loginPage.clickLogin()
			loginPage.checkInvalidLoginError()

		})

	})

	describe('Forgotten Password', () => {

		beforeEach(function() {
			loginPage.clickReset()

		})

		it('Test 1 - Click reset without username', () => {
			loginPage.clickResetSubmit()
			loginPage.checkResetInputError()

		})

		it('Test 2 - Click reset with username', () => {
			loginPage.resetEnterUsername('admin')
			loginPage.clickResetSubmit()
			loginPage.checkResetSuccessInfo()

		})

		it('Test 3 - Click cancel', () => {
			loginPage.clickResetCancel()
			loginPage.checkReturnToLoginPage()

		})
	})
})

describe('Logout Tests', () => {

	it('Test 1 - After logout, login inputs are empty', () => {
		loginPage.login()
		loginPage.logout()
		loginPage.checkEmptyInputs()

	})
})
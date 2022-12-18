import {
	Menu
} from "../pages/menu"
import {
	LoginPage
} from "../pages/login-page"
import {
	AdminPage
} from "../pages/admin-page"


// instances
const loginPage = new LoginPage()
const menuPage = new Menu()
const adminPage = new AdminPage()

// variables
const VALID_SEARCH_USERNAME = 'David.Morris'
const VALID_SEARCH_NAME = 'David Morris'


describe('Search Functionality Tests - Admin/User Management', () => {

	beforeEach(function() {
		loginPage.login()
		menuPage.changePage('Admin')

	})

	it('Test 1 - Default state', () => {
		adminPage.checkDefaultInputValues()

	})

	describe('Username Field', () => {

		it('Test 1 - Invalid username', () => {
			adminPage.searchUsername('David')
			adminPage.clickSearch()
			adminPage.searchResult('No Records Found')
			adminPage.checkSearchToastMessage('No Records Found')

		})

		it('Test 2 - Valid username (no capitals)', () => {
			adminPage.searchUsername('david.morris')
			adminPage.clickSearch()
			adminPage.searchResult('(1) Record Found')

		})

		it('Test 3 - Valid username (capitals)', () => {
			adminPage.searchUsername(VALID_SEARCH_USERNAME)
			adminPage.clickSearch()
			adminPage.searchResult('(1) Record Found')

		})
	})

	describe('User Role Dropdown', () => {

		it('Test 1 - Select option (ESS)', () => {
			adminPage.selectOptionRole('ESS')
			adminPage.clickSearch()
			adminPage.checkSearchResultRole('ESS')

		})

		it('Test 2 - Select option (Admin)', () => {
			adminPage.selectOptionRole('Admin')
			adminPage.clickSearch()
			adminPage.checkSearchResultRole('Admin')

		})
	})

	describe('Employee Name autocomplete Field', () => {

		it('Test 1 - Not use autocomplete', () => {
			adminPage.searchName(VALID_SEARCH_NAME)
			adminPage.clickSearch()

		})

		it('Test 2 - Use autocomplete', () => {
			adminPage.searchName(VALID_SEARCH_NAME)
			adminPage.nameAutocomplete()
			adminPage.clickSearch()
			adminPage.searchResult('(1) Record Found')

		})
	})

	describe('Status Dropdown', () => {

		it('Test 1 - Select option (Enabled)', () => {
			adminPage.selectOptionStatus('Enabled')
			adminPage.clickSearch()
			adminPage.checkSearchResultStatus('Enabled')

		})

		it('Test 2 - Select option (Disabled)', () => {
			adminPage.selectOptionStatus('Disabled')
			adminPage.clickSearch()
			adminPage.checkSearchToastMessage('Invalid Parameter')

		})
	})

	describe('Valid Search Combinations', () => {

		it('Test 1 - Username + Role', () => {
			adminPage.searchUsername(VALID_SEARCH_USERNAME)
			adminPage.selectOptionRole('ESS')
			adminPage.clickSearch()
			adminPage.searchResult('(1) Record Found')

		})

		it('Test 2 - Username + Role + Employee name', () => {
			adminPage.searchUsername(VALID_SEARCH_USERNAME)
			adminPage.selectOptionRole('ESS')
			adminPage.searchName(VALID_SEARCH_NAME)
			adminPage.nameAutocomplete()
			adminPage.clickSearch()
			adminPage.searchResult('(1) Record Found')

		})

		it('Test 3 - Username + Role + Employee name + Status', () => {
			adminPage.searchUsername(VALID_SEARCH_USERNAME)
			adminPage.selectOptionRole('ESS')
			adminPage.searchName(VALID_SEARCH_NAME)
			adminPage.nameAutocomplete()
			adminPage.selectOptionStatus('Enabled')
			adminPage.clickSearch()
			adminPage.searchResult('(1) Record Found')

		})
	})

	describe('Invalid Search Combinations', () => {

		it('Test 1 - OK Username + NOK Role', () => {
			adminPage.searchUsername(VALID_SEARCH_USERNAME)
			adminPage.selectOptionRole('Admin')
			adminPage.clickSearch()
			adminPage.searchResult('No Records Found')
			adminPage.checkSearchToastMessage('No Records Found')

		})

		it('Test 2 - OK Username + OK Role + NOK Employee name', () => {
			adminPage.searchUsername(VALID_SEARCH_USERNAME)
			adminPage.selectOptionRole('ESS')
			adminPage.searchName('d')
			adminPage.nameAutocomplete()
			adminPage.clickSearch()
			adminPage.searchResult('No Records Found')
			adminPage.checkSearchToastMessage('No Records Found')

		})

		it('Test 3 - OK Username + OK Role + OK Employee name + NOK Status', () => {
			adminPage.searchUsername(VALID_SEARCH_USERNAME)
			adminPage.selectOptionRole('ESS')
			adminPage.searchName(VALID_SEARCH_NAME)
			adminPage.nameAutocomplete()
			adminPage.selectOptionStatus('Disabled')
			adminPage.clickSearch()
			adminPage.checkSearchToastMessage('Invalid Parameter')

		})
	})

})
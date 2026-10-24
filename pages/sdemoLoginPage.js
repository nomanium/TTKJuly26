export class sdemoLoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.url = 'https://www.saucedemo.com/inventory.html'
        this.errorMsg = page.locator('[data-test="error"]')
        this.backpackImage = page.getByRole('image', { name: 'Sauce Labs Backpack' });

        this.bikeLightImage = page.getByRole('image', { name: 'Sauce Labs Bike Light' });
    }
async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    get homeUrl() {
        return this.url;
    }

     get errorMessage(){
        return this.errorMsg;
    }
}
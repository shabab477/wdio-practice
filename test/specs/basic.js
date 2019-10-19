
describe('testing therap in secure context', () => {
    it('should show title', () => {
        browser.url('/')
        var title = browser.getTitle()

        console.log(title)
    })

    it('should show browser version', () => {
        // TODO: Call url

        // TODO: Save browser version to variable using browser.capabilities.browserVersion

        // TODO: print version
    })
})
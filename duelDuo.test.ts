
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays choices DIV', async() => {
    const drawButton = await driver.findElement(By.id('draw'))
    const choicesDiv = await driver.findElement(By.id('choices'))

    drawButton.click()

    driver.sleep(1000)
    const choicesDisplayed = choicesDiv.isDisplayed();
    expect(choicesDisplayed).toBeTruthy();
})

test('Add to Duo button displays player-duo DIV', async() => {
    const duoButton = await driver.findElement(By.id('bot-btn'))
    const drawButton = await driver.findElement(By.id('draw'))
    const playerDuoDiv = await driver.findElement(By.id('player-duo'))

    drawButton.click()
    duoButton.click()

    const playerDuoDisplayed = playerDuoDiv.isDisplayed()
    expect(playerDuoDisplayed).toBeTruthy()
})
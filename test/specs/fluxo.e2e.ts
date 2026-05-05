describe('Fluxo completo - Cadastro + Login', () => {

  const email = `teste_${Date.now()}@email.com`
  const password = '123456'

  it('deve cadastrar novo usuário', async () => {

    // LOGIN
    const loginBtn = await $('~Login')
    await loginBtn.waitForDisplayed({ timeout: 10000 })
    await loginBtn.click()

    // SIGN UP
    const signupBtn = await $('android=new UiSelector().text("Sign up")')
    await signupBtn.waitForDisplayed({ timeout: 10000 })
    await signupBtn.click()

    // ESPERA TELA DE CADASTRO
    const emailField = await $('~input-email')
    await emailField.waitForDisplayed({ timeout: 10000 })

    // PREENCHE CAMPOS
    await emailField.setValue(email)
    await $('~input-password').setValue(password)
    await $('~input-repeat-password').setValue(password)

    // 🔽 SCROLL ATÉ O BOTÃO
    const signupSubmit = await $('android=new UiSelector().textContains("SIGN")')
    await signupSubmit.scrollIntoView()

    // CLICA
    await signupSubmit.click()

    await driver.pause(3000)
  })

})
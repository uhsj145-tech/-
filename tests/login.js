/**
 * Login snippet - reusable authentication function for TestDriver Sandbox
 */
export async function login(testdriver, username = "standard_user", password = "secret_password") {
  // Find and fill username
  const usernameField = await testdriver.find("Username input");
  await usernameField.click();
  await testdriver.type(username);

  // Find and fill password
  const passwordField = await testdriver.find("Password input");
  await passwordField.click();
  await testdriver.type(password, { secret: true });

  // Submit the form
  await testdriver.find("Sign in button").click();
}

import { test, expect } from '@playwright/test';

test('Inicio de sesión exitoso en Raccord', async ({ page }) => {
  // 1. ARRANGE (Preparar el entorno)
  await page.goto('http://localhost:8081/');

  // Darle un tiempo a Flutter Web para renderizar la pantalla en el canvas
  await page.waitForTimeout(3000);

  // 2. ACT (Acciones del usuario usando teclado)
  // Presionamos Tab para enfocar la primera casilla (Correo)
  await page.keyboard.press('Tab');
  await page.keyboard.type('deiver@test.com', { delay: 50 });

  // Presionamos Tab para pasar a la segunda casilla (Contraseña)
  await page.keyboard.press('Tab');
  await page.keyboard.type('123456', { delay: 50 });

  // Presionamos Enter para enviar el formulario o hacer clic en Ingresar
  await page.keyboard.press('Enter');

  // 3. ASSERT (Verificación visual)
  // Comprobamos que el título de la aplicación existe
  await expect(page).toHaveTitle(/raccord/i);
});
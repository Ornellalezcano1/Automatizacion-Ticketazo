describe('Automatización del registro de usuario', () => {
    it('Debe registrar a un nuevo usuario en Ticketazo', () => {
        // Generar email y DNI aleatorios al principio de la prueba para evitar duplicados.
        const randomEmail = `juan.perez${Math.floor(Math.random() * 10000)}@mailinator.com`;
        const randomDni = `${Math.floor(10000000 + Math.random() * 90000000)}`;

        // Paso 1: Visitar la página de registro
        cy.visit('https://ticketazo.com.ar/auth/registerUser');

        // Paso 2: Localizar los campos e introducir los datos del usuario
        cy.get('[data-cy="input-nombres"]').type('Juan');
        cy.get('[data-cy="input-apellido"]').type('Perez');
        cy.get('[data-cy="input-telefono"]').type('3511234567');
        cy.get('[data-cy="input-dni"]').type(randomDni);

        // Seleccionar Provincia y Localidad
        cy.get('[data-cy="select-provincia"]').click();
        cy.contains('Córdoba').click();
        cy.get('[data-cy="select-localidad"]').type('Córdoba');
        cy.contains('Córdoba').click();

        // Ingresar la fecha de nacimiento
        cy.get('[data-type="day"]').type('18');
        cy.get('[data-type="month"]').type('09');
        cy.get('[data-type="year"]').type('1990');
        
        // Usar la variable de email para ambos campos
        cy.get('[data-cy="input-email"]').type(randomEmail);
        cy.get('[data-cy="input-confirmar-email"]').type(randomEmail);

        // Ingresar y confirmar la contraseña
        cy.get('[data-cy="input-password"]').type('MiPassword123!');
        cy.get('[data-cy="input-repetir-password"]').type('MiPassword123!');
        
        // Aceptar los términos y condiciones (si existen, si no, se omite esta línea)
        // cy.get('[data-cy="checkbox-terminos"]').check();

        // Paso 3: Hacer clic en el botón de registro para enviar el formulario
        cy.get('button[type="submit"]').click();
    });
});
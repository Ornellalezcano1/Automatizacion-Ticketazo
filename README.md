# Automatización del Registro en Ticketazo

Este proyecto contiene un script de automatización de pruebas (QA) para registrar a un nuevo usuario en el sitio web de Ticketazo.

## Descripción del Proyecto

El objetivo de esta automatización es simular el proceso de un usuario que se registra en la plataforma de [Ticketazo.com.ar](https://ticketazo.com.ar). El script rellena automáticamente los campos del formulario con datos aleatorios y envía el formulario para completar el registro.

## Tecnologías Utilizadas

* **Cypress:** Framework de automatización de pruebas end-to-end.
* **JavaScript:** Lenguaje de programación utilizado para el script.
* **Node.js:** Entorno de ejecución de JavaScript necesario para correr Cypress.

## Cómo Ejecutar el Script

1.  **Clonar el repositorio:**
    `git clone https://aws.amazon.com/es/what-is/repo/`

2.  **Instalar las dependencias:**
    Navega a la carpeta del proyecto e instala Cypress.
    `npm install`

3.  **Ejecutar la prueba:**
    Abre la interfaz de Cypress.
    `npx cypress open`

    Luego, selecciona `registro-de-usuario.cy.js` en la pestaña de E2E Testing para ejecutar la prueba en un navegador.

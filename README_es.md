# DEMO-ACME-FRUTAS-FRONT

Este proyecto es un ejemplo de una aplicación de una sola página (SPA) desarrollada con Angular. Su propósito principal es demostrar dos flujos independientes relacionados con la emisión y el intercambio de credenciales verificables utilizando estándares como **OpenID4VCI** y **SIOPv2**. La aplicación muestra dos QR codes configurables que inician estos flujos y que pueden ser escaneados utilizando la aplicación **KayWallet**.

## Descripción General

El frontend consta de dos componentes principales:

1. **Melon University (`melon-university`)**:  
   Este componente genera un QR code que inicia el flujo de emisión de una credencial verificable mediante **OpenID4VCI**. El QR code utiliza el valor configurado en el archivo `environment` bajo la clave `melon_openid4vci_deeplink`.

2. **Mango Corp (`mango-corp`)**:  
   Este componente genera un QR code que inicia el flujo de intercambio de credenciales verificables mediante **SIOPv2**. El QR code utiliza el valor configurado en el archivo `environment` bajo la clave `openid_url`. Este valor puede contener el marcador `<current_uri>`, que será reemplazado dinámicamente con la URL actual del frontend cuando se ejecute en el navegador.

Ambos componentes utilizan un subcomponente compartido llamado `SectionQrComponent`, que se encarga de generar y mostrar los QR codes.

### Aplicación KayWallet

Los QR codes generados por esta aplicación están diseñados para ser escaneados utilizando **KayWallet**, una aplicación que permite gestionar identidades digitales soberanas y credenciales verificables. Puedes descargar KayWallet y obtener más información en [https://kaytrust.id](https://kaytrust.id).

## Repositorio Relacionado

Este proyecto tiene un repositorio complementario para el backend llamado **`demo-acme-frutas-back`**, que implementa las APIs necesarias para soportar los flujos de emisión e intercambio de credenciales verificables. Puedes encontrar el repositorio del backend en [demo-acme-frutas-back](https://github.com/KayTrust/demo-acme-frutas-back).

## Configuración de los QR Codes

### Melon University QR Code
- **Propósito**: Inicia el flujo de emisión de credenciales verificables.
- **Configuración**:  
  En el archivo `environment.ts` o `environment.development.ts`, configura la clave `melon_openid4vci_deeplink` con el deeplink que apunta al endpoint de oferta de credenciales.  
  Ejemplo:
  ```typescript
  melon_openid4vci_deeplink: 'openid-credential-offer://?credential_offer_uri=https://example.com/issuer/credential-offer',
  ```

### Mango Corp QR Code
- **Propósito**: Inicia el flujo de intercambio de credenciales verificables.
- **Configuración**:  
  En el archivo `environment.ts` o `environment.development.ts`, configura la clave `openid_url` con el deeplink que apunta al endpoint de intercambio de credenciales. Este valor puede incluir `<current_uri>`, que será reemplazado por la URL actual del frontend.  
  Ejemplo:
  ```typescript
  openid_url: 'openid://?state=12345&redirect_uri=<current_uri>%2Foauth2%2Fcb%2FvpToken&response_mode=query&response_type=vp_token&client_id=<current_uri>%2Foauth&scope=openid',
  ```

## Requisitos Previos

- Node.js (versión 16 o superior).
- Yarn como gestor de paquetes.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/KayTrust/demo-acme-frutas-front.git
   cd demo-acme-frutas-front
   ```

2. Instala las dependencias:
   ```bash
   yarn install
   ```

## Configuración

1. Abre el archivo `src/environments/environment.ts` o `src/environments/environment.development.ts` y configura los valores de `melon_openid4vci_deeplink` y `openid_url` según tus necesidades.

2. Si estás ejecutando el proyecto en un entorno local, asegúrate de que `environment.development.ts` tenga configurada la URL base del backend local. Por ejemplo:
   ```typescript
   api_host: 'http://localhost:3000',
   ```

## Ejecución

### Servidor de Desarrollo
Para iniciar el servidor de desarrollo, ejecuta:
```bash
yarn start
```
Esto iniciará el servidor en `http://localhost:4200/`. La aplicación se recargará automáticamente al realizar cambios en los archivos fuente.

### Construcción para Producción
Para generar una versión optimizada para producción, ejecuta:
```bash
yarn build
```
Los archivos generados estarán en el directorio `dist/demo-acme-frutas`.

## Uso

1. Accede a la página principal de la aplicación (`http://localhost:4200/` o la URL donde esté desplegada).
2. Verás dos secciones principales:
   - **Melon University**: Contiene un QR code que inicia el flujo de emisión de credenciales verificables.
   - **Mango Corp**: Contiene un QR code que inicia el flujo de intercambio de credenciales verificables.
3. Escanea el QR correspondiente con la aplicación **KayWallet** para iniciar el flujo.

## Estructura del Proyecto

- **`src/app/pages/melon-university`**: Contiene el componente `MelonUniversityComponent` que genera el QR para el flujo de emisión.
- **`src/app/pages/mango-corp`**: Contiene el componente `MangoCorpComponent` que genera el QR para el flujo de intercambio.
- **`src/app/components/section-qr`**: Subcomponente reutilizable que genera y muestra los QR codes.
- **`src/environments`**: Contiene los archivos de configuración del entorno.

## Personalización

- **Estilos**: Los estilos globales se encuentran en `src/styles.css`. Este proyecto utiliza TailwindCSS y DaisyUI para la gestión de estilos.
- **Temas**: Puedes personalizar los temas en el archivo `tailwind.config.js`.

## Tecnologías Utilizadas

- **Framework**: Angular 18.2.0
- **Gestión de Estado**: Signals de Angular.
- **Estilos**: TailwindCSS y DaisyUI.
- **Generación de QR Codes**: Biblioteca `qrcode`.

## Contribuciones

Este proyecto es de código abierto. Si deseas contribuir, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección de errores:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Sube tus cambios a tu fork:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Crea un Pull Request en el repositorio principal.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

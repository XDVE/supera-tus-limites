# Configurar la sincronización real entre dispositivos

1. Entra a Firebase Console y crea un proyecto para **Supera Tus Límites Aquí y Ahora**.
2. En el proyecto agrega una aplicación Web (`</>`).
3. Ve a **Authentication > Sign-in method** y habilita **Anonymous**.
4. Ve a **Firestore Database > Create database** y crea la base.
5. En **Firestore Database > Rules**, pega el contenido de `firestore.rules` y publícalo.
6. En **Project settings > Your apps > Web app**, copia el objeto `firebaseConfig`.
7. Pega esos valores en `firebase-config.js`.
8. Sube `index.html`, `firebase-config.js`, `firestore.rules` y los demás archivos a GitHub Pages.

## Resultado

El indicador de la app debe cambiar de **LOCAL** a **NUBE ✓**.

Desde ese momento, un cliente puede registrar series, cardio y un informe desde su celular y el Coach podrá ver esos datos desde la computadora, siempre que ambos entren a la misma versión publicada y estén conectados a Internet.

## Nota de seguridad

Esta implementación usa autenticación anónima únicamente para proteger el acceso básico al proyecto. Firebase advierte que la autenticación anónima no sustituye una cuenta permanente y que, para datos sensibles, conviene usar autenticación y reglas basadas en usuarios/roles. Para un sistema comercial o con varios gimnasios, la siguiente etapa debe ser autenticación real del Coach y cuentas individuales de clientes.

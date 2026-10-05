// 1. Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAf6JMqd_ISb3iRtSKEt4DfbIhWjniR9gM",
  authDomain: "supera-tus-limites-a6e6b.firebaseapp.com",
  projectId: "supera-tus-limites-a6e6b",
  storageBucket: "supera-tus-limites-a6e6b.firebasestorage.app",
  messagingSenderId: "491127815289",
  appId: "1:491127815289:web:b119778e8fbc65d18b28a8"
};

// 2. Exportar la configuración globalmente
window.firebaseConfig = firebaseConfig;

// 3. Inicializar Firebase de forma segura (solo si la librería ya cargó)
if (typeof firebase !== 'undefined') {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  window.db = firebase.firestore();
}

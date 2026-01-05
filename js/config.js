// تطبيق نتفلكس  Configuration
const APP_CONFIG = {
  name: "تطبيق نتفلكس ",
  version: "5.0.0",
  theme: {
    primary: "#e50914",
    primaryDark: "#831010",
    background: "#030014"
  },
  api: {
    baseUrl: "https://api.تطبيق-نتفلكس-.com",
    timeout: 10000
  },
  features: {
    animations: true,
    parallax: true,
    smoothScroll: true,
    darkMode: true
  },
  analytics: {
    enabled: true,
    trackingId: "UA-XXXXXXXXX-X"
  }
};

console.log('⚙️ Config loaded:', APP_CONFIG.name, 'v' + APP_CONFIG.version);
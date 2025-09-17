# LooplyApp

LooplyApp es una aplicación web donde he aprendido y puesto en práctica distintos conocimientos clave de desarrollo frontend moderno, centrándome especialmente en React, TypeScript y buenas prácticas de testing.

## ¿Qué he aprendido con este proyecto?

### 🛠️ Stack Tecnológico y Herramientas

- **React + TypeScript:** He estructurado toda la lógica de la aplicación usando componentes y hooks personalizados, aprovechando la seguridad y escalabilidad que ofrece TypeScript.
- **Vite:** He utilizado Vite como bundler para desarrollo ultrarrápido y Hot Module Replacement.
- **CSS Moderno:** He aplicado variables CSS, glassmorphism, gradients y un sistema de diseño responsivo y visualmente atractivo.
- **Testing con Vitest y Testing Library:** He creado tests unitarios tanto para hooks personalizados como para componentes, asegurando el correcto funcionamiento de la lógica (por ejemplo, el contador y su hook asociado).
- **ESLint y buenas prácticas:** Configuración avanzada de ESLint para mantener un código limpio, legible y consistente.
- **Consumo de APIs:** Implementé integración con la API de Giphy para búsquedas y renderizado de resultados en tiempo real.
- **Componentización y reutilización:** Separé la lógica en componentes reutilizables y modulares, como la barra de búsqueda, listas y tarjetas.

### 💡 Habilidades y conceptos prácticos

- Uso avanzado de hooks (como `useState` y hooks personalizados).
- Manejo de tipados complejos y estructuras de datos en TypeScript.
- Diseño y reutilización de componentes UI.
- Implementación de pruebas automatizadas para lógica y UI.
- Gestión de estado local y comunicación entre componentes.
- Integración y consumo de servicios externos (APIs REST).
- Organización de carpetas y patrones de arquitectura frontend moderna.
- Experiencia real con la herramienta de testing Vitest y la librería @testing-library/react.
- Aplicación de conceptos de diseño moderno: Glassmorphism, responsividad, color y UX.

## ¿Qué incluye LooplyApp?

- Interfaz para buscar y visualizar GIFs desde Giphy.
- Historial de búsquedas rápidas (chips).
- Ejemplo de contador con lógica desacoplada y testeada.
- Diseño moderno y responsivo.
- Código limpio, tipado y bien organizado.
- Pruebas unitarias para hooks y componentes.

## Instalación y uso

```bash
git clone https://github.com/Admaal/LooplyApp.git
cd LooplyApp
npm install
npm run dev
```

## Algunos archivos y conceptos destacados

- `src/GifsApp.tsx`: Componente principal que integra búsqueda, historial y renderizado de resultados.
- `src/shared/components/SearchBar.tsx`: Barra de búsqueda reutilizable con manejo de estado y eventos.
- `src/counter/hooks/useCounter.tsx`: Hook personalizado para lógica de contador, con pruebas unitarias.
- `src/index.css`: Variables CSS y estilos modernos.
- `src/gifs/actions/get-gifs-by-query.action.ts`: Acción para consumir la API de Giphy.

## Testing

Para ejecutar los tests:
```bash
npm run test
```

---

Este proyecto es una muestra de mi aprendizaje y evolución como desarrollador frontend, aplicando tecnologías modernas y buenas prácticas de desarrollo profesional.

Desarrollado por Admaal 🚀

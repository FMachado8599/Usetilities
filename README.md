# (NotReally) Usetilities

# 📚 Angular Student Management App

Esta es una aplicación web construida con **Angular** que permite la gestión de estudiantes, cursos y usuarios. Incluye funcionalidades de autenticación, edición, eliminación y asignación de cursos, todo utilizando el patrón de estado global **NgRx**.

---

## 🚀 Tecnologías utilizadas

- **Angular** 17+
- **TypeScript**
- **RxJS**
- **NgRx** (Store, Effects, Reducers, Selectors)
- **Angular Reactive Forms**
- **SCSS**
- **HTML5 / CSS3**
- **Json-server** (simulando API REST)

---

## 🧩 Estructura de módulos

La aplicación está organizada en los siguientes módulos:

- `auth`: Login y registro de usuarios.
- `dashboard`: Módulo principal privado donde se gestionan estudiantes, cursos y usuarios.
- `students`: Submódulo dentro de dashboard para gestionar estudiantes.
- `courses`: Submódulo dentro de dashboard para gestionar cursos.
- `users`: Submódulo dentro de dashboard para gestionar usuarios.

---

## ✅ Funcionalidades

### 🔐 Autenticación
- Registro de nuevos usuarios
- Login con redirección al dashboard
- Protección de rutas (con guards)

### 👨‍🎓 Gestión de estudiantes
- Listado con avatar y datos personales
- Formulario para agregar nuevos estudiantes
- Página para editar estudiante individual
- Eliminación de estudiantes
- Asignación y eliminación de cursos por estudiante
- Visualización de nombres de cursos asignados

### 📘 Gestión de cursos
- Listado de cursos disponibles
- Alta, edición y eliminación de cursos

### 👤 Gestión de usuarios
- Listado de usuarios registrados
- Alta de nuevos usuarios

### 🔁 Estado global con NgRx
- Estado centralizado para los estudiantes
- Uso de acciones, reducers, selectors y effects
- Comunicación reactiva entre servicios y componentes

---

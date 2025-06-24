# Family Form

This project is a Vue 3 application built with Vite. It provides a simple form for managing family data, including personal details and a list of children, and displays the submitted data on a preview page.

## Features

### Completed Features

1. **Active Link Highlighting**: The active navigation link is visually highlighted for better user experience.
2. **Save Notification**: A notification banner is displayed when the form data is successfully saved.
3. **Button Interaction States**: Buttons visually respond to hover and click events.
4. **Dynamic Age Labels**: The age is displayed with the correct Russian pluralization (`год`, `года`, `лет`) based on the number.
5. **Empty Data Handling**: The preview page checks for missing names or ages and displays a message indicating that certain data is not provided.
6. **Dynamic Page Titles**: The page title dynamically updates based on the active route.

### Not Implemented (Out of Scope)

1. **Form Validation**: No validation logic was implemented for the form fields.
2. **Exact Alignment with Figma**: The links "Форма" and "Превью" are not perfectly centered, as per the Figma design.
3. **Font Hierarchy in Preview Page**: The "Персональные данные" heading uses the same font style as the "Дети" section, even though they have different semantic importance.
4. **Footer Text Capitalization**: The footer text "all rights reserved" is intentionally left in lowercase.

---

## Project Setup

### Install Dependencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile, and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

---

## Technical Highlights

1. **Vue 3 Composition API**: The project uses the Composition API for all components, ensuring modern and maintainable code.
2. **TypeScript**: TypeScript is used throughout the project for type safety and better developer experience.
3. **Pinia for State Management**: Pinia is used to manage the global state of the family data.
4. **Tailwind CSS**: Tailwind CSS is used for styling, ensuring a clean and consistent design.
5. **Dynamic Routing**: Vue Router is configured with dynamic titles and lazy-loaded routes for better performance.

---

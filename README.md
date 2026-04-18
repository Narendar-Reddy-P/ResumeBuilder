# Resume Builder

**Live Demo:** [https://resume-builder-pnr.vercel.app/](https://resume-builder-pnr.vercel.app/)

A simple, fast, and responsive React application to create professional resumes with minimal effort.

## Features

- **Real-time Preview:** See your resume update instantly as you type. 
- **A4 Sheet Scaling:** The preview perfectly simulates an A4 page, making it easy to know exactly how it will print.
- **Multiple Sections:** Built-in forms for Personal Information, Profile Summary, Work Experience, Education, Projects, Skills, and Custom (More) sections.
- **Responsive Layout:** A clean, mobile-first design that adapts seamlessly from phones to desktop browsers. Toggle between edit mode and preview mode on smaller screens.
- **Print & Export to PDF:** Easily print your resume or save it directly as a PDF using `react-to-print`.
- **Modular Styling:** Built using CSS Modules for isolated and scalable component styling based on a modern four-color palette.
- **State Management:** Leverages React Context API to handle the state for all the different resume sections.

## Tech Stack

- **React 19**
- **Vite**
- **CSS Modules**
- **react-to-print** for PDF exporting and printing capabilities

## Technical Implementation Details

### `react-to-print` (PDF Export & Printing)
This project uses the `react-to-print` library to handle exporting the resume layout seamlessly without relying on third-party servers or heavy canvas-based PDF generators.
- We maintain a `useRef` pointing directly to the `<A4Sheet />` component which encapsulates the rendered resume output.
- When the "Download" or "Print" actions are triggered, the `useReactToPrint` hook grabs the exact DOM node of the resume and sends it to the browser's print dialog.
- Custom `@media print` and `@page` CSS queries are used to strip away UI elements and enforce accurate A4 measurements, eliminating unwanted browser margins.

### State Management (React Context API)
To keep the file structure clean and avoid prop drilling across deeply nested components, this app relies heavily on React's built-in **Context API**.
- State for every resume section is individually managed and isolated in specific Context Providers (e.g., `educationContext.jsx`, `workContext.jsx`, `personalContext.jsx`) located inside the `src/contexts/` directory.
- This creates predictable data flow: input forms update their respective context states, and the `<A4Sheet />` preview reads directly from those contexts to display the real-time changes.

### Styling (CSS Modules)
To ensure styling stays modular and localized, this project uses **CSS Modules**.
- By using `.module.css` files, all class names are generated dynamically. This guarantees there are zero style collisions, so a `.header` class in an input form's CSS won't interfere with the main app header.
- This maintainable approach was pivotal in building the responsive layout (toggling between the editor and preview for mobile) and implementing a standardized, consistent color scheme across all UI components.

## Getting Started

### Prerequisites

You need Node.js and npm installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd cv-application
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

### Building for Production

To build the project for production, run:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized production files.

## Project Structure

- `src/Components/`: Contains all the UI components (Forms, A4 Preview, Footer, etc.).
- `src/contexts/`: Contains the React Context providers used to manage the global state for each resume section.
- `src/MinorComponents/`: Reusable, smaller components like Inputs.
- `src/App.jsx`: The main application entry point that stitches together the forms, the context providers, and the preview pane.

## Acknowledgements

- Built as part of the curriculum for [The Odin Project](https://www.theodinproject.com/).
- UI and design inspired by [Lightning CV](https://lightningcv.vercel.app/).
- Color palettes picked using [Color Hunt](https://colorhunt.co/).

## Further Improvements

- **More Layouts & Palettes:** Introduce multiple distinct resume templates and customizable color palettes to give users more design flexibility.
- **Clickable PDF Links:** Enhance the document generation process to preserve active hyperlinks in the downloaded PDF, ensuring that portfolio and social links can be clicked directly from the resume file.

## License

This project is licensed under the MIT License.

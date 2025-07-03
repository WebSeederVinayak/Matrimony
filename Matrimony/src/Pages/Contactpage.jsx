import React from 'react';
import ContactForm from '../Components/ContactForm'; // Removed the extra single quote

export default function ContactPage() {
  return (
    // The main container for the contact page, ensuring it takes full height and width
    // and provides some padding.
    <div className="min-h-screen w-full bg-gray-50 font-sans antialiased flex flex-col items-center justify-center py-12">
      {/*
        The ContactForm component is self-contained with its own section and styling.
        We just need to render it here.
      */}
      <ContactForm />

      {/* You can add other page elements here if necessary, for example, a footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Matrimony App. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Note: For this to run in a typical React setup, you would also need your
// ContactForm.jsx file in the same directory or adjust the import path accordingly.
// If you're running this directly in an environment that expects a single App component,
// you might replace the default export of ContactForm with this ContactPage,
// or create an App.js that renders ContactPage.

// Example of how you might use it in an App.js:
/*
import React from 'react';
import ContactPage from './ContactPage'; // Assuming ContactPage.jsx is in the same directory

function App() {
  return (
    <div className="App">
      <ContactPage />
    </div>
  );
}

export default App;
*/
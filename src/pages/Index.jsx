import React from 'react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">My App</h1>
          <nav className="mt-2">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Home</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">About</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Welcome</h2>
          <p>This is a bare-bones application. Start adding your content here.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Get Started</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click me
          </button>
        </section>
      </main>

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
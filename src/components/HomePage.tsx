

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Amazing Websites</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          With Qwen Web Builder, create stunning websites effortlessly using AI-powered tools.
        </p>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Fast Setup</h3>
            <p className="text-gray-600">
              Get started in seconds with our automated project scaffolding.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Modern UI</h3>
            <p className="text-gray-600">
              Beautiful interfaces with Tailwind CSS and shadcn components.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Easy Deployment</h3>
            <p className="text-gray-600">
              Deploy to Vercel, Netlify, or GitHub Pages with a single command.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
            <div>
              <h3 className="text-xl font-semibold">Describe Your Vision</h3>
              <p className="text-gray-600">Tell Qwen what kind of website you want to build.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
            <div>
              <h3 className="text-xl font-semibold">AI Generates Code</h3>
              <p className="text-gray-600">Qwen creates a complete, production-ready website.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
            <div>
              <h3 className="text-xl font-semibold">Deploy & Share</h3>
              <p className="text-gray-600">Publish your site with a single command.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
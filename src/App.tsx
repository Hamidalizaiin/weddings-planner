function App() {
  return (
    <>
      <main className="pt-20">
        <section className="pl-0 relative flex flex-col items-center justify-center space-y-6 h-screen bg-gray-100 herobackground lg:items-start lg:pl-12">
          <div className="absolute inset-0 h-screen bg-slate-900 w-full right-0 left-0 opacity-40"></div>
          <h2 className="px-6 text-center text-3xl font-bold z-10 text-white md:px-0 md:text-4xl  lg:text-left lg:text-5xl">
            Plan Your Dream Wedding, Stress-Free
          </h2>
          <p className="px-6 text-lg font-bold max-w-2xl text-center z-10 text-white md:px-0 md:text-xl lg:max-w-3xl lg:text-left lg:text-2xl">
            We make wedding planning easy by helping you discover reliable
            photographers, decorators, venues, makeup artists, and more all
            from one platform. No stress, just the best for your big day.
          </p>
          <button className="bg-[var(--color-primary)] text-white border-2 cursor-pointer border-[var(--color-primary)] hover:border-white font-bold p-4 rounded-md hover:bg-[var(--color-primary-dark)] transition ease-in-out duration-300 z-10">
            Explore Vendors
          </button>
        </section>
      </main>
    </>
  );
}

export default App;

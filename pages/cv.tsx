const CVPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-1200">
      <main className="mx-auto max-w-[692px] px-6 py-12 antialiased sm:py-24">
        <h1 className="text-3xl font-semibold">Curriculum Vitae</h1>
        <p className="mt-6 text-gray-1100">
          Welcome to my CV page. Here you can find information about my
          professional background and experience.
        </p>
        <p className="mt-4 text-gray-1100">
          For a detailed version of my CV, please download the PDF version
          below.
        </p>
        <div className="mt-8">
          <a
            className="inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-1200 shadow-border transition-colors hover:bg-[#F5F4F4]"
            href="/static/cv/mustafa-sarac-cv.pdf"
            download
          >
            Download CV (PDF)
          </a>
        </div>
      </main>
    </div>
  );
};

export default CVPage;

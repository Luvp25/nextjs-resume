export default function Resume() {
  return (
    <main className="bg-gray-100 min-h-screen p-5 text-gray-800">
      <div className="max-w-2xl mx-auto bg-white p-8 border border-gray-300 shadow-sm">
        
        {/* HEADER SECTION */}
        <header className="border-b-2 border-blue-600 pb-4 mb-6">
          <h1 className="text-3xl font-bold">Luv Patel</h1>
          <p className="text-blue-600 font-medium text-lg">Aspiring Data Analyst</p>
          <div className="text-sm text-gray-600 mt-2">
            <p>luvp@usf.edu | 863-513-5708</p>
            <div className="flex gap-3 underline mt-1">
              <a href="https://github.com/Luvp25/">GitHub</a>
              <a href="https://www.linkedin.com/in/luvpatel25/">LinkedIn</a>
            </div>
          </div>
        </header>

        {/* OBJECTIVE SECTION */}
        <section className="mb-6">
          <h2 className="font-bold uppercase text-gray-900">Objective</h2>
          <p>Business Analytics student seeking to leverage data visualization expertise to drive decision-making as a Data Analyst.</p>
        </section>

        {/* EDUCATION SECTION */}
        <section className="mb-6">
          <h2 className="font-bold uppercase text-gray-900 border-t pt-2">Education</h2>
          <h3 className="font-bold">University of South Florida</h3>
          <p className="italic text-sm">B.S. in Business Analytics & Information Systems (May 2027)</p>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="mb-6">
          <h2 className="font-bold uppercase text-gray-900 border-t pt-2 mb-2">Work Experience</h2>
          
          <div className="mb-4">
            <div className="flex justify-between font-bold text-gray-900">
              <span>Web Development Intern</span>
              <span className="font-normal text-sm text-gray-500">2024</span>
            </div>
            <p className="text-blue-700 text-sm italic">Global Career Accelerator</p>
            <ul className="list-disc ml-5 text-sm">
              <li>Developed responsive web interfaces.</li>
              <li>Collaborated with teams on project milestones.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between font-bold text-gray-900">
              <span>Academic Tutor</span>
              <span className="font-normal text-sm text-gray-500">2022 — 2023</span>
            </div>
            <p className="text-blue-700 text-sm italic">Kumon</p>
            <ul className="list-disc ml-5 text-sm">
              <li>Simplified complex math concepts for students.</li>
              <li>Tracked progress data to customize learning plans.</li>
            </ul>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <h2 className="font-bold uppercase text-gray-900 border-t pt-2 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-200 px-2 py-1 rounded">Data Visualization </span>
            <span className="bg-gray-200 px-2 py-1 rounded">HTML </span>
            <span className="bg-gray-200 px-2 py-1 rounded">CSS </span>
            <span className="bg-gray-200 px-2 py-1 rounded">JavaScript </span>
            <span className="bg-gray-200 px-2 py-1 rounded">Project Management </span>
          </div>
        </section>

      </div>
    </main>
  );
}
export default function Resume() {
  return (
    // 'main' is the background of the whole page
    // bg-gray-100 = light gray background, p-6 = padding
    <main className="min-h-screen bg-gray-100 p-6">
      
      {/* THE WHITE PAPER CONTAINER */}
      {/* max-w-3xl = keeps the resume from getting too wide on desktop */}
      {/* mx-auto = centers the paper on the screen */}
      <div className="max-w-3xl mx-auto bg-white shadow-md p-8 border border-gray-300">
        
        {/* HEADER SECTION */}
        <header className="mb-8 border-b-2 border-blue-600 pb-4">
          <h1 className="text-4xl font-bold text-gray-900">Luv Patel</h1>
          <p className="text-blue-600 font-semibold text-lg">Aspiring Data Analyst</p>
          
          <div className="mt-4 text-gray-600 text-sm">
            <p>📧 luvp@usf.edu | 📞 863-513-5708</p>
            <p className="mt-1">
              <a href="https://github.com/Luvp25/" className="underline mr-3">GitHub</a>
              <a href="https://www.linkedin.com/in/luvpatel25/" className="underline">LinkedIn</a>
            </p>
          </div>
        </header>

        {/* OBJECTIVE SECTION */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2">Objective</h2>
          <p className="text-gray-700">
            Detail-oriented Business Analytics student with a strong foundation in technical project management and web development. 
            Seeking to leverage analytical skills and data visualization expertise to drive informed decision-making as a Data Analyst.
          </p>
        </section>

        {/* EDUCATION SECTION */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2 border-t pt-4">Education</h2>
          <div>
            <h3 className="text-lg font-bold">University of South Florida</h3>
            <p className="text-gray-600 italic">B.S. in Business Analytics & Information Systems (Graduating May 2027)</p>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-4 border-t pt-4">Work Experience</h2>
          
          {/* Job 1 */}
          <div className="mb-6">
            <div className="flex justify-between font-bold">
              <span>Web Development Intern</span>
              <span className="text-gray-500 font-normal">May 2024 — July 2024</span>
            </div>
            <p className="text-blue-700 italic">Global Career Accelerator</p>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>Developed responsive web interfaces using modern front-end technologies.</li>
              <li>Collaborated with international teams to deliver project milestones.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="mb-6">
            <div className="flex justify-between font-bold">
              <span>Academic Tutor</span>
              <span className="text-gray-500 font-normal">Jan 2022 — May 2023</span>
            </div>
            <p className="text-blue-700 italic">Kumon</p>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>Simplified complex mathematical concepts for students.</li>
              <li>Tracked student progress data to customize learning plans.</li>
            </ul>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-3 border-t pt-4">Technical Skills</h2>
          {/* We use 'flex' and 'gap' to spread the skills out nicely */}
          <div className="flex flex-wrap gap-2 text-sm text-white">
            <span className="bg-gray-800 px-3 py-1 rounded">Data Visualization</span>
            <span className="bg-gray-800 px-3 py-1 rounded">HTML</span>
            <span className="bg-gray-800 px-3 py-1 rounded">CSS</span>
            <span className="bg-gray-800 px-3 py-1 rounded">JavaScript</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Project Management</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Business Analytics</span>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 text-center text-gray-400 text-xs border-t pt-4">
          Built with Next.js and Tailwind CSS
        </footer>

      </div>
    </main>
  );
}
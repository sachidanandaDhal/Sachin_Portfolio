
function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-5 text-center">About Me</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Hello, I’m Sachidananda Dhal, a Frontend Developer with over 2 years of experience in building responsive, user-centric web applications using React, Tailwind CSS, and JavaScript. Skilled in backend integration with Node.js, MongoDB, and SQL, I am passionate about creating scalable, secure, and efficient web solutions that deliver excellent user experiences.
        </p>

        <section className="mb-10">
          <h2 className="text-green-600 font-semibold text-2xl mb-4">Education & Training</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong>MCA</strong>, GIET University, Bangalore (2023 - 2024)  
              <br /> Secured distinction in final-year projects involving web application development.
            </li>
            <li>
              <strong>BSc-ITM</strong>, Bhadrak Autonomous College (2018 - 2021)
              <br /> Received Best Student award for academic excellence and project contributions.
            </li>
            <li>
              <strong>+2 Science</strong>, Fame +2 Science College (2016 - 2018)
              <br /> Represented the college in state-level science exhibitions and secured recognition.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-green-600 font-semibold text-2xl mb-4">Skills & Expertise</h2>
          <div className="grid grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-bold">Frontend</h3>
              <ul className="list-disc pl-5">
                <li>React, JavaScript, HTML, CSS, Redux</li>
                <li>Tailwind CSS, Lit</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Backend</h3>
              <ul className="list-disc pl-5">
                <li>Node.js, Go, Python</li>
                <li>MongoDB, SQL</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-green-600 font-semibold text-2xl mb-4">Professional Experience</h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold">Junior Associate - Engineering</h3>
              <span>Annalect India (2023 - Present)</span>
              <ul className="list-disc pl-5 mt-2">
                <li>Developed responsive frontend applications using React and Tailwind CSS.</li>
                <li>Implemented JWT-based authentication for secure access management.</li>
                <li>Integrated 5+ APIs, improving data processing time by 20%.</li>
                <li>Improved frontend load time by 30% and reduced unauthorized access by 50%.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Graduate Trainee</h3>
              <span>Annalect India (2022 - 2023)</span>
              <ul className="list-disc pl-5 mt-2">
                <li>Developed interactive UI components using HTML, CSS, and JavaScript.</li>
                <li>Optimized page load speeds by 15% and fixed 50+ bugs.</li>
                <li>Contributed to 5+ API integrations and ensured code quality through best practices.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-green-600 font-semibold text-2xl mb-4">Certifications</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>React.js Essential Training by LinkedIn</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-green-600 font-semibold text-2xl mb-4">Contact</h2>
          <p className="text-gray-700">
            <strong>Location:</strong> Bhubaneshwar, India
            <br />
            <strong>Email:</strong> sachidanandadhal1@gmail.com
            <br />
            <strong>Phone:</strong> +91 8018199406
            <br />
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/sachidananda-dhal-877b87238"
              className="text-blue-600 underline"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/sachidananda-dhal-877b87238
            </a>
            <br />
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/sachidanandaDhal"
              className="text-blue-600 underline"
              target="_blank"
              rel="noreferrer"
            >
              github.com/sachidanandaDhal
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;

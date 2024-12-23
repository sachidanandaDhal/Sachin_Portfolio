function About() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-2 md:px-20 my-16 mt-6">
      <div className="">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-gray-700 text-lg mb-6">
          Hi, I’m <span className="font-semibold">Sachidananda Dhal</span>, a
          passionate Frontend Developer with over 2 years of experience based in
          Bhubaneshwar, India. I specialize in creating responsive and
          user-friendly web applications using modern technologies.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Proficient in React, Tailwind CSS, and JavaScript.</li>
          <li>
            Experience in backend development with Node.js, Go, MongoDB, and
            SQL.
          </li>
          <li>Skilled in JWT authentication and developing secure APIs.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Education</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>MCA from GIET University.</li>
          <li>BSc in ITM from Bhadrak Autonomous College.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Projects</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Car Insurance Management System.</li>
          <li>Employee Forms Management Application.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Certifications
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>React.js Essential Training - LinkedIn Learning.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact</h2>
        <p className="text-gray-700 mb-2">Email: sachidanandadhal1@gmail.com</p>
        <p className="text-gray-700 mb-2">Phone: +91 8018199406</p>
        <p className="text-gray-700 mb-2">
          GitHub:{" "}
          <a
            href="https://github.com/sachidanandaDhal"
            className="text-blue-500 hover:underline"
          >
            github.com/sachidanandaDhal
          </a>
        </p>
        <p className="text-gray-700">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sachidananda-dhal-877b87238/"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/sachidananda-dhal
          </a>
        </p>
      </div>
    </div>
  );
}
export default About;

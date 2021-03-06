import React, { useState, useEffect } from "react";
import sanityClient from "../client";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        date,
        place,
        description,
        projectType,
        link,
        tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Projects</h1>
        <h2 className="text-large text-grey-600 justify-center flex mb-12">
          Welcome
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article
                key={index}
                className="relative rounded-lg shadow-xl bg-white p-16"
              >
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.Link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:
                    {" " + new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:
                    {" " + project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:
                    {" " + project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {" " + project.description}
                  </p>
                  <a
                    href={project.Link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-bold hover:underline hover:text-red-600 cursor-pointer"
                  >
                    View the Project
                  </a>
                </div>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

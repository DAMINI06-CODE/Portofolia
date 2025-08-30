
'use client';

import { personalInfo, projects, skills, education, internships, certifications, publications } from '@/lib/data';

const ResumePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-white text-gray-800 print:p-0 print:m-0 font-body">
      <style jsx global>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none; }
          @page { size: A4; margin: 0.5in; }
        }
        .resume-header a, .resume-header span {
          color: #4a5568; /* gray-700 */
          transition: color 0.2s;
        }
        .resume-header a:hover {
          color: #000; /* primary */
        }
        .section-title {
          color: #000; /* primary */
          border-bottom: 2px solid #ccc; /* accent */
        }
      `}</style>

      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 font-headline">{personalInfo.name}</h1>
        <div className="resume-header flex justify-center items-center flex-wrap gap-x-3 gap-y-1 mt-2 text-sm text-gray-600">
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          <span className="hidden sm:inline">|</span>
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer">github.com/DAMINI06-CODE</a>
          <span className="hidden sm:inline">|</span>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/damini-s-121663258</a>
          <span className="hidden sm:inline">|</span>
          <span>{personalInfo.phone}</span>
        </div>
      </header>

      {/* Education Section */}
      <section className="mb-6">
        <h3 className="text-lg font-bold border-b-2 border-primary/30 pb-1 mb-2 text-primary section-title font-headline">EDUCATION</h3>
        {education.map(edu => (
            <div key={edu.institution} className="text-sm mb-2">
                <div className="flex justify-between items-baseline">
                    <p><span className="font-bold">{edu.degree}</span>, {edu.institution}</p>
                    <p className="text-xs text-gray-500">{edu.period}</p>
                </div>
                <p className="text-gray-700">{edu.result}</p>
            </div>
        ))}
      </section>

      {/* Skills Section */}
      <section className="mb-6">
        <h3 className="text-lg font-bold border-b-2 border-primary/30 pb-1 mb-2 text-primary section-title font-headline">TECHNICAL SKILLS</h3>
        <div className="text-sm space-y-1">
            {skills.map((category) => (
                <div key={category.title}>
                    <span className="font-semibold">{category.title}:</span>{' '}
                    <span className="text-gray-700">{category.skills.map(skill => skill.name).join(', ')}</span>
                </div>
            ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-6">
        <h3 className="text-lg font-bold border-b-2 border-primary/30 pb-1 mb-2 text-primary section-title font-headline">PROJECTS</h3>
        <div className="space-y-3">
            {projects.map(project => (
                <div key={project.title} className="text-sm">
                    <h4 className="font-bold">{project.title}</h4>
                    <p className="text-justify text-gray-700">{project.description}</p>
                </div>
            ))}
        </div>
      </section>
      
      {/* Internships Section */}
      <section className="mb-6">
        <h3 className="text-lg font-bold border-b-2 border-primary/30 pb-1 mb-2 text-primary section-title font-headline">INTERNSHIPS</h3>
        {internships.map(intern => (
            <div key={intern.company} className="text-sm mb-3">
                <div className="flex justify-between items-baseline">
                    <h4 className="font-bold">{intern.role}, {intern.company}</h4>
                    <p className="text-xs text-gray-500">{intern.period}</p>
                </div>
                <p className="text-gray-700">{intern.description}</p>
            </div>
        ))}
      </section>

      {/* Publications Section */}
      <section className="mb-6">
        <h3 className="text-lg font-bold border-b-2 border-primary/30 pb-1 mb-2 text-primary section-title font-headline">RESEARCH & PUBLICATIONS</h3>
        <ul className="space-y-2 text-sm">
            {publications.map(pub => (
                <li key={pub.title} className="text-gray-700">
                    <span className="font-bold">{pub.title}</span><br/>
                    <span className="italic">{pub.venue}</span>
                </li>
            ))}
        </ul>
      </section>

      {/* Certifications Section */}
      <section>
        <h3 className="text-lg font-bold border-b-2 border-primary/30 pb-1 mb-2 text-primary section-title font-headline">CERTIFICATIONS</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 columns-2">
        {certifications.map((cert) => (
          <li key={cert.name}>{cert.name} ({cert.date})</li>
        ))}
        </ul>
      </section>
    </div>
  );
};

export default ResumePage;

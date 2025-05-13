
import { Briefcase, Code, Database, Cloud, Server } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Cloud Associate at Capaciti with a passion for cloud technologies and full stack development
          </p>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/5">
              <div className="sticky top-24">
                <div className="aspect-square rounded-xl overflow-hidden mb-6">
                  <img 
                    src="/lovable-uploads/70bd0e9a-2dd9-4145-9151-e4bb137094ec.png" 
                    alt="Motlalepula Mbali Kgatlhane" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="font-semibold">Name:</span>
                      <span>Motlalepula Mbali Kgatlhane</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="font-semibold">Email:</span>
                      <a href="mailto:contact@example.com" className="text-cloud hover:text-cloud-dark">
                        contact@example.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="font-semibold">Role:</span>
                      <span>Cloud Associate at Capaciti</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="font-semibold">Location:</span>
                      <span>South Africa</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Briefcase className="text-cloud" size={24} />
                  Professional Summary
                </h2>
                <p className="mb-6 text-lg">
                  Hello! I'm Motlalepula Mbali Kgatlhane, a Cloud Associate at Capaciti with a passion for cloud technologies and full stack development. 
                  I recently graduated from Cape Peninsula University of Technology (CPUT) with a Diploma in ICT Application Development.
                </p>
                <p className="mb-8 text-lg">
                  My expertise lies in cloud computing, particularly with AWS services, and I have a strong foundation in full stack development. 
                  I enjoy creating scalable and efficient solutions that leverage the power of cloud technologies.
                </p>

                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Code className="text-cloud" size={24} />
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <SkillCategory 
                    title="Cloud Technologies" 
                    icon={<Cloud size={20} className="text-cloud" />}
                    skills={["AWS", "Azure", "Cloud Architecture", "Serverless Computing"]} 
                  />
                  <SkillCategory 
                    title="Frontend Development" 
                    icon={<Code size={20} className="text-cloud" />}
                    skills={["HTML/CSS", "JavaScript", "React", "Tailwind CSS"]} 
                  />
                  <SkillCategory 
                    title="Backend Development" 
                    icon={<Server size={20} className="text-cloud" />}
                    skills={["Node.js", "Express.js", "RESTful APIs", "GraphQL"]} 
                  />
                  <SkillCategory 
                    title="Database Management" 
                    icon={<Database size={20} className="text-cloud" />}
                    skills={["SQL", "NoSQL", "MongoDB", "DynamoDB"]} 
                  />
                </div>

                <h2 className="text-2xl font-bold mb-4">Personal Interests</h2>
                <p className="mb-4 text-lg">
                  Outside of my professional life, I'm passionate about continuous learning and staying up-to-date with the latest technologies in cloud computing. 
                  I enjoy participating in tech communities and sharing knowledge with other professionals in the field.
                </p>
                <p className="text-lg">
                  In my free time, I enjoy exploring new technologies through personal projects, reading tech blogs, and contributing to open-source projects 
                  when possible. I believe in the power of technology to solve real-world problems and create positive impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SkillCategory = ({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string[] }) => (
  <div className="bg-gray-50 rounded-xl p-6">
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h3 className="font-bold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-cloud rounded-full"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default About;

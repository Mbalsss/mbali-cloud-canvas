
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, CloudCog, CloudDownload, CloudUpload, Code, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-cloud-light blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-200 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
                <span className="block">Hello, I'm</span>
                <span className="text-cloud-dark">Motlalepula Mbali Kgatlhane</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Cloud Associate at Capaciti with a passion for cloud technologies and full stack development
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-cloud hover:bg-cloud-dark">
                  <Link to="/about">About Me</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="hover:bg-blue-500 hover:text-white hover:border-blue-500">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 relative">
              <div className="aspect-square rounded-full bg-gradient-to-br from-cloud to-cloud-dark p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/70bd0e9a-2dd9-4145-9151-e4bb137094ec.png" 
                    alt="Motlalepula Mbali Kgatlhane" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specializing in cloud solutions and full stack development to create robust and scalable applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              icon={<Cloud size={40} className="text-cloud" />}
              title="Cloud Services"
              description="Implementation and management of cloud infrastructure with focus on AWS services and solutions."
            />
            <ServiceCard 
              icon={<Code size={40} className="text-cloud" />}
              title="Full Stack Development"
              description="Creating responsive web applications with modern frameworks and best practices."
            />
          </div>
        </div>
      </section>

      {/* Skills Section - Redesigned with cloud focus */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">My Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 text-center">
            A combination of cloud expertise and development skills
          </p>
          
          {/* Cloud Skills */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <CloudCog size={28} className="text-cloud-dark" />
              <h3 className="text-2xl font-bold text-gray-800">Cloud Computing</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <CloudSkillBadge icon={<CloudUpload size={16} />} name="AWS EC2" />
              <CloudSkillBadge icon={<CloudDownload size={16} />} name="S3 Storage" />
              <CloudSkillBadge icon={<CloudCog size={16} />} name="Lambda Functions" />
              <CloudSkillBadge icon={<Cloud size={16} />} name="AWS CloudFormation" />
              <CloudSkillBadge icon={<CloudCog size={16} />} name="IAM & Security" />
              <CloudSkillBadge icon={<Cloud size={16} />} name="Azure Services" />
              <CloudSkillBadge icon={<CloudDownload size={16} />} name="Load Balancing" />
              <CloudSkillBadge icon={<CloudUpload size={16} />} name="Auto Scaling" />
            </div>
          </div>
          
          {/* Development Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code size={28} className="text-cloud-dark" />
              <h3 className="text-2xl font-bold text-gray-800">Development</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <DevSkillCard skill="JavaScript" color="bg-yellow-500" />
              <DevSkillCard skill="React" color="bg-blue-400" />
              <DevSkillCard skill="Node.js" color="bg-green-600" />
              <DevSkillCard skill="HTML/CSS" color="bg-orange-500" />
              <DevSkillCard skill="TypeScript" color="bg-blue-600" />
              <DevSkillCard skill="Python" color="bg-yellow-600" />
              <DevSkillCard skill="Git" color="bg-red-500" />
              <DevSkillCard skill="Database Management" color="bg-purple-500" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cloud text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            I'm currently available for freelance work and collaboration opportunities.
            Let's build something great together!
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold hover:bg-blue-500">
            <Link to="/contact" className="flex items-center gap-2">
              Contact Me <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="card-hover">
    <CardContent className="p-8 flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const CloudSkillBadge = ({ icon, name }: { icon: React.ReactNode, name: string }) => (
  <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] group">
    <div className="text-cloud-dark group-hover:text-cloud-dark">{icon}</div>
    <span className="font-medium text-gray-800">{name}</span>
  </div>
);

const DevSkillCard = ({ skill, color }: { skill: string, color: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] group overflow-hidden relative">
    <div className={`absolute left-0 top-0 w-1 h-full ${color}`}></div>
    <span className="font-medium text-gray-800 pl-2">{skill}</span>
  </div>
);

export default Home;

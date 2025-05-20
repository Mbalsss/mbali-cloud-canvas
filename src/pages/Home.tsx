
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

      {/* Skills Section - Redesigned */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Technical Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise in cloud technologies and development tools
            </p>
          </div>
          
          {/* Cloud Skills */}
          <div className="mb-16">
            <div className="flex flex-col items-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <CloudCog size={32} className="text-cloud-dark" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Cloud Computing</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <CloudSkillCard 
                icon={<CloudUpload />} 
                name="AWS EC2" 
                description="Virtual server management in Amazon's cloud" 
              />
              <CloudSkillCard 
                icon={<CloudDownload />} 
                name="AWS S3" 
                description="Scalable cloud storage solutions" 
              />
              <CloudSkillCard 
                icon={<CloudCog />} 
                name="Lambda" 
                description="Serverless compute service" 
              />
              <CloudSkillCard 
                icon={<Cloud />} 
                name="CloudFormation" 
                description="Infrastructure as code" 
              />
              <CloudSkillCard 
                icon={<CloudCog />} 
                name="IAM & Security" 
                description="Identity and access management" 
              />
              <CloudSkillCard 
                icon={<Cloud />} 
                name="Azure Services" 
                description="Microsoft cloud solutions" 
              />
              <CloudSkillCard 
                icon={<CloudDownload />} 
                name="Load Balancing" 
                description="Traffic distribution across servers" 
              />
              <CloudSkillCard 
                icon={<CloudUpload />} 
                name="Auto Scaling" 
                description="Dynamic resource management" 
              />
            </div>
          </div>
          
          {/* Development Skills */}
          <div>
            <div className="flex flex-col items-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Code size={32} className="text-cloud-dark" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Development</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <DevSkillPill skill="JavaScript" color="from-yellow-400 to-yellow-500" icon="⚡" />
              <DevSkillPill skill="React" color="from-blue-400 to-blue-500" icon="⚛️" />
              <DevSkillPill skill="Node.js" color="from-green-500 to-green-600" icon="🚀" />
              <DevSkillPill skill="HTML/CSS" color="from-orange-400 to-orange-500" icon="🎨" />
              <DevSkillPill skill="TypeScript" color="from-blue-500 to-blue-600" icon="🔷" />
              <DevSkillPill skill="Python" color="from-yellow-500 to-yellow-600" icon="🐍" />
              <DevSkillPill skill="Git" color="from-red-400 to-red-500" icon="🔄" />
              <DevSkillPill skill="Database Management" color="from-purple-400 to-purple-500" icon="🗃️" />
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

const CloudSkillCard = ({ icon, name, description }: { icon: React.ReactNode, name: string, description: string }) => (
  <div className="group">
    <div className="bg-white rounded-lg p-6 shadow-sm h-full transition-all duration-300 group-hover:shadow-md group-hover:translate-y-[-4px] border border-gray-100 flex flex-col items-center text-center">
      <div className="mb-3 p-3 rounded-full bg-blue-50 text-cloud-dark">{icon}</div>
      <h4 className="font-semibold text-lg mb-1">{name}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const DevSkillPill = ({ skill, color, icon }: { skill: string, color: string, icon: string }) => (
  <div className="group">
    <div className={`bg-gradient-to-r ${color} rounded-full px-4 py-2 text-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}>
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{skill}</span>
    </div>
  </div>
);

export default Home;

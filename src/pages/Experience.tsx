
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Experience = () => {
  return (
    <div className="pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Experience & Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            My professional journey and notable projects in cloud computing and development
          </p>
        </div>
      </section>
      
      {/* Tabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            
            <TabsContent value="experience" className="space-y-6">
              <ExperienceCard
                role="Cloud Associate"
                company="Capaciti"
                period=" 2025 - Present"
                description="focused on modern cloud technologies, DevOps, and cloud-native application design, with hands-on experience through training and team projects."
                skills={[]}
              />
              
              <ExperienceCard
                role="Software Development Intern"
                company="Pillar 5 Group"
                period=" July 2024 - December 2024"
                description="Assisted in developing full stack applications using modern JavaScript frameworks. Collaborated with senior developers to implement new features and fix bugs."
                skills={[]}
              />
              
            
            </TabsContent>
            
            <TabsContent value="projects" className="space-y-8">
              <ProjectCard
                title="Cloud-Based E-commerce Platform"
                description="Developed a scalable e-commerce platform using AWS services. Implemented serverless architecture to handle variable loads and ensure high availability."
                technologies={["AWS Lambda", "DynamoDB", "API Gateway", "S3", "CloudFront"]}
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
              
              <ProjectCard
                title="Real-Time Analytics Dashboard"
                description="Created a real-time analytics dashboard for monitoring cloud resources and application performance. Implemented data visualization and alert systems."
                technologies={["React", "D3.js", "WebSockets", "AWS CloudWatch", "Node.js"]}
                image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
              
              <ProjectCard
                title="Serverless Content Management System"
                description="Built a serverless CMS that allows content creators to manage digital assets and publish content. Implemented authentication and role-based access control."
                technologies={["AWS Amplify", "GraphQL", "React", "Cognito", "S3"]}
                image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

const ExperienceCard = ({ role, company, period, description, skills }: { 
  role: string, 
  company: string, 
  period: string, 
  description: string, 
  skills: string[] 
}) => (
  <Card className="overflow-hidden">
    <CardContent className="p-0">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 bg-gray-50 p-6 flex flex-col">
          <h3 className="text-xl font-bold text-gray-800">{role}</h3>
          <h4 className="text-lg font-medium text-cloud-dark mb-2">{company}</h4>
          <div className="flex items-center text-gray-500">
            <Calendar size={16} className="mr-2" />
            <span>{period}</span>
          </div>
        </div>
        <div className="md:w-3/4 p-6">
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ProjectCard = ({ title, description, technologies, image }: {
  title: string,
  description: string,
  technologies: string[],
  image: string
}) => (
  <Card className="overflow-hidden card-hover">
    <CardContent className="p-0">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <div className="h-full">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} className="bg-cloud text-white">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default Experience;

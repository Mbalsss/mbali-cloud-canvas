
import { Github, ExternalLink, FolderOpen } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  return (
    <div className="pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Showcasing my work in cloud computing and full stack development
          </p>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Cloud-Based E-commerce Platform"
              description="Built a scalable e-commerce platform using serverless architecture on AWS. Implemented microservices for product management, user authentication, and order processing."
              technologies={["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront", "React"]}
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            
            <ProjectCard 
              title="Real-Time Analytics Dashboard"
              description="Developed a real-time analytics dashboard for monitoring cloud resources and application performance. Implemented data visualization and alert systems."
              technologies={["React", "D3.js", "AWS CloudWatch", "Node.js", "WebSockets"]}
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            
            <ProjectCard 
              title="Serverless Content Management System"
              description="Created a serverless CMS that allows content creators to manage digital assets and publish content. Implemented authentication and role-based access control."
              technologies={["AWS Amplify", "GraphQL", "React", "Cognito", "S3"]}
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubUrl="https://github.com"
            />
            
            <ProjectCard 
              title="Cloud Resource Optimizer"
              description="Built a tool that analyzes cloud resource usage and provides optimization recommendations to reduce costs and improve performance."
              technologies={["Python", "AWS SDK", "CloudFormation", "Docker", "React"]}
              image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubUrl="https://github.com"
            />
            
            <ProjectCard 
              title="Multi-Cloud Deployment Framework"
              description="Developed a framework for deploying applications across multiple cloud providers. Includes infrastructure as code templates and CI/CD pipelines."
              technologies={["Terraform", "AWS", "Azure", "GitHub Actions", "Node.js"]}
              image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubUrl="https://github.com"
            />
            
            <ProjectCard 
              title="Secure File Sharing Application"
              description="Created a secure file sharing application with end-to-end encryption, access controls, and audit logging. Deployed on AWS with high availability."
              technologies={["React", "Node.js", "AWS S3", "Lambda", "DynamoDB"]}
              image="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, technologies, image, githubUrl, liveUrl }: ProjectCardProps) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
    </div>
    <CardContent className="p-6">
      <div className="flex items-start gap-3">
        <div className="mt-1">
          <FolderOpen size={20} className="text-cloud" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <Badge key={index} className="bg-cloud/10 text-cloud-dark hover:bg-cloud/20">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter className="px-6 pb-6 pt-0 gap-3">
      <Button asChild variant="outline" size="sm" className="gap-2">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Github size={16} />
          Code
        </a>
      </Button>
      {liveUrl && (
        <Button asChild size="sm" className="gap-2 bg-cloud hover:bg-cloud-dark">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            Live Demo
          </a>
        </Button>
      )}
    </CardFooter>
  </Card>
);

export default Projects;

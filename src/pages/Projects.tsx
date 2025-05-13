
import { Github, ExternalLink, FolderOpen, Mail, Download } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
          
          {/* Call-to-Actions */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button asChild size="lg" className="gap-2 bg-cloud hover:bg-cloud-dark">
              <Link to="/contact">
                <Mail size={18} />
                Get in Touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="/path-to-cv.pdf" download>
                <Download size={18} />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Nursery Service System"
              description="Built a digital solution for clinic-based nursery services to streamline check-ins and reduce wait times. Implemented user authentication, real-time updates, and an intuitive interface for parents and staff."
              technologies={["React", "Node.js", "Express", "MongoDB", "AWS"]}
              image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubUrl="https://github.com"
              period="September - December 2023"
            />
            
            <ProjectCard 
              title="Capstone Florist Web Application"
              description="Developed a full-stack florist management system tailored for small businesses. Features include inventory management, order processing, customer database, and an e-commerce storefront with secure payment processing."
              technologies={["React", "TypeScript", "Firebase", "Stripe", "Tailwind CSS"]}
              image="https://images.unsplash.com/photo-1596438459194-f275f413d6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
              period="March - October 2023"
            />
            
            <ProjectCard 
              title="Task Management App"
              description="Created a comprehensive task management application using Google App Sheet for teams to track projects, assign tasks, and monitor deadlines. Implemented automation features to improve workflow efficiency."
              technologies={["Google App Sheet", "Google Cloud", "Workflow Automation"]}
              image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubUrl="https://github.com"
              period="2023"
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
  period: string;
}

const ProjectCard = ({ title, description, technologies, image, githubUrl, liveUrl, period }: ProjectCardProps) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
    </div>
    <CardContent className="p-6 flex-grow">
      <div className="flex items-start gap-3">
        <div className="mt-1">
          <FolderOpen size={20} className="text-cloud" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="text-sm text-gray-500 mb-2">{period}</div>
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
    <CardFooter className="px-6 pb-6 pt-0 gap-3 mt-auto">
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


import { Github, ExternalLink, FolderOpen, Download } from 'lucide-react';
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
          <div className="mt-8 flex justify-center">
            <Button asChild variant="default" size="lg" className="gap-2 bg-cloud hover:bg-cloud-dark">
              <a href="/path-to-your-cv.pdf" download="Motlalepula_Mbali_Kgatlhane_CV.pdf">
                <Download size={16} />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <ProjectCard  
              title="Capstone Florist Web Application"
              description="Developed a full-stack florist management system tailored for small businesses. The app supports product inventory, customer orders, and admin functionality."
              technologies={["Java", "Angular", "Spring Boot", "MySQL"]}
              image="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubUrl="https://github.com/Mbalsss/Nursery-Web-Application-Client-Side"
              liveUrl="https://example.com" // Replace with actual live demo URL
              />

            
            <ProjectCard  
            title="JobSwiper"
            description="Built a responsive job matching web app allowing users to swipe through job listings. Developed using PHP for backend logic and HTML, CSS, JavaScript for dynamic frontend interactions."
            technologies={["PHP", "HTML", "CSS", "JavaScript"]}
            image="https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            githubUrl="https://github.com/Mbalsss/JobSwiper"  
            liveUrl="https://github.com/Mbalsss/JobSwiper"    
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

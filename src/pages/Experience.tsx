import { Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  return (
    <div className="pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">Experience</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-center mb-8">
            My professional journey in cloud computing and software development, showcasing my growth and expertise in these fields.
          </p>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            <ExperienceCard
              role="Cloud Associate"
              company="Capaciti"
              period=" Feb 2025 - Present"
              description="Focused on modern cloud technologies, DevOps, and cloud-native application design, with hands-on experience through training and team projects."
              skills={["Cloud Computing", "React", "JavaScript", "Full Stack", "HTML/CSS"]}
            />
            
            <ExperienceCard
              role="Software Development Intern"
              company="Pillar 5 Group"
              period=" July 2024 - December 2024"
              description="Assisted in developing full stack applications using modern JavaScript frameworks. Collaborated with senior developers to implement new features and fix bugs."
              skills={["React", "JavaScript", "HTML/CSS", "Full Stack"]}
            />
          </div>
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

export default Experience;

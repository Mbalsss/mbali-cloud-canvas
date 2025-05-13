
import { School, Calendar, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Education = () => {
  return (
    <div className="pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Education</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            My academic background and continuous learning journey in cloud computing and development
          </p>
        </div>
      </section>
      
      {/* Education Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {/* Formal Education */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <School size={24} className="text-cloud" />
                Formal Education
              </h2>
              
              <div className="space-y-6">
                <EducationCard
                  institution="Cape Peninsula University of Technology (CPUT)"
                  degree="Diploma in ICT Application Development"
                  period="2022 - 2024"
                  description="Completed a comprehensive diploma focused on application development, learning various programming languages, software development methodologies, and database management systems. Coursework included web development, programming principles, database design, and cloud computing fundamentals."
                  achievements={[
                    "Specialized in web technologies",
                    "Developed a cloud-based application for my capstone project",
                    "Received recognition for academic excellence"
                  ]}
                />
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award size={24} className="text-cloud" />
                Certifications
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CertificationCard
                  name="AWS Certified Cloud Practitioner"
                  issuer="Amazon Web Services"
                  date="2023"
                  description="Foundational certification validating cloud fluency and understanding of AWS Cloud basics, services, and security."
                />
                
                <CertificationCard
                  name="Microsoft Azure Fundamentals (AZ-900)"
                  issuer="Microsoft"
                  date="2023"
                  description="Certification confirming knowledge of cloud concepts, Azure services, security, privacy, and compliance."
                />
                
                <CertificationCard
                  name="JavaScript Algorithms and Data Structures"
                  issuer="freeCodeCamp"
                  date="2022"
                  description="Certification in advanced JavaScript concepts, algorithms and data structures implementations."
                />
                
                <CertificationCard
                  name="Full Stack Web Development"
                  issuer="Udemy"
                  date="2022"
                  description="Comprehensive certification covering front-end and back-end web development technologies including React and Node.js."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const EducationCard = ({ 
  institution, 
  degree, 
  period, 
  description, 
  achievements 
}: { 
  institution: string, 
  degree: string, 
  period: string, 
  description: string, 
  achievements: string[] 
}) => (
  <Card>
    <CardHeader className="bg-gray-50">
      <CardTitle>
        <div className="space-y-1">
          <h3 className="text-xl font-bold">{institution}</h3>
          <p className="text-lg font-medium text-cloud-dark">{degree}</p>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar size={14} className="mr-2" />
            <span>{period}</span>
          </div>
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent className="pt-6">
      <p className="text-gray-700 mb-4">{description}</p>
      
      {achievements.length > 0 && (
        <>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold mb-2">Key Achievements</h4>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 min-w-[6px] h-1.5 bg-cloud rounded-full"></span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </CardContent>
  </Card>
);

const CertificationCard = ({ 
  name, 
  issuer, 
  date, 
  description 
}: { 
  name: string, 
  issuer: string, 
  date: string, 
  description: string 
}) => (
  <Card className="card-hover">
    <CardContent className="pt-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-cloud-light">
          <Award size={20} className="text-cloud-dark" />
        </div>
        <div>
          <h3 className="font-bold mb-1">{name}</h3>
          <p className="text-sm text-gray-500 mb-2">{issuer} • {date}</p>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const LearningItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="mt-1.5 min-w-[6px] h-1.5 bg-cloud rounded-full"></span>
    <span>{children}</span>
  </li>
);

export default Education;


import { School, Calendar, Award, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { 
  Collapsible, 
  CollapsibleTrigger, 
  CollapsibleContent 
} from '@/components/ui/collapsible';

const Education = () => {
  const [openCertificate, setOpenCertificate] = useState<string | null>(null);

  const toggleCertificate = (id: string) => {
    setOpenCertificate(openCertificate === id ? null : id);
  };

  return (
    <div className="pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Education</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            My academic background and continuous learning journey
          </p>
        </div>
      </section>

      {/* Education Content - Using a 2-column layout */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formal Education */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <School size={24} className="text-cloud" />
                Formal Education
              </h2>

              <div className="space-y-4">
                <EducationCard
                  institution="Cape Peninsula University of Technology (CPUT)"
                  degree="Diploma in ICT Application Development"
                  period="2022 - 2025"
                  description="Completed a comprehensive diploma focused on application development, learning various programming languages, software development methodologies, and database management systems."
                  achievements={[]}
                />

                <EducationCard
                  institution="Richfield Graduate Institute of Technology"
                  degree="Higher Certificate in Information Technology"
                  period="2021"
                  description="One-year certificate program providing foundational IT knowledge including computer systems, networking basics, and information systems."
                  achievements={[]}
                />

                <EducationCard
                  institution="Allen Glen High School"
                  degree="National Senior Certificate"
                  period="2020"
                  description="Completed the South African secondary school qualification with a focus on mathematics, accounting, and computer applications technology."
                  achievements={[]}
                />
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award size={24} className="text-cloud" />
                Certifications
              </h2>

              <div className="space-y-4">
                <CertificationCard
                  id="network-cloud"
                  name="Introduction to Networking and Cloud Computing"
                  issuer="Coursera"
                  date="Completed"
                  description="Introductory course covering the basics of networking principles and cloud infrastructure."
                  isOpen={openCertificate === "network-cloud"}
                  toggle={() => toggleCertificate("network-cloud")}
                  certificateUrl="/certificates/networking-cloud-cert.pdf"
                />
                <CertificationCard
                  id="gcp-core"
                  name="Google Cloud Fundamentals: Core Infrastructure"
                  issuer="Coursera"
                  date="Completed"
                  description="Introduction to core Google Cloud services and infrastructure, focusing on scalability, security, and cost efficiency."
                  isOpen={openCertificate === "gcp-core"}
                  toggle={() => toggleCertificate("gcp-core")}
                  certificateUrl="/certificates/gcp-core-cert.pdf"
                />
                <CertificationCard
                  id="gcp-apps"
                  name="Developing Applications with Google Cloud: Foundations"
                  issuer="Coursera"
                  date="Completed"
                  description="Course covering application development using Google Cloud, including GCP SDKs and deployment strategies."
                  isOpen={openCertificate === "gcp-apps"}
                  toggle={() => toggleCertificate("gcp-apps")}
                  certificateUrl="/certificates/gcp-apps-cert.pdf"
                />
                <CertificationCard
                  id="aws-tech"
                  name="AWS Cloud Technical Essentials"
                  issuer="Coursera"
                  date="Completed"
                  description="Technical overview of AWS core services, architecture, and best practices for cloud adoption."
                  isOpen={openCertificate === "aws-tech"}
                  toggle={() => toggleCertificate("aws-tech")}
                  certificateUrl="/certificates/aws-tech-cert.pdf"
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
  achievements,
}: {
  institution: string;
  degree: string;
  period: string;
  description: string;
  achievements: string[];
}) => (
  <Card>
    <CardHeader className="bg-gray-50 py-4">
      <CardTitle>
        <div className="space-y-1">
          <h3 className="text-lg font-bold">{institution}</h3>
          <p className="text-base font-medium text-cloud-dark">{degree}</p>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar size={14} className="mr-2" />
            <span>{period}</span>
          </div>
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent className="pt-4 pb-4">
      <p className="text-gray-700 text-sm">{description}</p>

      {achievements.length > 0 && (
        <>
          <Separator className="my-3" />
          <div>
            <h4 className="font-semibold mb-2 text-sm">Key Achievements</h4>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
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
  id,
  name,
  issuer,
  date,
  description,
  isOpen,
  toggle,
  certificateUrl,
}: {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
  isOpen: boolean;
  toggle: () => void;
  certificateUrl: string;
}) => (
  <Card className="card-hover overflow-hidden">
    <CardContent className="p-4">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-full bg-cloud-light">
          <Award size={18} className="text-cloud-dark" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-base mb-1">{name}</h3>
          <p className="text-sm text-gray-500 mb-2">
            {issuer} • {date}
          </p>
          
          <Collapsible open={isOpen}>
            <CollapsibleContent className="text-gray-700 text-sm pb-3">
              {description}
            </CollapsibleContent>
            
            <div className="flex items-center justify-between mt-1">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs flex items-center gap-1 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                asChild
              >
                <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
                  <Eye size={14} />
                  View Certificate
                </a>
              </Button>
              
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={toggle}
                  className="text-xs"
                >
                  {isOpen ? (
                    <ChevronUp size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  )}
                  {isOpen ? 'Less' : 'Details'}
                </Button>
              </CollapsibleTrigger>
            </div>
          </Collapsible>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default Education;

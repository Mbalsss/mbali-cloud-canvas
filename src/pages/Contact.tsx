import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Github } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form data:", data);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Get in touch for collaboration opportunities or to discuss your project ideas
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Methods */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <ContactMethod
                  icon={<Mail size={24} className="text-cloud" />}
                  title="Email"
                  content="Mbalikgatlhane34@gmail.com"
                  link="mailto:Mbalikgatlhane34@gmail.com"
                />

                <ContactMethod
                  icon={<Phone size={24} className="text-cloud" />}
                  title="Phone"
                  content="+27 72 253 9714"
                />

                <ContactMethod
                  icon={<MapPin size={24} className="text-cloud" />}
                  title="Location"
                  content="Cape Town, South Africa"
                />
              </div>

              <div className="mt-12">
                <h3 className="font-bold text-lg mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <SocialLink
                    href="https://www.linkedin.com/in/motlalepula-mbali-kgatlhane-67989921b"
                    label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </SocialLink>

                  <SocialLink href="https://github.com/Mbalsss" label="GitHub">
                    <Github size={20} />
                  </SocialLink>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="block font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          {...register("name", { required: "Name is required" })}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email address"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Subject of your message"
                        {...register("subject", { required: "Subject is required" })}
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-500">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={6}
                        {...register("message", { required: "Message is required" })}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full md:w-auto bg-cloud hover:bg-cloud-dark"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0..." />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={16} />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Contact Method component
const ContactMethod = ({
  icon,
  title,
  content,
  link = "#"
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-full bg-cloud-light">{icon}</div>
    <div>
      <h3 className="font-bold mb-1">{title}</h3>
      {link ? (
        <a href={link} className="text-gray-700 hover:text-cloud-dark" target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <p className="text-gray-700">{content}</p>
      )}
    </div>
  </div>
);

// Fixed SocialLink usage
const SocialLink = ({ href, children, label }: { href: string; children: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-cloud hover:text-white transition-colors"
    aria-label={label}
  >
    {children}
  </a>
);

export default Contact;

import { Award } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Advanced React Development",
      organization: "Meta",
      date: "December 2023",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "UI/UX Design Professional",
      organization: "Google",
      date: "October 2023",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Full Stack Development",
      organization: "IBM",
      date: "August 2023",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "AWS Cloud Practitioner",
      organization: "Amazon",
      date: "July 2023",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Machine Learning Fundamentals",
      organization: "Stanford",
      date: "June 2023",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="certificates" className="my-10">
      <div className="w-full max-w-[92%] md:max-w-full mx-auto px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          My Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-[#196EF8]/80 from-[#196EF8]/80 to-accent/20 hover:border-[#F9FBFF]/80 transition-all duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <div className="p-6 bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                </div>
                <p className="text-muted-foreground">{cert.organization}</p>
                <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
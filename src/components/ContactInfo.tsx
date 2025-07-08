import { MapPin, Phone, Mail } from 'lucide-react';
import locationIcon from '@/assets/location-icon.png';
import phoneIcon from '@/assets/phone-icon.png';
import emailIcon from '@/assets/email-icon.png';

const ContactInfo = () => {
  const contactData = [
    {
      icon: locationIcon,
      title: "Office Location",
      content: "Haridwar Near Jwalapur Railway station 249407",
      lucideIcon: MapPin
    },
    {
      icon: phoneIcon,
      title: "Phone",
      content: "+91  9557042342",
      link: "tel:+91 9557042342",
      lucideIcon: Phone
    },
    {
      icon: emailIcon,
      title: "Email",
      content: "wellvestltd@gmail.com",
      link: "mailto:wellvestltd@gmail.com",
      lucideIcon: Mail
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {contactData.map((item, index) => (
            <div
              key={index}
              className="contact-card group hover:scale-105 animate-fade-in p-6 md:p-8 bg-white rounded-lg shadow-md relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Decorative shapes */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-orange-brand/10 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
              <div className="absolute top-8 right-8 w-4 h-4 bg-orange-brand/20 rounded-sm rotate-12 group-hover:rotate-45 transition-transform duration-300"></div>
              
              {/* Icon */}
              <div className="contact-icon group-hover:scale-110 transition-transform duration-300 mb-6">
                <item.lucideIcon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text-dark mb-4">
                {item.title}
              </h3>
              
              {item.link ? (
                <a
                  href={item.link}
                  className="text-text-light hover:text-orange-brand transition-colors duration-200 text-base md:text-lg break-words"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-text-light text-base md:text-lg break-words">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
import { MapPin, Mail, Phone } from 'lucide-react';
import WhatsAppOrderForm from './WhatsAppOrderForm';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-espresso mb-4">
            Contact & Order
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-espresso mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-espresso mb-1">Address</h4>
                    <p className="text-espresso/70">
                      123 Coffee Street<br />
                      Brewtown, BT 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-espresso mb-1">Phone</h4>
                    <p className="text-espresso/70">
                      (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-espresso mb-1">Email</h4>
                    <p className="text-espresso/70">
                      hello@brewandbean.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8">
              <h4 className="font-semibold text-espresso mb-4">Find Us</h4>
              <div className="w-full h-64 sm:h-80 rounded-card overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132389576!2d-73.98811768459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Coffee Shop Location"
                ></iframe>
              </div>
              <p className="text-sm text-espresso/60 mt-2">
                * Map placeholder - Replace with your actual location
              </p>
            </div>
          </div>

          {/* WhatsApp Order Form */}
          <div>
            <WhatsAppOrderForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import { FC, ReactElement } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import { ContactButton, SectionHeader } from "@/src/components";

export const Contact: FC = (): ReactElement => (
  <section className="scroll-mt-[88px] bg-white pt-24" id="contact">
    <div className="container mx-auto flex justify-center gap-5 px-5 max-lg:flex-col">
      <div className="space-y-5">
        <SectionHeader
          className={{ container: "max-w-[600px]", title: "text-4xl sm:text-5xl md:text-6xl" }}
          description="Feel free to reach out to us for any inquiries or bookings. We're here to provide you with exceptional service and ensure your special moments are unforgettable. Let's get in touch and create something beautiful together."
          subtitle="CONTACT US"
          title="Get In Touch"
        />

        <address className="space-y-5 text-nowrap">
          <ContactButton
            className={{ label: "max-[480px]:text-xl max-[420px]:text-lg max-[380px]:text-base max-[350px]:text-sm" }}
            icon={<FaLocationDot className="-mr-px" size={25} />}
            label="Padang, Padang City, West Sumatra"
            url="https://maps.app.goo.gl/ZzjRDTfPCRsXefUi7"
          />

          <ContactButton
            className={{ label: "max-[480px]:text-xl max-[420px]:text-lg max-[380px]:text-base max-[350px]:text-sm" }}
            icon={<MdEmail className="-mr-px" size={25} />}
            label="hastinulcmakeupart@gmail.com"
            url="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhbqXwZZlCGblTvnSbqqVScKFDqJfllGdJbTKMLRgGBvTbLsrZdPLRtZDfHVQzxnvVTfTq"
          />

          <ContactButton
            className={{ label: "max-[480px]:text-xl max-[420px]:text-lg max-[380px]:text-base max-[350px]:text-sm" }}
            icon={<IoLogoWhatsapp className="-mr-px" size={25} />}
            label="(+62) 8576-2346-703"
            url="https://wa.me/6285762346703"
          />
        </address>
      </div>

      <iframe
        className="w-full rounded-lg border-2 border-rose-200 shadow-md"
        height={500}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127657.2018081007!2d100.23537600480148!3d-0.9345801412152906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b942e2b117bb%3A0xb8468cb5c3046ba5!2sPadang%2C%20Padang%20City%2C%20West%20Sumatra!5e0!3m2!1sen!2sid!4v1737091168673!5m2!1sen!2sid"
        title="Google Maps"
        width={1000}
      />
    </div>
  </section>
);

import React from "react";
import { IoMdMail } from "react-icons/io";
import { ABOUT_ME } from "../utils/data";
import ContactInfoCard from "../components/ContactInfoCard";
import { IoPhonePortraitOutline } from "react-icons/io5";

const ContactMe = () => {
  return (
    <section id="contact" className="mt-20">
      <div className="container mx-auto px-10">
        <h4 className="section-title">Contact Me</h4>

        <p className="text-sm text-center mt-4 leading-6">
          A versatile developer with hands-on expertise in modern technologies,
          tools, and frameworks, dedicated to building efficient, scalable, and
          user-centric solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-8">
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard
              icon={<IoPhonePortraitOutline />}
              text={ABOUT_ME.phone}
            />
          </div>

          <div>
            <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">
              Contact Form
            </h5>
            <form
              className="flex flex-col"
              action="https://formspree.io/f/mayzaokg"
              method="POST"
            >
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                id=""
                className="input-box"
                autoComplete="off"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                id=""
                className="input-box"
                autoComplete="off"
                required
              />

              <textarea
                name="message"
                id=""
                rows={3}
                className="input-box max-h-52 min-h-24"
                required
              ></textarea>
              <button className="action-btn btn-scale-anim rounded-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

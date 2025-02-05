import React from "react";
import { IoMdMail } from "react-icons/io";
import { ABOUT_ME } from "../utils/data";
import ContactInfoCard from "../components/ContactInfoCard";
import { IoPhonePortraitOutline } from "react-icons/io5";

const handleSubmit = (e) => {
  e.preventDefault();
};

const ContactMe = () => {
  return (
    <section id="contact">
      <div className="container mx-auto p-10">
        <h4 className="section-title">Contact Me</h4>

        <p className="text-sm text-center mt-4 leading-6">
          A versatile developer with hands-on expertise in modern technologies ,
          tools , and frameworks , dedicated to building to efficient , scalable
          ,and user-centric solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
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
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                id=""
                className="input-box"
                autoComplete="off"
              />

              <input
                type="text"
                name="email"
                placeholder="Email"
                id=""
                className="input-box"
                autoComplete="off"
              />

              <textarea
                name="message"
                id=""
                rows={3}
                className="input-box"
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

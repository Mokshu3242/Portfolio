import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false); // State to manage cooldown

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSending) {
      // If still within cooldown, prevent sending
      toast.warning("Please wait 10 seconds before sending again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    setIsSending(true); // Disable sending
    emailjs
      .sendForm(
        "service_njv9fw9",
        "template_fr8xwfp",
        form.current,
        "tCHvymddHLxbUPmdw"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          // Re-enable form submission after 10 seconds
          setTimeout(() => {
            setIsSending(false);
          }, 10000); // 10 seconds delay
        },
        (error) => {
          toast.error("Failed to send message.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setIsSending(false); // Reset sending state if failed
        }
      );
      e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get In Touch</h2>
      <span className="section_subtitle">Contact Me</span>

      <div className="contact_container container grid">
        {/* Left Section */}
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>
          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>
              <h3 className="contact_card-title">Email:</h3>
              <span className="contact_card-data">mokshadsankhe@gmail.com</span>
              <a href="mailto:mokshadsankhe@gmail.com" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>
              <h3 className="contact_card-title">Whatsapp:</h3>
              <span className="contact_card-data">8446542347</span>
              <a href="https://dm.wa.link/co876j" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-linkedin contact_card-icon"></i>
              <h3 className="contact_card-title">LinkedIn:</h3>
              <span className="contact_card-data">@mokshad-sankhe</span>
              <a href="https://www.linkedin.com/in/mokshad-sankhe" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact_content">
          <h3 className="contact_title">Write me a project</h3>
          <form
              ref={form}
              onSubmit={sendEmail}
              className="contact_form space-y-6"
            >
              <div className="contact_form-div">
                <label className="contact_form-tag text-lg text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="contact_form-input w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition-all ease-in-out duration-300"
                  required
                />
              </div>

              <div className="contact_form-div">
                <label className="contact_form-tag text-lg text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="contact_form-input w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition-all ease-in-out duration-300"
                  required
                />
              </div>

              <div className="contact_form-div contact_form-area">
                <label className="contact_form-tag text-lg text-gray-700">
                  Message:
                </label>
                <textarea
                  name="message"
                  cols="30"
                  rows="6"
                  className="contact_form-input w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition-all ease-in-out duration-300"
                  placeholder="Write your message!"
                  required
                ></textarea>
              </div>

              {/* Hidden input to mark the form submission as from SupeCook */}
              <input type="hidden" name="website" value="Portfolio Website" />

              <button
                className="button w-full py-4 px-8 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 ease-in-out flex items-center justify-center"
                type="submit"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <span className="mr-2">Sending...</span>
                    <svg
                      className="animate-spin inline-block w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2v4l3-3-3-3zm0 16v4l-3-3 3-3zm0-8V6l-3 3 3 3z"
                        fill="currentColor"
                      />
                    </svg>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
        </div>
      </div>

      {/* Toast container to show notifications */}
      <ToastContainer />
    </section>
  );
};

export default Contact;

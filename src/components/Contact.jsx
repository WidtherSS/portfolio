import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
//function for form reset
function handleSubmit(e){
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4xivubb', 'template_uhn7ama', form.current, 'UqMRZ-FdK1LsN81qk')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <div
      name="contact"
      className="contact w-full h-screen  text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 flex flex-col justify-center text-center">
          <p className="text-4xl font-bold inline">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
          ref={form} onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="user_ email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button type="submit" className="text-white  px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

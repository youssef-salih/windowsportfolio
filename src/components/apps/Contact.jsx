import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RsLinks } from "./AboutYoussef";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactMe = () => {
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    setIsSending(true);
    e.preventDefault();
    emailjs
      .sendForm("service_7t9hlmu", "template_w69sio9", form.current, {
        publicKey: "_8zEpRt7efVrZu3kY",
      })
      .then(
        () => {
          setIsSending(false);
          toast.success("Email sent succesfully !!", {
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
          });
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          toast.error("Email not sent !!", {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
          });
        }
      );
  };

  return (
    <div className="h-full flex justify-center ">
      <div className="my-6">
        <div className="grid  sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
          <div>
            <h1 className="text-3xl font-extrabold">Let's Talk</h1>
            <p className="text-sm text-gray-400 mt-3">Aji hna yalkika</p>
            <div className="mt-12">
              <h2 className="text-lg font-extrabold">Email</h2>
              <ul className="mt-3">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#007bff"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <a
                    href="mailto:d.youssefsalih@gmail.com"
                    className="text-[#007bff] text-sm ml-3"
                  >
                    <small className="block">Mail</small>
                    <strong>d.youssefsalih@gmail.com</strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <h2 className="text-lg font-extrabold">Socials</h2>

              <RsLinks tooltip />
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="ml-auo space-y-4">
            <input
              name="from_name"
              type="text"
              placeholder="Name"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              required
            />
            <input
              name="email_id"
              type="email"
              placeholder="Email"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              required
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
              required
            ></textarea>
            <button
              type="submit"
              className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
            >
              {isSending && (
                <span className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></span>
              )}
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

export const displayGedit = () => {
  return <ContactMe></ContactMe>;
};

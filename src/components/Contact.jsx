import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "55e47ba6-aa1a-4e76-beaf-1949b269b782"); // ✅ Your Web3Forms Access Key

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Web3Forms Response:", data); // Debugging log

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully 🎉",
          icon: "success",
        });
        setResult(""); // clear status text
        event.target.reset();
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message || "Something went wrong ❌",
          icon: "error",
        });
        setResult("");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      Swal.fire({
        title: "Network Error!",
        text: "Please try again later.",
        icon: "error",
      });
      setResult("");
    }
  };

  return (
    <section id="contact" className="py-8">
      <h2 className="text-2xl font-bold">Contact</h2>

      <div className="mt-6 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border bg-white p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold mb-4">Send me a message</h3>

          <div className="grid gap-4">
            <input
              type="text"
              name="name"
              className="border rounded-lg p-3 focus:outline-blue-500"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              className="border rounded-lg p-3 focus:outline-blue-500"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              className="border rounded-lg p-3 focus:outline-blue-500"
              placeholder="Message"
              rows={5}
              required
            />
            <button
              type="submit"
              className="rounded-xl px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 font-medium transition"
            >
              Send Message
            </button>
            <p className="text-sm text-gray-600">{result}</p>
          </div>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border bg-white p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Email:</strong>
              <br />
              <a
                className="text-blue-600 hover:underline"
                href="mailto:rayadurgamswetha763@gmail.com"
              >
                rayadurgamswetha763@gmail.com
              </a>
            </p>

            <p>
              <strong>LinkedIn:</strong>
              <br />
              <a
                className="text-blue-600 hover:underline"
                href="https://linkedin.com/in/rayadurgamswetha-146b91269"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/rayadurgamswetha-146b91269
              </a>
            </p>

            <p>
              <strong>GitHub:</strong>
              <br />
              <a
                className="text-blue-600 hover:underline"
                href="https://github.com/swetha7890"
                target="_blank"
                rel="noreferrer"
              >
                github.com/swetha7890
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

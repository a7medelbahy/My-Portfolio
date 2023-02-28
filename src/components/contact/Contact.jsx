import "./contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="container">
        <div className="section">
          <h3 className="main-title">Contact Me</h3>
          <div className="contact-content py-3">
            <div className="row g-5 justify-content-center align-items-center">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

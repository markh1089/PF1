import { FaLinkedinIn, FaGithub, FaMailBulk } from "react-icons/fa";
import classes from "./Contact.module.css";
import { motion } from "framer-motion";

const handleURL = (url) => {
  return () => window.open(url, "_blank");
};
const Contact = () => {
  return (
    <div className={classes.Contact} id="contact">
      <motion.h1
        initial={{ scale: 3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className={classes.ContactHeader}
      >
        Contact Me
      </motion.h1>
      <div className={classes.ContactIcons}>
        <motion.div
        whileHover={{scale:1.3}}>
          <FaGithub
            color="white"
            size="30px"
            style={{ padding: "1%" }}
            onClick={handleURL("https://github.com/markh1089")}
          />
        </motion.div>

        <motion.div whileHover={{scale:1.3}}>
          <FaLinkedinIn
            color="white"
            size="30px"
            style={{ padding: "1%" }}
            onClick={handleURL(
              "https://www.linkedin.com/in/mark-hempel-0a5bb787/"
            )}
          />
        </motion.div>

        <motion.div whileHover={{scale:1.3}}>
          <FaMailBulk
            color="white"
            size="30px"
            style={{ padding: "1%" }}
            onClick={handleURL}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

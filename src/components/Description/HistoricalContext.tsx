import { motion } from "framer-motion";

export const HistoricalContext = () => {
  return (
    <div id="History" className="history-wrapper">
      {/* <h1 className="text-5xl pb-48 text-center">History</h1> */}
      <div className="wrapper">
        <div className="left">
          <motion.div
            className="element"
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ delay: 0.6, stiffness: 100, type: "spring" }}
          >
            <h1 className="">By 5000 BC :</h1>
            <p className="">
              Apollo is the ancient Greek god of music and of medicine and his
              son Aesculapius was said to cure diseases of the mind by using
              song and music. Plato said that music affected the emotions and
              could influence the character of an individual. Aristotle taught
              that music affects the soul and described music as a force that
              purified the emotions.
            </p>
          </motion.div>
          <motion.div
            className="element"
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ delay: 0.6, stiffness: 100, type: "spring" }}
          >
            <h1 className="">After 1900 :</h1>
            <p className="">
              Music therapy in the 20th and 21st centuries, as an
              evidence-based, allied healthcare profession, grew out of the
              aftermath of World Wars I and II, when, particularly in the United
              Kingdom and United States, musicians would travel to hospitals and
              play music for soldiers with war-related emotional and physical
              trauma. Using music to treat the mental and physical ailments of
              active duty military and veterans was not new.
            </p>
          </motion.div>
        </div>

        <div className="right">
          <motion.div
            className="element"
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ delay: 0.6, stiffness: 100, type: "spring" }}
          >
            <h1 className="">17th - 19th century :</h1>
            <p className="">
              Some books on music and medicine drew on the Brunonian system of
              medicine, arguing that the stimulation of the nerves caused by
              music could directly improve or harm health. Throughout the 19th
              century an impressive number of books and articles were authored
              by physicians in Europe and the United States discussing use of
              music as a therapeutic agent to treat both mental and physical
              illness
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

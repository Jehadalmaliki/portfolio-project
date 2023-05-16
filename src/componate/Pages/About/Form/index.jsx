import React from "react";
import styles from "./styles.module.css";
export default function Form() {
  return (
    <div className={styles.container}>
      <form className={styles.form}> 

    
            <input
              type="text"
              name="field1"
              className={`${styles.fieldDivided} ${styles.field}`}
              placeholder=" Name"
            />
            <input
              type="email"
              name="field3"
              className={styles.field}
              placeholder="Email"
            />
            <textarea
              name="field5"
              id="field5"
              className={styles.field}
              placeholder="Message"
            ></textarea>
  
            <input type="submit" value="Submit" className={styles.submitButton} />

      </form>
    </div>
  );
};

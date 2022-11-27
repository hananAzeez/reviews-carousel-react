import React, { useState } from "react";
import reviews from "../data";

//icons
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa";

//styles
import styles from "./Review.module.css";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const handleNext = () => {
    index == reviews.length - 1
      ? setIndex(0)
      : setIndex((prevIndex) => prevIndex + 1);
  };
  const handlePrevious = () => {
    index === 0
      ? setIndex(reviews.length - 1)
      : setIndex((prevIndex) => prevIndex - 1);
  };
  return (
    <div className={styles.container}>
      <div className={styles.reviewSection}>
        <h1 className={styles.mainTitle}>Reviews</h1>
        <div className={styles.reviewText}>
          <FaQuoteRight className={styles.quote} />
          <p>{text}</p>
          <div className={`${styles.next} ${styles.sliderBtn}`}>
            <MdOutlineArrowForwardIos
              className={styles.sliderIcon}
              style={{ color: "white" }}
              onClick={handleNext}
            />
          </div>
          <div className={`${styles.prev} ${styles.sliderBtn}`}>
            <MdOutlineArrowBackIosNew
              className={styles.sliderIcon}
              onClick={handlePrevious}
            />
          </div>
          <img src={image} alt="" className={styles.reviewerImage} />
        </div>
        <h3 className={styles.reviewer}>
          - {name}, {job}
        </h3>
      </div>
    </div>
  );
};

export default Review;

import React from "react";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from "./Pagination.module.scss";

interface Props {
  currentPage: number;
  numOfPages: number;
  nextPage: () => void;
  prevPage: () => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  numOfPages,
  nextPage,
  prevPage,
}) => {
  const renderPagination =
    //on page 1 and there are other pages
    currentPage === 1 && numOfPages > 1 ? (
      <button className={styles.pagination__btn} onClick={nextPage}>
        <span className={styles.btnContent}>
          {`Page ${currentPage + 1}`}
          {/* <FaArrowRight /> */}
        </span>
      </button>
    ) : //last page
    currentPage === numOfPages && numOfPages > 1 ? (
      <button className={styles.pagination__btn} onClick={prevPage}>
        <span className={styles.btnContent}>
          {/* <FaArrowLeft /> */}
          {`Page ${currentPage - 1}`}
        </span>
      </button>
    ) : //other pages
    currentPage < numOfPages ? (
      <div className={styles.pagination__btns}>
        <button className={styles.pagination__btn} onClick={prevPage}>
          <span className={styles.btnContent}>
            {/* <FaArrowLeft /> */}
            {`Page ${currentPage - 1}`}
          </span>
        </button>
        <button className={styles.pagination__btn} onClick={nextPage}>
          <span className={styles.btnContent}>
            {" "}
            {`Page ${currentPage + 1}`}
            {/* <FaArrowRight /> */}
          </span>
        </button>
      </div>
    ) : (
      //only one page- render nothing
      "  "
    );

  return <div className={styles.pagination}>{renderPagination}</div>;
};
export default Pagination;

"use client";
import clsx from "clsx";
import { Post } from "../types";
import styles from "./PostCard.module.css";
import { useState } from "react";

export const PostCard = ({ post }: { post: Post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, body } = post;

  const toggleModal = () => {
    setIsModalOpen((state) => !state);
  };

  return (
    <>
      <div
        title="Click to open"
        className={clsx("pointer", styles.postCard)}
        onClick={toggleModal}
      >
        <h5 className="text-center">{title}</h5>
        <p className="text-justify">{body.slice(0, 50)}...</p>
      </div>
      {isModalOpen && (
        <>
          <div
            title="Click here to close Modal"
            className={clsx("pointer", styles.postModal)}
            onClick={toggleModal}
          />
          <div className={clsx("", styles.card)}>
            <h5 className="text-center">{title}</h5>
            <p className="text-justify">{body}</p>
          </div>
        </>
      )}
    </>
  );
};

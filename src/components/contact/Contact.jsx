import "./contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import.meta.env;
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
 
export default function Contact() {
  
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bw85jha", "template_pu394j2", form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

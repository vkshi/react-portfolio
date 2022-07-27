import { useState, useEffect, useRef } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import emailjs from "@emailjs/browser";
import "./index.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zfbgryp",
        "template_2fjsudi",
        refForm.current,
        "Rl7abfxEeAARshJ74"
      )
      .then(
        () => {
          alert("Message sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message, please try again!");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
      <div className="container tab"></div>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"CONTACT ME".split("")}
              index={15}
            />
          </h1>
          <p>I am interested in full-time and freelance opportunities!</p>
          <form ref={refForm} onSubmit={sendEmail} className="contact-form">
            <label className="half">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
              ></input>
            </label>
            <label className="half">
              <input type="text" name="email" placeholder="Email" required />
            </label>
            <label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </label>
            <label>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                required
              />
            </label>
            <label>
              <input type="submit" className="flat-button" value="SEND" />
            </label>
          </form>
        </div>
        <div className="map-wrap">
        <div className="info-map">
            Ki Shi, <br />
            San Franscico, CA <br />
            <a href = "mailto: vkshi.vs@gmail.com" >Email</a> | <a href = "https://www.linkedin.com/in/vicky-shi-31483b117/" >LinkedIn</a> 
            <br /><br />
            Open to remote work!
          </div>
          <MapContainer
          center={[37.7749, -122.4194]}
          zoom={13}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'/>
            <Marker position={[37.773972, -122.431297]}>
                <Popup>Hi, send me an email! &#128522;</Popup>
            </Marker>
          </MapContainer>

          </div>
      </div>
      <Loader className="ball-scale-multiple" />
    </>
  );
};

export default Contact;

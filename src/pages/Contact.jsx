import React from "react";
import Card from "../components/Card";
import img from "/public/image.jpg";

function Contact() {
  return (
    <div className="flex">
      <div className="w-full h-full">
        <h1 className="text-4xl font-extrabold m-auto pl-40  font-mono pt-[20%]">
          OMONOV
        </h1>
        <h3 className="text-3xl font-semibold m-auto pl-40">
          Frontend Developer <br /> and Designer
        </h3>
        <p className="text-xl w-1/2  m-auto pt-4 pb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          animi enim dolorum consequuntur dignissimos quasi corporis at saepe et
          nemo odit iste ipsam ex possimus, nisi voluptatibus consectetur eaque.
          Saepe!
        </p>
        <button className="btn btn-primary mb-32 ml-40">
          <a href="https://t.me/Dasturchi_person" target="_blank">
            Contact me
          </a>
        </button>
        <button className="btn ses">+998 90 900 90 90</button>
      </div>
      <div className="W-1/2 h-full bg-sky-800 overflow-clip">
        <img className="w-[1600px]  h-[90vh]" src={img} alt="" />
      </div>
    </div>
  );
}

export default Contact;

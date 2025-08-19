import img from "/public/bgg.png";
import img2 from "/public/image copy.png";
import img3 from "/public/image copy 2.png";
import img4 from "/public/image copy 3.png";
import img5 from "/public/image copy 4.png";
import img6 from "/public/image.png"
import img7 from "/public/image copy 5.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function About() {
  return (
    <>
      <div className="flex">
        <div className="w-full h-full">
          <h1 className="text-4xl font-extrabold m-auto pl-[185px]  font-mono pt-[20%]">
            OMONOV
          </h1>
          <h3 className="text-3xl font-semibold  pl-[185px]">
            Frontend Developer
          </h3>
          <p className="text-xl w-1/2  m-auto pt-4 pb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus animi enim dolorum consequuntur dignissimos quasi
            corporis at saepe et nemo odit iste ipsam ex possimus, nisi
            voluptatibus consectetur eaque. Saepe!
          </p>
        </div>
        <div className="W-1/2 h-full  overflow-clip">
          <img className="w-[1600px]  h-[90vh]" src={img} alt="" />
        </div>
      </div>
      <div className="w-full h-[auto] grid grid-cols-3 p-10 ">
        <div className="dv w-96 rounded-3xl m-10 h-96 ">
          <i class="fa-brands fa-html5 fa-2xl "></i>
        </div>
        <div className="dv w-96 rounded-3xl m-10 h-96 ">
          <i class="fa-brands fa-css3 fa-2xl "></i>
        </div>
        <div className="dv w-96 rounded-3xl m-10 h-96 ">
          <i class="fa-brands fa-js fa-2xl " ></i>
        </div>
        <div className="dd w-96 rounded-3xl m h-96 ">
          <i class="fa-brands fa-react fa-2xl" ></i>
        </div>
      </div>
      <div className="cm w-full h-[1000px]  p-10 ">
        <div className="two">
          <img className="emgs" src={img2} alt="" />
        </div>{" "}
        <br />
        <div className="one">
          <img className="fmg" src={img4} alt="" />
        </div>
        <div className="ts w-[496px] absolute rounded-3xl m-10 h-[822px] ml-96 ">
          <h1 className="tet">ABOUT ME</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            nobis suscipit, voluptatem voluptates esse iusto voluptatum non
            necessitatibus. Dolore accusamus ex rem libero quidem magni
            voluptatum sapiente commodi repellendus aliquid. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Debitis, provident aliquid
            omnis voluptates minus consectetur? Voluptas error, ducimus
            laboriosam laborum nesciunt vero sapiente et, nemo assumenda natus
            incidunt. Corporis, dignissimos! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nisi eius debitis voluptas temporibus
            fugiat consectetur adipisci nulla. Repellat, quam quidem porro
            magnam, aliquam ea odio voluptatem ducimus, itaque voluptates
            nesciunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates accusantium, rerum eaque sapiente quisquam ipsum repellat
            enim quibusdam nobis, corrupti dolor sit tempora! Numquam quam eius
            fugiat in esse veritatis. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Facilis cumque eligendi consequuntur error aliquam
            autem vitae eaque sint consequatur, nemo et tempora ipsam
            exercitationem vero quidem dolorum nam accusamus culpa. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Libero necessitatibus,
            nesciunt modi possimus vel ratione consectetur facere repellendus,
            fuga repellat, dolore pariatur eius saepe omnis soluta magnam nihil.
            Harum, repellat. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Aut ratione non distinctio quod officiis reprehenderit alias
            officia rem necessitatibus doloremque dignissimos,
          </p>
        </div>
        <div className="yt">
          <img className="smg" src={img3} alt="" />
        </div>
      </div>


              <h1 className="h">Portfolio</h1>
      <Swiper

        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-[-100px]"
      >
        <SwiperSlide>
          <div className="pat">
            <img className="mgss absolute z-0" src={img5} alt="" />
            <div className="ssn text-center gap-10">
            <div className="eng">
                <h2 className="z-10 mb-5  mt-[-10px] ml-[-335px]">Landing Ice-cream</h2>
              <p className="z-40">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ut orci eu elit consequat posuere ut sed elit. Nulla et
                tristique felis. Morbi quis orci non purus blandit fringilla.
                Etiam et mollis eros. Duis venenatis vulputate lacus, non
                tristique eros placerat vel. Nam nec magna lacus. Etiam euismod
                egestas mauris nec mollis. Phasellus efficitur et ex vel
                condimentum. Cras enim purus, tempor sed massa vel, accumsan
                bibendum magna. cursus purus, sit amet viverra arcu gravida{" "}
                <br /> vel.
              </p>
              <a className="z-10  mt-[-10px] ml-[-335px]" href="#">More →</a>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pat">
            <img className="mgss absolute z-0" src={img6} alt="" />
            <div className="ssn text-center gap-10">
            <div className="eng">
                <h2 className="z-10 mb-5  mt-[-10px] ml-[-335px]">Landing Ice-cream</h2>
              <p className="z-40">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ut orci eu elit consequat posuere ut sed elit. Nulla et
                tristique felis. Morbi quis orci non purus blandit fringilla.
                Etiam et mollis eros. Duis venenatis vulputate lacus, non
                tristique eros placerat vel. Nam nec magna lacus. Etiam euismod
                egestas mauris nec mollis. Phasellus efficitur et ex vel
                condimentum. Cras enim purus, tempor sed massa vel, accumsan
                bibendum magna. cursus purus, sit amet viverra arcu gravida{" "}
                <br /> vel.
              </p>
              <a className="z-10  mt-[-10px] ml-[-335px]" href="#">More →</a>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pat">
            <img className="mgss absolute z-0" src={img7} alt="" />
            <div className="ssn text-center gap-10">
            <div className="eng">
                <h2 className="z-10 mb-5  mt-[-10px] ml-[-335px]">Landing Ice-cream</h2>
              <p className="z-40">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ut orci eu elit consequat posuere ut sed elit. Nulla et
                tristique felis. Morbi quis orci non purus blandit fringilla.
                Etiam et mollis eros. Duis venenatis vulputate lacus, non
                tristique eros placerat vel. Nam nec magna lacus. Etiam euismod
                egestas mauris nec mollis. Phasellus efficitur et ex vel
                condimentum. Cras enim purus, tempor sed massa vel, accumsan
                bibendum magna. cursus purus, sit amet viverra arcu gravida{" "}
                <br /> vel.
              </p>
              <a className="z-10  mt-[-10px] ml-[-335px]" href="#">More →</a>
            </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    
      <footer></footer>
    </>
  );
}

export default About;

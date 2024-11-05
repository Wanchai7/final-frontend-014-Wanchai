import React from "react";
import view from "../assets/images/sport.png";
import { FaShoppingBasket } from "react-icons/fa";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>SPORT & WANCHAI</span>
        </div>
        <div className="featured-name">
          I'm <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <h2>
            อุปกรณ์กีฬาหรือที่เรียกว่าอุปกรณ์กีฬาคือเครื่องมือ,วัสดุ
            เครื่องแต่งกาย,และอุปกรณ์ซึ่งมีรูปร่างขนาด
            และการใช้งานที่แตกต่างกันไปในกีฬาแต่ละประเภทซึ่งรวมถึงลูกบอล,ตาข่ายไม้ตี,อุปกรณ์ป้องกัน
            เช่น หมวกกันน็อค,แว่นตา เป็นต้น เนื่องจากผู้แสดงต้องใช้อุปกรณ์กีฬา
            จึงสามารถใช้ป้องกันตัวได้ด้วย
          </h2>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Shop Now <i className="uil uil-shop"></i>
          </button>
          <button className="btn">
            Know More <i className="uil uil-message"></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a
              href="https://www.instagram.com/wxnchxi._?igsh=MWw2bnV4dWZtZnM2Nw==

"
            >
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/share/wSgjnsyDJtt1sTQj/?mibextid=qi2Omg">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/Wanchai7">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={view} alt="avatar" />
        </div>
      </div>
    
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-shop"></i>
          <p>SHOP NOW</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;

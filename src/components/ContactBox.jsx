import React from 'react'

const ContactBox = () => {
  return (
    <section className="section" id="Contact">
      <div className="top-header">
        <h1>Get in touch</h1>
        <span>
          What kind of sports equipment do you need? You can ask for details.
        </span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              SPORT & WANCHAI {" "}
              <i className="uil uil -cornrt-right-down"></i>
            </h2>
            <h2>
              What do you want to ask?{" "}
              <i className="uil uil -cornrt-right-down"></i>
            </h2>
            <p>
              <i className="uil uil-envelop"></i>
              Email:wanchai.view47@gmail.com
            </p>
            <p>
              <i className="uil ui phon"></i>
              Tel: +66 95 508 9153
            </p>
          </div>
        </div>
        <div className="col">
          <div className="form-control">
            <div className="form-inputs">
              <input type="text" className="input-field" placeholder="name" />
              <input type="email" className="input-field" placeholder="email" />
            </div>
            <div className="text-area">
              <textarea placeholder="Message"></textarea>
            </div>
            <div className="form-button">
              <button className="btn">
                Send <i className="uil uil-message"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactBox

import React from "react";

const Mine = () => {
  return (
    <>
      <h1 className="text-center text-4xl my-10">
        {"About " + "&" + " Contact"}
      </h1>
      <div id="mine" className="mine">
        <div id="mine-left" className="card w-96 bg-base-100 card-mine">
          <div className="card-body">
            <h2 className="card-title">About Me</h2>
            <p className="text-justify">
              I am Faridul Haque Murshed, I was born in Sylhet, Bangladesh in
              1991. I have to leave school in 2003 due to family reasons and
              started back after a long time in 2017 and achieved Secondary
              School Certificate in 2020 from Bangladesh Open University.
              <br />
              <br />I love reading books, playing chess, and learning new
              languages. My favorite author is{" "}
              <a
                className="text-blue-400"
                href="https://en.wikipedia.org/wiki/Sarat_Chandra_Chattopadhyay"
                target="_blank"
              >
                Sarat Chandra Chattopadhyay
              </a>{" "}
              and my favorite chess player is{" "}
              <a
                className="text-blue-400"
                href="https://en.wikipedia.org/wiki/Mikhail_Tal"
                target="_blank"
              >
                Mikhail Tal
              </a>
              .
              <br />
              <br />
            </p>
          </div>
        </div>
        <div id="mine-right" className="card w-96 bg-base-100 card-mine">
          <div className="card-body">
            <h2 className="card-title">Contact Me</h2>
            <p>
              Email: faridmurshed9@gmail.com
              <br />
              Phone: +880 1996 438234
              <div className="mt-5">
                <a
                  className="social-link"
                  target="_blank"
                  href="https://www.linkedin.com/in/faridulhaquemurshed/"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  className="social-link"
                  target="_blank"
                  href="https://t.me/faridmurshed9"
                >
                  <i className="fa-brands fa-telegram"></i>
                </a>
                <a
                  className="social-link"
                  target="_blank"
                  href="https://www.facebook.com/farid.haque.585/"
                >
                  <i className="fa-brands fa-facebook-square"></i>
                </a>
              </div>
            </p>

            <div className="card-actions justify-end">
              <a
                href="https://form.jotform.com/221591432522045"
                target="_blank"
                className="btn btn-primary btn-block"
              >
                Send Me a message
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mine;

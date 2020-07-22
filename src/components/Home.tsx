import React from "react";
// import Typing from "react-typing-animation";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import * as Brands from "@fortawesome/free-brands-svg-icons";
// import { faAt } from "@fortawesome/free-solid-svg-icons";

// import Header from "./Header";

import "./__styles__/Home.scss";

export default function Home() {
  // return (
  //   <div>
  //     <Header />
  //     <div className="home">
  //       <div className="home-hello">Hello, my name is</div>
  //       <div className="home-name">
  //         <Typing>
  //           <strong>Alex Markowitz</strong>
  //         </Typing>
  //       </div>
  //       <hr />
  //       <div>
  //         <div className="home-contact">
  //           Contact me <FontAwesomeIcon icon={faAt} size="xs" />
  //           admarko on:
  //         </div>
  //         <div>
  //           <a
  //             href="http://www.github.com/admarko"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="home-icons"
  //           >
  //             <FontAwesomeIcon icon={Brands.faGithub} />
  //           </a>
  //           <a
  //             href="mailto:admarko@gmail.com?Subject=admarko.co"
  //             target="_top"
  //             rel="noopener noreferrer"
  //             className="home-icons"
  //           >
  //             <FontAwesomeIcon icon={Brands.faGoogle} />
  //           </a>
  //           <a
  //             href="http://www.linkedin.com/in/admarko"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="home-icons"
  //           >
  //             <FontAwesomeIcon icon={Brands.faLinkedinIn} />
  //           </a>
  //           <a
  //             href="http://www.instagram.com/admarko"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="home-icons"
  //           >
  //             <FontAwesomeIcon icon={Brands.faInstagram} />
  //           </a>
  //           <a
  //             href="http://www.facebook.com/admarko"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="home-icons"
  //           >
  //             <FontAwesomeIcon icon={Brands.faFacebookF} />
  //           </a>
  //           <a
  //             href="https://www.snapchat.com/add/admarko"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="home-icons"
  //           >
  //             <FontAwesomeIcon icon={Brands.faSnapchatGhost} />
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <article>
      <h1>I&rsquo;ll be back soon!</h1>
      <div>
        <p>
          Sorry for the inconvenience but I&rsquo;m performing some maintenance
          at the moment. If you need to you can always{" "}
          <a href="mailto:admarko@gmail.com">contact me</a>, otherwise
          i&rsquo;ll be back online shortly!
        </p>
        <p>&mdash; Alex</p>
      </div>
    </article>
  );
}

// "husky": {
//     "hooks": {
//       "pre-commit": "lint-staged && npm run lint && npm run lint:css"
//     }
//   }

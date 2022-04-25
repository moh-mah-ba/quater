import React from "react";
import { Link } from "react-router-dom";

const SocialContact = () => {
  return (
    <div className="ltn__social-media">
      <ul>
        <li>
          <a href="https://www.facebook.com" title="Facebook">
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" title="Twitter">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" title="Instagram">
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li>
          {" "}
          <Link to="/login">
            <i className="icon-user" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialContact;

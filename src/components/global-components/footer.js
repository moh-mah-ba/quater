import React from "react";
import { Link } from "react-router-dom";
import Social from "../section-components/social";
import Copyright from "./copyright";

const Footer_v1 = () => {
  const $ = window.$;

  let publicUrl = process.env.PUBLIC_URL + "/";
  const minscript = document.createElement("script");
  minscript.async = true;
  minscript.src = publicUrl + "assets/js/main.js";

  document.body.appendChild(minscript);

  $(".go-top")
    .find("a")
    .on("click", function () {
      $(".quarter-overlay").fadeIn(1);

      $(window).scrollTop(0);

      setTimeout(function () {
        $(".quarter-overlay").fadeOut(300);
      }, 800);
    });

  $(document).on("click", ".theme-btn-1 ", function () {
    $("div").removeClass("modal-backdrop");
    $("div").removeClass("show");
    $("div").removeClass("fade");
    $("body").attr("style", "");
  });

  // let publicUrl = process.env.PUBLIC_URL+'/'
  let imgattr = "Footer logo";
  return (
    <footer className="ltn__footer-area  ">
      <div className="footer-top-area  section-bg-2 plr--5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-about-widget">
                <div className="footer-logo">
                  <div className="site-logo">
                    <img src={publicUrl + "assets/img/logo-2.png"} alt="Logo" />
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the and typesetting
                  industry. Lorem Ipsum is dummy text of the printing.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
              <div className="footer-address">
                <ul>
                  <li>
                    <div className="footer-address-icon">
                      <i className="icon-placeholder" />
                    </div>
                    <div className="footer-address-info">
                      <p>Brooklyn, New York, United States</p>
                    </div>
                  </li>
                  <li>
                    <div className="footer-address-icon">
                      <i className="icon-call" />
                    </div>
                    <div className="footer-address-info">
                      <p>
                        <a href="tel:+0123-456789">+0123-456789</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="footer-address-icon">
                      <i className="icon-mail" />
                    </div>
                    <div className="footer-address-info">
                      <p>
                        <a href="mailto:example@example.com">
                          example@example.com
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12 col-12">
              <div className="ltn__social-media mt-20">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer_v1;

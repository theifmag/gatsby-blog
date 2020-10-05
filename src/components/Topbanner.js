import React from 'react'

export default function Topbanner() {
    return (
        <div>
             <div className="et_top_header_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
                <div className="et_left_side_warpper">
                  <div className="et_top_contect">
                    <p><i className="fa fa-envelope" />  <a href="#">Email@example.com</a>
                    </p>
                    <p className="d-none d-sm-none d-md-block d-lg-block d-xl-block"><i className="fa fa-phone" /> +123456789</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 ">
                <div className="et_right_side_main_warpper">
                  <div className="et_right_side_warpper">
                    <ul>
                      <li className="hidden-xs">
                        <div className="plumb_top_socialicon">
                          <ul>
                            <li><a href="#"><i className="fab fa-facebook-square" /></a>
                            </li>
                            <li><a href="#"><i className="fab fa-twitter-square" /></a>
                            </li>
                            <li><a href="#"><i className="fab fa-pinterest-square" /></a>
                            </li>
                            <li><a href="#"><i className="fab fa-instagram" /></a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

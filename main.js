(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header_section - start\n\t\t================================================== -->\n    <header class=\"header_section sticky_header header_default clearfix\">\n      <div class=\"header_top bg_light clearfix\">\n        <div class=\"maxw_1420 container\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-lg-8\">\n              <ul class=\"header_contact_info ul_li clearfix\">\n                <li><i class=\"far fa-map-marker-alt\"></i> 20 Main Street, USA</li>\n                <li><i class=\"far fa-envelope-open\"></i> info@ggoldenservice.com</li>\n                <li><i class=\"far fa-clock\"></i> Sun - Monday, 09 am - 04 pm</li>\n              </ul>\n            </div>\n    \n            <div class=\"col-lg-4\">\n              <ul class=\"header_items_list ul_li_right clearfix\">\n                <li>\n                  <div class=\"header_social_links d-flex align-items-center\">\n                    <span class=\"social_title text-white\">Social Links:</span>\n                    <ul class=\"primary_social_links ul_li clearfix\">\n                      <li><a href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-twitter\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-youtube\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-linkedin\"></i></a></li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      <div class=\"header_bottom bg_default_blue\">\n        <div class=\"maxw_1420 container\">\n          <div class=\"row align-items-center\">\n    \n            <div class=\"col-lg-3\">\n              <div class=\"brand_logo\">\n                <a href=\"/\">\n                  <img src=\"assets/images/logo/logo-2.png\" srcset=\"assets/images/logo/logo_01_2x.png 2x\"\n                    alt=\"logo_not_found\">\n                </a>\n    \n                <ul class=\"mobilemenu_btns_group ul_li_right clearfix\">\n                  <li>\n                    <button type=\"button\" class=\"search_btn\" data-toggle=\"collapse\" data-target=\"#search_body_collapse\"\n                      aria-expanded=\"false\" aria-controls=\"search_body_collapse\">\n                      <i class=\"fal fa-search\"></i>\n                    </button>\n                  </li>\n                  <li>\n                    <button type=\"button\" class=\"mobile_menu_btn\"><i class=\"fal fa-bars\"></i></button>\n                  </li>\n                </ul>\n              </div>\n            </div>\n    \n            <div class=\"col-lg-6\">\n              <nav class=\"main_menu clearfix\">\n                <ul class=\"ul_li_center clearfix\">\n                  <li class=\"active\">\n                    <a href=\"/\">Home</a>\n                  </li>\n                  <li><a href=\"/about\">About</a></li>\n                  \n                  <li class=\"has_child\">\n                    <a href=\"/products/category/waste-papers\">Waste Papers</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of waste_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                  <li class=\"has_child\">\n                    <a href=\"/products/category/paper-type\">Paper Types</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of type_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                  <li class=\"has_child\">\n                    <a href=\"/products/category/copy-paper\">Copy Papers</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of copy_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                </ul>\n              </nav>\n            </div>\n    \n            <div class=\"col-lg-3\">\n              <ul class=\"header_btns_group ul_li_right clearfix\">\n                <li>\n                  <button type=\"button\" class=\"action_btn search_btn bg_default_purple\" data-toggle=\"collapse\"\n                    data-target=\"#search_body_collapse\" aria-expanded=\"false\" aria-controls=\"search_body_collapse\">\n                    <i class=\"fal fa-search\"></i>\n                  </button>\n                </li>\n                <li>\n                  <a class=\"custom_btn bg_default_yellow\" href=\"/contact\">\n                    get a quote\n                    <span><i class=\"fal fa-arrow-right\"></i></span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n    \n          </div>\n        </div>\n      </div>\n    \n      <div id=\"search_body_collapse\" class=\"search_body_collapse collapse\">\n        <div class=\"search_body\">\n          <div class=\"container maxw_1420\">\n            <form action=\"#\" #ngSearch=\"ngForm\" (ngSubmit)=\"search()\">\n              <div class=\"form_item m-0\">\n                <input type=\"search\" name=\"search\" [(ngModel)]=\"searchString\" placeholder=\"Type here...\">\n                <button type=\"submit\"><i class=\"fal fa-search\"></i></button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </header>\n    <!-- header_section - end\n        ================================================== -->\n\n\n\n\n<main>\n\n  <!-- sidebar mobile menu - start\n\t\t\t================================================== -->\n\t<div class=\"sidebar-menu-wrapper\">\n\t\t<div class=\"sidebar_mobile_menu\">\n\n\t\t\t<span class=\"close_btn\"><i class=\"fal fa-times\"></i></span>\n\n\t\t\t<div class=\"mobile_menu_list clearfix\">\n\t\t\t\t<ul class=\"ul_li_block clearfix\">\n\t\t\t\t\t<li class=\"active\">\n\t\t\t\t\t\t<a href=\"/\">Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li><a href=\"/about\">About</a></li>\n\t\t\t\t\t<li><a href=\"/contact\">Conatct</a></li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/waste-papers\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Waste Papers</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of waste_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.id}}</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/paper-type\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Paper Types</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of type_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/copy-paper\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Copy Papers</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of copy_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"overlay\"></div>\n\t</div>\n\t<!-- sidebar mobile menu - end\n\t\t\t================================================== -->\n\n  <!-- breadcrumb_section - start\n\t\t\t================================================== -->\n  <section class=\"breadcrumb_section d-flex align-items-center clearfix\"\n    data-background=\"assets/images/breadcrumb/jump.jpg\">\n    <div class=\"container\">\n      <div class=\"row align-items-center justify-content-lg-between\">\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInLeft\" data-wow-delay=\".1s\">\n          <h1 class=\"page_title mb-0\">About Us</h1>\n        </div>\n\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInRight\" data-wow-delay=\".1s\">\n          <ul class=\"breadcrumb_nav ul_li_right clearfix\">\n            <li><a href=\"index.html\">Home</a></li>\n            <li>About Us</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- breadcrumb_section - end\n\t\t\t================================================== -->\n\n\n  <!-- about_section - start\n\t\t\t================================================== -->\n  <section class=\"about_section sec_ptb_130 clearfix\">\n    <div class=\"container\">\n      <div class=\"row justify-content-lg-between justify-content-md-center justify-content-sm-center\">\n\n        <div class=\"col-lg-6 col-md-8 col-sm-10 col-xs-12\">\n          <div class=\"about_image_1 wow fadeInUp2\" data-wow-delay=\".1s\">\n            <img src=\"assets/images/about/img_01.png\" alt=\"image_not_found\">\n          </div>\n        </div>\n\n        <div class=\"col-lg-6 col-md-8 col-sm-10 col-xs-12\">\n          <div class=\"about_content\">\n            <div class=\"section_title wow fadeInUp2\" data-wow-delay=\".1s\">\n              <h4 class=\"small_title\">About Our Company</h4>\n              <h2 class=\"big_title mb-0\">\n                Printing Your Dream Works With Printem\n              </h2>\n              <span class=\"biggest_title\">About</span>\n            </div>\n\n            <p class=\"wow fadeInUp2\" data-wow-delay=\".2s\">\n              <span>\n                We are a renowned Supplier and Exporter of all types of papers in the global market. We have successfully touched the summit in the market and have gained a huge clientele with our qualitative product range. Our extensive range of products includes A4 Copy Papers, Duplex Boards Papers, Kraft Papers, etc... Our strategic advice, coupled with prudent risk management, has helped us to perform to their revenue budget and beyond.\n                COMPANY OPERATING IN THAILAND AND SOUTH AFRICA strategically to ease global supply. We have over 10 years of combined experience in all facets of this line of business. The CEO of the company has some principle objectives following which he has gained huge success in this industry. We have the necessary personnel, expertise, and resources to provide our clients with a complete range of services necessary to maximize their rural investment.\n                All our products are manufactured as per buyer's specifications – Private Label requirements, to meet import Country regulations for size, ruling format, language, packing, display needs, and above all budget.\n              </span>\n            </p>\n            <!-- <p class=\"mb-0 wow fadeInUp2\" data-wow-delay=\".3s\">\n              It is our mission to provide high quality and cost-effective Copy Papers & Kraft Papers along with innovative solutions to meet the needs of our customers, while at the same time we are equally committed to carrying out our business activities following fair business practices and the high ethical code of conduct standards we have set for ourselves. It is also our commitment to give our customers a rich and fulfilling experience and we endeavor to build a strong and lasting relationship based on the solid foundation of mutual trust and understanding, both with our principals as well as our customers.\n            </p> -->\n\n            <div class=\"row wow fadeInUp2\" data-wow-delay=\".4s\">\n              <p>Company registration documents are sent to genuine customers directly by mail or fax.</p>\n              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"about_certificate clearfix\">\n                  <div class=\"item_icon\">\n                    <img src=\"assets/images/about/iso.png\" alt=\"iso_not_found\">\n                  </div>\n                  <div class=\"item_content\">\n                    <h3 class=\"item_title\">ISO Certified</h3>\n                    <p>\n                      \n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"about_certificate clearfix\">\n                  <div class=\"item_icon\">\n                    <img src=\"assets/images/about/reward.png\" alt=\"iso_not_found\">\n                  </div>\n                  <div class=\"item_content\">\n                    <h3 class=\"item_title\">Award Wins</h3>\n                    <p>\n                      \n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n  <!-- about_section - end\n\t\t\t================================================== -->\n\n  <!-- faq_section - start\n\t\t\t================================================== -->\n  <section class=\"faq_section bg_default_blue clearfix\">\n    <div class=\"container-fluid p-0\">\n      <div\n        class=\"row no-gutters align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center\">\n\n        <div class=\"col-lg-6 col-md-7 col-sm-9 col-xs-12\">\n          <div class=\"faq_image wow fadeIn\" data-wow-delay=\".1s\">\n            <img src=\"assets/images/faqs/img_01.jpg\" alt=\"image_not_found\">\n          </div>\n        </div>\n\n        <div class=\"col-lg-6 col-md-7 col-sm-9 col-xs-12\">\n          <div class=\"faq_content_wrap text-white\">\n            <div class=\"section_title mb_50 wow fadeInUp2\" data-wow-delay=\".3s\">\n              <h4 class=\"small_title\">Faq</h4>\n              <h2 class=\"big_title text-white mb-0\">\n                Frequently Asked Questions\n              </h2>\n              <span class=\"biggest_title\">Faq</span>\n            </div>\n\n            <div id=\"faq_accordion\" class=\"faq_accordion wow fadeInUp2\" data-wow-delay=\".4s\">\n              <div class=\"card\">\n                <div class=\"card-header\" id=\"heading_one\">\n                  <button data-toggle=\"collapse\" data-target=\"#collapse_one\" aria-expanded=\"true\"\n                    aria-controls=\"collapse_one\">\n                    What's our clientele\n                  </button>\n                </div>\n\n                <div id=\"collapse_one\" class=\"collapse show\" aria-labelledby=\"heading_one\" data-parent=\"#faq_accordion\">\n                  <div class=\"card-body\">\n                    <p class=\"mb-0\">\n                      We are dealing in Copy & Kraft paper corrugators having manual, semi-automatic & fully automatic plants. We are involved in supplying the Copy Papers for the office house & Kraft Papers to corrugating plants, which converts these papers into corrugated carton boxes used in all major industries for packing the products. Our clients have been nurtured by us for over one decade by building and maintaining very close rapport at all levels.\n                    </p>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"card\">\n                <div class=\"card-header\" id=\"heading_two\">\n                  <button class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#collapse_two\" aria-expanded=\"false\"\n                    aria-controls=\"collapse_two\">\n                    What's our vision\n                  </button>\n                </div>\n                <div id=\"collapse_two\" class=\"collapse\" aria-labelledby=\"heading_two\" data-parent=\"#faq_accordion\">\n                  <div class=\"card-body\">\n                    <p class=\"mb-0\">\n                      Our management’s foresightedness keeps us analyzing our working environment at every step so that we can achieve our goal as a valued player in the global pulp, paper, and paperboard industry.\n                    </p>\n                  </div>\n                </div>\n              </div>\n\n              <!-- <div class=\"card\">\n                <div class=\"card-header\" id=\"heading_three\">\n                  <button class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#collapse_three\" aria-expanded=\"false\"\n                    aria-controls=\"collapse_three\">\n                    Mirage Deep Dive: Understanding Factories, Fixtures\n                  </button>\n                </div>\n                <div id=\"collapse_three\" class=\"collapse\" aria-labelledby=\"heading_three\" data-parent=\"#faq_accordion\">\n                  <div class=\"card-body\">\n                    <p class=\"mb-0\">\n                      But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was\n                      born and I will give you a complete account of the system, and expound the actual teachings of the\n                      great explorer\n                    </p>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"card\">\n                <div class=\"card-header\" id=\"heading_four\">\n                  <button class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#collapse_four\" aria-expanded=\"false\"\n                    aria-controls=\"collapse_four\">\n                    How To Run The Right Kind Of Research Study\n                  </button>\n                </div>\n                <div id=\"collapse_four\" class=\"collapse\" aria-labelledby=\"heading_four\" data-parent=\"#faq_accordion\">\n                  <div class=\"card-body\">\n                    <p class=\"mb-0\">\n                      But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was\n                      born and I will give you a complete account of the system, and expound the actual teachings of the\n                      great explorer\n                    </p>\n                  </div>\n                </div>\n              </div> -->\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n  <!-- faq_section - end\n\t\t\t================================================== -->\n\n  <!-- testimonial_section - start\n\t\t\t================================================== -->\n  <section class=\"testimonial_section sec_ptb_130 bg_gray clearfix\">\n    <div class=\"container\">\n\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-6 col-md-7 col-sm-9\">\n          <div class=\"section_title text-center mb_30 wow fadeInUp2\" data-wow-delay=\".1s\">\n            <h4 class=\"small_title\">Clients Reviews</h4>\n            <h2 class=\"big_title mb-0\">\n              What Our Clients Say About Our Works\n            </h2>\n            <span class=\"biggest_title\">Says</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"testimonial_carousel column_3_carousel owl-carousel owl-theme wow fadeInUp2\" data-wow-delay=\".3s\">\n        <div class=\"item\">\n          <div class=\"testimonial_primary\">\n            <div class=\"content_wrap\">\n              <p>\n                Would like to order more than the last quantity, hope you can supply, about a half more.\n              </p>\n              <span class=\"quote_icon\">\n                <img src=\"assets/images/testimonial/quote_01.png\" alt=\"icon_not_found\">\n              </span>\n            </div>\n            <div class=\"hero_info_wrap\">\n              <div class=\"hero_thumbnail\">\n                <img src=\"assets/images/testimonial/img_01.png\" alt=\"icon_not_found\">\n              </div>\n              <div class=\"hero_info\">\n                <h3 class=\"hero_name\">Casey M. Vargas</h3>\n                <!-- <span class=\"hero_title\">Web designer</span> -->\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"item\">\n          <div class=\"testimonial_primary\">\n            <div class=\"content_wrap\">\n              <p>\n                Had a missing color in my previous command from the color papers. Nevertheless, the quality is outstanding. Would like to make some modifications to fill the gap.\n              </p>\n              <span class=\"quote_icon\">\n                <img src=\"assets/images/testimonial/quote_01.png\" alt=\"icon_not_found\">\n              </span>\n            </div>\n            <div class=\"hero_info_wrap\">\n              <div class=\"hero_thumbnail\">\n                <img src=\"assets/images/testimonial/img_02.png\" alt=\"icon_not_found\">\n              </div>\n              <div class=\"hero_info\">\n                <h3 class=\"hero_name\">Westover Charles</h3>\n                <!-- <span class=\"hero_title\">Web designer</span> -->\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- <div class=\"item\">\n          <div class=\"testimonial_primary\">\n            <div class=\"content_wrap\">\n              <p>\n                Sed ut perspiciatis unde omnis iste natus\n                error sit voluptatem accusantium doloremq\n                ue laudantium totam rem aperiam eaqupsa quae abillo inventore veritatis et quasi arch\n                itecto beatae vitae dicta sunt\n              </p>\n              <span class=\"quote_icon\">\n                <img src=\"assets/images/testimonial/quote_01.png\" alt=\"icon_not_found\">\n              </span>\n            </div>\n            <div class=\"hero_info_wrap\">\n              <div class=\"hero_thumbnail\">\n                <img src=\"assets/images/testimonial/img_03.png\" alt=\"icon_not_found\">\n              </div>\n              <div class=\"hero_info\">\n                <h3 class=\"hero_name\">Westover Charles</h3>\n                <span class=\"hero_title\">Web designer</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"item\">\n          <div class=\"testimonial_primary\">\n            <div class=\"content_wrap\">\n              <p>\n                Sed ut perspiciatis unde omnis iste natus\n                error sit voluptatem accusantium doloremq\n                ue laudantium totam rem aperiam eaqupsa quae abillo inventore veritatis et quasi arch\n                itecto beatae vitae dicta sunt\n              </p>\n              <span class=\"quote_icon\">\n                <img src=\"assets/images/testimonial/quote_01.png\" alt=\"icon_not_found\">\n              </span>\n            </div>\n            <div class=\"hero_info_wrap\">\n              <div class=\"hero_thumbnail\">\n                <img src=\"assets/images/testimonial/img_01.png\" alt=\"icon_not_found\">\n              </div>\n              <div class=\"hero_info\">\n                <h3 class=\"hero_name\">Casey M. Vargas</h3>\n                <span class=\"hero_title\">Web designer</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"item\">\n          <div class=\"testimonial_primary\">\n            <div class=\"content_wrap\">\n              <p>\n                Sed ut perspiciatis unde omnis iste natus\n                error sit voluptatem accusantium doloremq\n                ue laudantium totam rem aperiam eaqupsa quae abillo inventore veritatis et quasi arch\n                itecto beatae vitae dicta sunt\n              </p>\n              <span class=\"quote_icon\">\n                <img src=\"assets/images/testimonial/quote_01.png\" alt=\"icon_not_found\">\n              </span>\n            </div>\n            <div class=\"hero_info_wrap\">\n              <div class=\"hero_thumbnail\">\n                <img src=\"assets/images/testimonial/img_02.png\" alt=\"icon_not_found\">\n              </div>\n              <div class=\"hero_info\">\n                <h3 class=\"hero_name\">Westover Charles</h3>\n                <span class=\"hero_title\">Web designer</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"item\">\n          <div class=\"testimonial_primary\">\n            <div class=\"content_wrap\">\n              <p>\n                Sed ut perspiciatis unde omnis iste natus\n                error sit voluptatem accusantium doloremq\n                ue laudantium totam rem aperiam eaqupsa quae abillo inventore veritatis et quasi arch\n                itecto beatae vitae dicta sunt\n              </p>\n              <span class=\"quote_icon\">\n                <img src=\"assets/images/testimonial/quote_01.png\" alt=\"icon_not_found\">\n              </span>\n            </div>\n            <div class=\"hero_info_wrap\">\n              <div class=\"hero_thumbnail\">\n                <img src=\"assets/images/testimonial/img_03.png\" alt=\"icon_not_found\">\n              </div>\n              <div class=\"hero_info\">\n                <h3 class=\"hero_name\">Westover Charles</h3>\n                <span class=\"hero_title\">Web designer</span>\n              </div>\n            </div>\n          </div>\n        </div> -->\n      </div>\n\n    </div>\n  </section>\n  <!-- testimonial_section - end\n\t\t\t================================================== -->\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  category works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkout/checkout.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkout/checkout.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header_section - start\n\t\t================================================== -->\n    <header class=\"header_section sticky_header header_default clearfix\">\n      <div class=\"header_top bg_light clearfix\">\n        <div class=\"maxw_1420 container\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-lg-8\">\n              <ul class=\"header_contact_info ul_li clearfix\">\n                <li><i class=\"far fa-map-marker-alt\"></i> 20 Main Street, USA</li>\n                <li><i class=\"far fa-envelope-open\"></i> info@ggoldenservice.com</li>\n                <li><i class=\"far fa-clock\"></i> Sun - Monday, 09 am - 04 pm</li>\n              </ul>\n            </div>\n    \n            <div class=\"col-lg-4\">\n              <ul class=\"header_items_list ul_li_right clearfix\">\n                <li>\n                  <div class=\"header_social_links d-flex align-items-center\">\n                    <span class=\"social_title text-white\">Social Links:</span>\n                    <ul class=\"primary_social_links ul_li clearfix\">\n                      <li><a href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-twitter\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-youtube\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-linkedin\"></i></a></li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      <div class=\"header_bottom bg_default_blue\">\n        <div class=\"maxw_1420 container\">\n          <div class=\"row align-items-center\">\n    \n            <div class=\"col-lg-3\">\n              <div class=\"brand_logo\">\n                <a href=\"/\">\n                  <img src=\"assets/images/logo/logo-2.png\" srcset=\"assets/images/logo/logo_01_2x.png 2x\"\n                    alt=\"logo_not_found\">\n                </a>\n    \n                <ul class=\"mobilemenu_btns_group ul_li_right clearfix\">\n                  <li>\n                    <button type=\"button\" class=\"search_btn\" data-toggle=\"collapse\" data-target=\"#search_body_collapse\"\n                      aria-expanded=\"false\" aria-controls=\"search_body_collapse\">\n                      <i class=\"fal fa-search\"></i>\n                    </button>\n                  </li>\n                  <li>\n                    <button type=\"button\" class=\"mobile_menu_btn\"><i class=\"fal fa-bars\"></i></button>\n                  </li>\n                </ul>\n              </div>\n            </div>\n    \n            <div class=\"col-lg-6\">\n              <nav class=\"main_menu clearfix\">\n                <ul class=\"ul_li_center clearfix\">\n                  <li class=\"active\">\n                    <a href=\"/\">Home</a>\n                  </li>\n                  <li><a href=\"/about\">About</a></li>\n                  \n                  <li class=\"has_child\">\n                    <a href=\"/products/category/waste-papers\">Waste Papers</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of waste_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                  <li class=\"has_child\">\n                    <a href=\"/products/category/paper-type\">Paper Types</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of type_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                  <li class=\"has_child\">\n                    <a href=\"/products/category/copy-paper\">Copy Papers</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of copy_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                </ul>\n              </nav>\n            </div>\n    \n            <div class=\"col-lg-3\">\n              <ul class=\"header_btns_group ul_li_right clearfix\">\n                <li>\n                  <button type=\"button\" class=\"action_btn search_btn bg_default_purple\" data-toggle=\"collapse\"\n                    data-target=\"#search_body_collapse\" aria-expanded=\"false\" aria-controls=\"search_body_collapse\">\n                    <i class=\"fal fa-search\"></i>\n                  </button>\n                </li>\n                <li>\n                  <a class=\"custom_btn bg_default_yellow\" href=\"/contact\">\n                    get a quote\n                    <span><i class=\"fal fa-arrow-right\"></i></span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n    \n          </div>\n        </div>\n      </div>\n    \n      <div id=\"search_body_collapse\" class=\"search_body_collapse collapse\">\n        <div class=\"search_body\">\n          <div class=\"container maxw_1420\">\n            <form action=\"#\" #ngSearch=\"ngForm\" (ngSubmit)=\"search()\">\n              <div class=\"form_item m-0\">\n                <input type=\"search\" name=\"search\" [(ngModel)]=\"searchString\" placeholder=\"Type here...\">\n                <button type=\"submit\"><i class=\"fal fa-search\"></i></button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </header>\n    <!-- header_section - end\n        ================================================== -->\n\n<main>\n\n  <!-- sidebar mobile menu - start\n\t\t\t================================================== -->\n\t<div class=\"sidebar-menu-wrapper\">\n\t\t<div class=\"sidebar_mobile_menu\">\n\n\t\t\t<span class=\"close_btn\"><i class=\"fal fa-times\"></i></span>\n\n\t\t\t<div class=\"mobile_menu_list clearfix\">\n\t\t\t\t<ul class=\"ul_li_block clearfix\">\n\t\t\t\t\t<li class=\"active\">\n\t\t\t\t\t\t<a href=\"/\">Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li><a href=\"/about\">About</a></li>\n\t\t\t\t\t<li><a href=\"/contact\">Conatct</a></li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/waste-papers\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Waste Papers</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of waste_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.id}}</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/paper-type\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Paper Types</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of type_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/copy-paper\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Copy Papers</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of copy_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"overlay\"></div>\n\t</div>\n\t<!-- sidebar mobile menu - end\n\t\t\t================================================== -->\n\n  <!-- breadcrumb_section - start\n\t\t\t================================================== -->\n  <section class=\"breadcrumb_section d-flex align-items-center clearfix\"\n    data-background=\"assets/images/breadcrumb/jump.jpg\">\n    <div class=\"container\">\n      <div class=\"row align-items-center justify-content-lg-between\">\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInLeft\" data-wow-delay=\".1s\">\n          <h1 class=\"page_title mb-0\">Inquire Now!</h1>\n        </div>\n\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInRight\" data-wow-delay=\".1s\">\n          <ul class=\"breadcrumb_nav ul_li_right clearfix\">\n            <li><a href=\"/\">Home</a></li>\n            <li>Inquire</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- breadcrumb_section - end\n\t\t\t================================================== -->\n\n\n  <!-- contact_section - start\n\t\t\t================================================== -->\n  <section class=\"contact_section sec_ptb_130 clearfix\">\n    <div class=\"container\">\n      <div class=\"row justify-content-lg-between justify-content-md-center justify-content-sm-center\">\n\n        <div class=\"col-lg-6 col-md-8 col-sm-10 col-xs-12\">\n          <div class=\"contact_form\">\n            <form id=\"contact-form\" #contactForm=\"ngForm\" #checkoutForm=\"ngForm\" (ngSubmit)=\"submit()\" method=\"POST\">\n              <div class=\"form_item wow fadeInUp2\" data-wow-delay=\".1s\">\n                <span class=\"input_title\">Full Name</span>\n                <div class=\"position-relative\">\n                  <input id=\"input_user\" type=\"text\" name=\"name\" [(ngModel)]=\"shipping.firstName\"\n                    placeholder=\"Write Your Name\">\n                  <label class=\"input_icon\" for=\"input_user\"><i class=\"fal fa-user\"></i></label>\n                </div>\n              </div>\n\n              <div class=\"form_item wow fadeInUp2\" data-wow-delay=\".2s\">\n                <span class=\"input_title\">Email Address</span>\n                <div class=\"position-relative\">\n                  <input id=\"input_email\" type=\"email\" name=\"email\" [(ngModel)]=\"shipping.email\"\n                    placeholder=\"Write Your Email\">\n                  <label class=\"input_icon\" for=\"input_email\"><i class=\"fal fa-envelope\"></i></label>\n                </div>\n              </div>\n\n              <div class=\"form_item wow fadeInUp2\" data-wow-delay=\".2s\">\n                <span class=\"input_title\">Country</span>\n                <div class=\"position-relative\">\n                  <input id=\"input_country\" type=\"text\" name=\"country\" [(ngModel)]=\"shipping.country\"\n                    placeholder=\"Your Country\">\n                  <label class=\"input_icon\" for=\"input_country\"><i class=\"fal fa-location-circle\"></i></label>\n                </div>\n              </div>\n\n              <div class=\"form_item wow fadeInUp2\" data-wow-delay=\".3s\">\n                <span class=\"input_title\">Phone Number</span>\n                <div class=\"position-relative\">\n                  <input id=\"input_phone\" type=\"tel\" name=\"phone\" [(ngModel)]=\"shipping.phone\"\n                    placeholder=\"Write Your Phone Number\">\n                  <label class=\"input_icon\" for=\"input_phone\"><i class=\"fal fa-phone\"></i></label>\n                </div>\n              </div>\n\n              <div class=\"form_item wow fadeInUp2\" data-wow-delay=\".3s\">\n                <span class=\"input_title\">Product Of Interest</span>\n                <div class=\"position-relative\">\n                  <select class=\"selectpicker\" name=\"pet\" id=\"pet\" [(ngModel)]=\"chosen\" (change)=\"onChange($event.target.value)\">\n                    <option *ngFor=\"let pet of pets\" value=\"{{pet.id}}\">{{pet.name}}</option>\n                  </select>\n                </div>\n              </div>\n\n              <!-- <div class=\"row\">\n                <div class=\"col-xl-5 col-lg-5\">\n                  <div class=\"form_item wow fadeInUp2\" data-wow-delay=\".3s\">\n                    <span class=\"input_title\">Product Of Interest</span>\n                    <div class=\"position-relative\">\n                      <select class=\"selectpicker\" name=\"pet\" id=\"pet\" [(ngModel)]=\"chosen\" (change)=\"onChange($event.target.value)\">\n                        <option *ngFor=\"let pet of pets\" value=\"{{pet.id}}\">{{pet.name}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n              </div> -->\n\n              <br>\n              <div class=\"form_item wow fadeInUp2\" data-wow-delay=\".3s\">\n                <span class=\"input_title\">Payment Methods</span>\n                <div class=\"position-relative\">\n                  <select class=\"selectpicker\" name=\"payment\" id=\"payment\" [(ngModel)]=\"shipping.paymentOption\">\n                    <option value=\"No payment method selected\" selected>Select a payment method</option>\n                    <option *ngFor=\"let payment of paymentOptions\" value=\"{{payment}}\">{{payment}} </option>\n                  </select>\n                </div>\n              </div>\n              <br>\n              <div class=\"form_item wow fadeInUp2\" data-wow-delay=\".4s\">\n                <span class=\"input_title\">Leave A Note</span>\n                <textarea name=\"message\" [(ngModel)]=\"shipping.notes\" placeholder=\"Write a note or any speifications...\"></textarea>\n              </div>\n\n              <button type=\"submit\" class=\"custom_btn bg_default_orange wow fadeInUp2\" data-wow-delay=\".5s\">\n                {{buttonMsg}}\n                <span><i class=\"fal fa-arrow-right\"></i></span>\n              </button>\n              <!-- <p class=\"ajax-response\"></p> -->\n            </form>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6 col-md-8 col-sm-10 col-xs-12\">\n          <div class=\"contact_content\">\n            <div class=\"section_title mb_30 wow fadeInUp2\" data-wow-delay=\".1s\">\n              <h4 class=\"small_title\">Get In Touch</h4>\n              <h2 class=\"big_title mb-0\">\n                Customer Service Available 24/7\n              </h2>\n              <span class=\"biggest_title\">Inquire Now!</span>\n            </div>\n            <!-- <p class=\"mb_30 wow fadeInUp2\" data-wow-delay=\".2s\">\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan\n              tium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n              architecto beatae vitae dict\n            </p> -->\n            <ul class=\"contact_information_list ul_li_block clearfix\">\n              <li class=\"wow fadeInUp2\" data-wow-delay=\".3s\">\n                <div class=\"item_icon bg_default_orange\"><i class=\"fal fa-map-marker-alt\"></i></div>\n                <div class=\"item_content\">\n                  <h4>Locations</h4>\n                  <p>205 Main Street, USA</p>\n                </div>\n              </li>\n              <li class=\"wow fadeInUp2\" data-wow-delay=\".4s\">\n                <div class=\"item_icon bg_default_yellow\"><i class=\"fal fa-envelope\"></i></div>\n                <div class=\"item_content\">\n                  <h4>Email Us</h4>\n                  <p>info@ggoldenservice.com</p>\n                </div>\n              </li>\n              <li class=\"wow fadeInUp2\" data-wow-delay=\".5s\">\n                <div class=\"item_icon bg_default_lightblue\"><i class=\"fal fa-phone\"></i></div>\n                <div class=\"item_content\">\n                  <h4>Phone Us</h4>\n                  <p>+012 (345) 678 99</p>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n  <!-- contact_section - end\n\t\t\t================================================== -->\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header_section - start\n\t\t================================================== -->\n<header class=\"header_section sticky_header header_default clearfix\">\n\t<div class=\"header_top bg_light clearfix\">\n\t\t<div class=\"maxw_1420 container\">\n\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t<div class=\"col-lg-8\">\n\t\t\t\t\t<ul class=\"header_contact_info ul_li clearfix\">\n\t\t\t\t\t\t<li><i class=\"far fa-map-marker-alt\"></i> 20 Main Street, USA</li>\n\t\t\t\t\t\t<li><i class=\"far fa-envelope-open\"></i> info@ggoldenservice.com</li>\n\t\t\t\t\t\t<li><i class=\"far fa-clock\"></i> Sun - Monday, 09 am - 04 pm</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t<ul class=\"header_items_list ul_li_right clearfix\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"header_social_links d-flex align-items-center\">\n\t\t\t\t\t\t\t\t<span class=\"social_title text-white\">Social Links:</span>\n\t\t\t\t\t\t\t\t<ul class=\"primary_social_links ul_li clearfix\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#!\"><i class=\"fab fa-twitter\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#!\"><i class=\"fab fa-youtube\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#!\"><i class=\"fab fa-linkedin\"></i></a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"header_bottom bg_default_blue\">\n\t\t<div class=\"maxw_1420 container\">\n\t\t\t<div class=\"row align-items-center\">\n\n\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t<div class=\"brand_logo\">\n\t\t\t\t\t\t<a href=\"/\">\n\t\t\t\t\t\t\t<img src=\"assets/images/logo/logo-2.png\" srcset=\"assets/images/logo/logo_01_2x.png 2x\"\n\t\t\t\t\t\t\t\talt=\"logo_not_found\">\n\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t<ul class=\"mobilemenu_btns_group ul_li_right clearfix\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"search_btn\" data-toggle=\"collapse\"\n\t\t\t\t\t\t\t\t\tdata-target=\"#search_body_collapse\" aria-expanded=\"false\"\n\t\t\t\t\t\t\t\t\taria-controls=\"search_body_collapse\">\n\t\t\t\t\t\t\t\t\t<i class=\"fal fa-search\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"mobile_menu_btn\"><i class=\"fal fa-bars\"></i></button>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t<nav class=\"main_menu clearfix\">\n\t\t\t\t\t\t<ul class=\"ul_li_center clearfix\">\n\t\t\t\t\t\t\t<li class=\"active\">\n\t\t\t\t\t\t\t\t<a href=\"/\">Home</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li><a href=\"/about\">About</a></li>\n\n\t\t\t\t\t\t\t<li class=\"has_child\">\n\t\t\t\t\t\t\t\t<a href=\"/products/category/waste-papers\">Waste Papers</a>\n\t\t\t\t\t\t\t\t<ul class=\"submenu\">\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let product of waste_products\"><a\n\t\t\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"has_child\">\n\t\t\t\t\t\t\t\t<a href=\"/products/category/paper-type\">Paper Types</a>\n\t\t\t\t\t\t\t\t<ul class=\"submenu\">\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let product of type_products\"><a\n\t\t\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"has_child\">\n\t\t\t\t\t\t\t\t<a href=\"/products/category/copy-paper\">Copy Papers</a>\n\t\t\t\t\t\t\t\t<ul class=\"submenu\">\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let product of copy_products\"><a\n\t\t\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</nav>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t<ul class=\"header_btns_group ul_li_right clearfix\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"action_btn search_btn bg_default_purple\" data-toggle=\"collapse\"\n\t\t\t\t\t\t\t\tdata-target=\"#search_body_collapse\" aria-expanded=\"false\"\n\t\t\t\t\t\t\t\taria-controls=\"search_body_collapse\">\n\t\t\t\t\t\t\t\t<i class=\"fal fa-search\"></i>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a class=\"custom_btn bg_default_yellow\" href=\"/contact\">\n\t\t\t\t\t\t\t\tget a quote\n\t\t\t\t\t\t\t\t<span><i class=\"fal fa-arrow-right\"></i></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div id=\"search_body_collapse\" class=\"search_body_collapse collapse\">\n\t\t<div class=\"search_body\">\n\t\t\t<div class=\"container maxw_1420\">\n\t\t\t\t<form action=\"#\" #ngSearch=\"ngForm\" (ngSubmit)=\"search()\">\n\t\t\t\t\t<div class=\"form_item m-0\">\n\t\t\t\t\t\t<input type=\"search\" name=\"search\" [(ngModel)]=\"searchString\" placeholder=\"Type here...\">\n\t\t\t\t\t\t<button type=\"submit\"><i class=\"fal fa-search\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</header>\n<!-- header_section - end\n\t\t\t\t  ================================================== -->\n\n<main>\n\n\t<!-- sidebar mobile menu - start\n\t\t\t================================================== -->\n\t<div class=\"sidebar-menu-wrapper\">\n\t\t<div class=\"sidebar_mobile_menu\">\n\n\t\t\t<span class=\"close_btn\"><i class=\"fal fa-times\"></i></span>\n\n\t\t\t<div class=\"mobile_menu_list clearfix\">\n\t\t\t\t<ul class=\"ul_li_block clearfix\">\n\t\t\t\t\t<li class=\"active\">\n\t\t\t\t\t\t<a href=\"/\">Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li><a href=\"/about\">About</a></li>\n\t\t\t\t\t<li><a href=\"/contact\">Conatct</a></li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/waste-papers\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Waste Papers</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of waste_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.id}}</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/paper-type\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Paper Types</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of type_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/copy-paper\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Copy Papers</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of copy_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"overlay\"></div>\n\t</div>\n\t<!-- sidebar mobile menu - end\n\t\t\t================================================== -->\n\n\t<!-- breadcrumb_section - start\n\t\t\t================================================== -->\n\t<section class=\"breadcrumb_section d-flex align-items-center clearfix\"\n\t\tdata-background=\"assets/images/breadcrumb/jump.jpg\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row align-items-center justify-content-lg-between\">\n\t\t\t\t<div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInLeft\" data-wow-delay=\".1s\">\n\t\t\t\t\t<h1 class=\"page_title mb-0\">Contact Us</h1>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInRight\" data-wow-delay=\".1s\">\n\t\t\t\t\t<ul class=\"breadcrumb_nav ul_li_right clearfix\">\n\t\t\t\t\t\t<li><a href=\"/\">Home</a></li>\n\t\t\t\t\t\t<li>Contact Us</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!-- breadcrumb_section - end\n\t\t\t================================================== -->\n\n\n\t<!-- contact_section - start\n\t\t\t================================================== -->\n\t<section class=\"contact_section sec_ptb_130 clearfix\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row justify-content-lg-between justify-content-md-center justify-content-sm-center\">\n\n\t\t\t\t<div class=\"col-lg-6 col-md-8 col-sm-10 col-xs-12\">\n\t\t\t\t\t<div class=\"contact_content\">\n\t\t\t\t\t\t<div class=\"section_title mb_30 wow fadeInUp2\" data-wow-delay=\".1s\">\n\t\t\t\t\t\t\t<h4 class=\"small_title\">Contact Us</h4>\n\t\t\t\t\t\t\t<h2 class=\"big_title mb-0\">\n\t\t\t\t\t\t\t\tEvery Single Update To Contact Us\n\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t<span class=\"biggest_title\">Contact</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <p class=\"mb_30 wow fadeInUp2\" data-wow-delay=\".2s\">\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan\n              tium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n              architecto beatae vitae dict\n            </p> -->\n\t\t\t\t\t\t<ul class=\"contact_information_list ul_li_block clearfix\">\n\t\t\t\t\t\t\t<li class=\"wow fadeInUp2\" data-wow-delay=\".3s\">\n\t\t\t\t\t\t\t\t<div class=\"item_icon bg_default_orange\"><i class=\"fal fa-map-marker-alt\"></i></div>\n\t\t\t\t\t\t\t\t<div class=\"item_content\">\n\t\t\t\t\t\t\t\t\t<h4>Locations</h4>\n\t\t\t\t\t\t\t\t\t<p>205 Main Street, USA</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"wow fadeInUp2\" data-wow-delay=\".4s\">\n\t\t\t\t\t\t\t\t<div class=\"item_icon bg_default_yellow\"><i class=\"fal fa-envelope\"></i></div>\n\t\t\t\t\t\t\t\t<div class=\"item_content\">\n\t\t\t\t\t\t\t\t\t<h4>Email Us</h4>\n\t\t\t\t\t\t\t\t\t<p>info@ggoldenservice.com</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"wow fadeInUp2\" data-wow-delay=\".5s\">\n\t\t\t\t\t\t\t\t<div class=\"item_icon bg_default_lightblue\"><i class=\"fal fa-phone\"></i></div>\n\t\t\t\t\t\t\t\t<div class=\"item_content\">\n\t\t\t\t\t\t\t\t\t<h4>Phone Us</h4>\n\t\t\t\t\t\t\t\t\t<p>+012 (345) 678 99</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-6 col-md-8 col-sm-10 col-xs-12\">\n\t\t\t\t\t<div class=\"contact_form\">\n\t\t\t\t\t\t<form id=\"contact-form\" #contactForm=\"ngForm\" (ngSubmit)=\"submit()\" method=\"POST\">\n\t\t\t\t\t\t\t<div class=\"form_item wow fadeInUp2\" data-wow-delay=\".1s\">\n\t\t\t\t\t\t\t\t<span class=\"input_title\">Full Name</span>\n\t\t\t\t\t\t\t\t<div class=\"position-relative\">\n\t\t\t\t\t\t\t\t\t<input id=\"input_user\" type=\"text\" name=\"name\" [(ngModel)]=\"contact.name\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write Your Name\">\n\t\t\t\t\t\t\t\t\t<label class=\"input_icon\" for=\"input_user\"><i class=\"fal fa-user\"></i></label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form_item wow fadeInUp2\" data-wow-delay=\".2s\">\n\t\t\t\t\t\t\t\t<span class=\"input_title\">Email Address</span>\n\t\t\t\t\t\t\t\t<div class=\"position-relative\">\n\t\t\t\t\t\t\t\t\t<input id=\"input_email\" type=\"email\" name=\"email\" [(ngModel)]=\"contact.email\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write Your Email\">\n\t\t\t\t\t\t\t\t\t<label class=\"input_icon\" for=\"input_email\"><i class=\"fal fa-envelope\"></i></label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form_item wow fadeInUp2\" data-wow-delay=\".3s\">\n\t\t\t\t\t\t\t\t<span class=\"input_title\">Phone Number</span>\n\t\t\t\t\t\t\t\t<div class=\"position-relative\">\n\t\t\t\t\t\t\t\t\t<input id=\"input_phone\" type=\"tel\" name=\"phone\" [(ngModel)]=\"contact.phone\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write Your Phone Number\">\n\t\t\t\t\t\t\t\t\t<label class=\"input_icon\" for=\"input_phone\"><i class=\"fal fa-phone\"></i></label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form_item wow fadeInUp2\" data-wow-delay=\".3s\">\n\t\t\t\t\t\t\t\t<span class=\"input_title\">Subject</span>\n\t\t\t\t\t\t\t\t<div class=\"position-relative\">\n\t\t\t\t\t\t\t\t\t<input id=\"input_subject\" type=\"text\" name=\"subject\" [(ngModel)]=\"contact.subject\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Subject Matter\">\n\t\t\t\t\t\t\t\t\t<label class=\"input_icon\" for=\"input_subject\"><i\n\t\t\t\t\t\t\t\t\t\t\tclass=\"fal fa-envelope-open\"></i></label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form_item wow fadeInUp2\" data-wow-delay=\".4s\">\n\t\t\t\t\t\t\t\t<span class=\"input_title\">Leave A Message</span>\n\t\t\t\t\t\t\t\t<textarea name=\"message\" [(ngModel)]=\"contact.message\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Write Your Message\"></textarea>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"custom_btn bg_default_orange wow fadeInUp2\"\n\t\t\t\t\t\t\t\tdata-wow-delay=\".5s\">\n\t\t\t\t\t\t\t\t{{buttonMsg}}\n\t\t\t\t\t\t\t\t<span><i class=\"fal fa-arrow-right\"></i></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<!-- <p class=\"ajax-response\"></p> -->\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!-- contact_section - end\n\t\t\t================================================== -->\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- footer_section - start\n\t\t================================================== -->\n<footer class=\"footer_section bg_default_blue text-white clearfix\">\n  <div class=\"container\">\n\n    <div class=\"footer_brand_area border_bottom clearfix\">\n      <div class=\"row align-items-center justify-content-lg-between\">\n        <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n          <div class=\"brand_logo\">\n            <a href=\"#!\">\n              <img src=\"assets/images/logo/logo-2.png\" srcset=\"assets/images/logo/logo_01_2x.png 2x\"\n                alt=\"logo_not_found\">\n            </a>\n          </div>\n        </div>\n\n        <!-- <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\">\n          <div class=\"brands_list\">\n            <div class=\"logo_image\">\n              <a href=\"#!\">\n                <img src=\"assets/images/brands/img_05.png\" alt=\"logo_not_found\">\n              </a>\n            </div>\n\n            <div class=\"logo_image\">\n              <a href=\"#!\">\n                <img src=\"assets/images/brands/img_06.png\" alt=\"logo_not_found\">\n              </a>\n            </div>\n\n            <div class=\"logo_image\">\n              <a href=\"#!\">\n                <img src=\"assets/images/brands/img_07.png\" alt=\"logo_not_found\">\n              </a>\n            </div>\n\n            <div class=\"logo_image\">\n              <a href=\"#!\">\n                <img src=\"assets/images/brands/img_08.png\" alt=\"logo_not_found\">\n              </a>\n            </div>\n          </div>\n        </div> -->\n      </div>\n    </div>\n\n    <div class=\"footer_widget_area clearfix\">\n      <div class=\"row justify-content-lg-between justify-content-md-center justify-content-sm-center\">\n        <div class=\"col-lg-2 col-md-4 col-sm-12 col-xs-12\">\n          <div class=\"widget footer_useful_links\">\n            <h3 class=\"footer_widget_title\">Quick Links</h3>\n            <ul class=\"ul_li_block clearfix\">\n              <li><a href=\"/about\">About</a></li>\n              <li><a href=\"/contact\">Contact </a></li>\n              <li><a href=\"/products/category/waste-papers\">Waste Papers</a></li>\n              <li><a href=\"/products/category/paper-type\">All Papers</a></li>\n              <!-- <li><a href=\"#!\">Win Awards</a></li> -->\n            </ul>\n          </div>\n        </div>\n\n        <!-- <div class=\"col-lg-2 col-md-4 col-sm-12 col-xs-12\">\n          <div class=\"widget footer_useful_links\">\n            <h3 class=\"footer_widget_title\">Services</h3>\n            <ul class=\"ul_li_block clearfix\">\n              <li><a href=\"#!\">Design & Branding</a></li>\n              <li><a href=\"#!\">3D Design & Printing</a></li>\n              <li><a href=\"#!\">Offset Printing</a></li>\n              <li><a href=\"#!\">Business Printing</a></li>\n              <li><a href=\"#!\">Corporate Printing</a></li>\n            </ul>\n          </div>\n        </div> -->\n\n        <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n          <div class=\"widget recent_works_list\">\n            <h3 class=\"footer_widget_title\">Recent News</h3>\n            <ul class=\"ul_li_block clearfix\">\n              <li>\n                <div class=\"small_blog clearfix\">\n                  <a class=\"item_image\" href=\"/products/category/copy-paper\">\n                    <img src=\"assets/images/recent_works/img_01.png\" alt=\"image_not_found\">\n                  </a>\n                  <div class=\"item_content\">\n                    <h3 class=\"item_title\">\n                      <a target=\"_blank\" href=\"#!\">\n                        Color printing made easy with customize designs...\n                      </a>\n                    </h3>\n                    <!-- <span class=\"post_date\"><i class=\"far fa-calendar-alt\"></i> 25 Nov 2020</span> -->\n                  </div>\n                </div>\n              </li>\n\n              <li>\n                <div class=\"small_blog clearfix\">\n                  <a class=\"item_image\" href=\"/products/category/paper-type\">\n                    <img src=\"assets/images/recent_works/img_02.png\" alt=\"image_not_found\">\n                  </a>\n                  <div class=\"item_content\">\n                    <h3 class=\"item_title\">\n                      <a target=\"_blank\" href=\"#!\">\n                        Cover page and book printing...\n                      </a>\n                    </h3>\n                    <!-- <span class=\"post_date\"><i class=\"far fa-calendar-alt\"></i> 25 Nov 2020</span> -->\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"widget footer_contact_form\">\n            <h3 class=\"footer_widget_title\">Subscribe</h3>\n            <p class=\"mb_30\">\n              Subscribe and get our latest updates\n            </p>\n            <form action=\"#\" #contactForm=\"ngForm\" (ngSubmit)=\"submit()\">\n              <div class=\"form_item\">\n                <input type=\"email\" name=\"email\" [(ngModel)]=\"contact.email\" placeholder=\"Enter Your Email\">\n                <button type=\"submit\" class=\"submit_btn\"><i class=\"far fa-arrow-right\"></i></button>\n              </div>\n            </form>\n            <span class=\"footer_hotline\"><i class=\"far fa-phone\"></i> +012 (345) 678 99</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"footer_bottom_boxed clearfix\">\n      <div class=\"row align-items-center justify-content-lg-between justify-content-md-between\">\n        <div class=\"col-lg-6 col-md-6\">\n          <p class=\"copyright_text mb-0\">© Copyright 2021 All Right Reserved</p>\n        </div>\n\n        <div class=\"col-lg-6 col-md-6\">\n          <ul class=\"circle_social_links ul_li_right clearfix\">\n            <li>\n              <a class=\"bg_facebook\" href=\"#!\">\n                <i class=\"fab fa-facebook-f\"></i>\n                <i class=\"fab fa-facebook-f\"></i>\n              </a>\n            </li>\n            <li>\n              <a class=\"bg_twitter\" href=\"#!\">\n                <i class=\"fab fa-twitter\"></i>\n                <i class=\"fab fa-twitter\"></i>\n              </a>\n            </li>\n            <li>\n              <a class=\"bg_youtube\" href=\"#!\">\n                <i class=\"fab fa-youtube\"></i>\n                <i class=\"fab fa-youtube\"></i>\n              </a>\n            </li>\n            <li>\n              <a class=\"bg_linkedin\" href=\"#!\">\n                <i class=\"fab fa-linkedin\"></i>\n                <i class=\"fab fa-linkedin\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</footer>\n<!-- footer_section - end\n\t\t================================================== -->\n\n<!-- backtotop - start -->\n<div id=\"thetop\"></div>\n<div id=\"backtotop\">\n  <a href=\"#\" id=\"scroll\">\n    <i class=\"far fa-arrow-up\"></i>\n  </a>\n</div>\n<!-- backtotop - end -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header_section - start\n\t\t================================================== -->\n<header class=\"header_section sticky_header header_default clearfix\">\n  <div class=\"header_top bg_default_blue text-white clearfix\">\n    <div class=\"maxw_1420 container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-8\">\n          <ul class=\"header_contact_info ul_li clearfix\">\n            <li><i class=\"far fa-map-marker-alt\"></i> 20 Main Street, USA</li>\n            <li><i class=\"far fa-envelope-open\"></i> info@ggoldenservice.com</li>\n            <li><i class=\"far fa-clock\"></i> Sun - Monday, 09 am - 04 pm</li>\n          </ul>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <ul class=\"header_items_list ul_li_right clearfix\">\n            <li>\n              <div class=\"header_social_links d-flex align-items-center\">\n                <span class=\"social_title text-white\">Social Links:</span>\n                <ul class=\"primary_social_links ul_li clearfix\">\n                  <li><a href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                  <li><a href=\"#!\"><i class=\"fab fa-twitter\"></i></a></li>\n                  <li><a href=\"#!\"><i class=\"fab fa-youtube\"></i></a></li>\n                  <li><a href=\"#!\"><i class=\"fab fa-linkedin\"></i></a></li>\n                </ul>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"header_bottom\">\n    <div class=\"maxw_1420 container\">\n      <div class=\"row align-items-center\">\n\n        <div class=\"col-lg-3\">\n          <div class=\"brand_logo\">\n            <a href=\"/\">\n              <img src=\"assets/images/logo/logo-2.png\" srcset=\"assets/images/logo/logo_01_2x.png 2x\"\n                alt=\"logo_not_found\">\n            </a>\n\n            <ul class=\"mobilemenu_btns_group ul_li_right clearfix\">\n              <li>\n                <button type=\"button\" class=\"search_btn\" data-toggle=\"collapse\" data-target=\"#search_body_collapse\"\n                  aria-expanded=\"false\" aria-controls=\"search_body_collapse\">\n                  <i class=\"fal fa-search\"></i>\n                </button>\n              </li>\n              <li>\n                <button type=\"button\" class=\"mobile_menu_btn\"><i class=\"fal fa-bars\"></i></button>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <nav class=\"main_menu clearfix\">\n            <ul class=\"ul_li_center clearfix\">\n              <li class=\"active\">\n                <a href=\"/\">Home</a>\n              </li>\n              <li><a href=\"/about\">About</a></li>\n              \n              <li class=\"has_child\">\n                <a href=\"/products/category/waste-papers\">Waste Papers</a>\n                <ul class=\"submenu\">\n                  <li *ngFor=\"let product of waste_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                </ul>\n              </li>\n              <li class=\"has_child\">\n                <a href=\"/products/category/paper-type\">Paper Types</a>\n                <ul class=\"submenu\">\n                  <li *ngFor=\"let product of type_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                </ul>\n              </li>\n              <li class=\"has_child\">\n                <a href=\"/products/category/copy-paper\">Copy Papers</a>\n                <ul class=\"submenu\">\n                  <li *ngFor=\"let product of copy_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                </ul>\n              </li>\n            </ul>\n          </nav>\n        </div>\n\n        <div class=\"col-lg-3\">\n          <ul class=\"header_btns_group ul_li_right clearfix\">\n            <li>\n              <button type=\"button\" class=\"action_btn search_btn bg_default_purple\" data-toggle=\"collapse\"\n                data-target=\"#search_body_collapse\" aria-expanded=\"false\" aria-controls=\"search_body_collapse\">\n                <i class=\"fal fa-search\"></i>\n              </button>\n            </li>\n            <li>\n              <a class=\"custom_btn bg_default_yellow\" href=\"/contact\">\n                get a quote\n                <span><i class=\"fal fa-arrow-right\"></i></span>\n              </a>\n            </li>\n          </ul>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div id=\"search_body_collapse\" class=\"search_body_collapse collapse\">\n    <div class=\"search_body\">\n      <div class=\"container maxw_1420\">\n        <form action=\"#\" #ngSearch=\"ngForm\" (ngSubmit)=\"search()\">\n          <div class=\"form_item m-0\">\n            <input type=\"search\" name=\"search\" [(ngModel)]=\"searchString\" placeholder=\"Type here...\">\n            <button type=\"submit\"><i class=\"fal fa-search\"></i></button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</header>\n<!-- header_section - end\n\t\t================================================== -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- main body - start\n\t\t================================================== -->\n<main class=\"mt-0\">\n\n\n  <!-- sidebar mobile menu - start\n\t\t\t================================================== -->\n  <div class=\"sidebar-menu-wrapper\">\n    <div class=\"sidebar_mobile_menu\">\n\n      <span class=\"close_btn\"><i class=\"fal fa-times\"></i></span>\n\n      <div class=\"mobile_menu_list clearfix\">\n        <ul class=\"ul_li_block clearfix\">\n          <li class=\"active\">\n            <a href=\"/\">Home</a>\n          </li>\n          <li><a href=\"/about\">About</a></li>\n          <li><a href=\"/contact\">Conatct</a></li>\n          <li class=\"dropdown\">\n            <a href=\"/products/category/waste-papers\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Waste Papers</a>\n            <ul class=\"dropdown-menu\">\n              <li *ngFor=\"let product of waste_papers\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.id}}</a></li>\n            </ul>\n          </li>\n          <li class=\"dropdown\">\n            <a href=\"/products/category/paper-type\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Paper Types</a>\n            <ul class=\"dropdown-menu\">\n              <li *ngFor=\"let product of paper_types\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n            </ul>\n          </li>\n          <li class=\"dropdown\">\n            <a href=\"/products/category/copy-paper\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Copy Papers</a>\n            <ul class=\"dropdown-menu\">\n              <li *ngFor=\"let product of copy_papers\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n            </ul>\n          </li>\n\n        </ul>\n      </div>\n\n    </div>\n    <div class=\"overlay\"></div>\n  </div>\n  <!-- sidebar mobile menu - end\n\t\t\t================================================== -->\n\n  <!-- slider_section - start\n\t\t\t================================================== -->\n  <section class=\"slider_section home_three_slider clearfix\">\n    <div class=\"main_slider owl-carousel owl-theme clearfix\">\n\n      <div class=\"item\" data-background=\"assets/images/slider/bg-02.jpg\">\n        <div class=\"container\">\n          <div\n            class=\"row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center\">\n            <div class=\"col-lg-5 col-md-8 col-sm-12 col-xs-12 order-last\">\n              <div class=\"slider_image\">\n                <img src=\"assets/images/slider/bg-02.jpg\" alt=\"image_not_found\">\n              </div>\n            </div>\n\n            <div class=\"col-lg-7 col-md-8 col-sm-12 col-xs-12\">\n              <div class=\"slider_content text-white\">\n                <h4 class=\"small_title\">Welcome to Golden Global Service</h4>\n                <h3 class=\"item_title text-uppercase text-white mb-0\">G.G-SERVICES</h3>\n                <p>\n                  We supply all sorts of waste papers and from those waste papers, we make customizable printing as following the user's guide.\n                </p>\n                <ul class=\"btns_group ul_li clearfix\">\n                  <li>\n                    <a class=\"custom_btn bg_default_orange\" target=\"_blank\" href=\"/about\">\n                      About Us\n                      <span><i class=\"fal fa-arrow-right\"></i></span>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"custom_btn bg_default_yellow\" target=\"_blank\" href=\"/contact\">\n                      Contact Us\n                      <span><i class=\"fal fa-arrow-right\"></i></span>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"item\" data-background=\"assets/images/slider/bg-03.jpg\">\n        <div class=\"container\">\n          <div\n            class=\"row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center\">\n            <div class=\"col-lg-5 col-md-8 col-sm-12 col-xs-12 order-last\">\n              <div class=\"slider_image\">\n                <img src=\"assets/images/slider/bg-03.jpg\" alt=\"image_not_found\">\n              </div>\n            </div>\n\n            <div class=\"col-lg-7 col-md-8 col-sm-12 col-xs-12\">\n              <div class=\"slider_content text-white\">\n                <h4 class=\"small_title\">Welcome to Global Golden Service</h4>\n                <h4 class=\"item_title text-uppercase text-white mb-0\">G.G-SERVICES</h4>\n                <p>\n                  We supply all sorts of waste papers and from those waste papers, we make customizable printing as following the user's guide.\n                </p>\n                <ul class=\"btns_group ul_li clearfix\">\n                  <li>\n                    <a class=\"custom_btn bg_default_orange\" target=\"_blank\" href=\"/about\">\n                      About Us\n                      <span><i class=\"fal fa-arrow-right\"></i></span>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"custom_btn bg_default_yellow\" target=\"_blank\" href=\"/contact\">\n                      Contact Us\n                      <span><i class=\"fal fa-arrow-right\"></i></span>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </section>\n  <!-- slider_section - end\n\t\t\t================================================== -->\n\n\n  <!-- feature_section - start\n\t\t\t================================================== -->\n  <section class=\"feature_section sec_ptb_130 bg_gray deco_wrap clearfix\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-7 col-md-8 col-sm-10 col-xs-12\">\n          <div class=\"section_title text-center mb_50 wow fadeInUp2\" data-wow-delay=\".1s\">\n            <h4 class=\"small_title\">Our Core Features</h4>\n            <h2 class=\"big_title mb-0\">\n              Experience Allows Us To Printing Things\n            </h2>\n            <span class=\"biggest_title\">Features</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"stairs_wrap row justify-content-lg-between justify-content-md-center justify-content-md-center\">\n        <div class=\"stair_col col-lg-4 col-md-5 col-sm-6 col-xs-12 wow fadeInUp2\" data-wow-delay=\".3s\" >\n          <div class=\"feature_card\">\n            <a class=\"item_image plus_effect\" href=\"/products/category/waste-papers\">\n              <img src=\"{{waste_paper_product.image}}\" alt=\"{{waste_paper_product.name}}\">\n            </a>\n            <div class=\"item_content\">\n              <span class=\"item_type\">Waste Papers</span>\n              <h3 class=\"item_title\">{{waste_paper_product.name}}</h3>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"stair_col col-lg-4 col-md-5 col-sm-6 col-xs-12 wow fadeInUp2\" data-wow-delay=\".5s\" >\n          <div class=\"feature_card\">\n            <a class=\"item_image plus_effect\" href=\"/products/category/paper-type\">\n              <img src=\"{{paper_type_product.image}}\" alt=\"{{paper_type_product.name}}\">\n            </a>\n            <div class=\"item_content\">\n              <span class=\"item_type\">All Paper Types</span>\n              <h3 class=\"item_title\">{{paper_type_product.name}}</h3>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"stair_col col-lg-4 col-md-5 col-sm-6 col-xs-12 wow fadeInUp2\" data-wow-delay=\".7s\">\n          <div class=\"feature_card\">\n            <a class=\"item_image plus_effect\" href=\"/products/category/copy-paper\">\n              <img src=\"{{color_product.image}}\" alt=\"{{color_product.name}}\">\n            </a>\n            <div class=\"item_content\">\n              <span class=\"item_type\">Printing Copy Papers</span>\n              <h3 class=\"item_title\">{{color_product.name}}</h3>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <span class=\"deco_image triangle_shape wow fadeInUp2\" data-wow-delay=\".1s\"></span>\n  </section>\n  <!-- feature_section - end\n\t\t\t================================================== -->\n\n\n  <!-- whoweare_section - start\n\t\t\t================================================== -->\n  <section class=\"whoweare_section bg_default_yellow clearfix\">\n    <div class=\"container-fluid p-0\">\n      <div\n        class=\"row no-gutters align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center\">\n        <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"whoweare_image wow fadeIn\">\n            <img src=\"assets/images/about/bg-12.png\" alt=\"icon_not_found\">\n            <!-- <a class=\"play_btn popup_video bg_white\" href=\"http://www.youtube.com/watch?v=0O2aH4XLbto\">\n              <i class=\"fas fa-play\"></i>\n            </a> -->\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"whoweare_content\">\n            <div class=\"section_title mb_50 wow fadeInUp2\" data-wow-delay=\".2s\">\n              <h4 class=\"small_title\">Paper Waste Disposal</h4>\n              <h4 class=\"big_title mb-0\">\n                What types of paper can be recycled?\n              </h4>\n              <span class=\"biggest_title\">We Do</span>\n            </div>\n\n            <div class=\"whoweare_about_content wow fadeInUp2\" data-wow-delay=\".3s\">\n              <p>\n                There are three different types of paper that can be recycled;\n\n                These are known as ‘mill broke’ – this is essentially any paper scrap or trimmings that come from the\n                manufacturing of paper, this generally gets recycled internally by the paper mills.\n\n                There is also ‘pre-consumer waste’. This is paper that has been sent away from the paper mill but then\n                discarded prior to being used by a consumer.\n\n                Finally, there is ‘post-consumer waste’ – this is any paper material that has been received and used by\n                a consumer and then discarded, such as newspapers.\n              </p>\n              <!-- <div class=\"avatar_wrap\">\n                <div class=\"avatar_image\">\n                  <img src=\"assets/images/meta/img_01.png\" alt=\"image_not_found\">\n                </div>\n                <div class=\"avatar_content\">\n                  <h4 class=\"avatar_name\">Kristofer C. Bello</h4>\n                  <span class=\"avatar_title\">CEO &amp; Founder</span>\n                </div>\n              </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- whoweare_section - end\n\t\t\t================================================== -->\n\n\n  <!-- service_section - start\n\t\t\t================================================== -->\n  <!-- <section class=\"service_section sec_ptb_130 clearfix\">\n    <div class=\"container\">\n\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-8 col-md-8 col-sm-10 col-xs-12\">\n          <div class=\"section_title text-center mb_50 wow fadeInUp2\" data-wow-delay=\".1s\">\n            <h4 class=\"small_title\">What We Offers</h4>\n            <h2 class=\"big_title mb-0\">\n              We Provide Lot’s Of Waste Paper Types. Here Are Some\n            </h2>\n            <span class=\"biggest_title\">Services</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row no-gutters justify-content-lg-between\">\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeIn\" data-wow-delay=\".3s\">\n          <div class=\"service_split clearfix\">\n            <div class=\"item_content\">\n              <div class=\"service_boxed bg_default_yellow text-center\">\n                <div class=\"item_icon\">\n                  <img src=\"assets/images/services/icon_02.png\" alt=\"{{color_product.name}}\">\n                </div>\n                <h3 class=\"item_title\">{{color_product.name}}</h3>\n                <a class=\"text_btn\" target=\"_blank\" href=\"/category/{{color_product.category}}/product/{{color_product.id}}\">\n                  <span>Read More</span>\n                  <i class=\"far fa-arrow-right\"></i>\n                </a>\n              </div>\n            </div>\n            <a class=\"item_image\" target=\"_blank\" href=\"/category/{{color_product.category}}/product/{{color_product.id}}\">\n              <img src=\"{{color_product.image}}\" alt=\"image_not_found\">\n            </a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeIn\" data-wow-delay=\".4s\">\n          <div class=\"service_split clearfix\">\n            <div class=\"item_content\">\n              <div class=\"service_boxed bg_default_blue text-center text-white\">\n                <div class=\"item_icon\">\n                  <img src=\"assets/images/services/icon_03.png\" alt=\"icon_not_found\">\n                </div>\n                <h3 class=\"item_title\">{{thermal_product.name}}</h3>\n                <a class=\"text_btn\" href=\"/category/{{thermal_product.category}}/product/{{thermal_product.id}}\">\n                  <span>Read More</span>\n                  <i class=\"far fa-arrow-right\"></i>\n                </a>\n              </div>\n            </div>\n            <a class=\"item_image\" href=\"/category/{{thermal_product.category}}/product/{{thermal_product.id}}\">\n              <img src=\"{{thermal_product.image}}\" alt=\"image_not_found\">\n            </a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeIn\" data-wow-delay=\".5s\">\n          <div class=\"service_split clearfix\">\n            <a class=\"item_image\" href=\"/category/{{magazine_product.category}}/product/{{magazine_product.id}}\">\n              <img src=\"{{magazine_product.image}}\" alt=\"image_not_found\">\n            </a>\n            <div class=\"item_content\">\n              <div class=\"service_boxed bg_default_orange text-center text-white\">\n                <div class=\"item_icon\">\n                  <img src=\"assets/images/services/icon_04.png\" alt=\"icon_not_found\">\n                </div>\n                <h3 class=\"item_title\">{{magazine_product.name}}</h3>\n                <a class=\"text_btn\" href=\"/category/{{magazine_product.category}}/product/{{magazine_product.id}}\">\n                  <span>Read More</span>\n                  <i class=\"far fa-arrow-right\"></i>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeIn\" data-wow-delay=\".6s\">\n          <div class=\"service_split clearfix\">\n            <a class=\"item_image\" target=\"_blank\" href=\"/category/{{kraft_product.category}}/product/{{kraft_product.id}}\">\n              <img src=\"{{kraft_product.image}}\" alt=\"image_not_found\">\n            </a>\n            <div class=\"item_content\">\n              <div class=\"service_boxed bg_default_past text-center text-white\">\n                <div class=\"item_icon\">\n                  <img src=\"assets/images/services/icon_06.png\" alt=\"icon_not_found\">\n                </div>\n                <h3 class=\"item_title\">{{kraft_product.name}}</h3>\n                <a class=\"text_btn\" target=\"_blank\" href=\"/category/{{kraft_product.category}}/product/{{kraft_product.id}}\">\n                  <span>Read More</span>\n                  <i class=\"far fa-arrow-right\"></i>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </section> -->\n  <!-- service_section - end\n\t\t\t================================================== -->\n\n  <!-- portfolio_section - start\n\t\t\t================================================== -->\n  <section class=\"portfolio_section sec_ptb_130 pb-0 clearfix\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-8 col-md-8 col-sm-10 col-xs-12\">\n          <div class=\"section_title text-center mb_50 wow fadeInUp2\" data-wow-delay=\".1s\">\n            <h4 class=\"small_title\">Our Offers</h4>\n            <h2 class=\"big_title mb-0\">\n              Some Available Products\n            </h2>\n            <span class=\"biggest_title\">Papers</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container-fluid\">\n      <div class=\"masonry_portfolio_grid grid wow fadeInUp2\" data-wow-delay=\".3s\">\n        <div class=\"grid-sizer\"></div>\n        <div class=\"grid-item\" *ngFor=\"let product of pets\">\n          <div class=\"portfolio_fullimage\">\n            <a class=\"plus_effect\" target=\"_blank\" href=\"/category/{{product.category}}/product/{{product.id}}\">\n              <img src=\"{{product.image}}\" alt=\"{{product.name}}\">\n            </a>\n            <!-- <h2>{{product.name}}</h2> -->\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n  <!-- portfolio_section - end\n\t\t\t================================================== -->\n\n\n  <!-- testimonial_section - start\n\t\t\t================================================== -->\n  <section class=\"testimonial_section sec_ptb_130 clearfix\">\n    <div class=\"container position-relative\">\n\n      <div class=\"row justify-content-lg-start\">\n        <div class=\"col-lg-6 col-md-7 col-sm-9 col-xs-12\">\n          <div class=\"section_title mb_80 wow fadeInUp2\" data-wow-delay=\".1s\">\n            <h4 class=\"small_title\">Clients Reviews</h4>\n            <h2 class=\"big_title mb-0\">\n              What Our Clients Say About Our Works\n            </h2>\n            <span class=\"biggest_title\">Says</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row justify-content-lg-between\">\n        <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12 order-last\">\n          <div class=\"testimonial_person_image wow fadeInUp2\" data-wow-delay=\".3s\">\n            <img src=\"assets/images/testimonial/img_06.jpg\" alt=\"image_not_found\">\n          </div>\n        </div>\n\n        <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"creative_testimonial_carousel owl-carousel owl-theme wow fadeInUp2\" data-wow-delay=\".5s\">\n            <div class=\"item\">\n              <div class=\"testimonial_primary\">\n                <div class=\"content_wrap\">\n                  <p>\n                    Would like to order more than the last quantity, hope you can supply, about a half more.\n                  </p>\n                  <span class=\"quote_icon\">\n                    <img src=\"assets/images/testimonial/quote_01.png\" alt=\"icon_not_found\">\n                  </span>\n                </div>\n                <div class=\"hero_info_wrap\">\n                  <div class=\"hero_thumbnail\">\n                    <img src=\"assets/images/testimonial/img_01.png\" alt=\"icon_not_found\">\n                  </div>\n                  <div class=\"hero_info\">\n                    <h3 class=\"hero_name\">Casey M. Vargas</h3>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"item\">\n              <div class=\"testimonial_primary\">\n                <div class=\"content_wrap\">\n                  <p>\n                    Had a missing color in my previous command from the color papers. Nevertheless, the quality is outstanding. Would like to make some modifications to fill the gap.\n                  </p>\n                  <span class=\"quote_icon\">\n                    <img src=\"assets/images/testimonial/quote_01.png\" alt=\"icon_not_found\">\n                  </span>\n                </div>\n                <div class=\"hero_info_wrap\">\n                  <div class=\"hero_thumbnail\">\n                    <img src=\"assets/images/testimonial/img_02.png\" alt=\"icon_not_found\">\n                  </div>\n                  <div class=\"hero_info\">\n                    <h3 class=\"hero_name\">Casey M. Vargas</h3>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"orange_shape wow fadeInUp2\" data-wow-delay=\".1s\"></div>\n\n    </div>\n  </section>\n  <!-- testimonial_section - end\n\t\t\t================================================== -->\n\n</main>\n<!-- main body - end\n\t\t================================================== -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header_section - start\n\t\t================================================== -->\n    <header class=\"header_section sticky_header header_default clearfix\">\n      <div class=\"header_top bg_light clearfix\">\n        <div class=\"maxw_1420 container\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-lg-8\">\n              <ul class=\"header_contact_info ul_li clearfix\">\n                <li><i class=\"far fa-map-marker-alt\"></i> 20 Main Street, USA</li>\n                <li><i class=\"far fa-envelope-open\"></i> info@ggoldenservice.com</li>\n                <li><i class=\"far fa-clock\"></i> Sun - Monday, 09 am - 04 pm</li>\n              </ul>\n            </div>\n    \n            <div class=\"col-lg-4\">\n              <ul class=\"header_items_list ul_li_right clearfix\">\n                <li>\n                  <div class=\"header_social_links d-flex align-items-center\">\n                    <span class=\"social_title text-white\">Social Links:</span>\n                    <ul class=\"primary_social_links ul_li clearfix\">\n                      <li><a href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-twitter\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-youtube\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-linkedin\"></i></a></li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      <div class=\"header_bottom bg_default_blue\">\n        <div class=\"maxw_1420 container\">\n          <div class=\"row align-items-center\">\n    \n            <div class=\"col-lg-3\">\n              <div class=\"brand_logo\">\n                <a href=\"/\">\n                  <img src=\"assets/images/logo/logo-2.png\" srcset=\"assets/images/logo/logo_01_2x.png 2x\"\n                    alt=\"logo_not_found\">\n                </a>\n    \n                <ul class=\"mobilemenu_btns_group ul_li_right clearfix\">\n                  <li>\n                    <button type=\"button\" class=\"search_btn\" data-toggle=\"collapse\" data-target=\"#search_body_collapse\"\n                      aria-expanded=\"false\" aria-controls=\"search_body_collapse\">\n                      <i class=\"fal fa-search\"></i>\n                    </button>\n                  </li>\n                  <li>\n                    <button type=\"button\" class=\"mobile_menu_btn\"><i class=\"fal fa-bars\"></i></button>\n                  </li>\n                </ul>\n              </div>\n            </div>\n    \n            <div class=\"col-lg-6\">\n              <nav class=\"main_menu clearfix\">\n                <ul class=\"ul_li_center clearfix\">\n                  <li class=\"active\">\n                    <a href=\"/\">Home</a>\n                  </li>\n                  <li><a href=\"/about\">About</a></li>\n                  \n                  <li class=\"has_child\">\n                    <a href=\"/products/category/waste-papers\">Waste Papers</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of waste_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                  <li class=\"has_child\">\n                    <a href=\"/products/category/paper-type\">Paper Types</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of type_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                  <li class=\"has_child\">\n                    <a href=\"/products/category/copy-paper\">Copy Papers</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of copy_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                </ul>\n              </nav>\n            </div>\n    \n            <div class=\"col-lg-3\">\n              <ul class=\"header_btns_group ul_li_right clearfix\">\n                <li>\n                  <button type=\"button\" class=\"action_btn search_btn bg_default_purple\" data-toggle=\"collapse\"\n                    data-target=\"#search_body_collapse\" aria-expanded=\"false\" aria-controls=\"search_body_collapse\">\n                    <i class=\"fal fa-search\"></i>\n                  </button>\n                </li>\n                <li>\n                  <a class=\"custom_btn bg_default_yellow\" href=\"/contact\">\n                    get a quote\n                    <span><i class=\"fal fa-arrow-right\"></i></span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n    \n          </div>\n        </div>\n      </div>\n    \n      <div id=\"search_body_collapse\" class=\"search_body_collapse collapse\">\n        <div class=\"search_body\">\n          <div class=\"container maxw_1420\">\n            <form action=\"#\" #ngSearch=\"ngForm\" (ngSubmit)=\"search()\">\n              <div class=\"form_item m-0\">\n                <input type=\"search\" name=\"search\" [(ngModel)]=\"searchString\" placeholder=\"Type here...\">\n                <button type=\"submit\"><i class=\"fal fa-search\"></i></button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </header>\n    <!-- header_section - end\n        ================================================== -->\n\n<main>\n\n  <!-- sidebar mobile menu - start\n\t\t\t================================================== -->\n\t<div class=\"sidebar-menu-wrapper\">\n\t\t<div class=\"sidebar_mobile_menu\">\n\n\t\t\t<span class=\"close_btn\"><i class=\"fal fa-times\"></i></span>\n\n\t\t\t<div class=\"mobile_menu_list clearfix\">\n\t\t\t\t<ul class=\"ul_li_block clearfix\">\n\t\t\t\t\t<li class=\"active\">\n\t\t\t\t\t\t<a href=\"/\">Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li><a href=\"/about\">About</a></li>\n\t\t\t\t\t<li><a href=\"/contact\">Conatct</a></li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/waste-papers\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Waste Papers</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of waste_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.id}}</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/paper-type\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Paper Types</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of type_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/copy-paper\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Copy Papers</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of copy_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"overlay\"></div>\n\t</div>\n\t<!-- sidebar mobile menu - end\n\t\t\t================================================== -->\n\n  <!-- breadcrumb_section - start\n\t\t\t================================================== -->\n  <section class=\"breadcrumb_section d-flex align-items-center clearfix\"\n    data-background=\"assets/images/breadcrumb/jump.jpg\">\n    <div class=\"container\">\n      <div class=\"row align-items-center justify-content-lg-between\">\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInLeft\" data-wow-delay=\".1s\">\n          <h1 class=\"page_title mb-0\">{{pet.name}}</h1>\n        </div>\n\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInRight\" data-wow-delay=\".1s\">\n          <ul class=\"breadcrumb_nav ul_li_right clearfix\">\n            <li><a href=\"/\">Home</a></li>\n            <li>Category</li>\n            <li>{{pet.id}}</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- breadcrumb_section - end\n\t\t\t================================================== -->\n\n\n  <!-- details_section - start\n\t\t\t================================================== -->\n  <section class=\"details_section shop_details sec_ptb_130 pt-0 bg_gray clearfix\">\n    <div class=\"shop_container\">\n      <div class=\"container\">\n\n        <div class=\"row justify-content-lg-between justify-content-md-center justify-content-sm-center\">\n          <div class=\"col-lg-8 col-md-8 col-sm-10 col-xs-12 wow fadeInUp2\" data-wow-delay=\".1s\">\n            <div class=\"details_image clearfix\">\n              <div class=\"tab-content\">\n                <div id=\"image_1\" class=\"tab-pane active\">\n                  <img src=\"{{pet.image}}\" alt=\"{{pet.name}}\">\n                </div>\n                <!-- <div id=\"image_2\" class=\"tab-pane fade\">\n                  <img src=\"assets/images/details/shop/img_01.jpg\" alt=\"image_not_found\">\n                </div>\n                <div id=\"image_3\" class=\"tab-pane fade\">\n                  <img src=\"assets/images/details/shop/img_01.jpg\" alt=\"image_not_found\">\n                </div> -->\n              </div>\n\n              <ul class=\"nav ul_li_block clearfix\" role=\"tablist\">\n                <li>\n                  <a class=\"active\" data-toggle=\"tab\" href=\"#image_1\">\n                    <img src=\"{{pet.image}}\" alt=\"{{pet.name}}\">\n                  </a>\n                </li>\n                <!-- <li>\n                  <a data-toggle=\"tab\" href=\"#image_2\">\n                    <img src=\"assets/images/details/shop/img_03.jpg\" alt=\"image_not_found\">\n                  </a>\n                </li>\n                <li>\n                  <a data-toggle=\"tab\" href=\"#image_3\">\n                    <img src=\"assets/images/details/shop/img_04.jpg\" alt=\"image_not_found\">\n                  </a>\n                </li> -->\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-8 col-sm-10 col-xs-12 wow fadeInUp2\" data-wow-delay=\".1s\">\n            <div class=\"details_content\">\n              <h2 class=\"item_title mb_15\">{{pet.name}}</h2>\n              <ul class=\"rating_star ul_li mb_30 clearfix\">\n                <li><i class=\"fas fa-star\"></i></li>\n                <li><i class=\"fas fa-star\"></i></li>\n                <li><i class=\"fas fa-star\"></i></li>\n                <li><i class=\"fas fa-star\"></i></li>\n                <li><i class=\"fas fa-star\"></i></li>\n              </ul>\n              <!-- <span class=\"price_text mb_30\"><strong>$89.00</strong> <del>$100.00</del></span> -->\n              <p class=\"mb_15\" [innerHTML]=\"pet?.description_1\">\n              </p>\n              <!-- <p class=\"mb_30\">\n                Perspiciatis unde omnis iste sit voluptate accusantium dolorem que laudantiu totam rem aperiaaquipsa\n                quae\n                ab illo\n              </p> -->\n              <ul class=\"quantity_cart ul_li mb_30 clearfix\">\n                <!-- <li>\n                  <div class=\"quantity_input\">\n                    <form action=\"#\">\n                      <span class=\"input_number_decrement\">–</span>\n                      <input class=\"input_number\" type=\"text\" value=\"1\">\n                      <span class=\"input_number_increment\">+</span>\n                    </form>\n                  </div>\n                </li> -->\n                <li><a href=\"/checkout\" (click)=\"addToCart()\" class=\"addtocart_btn custom_btn bg_default_orange\">Inquire Now!</a></li>\n              </ul>\n              <div class=\"share_links d-flex align-items-center clearfix\">\n                <span class=\"social_title\">Shore Now</span>\n                <ul class=\"primary_social_links ul_li clearfix\">\n                  <li><a href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                  <li><a href=\"#!\"><i class=\"fab fa-twitter\"></i></a></li>\n                  <li><a href=\"#!\"><i class=\"fab fa-youtube\"></i></a></li>\n                  <li><a href=\"#!\"><i class=\"fab fa-linkedin\"></i></a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <hr>\n\n        <!-- <div class=\"shop_description clearfix\">\n          <ul class=\"nav description_tabnav ul_li wow fadeInUp2 clearfix\" data-wow-delay=\".1s\" role=\"tablist\">\n            <li>\n              <a class=\"active\" data-toggle=\"tab\" href=\"#description_tab\">Description</a>\n            </li>\n            <li>\n              <a data-toggle=\"tab\" href=\"#additionalinfo_tab\">Additional information</a>\n            </li>\n            <li>\n              <a data-toggle=\"tab\" href=\"#reviews_tab\">Reviews (1)</a>\n            </li>\n          </ul>\n\n          <div class=\"tab-content wow fadeInUp2\" data-wow-delay=\".3s\">\n            <div id=\"description_tab\" class=\"tab-pane active\">\n              <p class=\"mb_30\">\n                Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex\n                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur xcepteur sint occaecat cupidatat non proident, sunt.\n              </p>\n              <p class=\"mb-0\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex\n                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cdolore eu fugiat\n                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                mollit\n                anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis\n                et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudinInteger in mauris eu\n                nibh\n                euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.\n                Ut\n                ullamcorper,\n              </p>\n            </div>\n            <div id=\"additionalinfo_tab\" class=\"tab-pane fade\">\n              <p class=\"mb_30\">\n                Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex\n                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur xcepteur sint occaecat cupidatat non proident, sunt.\n              </p>\n              <p class=\"mb-0\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex\n                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cdolore eu fugiat\n                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                mollit\n                anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis\n                et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudinInteger in mauris eu\n                nibh\n                euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.\n                Ut\n                ullamcorper,\n              </p>\n            </div>\n            <div id=\"reviews_tab\" class=\"tab-pane fade\">\n              <p class=\"mb_30\">\n                Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex\n                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur xcepteur sint occaecat cupidatat non proident, sunt.\n              </p>\n              <p class=\"mb-0\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex\n                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cdolore eu fugiat\n                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                mollit\n                anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis\n                et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudinInteger in mauris eu\n                nibh\n                euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.\n                Ut\n                ullamcorper,\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <hr> -->\n        \n        <h2><strong>Related Products...</strong></h2>\n        <div class=\"row mt__30 justify-content-left\">\n          <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12 wow fadeInUp2\" data-wow-delay=\".1s\" *ngFor=\"let pet of pets\">\n            <div class=\"product_card text-center bg_gray\">\n              <a class=\"item_image\" target=\"_blank\" href=\"/category/{{pet.category}}/product/{{pet.id}}\">\n                <img src=\"{{pet.image}}\" alt=\"image_not_found\">\n              </a>\n              <div class=\"item_content\">\n                <h3 class=\"item_title\">{{pet.name}}</h3>\n                <!-- <span class=\"item_price\">$25.83</span> -->\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </section>\n  <!-- details_section - end\n\t\t\t================================================== -->\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header_section - start\n\t\t================================================== -->\n    <header class=\"header_section sticky_header header_default clearfix\">\n      <div class=\"header_top bg_light clearfix\">\n        <div class=\"maxw_1420 container\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-lg-8\">\n              <ul class=\"header_contact_info ul_li clearfix\">\n                <li><i class=\"far fa-map-marker-alt\"></i> 20 Main Street, USA</li>\n                <li><i class=\"far fa-envelope-open\"></i> info@ggoldenservice.com</li>\n                <li><i class=\"far fa-clock\"></i> Sun - Monday, 09 am - 04 pm</li>\n              </ul>\n            </div>\n    \n            <div class=\"col-lg-4\">\n              <ul class=\"header_items_list ul_li_right clearfix\">\n                <li>\n                  <div class=\"header_social_links d-flex align-items-center\">\n                    <span class=\"social_title text-white\">Social Links:</span>\n                    <ul class=\"primary_social_links ul_li clearfix\">\n                      <li><a href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-twitter\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-youtube\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-linkedin\"></i></a></li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      <div class=\"header_bottom bg_default_blue\">\n        <div class=\"maxw_1420 container\">\n          <div class=\"row align-items-center\">\n    \n            <div class=\"col-lg-3\">\n              <div class=\"brand_logo\">\n                <a href=\"/\">\n                  <img src=\"assets/images/logo/logo-2.png\" srcset=\"assets/images/logo/logo_01_2x.png 2x\"\n                    alt=\"logo_not_found\">\n                </a>\n    \n                <ul class=\"mobilemenu_btns_group ul_li_right clearfix\">\n                  <li>\n                    <button type=\"button\" class=\"search_btn\" data-toggle=\"collapse\" data-target=\"#search_body_collapse\"\n                      aria-expanded=\"false\" aria-controls=\"search_body_collapse\">\n                      <i class=\"fal fa-search\"></i>\n                    </button>\n                  </li>\n                  <li>\n                    <button type=\"button\" class=\"mobile_menu_btn\"><i class=\"fal fa-bars\"></i></button>\n                  </li>\n                </ul>\n              </div>\n            </div>\n    \n            <div class=\"col-lg-6\">\n              <nav class=\"main_menu clearfix\">\n                <ul class=\"ul_li_center clearfix\">\n                  <li class=\"active\">\n                    <a href=\"/\">Home</a>\n                  </li>\n                  <li><a href=\"/about\">About</a></li>\n                  \n                  <li class=\"has_child\">\n                    <a href=\"/products/category/waste-papers\">Waste Papers</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of waste_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                  <li class=\"has_child\">\n                    <a href=\"/products/category/paper-type\">Paper Types</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of type_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                  <li class=\"has_child\">\n                    <a href=\"/products/category/copy-paper\">Copy Papers</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of copy_products\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                </ul>\n              </nav>\n            </div>\n    \n            <div class=\"col-lg-3\">\n              <ul class=\"header_btns_group ul_li_right clearfix\">\n                <li>\n                  <button type=\"button\" class=\"action_btn search_btn bg_default_purple\" data-toggle=\"collapse\"\n                    data-target=\"#search_body_collapse\" aria-expanded=\"false\" aria-controls=\"search_body_collapse\">\n                    <i class=\"fal fa-search\"></i>\n                  </button>\n                </li>\n                <li>\n                  <a class=\"custom_btn bg_default_yellow\" href=\"/contact\">\n                    get a quote\n                    <span><i class=\"fal fa-arrow-right\"></i></span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n    \n          </div>\n        </div>\n      </div>\n    \n      <div id=\"search_body_collapse\" class=\"search_body_collapse collapse\">\n        <div class=\"search_body\">\n          <div class=\"container maxw_1420\">\n            <form action=\"#\" #ngSearch=\"ngForm\" (ngSubmit)=\"search()\">\n              <div class=\"form_item m-0\">\n                <input type=\"search\" name=\"search\" [(ngModel)]=\"searchString\" placeholder=\"Type here...\">\n                <button type=\"submit\"><i class=\"fal fa-search\"></i></button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </header>\n    <!-- header_section - end\n        ================================================== -->\n\n<main>\n\n  <!-- sidebar mobile menu - start\n\t\t\t================================================== -->\n\t<div class=\"sidebar-menu-wrapper\">\n\t\t<div class=\"sidebar_mobile_menu\">\n\n\t\t\t<span class=\"close_btn\"><i class=\"fal fa-times\"></i></span>\n\n\t\t\t<div class=\"mobile_menu_list clearfix\">\n\t\t\t\t<ul class=\"ul_li_block clearfix\">\n\t\t\t\t\t<li class=\"active\">\n\t\t\t\t\t\t<a href=\"/\">Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li><a href=\"/about\">About</a></li>\n\t\t\t\t\t<li><a href=\"/contact\">Conatct</a></li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/waste-papers\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Waste Papers</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of waste_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.id}}</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/paper-type\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Paper Types</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of type_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/copy-paper\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Copy Papers</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of copy_products\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"overlay\"></div>\n\t</div>\n\t<!-- sidebar mobile menu - end\n\t\t\t================================================== -->\n\n  <!-- breadcrumb_section - start\n\t\t\t================================================== -->\n  <section class=\"breadcrumb_section d-flex align-items-center clearfix\"\n    data-background=\"assets/images/breadcrumb/jump.jpg\">\n    <div class=\"container\">\n      <div class=\"row align-items-center justify-content-lg-between\">\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInLeft\" data-wow-delay=\".1s\">\n          <h1 class=\"page_title mb-0\">{{currentCategory.toUpperCase()}}</h1>\n        </div>\n\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInRight\" data-wow-delay=\".1s\">\n          <ul class=\"breadcrumb_nav ul_li_right clearfix\">\n            <li><a href=\"/\">Home</a></li>\n            <li>Category</li>\n            <li>{{currentCategory}}</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- breadcrumb_section - end\n\t\t\t================================================== -->\n\n\n  <!-- shop_section - start\n\t\t\t================================================== -->\n  <section class=\"shop_section sec_ptb_130 bg_gray clearfix\">\n    <div class=\"container\">\n      <div class=\"row justify-content-lg-between justify-content-md-center justify-content-sm-center\">\n\n        <div class=\"col-lg-9 col-md-12 order-last\">\n          <div class=\"product_selection_bar wow fadeInUp2 clearfix\" data-wow-delay=\".1s\">\n            <div\n              class=\"row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center\">\n              <!-- <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n              <div class=\"select_option mb-0\">\n                <select>\n                  <option data-display=\"Category\">Select A Option</option>\n                  <option value=\"1\" selected>Category 1</option>\n                  <option value=\"2\">Category 2</option>\n                  <option value=\"3\">Category 3</option>\n                  <option value=\"4\">Category 4</option>\n                </select>\n              </div>\n            </div> -->\n\n              <!-- <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 order-last\">\n              <div class=\"select_option float_right mb-0\">\n                <select>\n                  <option data-display=\"Short By\">Select A Option</option>\n                  <option value=\"Name\" selected>Name</option>\n                  <option value=\"Price\">Price</option>\n                  <option value=\"Size\">Size</option>\n                </select>\n              </div>\n            </div> -->\n\n              <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <p class=\"result_text\">Showing {{getCategoryCount(currentCategory)}} results</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row justify-content-left\">\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInUp2\" data-wow-delay=\".2s\" *ngFor=\"let product of currentProducts\">\n              <div class=\"product_card text-center\">\n                <a class=\"item_image\" href=\"/category/{{product.category}}/product/{{product.id}}\">\n                  <img src=\"{{product.image}}\" alt=\"{{product.name}}\">\n                </a>\n                <div class=\"item_content\">\n                  <h3 class=\"item_title\">{{product.name}}</h3>\n                  <!-- <span class=\"item_price\">$25.83</span> -->\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-12 col-sm-12 col-xs-12\">\n          <aside class=\"sidebar_section clearfix\">\n\n            <div class=\"widget wow fadeInUp2 sb_search_box_2 p-0\" data-wow-delay=\".1s\">\n              <form action=\"#\" #ngSearch=\"ngForm\" (ngSubmit)=\"search()\">\n                <div class=\"form_item mb-0\">\n                  <input id=\"sb_search\" type=\"search\" name=\"search\" placeholder=\"Search Keywords\" [(ngModel)]=\"searchString\">\n                  <button type=\"submit\" class=\"submit_btn bg_default_orange\"><i class=\"fal fa-search\"></i></button>\n                </div>\n              </form>\n            </div>\n\n            <div class=\"widget wow fadeInUp2 sb_category_list\" data-wow-delay=\".3s\">\n              <h3 class=\"sb_widget_title bottom_line\">Categories</h3>\n              <ul class=\"ul_li_block clearfix\">\n                <li *ngFor=\"let category of categories\"><a href=\"/products/category/{{category}}\">{{category}}</a></li>\n              </ul>\n            </div>\n\n            <div class=\"widget wow fadeInUp2 sb_tag_list_2\" data-wow-delay=\".5s\">\n              <h3 class=\"sb_widget_title bottom_line\">Popular Tags</h3>\n              <ul class=\"ul_li clearfix\">\n                <li *ngFor=\"let product of currentProducts\"><a\n                    href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n              </ul>\n            </div>\n\n            <!-- <div class=\"widget wow fadeInUp2 price-range\" data-wow-delay=\".7s\">\n            <h3 class=\"sb_widget_title bottom_line\">Filer By Price</h3>\n            <form action=\"#\">\n              <div class=\"price-range-area clearfix\">\n                <div id=\"slider-range\" class=\"slider-range\"></div>\n                <div class=\"price-text d-flex align-items-center\">\n                  <span>Price:</span>\n                  <input type=\"text\" id=\"amount\" readonly>\n                </div>\n              </div>\n            </form>\n          </div> -->\n\n          </aside>\n        </div>\n\n      </div>\n    </div>\n  </section>\n  <!-- shop_section - end\n\t\t\t================================================== -->\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/reviews/reviews.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/reviews/reviews.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  reviews works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header_section - start\n\t\t================================================== -->\n    <header class=\"header_section sticky_header header_default clearfix\">\n      <div class=\"header_top bg_light clearfix\">\n        <div class=\"maxw_1420 container\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-lg-8\">\n              <ul class=\"header_contact_info ul_li clearfix\">\n                <li><i class=\"far fa-map-marker-alt\"></i> 20 Main Street, USA</li>\n                <li><i class=\"far fa-envelope-open\"></i> info@ggoldenservice.com</li>\n                <li><i class=\"far fa-clock\"></i> Sun - Monday, 09 am - 04 pm</li>\n              </ul>\n            </div>\n    \n            <div class=\"col-lg-4\">\n              <ul class=\"header_items_list ul_li_right clearfix\">\n                <li>\n                  <div class=\"header_social_links d-flex align-items-center\">\n                    <span class=\"social_title text-white\">Social Links:</span>\n                    <ul class=\"primary_social_links ul_li clearfix\">\n                      <li><a href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-twitter\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-youtube\"></i></a></li>\n                      <li><a href=\"#!\"><i class=\"fab fa-linkedin\"></i></a></li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      <div class=\"header_bottom bg_default_blue\">\n        <div class=\"maxw_1420 container\">\n          <div class=\"row align-items-center\">\n    \n            <div class=\"col-lg-3\">\n              <div class=\"brand_logo\">\n                <a href=\"/\">\n                  <img src=\"assets/images/logo/logo-2.png\" srcset=\"assets/images/logo/logo_01_2x.png 2x\"\n                    alt=\"logo_not_found\">\n                </a>\n    \n                <ul class=\"mobilemenu_btns_group ul_li_right clearfix\">\n                  <li>\n                    <button type=\"button\" class=\"search_btn\" data-toggle=\"collapse\" data-target=\"#search_body_collapse\"\n                      aria-expanded=\"false\" aria-controls=\"search_body_collapse\">\n                      <i class=\"fal fa-search\"></i>\n                    </button>\n                  </li>\n                  <li>\n                    <button type=\"button\" class=\"mobile_menu_btn\"><i class=\"fal fa-bars\"></i></button>\n                  </li>\n                </ul>\n              </div>\n            </div>\n    \n            <div class=\"col-lg-6\">\n              <nav class=\"main_menu clearfix\">\n                <ul class=\"ul_li_center clearfix\">\n                  <li class=\"active\">\n                    <a href=\"/\">Home</a>\n                  </li>\n                  <li><a href=\"/about\">About</a></li>\n                  \n                  <li class=\"has_child\">\n                    <a href=\"/products/category/waste-papers\">Waste Papers</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of waste_papers\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                  <li class=\"has_child\">\n                    <a href=\"/products/category/paper-type\">Paper Types</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of paper_types\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                  <li class=\"has_child\">\n                    <a href=\"/products/category/copy-paper\">Copy Papers</a>\n                    <ul class=\"submenu\">\n                      <li *ngFor=\"let product of copy_papers\"><a href=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a></li>\n                    </ul>\n                  </li>\n                </ul>\n              </nav>\n            </div>\n    \n            <div class=\"col-lg-3\">\n              <ul class=\"header_btns_group ul_li_right clearfix\">\n                <li>\n                  <button type=\"button\" class=\"action_btn search_btn bg_default_purple\" data-toggle=\"collapse\"\n                    data-target=\"#search_body_collapse\" aria-expanded=\"false\" aria-controls=\"search_body_collapse\">\n                    <i class=\"fal fa-search\"></i>\n                  </button>\n                </li>\n                <li>\n                  <a class=\"custom_btn bg_default_yellow\" href=\"/contact\">\n                    get a quote\n                    <span><i class=\"fal fa-arrow-right\"></i></span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n    \n          </div>\n        </div>\n      </div>\n    \n      <div id=\"search_body_collapse\" class=\"search_body_collapse collapse\">\n        <div class=\"search_body\">\n          <div class=\"container maxw_1420\">\n            <form action=\"#\" #ngSearch=\"ngForm\" (ngSubmit)=\"search()\">\n              <div class=\"form_item m-0\">\n                <input type=\"search\" name=\"search\" [(ngModel)]=\"searchString\" placeholder=\"Type here...\">\n                <button type=\"submit\"><i class=\"fal fa-search\"></i></button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </header>\n    <!-- header_section - end\n        ================================================== -->\n\n<main>\n\n  <!-- sidebar mobile menu - start\n\t\t\t================================================== -->\n\t<div class=\"sidebar-menu-wrapper\">\n\t\t<div class=\"sidebar_mobile_menu\">\n\n\t\t\t<span class=\"close_btn\"><i class=\"fal fa-times\"></i></span>\n\n\t\t\t<div class=\"mobile_menu_list clearfix\">\n\t\t\t\t<ul class=\"ul_li_block clearfix\">\n\t\t\t\t\t<li class=\"active\">\n\t\t\t\t\t\t<a href=\"/\">Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li><a href=\"/about\">About</a></li>\n\t\t\t\t\t<li><a href=\"/contact\">Conatct</a></li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/waste-papers\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Waste Papers</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of waste_papers\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.id}}</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/paper-type\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Paper Types</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of paper_types\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"/products/category/copy-paper\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t\t\t\taria-expanded=\"false\">Copy Papers</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li *ngFor=\"let product of copy_papers\"><a\n\t\t\t\t\t\t\t\t\thref=\"/category/{{product.category}}/product/{{product.id}}\">{{product.name}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"overlay\"></div>\n\t</div>\n\t<!-- sidebar mobile menu - end\n\t\t\t================================================== -->\n\n  <!-- breadcrumb_section - start\n          ================================================== -->\n  <section class=\"breadcrumb_section d-flex align-items-center clearfix\"\n    data-background=\"assets/images/breadcrumb/jump.jpg\">\n    <div class=\"container\">\n      <div class=\"row align-items-center justify-content-lg-between\">\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInLeft\" data-wow-delay=\".1s\">\n          <h1 class=\"page_title mb-0\">{{id.toUpperCase()}}</h1>\n        </div>\n\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInRight\" data-wow-delay=\".1s\">\n          <ul class=\"breadcrumb_nav ul_li_right clearfix\">\n            <li><a href=\"/\">Home</a></li>\n            <li>Category</li>\n            <li>search</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- breadcrumb_section - end\n          ================================================== -->\n\n\n  <!-- shop_section - start\n          ================================================== -->\n  <section class=\"shop_section sec_ptb_130 bg_gray clearfix\">\n    <div class=\"container\">\n      <div class=\"row justify-content-lg-between justify-content-md-center justify-content-sm-center\">\n\n        <div class=\"col-lg-9 col-md-12 order-last\">\n          <div class=\"product_selection_bar wow fadeInUp2 clearfix\" data-wow-delay=\".1s\">\n            <div\n              class=\"row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center\">\n              <!-- <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                  <div class=\"select_option mb-0\">\n                    <select>\n                      <option data-display=\"Category\">Select A Option</option>\n                      <option value=\"1\" selected>Category 1</option>\n                      <option value=\"2\">Category 2</option>\n                      <option value=\"3\">Category 3</option>\n                      <option value=\"4\">Category 4</option>\n                    </select>\n                  </div>\n                </div> -->\n\n              <!-- <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 order-last\">\n                  <div class=\"select_option float_right mb-0\">\n                    <select>\n                      <option data-display=\"Short By\">Select A Option</option>\n                      <option value=\"Name\" selected>Name</option>\n                      <option value=\"Price\">Price</option>\n                      <option value=\"Size\">Size</option>\n                    </select>\n                  </div>\n                </div> -->\n\n              <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <p class=\"result_text\">Showing all results</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row justify-content-left\">\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInUp2\" *ngFor=\"let product of products\">\n              <div class=\"product_card text-center\">\n                <a class=\"item_image\" href=\"/category/{{product.category}}/product/{{product.id}}\">\n                  <img src=\"{{product.image}}\" alt=\"{{product.name}}\">\n                </a>\n                <div class=\"item_content\">\n                  <h3 class=\"item_title\">{{product.name}}</h3>\n                  <!-- <span class=\"item_price\">$25.83</span> -->\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n  <!-- shop_section - end\n          ================================================== -->\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  not-found works!\n</p>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/reviews/reviews.component */ "./src/app/components/reviews/reviews.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: 'Welcome Home' } },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], data: { title: 'About Page' } },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], data: { title: 'Contact Page' } },
    { path: 'checkout', component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"], data: { title: 'Checkout Page' } },
    { path: 'products', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], data: { title: 'Products Page' } },
    { path: 'reviews', component: _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__["ReviewsComponent"], data: { title: 'Reviews Page' } },
    { path: '404', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] },
    // {path: '**', redirectTo: '/404', pathMatch: 'full'}
    // { path: 'products/:category/page/:page', component: ProductsComponent, data: { title: 'Products' } },
    // { path: 'products', redirectTo: 'products/all/page/1' },
    { path: 'products/category/:id', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], data: { title: 'Shop By Category' } },
    { path: 'category/:category/product/:id', component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"] },
    { path: 'search/:id', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({
                    appId: 'app-root'
                }),
                _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
            ]
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_script_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/script.service */ "./src/app/services/script.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppComponent = /** @class */ (function () {
    function AppComponent(script) {
        this.script = script;
        this.title = 'angular-universal-heroku';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.script.load('owl-carousel').then(function (data) {
            console.log('script loaded ', data);
        }).catch(function (error) { return console.log(error); });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_script_service__WEBPACK_IMPORTED_MODULE_1__["ScriptService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_script_service__WEBPACK_IMPORTED_MODULE_1__["ScriptService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _services_script_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/script.service */ "./src/app/services/script.service.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/components/category/category.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/reviews/reviews.component */ "./src/app/components/reviews/reviews.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @gorniv/ngx-universal */ "./node_modules/@gorniv/ngx-universal/fesm5/gorniv-ngx-universal.js");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @nguniversal/common */ "./node_modules/@nguniversal/common/fesm5/common.js");
/* harmony import */ var _services_pets_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/pets.service */ "./src/app/services/pets.service.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/seo.service */ "./src/app/services/seo.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
                _components_product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"],
                _components_category_category_component__WEBPACK_IMPORTED_MODULE_13__["CategoryComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"],
                _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_17__["ReviewsComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_23__["SearchComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_0__["NgtUniversalModule"],
                _nguniversal_common__WEBPACK_IMPORTED_MODULE_21__["TransferHttpCacheModule"],
                _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_20__["TransferHttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [
                _services_script_service__WEBPACK_IMPORTED_MODULE_10__["ScriptService"],
                _services_pets_service__WEBPACK_IMPORTED_MODULE_22__["PetService"],
                _services_api_service__WEBPACK_IMPORTED_MODULE_24__["ApiService"],
                _services_seo_service__WEBPACK_IMPORTED_MODULE_25__["SEOService"]
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pets.service */ "./src/app/services/pets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(router, productService) {
        this.router = router;
        this.productService = productService;
        this.waste_products = [];
        this.copy_products = [];
        this.type_products = [];
        this.searchString = "";
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.waste_products = this.productService.findByCategory('waste-papers');
        this.copy_products = this.productService.findByCategory('copy-paper');
        this.type_products = this.productService.findByCategory('paper-type');
    };
    AboutComponent.prototype.search = function () {
        if (this.searchString !== "") {
            this.router.navigate(["search/" + this.searchString.replace(" ", "+")]);
        }
    };
    AboutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_2__["PetService"] }
    ]; };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __importDefault(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_2__["PetService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/category/category.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/category/category.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/category/category.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/category/category.component.ts ***!
  \***********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var CategoryComponent = /** @class */ (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __importDefault(__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./category.component.scss */ "./src/app/components/category/category.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/checkout/checkout.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_api_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/api/cart */ "./src/app/models/api/cart.ts");
/* harmony import */ var src_app_models_api_checkout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/api/checkout */ "./src/app/models/api/checkout.ts");
/* harmony import */ var src_app_models_api_shippingDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/api/shippingDetails */ "./src/app/models/api/shippingDetails.ts");
/* harmony import */ var src_app_models_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/item */ "./src/app/models/item.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/pets.service */ "./src/app/services/pets.service.ts");
/* harmony import */ var _models_api_cartItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/api/cartItem */ "./src/app/models/api/cartItem.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(cartService, apiService, router, productService, petService) {
        this.cartService = cartService;
        this.apiService = apiService;
        this.router = router;
        this.productService = productService;
        this.petService = petService;
        this.waste_products = [];
        this.copy_products = [];
        this.type_products = [];
        this.searchString = "";
        this.isLoading = false;
        this.buttonMsg = "Inquire";
        this.pathToAssets = "../../assets/";
        this.pets = new Array();
        this.items = new Array();
        this.shipping = new src_app_models_api_shippingDetails__WEBPACK_IMPORTED_MODULE_3__["ShippingDetails"]();
        this.paymentOptions = ["Paypal", "Cashapp", "Zelle", "Applepay", "Venmo"];
    }
    CheckoutComponent.prototype.getPetName = function (id) {
        return this.petService.find(id).name;
    };
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getItems().subscribe(function (data) {
            _this.shipping.paymentOption = _this.paymentOptions[1];
            console.log(_this.shipping.paymentOption);
            _this.items = data;
            _this.pets = _this.petService.findAll();
            _this.shipping = new src_app_models_api_shippingDetails__WEBPACK_IMPORTED_MODULE_3__["ShippingDetails"]();
            if (_this.items.length > 0) {
                _this.chosen = _this.items[0].pet.id;
            }
            else {
                _this.chosen = _this.pets[0].id;
                _this.pet = _this.pets[0];
            }
            _this.items.forEach(function (item) {
                if (item.pet.id == _this.chosen) {
                    _this.pet = item.pet;
                }
            });
        });
        this.waste_products = this.productService.findByCategory('waste-papers');
        this.copy_products = this.productService.findByCategory('copy-paper');
        this.type_products = this.productService.findByCategory('paper-type');
    };
    CheckoutComponent.prototype.onChange = function (value) {
        console.log(value);
        var item = new src_app_models_item__WEBPACK_IMPORTED_MODULE_4__["Item"]();
        item.pet = this.petService.find(this.chosen);
        this.pet = item.pet;
        this.cartService.add(item);
    };
    CheckoutComponent.prototype.total = function () {
        return this.cartService.total();
    };
    CheckoutComponent.prototype.grandTotal = function () {
        return this.cartService.grandTotal();
    };
    CheckoutComponent.prototype.submit = function () {
        var _this = this;
        this.isLoading = true;
        this.buttonMsg = "Loading...";
        if (this.items.length < 1) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                title: 'Oops!',
                text: 'No product selected, please select a product before proceeding.',
                type: 'warning',
                confirmButtonText: 'Ok got it!',
                confirmButtonColor: '#fec931'
            });
            this.isLoading = false;
            this.buttonMsg = "Inquire";
        }
        else {
            var checkout = new src_app_models_api_checkout__WEBPACK_IMPORTED_MODULE_2__["Checkout"]();
            var cart_1 = new src_app_models_api_cart__WEBPACK_IMPORTED_MODULE_1__["Cart"]();
            this.items.forEach(function (value) {
                var apiCartItem = new _models_api_cartItem__WEBPACK_IMPORTED_MODULE_8__["CartItem"]();
                apiCartItem.petName = value.pet.name;
                apiCartItem.productTotal = value.pet.price;
                cart_1.cartItems.push(apiCartItem);
            });
            cart_1.grandTotal = this.cartService.total();
            checkout.cart = cart_1;
            checkout.shippingDetails = this.shipping;
            this.apiService.checkout(checkout)
                .subscribe(function (data) {
                _this.isLoading = true;
                _this.shipping = new src_app_models_api_shippingDetails__WEBPACK_IMPORTED_MODULE_3__["ShippingDetails"]();
                _this.cartService.purge();
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                    title: 'Thanks!',
                    text: 'Thank you! We took note of your request. We will contact you as soon as possible',
                    type: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#fec931'
                });
                _this.isLoading = false;
                _this.buttonMsg = "Inquire";
            }, function (err) {
                _this.isLoading = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                    title: 'Error!',
                    text: 'Unable to reach us. Make sure you are connected to the internet',
                    type: 'warning',
                    confirmButtonText: 'Ok got it!',
                    confirmButtonColor: '#fec931'
                });
                _this.buttonMsg = "Inquire";
            });
        }
    };
    CheckoutComponent.prototype.itemTotal = function (item) {
        var total = this.cartService.totalItems();
        return total;
    };
    CheckoutComponent.prototype.getPrice = function (item) {
        return this.cartService.getPrice(item.pet);
    };
    CheckoutComponent.prototype.Shipping = function () {
        return this.cartService.shipping();
    };
    CheckoutComponent.prototype.printPrice = function (price) {
        var price_parts = price.toString().split(".");
        price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return price_parts.join(".");
    };
    CheckoutComponent.prototype.search = function () {
        if (this.searchString !== "") {
            this.router.navigate(["search/" + this.searchString.replace(" ", "+")]);
        }
    };
    CheckoutComponent.ctorParameters = function () { return [
        { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_7__["PetService"] },
        { type: src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_7__["PetService"] }
    ]; };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkout/checkout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./checkout.component.scss */ "./src/app/components/checkout/checkout.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_7__["PetService"], src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_7__["PetService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_api_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/api/contact */ "./src/app/models/api/contact.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/pets.service */ "./src/app/services/pets.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var ContactComponent = /** @class */ (function () {
    function ContactComponent(apiService, router, petService) {
        this.apiService = apiService;
        this.router = router;
        this.petService = petService;
        this.waste_products = [];
        this.copy_products = [];
        this.type_products = [];
        this.searchString = "";
        this.contact = new src_app_models_api_contact__WEBPACK_IMPORTED_MODULE_2__["Contact"]();
        this.pets = new Array();
        this.petsName = new Array();
        this.isLoading = false;
        this.buttonMsg = "Send Message";
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pets = this.petService.findAll();
        this.pets.forEach(function (pet) {
            if (!_this.petsName.includes(pet.name) && pet.name != '') {
                _this.petsName.push(pet.name);
            }
        });
        this.waste_products = this.petService.findByCategory('waste-papers');
        this.copy_products = this.petService.findByCategory('copy-paper');
        this.type_products = this.petService.findByCategory('paper-type');
    };
    ContactComponent.prototype.submit = function () {
        var _this = this;
        this.buttonMsg = "Loading...";
        this.apiService.contact(this.contact)
            .subscribe(function (data) {
            _this.isLoading = true;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                title: 'Thanks!',
                text: 'Thank you! Your message has been received. We will contact you as soon as possible',
                type: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#fec931'
            });
            _this.contact = new src_app_models_api_contact__WEBPACK_IMPORTED_MODULE_2__["Contact"]();
            _this.isLoading = false;
            _this.buttonMsg = "Send Message";
        }, function (err) {
            _this.isLoading = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                title: 'Error!',
                text: 'Unable to send message. Make sure you are connected to the internet',
                type: 'warning',
                confirmButtonText: 'Ok!',
                confirmButtonColor: '#fec931'
            });
            _this.buttonMsg = "Send Message";
        });
    };
    ContactComponent.prototype.search = function () {
        if (this.searchString !== "") {
            this.router.navigate(["search/" + this.searchString.replace(" ", "+")]);
        }
    };
    ContactComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_4__["PetService"] }
    ]; };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __importDefault(__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_4__["PetService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_api_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/api/contact */ "./src/app/models/api/contact.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent(apiService) {
        this.apiService = apiService;
        this.contact = new src_app_models_api_contact__WEBPACK_IMPORTED_MODULE_1__["Contact"]();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.submit = function () {
        var _this = this;
        this.apiService.contact(this.contact)
            .subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: 'Thanks!',
                text: 'Thank you! Your email has been received. We will kep you up-to-date.',
                type: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#fec931'
            });
            _this.contact = new src_app_models_api_contact__WEBPACK_IMPORTED_MODULE_1__["Contact"]();
        }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: 'Error!',
                text: 'Unable to subscribe. Make sure you are connected to the internet',
                type: 'warning',
                confirmButtonText: 'Ok!',
                confirmButtonColor: '#fec931'
            });
        });
    };
    FooterComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pets.service */ "./src/app/services/pets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, productService) {
        this.router = router;
        this.productService = productService;
        this.waste_products = [];
        this.copy_products = [];
        this.type_products = [];
        this.searchString = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.waste_products = this.productService.findByCategory('waste-papers');
        this.copy_products = this.productService.findByCategory('copy-paper');
        this.type_products = this.productService.findByCategory('paper-type');
    };
    HeaderComponent.prototype.search = function () {
        if (this.searchString !== "") {
            this.router.navigate(["search/" + this.searchString.replace(" ", "+")]);
        }
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_2__["PetService"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_2__["PetService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_api_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/api/contact */ "./src/app/models/api/contact.ts");
/* harmony import */ var _models_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/seo */ "./src/app/models/seo.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_pets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pets.service */ "./src/app/services/pets.service.ts");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/seo.service */ "./src/app/services/seo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(productService, apiService, seoService) {
        this.productService = productService;
        this.apiService = apiService;
        this.seoService = seoService;
        this.pets = new Array();
        this.waste_papers = new Array();
        this.paper_types = new Array();
        this.copy_papers = new Array();
        this.contact = new _models_api_contact__WEBPACK_IMPORTED_MODULE_1__["Contact"]();
        this.isLoading = false;
        this.seo = new _models_seo__WEBPACK_IMPORTED_MODULE_2__["Seo"]();
        this.tags = new Array();
        this.properties = new Array();
        this.buttonMsg = "Send Message";
        this.pathToAssets = "../../assets/";
        var now = new Date(), y = now.getFullYear(), m = now.getMonth();
        this.date = new Date(y, m + 1, 0);
        console.log(this.date.toUTCString());
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.pets = this.productService.findRandom(8);
        this.waste_papers = this.productService.findByCategory('waste-papers');
        this.waste_paper_product = this.productService.findRandomFromArray(1, this.waste_papers);
        this.paper_types = this.productService.findByCategory('paper-type');
        this.paper_type_product = this.productService.findRandomFromArray(1, this.paper_types);
        this.copy_papers = this.productService.findByCategory('copy-paper');
        this.copy_paper_product = this.productService.findRandomFromArray(1, this.copy_papers);
        this.color_product = this.productService.find('color-copy-paper');
        this.thermal_product = this.productService.find('double-a-a4');
        this.magazine_product = this.productService.find('magazine-waste-paper');
        this.kraft_product = this.productService.find('kraft-paper');
    };
    HomeComponent.prototype.printPrice = function (price) {
        var price_parts = price.toString().split(".");
        price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return price_parts.join(".");
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_pets_service__WEBPACK_IMPORTED_MODULE_4__["PetService"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SEOService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_pets_service__WEBPACK_IMPORTED_MODULE_4__["PetService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SEOService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/product/product.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/item */ "./src/app/models/item.ts");
/* harmony import */ var src_app_models_pets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/pets */ "./src/app/models/pets.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/pets.service */ "./src/app/services/pets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, router, petService, cartService, titleService) {
        this.route = route;
        this.router = router;
        this.petService = petService;
        this.cartService = cartService;
        this.titleService = titleService;
        this.waste_products = [];
        this.copy_products = [];
        this.type_products = [];
        this.searchString = "";
        this.pet = new src_app_models_pets__WEBPACK_IMPORTED_MODULE_4__["Pet"]();
        this.pets = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params["id"];
            _this.category = params["category"];
            _this.pet = _this.petService.find(id);
            var randomProducts = _this.petService.findRandomByCategory(4, _this.category);
            var products = [];
            randomProducts.forEach(function (p) {
                if (p.id != id) {
                    products.push(p);
                }
            });
            _this.pets = products;
            if (!_this.pet) {
                _this.router.navigate(["/"]);
            }
        });
        this.titleService.setTitle("Buy " + this.pet.name + " online");
        this.waste_products = this.petService.findByCategory('waste-papers');
        this.copy_products = this.petService.findByCategory('copy-paper');
        this.type_products = this.petService.findByCategory('paper-type');
    };
    ProductComponent.prototype.addToCart = function () {
        var item = new src_app_models_item__WEBPACK_IMPORTED_MODULE_3__["Item"]();
        item.pet = this.pet;
        this.cartService.add(item);
        // this.router.navigate(["/checkout"])
    };
    ProductComponent.prototype.printPrice = function (price) {
        var price_parts = price.toString().split(".");
        price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return price_parts.join(".");
    };
    ProductComponent.prototype.search = function () {
        if (this.searchString !== "") {
            this.router.navigate(["search/" + this.searchString.replace(" ", "+")]);
        }
    };
    ProductComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_6__["PetService"] },
        { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }
    ]; };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __importDefault(__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./product.component.scss */ "./src/app/components/product/product.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_6__["PetService"],
            src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pets.service */ "./src/app/services/pets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.waste_products = [];
        this.copy_products = [];
        this.type_products = [];
        this.products = new Array();
        this.tags = new Array();
        this.topProducts = new Array();
        this.currentProducts = new Array();
        this.categories = new Array();
        this.currentCategory = "all";
        this.maxProducts = 9;
        this.numberPages = 1;
        this.currentPage = 1;
        this.searchString = "";
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.currentCategory = params["id"];
        });
        this.setCategory(this.currentCategory);
        // this.currentProducts = this.productService.slice(this.currentProducts, ((this.currentPage - 1) * this.maxProducts), this.currentPage * this.maxProducts)
        this.setCategories();
        this.waste_products = this.productService.findByCategory('waste-papers');
        this.copy_products = this.productService.findByCategory('copy-paper');
        this.type_products = this.productService.findByCategory('paper-type');
    };
    ProductsComponent.prototype.getCategoryCount = function (category) {
        var count = 0;
        if (category === 'all') {
            count = this.productService.findAllCategories().length;
        }
        else {
            this.productService.findByCategory(category).forEach(function (product) {
                if (product.category === category) {
                    count++;
                }
            });
        }
        return count;
    };
    ProductsComponent.prototype.setCategories = function () {
        var _this = this;
        this.productService.findAll().forEach(function (p) {
            if (!_this.categories.includes(p.category) && p.category != '') {
                _this.categories.push(p.category);
            }
        });
    };
    ProductsComponent.prototype.search = function () {
        if (this.searchString !== "") {
            this.router.navigate(["search/" + this.searchString.replace(" ", "+")]);
        }
    };
    ProductsComponent.prototype.getCategory = function (category) {
        return this.currentCategory === category ? true : false;
    };
    ProductsComponent.prototype.setCategory = function (category) {
        if (category === "all") {
            this.currentProducts = this.productService.findAll();
            this.currentProducts.sort(function (a, b) { return a.name.localeCompare(b.name); });
            this.currentCategory = category;
        }
        else {
            this.currentProducts = this.productService.findByCategory(category);
            this.currentProducts.sort(function (a, b) { return a.name.localeCompare(b.name); });
            this.currentCategory = category;
        }
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_2__["PetService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __importDefault(__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./products.component.scss */ "./src/app/components/products/products.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_2__["PetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/reviews/reviews.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/reviews/reviews.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/reviews/reviews.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/reviews/reviews.component.ts ***!
  \*********************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent() {
    }
    ReviewsComponent.prototype.ngOnInit = function () {
    };
    ReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviews',
            template: __importDefault(__webpack_require__(/*! raw-loader!./reviews.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/reviews/reviews.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./reviews.component.scss */ "./src/app/components/reviews/reviews.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pets.service */ "./src/app/services/pets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(productService, route, router) {
        var _this = this;
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.waste_papers = new Array();
        this.paper_types = new Array();
        this.copy_papers = new Array();
        this.searchString = "";
        this.products = new Array();
        this.pathToAssets = "../../assets/";
        this.route.params.subscribe(function (params) {
            _this.id = params["id"];
            _this.products = productService.search(_this.id);
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.waste_papers = this.productService.findByCategory('waste-papers');
        this.waste_paper_product = this.productService.findRandomFromArray(1, this.waste_papers);
        this.paper_types = this.productService.findByCategory('paper-type');
        this.paper_type_product = this.productService.findRandomFromArray(1, this.paper_types);
        this.copy_papers = this.productService.findByCategory('copy-paper');
        this.copy_paper_product = this.productService.findRandomFromArray(1, this.copy_papers);
    };
    SearchComponent.prototype.search = function () {
        if (this.searchString !== "") {
            this.router.navigate(["search/" + this.searchString.replace(" ", "+")]);
        }
    };
    SearchComponent.ctorParameters = function () { return [
        { type: src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_2__["PetService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __importDefault(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_pets_service__WEBPACK_IMPORTED_MODULE_2__["PetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/models/api/cart.ts":
/*!************************************!*\
  !*** ./src/app/models/api/cart.ts ***!
  \************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Cart = /** @class */ (function () {
    function Cart() {
        this.cartItems = new Array();
    }
    return Cart;
}());



/***/ }),

/***/ "./src/app/models/api/cartItem.ts":
/*!****************************************!*\
  !*** ./src/app/models/api/cartItem.ts ***!
  \****************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var CartItem = /** @class */ (function () {
    function CartItem() {
    }
    return CartItem;
}());



/***/ }),

/***/ "./src/app/models/api/checkout.ts":
/*!****************************************!*\
  !*** ./src/app/models/api/checkout.ts ***!
  \****************************************/
/*! exports provided: Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Checkout = /** @class */ (function () {
    function Checkout() {
    }
    return Checkout;
}());



/***/ }),

/***/ "./src/app/models/api/contact.ts":
/*!***************************************!*\
  !*** ./src/app/models/api/contact.ts ***!
  \***************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Contact = /** @class */ (function () {
    function Contact() {
        this.name = "";
        this.phone = "";
        this.subject = "";
        this.Frenchie_of_interest = "No pet selected";
        this.message = "";
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/models/api/shippingDetails.ts":
/*!***********************************************!*\
  !*** ./src/app/models/api/shippingDetails.ts ***!
  \***********************************************/
/*! exports provided: ShippingDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingDetails", function() { return ShippingDetails; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ShippingDetails = /** @class */ (function () {
    function ShippingDetails() {
        this.lastName = "";
        this.contactOption = "Phone";
        this.paymentOption = "No payment method selected";
        this.country = "";
        this.state = "Hidden Field. Details Omitted";
        this.city = "Hidden Field. Details Omitted";
        this.zip = "Hidden Field. Details Omitted";
        this.address1 = "Hidden Field. Details Omitted";
        this.address2 = "";
        this.notes = "";
    }
    return ShippingDetails;
}());



/***/ }),

/***/ "./src/app/models/cart-item.ts":
/*!*************************************!*\
  !*** ./src/app/models/cart-item.ts ***!
  \*************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var CartItem = /** @class */ (function () {
    function CartItem() {
    }
    CartItem.prototype.deserialize = function (input) {
        Object.assign(this, input);
        return this;
    };
    return CartItem;
}());



/***/ }),

/***/ "./src/app/models/item.ts":
/*!********************************!*\
  !*** ./src/app/models/item.ts ***!
  \********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.prototype.deserialize = function (input) {
        Object.assign(this, input);
        return this;
    };
    return Item;
}());



/***/ }),

/***/ "./src/app/models/metaTag.ts":
/*!***********************************!*\
  !*** ./src/app/models/metaTag.ts ***!
  \***********************************/
/*! exports provided: MetaTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaTag", function() { return MetaTag; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var MetaTag = /** @class */ (function () {
    function MetaTag() {
    }
    MetaTag.prototype.deserialize = function (input) {
        Object.assign(this, input);
        return this;
    };
    return MetaTag;
}());



/***/ }),

/***/ "./src/app/models/pets.ts":
/*!********************************!*\
  !*** ./src/app/models/pets.ts ***!
  \********************************/
/*! exports provided: Pet, PETS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pet", function() { return Pet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETS", function() { return PETS; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Pet = /** @class */ (function () {
    function Pet() {
    }
    Pet.prototype.deserialize = function (input) {
        Object.assign(this, input);
        return this;
    };
    return Pet;
}());

var PETS = [
    // {
    //     id: 'adopt', name: 'adopt', image: 'assets/img/adopt.jpg',
    //     category: '', price: 300,
    //     description_1: ``,
    //     description_2: ''
    // } as Pet,
    // {
    //     id: 'directories-waste-paper', name: 'Directories Waste Paper', image: 'assets/images/products/waste-papers/directories.jpeg',
    //     category: 'waste-papers', price: 0,
    //     description_1: `<p>We are exporters of Copy Papers and waste paper and the paper scraps offered by us are completely environment friendly and majorly used in recyclable industries. We supply OCC waste paper, 100% cardboard, in Bales Post-industrial collected from private companies.</p>
    //     <p>Specifications:</p>
    //     <p>Bales &amp; Scrap paper with high quality<br />1. Product Type: Waste Paper<br />2. Type: OCC, ONP, OMG, YELLOW PAGES, A3, A4 WASTE PAPER<br />3. Packing: BALE (1.2-1.4 TONS/ BALE)<br />4. Feature: Mixed &amp; NOT MIXED<br />5. Quantity: 1000 Tons per Month</p>
    //     <p>&nbsp;</p>`,
    //     description_2: ''
    // } as Pet,
    {
        id: 'magazine-waste-paper', name: 'Magazine Waste Paper', image: 'assets/images/products/waste-papers/waste-magazine.jpg',
        category: 'waste-papers', price: 0,
        description_1: "<p>We are exporters of Copy Papers and waste paper and the paper scraps offered by us are completely environment friendly and majorly used in recyclable industries. We supply OCC waste paper, 100% cardboard, in Bales Post-industrial collected from private companies.</p>\n        <p>Specifications:</p>\n        <p>Bales &amp; Scrap paper with high quality<br />1. Product Type: Waste Paper<br />2. Type: OCC, ONP, OMG, YELLOW PAGES, A3, A4 WASTE PAPER<br />3. Packing: BALE (1.2-1.4 TONS/ BALE)<br />4. Feature: Mixed &amp; NOT MIXED<br />5. Quantity: 1000 Tons per Month</p>\n        <p>&nbsp;</p>",
        description_2: ''
    },
    {
        id: 'occ-waste-paper', name: 'OCC Waste Paper', image: 'assets/images/products/waste-papers/occ-waste.jpg',
        category: 'waste-papers', price: 0,
        description_1: "<p>We are exporters of Copy Papers and waste paper and the paper scraps offered by us are completely environment friendly and majorly used in recyclable industries. We supply OCC waste paper, 100% cardboard, in Bales Post-industrial collected from private companies.</p>\n        <p>Specifications:</p>\n        <p>Bales &amp; Scrap paper with high quality<br />1. Product Type: Waste Paper<br />2. Type: OCC, ONP, OMG, YELLOW PAGES, A3, A4 WASTE PAPER<br />3. Packing: BALE (1.2-1.4 TONS/ BALE)<br />4. Feature: Mixed &amp; NOT MIXED<br />5. Quantity: 1000 Tons per Month</p>\n        <p>&nbsp;</p>",
        description_2: ''
    },
    {
        id: 'onp-waste-paper', name: 'ONP Waste Paper', image: 'assets/images/products/waste-papers/onp-waste.jpg',
        category: 'waste-papers', price: 0,
        description_1: "<p>We are exporters of Copy Papers and waste paper and the paper scraps offered by us are completely environment friendly and majorly used in recyclable industries. We supply OCC waste paper, 100% cardboard, in Bales Post-industrial collected from private companies.</p>\n        <p>Specifications:</p>\n        <p>Bales &amp; Scrap paper with high quality<br />1. Product Type: Waste Paper<br />2. Type: OCC, ONP, OMG, YELLOW PAGES, A3, A4 WASTE PAPER<br />3. Packing: BALE (1.2-1.4 TONS/ BALE)<br />4. Feature: Mixed &amp; NOT MIXED<br />5. Quantity: 1000 Tons per Month</p>\n        <p>&nbsp;</p>",
        description_2: ''
    },
    {
        id: 'oinp-waste-paper', name: 'OINP Waste Paper', image: 'assets/images/products/waste-papers/oinp-waste.jpg',
        category: 'waste-papers', price: 0,
        description_1: "<p>We are exporters of Copy Papers and waste paper and the paper scraps offered by us are completely environment friendly and majorly used in recyclable industries. We supply OCC waste paper, 100% cardboard, in Bales Post-industrial collected from private companies.</p>\n        <p>Specifications:</p>\n        <p>Bales &amp; Scrap paper with high quality<br />1. Product Type: Waste Paper<br />2. Type: OCC, ONP, OMG, YELLOW PAGES, A3, A4 WASTE PAPER<br />3. Packing: BALE (1.2-1.4 TONS/ BALE)<br />4. Feature: Mixed &amp; NOT MIXED<br />5. Quantity: 1000 Tons per Month</p>\n        <p>&nbsp;</p>",
        description_2: ''
    },
    {
        id: 'tissue-paper', name: 'Tissue Paper', image: 'assets/images/products/tissue-papers/tissue.jpeg',
        category: 'paper-type', price: 300,
        description_1: "<p>Our Tissue Paper is a very specialized product manufactured from 100% recycled waste paper. The standard brightness of our Recycled Tissue Paper is maintained at 80% ISO. It is mainly used for Napkin, Fancy wrapping &amp; packing, and Deep Coloring for Decorative papers. We stand in the midst of distinguished tissue paper manufacturers and suppliers based in the Netherlands.</p>",
        description_2: ''
    },
    {
        id: 'board-colored-paper', name: 'Board Colored Paper', image: 'assets/images/products/board-papers/board-1.jpg',
        category: 'paper-type', price: 300,
        description_1: "<p>Dmv Export Sales offers art paper, art cards, and artboard from the best mills in Thailand. DG Wholesale Paperline rapidly becoming a major exporter of art paper grades. The quality is widely accepted worldwide, and PMDS art paper and board grades are beginning to be exported in large quantities to markets such as the USA and Europe. PMDS only makes good quality art paper above 80GSM. Very good quality starts above 100GSM and goes up to about 300GSM. Pattaya offers a matte and gloss finish and does not offer silk. This paper is typically exported in sheets.</p>",
        description_2: ''
    },
    {
        id: 'duplex-board-paper', name: 'Duplex Board Paper', image: 'assets/images/products/board-papers/dumplex-board.jpg',
        category: 'paper-type', price: 300,
        description_1: "<p>ABOUT OUR DUPLEX BOARDS<br />Dmv Export Sales presents a wide range of boards to the packaging industry viz; single and double coated Boards with Grey-Back, white-Back and kraft-Back options, offered in 230 to 600 GSM. The WCPM product range also includes value-added products like Cup Stock Board for paper cups and Folding Box boards for the high-end packaging segment.<br />Among the uncoated range, we offer Grey-Back and kraft-Back boards to the Garment and Footwear industry.</p>\n        <p>The feature-packed multi-layer boards are made of state of Art technology using virgin fibers in top layers and recycled fibers in the middle that ensure good bulk, extra strength, and stiffness to the boards to suit the needs of the packaging industry. The Duplex range possesses excellent box-making properties.</p>\n        <p>The products are used in a wide range of application segments viz; Pharmaceutical, Apparel, Match Box, Cigarette, Liquid Packaging, Food Packaging, and various other packaging applications.</p>\n        <p>SPECIFICATION<br />&ndash; A grade Quality, 200GSM-500GSM<br />&ndash; Packing: 100sheets wrapped with strong PE coated kraft paper, film wrapped, packed on wooden Pallets. (with angle protector)<br />&ndash; Month capacity: 50,000tons<br />&ndash; Delivery time: within 10 days after getting down payment</p>",
        description_2: ''
    },
    {
        id: 'thermal-paper-rolls', name: 'Thermal Paper', image: 'assets/images/products/Thermal-Paper-Rolls.jpg',
        category: 'paper-type', price: 300,
        description_1: "<p>We provide an ample range of Thermal Printer Paper for Fax Roll, Food Labels, Airline Tickets, Tags, Dispatch Labels, Bar code labels, and many other carbonless applications. We have carved a niche as the most preeminent Thermal Paper Rolls Manufacturer and Thermal Paper Supplier in the Netherlands. Our Thermal Printer Paper exhibits countless features and has a number of commercial uses. Manufactured from premium quality base materials, our Thermal Printer Paper is the perfect blend of efficiency and performance.</p>\n        <p>APPLICATION AREAS<br />&ndash; Eye testing<br />&ndash; ATM machines<br />&ndash; Count testing machines<br />&ndash; Blood testing</p>",
        description_2: ''
    },
    {
        id: 'kraft-paper', name: 'Kraft Paper', image: 'assets/images/products/kraft-paper.jpg',
        category: 'paper-type', price: 300,
        description_1: "<p>We are involved in providing an extensive range of packaging products like Kraft Papers. These papers are produced from wood pulp using a kraft pulping process that converts wood into wood pulp comprising of thick cellulose fibers. The paper made through the kraft technique is available in both sheets and roll forms. The main application of the Kraft Papers is in industrial packaging. The kraft paper bags, boxes, and wrappers are widely used for packaging light to medium-duty products. The kraft paper bags are offered in different sizes and dimensions as per the specific needs of the packaging industry. Many kraft paper bags and covers contain attractive printed designs, which fulfill the need of various sectors like interior decoration, gift, event promotion, textiles companies, and many more. Hotels and restaurant owners supply certain food products in Kraft Paper packaging materials. Besides its use in the packaging industry, Kraft Papers are also used in designing pamphlets, banners, and posters for specific brand promotions.</p>\n        <p>In this fiercely competitive market, business organizations use different advertising techniques for the promotion of their products and services. Banners and logos creation is one of the popular advertising techniques. Kraft Papers are highly resistant to dust particles and are known for their high load-carrying strength. Therefore, these papers are preferred by the advertising companies for making attractive banners and printed logos.</p>",
        description_2: ''
    },
    {
        id: 'color-copy-paper', name: 'Color Copy Paper', image: 'assets/images/products/color-paper.webp',
        category: 'copy-paper', price: 300,
        description_1: "<p>Copy paper or Color copy paper is available in rolls or sheets and a wide range of basic sizes and weights, giving you the flexibility you need for any application.</p>\n        <p>Specification<br />Main colors: Light milk white<br />Stock Size: A2, A3, A4, A5 Or according to your requirement<br />Weight : 70g, 80g, 120g, 160g<br />Surface: Smooth<br />Packaging: In sheets or in rolls<br />Machine deckle : 1200mm, 1575mm, 1760mm, 1880mm, 2400mm<br />Popular Use: Stationery, Copy paper, printing paper, notebook, diary, presentation folder, invitations, etc.</p>",
        description_2: ''
    },
    {
        id: 'copy-laser-paper', name: 'Copy Laser Paper', image: 'assets/images/products/laser-paper.jpg',
        category: 'copy-paper', price: 300,
        description_1: "<p>Detail of COPY LASER PAPER A4 80GSM / 75GSM / 70GSM<br />&ndash; Sheet Size:210mm x 297mm/297mm x 420mm International Paper Standards Size(ISO) A4/A3<br />&ndash; Quality: Imported 100% Virgin Wood Pulp<br />&ndash; Whiteness: 102-104%, Natural White<br />&ndash; Grading: A<br />&ndash; Thickness: 106cm<br />&ndash; Capability: High-Speed Copying 100ppm, Laser Capable, Inkjet Capable, Fax Capable.<br />EXCELLENT PERFORMANCE DUE TO THE FOLLOWING CHARACTERISTICS<br />&ndash; Moisture Control &ndash; Makes the sheets stay flat in the copier and enhances tunability.<br />&ndash; Low Dust Content &ndash; Minimizing Your copier running cost.<br />&ndash; Good Opacity &ndash; Double-sided copying of the best quality<br />&ndash; Smoothness &ndash; Improving Printing Quality.<br />&ndash; Bulky Sheet &ndash; Enhancing the smooth run ability<br />BEST FOR USE WITH YOUR<br />&ndash; Photocopier<br />&ndash; Laser Printer<br />&ndash; Fax Machine<br />&ndash; Ink-jet<br />&ndash; Copier<br />&ndash; 2 side copying</p>",
        description_2: ''
    },
    {
        id: 'double-a-a4', name: 'Double A A4 Paper', image: 'assets/images/products/double-a.jpg',
        category: 'copy-paper', price: 300,
        description_1: "<p>Detail of DOUBLE A COPY PAPER 80GSM / 75GSM / 70GSM<br />&ndash; Sheet Size:210mm x 297mm/297mm x 420mm International Paper Standards Size(ISO) A4/A3<br />&ndash; Quality: Imported 100% Virgin Wood Pulp<br />&ndash; Whiteness: 102-104%, Natural White<br />&ndash; Grading: A<br />&ndash; Thickness: 106cm<br />&ndash; Capability: High-Speed Copying 100ppm, Laser Capable, Inkjet Capable, Fax Capable.<br />EXCELLENT PERFORMANCE DUE TO THE FOLLOWING CHARACTERISTICS<br />&ndash; Moisture Control &ndash; Makes the sheets stay flat in the copier and enhances run ability.<br />&ndash; Low Dust Content &ndash; Minimizing Your copier running cost.<br />&ndash; Good Opacity &ndash; Double-sided copying of the best quality<br />&ndash; Smoothness &ndash; Improving Printing Quality.<br />&ndash; Bulky Sheet &ndash; Enhancing the smooth run ability<br />BEST FOR USE WITH YOUR<br />&ndash; Photocopier<br />&ndash; Laser Printer<br />&ndash; Fax Machine<br />&ndash; Ink-jet<br />&ndash; Copier<br />&ndash; 2 side copying</p>",
        description_2: ''
    },
];


/***/ }),

/***/ "./src/app/models/script.store.ts":
/*!****************************************!*\
  !*** ./src/app/models/script.store.ts ***!
  \****************************************/
/*! exports provided: ScriptStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ScriptStore = [
    { name: 'owl-carousel', src: '../../../assets/js/custom.js' },
];


/***/ }),

/***/ "./src/app/models/seo.ts":
/*!*******************************!*\
  !*** ./src/app/models/seo.ts ***!
  \*******************************/
/*! exports provided: Seo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seo", function() { return Seo; });
/* harmony import */ var _metaTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metaTag */ "./src/app/models/metaTag.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var Seo = /** @class */ (function () {
    function Seo() {
        this.tags = new Array();
        this.properties = new Array();
    }
    Seo.prototype.deserialize = function (input) {
        Object.assign(this, input);
        this.tags = input.tags.map(function (meta) { return new _metaTag__WEBPACK_IMPORTED_MODULE_0__["MetaTag"]().deserialize(meta); });
        return this;
    };
    return Seo;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        console.log('logged called');
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __importDefault(__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.rootUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL;
    }
    ApiService.prototype.getheadersNoAuth = function () {
        var headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Token': '',
            'No-Auth': 'True'
        };
        return headerDict;
    };
    ApiService.prototype.getheadersWithAuth = function () {
        var headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        };
        return headerDict;
    };
    ApiService.prototype.checkout = function (checkout) {
        var reqHeaders = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](this.getheadersNoAuth()) };
        var body = JSON.stringify(checkout);
        return this.http.post(this.rootUrl + '/checkout', body, reqHeaders);
    };
    ApiService.prototype.contact = function (contact) {
        var reqHeaders = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](this.getheadersNoAuth()) };
        var body = JSON.stringify(contact);
        return this.http.post(this.rootUrl + '/contact', body, reqHeaders);
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/cart-item */ "./src/app/models/cart-item.ts");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var CartService = /** @class */ (function () {
    function CartService(router) {
        this.router = router;
        this.cartTotalSubject = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.cartItemsSubject = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.loadCart();
    }
    CartService.prototype.saveCart = function (items) {
        localStorage.setItem('cart', JSON.stringify(items));
        this.cartItemsSubject.next(this.getCart());
    };
    CartService.prototype.getCart = function () {
        var rawCart = JSON.parse(localStorage.getItem('cart'));
        if (!rawCart)
            return null;
        else
            return rawCart.map(function (item) { return new _models_cart_item__WEBPACK_IMPORTED_MODULE_1__["CartItem"]().deserialize(item); });
    };
    CartService.prototype.getItems = function () {
        return this.cartItemsSubject;
    };
    CartService.prototype.add = function (newItem) {
        var cart = [];
        var cartItem = new _models_cart_item__WEBPACK_IMPORTED_MODULE_1__["CartItem"]();
        cartItem.pet = newItem.pet;
        cart.push(cartItem);
        this.saveCart(cart);
        // else {
        //   let cart: CartItem[] = this.getCart();
        //   let index: number = -1;
        //   for (var i = 0; i < cart.length; i++) {
        //     let item: CartItem = cart[i];
        //     if (item.pet.id == newItem.pet.id) {
        //       index = i;
        //       break;
        //     }
        //   }
        //   if (index == -1) {
        //     let cartItem: CartItem = new CartItem();
        //     cartItem.pet = newItem.pet;
        //     cart.push(cartItem);
        //     this.saveCart(cart)
        //   } 
        //   if(index != -1) {
        //     Swal({
        //         title: 'Cart Warning',
        //         text: newItem.pet.name + ' exist already in your cart.' + ' Go to Cart?',
        //         animation: false,
        //         confirmButtonColor: '#7971ea',
        //         showCancelButton: true,
        //         confirmButtonText: 'Go to cart',
        //         cancelButtonText: 'No thanks',
        //         imageWidth: 250,
        //         imageHeight: 300,
        //         imageUrl: newItem.pet.image,
        //       }).then((result) => {
        //         if (result.value) {
        //           this.router.navigate(["../../cart"])
        //         } else if (result.dismiss === Swal.DismissReason.cancel) { }
        //       })
        //       this.cartTotalSubject.next(this.getCart().length);
        //   }
        // }
        // Swal({
        //   title: 'Cart Updated',
        //   text: newItem.pet.name + ' has been added to your cart.' + ' Go to Cart?',
        //   animation: false,
        //   confirmButtonColor: '#7971ea',
        //   showCancelButton: true,
        //   confirmButtonText: 'Go to cart',
        //   cancelButtonText: 'No thanks',
        //   imageWidth: 250,
        //   imageHeight: 300,
        //   imageUrl: newItem.pet.image,
        // }).then((result) => {
        //   if (result.value) {
        //     this.router.navigate(["../../cart"])
        //   } else if (result.dismiss === Swal.DismissReason.cancel) { }
        // })
        this.cartTotalSubject.next(this.getCart().length);
    };
    CartService.prototype.remove = function (item) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Delete?',
            text: 'Are you sure you want to remove ' + item.pet.name + ' from your cart?',
            animation: false,
            confirmButtonColor: '#018AE0',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            imageWidth: 250,
            imageHeight: 300,
            imageUrl: item.pet.image,
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                var cart = _this.getCart();
                for (var i = 0; i < cart.length; i++) {
                    if (item.pet.id == cart[i].pet.id) {
                        cart.splice(i, 1);
                        break;
                    }
                }
                _this.saveCart(cart);
                _this.cartTotalSubject.next(_this.cartTotalSubject.value - 1);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Deleted!', item.pet.name + ' has been removed from your cart', 'success');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) { }
        });
        return this.getCart();
        //this.loadCart();
    };
    CartService.prototype.total = function () {
        var total = 0;
        if (this.getCart() != null) {
            var cart = this.getCart();
            for (var i = 0; i < cart.length; i++) {
                total += this.getPrice(cart[i].pet);
            }
        }
        return total;
    };
    //return the total number of items present in the cart
    CartService.prototype.totalItems = function () {
        var total = 0;
        if (this.getCart() != null) {
            var cart = this.getCart();
            for (var i = 0; i < cart.length; i++) {
                total += 1;
            }
        }
        return total;
    };
    //return a discount on the total amount of items given a discount rate
    CartService.prototype.discount = function () {
        var discount = 0;
        if (this.getCart() != null) {
            if (this.totalItems() > 0) {
                discount = (10 / 100) * this.total();
                return discount;
            }
            // if(this.totalItems() >= 5) {
            //   discount = (20 / 100) * this.total();
            //   return discount;
            // } 
        }
        return discount;
    };
    //return the shipping cost base on the total number of items present in the cart
    CartService.prototype.shipping = function () {
        var shipping = 0;
        if (this.getCart() != null) {
            if (this.totalItems() <= 0) {
                shipping = 0;
                return shipping;
            }
            if (this.totalItems() <= 2) {
                shipping = 50;
                return shipping;
            }
            if (this.totalItems() <= 5) {
                shipping = 100;
                return shipping;
            }
            if (this.totalItems() <= 10) {
                shipping = 150;
                return shipping;
            }
            else {
                shipping = 200;
            }
        }
        return shipping;
    };
    CartService.prototype.grandTotal = function () {
        var total = 0;
        if (this.getCart() != null) {
            total = this.total() - this.discount();
        }
        return total;
    };
    CartService.prototype.update = function (cartItems) {
        this.saveCart(cartItems);
        this.cartTotalSubject.next(cartItems.length);
    };
    CartService.prototype.getCartNumber = function () {
        return this.cartTotalSubject;
    };
    CartService.prototype.loadCart = function () {
        var cartItems = this.getCart();
        if (cartItems != null && cartItems.length > 0) {
            this.cartTotalSubject.next(cartItems.length);
            this.cartItemsSubject.next(this.getCart());
        }
        else {
            this.cartItemsSubject.next([]);
            this.cartTotalSubject.next(0);
        }
    };
    CartService.prototype.getPrice = function (pet) {
        var price = 0;
        price = pet.price;
        return price;
    };
    CartService.prototype.purge = function () {
        localStorage.removeItem('cart');
        this.cartItemsSubject.next([]);
        this.cartTotalSubject.next(0);
    };
    CartService.ctorParameters = function () { return [
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/pets.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/pets.service.ts ***!
  \******************************************/
/*! exports provided: PetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetService", function() { return PetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_pets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/pets */ "./src/app/models/pets.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var PetService = /** @class */ (function () {
    function PetService() {
        var _this = this;
        this.pets = new Array();
        //Very important initialization since PETS is an array of objects that have been cast to type pet
        //Relying on this may cause runtime problems
        _models_pets__WEBPACK_IMPORTED_MODULE_1__["PETS"].forEach(function (element) {
            var pet = new _models_pets__WEBPACK_IMPORTED_MODULE_1__["Pet"]();
            pet.id = element.id;
            pet.name = element.name;
            pet.category = element.category;
            pet.image = element.image;
            pet.price = element.price;
            pet.description_1 = element.description_1;
            pet.description_2 = element.description_2;
            _this.pets.push(pet);
        });
        this.pets.sort(function (a, b) { return a.name.localeCompare(b.name); });
    }
    PetService.prototype.findAll = function () {
        return this.pets;
    };
    PetService.prototype.slice = function (array, start, end) {
        var result = new Array();
        array.slice(start, end).forEach(function (value) { return result.push(value); });
        return result;
    };
    PetService.prototype.findByCategory = function (cat) {
        var products = [];
        this.pets.forEach(function (pet) {
            if (pet.category == cat) {
                products.push(pet);
            }
        });
        return products;
    };
    PetService.prototype.find = function (id) {
        var i = this.getSelectedIndex(id);
        return i < 0 ? null : this.pets[i];
    };
    PetService.prototype.findRandomAndExclude = function (maxNo, excludedId) {
        var total;
        var copied = new Map();
        var somePets = [];
        this.pets.forEach(function (p) {
            somePets.push(p);
        });
        //Remove product with provided id from products
        for (var j = 0; j < somePets.length; j++) {
            if (excludedId === somePets[j].id) {
                somePets.splice(j, 1);
                break;
            }
        }
        total = somePets.length;
        var randomPets = [];
        total = maxNo > total ? total : maxNo;
        var i = 0;
        while (i < total) {
            var index = Math.floor((Math.random() * somePets.length));
            if (!copied.has(index)) {
                randomPets.push(somePets[index]);
                copied.set(index, index);
                i++;
            }
            else {
                //Just for documentation sake not really needed
                continue;
            }
        }
        return randomPets;
    };
    PetService.prototype.findRandom = function (maxNo) {
        var copied = new Map();
        var total = this.pets.length;
        var randomProducts = [];
        total = maxNo > total ? total : maxNo;
        var i = 0;
        while (i < total) {
            var index = Math.floor((Math.random() * this.pets.length));
            if (!copied.has(index)) {
                randomProducts.push(this.pets[index]);
                copied.set(index, index);
                i++;
            }
            else {
                //Just for documentation sake not really needed
                continue;
            }
        }
        return randomProducts;
    };
    PetService.prototype.findRandomFromArray = function (maxNo, array) {
        var copied = new Map();
        var total = array.length;
        var randomProduct;
        total = maxNo > total ? total : maxNo;
        var i = 0;
        while (i < total) {
            var index = Math.floor((Math.random() * array.length));
            if (!copied.has(index)) {
                randomProduct = array[index];
                copied.set(index, index);
                i++;
            }
            else {
                //Just for documentation sake not really needed
                continue;
            }
        }
        return randomProduct;
    };
    PetService.prototype.search = function (id) {
        var found = [];
        //Assuming all spaces are replaced by +
        var splits = id.split("+");
        for (var i = 0; i < this.pets.length; i++) {
            for (var j = 0; j < splits.length; j++) {
                if (this.pets[i].name.toLowerCase().includes(splits[j].toLowerCase()) || this.pets[i].id.toLowerCase().includes(splits[j].toLowerCase())) {
                    found.push(this.pets[i]);
                    // break out of loop as soon as we get the first match
                    break;
                }
            }
        }
        return found;
    };
    PetService.prototype.getSelectedIndex = function (id) {
        for (var i = 0; i < this.pets.length; i++) {
            if (this.pets[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    PetService.prototype.findRandomByCategory = function (maxNo, category) {
        var copied = new Map();
        var products = this.findByCategory(category);
        var total = products.length;
        var randomProducts = [];
        total = maxNo > total ? total : maxNo;
        var i = 0;
        while (i < total) {
            var index = Math.floor((Math.random() * products.length));
            if (!copied.has(index)) {
                randomProducts.push(products[index]);
                copied.set(index, index);
                i++;
            }
            else {
                //Just for documentation sake not really needed
                continue;
            }
        }
        return randomProducts;
    };
    PetService.prototype.findAllCategories = function () {
        var products = [];
        this.pets.forEach(function (p) {
            if (p.category.toLowerCase() != '') {
                products.push(p);
            }
        });
        return products;
    };
    PetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PetService);
    return PetService;
}());



/***/ }),

/***/ "./src/app/services/script.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/script.service.ts ***!
  \********************************************/
/*! exports provided: ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_script_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/script.store */ "./src/app/models/script.store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ScriptService = /** @class */ (function () {
    function ScriptService() {
        var _this = this;
        this.scripts = {};
        _models_script_store__WEBPACK_IMPORTED_MODULE_1__["ScriptStore"].forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    ScriptService.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptService.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.scripts[name].loaded) {
                //load script
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) { //IE
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === "loaded" || script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else { //Others
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script_1.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                document.getElementsByTagName('head')[0].appendChild(script_1);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        });
    };
    ScriptService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ScriptService);
    return ScriptService;
}());



/***/ }),

/***/ "./src/app/services/seo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/seo.service.ts ***!
  \*****************************************/
/*! exports provided: SEOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEOService", function() { return SEOService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SEOService = /** @class */ (function () {
    function SEOService(meta, title) {
        this.meta = meta;
        this.title = title;
    }
    SEOService.prototype.addTags = function (seo) {
        var _this = this;
        this.title.setTitle(seo.title);
        this.meta.updateTag({ name: 'description', content: seo.description });
        //update all metaTags
        seo.metaTags.forEach(function (value) { return _this.meta.addTag({ name: value.name, content: value.content }); });
        //update all Open graph prperties
        seo.propertyTags.forEach(function (value) { return _this.meta.addTag({ property: value.property, content: value.content }); });
    };
    SEOService.prototype.updateTags = function (seo) {
        var _this = this;
        this.title.setTitle(seo.title);
        this.meta.updateTag({ name: 'description', content: seo.description });
        //update all metaTags
        seo.metaTags.forEach(function (value) { return _this.meta.updateTag({ name: value.name, content: value.content }); });
        //update all Open graph prperties
        seo.propertyTags.forEach(function (value) { return _this.meta.updateTag({ property: value.property, content: value.content }); });
    };
    SEOService.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }
    ]; };
    SEOService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], SEOService);
    return SEOService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    API_URL: 'https://rescued-back-end.herokuapp.com/api/v1'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././src/app/app.browser.module */ "./src/app/app.browser.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_src_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__["AppBrowserModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ponsipi-backup\githup-pages\golden-global\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar/navbar";
import Helmet from "react-helmet";
import { useQueryParam, NumberParam, StringParam } from "use-query-params";
import Footer from "../components/footer";

export default function About(props) {
  return (
    <Layout>
      <Helmet>
        <title>About - The Intersectional Feminist</title>
        <meta name="description" content={"About us page of Myblog"} />
      </Helmet>
      <Navbar />
      <div>
        <div
          className="ck_about_main_wrapper float_left"
          style={{
            marginBottom: "10vh"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="ck_about_img_wrapper float_left">
                  <img
                    src={require("../images/about2.jpeg")}
                    alt="img"
                    style={{
                      maxWidth: "500px"
                    }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 align-self-center">
                <div className="ck_about_img_cont_wrapper float_left">
                  <div className="ck_heading_wrapper ck_heading_wrapper2">
                    {/* <h4>what we offer</h4> */}
                    <h3>About Us</h3>
                  </div>
                  <p>
                    <i> IF</i> is a pioneer online magazine dedicated
                    exclusively to content relating to intersectional feminism.
                    We are a group of young editors, writers, and illustrators
                    from varied regional, cultural, and educational backgrounds.
                    <br />
                    <br />
                    In our shared vision of an equal and equitable society, we
                    aim to vocalise the role of discrimination on the basis of
                    social constructs such as caste, class, gender, race, and
                    religion. We are determined to represent varied
                    geopolitical, ideological, and linguistic identities in the
                    fight against patriarchal structures.
                  </p>
                  <br />
                  <div id="demo99" class="collapse">
                    We are strong believers in freedom of expression and in
                    pursuance of our beliefs, we will share content under a
                    spectrum of areas. From current affairs to history, and
                    including our areas of expertise in environmentalism,
                    justice, laws and policies, multimedia, and STEM among other
                    subjects, we're going to have something for everyone!
                    <br />
                    <br />
                    <i> IF</i> is ambitious and hopes to be a significant entity
                    in promoting a better future through inclusivity and
                    feminism for everyone, regardless of their identities.
                    <br />
                    <i> Because IF not now, then when? </i>
                    <br />
                    <br />
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="collapse"
                    data-target="#demo99"
                    id="about-button"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3
          style={{
            color: "#953f73",
            textAlign: "center",
            marginTop: "10vh",
            marginBottom: "10vh",
            fontSize: "38px",
            fontWeight: "500"
          }}
        >
          Meet the team
        </h3>

        <div
          className="container"
          style={{
            color: "#953f73",

            marginTop: "2vh",
            marginBottom: "10vh"
          }}
        >
          <div className="row">
            <div
              className="col-md-6 col-lg-4 col-sm-12 card-margin"
              style={{
                marginTop: "5vh"
              }}
            >
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/120143813_948523555633925_8694760341678123344_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=E1I3jbVkZdEAX-_ks24&oh=80cac6fcb0065a0d587fb8055425a2e2&oe=5FA35119"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Amrita S. Nair</h5>
                  <p class="card-text">
                    Amrita S. Nair is the founder of The Intersectional Feminist
                    and The Silent Sexism Project. She is a final year Law
                    student with a keen interest in Human Rights Law,
                    Constitutional Law, and Gender Studies.
                  </p>

                  <div id="demo" class="collapse">
                    <br />
                    As the founder of the Silent Sexism Project, Amrita believes
                    that sexism is deeply entrenched in our society and
                    manifests itself in a myriad of ways, which must be
                    challenged. As a Fauji child, Amrita has lived across the
                    country, reveling in the glorious variety of Indian music,
                    dance, and cuisine. When not championing the mentioned
                    causes or honing the plethora of talents she has, she's
                    usually found curled up with a book and some hot chocolate
                    in a cozy nook.
                  </div>
                  <br />
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="collapse"
                    data-target="#demo"
                    id="about-button"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 col-sm-12 card-margin"
              style={{
                marginTop: "5vh"
              }}
            >
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/120038730_2733044120298616_4326082582613596081_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=O8hi5UEfpAYAX-S3Fqr&oh=705152820166a821f17d446dca482225&oe=5FA52083"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Astha Chhabra</h5>
                  <p class="card-text">
                    Astha is a budding engineer by profession who has always
                    found herself inclined towards writing. A keen interest to
                    speak up in support of feminism prompted her to create a
                    platform to share her thoughts.
                  </p>

                  <div id="demo2" class="collapse">
                    <br />
                    As a strong advocate of equality, Astha hopes to reach out
                    to her readers and help them connect with her writing. As a
                    pet parent, Astha also stands up for animal rights and
                    encourages others to do so too. She's also equipped with
                    graphic design skills and will be on IF magazine's design
                    team.
                    <br />
                  </div>
                  <br />
                  <br />
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="collapse"
                    data-target="#demo2"
                    id="about-button"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 col-sm-12 card-margin"
              style={{
                marginTop: "5vh"
              }}
            >
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/120194758_325126518746019_7741893602258201971_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=3p3FK2UxsCIAX_HEgMZ&oh=2f3b9fbf83122f00dce7b84dc3938a85&oe=5FA3596D"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Gowri R.</h5>
                  <p class="card-text">
                    Currently in her fourth year of law school, Gowri is deeply
                    interested in the overlapping of gender and law. She has
                    also closely worked with the Gender Studies Committee at her
                    college for three years now.
                  </p>

                  <div id="demo3" class="collapse">
                    <br />
                    She currently heads as convenor of the committee for this
                    academic year. In her remaining time, she's been actively
                    pursuing art professionally with a particular interest in
                    feminist art and will be a part of IF magazine's design
                    team.
                  </div>
                  <br />

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="collapse"
                    data-target="#demo3"
                    id="about-button"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 col-sm-12 card-margin"
              style={{
                marginTop: "5vh"
              }}
            >
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/e35/120101474_176639647292478_1067453509166902677_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=NjmfppYrSsYAX8RO3Xc&_nc_tp=18&oh=f7f89919c067dbae124909e2fc7ee765&oe=5FA5DB56"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Mahima Meenaxi</h5>
                  <p class="card-text">
                    Mahima Meenaxi is a 22-year-old, hailing from Bengaluru and
                    is currently pursuing her fifth year of a BA LLB course. As
                    a feminist and an advocate of labour rights, she believes
                    that gender discrimination is a result of deep-rooted class
                    discrimination.
                  </p>

                  <br />
                  <div id="demo4" class="collapse">
                    She also believes that gender justice is impossible to
                    achieve without the ideological spread of intersectional
                    feminism. She is an aspiring litigant with experience of
                    practice in labour courts and tribunals. Her areas of
                    research specialisation include Constitutional Law,
                    Philosophy, Feminist Jurisprudence, and Competition Law
                    amongst others. She is an avid reader, takes pleasure in
                    writing opinion pieces, and analysing laws and policies. Her
                    interests are varied, ranging from Carnatic music to
                    painting. She is also a multi-linguistic poetess.
                  </div>
                  <br />

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="collapse"
                    data-target="#demo4"
                    id="about-button"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 col-sm-12 card-margin"
              style={{
                marginTop: "5vh"
              }}
            >
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/120216512_324914142099920_8607949806899513684_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=3f1Kdd6nVrAAX9Eu60T&oh=ef959257405776adb46af0a4f5016b3e&oe=5FA30F51"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Manasa M Poovayil</h5>
                  <p class="card-text">
                    Manasa M Poovayil is a 26-year-old, thoroughbred
                    Bengalurean. A graduate of Electronics and Communication
                    Engineering, she is currently working as a technology
                    consultant at Accenture.
                  </p>

                  <br />
                  <div id="demo5" class="collapse">
                    She is a feminist who believes that feminism does not belong
                    to just one gender. Her idea of feminism transcends labels
                    of causes pertaining to any single sphere of the society and
                    believes that feminism stands for all those who have
                    experienced any kind of inequality, and more often than not,
                    compounding effects of inequality due to different facets of
                    their identity. A staunch advocate for inclusion and
                    diversity, she believes that true liberation will come about
                    when every human recognizes and accepts that differences are
                    beautiful. Though hailing from the STEM community, Manasa
                    has immense love for fine arts. She is a trained singer and
                    dancer. She is a voracious reader and loves writing. She is
                    a tree-hugger and a believer of minimalism.
                  </div>
                  <br />

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="collapse"
                    data-target="#demo5"
                    id="about-button"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 col-sm-12 card-margin"
              style={{
                marginTop: "5vh"
              }}
            >
              <div class="card">
                <img
                  class="card-img-top"
                  src={require("../images/pari.jpg")}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title"> Parinishta T.</h5>
                  <p class="card-text">
                    Parinishta T. is a Communication and Media Studies graduate
                    and currently works as an Online Media Executive. She
                    believes in both creating and consuming media responsibly,
                    having observed the kind of impact it has on people's
                    psyches.
                  </p>
                  <br />

                  <div id="demo6" class="collapse">
                    She likes analysing pop culture: movies, songs, literature,
                    and other kinds of media in her spare time. She also loves
                    basketball, sketching, and is an aspiring designer.
                  </div>
                  <br />

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="collapse"
                    data-target="#demo6"
                    id="about-button"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 col-sm-12 card-margin"
              style={{
                marginTop: "5vh"
              }}
            >
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/120202654_177166273916811_3471019468448221314_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=TXeqkLdkoVAAX_8ZC6K&oh=2e1dfbb49d7c252cab92d1898a2c329f&oe=5FA4C378"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title"> Raagni Malhotra</h5>
                  <p class="card-text">
                    Raagni is currently in her final year of an undergraduate
                    program in International Criminal Justice at the City
                    University of New York.{" "}
                  </p>

                  <br />
                  <div id="demo8" class="collapse">
                    She also holds an Associate’s degree in Criminal Justice.
                    Born a New Yorker, but raised between the U.S. and India,
                    she brings a multicultural perspective on feminist issues to
                    the table. She is especially passionate about studying
                    gender-based violence and transnational crimes and hopes to
                    conduct productive research about these issues as a scholar.
                    In her little spare time, she can be found reading,
                    attempting to learn another language, or fostering awareness
                    about social issues in her community.
                  </div>
                  <br />

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="collapse"
                    data-target="#demo8"
                    id="about-button"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 col-sm-12 card-margin"
              style={{
                marginTop: "5vh"
              }}
            >
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/120912691_411026743217813_61978370642169605_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=9WyP62Gc99cAX_mLISN&oh=f87c4c0d3b1acef283e3e549dcec775f&oe=5FA8EF99"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title"> Sarah Jacob</h5>
                  <p class="card-text">
                    Sarah is a third-year design student at Srishti Bangalore.
                    She loves to create and believes in the impact art and
                    design can have on society.
                  </p>

                  <br />
                  <div id="demo9" class="collapse">
                    When she isn't busy starting perpetual work in progress
                    projects, she can be found daydreaming about her next bowl
                    of ramen. Feminism to her is about inclusivity and passing
                    the mic. She hopes to listen, observe, acknowledge her
                    privilege when due, and initiate dialogue through her work.
                    She thinks the world is a little bit messy like her and
                    wonders if it could also use a few screaming mothers to
                    clean it up.
                  </div>
                  <br />

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="collapse"
                    data-target="#demo9"
                    id="about-button"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 col-sm-12 card-margin"
              style={{
                marginTop: "5vh"
              }}
            >
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/120284639_1763355180485045_8987198536097119543_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=iOE2Tw286n8AX-B5c55&oh=0101f426423f02db3055812afdb7032d&oe=5FA32620"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title"> Tanisha Sudarshan</h5>
                  <p class="card-text">
                    Tanisha Sudarshan is an aspiring lawyer with a keen interest
                    in human rights, sustainable development, and policy.
                  </p>

                  <br />
                  <div id="demo7" class="collapse">
                    An avid reader, she also pens academic articles and poetry
                    with the same ease. Tanisha is a firm believer in
                    intersectionality and balance and hopes to contribute to the
                    field through her work for the IF Magazine.
                  </div>
                  <br />

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="collapse"
                    data-target="#demo7"
                    id="about-button"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
}

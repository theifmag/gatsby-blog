import React from 'react'
import Layout from "../components/layout"
import Navbar from '../components/navbar/Navbar'
import Helmet from 'react-helmet'

export default function about() {
    return (
        <Layout>
            <Helmet>
        <title>MyBlog || About Us</title>
        <meta name="description" content={"About us page of Myblog"} />
      </Helmet>
            <Navbar />
            <div  >
          

            <div className="ck_about_main_wrapper float_left" style={{
                marginBottom : '10vh'
            }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="ck_about_img_wrapper float_left">
                  <img src="images/ice8.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 align-self-center">
                <div className="ck_about_img_cont_wrapper float_left">
                  <div className="ck_heading_wrapper ck_heading_wrapper2">
                    <h4>what we offer</h4>
                    <h3>Who we are?</h3>
                  </div>
                  <p>
                      
                  IF is a pioneer online magazine dedicated exclusively to content relating to intersectional feminism. We are a group of young editors, writers and illustrators from varied regional, cultural, and educational backgrounds.

In our shared vision of an equal and equitable society we aim to vocalise the role of discrimination on the basis of social costructs such as caste, class, gender, race, and religion.
We are determined to represent varied geo-political, ideological, and linguistic identities in the fight against partiarchaical structures.
<br />
                    <br />
We are strong believers of freedom of expression and in pursuance of our beliefs, we will share content under a spectrum of areas. From current affairs to history, and including our areas of expertise in environmentalism, justice, laws and policies, multimedia, and STEM among other subjects, we're going to have something for everyone!
                    </p>
                  <div className="ck_new_btn">	<a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <h3
style={{
    color : '#953f73',
    textAlign : 'center',
    marginTop : '10vh',
    marginBottom : '10vh',
    fontSize : '38px',
    fontWeight : '500',
}}

>Meet the team


</h3>

<div className="container" 

style={{
    color : '#953f73',
  
    marginTop : '2vh',
    marginBottom : '10vh',
  
}}

>
    <div className="row">
        


  <div className="col-md-6 col-lg-4 col-sm-12 card-margin"  style={{
    marginTop : '5vh'
  }}>    
<div class="card" >
  <img class="card-img-top" src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/120143813_948523555633925_8694760341678123344_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=E1I3jbVkZdEAX-_ks24&oh=80cac6fcb0065a0d587fb8055425a2e2&oe=5FA35119" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Amrita</h5>
    <p class="card-text">
    Amrita S. Nair is the Founder of The Intersectional Feminist, The Silent Sexism Project and a Final Year Law
     Student with a keen interest in Human Rights Law, Constitutional Law and Gender Studies. 
        </p>
   
        <div id="demo" class="collapse">
          <br />
    As the founder of the Silent Sexism Project, Amrita believes that sexism is deeply entrenched in our society and manifests itself in a myriad of ways, which must be challenged. As a Fauji child, Amrita has lived across the country, reveling in the glorious variety of Indian music, dance and cuisine. When not championing the causes or honing the plethora of talents she has, she's usually found curled up with a book and some hot chocolate in a cozy nook.
      
      </div>
      <br />
     <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">Read More</button>


  </div>
</div>
</div>  




<div className="col-md-6 col-lg-4 col-sm-12 card-margin"  style={{
    marginTop : '5vh'
  }}>    
<div class="card" >
  <img class="card-img-top" src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/120038730_2733044120298616_4326082582613596081_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=O8hi5UEfpAYAX-S3Fqr&oh=705152820166a821f17d446dca482225&oe=5FA52083" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Astha</h5>
    <p class="card-text">
    Astha is a budding engineer by profession who always found herself inclined towards writing. 
    A keen interest to speak up in support of feminism prompted her to create a platform to share her thoughts. 
        
        </p>

   
        <div id="demo2" class="collapse">
          <br />
  
          A strong advocate of equality, Astha hopes to reach out to her readers and help them connect through her writing. As a pet parent, Astha also stands up for animal rights and encourages others to do so too. She's also equipped with graphic design skills, and will be on IF magazine's design team.
    
      </div>
      <br />
     <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo2">Read More</button>

  </div>
</div>
</div>  




<div className="col-md-6 col-lg-4 col-sm-12 card-margin"  style={{
    marginTop : '5vh'
  }}>     
<div class="card" >
  <img class="card-img-top" src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/120194758_325126518746019_7741893602258201971_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=3p3FK2UxsCIAX_HEgMZ&oh=2f3b9fbf83122f00dce7b84dc3938a85&oe=5FA3596D" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Gowri</h5>
    <p class="card-text">
    Currently in her fourth year in law school, gowri has been deeply interested in gender and law.
     Having closely worked with the gender studies committee in her college for three years now.
    
        </p>
   

        <div id="demo3" class="collapse">
          <br />
          She currently heads as convenor for this academic year. In her remaining time she's been actively pursuing art professionally with a particular interest in feminist art and would be a part of our design team.
        
      </div>
      <br />

     <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo3">Read More</button>
  </div>
</div>
</div>  





<div className="col-md-6 col-lg-4 col-sm-12 card-margin"  style={{
    marginTop : '5vh'
  }}>     
<div class="card" >
  <img class="card-img-top" src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/e35/120101474_176639647292478_1067453509166902677_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=NjmfppYrSsYAX8RO3Xc&_nc_tp=18&oh=f7f89919c067dbae124909e2fc7ee765&oe=5FA5DB56" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Mahima Meenaxi</h5>
    <p class="card-text">
   
    Mahima Meenaxi is a 22 year old, hailing from Bengaluru and is currently pursuing her fifth year of BA LLB course.
     As feminist and an advocate of labour rights, she believes that gender discrimination is a result of deep rooted
      class discrimination. 
        </p>

        <div id="demo4" class="collapse">
          <br />
          She also believes that gender justice is impossible to achieve without the ideological spread of intersectional feminism. She is an aspiring litigant with experience of practice in labour courts and tribunals. Her areas of research specialisation include Constitutional Law, Philosophy, Feminist Jurisprudence and Competition Law amongst others. She is an avid reader and takes pleasure in writing opinion pieces analysing laws and policies. Her interests are varied and range from Carnatic music to painting. She is also a multi-linguistic poetess.

      </div>
      <br />
   
     <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo4">Read More</button>
  </div>
</div>
</div>  




<div className="col-md-6 col-lg-4 col-sm-12 card-margin"  style={{
    marginTop : '5vh'
  }}>     
<div class="card" >
  <img class="card-img-top" src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/120216512_324914142099920_8607949806899513684_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=3f1Kdd6nVrAAX9Eu60T&oh=ef959257405776adb46af0a4f5016b3e&oe=5FA30F51" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Manasa M Poovayil</h5>
    <p class="card-text">

    Manasa M Poovayil is a 26-year-old, thoroughbred Bengalurean. 
    A graduate of Electronics and Communication Engineering, she is currently working as a 
    technology consultant at Accenture. 

        </p>
       

        <div id="demo5" class="collapse">
  She is a feminist who believes that feminism does not belong to just one gender. Her idea of feminism transcends labels of causes pertaining to any single sphere of the society and believes that feminism stands for all those who have experienced any kind of inequality, and more often than not, compounding effects of inequality due to different facets of their identity. A staunch advocate for inclusion and diversity, she believes that true liberation will come about when every human recognizes and accepts that differences are beautiful. Though hailing from the STEM community, Manasa has immense love for fine arts. She is a trained singer and dancer. She is a voracious reader and loves writing. She is a tree-hugger and a believer of minimalism.
      </div>
      <br />

        <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo5">Read More</button>
  </div>
</div>
</div>  




<div className="col-md-6 col-lg-4 col-sm-12 card-margin"  style={{
    marginTop : '5vh'
  }}>     
<div class="card" >
  <img class="card-img-top" src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/120145897_342098310454207_2171474110639739579_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=tbhPIqYoEtUAX8cR25a&oh=fe53c19fa318072aa4fc879517db5543&oe=5FA41B16" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title"> Parinishta.T</h5>
    <p class="card-text">
    Parinishta.T is a Communication and media studies graduate and currently works as an Online Media Executive. She believes in creating and consuming media responsibly having studied its effects first hand.
        </p>
        <br />
   
     <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">Read More</button>
  </div>
</div>
</div>  


<div className="col-md-6 col-lg-4 col-sm-12 card-margin"  style={{
    marginTop : '5vh'
  }}>     
<div class="card" >
  <img class="card-img-top" src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/120284639_1763355180485045_8987198536097119543_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=iOE2Tw286n8AX-B5c55&oh=0101f426423f02db3055812afdb7032d&oe=5FA32620" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title"> Raagni Malhotra</h5>
    <p class="card-text">

    Tanisha Sudarshan is an aspiring lawyer with keen interest in human rights, sustainable 
    development and policy.
        </p>
       

        <div id="demo7" class="collapse">
 
        An avid reader, she also pens academic articles and poetry with the same ease. Tanisha is a firm believer of intersectionality and balance and hopes to contribute to the field through her work for the IF Magazine.

 
  </div>
      <br />

        <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo7">Read More</button>
  </div>
</div>
</div>  



<div className="col-md-6 col-lg-4 col-sm-12 card-margin"  style={{
    marginTop : '5vh'
  }}>     
<div class="card" >
  <img class="card-img-top" src="https://instagram.fnag5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/120202654_177166273916811_3471019468448221314_n.jpg?_nc_ht=instagram.fnag5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=TXeqkLdkoVAAX_8ZC6K&oh=2e1dfbb49d7c252cab92d1898a2c329f&oe=5FA4C378" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title"> Raagni Malhotra</h5>
    <p class="card-text">

    Raagni is currently in her final year of an undergraduate program in International Criminal Justice at the City
     University of New York.        </p>
       

        <div id="demo8" class="collapse">
 
        She also holds an Associate’s degree in Criminal Justice. Born a New Yorker, but raised between the U.S. and India, she brings a multicultural perspective on feminist issues to the table. She is especially passionate about studying gender-based violence and transnational crimes and hopes to conduct productive research about these issues as a scholar. In her little spare time, she can be found reading, attempting to learn another language, or fostering awareness about social issues in her community.

 
 
  </div>
      <br />

        <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo8">Read More</button>
  </div>
</div>
</div>  



<div style={{
    height : '10vh',
    marginBottom : '10vh',
    width : '100%'
}}>

</div>
















    </div>
</div>




<div className="footer_wrapper float_left">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="footer_widget footer_about_wrapper float_left">
                  <div className="wrapper_first_image">
                    <a href="index">
                      <h2 style={{color: '#fff'}}>theifmag</h2>
                    </a>
                  </div>
                  <div className="abotus_content">
                    <p>Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.
                      <br />
                      <br />Vestibulum id ligula porta felis euismod semper. pharetra augue. Maecenas faucibus interdum...</p>
                  </div> <a href="#" className="blog_read">read more <i className="fas fa-long-arrow-alt-right" /></a>
                </div>
              </div>
        
              <div className="col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="footer_widget footer_useful_wrapper footer_widget2 float_left">
                  <h4>get in touch</h4>
                  <div className="contect_form_footer float_left">
                    <input type="text" name="name" placeholder="joahn doe" /><i className="fas fa-user-alt" />
                  </div>
                  <div className="contect_form_footer float_left">
                    <input type="text" name="Email" placeholder="Email ID" /><i className="fas fa-comment" />
                  </div>
                  <div className="contect_form_footer float_left">
                    <textarea name="message" rows={4} placeholder="Your Message..." defaultValue={""} />
                  </div>
                  <div className="footer_btn float_left"> <a href="#">send message</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="footer_widget footer_contact_wrapper footer_widget2 float_left">
                  <h4>contact info </h4>
                  <ul>
                    {/* <li> <span> Santa Cruz
                        Office: </span>
                      <p><a href="#">Theifmag , 
                          9860 Mill Road, 
                          Kolar, Delhi, Noida</a>
                      </p>
                    </li> */}
                    {/* <li> <span>phone: </span>
                      <p>+1-22222222 +1-2222222222</p>
                    </li> */}
                    <li> <span>email: </span>
                      <p><a href="#"> theifmag@gmail.com</a>
                        <br />
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section2_bottom_wrapper float_left">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="btm_foter_box">
                  <p>Copyright © 2020 <a href="#"> Theifmag</a> Designed and Developed by<a href="#"> The Brandwick</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>















            </div>
      </Layout>
    )
}

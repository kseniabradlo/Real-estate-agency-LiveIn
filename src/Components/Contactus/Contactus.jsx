import './Contact.css';
import logo from '../../assets/images/Live In.png';
function Contactus(){
    return(
        <section className="contact-comp">

          <div className="contact-title-text">
            <div className="contact-title"><h2>KONTAKT</h2></div>
            <div className="contact-text"><p>Zapraszamy do kontaktu telefonicznego i mailowego lub do naszego biura w Krakowie.</p></div>
          </div>

            <div className="contact-green-wrapper">

            <div className="contact-logoinfo-google">

                <div className="logoinfo">
                    <div className="contact-logo"><img src={logo}/></div>
                    <div className="contact-info">
                       <p>tel.: +48 503 195 056</p>
                       <p>e-mail: biuro@livein-estates.pl</p>
                       <p>Kraków, ul. Świętokrzyska 12 / 313</p>
                    </div>
                </div>

                <div className="google">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.549968716369!2d19.926498976407032!3d50.07598921425517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b2d880a387d%3A0x6cbf5220de7e667b!2sLiveIn%20Biuro%20Nieruchomo%C5%9Bci!5e0!3m2!1sru!2spl!4v1707391441422!5m2!1sru!2spl"></iframe>
                </div>

            </div>

            </div>


        </section>

)
}

export default Contactus;

// width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
import React, { useState, useEffect } from "react";
import { useFormspark } from "@formspark/use-formspark";
import ReCAPTCHA from "react-google-recaptcha";

const FORMSPARK_FORM_ID = "vReIQaj8";

function ContactForm() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oggetto, setOggetto] = useState("");
  const [message, setMessage] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const [recaptchaValue, setRecaptchaValue] = useState("");

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
      // Check if reCAPTCHA value is empty
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA challenge.");
      return;
    }

    await submit({ name, email, oggetto, message, recaptchaValue });
    setName('');
    setEmail('');
    setOggetto('');
    setMessage('');
    setPrivacy(!privacy);
    setRecaptchaValue(""); // Reset reCAPTCHA value
    alert("Form submitted");
  };

  useEffect(() => {
    // Iubenda script code
    const loader = () => {
      const s = document.createElement("script");
      const tag = document.getElementsByTagName("script")[0];
      s.src = "https://cdn.iubenda.com/iubenda.js";
      tag.parentNode.insertBefore(s, tag);
    };

    if (window.addEventListener) {
      window.addEventListener("load", loader, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", loader);
    } else {
      window.onload = loader;
    }
  }, []);



  return (
    <form onSubmit={onSubmit}>
      <div className="twoFlex d-flex justify-content-between">
        
        <div className="inputHolder">
          <label htmlFor="Name">Nome e cognome *</label>
          <input 
          id="Name" 
          name="Nome e Cognome" 
          placeholder="Mario Rossi" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          minLength={3} maxLength={40} />
        </div>

        <div className="inputHolder">
          <label htmlFor="Email">Email *</label>
          <input 
          id="Email" 
          name="E-mail" 
          placeholder="mario.rossi@email.ext" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$" 
          maxLength={40} />
        </div>
      </div>

      <div className="inputHolder">
        <label htmlFor="Oggetto">Oggetto</label>
        <input 
        id="Oggetto" 
        name="Oggetto"  
        value={oggetto} 
        onChange={(e) => setOggetto(e.target.value)} 
        minLength={4} 
        maxLength={40} />
      </div>

      <div className="inputHolder">
        <label htmlFor="Message">Messaggio *</label>
        <textarea 
        id="Message" 
        name="FreeText" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        minLength={2} 
        maxLength={300}/>
      </div>

      <div className="privacyHolder">
        <input 
        id="myCheckbox" 
        type="checkbox" 
        required 
        value={privacy} 
        checked={isCheckboxChecked}
        onChange={handleCheckboxChange}
        />
        <label htmlFor="myCheckbox">Acconsento al trattamento dei miei dati in accordo alla vostra <a href="https://www.iubenda.com/privacy-policy/18645684" className="iubenda-nostyle no-brand iubenda-embed" title="Privacy Policy ">informativa privacy</a></label>
      </div>

      <div className="recaptcha-holder">
      <ReCAPTCHA
        sitekey="6LdjPegoAAAAAI4bJMQ_IjIPjtsbTKYdKB-v-lsD" // Replace with your reCAPTCHA site key
        onChange={handleRecaptchaChange}
      />
    </div>
      <div className="submitHolder">

      <button type="submit" disabled={!isCheckboxChecked || submitting}>
        Invia
      </button>
      </div>
    </form>
  );

};

export default ContactForm;
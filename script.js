function sendmail(){
      // inside sendmail() replace the params object with:
const params = {
  // match common EmailJS template variables
  from_name: nameEl?.value ?? "",
  from_email: emailEl?.value ?? "",
  subject: subjectEl?.value ?? "",
  message: messageEl?.value ?? "",
  // ensure the template has a recipient, OR if the template uses {{to_email}} variable
  to_email: "janijeet50@gmail.com"
};

      emailjs.sendmail("service_yh8rnoi", "template_reezwcq", parms).then(alert("Message Sent!")); 
}

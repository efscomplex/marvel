import React from 'src/react-ui/components/base/react'

function ContactForm(){
   return (
      <form>
         <fieldset>
            <legend>Contact Form</legend>
            <div className="form-group">
               <label spellCheck="false">Name </label>
               <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
               <label>Subject </label>
               <input type="text" className="form-control" spellCheck="false"/>
            </div>
            <div className="form-group">
               <label htmlFor="exampleInputEmail1">Email address</label>
               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
               <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
               <label htmlFor="contact-message">Let us know</label>
               <textarea className="form-control" id="contact-message"></textarea>
            </div> 
            <button type="submit" className="btn">Submit</button>
         </fieldset>
      </form>
   )
}

export default ContactForm
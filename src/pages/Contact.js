import React, { useState } from 'react';

export default function Contact() {
  const [formStateData, setFormStateData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleFormSubmit (event) {
    event.preventDefault();
    console.log(formStateData);
    window.location.href="mailto:elisabeth.zaiger@gmail.com?subject=" + formStateData.name + "&body=" + formStateData.message + "&cc=" + formStateData.email;
  };

  return (
    <>
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Name</label>
        <input type="name" value={formStateData.name} onChange={(event) => setFormStateData({...formStateData, name: event.target.value})} required className="form-control" id="exampleFormControlInput1" placeholder="full name"/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput2" className="form-label">Email address</label>
        <input type="email" value={formStateData.email} onChange={(event) => setFormStateData({...formStateData, email: event.target.value})} required className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea className="form-control" value={formStateData.message} onChange={(event) => setFormStateData({...formStateData, message: event.target.value})} required id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-dark">Submit</button>
      </form>
    </div>
    </>
  );
}

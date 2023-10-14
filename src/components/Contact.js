import React from 'react';

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container h-100">
        <div className="row h-100 d-flex justify-content-center align-items-center">
          <div className="col-12 text-center">
            <h2>Contact</h2>
            <p>Send me a message</p>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Message" rows="5" required />
              </div>
              <button type="submit">Let's collaborate</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

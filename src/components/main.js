// src/components/Main.js
import React from 'react';


const Main = () => {
  return (
    <main>
      <section>
        <h1>Concert Hall in New York</h1>
        <button>Learn More</button>
      </section>
      <section id="about">
        <h2>About go.arch</h2>
        <p>We design sustainable, beautiful spaces for the future.</p>
        <div className="grid">
          <div className="card">
            <h3>Our Mission</h3>
            <p>To create innovative and sustainable architectural designs.</p>
          </div>
          <div className="card">
            <h3>Our Vision</h3>
            <p>Transforming spaces into inspiring environments.</p>
          </div>
        </div>
      </section>
      <section id="clients">
        <h2>Our Clients</h2>
        <p>We have worked with top companies around the world.</p>
        <div className="grid">
          <div className="card">
            <h3>Client 1</h3>
          </div>
          <div className="card">
            <h3>Client 2</h3>
          </div>
        </div>
      </section>
      <section id="contacts">
        <h2>Get in Touch</h2>
        <p>Contact us for more information about our projects.</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default Main;

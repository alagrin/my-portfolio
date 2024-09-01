"use client"
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission logic here
    console.log('Form submitted:', { firstName, lastName, email });
    // Send email using a hypothetical email service
    const sendEmail = async () => {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'alagrin92@gmail.com',
            subject: 'New Contact Form Submission',
            text: `
              New contact form submission:
              First Name: ${firstName}
              Last Name: ${lastName}
              Email: ${email}
            `,
          }),
        });

        if (response.ok) {
          console.log('Email sent successfully');
        } else {
          console.error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };

    // Call the sendEmail function
    sendEmail();
    setIsOpen(false);
  };

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Contact Me
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mr-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center mb-5">About Me</h1>
      <p className="text-lg mb-10 text-center max-w-[100vw]">
        Hello! I'm a passionate developer with experience in ReactJS, HTML/CSS, Java, SQL after my 4 years of working over at GM on
        the E-Commerce side of the business.
        I love working on all sorts of web development and am always eager to learn new technologies.
        When I'm not coding, you can find me playing music, tennis, hanging out at the latest food trucks and food spots out in Austin.
      </p>
      <div className="mb-6">
        <Image
          src="/images/image.png"
          alt="Map of Austin, Texas"
          width={400}
          height={300}
        />
      </div>
      <ContactForm />
    </div>
  );
};

export default AboutMe;

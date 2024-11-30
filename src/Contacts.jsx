import React from 'react'

export default function Contacts() {
  return (
    <>
    <h2 className='text-center p-4'>Get in Touch with Us!</h2>

    <div className='d-flex flex-column justify-content-start align-items-center text-center vh-100'>
      <p style={{ lineHeight: "1.6", width: "50ch" }}>We’d love to hear from you!<br/> Whether you have a question, feedback, or just want to say hello, our team is here to help. Feel free to reach out to us using the contact options below.</p>
      <ul>
        <li>Email: support@noxe.com (For general inquiries, feedback, and support)</li>
        <li>Phone: +1 234 567 890 (Available Monday to Friday, 9 AM - 5 PM)</li>
        <li>Address: 123 Movie Lane, Hollywood, CA 90028, USA (Visit us for in-person assistance)</li>
      </ul>

      <p className='mt-5' style={{ lineHeight: "1.6", width: "50ch" }}>Stay connected with us on social media for updates, news, and exciting movie recommendations :</p>
      <ul>
        <li>Facebook: facebook.com/noxe</li>
        <li>Twitter: twitter.com/noxe</li>
        <li>Instagram: instagram.com/noxe </li>
      </ul>

      <p style={{ lineHeight: "1.6", width: "50ch" }}>We’ll do our best to respond within 24-48 hours. Thank you for choosing Noxe as your go-to platform for all things movies and TV!</p>
    </div>
    </>
  )
}

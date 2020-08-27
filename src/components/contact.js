import React from "react"
import { Link } from "gatsby"

export default function Contact() {
  return (
    <section className="section index-contact">
      <div class="container has-text-centered">
        <h1 className="is-size-2 has-text-white my-6">Let me know how I can serve you.</h1>
        <div className="pb-6 my-6 has-text-centered">
          <Link to="/contact" className="button is-white is-outlined">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}

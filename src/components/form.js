import React from 'react'

const Form = () => (
      <form name="add-form" action="/" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="text" name="new" id="new" />
        <input type="submit" className="btn-form button" value="Add To Jar"/>
      </form>
  )

export default Form

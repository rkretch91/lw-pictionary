import React from 'react'
import { Link } from 'gatsby'
import jar from '../images/jar-image.jpg'
import diagram from '../images/diagram.png'


import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <div class="about">
      <h1>About</h1>
      <p>I turned 27 this year, and since my mom and sister were in Berlin for my birthday, I told them to help me with something important: fill a jar with post-it notes of daily tasks that will help me conquer my fears, do things that are out of the ordinary, and make me be nicer to people.</p>
      <img src={jar} alt="jar-project"/>
      <p>Things haven’t been easy leading up to that day. I’ve never felt more afraid of rejection, I’ve never felt more disconnected from real people because of technology, and I’ve never felt so detached from myself. My anxiety has been so bad most mornings, that I’ve often contemplated ways of forcing food poisoning or other freak illnesses upon myself to avoid walking out into the world. I have it so freaking good, yet I find myself paralyzed by these demons so much of the time.</p>
      <p>That got me thinking, inactivity is just going to exacerbate these feelings, but a little jar with daily tasks to spice my days up a bit can only get me closer to my true purpose on this bitch of a planet. I am convinced that the path to happiness and purpose is living a daily existence and balance of KINDNESS, SPONTANEITY, and CONQUERING FEARS.</p>
      <img src={diagram} alt="happiness-diagram"/>
      <p>The Jar Project is a daily reminder to open up your world to these three aspects, and do something atypical on the daily; for it is these uncomfortable moments and periods of reflection that will help us reconnect and grow as a human race.</p>
      <p>Go ahead and pick something out of the jar. Record it, document it, and tomorrow, pick something new. Just think of what a year or lifetime of kindness, spontaneity, and conquering fears can do to you. </p>
      <a href="https://www.thehopelessroamantic.com"><img src="https://res.cloudinary.com/dofuzeof4/image/upload/v1546186667/The%20Jar%20Project/the-hopeless-roamantic.png" alt="the hopeless roamantic"/></a>
      <Link to="/">Go back to The Jar</Link>
    </div>
  </Layout>
)

export default SecondPage

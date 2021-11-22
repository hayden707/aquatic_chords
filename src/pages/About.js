import react from 'react'
import '../App.css'
import './About.css'

export default function About() {
  return (
    <div className="about-container">
      <div className="background">
        <iframe
          className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/L-14jmUtjE0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
          Play the chords of "Aquatic Ambience" from <i>Donkey Kong Country</i>.
          Built with Tone.js.
        </p>
      </div>
    </div>
  )
}

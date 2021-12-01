import React from 'react'
import '../App.css'
import './Main.css'
import * as Tone from 'tone'
import { Link } from 'react-router-dom'

export default function Main() {
  Tone.Master.volume.value = -10

  let reverb = new Tone.Freeverb({
    roomSize: 0.7,
    dampening: 3000
  }).toDestination()
  let delay = new Tone.FeedbackDelay('8n', 0.75).toDestination()

  const poly1 = new Tone.PolySynth(Tone.AMSynth).chain(delay, reverb)
  poly1.set({ detune: -1200 })

  const poly2 = new Tone.PolySynth(Tone.AMSynth).chain(delay, reverb)
  poly2.set({ detune: -1200 })

  let Cm9 = ['C3', 'D4', 'Eb4', 'G4']
  let Ab9 = ['Ab2', 'C4', 'Eb4', 'Bb4']
  let Fm9 = ['F2', 'C4', 'Eb4', 'Ab4']
  let Bbadd9D = ['D3', 'C4', 'F4', 'Bb4']

  let chordList = [Cm9, Ab9, Fm9, Bbadd9D]

  function playPoly1(chord) {
    poly2.triggerAttackRelease(chord, '8n')
  }

  function playRandom() {
    poly1.triggerAttackRelease(
      chordList[Math.floor(Math.random() * chordList.length)],
      '8n'
    )
  }

  return (
    <div className="App">
      <h1 className="title">Aquatic Chords</h1>
      <div className="chord-wrapper">
        <button className="chord" onClick={() => playPoly1(Cm9)}>
          Cm9
        </button>
        <button className="chord" onClick={() => playPoly1(Ab9)}>
          Ab9
        </button>
        <button className="chord" onClick={() => playPoly1(Fm9)}>
          Fm9
        </button>
        <button className="chord" onClick={() => playPoly1(Bbadd9D)}>
          Bbadd9/D
        </button>
      </div>
      <button id="random" onClick={() => playRandom()}>
        random
      </button>
      <Link to={`/about`}>
        <p className="about-link">About</p>
      </Link>
    </div>
  )
}

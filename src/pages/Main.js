import React from 'react'
import '../App.css'
import './Main.css'
import * as Tone from 'tone'

export default function Main() {
  // test

  // end test

  let reverb = new Tone.Freeverb({
    roomSize: 0.7,
    dampening: 3000
  }).toDestination()
  let delay = new Tone.FeedbackDelay('8n', 0.75).toDestination()

  const synth = new Tone.Synth().chain(delay, reverb)

  function playNote(note) {
    synth.triggerAttackRelease(`${note}5`, '8n')
  }

  // hayden addition
  const poly1 = new Tone.PolySynth(Tone.AMSynth).chain(delay, reverb)
  poly1.set({ detune: -1200 })

  function playPoly() {
    poly1.triggerAttackRelease(['C4', 'E4', 'Ab4', 'Eb5'], '8n')
  }

  const poly2 = new Tone.PolySynth(Tone.AMSynth).chain(delay, reverb)
  poly2.set({ detune: -1200 })

  // let chord1 = ['C4', 'E4', 'G4', 'B4']
  let Cm9 = ['C3', 'D4', 'Eb4', 'G4']
  let Ab9 = ['Ab2', 'C4', 'Eb4', 'Bb4']
  let Fm9 = ['F2', 'C4', 'Eb4', 'Ab4']
  let Bbadd9D = ['D3', 'C4', 'F4', 'Bb4']

  let C5 = ['C4', 'G4', 'C3']
  let F5 = ['F4', 'C3', 'F3']

  let chordList = [Cm9, Ab9, Fm9, Bbadd9D]
  // let randomChord = chordList[Math.floor(Math.random() * chordList.length)]

  function playPoly1(chord) {
    poly2.triggerAttackRelease(chord, '8n')
  }

  function playRandom() {
    poly1.triggerAttackRelease(
      chordList[Math.floor(Math.random() * chordList.length)],
      '8n'
    )
  }

  // end addition

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
        <button className="chord, random" onClick={() => playRandom()}>
          random
        </button>
      </div>
    </div>
  )
}

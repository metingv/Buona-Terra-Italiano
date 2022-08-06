import {  useState } from 'react'
const Audio = () => {
const [isPlay, setIsPlay] = useState();

  const handleAudio = () => {

    if (!isPlay) {
      document.querySelector('audio').play();
      setIsPlay(true)
    }
    else {
      document.querySelector('audio').pause();
      setIsPlay(false)
    }

  };
    return (
      <>
      <audio>
        <source
          autoplay
          src="https://cdn.simplecast.com/audio/7a595beb-34fb-4fee-b0d4-2434ffdf5eff/episodes/5abae9c7-450a-4051-a06b-9cb87e96af2f/audio/8dcf900b-9edc-434c-9ac1-bf903ce47dd0/default_tc.mp3?nocache"
          type="audio/mpeg"
        />
      </audio>
      <div className="Audio" onClick={handleAudio}>
        {isPlay ? <span class="material-symbols-outlined">
          pause
        </span> : <span class="material-symbols-outlined">music_note</span>}
      </div >
      </>
    )
  }
  
  export default Audio
  
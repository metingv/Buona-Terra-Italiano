import { useEffect, useState } from 'react'
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
          src="https://cdn.simplecast.com/audio/7a595beb-34fb-4fee-b0d4-2434ffdf5eff/episodes/49cd6540-681f-4d82-959d-600d619b920b/audio/c13eeab6-496a-492d-950d-98ec382f801a/default_tc.mp3?nocache"
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
  
import React, { useRef, useState } from 'react';
import './style.css';

function App() {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: 'video/webm' });

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setRecordedChunks((prev) => [...prev, event.data]);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      setVideoURL(url);
      setRecordedChunks([]);
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();
    videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    setRecording(false);
  };

  return (
    <div className="container">
      <h1>Gravar Mensagem para Mateus</h1>
      <div>
        <video ref={videoRef} autoPlay playsInline />
      </div>
      <div>
        {recording ? (
          <button onClick={handleStopRecording}>Parar Gravação</button>
        ) : (
          <button onClick={handleStartRecording}>Iniciar Gravação</button>
        )}
      </div>
      {videoURL && (
        <div>
          <h2>Mensagem:</h2>
          <video src={videoURL} controls />
        </div>
      )}
    </div>
  );
}

export default App;

import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
  <main className="input-page">
    <h1 className="app-title">Enter to become a Millionare</h1>
    <div className="start">
      <input
        className="startInput"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Enter
      </button>
    </div>
    </main>
  );
}
import './Loading.css';

export default function Loading() {
  // This is the loading component
  return(
    <div className="loading-container">
      <span className="loading-text">Loading</span>
      <div className="dot-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  )
}

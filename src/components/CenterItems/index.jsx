import './styles.css'

function CenterItems({ text, color = "#D5E3F1" }) {
  return( 
    <div className="center-items">
      <h1 className="outline">{text}</h1>
      <h1 style={{ color: color }}>{text}</h1>
    </div>
  )
}

export default CenterItems
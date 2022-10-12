import './GamingLibraryCard.css';

const GamingLibraryCard = (props) => {
  return (
    <div className='gaming-library-card'>
    <ul>
    <li><img src={props.image} alt=''/></li>
    <li><h4>{props.title} <span>{props.category}</span></h4></li>
    <li><h4>Data Added</h4><span>{props.data_added}</span></li>
    <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
    <li><h4>Currently</h4><span>{props.downloaded}</span></li>
    <div className="main-button">
          <a href="/#">Download</a>
        </div>
    </ul>
    </div>
  )
}

export default GamingLibraryCard
import './SectionWrapper.css';

const SectionWrapper = (props) => {
  return (
    <div className="sections-wrapper">
    {props.children}
    </div>
  )
}

export default SectionWrapper
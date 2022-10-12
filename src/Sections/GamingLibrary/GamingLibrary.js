import './GamingLibrary.css';
import { SectionWrapper,SectionHeader,GamingLibraryCard } from '../../components/export';
import GamingLibraryData from '../../Data/GamingLibraryData';
const GamingLibrary = () => {

  const Cards = GamingLibraryData.map(card=>{
    return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} data_added={card.date_added} hours_played={card.hours_played} downloaded={card.downloaded} />
  })
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className="gaming-library-cards">
          {Cards}
        </div>
      </SectionWrapper>
    </>
  )
}

export default GamingLibrary
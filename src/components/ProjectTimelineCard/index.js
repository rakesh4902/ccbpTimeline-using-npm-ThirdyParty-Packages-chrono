// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <>
      <div className="project-container">
        <img src={imageUrl} className="project-image" alt="project" />
        <div className="project-title-and-duration-container">
          <h1 className="project-header">{projectTitle}</h1>
          <div className="durationContainer">
            <AiFillCalendar color="#171f46" />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="project-para">{description}</p>
        <a href={projectUrl} className="visit-link">
          Visit
        </a>
      </div>
    </>
  )
}

export default ProjectTimelineCard

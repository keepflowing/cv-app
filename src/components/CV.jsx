import { AiOutlineMail } from 'react-icons/ai'
import { SlScreenSmartphone } from 'react-icons/sl'
import { IoLocationOutline } from 'react-icons/io5'

function EducationField({item}) {
  return (
    <div className='subSection'>
      <div className='left'>
        <p>{item.startDate} -</p>
        <p>{item.endDate ? item.endDate : 'present'}</p>
      </div>
      <div className='right'>
        <h3>{item.title}</h3>
        <p>{item.school}</p>
      </div>
    </div>
  )
}

function ExperienceField({item}) {
  return (
    <div className='subSection'>
      <div className='left'>
        <p>{item.startDate} -</p>
        <p>{item.endDate ? item.endDate : 'present'}</p>
      </div>
      <div className='right'>
        <h3>{item.company}</h3>
        <p><i>{item.role}</i></p>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default function CV ({personal, education, experience}) {
  return (
    <div id='cv'>
      <h1>{personal.name}</h1>
      <hr className='solid'></hr>
      <div className='contact'>
        <div>
          <AiOutlineMail/>
          <p>{personal.email}</p>
        </div>
        <div>
          <SlScreenSmartphone/>
          <p>{personal.number}</p>
        </div>
        <div>
          <IoLocationOutline/>
          <p>{personal.location}</p>
        </div>
      </div>
      <div className='section'>
        <h2>Education</h2>
        {education.map(item => <EducationField key={item.id} item={item}/>)}
      </div>
      <div className='section'>
        <h2>Experience</h2>
        {experience.map(item => <ExperienceField key={item.id} item={item}/>)}
      </div>
    </div>
  )
}
import { v4 as uuidv4 } from 'uuid';

export default function examplePerson() {
  return {
    personal: {
      name: 'John Smith',
      email: 'johnsmith@gmail.com',
      number: '555-555-555',
      location: 'Mars, The Solar System'
    }, 
    education: {
      id: uuidv4(),
      title: 'Full Stack Web Development',
      school: 'The Odin Project',
      startDate: '2023-07-12',
      endDate: ''
    },
    experience: {
      id: uuidv4(),
      role: 'Full Stack Developer',
      company: 'Google',
      startDate: '2023-12-31',
      endDate: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel iaculis orci. Donec ut faucibus ipsum, ut placerat eros. Nulla tincidunt iaculis quam vel auctor.'
    }
  }
}
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'JK'
}

const about = {
  // all the properties are optional - can be left empty or deleted
  link: 'https://ik.imagekit.io/datap/Gk/profile-pic__5__dyEgMqSKy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671169366088',
  name: 'Jui Kulkarni',
  role: 'CSE sophomore at MESCOE',
  description:
    'Adaptable and driven with strong work ethic and ability to thrive in team based or individually motivated settings, consistently rewarded for success in planning and operation improvements, offering a quality-focused and systematic approach for solving issues and performing daily tasks',
  resume: 'https://pdfhost.io/v/qRYxoVbjp_Jui_Kulkarni_Resume',
  social: {
    linkedin: 'https://www.linkedin.com/in/jui-kulkarni-94680a217/',
    github: 'https://github.com/jkulkarni01'
  }
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'MAG-E',
    description:
      `A Website for all the club's in college where they
      can post the details of upcoming and previous
      events.`,
    stack: ['HTML', 'Django', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    sourceCode: 'https://github.com/gkulk007/Mag-E',
    livePreview: 'https://emagmes.pythonanywhere.com/'
  },
  {
    name: 'Sentiment Analysis',
    description:
      `Performed Sentiment Analysis on Twitter feeds
      and classify the tweets in positive, negative,
      and neutral categories.`,
    stack: ['Python'],
    sourceCode: '',
    livePreview: ''
  }
]

const skills = [
  'C++',
  'Python',
  'MySQL',
  'HTML',
  'CSS',
  'JavaScript',
  'Git',
  'MS Office',
  'VS Code'
]

const contact = {
  email: 'jui01kulkarni@gmail.com'
}

export { header, about, projects, skills, contact }

import React from "react"
import Card from "./components/Card";

const App = () =>{
  const jobOpenings = [
  {
    jobOpening: "Software Engineer",
    companyLogo: "https://www.pngmart.com/files/23/Facebook-Logo-PNG-Isolated-HD.png",
    companyName: "Meta (Facebook)",
    daysAgo: 3,
    position: "Backend Developer",
    jobType: "Senior Level, Full-Time",
    city: "Menlo Park, California",
    payPerHour: 120
  },
  {
    jobOpening: "Cloud Architect",
    companyLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    daysAgo: 7,
    position: "AWS Solutions Architect",
    jobType: "Mid-Level, Full-Time",
    city: "Seattle, Washington",
    payPerHour: 140
  },
  {
    jobOpening: "Data Scientist",
    companyLogo: "https://images.crowdspring.com/blog/wp-content/uploads/2016/06/27132348/netflix-new-logo.png",
    companyName: "Netflix",
    daysAgo: 5,
    position: "Machine Learning Engineer",
    jobType: "Senior Level, Contract",
    city: "Los Gatos, California",
    payPerHour: 150
  },
  {
    jobOpening: "Frontend Engineer",
    companyLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google (Alphabet)",
    daysAgo: 2,
    position: "React Developer",
    jobType: "Entry Level, Full-Time",
    city: "Mountain View, California",
    payPerHour: 110
  },
  {
    jobOpening: "Software Developer",
    companyLogo: "https://logo.clearbit.com/infosys.com",
    companyName: "Infosys",
    daysAgo: 8,
    position: "Java Developer",
    jobType: "Mid-Level, Full-Time",
    city: "Pune, India",
    payPerHour: 60
  },
  {
    jobOpening: "System Analyst",
    companyLogo: "https://logo.clearbit.com/tcs.com",
    companyName: "Tata Consultancy Services (TCS)",
    daysAgo: 4,
    position: "Business Analyst",
    jobType: "Entry Level, Part-Time",
    city: "Mumbai, India",
    payPerHour: 50
  },
  {
    jobOpening: "DevOps Engineer",
    companyLogo: "https://logo.clearbit.com/wipro.com",
    companyName: "Wipro",
    daysAgo: 6,
    position: "Cloud DevOps Specialist",
    jobType: "Senior Level, Full-Time",
    city: "Bangalore, India",
    payPerHour: 70
  },
  {
    jobOpening: "Consultant",
    companyLogo: "https://logo.clearbit.com/accenture.com",
    companyName: "Accenture",
    daysAgo: 9,
    position: "IT Strategy Consultant",
    jobType: "Mid-Level, Contract",
    city: "Hyderabad, India",
    payPerHour: 80
  }
];

  return(
    <div className="parent">
{jobOpenings.map((elem, index) => (
  <Card
    key={index}
    companyName={elem.companyName}
    companyLogo={elem.companyLogo}
    jobOpening={elem.jobOpening}
    daysAgo={elem.daysAgo}
    position={elem.position}
    jobType={elem.jobType}
    city={elem.city}
    payPerHour={elem.payPerHour}
  />
))}
    </div>
  )
}

export default App

import './Timeline.css';

const timelineData = [
  {
    year: "2025",
    age: "18 Years old",
    desc: "Going into the second year of my T-Level course alongside a work placement at Bloc Digital. Placed first in the category for use of data and AI in our digital solution at the EMIOT Challenge ",
  },
  {
    year: "2024",
    age: "17 Years old",
    desc: "Took on a T-Level Digital Design, Production and Development course at Derby College",
  },
  {
    year: "2022",
    age: "15 Years old",
    desc: "I started and completed an A-Level in Computer Science & GCSE Statistics",
  },
  {
    year: "2021",
    age: "14 Years old",
    desc: "I decided to take a Computer Science & ICT IGCSE, which sparked my passion for programming",
  },
  {
    year: "2019",
    age: "12 Years old",
    desc: "I started my Mathematics & English IGCSEs & finished them in 2020 and 2021",
  },
  {
    year: "2018",
    age: "11 Years old",
    desc: "I became Home Educated; this allowed much more flexibility in my work as well as more family time",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="timeline">
      <p className="section-label">Timeline</p>
      <h2 className="section-title">Experience & milestones</h2>
      <p className="section-description" style={{ marginBottom: '2rem' }}>
        Key moments in my journey so far.
      </p>
      <div className="timeline-list">
        {timelineData.map((event, i) => (
          <article key={event.year + i} className="timeline-item">
            <div className="timeline-marker" aria-hidden />
            <div className="timeline-content">
              <span className="timeline-year">{event.year}</span>
              <p className="timeline-age">{event.age}</p>
              <p className="timeline-description">{event.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

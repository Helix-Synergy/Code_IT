import React from "react";
import { Button } from "react-bootstrap";
import "./Academics.css";

const Academics = () => {
  return (
    <div className="academics-container">
      {/* Hero Banner */}
      <div className="academics-hero">
        <h1>Code IT Academia</h1>
      </div>
      
      <div className="academics-title">
        <h1>Code IT Academia: Fostering Innovation via Publications, Research, and Internships</h1>
      </div>

      {/* Academic Section - Card 1: Image LEFT, Paragraph RIGHT */}
      <div className="academics-section">
        <div className="academics-img-box">
          <img src="/Images1/Tech_Publications.webp" alt="Academic Innovation" />
        </div>
        <div className="academics-text-box">
          <h2>Code IT Academia</h2>
          <p>
            Code IT Academia, the academic innovation and research extension
            of Code IT Consulting. We are a bridge between academic potential
            and industry excellence, empowering students, researchers, and
            professionals to engage in transformative learning and impactful
            technological growth. Our offerings include Tech Internships,
            Research Projects, Contract Research, Tech Publications, Patent
            Filing, and Tech Meets & Talks—each meticulously crafted to bring
            real-world exposure and enable intellectual property-driven
            outcomes.
          </p>
          <Button className="academics-btn">Contact Us</Button>
        </div>
      </div>

      {/* Internship Section - Card 2: Image RIGHT, Paragraph LEFT */}
      <div className="academics-section reverse">
        <div className="academics-text-box">
          <h2>Tech Internships</h2>
          <p>
            We at Code IT Consulting offer hands-on Technology Internships
            that place students and early professionals into real-world tech
            environments. These programs simulate actual industry settings
            where interns collaborate with senior developers, learn advanced
            tools, and build live projects. We offer internships in a variety
            of fields, including cloud computing, blockchain, IoT,
            cybersecurity, AI & ML, and full-stack development. The duration
            is flexible, ranging from 4-week crash programs to 6-month
            advanced internships.We provide online, hybrid, and in-office
            formats to suit all learners. Upon completion, candidates receive
            official internship certificates, project assessments, and
            placement recommendations—all designed to build credible and
            job-ready profiles.
          </p>
        </div>
        <div className="academics-img-box">
          <img src="/Images1/Tech_intern (1).webp" alt="Tech Internships" />
        </div>
      </div>

      {/* Tech Projects Section - Card 3: Image LEFT, Paragraph RIGHT */}
      <div className="academics-section">
        <div className="academics-img-box">
          <img src="/Images1/Tech project.webp" alt="Tech Projects" />
        </div>
        <div className="academics-text-box">
          <h2>Tech Projects</h2>
          <p>
            Our Code IT Academia Tech Projects initiative serves as a
            launchpad for aspiring innovators. Whether you're a student
            working on a final-year project, a scholar writing a thesis, or a
            startup developing an MVP, we help turn your ideas into functional
            products. We provide support in designing, coding, testing, and
            deploying projects and more. From technical architecture and UI/UX
            to code optimization and deployment, our R&D mentors guide
            participants through each stage of the development process. You
            can expect detailed project documentation that complies with both
            academic and industry standards.
          </p>
        </div>
      </div>

      {/* Contract Research Section - Card 4: Image RIGHT, Paragraph LEFT */}
      <div className="academics-section reverse">
        <div className="academics-text-box">
          <h2>Contract Research</h2>
          <p>
            We offer contract-based research services to startups,
            universities, and corporations seeking expert teams to develop
            proprietary technologies. From proof of concept to prototype
            development, we work under NDAs and IP-safe environments. We
            handle everything—from initial feasibility analysis to final
            report submission and publication support. Each engagement is
            goal-oriented, with clear deliverables and milestone-based
            reviews. We also support grant writing, proposal preparation, and
            collaborative papers for international journals and conferences.
          </p>
        </div>
        <div className="academics-img-box">
          <img src="/Images1/contract research (2).webp" alt="Contract Research" />
        </div>
      </div>

      {/* Tech Publications Section - Card 5: Image LEFT, Paragraph RIGHT */}
      <div className="academics-section">
        <div className="academics-img-box">
          <img src="/Images1/Tech_Publications (1).webp" alt="Tech Publications" />
        </div>
        <div className="academics-text-box">
          <h2>Tech Publications</h2>
          <p>
            We assist students, researchers, and professionals in publishing
            their innovative work in top-tier journals such as IEEE, Springer,
            Elsevier, ACM, and Scopus-indexed platforms. Our Tech Publication
            service includes topic refinement, manuscript drafting, citation
            management, plagiarism checks, and formatting according to
            specific journal guidelines. For publication success, we make sure
            the text satisfies academic rigor and clear standards. Whether
            you're preparing a research article, white paper, literature
            review, or conference paper, we walk you through every step to
            increase acceptance rates and academic credibility.
          </p>
        </div>
      </div>

      {/* Patent Filing Section - Card 6: Image RIGHT, Paragraph LEFT */}
      <div className="academics-section reverse">
        <div className="academics-text-box">
          <h2>Patent Filing</h2>
          <p>
            Our Code IT Prod-Kit team of legal experts and tech analysts helps
            individuals and organizations file provisional and complete
            patents in India and abroad. The process begins with a prior-art
            search and novelty assessment to ensure your idea is unique and
            patentable. We prepare the technical specifications, claims,
            drawings, and abstracts required for successful Patent filing.
            Whether it's a software process, hardware model, or algorithm, our
            experts understand the nuances of tech patent law. Beyond patent
            filing, we also help with trademark registration, IP
            commercialization strategies, and legal advice to protect and
            monetize your innovations.
          </p>
        </div>
        <div className="academics-img-box">
          <img src="/Images1/patent.webp" alt="Patent Filing" />
        </div>
      </div>

      {/* Tech Meets & Talks Section - Card 7: Image LEFT, Paragraph RIGHT */}
      <div className="academics-section">
        <div className="academics-img-box">
          <img src="/Images1/Tech_intern.webp" alt="Tech Meets & Talks" />
        </div>
        <div className="academics-text-box">
          <h2>Tech Meets & Talks</h2>
          <p>
            Tech Meets & Talks is our signature knowledge-sharing platform
            featuring webinars, seminars, and guest lectures from top industry
            leaders, researchers, and innovators. We cover dynamic and
            future-ready topics like Generative AI, Edge Computing, DevSecOps,
            Digital Transformation, Robotics, Sustainable Tech, and many more.
            Students, instructors, startups, and IT lovers are all welcome to
            attend these seminars. Participants gain valuable networking
            opportunities, live interaction with speakers, certification, and
            practical exposure to the latest trends in the technology space.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="academics-why-choose">
        <h2>Why Choose Code IT Academia?</h2>
        <p>
          At Code IT Academia, our goal is to ignite innovation and facilitate impactful research that resonates globally.
          Every offering is backed by: Expert mentors with academic and industrial research backgrounds.
          Access to real-time projects and live coding environments. Domain-specific guidance and tech stack expertise.
          Global collaboration opportunities and journal tie-ups. Support for both academic credit and intellectual property creation.
        </p>
        <Button className="academics-btn enroll-btn">Enroll Today</Button>
      </div>
    </div>
  );
};

export default Academics;
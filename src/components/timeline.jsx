import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate Student at California State University Eastbay, Hayward <span>2021-present</span></h2>
                        <p>I am doing my Masters of Science in Computer Science with CGPA of 3.94. I have taken courses like Advanced Algorithms,Operating System Design, Web Systems, Advanced AI etc which helped me to improve my understanding of any problem and solve the problem accordingly.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Student Assistant at California State University Eastbay, Hayward <span>2021-present</span></h2>
                        <p>I work with Configuring Report generation and SQL Query Design through Oracle Business Intelligence reporting suite and Configured Stack Map setup to monitor computer availability throughout the library computers.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer (Front-end) at Tata Consultancy Services, Chennai India <span>2019-2021</span></h2>
                        <p>I worked on developing UI screens along with data layer in micro front end architecture. Collaborated with product team members to develop website and implement into a hybrid application which runs in both Android and IOS. Collaborated with cross-functional teams to run tests using JEST and explore potentials bugs in the application.</p> 
                      </div>
                    </div>
                  </article>
                 
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation at Vardhaman College of Engineering, Hyderabad <span>2015-2019</span></h2>
                        <p>I completed my under-graduation studies with major in ECE(Electronics and Communication Engineering). I have taken courses like DSA, OOPs, Computer Networks over the years and had better understanding of these subjects.</p>
                      </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

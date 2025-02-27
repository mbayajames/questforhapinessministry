import React from "react";
import schoolpic from "../assets/WhatsApp Image 2023-04-01 at 00.47.49.jpeg";
import aboutusimage from "../assets/WhatsApp Image 2023-04-01 at 00.47.45.jpeg";
import quest from "../assets/quest.png";
import tabithapic from "../assets/tabitha.png";

function Aboutus() {
  return (
    <section>
      <section className="about"></section>

      <section className="">
        <div className="about-text">
          <h1 className="text-center fw-bold">About Our School</h1>
        </div>

        <section className="section">
          <div>
            <img src={quest} alt="" />
          </div>

          <div>
            <p>
              Quest for Happiness Ministry creates a warm and secure environment
              in a home-like setting. Our school is solely and especially
              designed for the needs of the young child. During their three
              years here, they develop social and cognitive skills that give
              them a firm foundation upon which each child can begin creating
              the person they will become.
            </p>
            <p>
              We foster independence, love of learning, and respect for self,
              others, and the environment. Our Quest for Happiness curriculum
              shapes an individualized program for each child according to
              his/her own interest, learning style, and natural pace. Our
              children learn that school is the place where they succeed and
              have fun!
            </p>
          </div>
        </section>
      </section>

      <section className="">
        <div className="director-text">
          <h1>A Word From Our Director</h1>
        </div>

        <section className="director">
          <div className="director-image">
            <img src={tabithapic} alt="" />
          </div>

          <div className="director-p">
            <p>
              At Quest For Happiness Ministry, we believe education is not just about imparting
              knowledge—it’s about nurturing curious minds, compassionate
              hearts, and resilient spirits. Every day, I am inspired by the
              dedication of our teachers, the enthusiasm of our students, and
              the unwavering support of our families. Our school was founded on
              the principle that every child deserves a safe space to grow,
              explore, and discover their unique potential. Whether it’s through
              our innovative curriculum, vibrant arts programs, or commitment to
              community service, we strive to create leaders who think
              critically, act empathetically, and embrace lifelong learning. As
              a mother myself, I understand the trust you place in us. That’s
              why we prioritize open communication, individualized attention,
              and a culture of respect. When I walk through our halls and see
              students collaborating on projects, laughing in the courtyard, or
              proudly presenting their work, I am reminded of why this journey
              matters. Together, let’s continue to build a future where
              education transforms lives. Thank you for being part of our
              Quest For Happiness Ministry family—where every child is seen, heard, and
              celebrated.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Aboutus;
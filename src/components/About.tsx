import React from "react";

const About = () => {
  return (
    <section id="about">
      <h3 className="text-white font-bold mb-6 xl:hidden">ABOUT</h3>
      <p className="text-slate-400 mb-4">
        I am a Computer Science graduate from Universitas Negeri Jakarta with a
        strong focus on building responsive and robust user interfaces. My
        journey in web development started with a fascination for how design
        meets logic, leading me to specialize in{" "}
        <span className="text-pink-400">React</span> and <span className="text-pink-400">Next.js</span> to create
        seamless digital experiences.
      </p>
      <p className="text-slate-400 mb-4">
        {" "}
        During my internship and contract roles, I gained hands-on experience in
        translating complex requirements into clean, maintainable code. I thrive
        at the intersection of aesthetics and functionality, ensuring every
        product I build is not only visually appealing but also technically
        sound.
      </p>
      <p className="text-slate-400 mb-4">
        {" "}
        Currently, I am broadening my expertise by diving into backend
        development and data analysis. I believe that understanding the
        full-stack ecosystem and how to leverage data is key to becoming a more
        versatile and impactful <span className="text-pink-400">software engineer</span>.
      </p>
      <p className="text-slate-400 mb-4">
        {" "}
        When I’m not coding, you’ll find me exploring the latest tech trends,
        practicing logic on coding platforms, or leveling up my skills to stay
        ahead in this ever-evolving industry.
      </p>
    </section>
  );
};

export default About;

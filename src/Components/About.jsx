/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/flowers.jpg";

const imageAltText = "flowers";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a curious and driven individual with a thirst for knowledge and a passion for leadership. With a natural talent for communication, I'm often expressing ideas and inspiring others to action. A tech enthusiast at heart, I'm always eager to explore the latest advancements and discover new ways to innovate. Whether facing a challenge or seizing an opportunity, I'm always ready to dive in and make things happen, driven by their passion for success and their commitment to making a difference.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Game Development",
  "Web Development",
  "AR/VR Development",
  "Leadership",
  "Communication",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Hi, I’m Nandini Parashar, a tech enthusiast, an avid debater and above all a curious individual, eager to learn and grow. I’m never afraid to ask questions, and tackle any situation head on. I’m currently pursuing Electronics and Communication Engineering at Indira Gandhi Delhi Technical University for Women, during which I have delved into diverse tech stacks, from web development and game development to AR/VR. I aim to create a meaningful impact in this world and giving back to the communities I represent. And so, since my first year at college, I have been actively fostering communities that encourage growth and learning. As the President of the Microsoft Learn Student Ambassador Student Chapter IGDTUW, with over 500 members and an Instagram following of 600, I have nurtured a culture of knowledge sharing and empowerment. Moreover, as the head of the debating club, I have helped more than 100 members develop skills in debating formats and public speaking. The journey that I’m on right now, is one that started off with only a love for technology, public speaking, interacting with new people and managing events but grew into one where I get a chance to reinvent myself daily. I also take immense pride in sharing that I recently received the Generation Google Scholarship, Harvard WE Amplify Scholarship, and shortlisting for the GitHub Campus Expert and Microsoft Learn Student Ambassador programs. I also collaborated with the OnePlus SAP community to design an Instagram filter for DOMINATE 3.0, and I have participated in and won various hackathons, such as the Solana Hackday 2022.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

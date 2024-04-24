import Navigation from "../components/Navigations";

const About = () => {
  return (
    <>
      <Navigation />
      <div className="flex justify-between space-y-14 items-center flex-col md:m-5 m-6">
        <div className="bg-red-600 flex justify-center items-center md:h-32 h-14 w-full">
          <h1 className="md:text-5xl text-2xl font-bold text-white px-8 tracking-widest font-serif">
            About Us
          </h1>
        </div>

        <div className="flex justify-between space-y-12 items-center flex-col">
          <img
            src="/origi.png"
            alt="tedXjec"
            className="md:h-24 h-8 md:m-0 -m-5"
          />
          <p className="text-center font-semibold md:text-2xl text-lg border border-white md:p-8 p-4 md:mx-8 mx-4">
            TEDx is a program of independently organized events that bring
            people together to share ideas worth spreading. These events are
            licensed by TED, a nonprofit organization devoted to &quot;Ideas
            Worth Spreading.&quot; TEDx events are designed to create a TED-like
            experience at the local level, allowing communities around the world
            to showcase and discuss ideas that are relevant to them. It&apos;s
            important to note that while TEDx events are associated with TED,
            they operate independently, and the content and opinions expressed
            in TEDx talks are those of the speakers and not necessarily endorsed
            by TED.
          </p>
        </div>

        <div className="flex justify-between space-y-6 items-center flex-col">
          <img src="/TED-Logo.png" alt="tedXjec" className="md:h-36 h-12" />
          <p className="text-center font-semibold md:text-2xl text-lg border border-white md:p-8 p-4 md:mx-8 mx-4">
            TED is a nonprofit organization devoted to Ideas Worth Spreading.
            Started in 1984 as a conference where Technology, Entertainment and
            Design converged, and today covers almost all topics from science to
            business to global issues, in more than 100 languages. The two
            annual TED Conferences invite the world&apos;s leading thinkers and
            doers to speak for 18 minutes or less. Meanwhile, independently run
            TEDx events help to share ideas in communities around the world. TED
            has become a global phenomenon, influencing how people consume
            information and inspiring them to think critically about the world
            around them. The diverse range of speakers and topics covered in TED
            Talks has contributed to its widespread popularity and impact.
          </p>
        </div>

        <div className="flex justify-between space-y-8 items-center flex-col">
          <img src="/logo-white.png" alt="tedXrvce" className="md:h-36 h-16" />

          <p className="text-center font-semibold md:text-2xl text-lg border border-white md:p-8 p-4 md:mx-8 mx-4">
            Nestled amidst the Silicon Valley of India, RVCE Bangalore stands as
            a beacon of academic excellence and technological innovation. With
            it&apos;s iconic landscapes, including the sprawling campus,
            state-of-the-art laboratories, and the serene atmosphere of the
            surrounding area, it&apos;s a place where the future of technology
            and engineering is being shaped. TEDxRVCE is an independently
            organized TEDx event held at RVCE Bangalore, serving as a vibrant
            platform for the exchange of ideas, the nurturing of creativity, and
            the inspiration of the community through insightful talks and
            presentations. It offers a unique opportunity to step away from the
            daily grind and embark on an intellectual adventure with like-minded
            peers, exploring a world brimming with visionary speakers, engaging
            performances, cutting-edge technology, and thought-provoking
            discussions. TEDxRVCE is more than just an event; it&apos;s a
            gateway to a future where innovation meets education, and where the
            boundaries of what's possible are continually pushed.
          </p>
        </div>
        <div className="flex justify-between space-y-10 items-center flex-col">
          <img src="/RVCEBLORE.png" alt="tedXrvce" className="md:h-20 h-10" />

          <p className="text-center font-semibold md:text-2xl text-lg border border-white md:p-8 p-4 md:mx-8 mx-4">
            RVCE Bangalore, nestled in the heart of IT Hub, is a premier
            institution of higher education in India, renowned for its
            commitment to excellence in engineering and technology. As one of
            the oldest technical colleges in the country, RVCE Bangalore has
            been at the forefront of technological innovation and academic
            excellence since its inception. It was the first institution in
            India to introduce the Electronics & Telecommunication engineering
            program, setting a benchmark for technical education in the region.
            RVCE Bangalore offers a comprehensive range of undergraduate and
            postgraduate programs, catering to the evolving needs of the
            engineering industry. The campus of RVCE Bangalore is a testament to
            its dedication to providing a conducive learning environment.
            Equipped with state-of-the-art classrooms, laboratories, and
            libraries, it fosters an atmosphere conducive to innovation and
            research. The college boasts a vibrant community of students,
            supported by a team of distinguished faculty members who are not
            only experts in their fields but also committed to nurturing the
            next generation of engineers and technologists. Beyond its academic
            prowess, RVCE Bangalore is a hub of extracurricular activities,
            cultural events, and technical fests, ensuring that students have a
            holistic educational experience. The college's commitment to
            fostering a culture of innovation, creativity, and leadership makes
            it a preferred choice for students aspiring to make significant
            contributions to the field of engineering and technology.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

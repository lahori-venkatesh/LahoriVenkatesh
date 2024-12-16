import { BookOpen, Star, Trophy, Heart } from "lucide-react";

const StorySection = () => {
  const stories = [
    {
      title: "The Beginning",
      icon: <BookOpen className="w-6 h-6" />,
      content: "Hi, I’m Venkatesh, a UX designer driven by a passion for solving real-world problems. Growing up in a rural background shaped my perspective on accessibility and impact. My journey includes honing creative skills as a graphic designer and creating solutions like InfyCo, aimed at empowering individuals through intuitive and user-centric design."
    },
    {
      title: "First Achievement",
      icon: <Trophy className="w-6 h-6" />,
      content: "I’ve successfully designed user interfaces for platforms like InfyCo, bridging mentorship gaps for students. As a video editor and graphic designer, I enhanced brand presence for Enlido and Khatir Restaurant. Completing the Aspire Leadership Program boosted my skills in leadership, LinkedIn optimization, and communication, driving both personal and professional growth."
    },
    {
      title: "Growing Passion",
      icon: <Heart className="w-6 h-6" />,
      content: "My passion for design grew from a desire to solve real-world problems, especially for underserved communities. From exploring user behaviors to creating intuitive interfaces, I strive to make technology accessible and impactful. Each project, like InfyCo, deepens my commitment to blending creativity and purpose in crafting meaningful user experiences."
    },
    {
      title: "Current Goals",
      icon: <Star className="w-6 h-6" />,
      content: "My current goal is to refine my skills as a UX designer by mastering advanced tools like auto layout, tokens, and variables, while enhancing my understanding of user behavior. I aim to create impactful, user-centric solutions through projects like InfyCo, bridging gaps in mentorship and empowering students and professionals alike."
    }
  ];

  return (
    <section id="story" className="relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-gradient-to-br from-background via-background/95 to-background">
      <div className="py-16 md:py-20">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-primary">My Story</h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative space-y-6 md:space-y-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-[#196EF8]/80 pb-8 last:pb-0"
              >
                <div className="absolute -left-2 top-0 bg-background p-1 rounded-full border-2 border-[#196EF8]/80">
                  {story.icon}
                </div>
                <div className="bg-background/40 backdrop-blur-sm p-6 rounded-lg border border-[#196EF8]/80">
                  <h3 className="text-xl font-bold mb-2 text-primary">{story.title}</h3>
                  <p className="text-muted-foreground">{story.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
import { Header } from "@/components/header"
import { CaseStudy } from "@/components/case-study"

export default function WorkPage() {
  const caseStudies = [
    {
      title: "ProgressBytes",
      company: "EdTech Platform",
      year: "2023",
      image: "/modern-learning-analytics-dashboard-with-coding-as.jpg",
      problem:
        "Teachers lacked visibility into student coding progress and struggled to analyze assessment results effectively. The disconnect between teaching and learning outcomes made it difficult to provide targeted support and make data-informed decisions.",
      solution:
        "Developed a comprehensive learning analytics platform that streamlines coding assessment workflows. Built features for automated code analysis, visual progress tracking, comparative performance metrics, and actionable insights to bridge the gap between teachers and students.",
      outcome:
        "Reduced teacher marking time by 60%, increased visibility into student progress patterns, and enabled data-driven teaching decisions. Adopted by 50+ students during beta testing, leading to measurable improvements in student outcomes and engagement.",
      tech: ["React", "Node.js", "PostgreSQL", "Python", "Chart.js", "Express"],
    },
    {
      title: "QuizBytes",
      company: "EdTech Platform",
      year: "2025",
      image: "/mobile-quiz-app-interface-with-computer-science-qu.jpg",
      problem:
        "Computer Science students needed effective exam revision tools with differentiated question difficulty. Teachers had limited insight into student engagement and progress, making it hard to identify knowledge gaps and provide targeted support.",
      solution:
        "Created a mobile-first quiz platform with adaptive difficulty levels and comprehensive Computer Science question banks. Implemented real-time progress tracking, engagement analytics for teachers, and personalized learning paths based on student performance.",
      outcome:
        "Achieved 85% student adoption rate and increased exam preparation engagement by 73%. Provided teachers with actionable data on student progress, with students reporting improved confidence and better exam performance.",
      tech: ["React Native", "Firebase", "TypeScript", "Redux", "Node.js"],
    },
    {
      title: "Insulin Tracker",
      company: "Personal Project",
      year: "2024",
      image: "/clean-health-tracking-app-dashboard-with-glucose-t.jpg",
      problem:
        "Supporting a diabetic family member with dementia required accurate, consistent insulin management. Existing apps were designed for individual use and lacked features for remote monitoring or shared accountability among caregivers and healthcare professionals.",
      solution:
        "Developed a health tracking app that enables remote support for insulin administration. The system allows caregivers to log doses in real time, share data securely with both family members and healthcare professionals, and visualise glucose trends through clear, accessible charts.",
      outcome:
        "Improved coordination between 3 caregivers and family members, ensuring accurate dose delivery and better oversight. Enabled healthcare professionals to access shared data for review, improving treatment adjustments and patient safety.",
      tech: ["React", "Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
    },
    {
      title: "Interactive Learning Tools",
      company: "EdTech Suite",
      year: "2023–2024",
      image: "/interactive-computer-science-learning-tools-dashboar.jpg",
      problem:
        "Abstract Computer Science concepts like algorithms, binary systems, and logic gates were difficult for students to grasp through traditional teaching methods. Students needed hands-on, visual tools to experiment and build intuition around these fundamental concepts.",
      solution:
        "Designed and developed a suite of lightweight, web-based interactive applications: FlowChart Builder for teaching programming logic and control flow, Binary Learner for number system conversions, Sorting Visualiser with animated algorithm demonstrations, and Logic Gate Simulator with drag-and-drop circuit building.",
      outcome:
        "Made complex CS concepts tangible and accessible for students through interactive visualization. Adopted across multiple classrooms with increased student engagement and comprehension of abstract topics by 40%.",
      tech: ["React", "TypeScript", "Canvas API", "D3.js", "Tailwind CSS"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-20">
        <div className="mb-16 space-y-4">
          <h1 className="text-4xl font-light tracking-tight text-foreground md:text-5xl">Selected Work</h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            A selection of projects where I've applied design thinking, data insight, and product strategy to solve
            real-world problems.
          </p>
        </div>
        <div className="space-y-32 md:space-y-40">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} index={index} />
          ))}
        </div>
      </main>
    </div>
  )
}

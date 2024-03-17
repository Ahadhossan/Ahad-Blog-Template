import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "300+ Projects Completed",
    "1+ Years Experience",
    "99% Client Satisfaction",
    "Authored In-Depth Course on Educative",
    "Contributed as a Technical Course Reviewer 📝",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}

import type { V2_MetaFunction } from "@remix-run/node";
import PomodoroSection from "~/components/pomodoro-section";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Pomo-Duo" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-matte-red">
      <div
        className="flex flex-col"
        style={{
          flex: "0.5 1 0px",
          maxWidth: "400px",
          // display: "none"
        }}
      ></div>
      <div id="pomodoro-container" className="flex flex-col flex-1 min-h-screen">
        <PomodoroSection />
      </div>
      <div 
        className="flex flex-col flex-1"
        style={{
          flex: "0.5 1 0px",
          maxWidth: "400px",
          // display: "none"
        }}
      ></div>
    </div>
  );
}

import { pageTransitionAnim } from "@/lib/animate";
import { MotionPage } from "@/components/motionPage";

export default function Home() {
  return (
    <MotionPage
      initial="hide"
      animate="show"
      exit="hide"
      variants={pageTransitionAnim}
    >
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Hello world!</h1>
      </main>
    </MotionPage>
  );
}

import SpeakSttTool from "@/components/SpeakSttTool";

export const metadata = {
  title: "Speech to text — Knowledge Explorer",
  description:
    "Pure English speech to text: live mic, record a clip, or upload an audio file.",
};

export default function SpeechToTextPage() {
  return <SpeakSttTool />;
}

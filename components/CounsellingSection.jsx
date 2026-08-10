import { Users, MessageCircleQuestion, ChevronRight } from "lucide-react";

const LINKS_EXPERT = ["Engineering UG", "Medicine UG"];
const LINKS_QNA = ["Ask Now", "Browse QnA"];

export default function CounsellingSection() {
  return (
    <section className="mb-14">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal m-0">Counselling</h2>
        <p className="font-body text-sm text-charcoal opacity-60 mt-3 leading-relaxed m-0">
          We ease your biggest doubts with personalised video counselling from our
          curated experts, and answers from the student community.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="hidden lg:block rounded-3xl bg-yellow-50 h-full min-h-[300px] overflow-hidden">
          <svg viewBox="0 0 420 320" className="w-full h-full">
            <circle cx="60" cy="50" r="26" fill="#ffffff" opacity="0.6" />
            <circle cx="340" cy="40" r="18" fill="#ffffff" opacity="0.5" />
            <circle cx="200" cy="30" r="14" fill="#ffffff" opacity="0.5" />
            <path d="M -10 300 C 80 260, 100 220, 160 190 S 230 140, 210 110" fill="none" stroke="#E9D9A6" strokeWidth="10" strokeLinecap="round" />
            <path d="M 430 300 C 340 260, 320 220, 260 190 S 200 140, 215 110" fill="none" stroke="#E9D9A6" strokeWidth="10" strokeLinecap="round" />
            <g opacity="0.35">
              <rect x="30" y="150" width="70" height="60" fill="#C9962C" />
              <polygon points="30,150 65,120 100,150" fill="#C9962C" />
              <rect x="310" y="160" width="60" height="55" fill="#8A6200" />
              <polygon points="310,160 340,135 370,160" fill="#8A6200" />
            </g>
            <g>
              <rect x="150" y="95" width="120" height="80" rx="2" fill="#2E2F31" />
              <polygon points="150,95 210,60 270,95" fill="#2E2F31" />
              <rect x="200" y="70" width="20" height="26" fill="#2E2F31" />
              {[0, 1, 2, 3].map((row) =>
                [0, 1, 2, 3, 4].map((col) => (
                  <rect
                    key={row + "-" + col}
                    x={160 + col * 20}
                    y={110 + row * 15}
                    width="10"
                    height="10"
                    fill="#F9B929"
                    opacity="0.85"
                  />
                ))
              )}
              <rect x="198" y="155" width="24" height="20" fill="#F9B929" />
            </g>
            <circle cx="130" cy="185" r="12" fill="#166534" opacity="0.7" />
            <rect x="127" y="195" width="6" height="12" fill="#7C4A1E" opacity="0.7" />
            <circle cx="292" cy="188" r="12" fill="#166534" opacity="0.7" />
            <rect x="289" y="198" width="6" height="12" fill="#7C4A1E" opacity="0.7" />
            <g transform="translate(150, 250)">
              <circle cx="0" cy="0" r="9" fill="#2E2F31" />
              <rect x="-8" y="9" width="16" height="26" rx="6" fill="#F9B929" />
              <rect x="-7" y="35" width="6" height="18" fill="#2E2F31" />
              <rect x="3" y="35" width="6" height="18" fill="#2E2F31" />
              <circle cx="26" cy="-4" r="10" fill="#2E2F31" />
              <rect x="17" y="6" width="18" height="30" rx="7" fill="#2E2F31" />
              <rect x="18" y="36" width="7" height="20" fill="#55565A" />
              <rect x="29" y="36" width="7" height="20" fill="#55565A" />
              <line x1="9" y1="18" x2="19" y2="14" stroke="#2E2F31" strokeWidth="4" strokeLinecap="round" />
            </g>
            <rect x="80" y="240" width="3" height="24" fill="#8A6200" opacity="0.6" />
            <rect x="72" y="232" width="19" height="12" rx="2" fill="#ffffff" opacity="0.8" />
            <rect x="330" y="235" width="3" height="24" fill="#8A6200" opacity="0.6" />
            <rect x="322" y="227" width="19" height="12" rx="2" fill="#ffffff" opacity="0.8" />
          </svg>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-2xl border border-charcoal/10 p-6 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                <Users size={20} color="#8A6200" strokeWidth={2} />
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal m-0">Expert Counselling</h3>
            </div>
            <p className="font-body text-sm text-charcoal opacity-60 leading-relaxed mb-4 m-0">
              Get personalised guidance from expert counsellors, choose your stream to get started.
            </p>
            <div className="flex flex-wrap gap-5">
              {LINKS_EXPERT.map((l) => (
                <a key={l} href="#" className="flex items-center gap-1.5 font-heading font-bold text-xs uppercase tracking-wide text-green-800 no-underline hover:opacity-80">
                  {l}
                  <span className="w-5 h-5 rounded-full bg-green-800 flex items-center justify-center">
                    <ChevronRight size={12} color="#fff" strokeWidth={3} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-charcoal/10 p-6 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                <MessageCircleQuestion size={20} color="#8A6200" strokeWidth={2} />
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal m-0">QnA</h3>
            </div>
            <p className="font-body text-sm text-charcoal opacity-60 leading-relaxed mb-4 m-0">
              1 million+ questions answered by the student community, within 24 hours each.
            </p>
            <div className="flex flex-wrap gap-5">
              {LINKS_QNA.map((l) => (
                <a key={l} href="#" className="flex items-center gap-1.5 font-heading font-bold text-xs uppercase tracking-wide text-green-800 no-underline hover:opacity-80">
                  {l}
                  <span className="w-5 h-5 rounded-full bg-green-800 flex items-center justify-center">
                    <ChevronRight size={12} color="#fff" strokeWidth={3} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




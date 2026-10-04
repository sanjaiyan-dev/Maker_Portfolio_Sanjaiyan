export const Website_IndexPage = () => {
  return (
    <>
      <div className="min-h-screen bg-[#080808] text-[#e0e0e0] font-sans selection:bg-orange-500/30">
        <div className="relative min-h-[200vh]">
          <div
            className="w-full flex p-3 flex-col items-center justify-center mb-0 relative"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="relative p-6 px-12 rounded-2xl border border-orange-500/40 bg-orange-500/10 overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.15)] group hover:border-orange-500/80 transition-colors">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
                style={{ transform: "translateX(3.8%)" }}
              ></div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="relative flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-400 absolute animate-ping"></div>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-orange-400 font-bold drop-shadow-md">
                    Something Big is Coming Soon
                  </h3>
                  <p className="text-[11px] opacity-70 font-mono mt-2 text-white">
                    Finetuning LLM for தமிழ்
                  </p>
                </div>
              </div>
            </div>
            <div className="h-12 w-[2px] bg-gradient-to-b from-orange-500/50 to-transparent mt-4"></div>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30 select-none">
              <div className="absolute text-6xl font-serif left-[15%] top-[20%] text-neutral-600 animate-pulse translate-y-full">
                A
              </div>
              <div className="absolute text-7xl font-serif right-[20%] top-[15%] text-neutral-500 animate-pulse -translate-y-1/2">
                漢
              </div>
              <div className="absolute text-5xl font-serif left-[25%] bottom-[20%] text-neutral-600 animate-pulse translate-y-[75%]">
                あ
              </div>
              <div className="absolute text-8xl font-serif right-[15%] bottom-[30%] text-neutral-700 animate-pulse translate-y-full">
                අ
              </div>
              <div className="absolute text-5xl font-serif left-[40%] top-[10%] text-neutral-500 animate-pulse -translate-y-1/2">
                א
              </div>
              <div className="absolute text-6xl font-serif right-[40%] top-[25%] text-neutral-600 animate-pulse translate-y-[75%]">
                Ω
              </div>
              <div className="absolute text-5xl font-serif left-[10%] bottom-[40%] text-neutral-500 animate-pulse translate-y-full">
                어
              </div>
              <div className="absolute text-7xl font-serif right-[10%] top-[40%] text-neutral-600 animate-pulse -translate-y-1/2">
                ゑ
              </div>
            </div>
            <div
              className="relative z-10 flex flex-col items-center"
              style={{ opacity: 1, transform: "scale(2)" }}
            >
              <div
                className="text-[12rem] md:text-[18rem] leading-none font-serif text-orange-500 drop-shadow-[0_0_50px_rgba(249,115,22,0.4)]"
                style={{
                  transform: "translateY(-8.837789px) rotateZ(8.11614deg)",
                }}
              >
                அ
              </div>
              <div className="flex items-center space-x-6 mt-8">
                <div className="h-[1px] w-12 bg-orange-500"></div>
                <span className="text-[11px] uppercase tracking-[0.5em] font-medium text-[#e0e0e0] animate-bounce text-center">
                  யாதும் ஊரே யாவரும் கேளிர்
                </span>
                <div className="h-[1px] w-12 bg-orange-500"></div>
              </div>
              <p className="mt-4 text-xs opacity-50 font-mono tracking-widest uppercase">
                To us, all towns are one, all men our kin
              </p>
            </div>
            <div
              className="absolute z-20"
              style={{
                opacity: 0,
                transform: "translateY(-16.666667px) scale(0.833333)",
              }}
            >
              <h1 className="text-8xl md:text-[10rem] font-bold leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600 drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                தமிழ்
              </h1>
            </div>
          </div>
          <div className="relative z-30 bg-[#080808]/80 backdrop-blur-lg pb-32 overflow-x-clip rounded-3xl">
            <div className="absolute -top-64 w-64 h-64 md:w-96 md:h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-32  w-60 h-60 md:w-80 md:h-80  bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <a
                  href="/hugging-face/Tamil-Digital-Heritage-Corpus"
                  className="group"
                >
                  <div
                    className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-orange-500/50 transition-all cursor-pointer h-full flex flex-col relative overflow-hidden"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] px-2 py-1 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded">
                        Hugging Face
                      </span>
                      <span className="text-xs font-mono opacity-30">
                        01/03
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      Digital Heritage Corpus
                    </h3>
                    <p className="text-xs opacity-50 mb-8 leading-relaxed max-w-[200px] flex-grow">
                      A massive curated dataset of ancient manuscripts and
                      contemporary literature.
                    </p>
                    <div className="w-full bg-white/5 h-1 overflow-hidden">
                      <div className="bg-orange-500 w-2/3 h-full"></div>
                    </div>
                  </div>
                </a>
                <a
                  target="__blank"
                  href="https://github.com/digital-tamil/thiruppugazh-sandhi-rs"
                  className="group"
                >
                  <div
                    className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-orange-500/50 transition-all cursor-pointer h-full flex flex-col relative overflow-hidden"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">
                        GitHub
                      </span>
                      <span className="text-xs font-mono opacity-30">
                        02/03
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      Thiruppugazh Sandhi
                    </h3>
                    <p className="text-xs opacity-50 mb-8 leading-relaxed max-w-[200px] flex-grow">
                      Sophisticated rule-based sandhi decomposition tool for
                      Tamil poetry.
                    </p>
                    <div className="flex space-x-2 items-center">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      <span className="text-[10px] uppercase tracking-wider opacity-60">
                        Active Build
                      </span>
                    </div>
                  </div>
                </a>
                <a href="/tamil-simple-ocr" className="group">
                  <div
                    className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-orange-500/50 transition-all cursor-pointer h-full flex flex-col relative overflow-hidden"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] px-2 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded">
                        GitHub
                      </span>
                      <span className="text-xs font-mono opacity-30">
                        03/03
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      Tamil Simple OCR
                    </h3>
                    <p className="text-xs opacity-50 mb-8 leading-relaxed max-w-[200px] flex-grow">
                      Minimalist, high-accuracy optical character recognition
                      for Tamil scripts.
                    </p>
                    <div className="text-[10px] font-mono opacity-40">
                      97.3% Accuracy
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

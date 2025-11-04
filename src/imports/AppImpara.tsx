import svgPaths from "./svg-yk85tkpywy";
import imgImmaginePng51 from "figma:asset/cbd1c65a7862bf4bc5c093eae19fa4c90fa95803.png";

function ChevronBackward() {
  return (
    <div className="absolute left-[35px] size-[66px] top-[121px]" data-name="chevron_backward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="chevron_backward">
          <path d={svgPaths.p30740ff0} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function TitoloIndietro() {
  return (
    <div className="absolute contents left-0 top-[101px]" data-name="Titolo + Indietro">
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[107px] justify-center leading-[0] left-[347.5px] text-[#323232] text-[40px] text-center top-[154.5px] tracking-[-1.2px] translate-x-[-50%] translate-y-[-50%] w-[695px]">
        <p className="leading-[normal]">Impara</p>
      </div>
      <ChevronBackward />
    </div>
  );
}

function Volume2() {
  return (
    <div className="absolute left-[378px] size-[48px] top-[1293px]" data-name="Volume 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Volume 2">
          <path d={svgPaths.pc21b300} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function PulsanteSuono() {
  return (
    <div className="absolute contents left-[278px] top-[1265px]" data-name="Pulsante suono">
      <div className="absolute bg-[#0470f9] h-[103px] left-[278px] rounded-[51.5px] top-[1265px] w-[366px]" />
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[39px] justify-center leading-[0] left-[492px] text-[30px] text-center text-white top-[1316.5px] tracking-[-0.9px] translate-x-[-50%] translate-y-[-50%] w-[106px]">
        <p className="leading-[normal]">Suono</p>
      </div>
      <Volume2 />
    </div>
  );
}

function PulsantiBassi() {
  return (
    <div className="absolute contents left-[29px] top-[1265px]" data-name="Pulsanti bassi">
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[39px] justify-center leading-[0] left-[167.5px] text-[30px] text-black text-center top-[1316.5px] tracking-[-0.9px] translate-x-[-50%] translate-y-[-50%] w-[277px]">
        <p className="leading-[normal]">Next</p>
      </div>
      <PulsanteSuono />
    </div>
  );
}

function Impara() {
  return (
    <div className="absolute contents left-0 top-[101px]" data-name="Impara">
      <TitoloIndietro />
      <div className="absolute bg-[#f2f2f2] h-[103px] left-[74px] rounded-[51.5px] top-[1265px] w-[187px]" />
      <PulsantiBassi />
    </div>
  );
}

function CampoDiTesto() {
  return (
    <div className="absolute contents left-[161px] top-[1061px]" data-name="Campo di testo">
      <div className="absolute bg-black h-[4px] left-[161px] rounded-[7px] top-[1126px] w-[376px]" />
      <div className="absolute bg-black h-[54px] left-[348px] rounded-[2.5px] top-[1061px] w-[2px]" />
    </div>
  );
}

function Scrivi() {
  return (
    <div className="absolute contents left-[22px] top-[896px]" data-name="Scrivi">
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[136px] justify-center leading-[0] left-[349px] text-[50px] text-black text-center top-[964px] tracking-[-1.5px] translate-x-[-50%] translate-y-[-50%] w-[654px]">
        <p className="leading-[normal]">Scrivi la parola</p>
      </div>
      <CampoDiTesto />
    </div>
  );
}

function ParoleDiSfondo() {
  return (
    <div className="absolute contents font-bold leading-[0] left-[-60px] text-[#e7e3e3] text-[50px] text-center top-[33px] tracking-[-1.5px]" data-name="parole di sfondo">
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] h-[98px] justify-center left-[644px] top-[830px] translate-x-[-50%] translate-y-[-50%] w-[234px]">
        <p className="leading-[normal]">Hello</p>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold','Noto_Sans_JP:Bold',sans-serif] h-[98px] justify-center left-[364.5px] top-[820px] translate-x-[-50%] translate-y-[-50%] w-[255px]">
        <p className="leading-[normal]">こんにちは</p>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] h-[98px] justify-center left-[67px] top-[691px] translate-x-[-50%] translate-y-[-50%] w-[234px]">
        <p className="leading-[normal]">Salut</p>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] h-[98px] justify-center left-[57px] top-[888px] translate-x-[-50%] translate-y-[-50%] w-[234px]">
        <p className="leading-[normal]">Hola</p>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] h-[98px] justify-center left-[174px] top-[255px] translate-x-[-50%] translate-y-[-50%] w-[234px]">
        <p className="leading-[normal]">Hallo</p>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] h-[98px] justify-center left-[501px] top-[221px] translate-x-[-50%] translate-y-[-50%] w-[234px]">
        <p className="leading-[normal]">Olà</p>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold','Noto_Sans_JP:Bold',sans-serif] h-[98px] justify-center left-[579px] top-[100px] translate-x-[-50%] translate-y-[-50%] w-[234px]">
        <p className="leading-[normal]">你好</p>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold','Noto_Sans_Arabic:Bold',sans-serif] h-[98px] justify-center left-[194px] top-[82px] translate-x-[-50%] translate-y-[-50%] w-[234px]">
        <p className="leading-[normal]" dir="auto">
          مرحبا
        </p>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold','Noto_Sans_Devanagari:Bold',sans-serif] h-[98px] justify-center left-[361px] top-[296px] translate-x-[-50%] translate-y-[-50%] w-[234px]">
        <p className="leading-[normal]" dir="auto">
          नमस्ते
        </p>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold','Noto_Sans_KR:Bold',sans-serif] h-[98px] justify-center left-[619.5px] top-[1217px] translate-x-[-50%] translate-y-[-50%] w-[255px]">
        <p className="leading-[normal]">안녕하세요</p>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] h-[98px] justify-center left-[96.5px] top-[1039px] translate-x-[-50%] translate-y-[-50%] w-[255px]">
        <p className="leading-[normal]">Hoi</p>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold','Noto_Sans:Bold',sans-serif] h-[98px] justify-center left-[109.5px] top-[1198px] translate-x-[-50%] translate-y-[-50%] w-[255px]">
        <p className="leading-[normal]">Γεια σου</p>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] h-[98px] justify-center left-[643.5px] top-[1022px] translate-x-[-50%] translate-y-[-50%] w-[255px]">
        <p className="leading-[normal]">Cześć</p>
      </div>
    </div>
  );
}

export default function AppImpara() {
  return (
    <div className="bg-[#f2f2f2] relative size-full" data-name="App Impara">
      <Impara />
      <Scrivi />
      <ParoleDiSfondo />
      <div className="absolute h-[901px] left-[-336px] pointer-events-none top-[124px] w-[1352px]" data-name="Immagine PNG 5 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgImmaginePng51} />
        <div className="absolute inset-0 shadow-[0px_-70px_150px_0px_inset_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}
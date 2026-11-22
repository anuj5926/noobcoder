import { markPaths } from "@/components/brand/LogoMark";

const skipScript = `try{if(sessionStorage.getItem('nct-loaded')){document.documentElement.classList.add('loader-done')}else{sessionStorage.setItem('nct-loaded','1')}}catch(e){}`;

export function Loader() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: skipScript }} />
      <div className="site-loader" aria-hidden="true">
        <div className="site-loader__inner">
          <svg viewBox="0 0 64 64" className="site-loader__mark">
            <path className="site-loader__left" d={markPaths.left} fill="#FFFFFF" />
            <path className="site-loader__slash" d={markPaths.slash} fill="#C6FF4D" />
            <path className="site-loader__right" d={markPaths.right} fill="#FFFFFF" />
          </svg>
          <div className="site-loader__bar">
            <span />
          </div>
          <p className="site-loader__label">Noob Coders Team</p>
        </div>
      </div>
    </>
  );
}

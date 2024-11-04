import { FC, ReactNode, useEffect } from "react";

interface HotjarProps {
  children?: ReactNode;
}

const Support: FC<HotjarProps> = ({ children }) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.innerHTML = `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5194739,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;

    document.getElementsByTagName("head")[0].appendChild(script);
  }, []);

  return <>{children}</>;
};

export default Support;

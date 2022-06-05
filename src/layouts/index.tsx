import { memo } from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layouts: React.FC = (props) => {
  return (
    <div>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default memo(Layouts) as any;

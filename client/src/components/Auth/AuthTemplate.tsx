import React from "react";
import { AuthTemplateBlock, PinkBox } from "./AuthStyle";

type AuthTemplateProps = {
  children: React.ReactNode;
};

const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <AuthTemplateBlock>
      <PinkBox>
        <div className="title">TripMatch</div>
        {children}
      </PinkBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;

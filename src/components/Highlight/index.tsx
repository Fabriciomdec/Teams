import React from "react";

import * as StyleHighlight from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

export const Highlight: React.FC<Props> = ({title, subtitle}) => {
  return (
    <StyleHighlight.Container>
      <StyleHighlight.Title>{title}</StyleHighlight.Title>
      <StyleHighlight.SubTitle>{subtitle}</StyleHighlight.SubTitle>
    </StyleHighlight.Container>
  );
};

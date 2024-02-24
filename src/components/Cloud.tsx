import React from "react";
import ReactWordcloud from "react-wordcloud";

interface Word {
  text: string;
  value: number;
}

interface WordCloudProps {
  words: Word[];
}

const Cloud: React.FC<WordCloudProps> = ({ words }) => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ReactWordcloud words={words} />
    </div>
  );
};

export default Cloud;
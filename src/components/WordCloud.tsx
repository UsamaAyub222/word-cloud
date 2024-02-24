import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_SENTECES } from "../gqlOperations/queries";
import {
  INSERT_SENTENCE,
  DELETE_ALL_SENTENCE,
} from "../gqlOperations/mutations";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
interface Word {
  text: string;
  value: number;
}

const words: Word[] = [
  {
    text: "told",
    value: 64,
  }
];

const WordCloud = () => {
  const [textArea, setTextArea] = useState<string>();
  const [sentence, setSentence] = useState<any>();

  // const get = useQuery(GET_ALL_SENTECES);
  const [insertSentence, { data, error, loading }] =
    useMutation(INSERT_SENTENCE);
  const [SentenceDelController, deleteData] = useMutation(DELETE_ALL_SENTENCE);
  const handleInsert = () => {
    console.log(textArea);
    const splitString: any = textArea?.split("\n");
    let dataArray: any = [];
    for (let i = 0; i <= splitString?.length; i++) {
      if (splitString[i] !== undefined) {
        dataArray.push({ sentence: splitString[i] });
      }
    }
    console.log(dataArray);
    insertSentence({
      variables: {
        data: dataArray,
      },
    });
  };
  const handleDelete = () => {
    SentenceDelController();
  };

  useEffect(() => {
    // getAllSentences();
  }, []);
  return (
    <div>
      <textarea
        className="w-full border border-gray-300 rounded p-2 resize-none focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter text..."
        rows={4}
        onChange={(event: any) => setTextArea(event.target.value)}
      ></textarea>
      <div className="flex">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleInsert}
        >
          Add
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={handleDelete}
        >
          Clear
        </button>
      </div>
      <div style={{ width: "100%", height: "400px" }}>
        {/* <ReactWordcloud words={words} /> */}
      </div>
    </div>
  );
};

export default WordCloud;

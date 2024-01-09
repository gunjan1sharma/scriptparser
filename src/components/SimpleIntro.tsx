import { Button } from "@mui/material";
import { useRef } from "react";
import { SimpleIntroProps } from "../extras/types";

function SimpleIntro(props: SimpleIntroProps) {
  const targetDivRef = useRef();

  return (
    <div className="flex flex-col p-16 h-fit bg-gradient-to-r from-yellow-200 via-gray-100 to-yellow-200">
      <h3 className="font-bold">
        {props.tag !== null ? props.tag : "FREE TOOLS"}
      </h3>
      <h1 className="font-bold text-6xl md:mt-5 md:mb-5 md:m-0 m-3 md:w-full w-72">
        {props.heading}
      </h1>
          <h4 className="text-2xl mb-6 mt-2">{props.subtitle}</h4>
      <Button
        sx={{
          backgroundColor: "black",
          borderRadius: "50px",
          width: "200px",
          height: "55px",
          fontWeight: "bold",
          marginBottom: "50px",
        }}
        variant="contained"
      >
       {props.btntext}
      </Button>
    </div>
  );
}

export default SimpleIntro;

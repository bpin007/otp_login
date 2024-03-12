import React, { useEffect, useRef, useState } from "react";

const OtpInputBox = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];

    //allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    console.log(newOtp);
    if (combinedOtp.length == length) onOtpSubmit(combinedOtp);

    //move to next input if current field is filled
    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleclick = (index) => {
    inputRef.current[index].setSelectionRange(1, 1);

    //validation
    if (index > 0 && !otp[index - 1]) {
      inputRef.current[otp.indexOf("").focus()];
    }
  };
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      //Move focus to previous input field on backspace
      inputRef.current[index - 1].focus();
    }
  };

  //submit trigger

  const inputRef = useRef([]);
  //   console.log(inputRef);
  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            ref={(input) => (inputRef.current[index] = input)}
            value={value}
            key={index}
            type="text"
            onChange={(e) => handleInputChange(e, index)}
            onClick={() => handleclick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput"
          />
        );
      })}
    </div>
  );
};

export default OtpInputBox;

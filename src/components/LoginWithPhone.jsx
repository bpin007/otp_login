import React, { useState } from "react";
import OtpInputBox from "./OtpInputBox";

const LoginWithPhone = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const handleChange = (e) => {
    setPhoneNo(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNo.length < 10 || regex.test(phoneNo)) {
      return alert("invalid phone number");
    }
    setShowOtp(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("successfully submmited", otp);
  };

  return (
    <div>
      {!showOtp ? (
        <form onSubmit={handleClick}>
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            value={phoneNo}
            onChange={handleChange}
          />
          <button type="submit">Submmit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNo}</p>
          <OtpInputBox length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default LoginWithPhone;

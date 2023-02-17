import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(
      `Submitted username: ${username}, password: ${password}, email: ${email}`
    );
  };

  return (
    <div id="signup-tab-content" class="tabcontent" style={{ display: "block" }}>
      <form class="signup-form" action="" method="post" onSubmit={handleSubmit} >
        <input type="email" class="input" id="user_email" autocomplete="off" placeholder="Email" value={email} onChange={handleEmailChange} />
        <input type="text" class="input" id="user_name" autocomplete="off" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <input type="password" class="input" id="user_pass" autocomplete="off" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        <input type="submit" class="button" value="Sign Up" />
      </form>
      <div class="help-text">
        <p>By signing up, you agree to our</p>
        <p>
          <a href="#">Terms of service</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;

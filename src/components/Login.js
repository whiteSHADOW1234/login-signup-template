import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would make an API call to verify the user's credentials
    console.log(`Submitted username: ${username}, password: ${password}`);
  };

  return (
    <div id="login-tab-content" class="tabcontent">
      <form class="login-form" action="" method="post" onSubmit={handleSubmit}>
        <input type="text" class="input" id="user_login" autocomplete="off" placeholder="Username" value={username} onChange={handleUsernameChange}/>
        <input type="password" class="input" id="user_pass" autocomplete="off" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        <input type="checkbox" class="checkbox" id="remember_me" />
        <label for="remember_me">Remember me</label>

        <input type="submit" class="button" value="Login" />
      </form>
      <div class="help-text">
        <p>
          <a href="#">Forget your password?</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

import styled from "styled-components";

export const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
  * {
    font-family: "Poppins", sans-serif;
  }
  h1 {
    text-align: center;
    text-decoration: underline;
    letter-spacing: 0.1em;
  }
  p {
    text-align: center;
  }
  .container {
    display: flex;
    flex-direction: column; /* Stack items vertically */
    align-items: center;
    margin: auto auto;
    margin-top: 12em;
    padding: auto 10em;
  }
  .logo {
    width: 13em;
    margin: auto auto;
    cursor: pointer;
  }
  .register-btn {
    text-decoration: underline;
  }
`;

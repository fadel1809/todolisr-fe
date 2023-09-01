import styled from "styled-components";

export const Wrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
  * {
    font-family: "Poppins", sans-serif;
  }
  .container {
    display: flex;
    flex-direction: column; /* Stack items vertically */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    height: 90vh;
    margin: auto auto;
  }
  .error {
    display: inline-block;
    justify-content: center; /* horizontally center */
    text-align: center;
  }
  .text {
    display: block;
    margin-top: 10px;
  }
`;

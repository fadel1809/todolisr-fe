import styled from "styled-components";

export const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
  * {
    font-family: "Poppins", sans-serif;
  }
  .image-container {
    display: block;
    justify-content: center; /* horizontally center */
    text-align: center;
  }

  .image {
    max-width: 120%; /* Ensure the image doesn't exceed its original width */
  }
  .custom-shape-divider-bottom-1693147666 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1693147666 svg {
    position: relative;
    display: block;
    width: calc(122% + 1.3px);
    height: 124px;
  }

  .custom-shape-divider-bottom-1693147666 .shape-fill {
    fill: #ff5555;
  }
  @media (max-width: 1027px) {
    .image {
      /* Styles for screens up to 768px wide */
      display: none;
    }
    .image-container {
      display: inline-block;
    }
    .text-container {
      text-align: center;
    }
  }
`;

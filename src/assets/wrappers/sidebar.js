import styled from "styled-components";

const Wrapper = styled.aside`
  .sidebar-container {
    min-height: 100vh;
  }
  .icon {
    position: relative;
    margin-top: 0.2em;
    padding-right: 0.5em;
  }
  .show-sidebar {
    display: none;
  }
  @media (min-width: 750px) {
    .icon {
      padding-right: auto;
    }
  }
`;

export default Wrapper;

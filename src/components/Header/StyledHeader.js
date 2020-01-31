import styled from "styled-components";

export default styled.header`
  color: ${props => props.theme.colors.white};
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${props => props.theme.main.appBarBg};

  &.root {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    z-index: ${props => props.theme.zIndex.appBar};
    flex-shrink: 0;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.12);
  }

  &.positionFixed {
    position: fixed;
    top: 0;
    left: auto;
    right: 0;

    @media print {
      // Prevent the app bar to be visible on each printed page.
      position: absolute;
    }
  }

  &.positionAbsolute {
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
  }

  &.positionSticky {
    // ⚠️ sticky is not supported by IE 11.
    position: sticky;
    top: 0;
    left: auto;
    right: 0;
  }

  &.positionStatic {
    position: static;
    transform: translateZ(0); // Make sure we can see the elevation.
  }

  &.positionRelative {
    position: relative;
  }
`;

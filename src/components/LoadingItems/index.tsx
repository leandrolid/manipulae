import styled from 'styled-components';

const LoadingContainer = styled.div`
  padding: 20px;
  width: 100%;

  .lightui1Shimmer {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #d8d8d8;
    background-image: linear-gradient(
      to right,
      #d8d8d8 0%,
      #bdbdbd 20%,
      #d8d8d8 40%,
      #d8d8d8 100%
    );
    background-repeat: no-repeat;
    background-size: 800px 104px;
    height: 1rem;
    position: relative;
    border-radius: 5px;
    margin: 0.5rem 0;

    div {
      background: #ffffff;
      height: 6px;
      left: 0;
      position: absolute;
      right: 0;
    }
  }

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  @keyframes prideShimmer {
    from {
      background-position: top left;
    }
    to {
      background-position: top right;
    }
  }
`;

export function Loading() {
  return (
    <LoadingContainer>
      <div className="lightui1Shimmer" />
      <div className="lightui1Shimmer" />
      <div className="lightui1Shimmer" />
      <div className="lightui1Shimmer" />
      <div className="lightui1Shimmer" />
      <div className="lightui1Shimmer" />
      <div className="lightui1Shimmer" />
    </LoadingContainer>
  );
}

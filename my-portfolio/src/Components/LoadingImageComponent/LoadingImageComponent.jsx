import React from 'react'

export const LoadingImageComponent = ({isLoaded}) => {
  return (
    <p
      style={{
        display: `${isLoaded ? "none" : "inline"}`,
        color: "#d2d2d2",
      }}
    >
      Loading image...
    </p>
  );
}

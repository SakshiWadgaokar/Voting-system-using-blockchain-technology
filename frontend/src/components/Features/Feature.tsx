import React from "react";

type FeatureProps = {
  icon: JSX.Element;
  title: string;
  align: "left" | "right";
  children: JSX.Element;
};

const Feature = (props: FeatureProps) => {
  const iconContainer = <div className="icon-container">{props.icon}</div>;

  const featureInfo = (
    <div className="feature-info">
      <div className="title-large">{props.title}</div>
      <div className="text-normal">{props.children}</div>
    </div>
  );
  return (
    <div className="feature-container">
      {props.align === "right" ? (
        <>
          {iconContainer}
          <div className="align-left">{featureInfo}</div>
        </>
      ) : (
        <>
          <div className="align-right">{featureInfo}</div>
          {iconContainer}
        </>
      )}
    </div>
  );
};

export default Feature;

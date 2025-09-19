import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const followerRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    let xp = 0,
      yp = 0,
      xpDot = 0,
      ypDot = 0,
      mouseX = 0,
      mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Big follower
      xp += (mouseX - xp) / 15;
      yp += (mouseY - yp) / 15;

      if (followerRef.current) {
        followerRef.current.style.left = xp + "px";
        followerRef.current.style.top = yp + "px";
      }

      // Small dot
      xpDot += (mouseX - xpDot) / 25;
      ypDot += (mouseY - ypDot) / 25;

      if (dotRef.current) {
        dotRef.current.style.left = xpDot + "px";
        dotRef.current.style.top = ypDot + "px";
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
<div
  ref={dotRef}
  className="cursorFollowerDot bg-gradient-to-r from-[#6cfcb5] to-[#F0FF6C]"
  style={{
    position: "absolute",
    width: "12px",
    height: "12px",
    zIndex: 1,
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",

  }}
></div>


    </>
  );
};

export default CustomCursor;
//
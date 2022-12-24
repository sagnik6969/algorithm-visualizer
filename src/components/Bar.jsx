function Bar({length,id,speed}) {
    return (
      <div
        id={id}
        style={{
         "position":"absolute",
          "transition":`all ${speed}s linear 0s`,
          // "transform": `translateX(${id * 10}px)`,
          "width": "6px",
          height: `${length}px`,
          backgroundColor: "rgb(0, 149, 199)"
        }}
      />
    );
  }
  
  export default Bar;
  
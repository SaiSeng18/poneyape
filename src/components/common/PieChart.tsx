const PieChart = ({ percentage }: { percentage: number }) => {
  // Ensure the percentage is within the valid range
  return (
    <>
      <div className="pie" />
      <style jsx>
        {`
          .pie {
            width: 30px;
            aspect-ratio: 1;
            display: inline-grid;
            position: relative;
            place-content: center;
            margin: 5px;
            font-size: 25px;
            font-weight: bold;
            font-family: sans-serif;
          }

          .pie:before {
            content: "";
            position: absolute;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            inset: 0;
            background: conic-gradient(#E96114 calc(${percentage} * 1%), #0000 0);
          }
        `}
      </style>
    </>
  );
};

export default PieChart;
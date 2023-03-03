import { Box, useMediaQuery } from "@chakra-ui/react";
import { Chart as ChartJS, Tooltip, Arc, Legend, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
)

const PieChart = () => {

    const data = {
        // labels : ["Yes",  "No"],
        datasets: [{
            label: "Progress",
            data: [50,32,6,12],
            backgroundColor:  ['#5bd8eb','#4ba1cc', '#1672f2', '#4b85cc'],
            borderColor: ['#5bd8eb','#4ba1cc', '#1672f2', '#4b85cc']
        }],
    }


    const options = {

    }
    const textCenter = {
        id: "textCenter",
        beforeDatasetsDraw(chart, args, pluginOptions) {
          const { ctx, data } = chart;
          const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
          const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      
          ctx.save();
          ctx.font = "bold 15px sans-serif";
          const text = "$8000";
          const textWidth = ctx.measureText(text).width;
          ctx.fillText(text, centerX - textWidth / 2, centerY + 10);
          ctx.restore();
        },
      };
      const [isSmallScreen] = useMediaQuery("(max-width: 514px)");
  
    return (
        <Box paddingLeft={isSmallScreen ? "28%" : "0"}    
        >
            <Doughnut plugins={[ textCenter ]} data={data} options={options} />
        </Box>
    );
}

export default PieChart;

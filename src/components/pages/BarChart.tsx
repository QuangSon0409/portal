// import React from "react";
import { Box } from "@mui/material";
import { Chart } from "react-google-charts";

export const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
    ["2018", 1200, 640, 450],
    ["2019", 1130, 440, 250],
    ["2020", 1430, 740, 550],
    ["2021", 1330, 940, 400],


];

export const options = {
    chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-202    1",
    },
    colors: ["#358692", "#280BA4", "#14690E"]
};

export function BarChart() {
    return (
        <Box>

            <Chart
                chartType="Bar"
                width="100%"
                height="500px"
                data={data}
                options={options}
            />
        </Box>
    );
}
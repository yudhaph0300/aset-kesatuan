"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function DashboardKomposisiChart() {
  const series = [10, 20, 30, 40]; // contoh data
  const totalValue = series.reduce((a, b) => a + b, 0);

  const [options] = useState({
    chart: {
      type: "donut",
    },
    colors: ["#FFB74D", "#42A5F5", "#9575CD", "#FF8A80"],

    stroke: {
      width: 0,
    },

    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              show: true,
              fontSize: "22px",
              fontWeight: 700, // tambah tebal
              color: "#000",
            },

            total: {
              show: true,
              showAlways: false,
              label: "Total Aset",
              fontSize: "14px",
              fontWeight: 400,
              color: "#777",
              formatter: () => totalValue,
            },
          },
        },
      },
    },

    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      markers: {
        width: 12,
        height: 12,
        radius: 12,
      },
      fontSize: "14px",
    },

    dataLabels: {
      enabled: false,
    },
  });
  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={300}
      />
    </>
  );
}

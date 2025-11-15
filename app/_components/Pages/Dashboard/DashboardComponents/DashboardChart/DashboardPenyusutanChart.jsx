"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function DashboardPenyusutanChart() {
  const tahun = ["2019", "2020", "2021", "2022", "2023", "2024"];
  const nilaiPenyusutan = [30, 45, 60, 80, 90, 120]; // contoh data

  const [options] = useState({
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },

    markers: {
      size: 5,
      strokeWidth: 2,
    },

    xaxis: {
      categories: tahun,
      title: { text: "Tahun" },
    },

    yaxis: {
      title: { text: "Jumlah Penyusutan" },
    },

    colors: ["#42A5F5"],

    tooltip: {
      y: {
        formatter: (val) => `${val} juta`,
      },
    },

    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
    },
  });

  const series = [
    {
      name: "Penyusutan",
      data: nilaiPenyusutan,
    },
  ];
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={300}
    />
  );
}

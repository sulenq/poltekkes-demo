import {
  Box,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Circle } from "@phosphor-icons/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function AdminDashboardsAnalisaTransaksi() {
  const bg = useColorModeValue("white", "dark");

  const data = [12, 10, 8, 11];
  const labels = Array.from({ length: data.length }, (_, index) => index + 1);
  const xLabel = "Minggu ke-";
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Transaksi",
        data: data,
        backgroundColor: "#ffffff",
        borderColor: "#2dc653",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xLabel,
        },
        grid: {
          color: "#b4b4b450",
        },
      },
      y: {
        grid: {
          color: "#b4b4b450",
        },
      },
    },
  };

  return (
    <Box
      borderRadius={16}
      p={[4, 6, 6]}
      bg={bg}
      overflow={"auto"}
    >
      <SimpleGrid
        mb={4}
        columns={[1, 2, 2]}
        gap={[0, 2, 2]}
      >
        <Text
          fontSize={[18, null, 20]}
          fontWeight={600}
          lineHeight={1.3}
        >
          Analisa Transaksi
        </Text>

        <HStack justifySelf={["flex-start", "flex-end", "flex-end"]}>
          <Icon
            as={Circle}
            weight={"fill"}
            color={"p.600"}
          />

          <Text fontSize={[10, null, 12]}>total transaksi</Text>
        </HStack>
      </SimpleGrid>

      <Box>
        <Line
          data={chartData}
          options={options}
        />
      </Box>
    </Box>
  );
}

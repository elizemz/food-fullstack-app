import React, { useContext } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import {
  Schedule,
  ImportContactsOutlined,
  RiceBowl,
  Key,
} from "@mui/icons-material";
import Image from "next/image";
import { FoodContext } from "@/context";

const InfoData = [
  {
    id: 9,
    icon: <ImportContactsOutlined sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Хүргэлтийн төлөв хянах",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    id: 10,
    icon: <Schedule sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Шуурхай хүргэлт",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    id: 11,
    icon: <RiceBowl sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Эрүүл, баталгаат орц",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    id: 12,
    icon: <ImportContactsOutlined sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Хоолны өргөн сонголт",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
];
type Props = {
  data: {
    _id: string;
    name: string;
    price: number;
    discountPrice?: number;
    isSale: undefined | boolean;
    image: string;
  };
};

export const InfoCard = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        gap: 50,
      }}
    >
      {InfoData.map((data) => (
        <Card
          key={data.id}
          sx={{ width: "100%", borderRadius: 3, boxShadow: 3 }}
        >
          <CardContent>
            {data.icon}
            <Typography
              gutterBottom
              variant="h6"
              sx={{ fontWeight: 600 }}
              component="div"
            >
              {data.name}
            </Typography>
            <Typography>{data.desc}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

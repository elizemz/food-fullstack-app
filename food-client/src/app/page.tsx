"use client";

import { Grid, Container } from "@mui/material";

import Image from "next/image";
import HeroSection from "@/components/Sections/Hero";
import InfoList from "@/components/Sections/InfoList";
import Category from "@/components/pages/CategoryList";
import CategoryList from "@/components/pages/CategoryList";

export default function Home() {
  return (
    <Grid container>
      <HeroSection />
      <div style={{ margin: "auto" }}>
        <InfoList />
        <CategoryList />
      </div>
    </Grid>
  );
}

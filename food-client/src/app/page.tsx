"use client";

import { Grid } from "@mui/material";
import HeroSection from "@/components/Sections/Hero";
import axios from "axios";
import { Dashboard } from "@/components/pages/Dashboard";

export default function Home() {
  return (
    <Grid container>
      <HeroSection />
      <Dashboard />
    </Grid>
  );
}

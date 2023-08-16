import { homeRoute } from "@/router/routes/homeRoute";
import { notFound } from "@/router/routes/notFound";
import type { RouteRecordRaw } from "vue-router";

/**
 * Contains all routes for the project
 */
export const routes: RouteRecordRaw[] = [homeRoute, notFound];

import { data } from "./city-state";

export const state = [...new Set(data.map((item) => item.state))];

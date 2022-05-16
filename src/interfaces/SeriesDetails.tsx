import { Networks } from "./Networks";
import { Providers } from "./Providers";
import { CardDetails } from "./CardDetails";

export interface SeriesDetailsType extends CardDetails {
  original_language: string,
  original_name: string,
  overview: string,
  type: string,
  status: string,
  number_of_seasons: number,
  networks: Networks[],
  providers: Providers[]
}
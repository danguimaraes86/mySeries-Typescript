import { CardDetails } from './CardDetails';
import { Network } from './Network';
import { StreamingProvider } from './StreamingProvider';

export interface SeriesDetails extends CardDetails {
  original_language: string,
  original_name: string,
  overview: string,
  type: string,
  status: string,
  number_of_seasons: number,
  networks: Network[],
  providers: StreamingProvider[]
}
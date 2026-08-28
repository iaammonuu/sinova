import { FORTYGUARD_API_URL } from './config';

export interface TemperatureData {
  location: string;
  temperature: number;
  unit: string;
  timestamp: string;
  status: string;
  aiSignal: string;
  coords: [number, number]; // [longitude, latitude]
}

// Comprehensive global data
const DEMO_DATA: TemperatureData[] = [
  { location: "Mumbai, India", temperature: 31.4, unit: "C", timestamp: new Date().toISOString(), status: "High Heat", aiSignal: "Elevated", coords: [72.8777, 19.0760] },
  { location: "Delhi, India", temperature: 34.2, unit: "C", timestamp: new Date().toISOString(), status: "Extreme", aiSignal: "Critical", coords: [77.1025, 28.7041] },
  { location: "London, UK", temperature: 19.1, unit: "C", timestamp: new Date().toISOString(), status: "Normal", aiSignal: "Stable", coords: [-0.1276, 51.5072] },
  { location: "New York, USA", temperature: 22.5, unit: "C", timestamp: new Date().toISOString(), status: "Normal", aiSignal: "Stable", coords: [-74.0060, 40.7128] },
  { location: "Singapore", temperature: 32.1, unit: "C", timestamp: new Date().toISOString(), status: "High Heat", aiSignal: "Elevated", coords: [103.8198, 1.3521] },
  { location: "Tokyo, Japan", temperature: 28.3, unit: "C", timestamp: new Date().toISOString(), status: "Moderate", aiSignal: "Watch", coords: [139.6917, 35.6895] },
  { location: "Sydney, Australia", temperature: 24.1, unit: "C", timestamp: new Date().toISOString(), status: "Normal", aiSignal: "Stable", coords: [151.2093, -33.8688] },
  { location: "Cape Town, SA", temperature: 18.5, unit: "C", timestamp: new Date().toISOString(), status: "Normal", aiSignal: "Stable", coords: [18.4241, -33.9249] },
  { location: "Cairo, Egypt", temperature: 33.8, unit: "C", timestamp: new Date().toISOString(), status: "Extreme", aiSignal: "Critical", coords: [31.2357, 30.0444] },
  { location: "Rio de Janeiro, BR", temperature: 29.5, unit: "C", timestamp: new Date().toISOString(), status: "High Heat", aiSignal: "Elevated", coords: [-43.1729, -22.9068] },
  { location: "Dubai, UAE", temperature: 38.2, unit: "C", timestamp: new Date().toISOString(), status: "Extreme", aiSignal: "Critical", coords: [55.2708, 25.2048] },
  { location: "Moscow, Russia", temperature: 12.4, unit: "C", timestamp: new Date().toISOString(), status: "Cool", aiSignal: "Stable", coords: [37.6173, 55.7558] },
  { location: "Paris, France", temperature: 21.0, unit: "C", timestamp: new Date().toISOString(), status: "Normal", aiSignal: "Stable", coords: [2.3522, 48.8566] },
  { location: "Beijing, China", temperature: 26.7, unit: "C", timestamp: new Date().toISOString(), status: "Moderate", aiSignal: "Watch", coords: [116.4074, 39.9042] },
  { location: "Los Angeles, USA", temperature: 25.4, unit: "C", timestamp: new Date().toISOString(), status: "Moderate", aiSignal: "Stable", coords: [-118.2437, 34.0522] },
  { location: "Toronto, Canada", temperature: 17.8, unit: "C", timestamp: new Date().toISOString(), status: "Normal", aiSignal: "Stable", coords: [-79.3832, 43.6532] },
  { location: "Lagos, Nigeria", temperature: 31.0, unit: "C", timestamp: new Date().toISOString(), status: "High Heat", aiSignal: "Elevated", coords: [3.3792, 6.5244] },
  { location: "Buenos Aires, AR", temperature: 22.1, unit: "C", timestamp: new Date().toISOString(), status: "Normal", aiSignal: "Stable", coords: [-58.3816, -34.6037] },
  { location: "Seoul, South Korea", temperature: 24.8, unit: "C", timestamp: new Date().toISOString(), status: "Normal", aiSignal: "Stable", coords: [126.9780, 37.5665] },
  { location: "Mexico City, MX", temperature: 23.5, unit: "C", timestamp: new Date().toISOString(), status: "Normal", aiSignal: "Stable", coords: [-99.1332, 19.4326] }
];

export const temperatureService = {
  getGlobalTemperatures: async (): Promise<TemperatureData[]> => {
    // In a real application, we would fetch from the API.
    // For now, we return demo data to ensure the UI is functional.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DEMO_DATA.map(data => ({
          ...data,
          // Add a little randomness to simulate live data
          temperature: +(data.temperature + (Math.random() * 2 - 1)).toFixed(1),
          timestamp: new Date().toISOString()
        })));
      }, 500); // Simulate network latency
    });
  },
  
  getTemperature: async (location: string): Promise<TemperatureData | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = DEMO_DATA.find(d => d.location.includes(location));
        if (data) {
           resolve({
            ...data,
            temperature: +(data.temperature + (Math.random() * 2 - 1)).toFixed(1),
            timestamp: new Date().toISOString()
           });
        } else {
          resolve(null);
        }
      }, 300);
    });
  }
};

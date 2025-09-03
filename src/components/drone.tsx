type DroneCategory = 'agriculture' | 'surveillance' | 'cinematography';

interface Drone {
  id: string;
  name: string;
  category: DroneCategory;
  available: boolean;
  specs: string;
  rentalPricePerDay: number;
  imageUrl: string;
}

export const drones: Drone[] = [
  {
    id: 'AG001',
    name: 'AgriFly X1',
    category: 'agriculture',
    available: true,
    specs: 'Crop spraying, multispectral imaging, GPS mapping',
    rentalPricePerDay: 1500,
    imageUrl: 'https://example.com/images/agriculture-drone.jpg',
  },
  {
    id: 'SV002',
    name: 'SkyEye S2',
    category: 'surveillance',
    available: true,
    specs: 'Thermal camera, night vision, motion tracking',
    rentalPricePerDay: 2000,
    imageUrl: 'https://example.com/images/surveillance-drone.jpg',
  },
  {
    id: 'CM003',
    name: 'CineDrone Pro',
    category: 'cinematography',
    available: false,
    specs: '8K stabilized camera, long flight time, cinematic presets',
    rentalPricePerDay: 3000,
    imageUrl: 'https://example.com/images/cinematography-drone.jpg',
  },
];

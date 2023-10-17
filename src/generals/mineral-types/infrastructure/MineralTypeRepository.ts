import axios, { type AxiosResponse } from 'axios';
import { type MineralTypeResponse } from '../domain';

export const findAll = async (): Promise<AxiosResponse<MineralTypeResponse[]>> =>
	await axios.get<MineralTypeResponse[]>('https://localhost:7025/api/mineraltype');
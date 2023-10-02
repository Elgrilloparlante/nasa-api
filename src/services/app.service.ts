import { Injectable } from '@nestjs/common';
import axios from 'axios';
import APOD from '../interfaces/apod.interface';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private readonly apiKey = process.env.NASA_API_KEY;
  private readonly baseURL: string = 'https://api.nasa.gov/planetary/apod';

  async getAPOD(params: APOD) {
    console.log(params);
    try {
      const response = await axios.get(this.baseURL, {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          api_key: this.apiKey,
          date: params.date,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener datos');
    }
  }
}

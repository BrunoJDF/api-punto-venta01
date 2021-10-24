import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class AppService {
  constructor(@Inject('PG') private clientPg: Client) {}

  getHello(): string {
    return 'Hello World!';
  }

  getConnection() {
    return new Promise((resolve, reject) => {
      this.clientPg.query('select * from product', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      });
    });
  }
}

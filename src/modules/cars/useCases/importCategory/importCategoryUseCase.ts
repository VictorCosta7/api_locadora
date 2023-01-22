import { parse as csvParse } from 'csv-parse';
import fs from 'fs';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRipository: ICategoriesRepository) {}

  async loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const strem = fs.createReadStream(file.path);

      const categories: IImportCategory[] = [];

      const parseFile = csvParse();

      strem.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<string[]> {
    const categories = await this.loadCategories(file);

    const alreadyExists: string[] = [];
    for await (const { name, description } of categories) {
      const category = await this.categoriesRipository.findByName(name);

      if (category) {
        alreadyExists.push(category.name);
        // eslint-disable-next-line no-continue
        continue;
      }

      this.categoriesRipository.create({
        name,
        description,
      });
    }

    // eslint-disable-next-line consistent-return
    return alreadyExists;
  }
}

export { ImportCategoryUseCase };

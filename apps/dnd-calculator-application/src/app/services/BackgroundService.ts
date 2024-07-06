import { mapInitialBackgroundData } from '../mapper/BackgroundMapper';
import { BackgroundRepository } from '../repositories/BackgroundRepository';
import { Logger } from '../utils/Logger';

export class BackgroundService {
  private logger: Logger;
  private backgroundRepository: BackgroundRepository;

  constructor(inheritLogger: Logger) {
    this.logger = inheritLogger;
    this.backgroundRepository = new BackgroundRepository();
  }

  async retrieveAllBackgroundData() {
    try {
      this.logger.info(`Retrieving all background data`);
      const allBackgroundData =
        await this.backgroundRepository.collectAllBackgrounds(this.logger);
      if (!allBackgroundData) {
        this.logger.error(`No background data found`);
        throw new Error(`No background data found`);
      }
      const backgroundData = mapInitialBackgroundData(
        allBackgroundData,
        this.logger
      );
      return backgroundData;
    } catch (err) {
      this.logger.error(`Error retrieving all background data`);
      throw err;
    }
  }
}

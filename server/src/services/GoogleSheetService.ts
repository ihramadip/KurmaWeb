import axios from 'axios';
import { parse } from 'csv-parse/sync';
import { googleSheetsConfig } from '../config/googleSheets';

interface CacheEntry {
  data: any;
  timestamp: number;
}

const cache: Record<string, CacheEntry> = {};

export class GoogleSheetService {
  private static async fetchAndParse(url: string, cacheKey: string) {
    const now = Date.now();
    
    if (cache[cacheKey] && (now - cache[cacheKey].timestamp < googleSheetsConfig.cacheDuration)) {
      return cache[cacheKey].data;
    }

    try {
      const response = await axios.get(url);
      const records = parse(response.data, {
        columns: true,
        skip_empty_lines: true,
      });

      cache[cacheKey] = {
        data: records,
        timestamp: now,
      };

      return records;
    } catch (error) {
      console.error(`Error fetching sheet ${cacheKey}:`, error);
      return cache[cacheKey]?.data || [];
    }
  }

  static async getStats() {
    return this.fetchAndParse(googleSheetsConfig.sheets.stats, 'stats');
  }

  static async getPrograms() {
    return this.fetchAndParse(googleSheetsConfig.sheets.programs, 'programs');
  }

  static async getEvents() {
    return this.fetchAndParse(googleSheetsConfig.sheets.events, 'events');
  }

  static async getTeam() {
    return this.fetchAndParse(googleSheetsConfig.sheets.team, 'team');
  }

  static async getContacts() {
    return this.fetchAndParse(googleSheetsConfig.sheets.contacts, 'contacts');
  }

  static async getValues() {
    return this.fetchAndParse(googleSheetsConfig.sheets.values, 'values');
  }

  static async getAllData() {
    const [stats, programs, events, team, contacts, values] = await Promise.all([
      this.getStats(),
      this.getPrograms(),
      this.getEvents(),
      this.getTeam(),
      this.getContacts(),
      this.getValues(),
    ]);

    return {
      stats,
      programs,
      events,
      team,
      contacts,
      values,
    };
  }
}

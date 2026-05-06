import axios from 'axios';
import { googleSheetsConfig, parseCSV } from './googleSheets';

/**
 * Service to fetch and parse all CMS data directly from Google Sheets.
 * This allows for free hosting on static platforms like Vercel/Netlify.
 */
export const getCmsData = async () => {
  try {
    const fetchSheet = async (url: string) => {
      const response = await axios.get(url);
      return parseCSV(response.data);
    };

    const [stats, programs, events, team, contacts, values] = await Promise.all([
      fetchSheet(googleSheetsConfig.sheets.stats),
      fetchSheet(googleSheetsConfig.sheets.programs),
      fetchSheet(googleSheetsConfig.sheets.events),
      fetchSheet(googleSheetsConfig.sheets.team),
      fetchSheet(googleSheetsConfig.sheets.contacts),
      fetchSheet(googleSheetsConfig.sheets.values),
    ]);

    return {
      stats,
      programs,
      events,
      team,
      contacts,
      values,
    };
  } catch (error) {
    console.error('Error fetching CMS data from Google Sheets:', error);
    return null;
  }
};

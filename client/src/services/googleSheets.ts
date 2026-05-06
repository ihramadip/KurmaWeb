export const googleSheetsConfig = {
  sheets: {
    stats: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRY5ZWKHweWSKW2s_f1L5-Qrfx0z1eYHK5sKzKzlsQrKrbPwQOUYjZWr-MdykH3yulaVRjXZ0yo-JXi/pub?gid=0&single=true&output=csv',
    programs: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRY5ZWKHweWSKW2s_f1L5-Qrfx0z1eYHK5sKzKzlsQrKrbPwQOUYjZWr-MdykH3yulaVRjXZ0yo-JXi/pub?gid=939888680&single=true&output=csv',
    events: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRY5ZWKHweWSKW2s_f1L5-Qrfx0z1eYHK5sKzKzlsQrKrbPwQOUYjZWr-MdykH3yulaVRjXZ0yo-JXi/pub?gid=579401051&single=true&output=csv',
    team: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRY5ZWKHweWSKW2s_f1L5-Qrfx0z1eYHK5sKzKzlsQrKrbPwQOUYjZWr-MdykH3yulaVRjXZ0yo-JXi/pub?gid=788268810&single=true&output=csv',
    contacts: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRY5ZWKHweWSKW2s_f1L5-Qrfx0z1eYHK5sKzKzlsQrKrbPwQOUYjZWr-MdykH3yulaVRjXZ0yo-JXi/pub?gid=1670390048&single=true&output=csv',
    values: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRY5ZWKHweWSKW2s_f1L5-Qrfx0z1eYHK5sKzKzlsQrKrbPwQOUYjZWr-MdykH3yulaVRjXZ0yo-JXi/pub?gid=584319229&single=true&output=csv',
  }
};

/**
 * Helper to parse CSV string to JSON array
 */
export const parseCSV = (csvText: string) => {
  const lines = csvText.split(/\r?\n/);
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map(h => h.trim());
  const result = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    
    // Simple CSV parser that handles basic commas (not complex quoted strings, but enough for this project)
    const currentLine = lines[i].split(',');
    const obj: any = {};

    headers.forEach((header, index) => {
      obj[header] = currentLine[index]?.trim() || '';
    });

    result.push(obj);
  }

  return result;
};

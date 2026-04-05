import type { OpenStatus } from '@/types';

// Wed=3, Thu=4, Fri=5, Sat=6 — all 11:00–20:00 ET
const OPEN_DAYS: Record<number, { open: number; close: number }> = {
  3: { open: 11, close: 20 },
  4: { open: 11, close: 20 },
  5: { open: 11, close: 20 },
  6: { open: 11, close: 20 },
};

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getEasternParts(): { day: number; hour: number; minute: number } {
  // DST-safe: always parse from locale string in ET
  const et = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', hour12: false });
  // Format: "M/D/YYYY, HH:MM:SS"
  const [, timePart] = et.split(', ');
  const [hourStr, minuteStr] = timePart.split(':');
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  // Get day of week in ET
  const etDateStr = new Date().toLocaleDateString('en-US', { timeZone: 'America/New_York', weekday: 'short' });
  const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = shortDays.indexOf(etDateStr.split(',')[0] ?? etDateStr.trim());

  return { day, hour, minute };
}

export function getOpenStatus(): OpenStatus {
  const { day, hour, minute } = getEasternParts();
  const todayHours = OPEN_DAYS[day];

  if (todayHours) {
    const openMinutes = todayHours.open * 60;
    const closeMinutes = todayHours.close * 60;
    const nowMinutes = hour * 60 + minute;

    if (nowMinutes >= openMinutes && nowMinutes < closeMinutes) {
      return {
        isOpen: true,
        label: 'Open Now',
        nextChange: 'Closes at 8 PM',
      };
    }

    if (nowMinutes < openMinutes) {
      return {
        isOpen: false,
        label: 'Closed',
        nextChange: `Opens today at 11 AM`,
      };
    }
  }

  // Find next open day
  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7;
    if (OPEN_DAYS[nextDay]) {
      return {
        isOpen: false,
        label: 'Closed',
        nextChange: `Opens ${DAY_NAMES[nextDay]} at 11 AM`,
      };
    }
  }

  return { isOpen: false, label: 'Closed', nextChange: 'Wed–Sat 11 AM–8 PM' };
}

export const HOURS_DISPLAY = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: 'Closed' },
  { day: 'Wednesday', hours: '11:00 AM – 8:00 PM' },
  { day: 'Thursday', hours: '11:00 AM – 8:00 PM' },
  { day: 'Friday', hours: '11:00 AM – 8:00 PM' },
  { day: 'Saturday', hours: '11:00 AM – 8:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

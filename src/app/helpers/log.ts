import moment from 'moment';

const colors: { [key: string]: string } = {
  info: '36',
  error: '31;1',
  warn: '33',
  debug: '90',
};

const formatDate = (date: Date) => moment(date).format('HH:mm:ss');

const colorizeText = (text: string, color: string) => {
  if (process.stdout.isTTY) {
    return `\x1B[${color}m${text}\x1B[0m`;
  }
  return text;
};

const log = (message: string, level: string) => {
  const formattedMessage = `${colorizeText(formatDate(new Date()), '30;1')} ${message}`;
  const labelColor = colors[level.toLowerCase()] || '32';
  console.debug(`[${colorizeText(level.toUpperCase(), labelColor)}] ${formattedMessage}`);
};

export const clear = () => console.clear();
export const info = (message: string) => log(message, 'info');
export const error = (message: string) => log(message, 'error');
export const warn = (message: string) => log(message, 'warn');
export const debug = (message: string) => log(message, 'debug');

clear();

export default {
  clear,
  info,
  error,
  warn,
  debug,
};
